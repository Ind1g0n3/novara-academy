import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = process.env.BLOG_DIST_DIR || path.join(root, 'dist');

// Escape HTML entities safely
function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
  })[character]);
}

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

function parseDate(dateStr) {
  const match = dateStr.match(/(?:Updated\s+)?([A-Za-z]+)\s+(\d{1,2}),?\s+(\d{4})/i);
  if (match) {
    const months = {
      january: '01', february: '02', march: '03', april: '04',
      may: '05', june: '06', july: '07', august: '08',
      september: '09', october: '10', november: '11', december: '12',
    };
    const month = months[match[1].toLowerCase()] || '09';
    const day = match[2].padStart(2, '0');
    const year = match[3];
    return `${year}-${month}-${day}`;
  }
  return new Date().toISOString().split('T')[0];
}

function setHead(html, { title, description, canonical, type = 'website', image = 'https://novarasystems.store/og-preview.png', jsonLd = [] }) {
  let result = html
    .replace(/<title>[\s\S]*?<\/title>/i, '')
    .replace(/\s*<meta\s+(?:name|property)=["'](?:description|og:[^"']+|twitter:[^"']+)["'][^>]*>/gi, '')
    .replace(/\s*<link\s+rel=["']canonical["'][^>]*>/gi, '')
    .replace(/\s*<script\s+type=["']application\/ld\+json["']>[\s\S]*?<\/script>/gi, '');

  const tags = [
    `<title>${escapeHtml(title)}</title>`,
    `<meta name="description" content="${escapeHtml(description)}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:title" content="${escapeHtml(title)}" />`,
    `<meta property="og:description" content="${escapeHtml(description)}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:type" content="${type}" />`,
    `<meta property="og:image" content="${escapeHtml(image)}" />`,
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ...jsonLd.map((data) => `<script type="application/ld+json">${safeJson(data)}</script>`),
  ].join('\n    ');

  return result.replace('</head>', `    ${tags}\n  </head>`);
}

function renderMarkdownLine(line) {
  let text = line.trim();
  if (!text) return '';

  if (text.startsWith('### ')) {
    return `<h3 class="text-xl md:text-2xl font-bold text-white mt-8 mb-4 font-mono">${escapeHtml(text.slice(4))}</h3>`;
  }
  if (text.startsWith('## ')) {
    return `<h2 class="text-2xl md:text-3xl font-bold text-white mt-10 mb-5 font-mono">${escapeHtml(text.slice(3))}</h2>`;
  }
  if (text.startsWith('# ')) {
    return `<h1 class="text-3xl md:text-4xl font-bold text-white mt-12 mb-6 font-mono">${escapeHtml(text.slice(2))}</h1>`;
  }
  if (text.startsWith('- ')) {
    const content = renderInline(text.slice(2));
    return `<li class="text-[#cbd5e1] mb-2 leading-relaxed ml-4 list-disc">${content}</li>`;
  }
  if (text.startsWith('> ')) {
    const content = renderInline(text.slice(2));
    return `<blockquote class="border-l-4 border-[#C9A84C] bg-[#C9A84C]/5 px-5 py-3 my-4 text-[#E8D5A3] italic rounded-r-lg">${content}</blockquote>`;
  }
  if (text.startsWith('```') || text.endsWith('}')) {
    return `<pre class="bg-[#0B1120] border border-white/10 p-4 rounded-xl font-mono text-xs text-[#E8D5A3] overflow-x-auto my-4"><code>${escapeHtml(text)}</code></pre>`;
  }

  const content = renderInline(text);
  return `<p class="text-base text-[#94A3B8] leading-relaxed mb-4">${content}</p>`;
}

function renderInline(raw) {
  let escaped = escapeHtml(raw);
  // Bold: **text**
  escaped = escaped.replace(/\*\*(.*?)\*\*/g, '<strong class="text-white font-semibold">$1</strong>');
  // Inline code: `code`
  escaped = escaped.replace(/`([^`]+)`/g, '<code class="px-1.5 py-0.5 rounded bg-white/10 font-mono text-xs text-[#F5E2B3]">$1</code>');
  // Markdown links: [text](url)
  escaped = escaped.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" class="text-[#C9A84C] hover:underline font-medium" target="_blank" rel="noopener noreferrer">$1</a>');
  return escaped;
}

const skoolBannerHtml = `
<aside class="my-12 p-6 md:p-8 rounded-2xl border border-[#C9A84C]/40 bg-[#070D18] text-[#EDF0F5] shadow-2xl relative overflow-hidden not-prose">
  <div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
    <div class="max-w-xl">
      <div class="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#C9A84C]/15 text-[#E8D5A3] border border-[#C9A84C]/30">🔥 Novara Media Inner Circle</div>
      <h3 class="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 font-mono">Deploy the Sovereign Media OS Today</h3>
      <p class="text-sm text-[#8B9BB4] leading-relaxed">Join 3,500+ operators deploying autonomous multi-agent pipelines, 4K NVENC video compilers, and unbannable accounts inside our Skool community.</p>
    </div>
    <a href="https://www.skool.com/novara-ai-media-group-5745" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 border border-[#C9A84C] bg-[#C9A84C] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300 shrink-0 rounded-xl shadow-lg">Join Community →</a>
  </div>
</aside>`;

function renderArticleShell(article) {
  const takeaways = article.keyTakeaways && article.keyTakeaways.length > 0
    ? `
    <div class="my-8 p-6 rounded-2xl border border-[#C9A84C]/30 bg-[#C9A84C]/5">
      <h3 class="text-xs font-mono font-bold uppercase tracking-wider text-[#F5E2B3] mb-3 flex items-center gap-2">
        ⚡ Key Architectural Insights
      </h3>
      <ul class="space-y-2">
        ${article.keyTakeaways.map((t) => `<li class="text-sm text-[#cbd5e1] flex items-start gap-2"><span class="text-[#C9A84C] font-bold">•</span><span>${escapeHtml(t)}</span></li>`).join('\n')}
      </ul>
    </div>`
    : '';

  const bodyHtml = article.content.map(renderMarkdownLine).join('\n');

  return `
  <div class="min-h-screen bg-[#05080F] text-[#EDF0F5] relative selection:bg-[#C9A84C]/30 selection:text-[#E8D5A3]">
    <!-- Top Nav -->
    <header class="border-b border-white/10 bg-[#05080F]/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center gap-3 group">
          <img src="/novara-logo.svg" alt="Novara Systems" class="w-8 h-8 rounded-lg" />
          <span class="font-mono text-sm font-bold tracking-wider text-white group-hover:text-[#C9A84C] transition-colors">NOVARA SYSTEMS</span>
        </a>
        <div class="flex items-center gap-4">
          <a href="/#blog" class="text-xs font-mono text-[#94A3B8] hover:text-[#C9A84C] transition-colors">← All Blueprints</a>
          <a href="https://www.skool.com/novara-ai-media-group-5745" target="_blank" rel="noopener noreferrer" class="px-4 py-1.5 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/50 text-[#F5E2B3] text-xs font-mono font-bold hover:bg-[#C9A84C] hover:text-black transition-all">Join Skool</a>
        </div>
      </div>
    </header>

    <!-- Main Content Canvas -->
    <main class="max-w-4xl mx-auto px-6 py-16">
      <article class="prose prose-invert max-w-none">
        <!-- Breadcrumb / Category -->
        <div class="flex items-center gap-3 mb-6">
          <span class="px-3 py-1 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#F5E2B3] text-xs font-mono font-bold uppercase tracking-wider">${escapeHtml(article.category)}</span>
          <span class="text-xs font-mono text-[#8B9BB4]">${escapeHtml(article.readTime)}</span>
          <span class="text-xs font-mono text-[#8B9BB4]">• ${escapeHtml(article.publishDate)}</span>
        </div>

        <!-- Title & Excerpt -->
        <h1 class="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">${escapeHtml(article.title)}</h1>
        <p class="text-lg md:text-xl text-[#94A3B8] leading-relaxed mb-8 border-b border-white/10 pb-8">${escapeHtml(article.excerpt)}</p>

        <!-- Key Takeaways Callout -->
        ${takeaways}

        <!-- Body Prose -->
        <div class="article-body mt-8">
          ${bodyHtml}
        </div>

        <!-- Skool Community Promo -->
        ${skoolBannerHtml}

        <!-- Author / Footer Box -->
        <div class="border-t border-white/10 pt-8 mt-12 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h4 class="text-sm font-mono font-bold text-white uppercase tracking-wider">Published by Novara Systems Engineering</h4>
            <p class="text-xs text-[#8B9BB4]">Autonomous Multi-Agent AI OS, 4K GPU media engines, and sovereign marketing systems.</p>
          </div>
          <a href="/#blog" class="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-xs font-mono text-[#E8D5A3] hover:border-[#C9A84C] transition-all">← Back to All Articles</a>
        </div>
      </article>
    </main>
  </div>`;
}

function renderBlogIndex(articles) {
  const cards = articles.map((article) => `
    <article class="p-6 rounded-2xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C]/50 transition-all flex flex-col justify-between group">
      <div>
        <div class="flex items-center justify-between gap-2 mb-3">
          <span class="px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#F5E2B3] text-[10px] font-mono font-bold uppercase">${escapeHtml(article.category)}</span>
          <span class="text-[11px] font-mono text-[#8B9BB4]">${escapeHtml(article.readTime)}</span>
        </div>
        <h2 class="text-xl font-bold text-white group-hover:text-[#F5E2B3] transition-colors mb-3">
          <a href="/blog/${escapeHtml(article.slug)}">${escapeHtml(article.title)}</a>
        </h2>
        <p class="text-xs text-[#8B9BB4] leading-relaxed mb-6 line-clamp-3">${escapeHtml(article.excerpt)}</p>
      </div>
      <a href="/blog/${escapeHtml(article.slug)}" class="inline-flex items-center gap-2 text-xs font-mono text-[#C9A84C] group-hover:translate-x-1 transition-transform">Read Complete Blueprint →</a>
    </article>`).join('\n');

  return `
  <div class="min-h-screen bg-[#05080F] text-[#EDF0F5] relative selection:bg-[#C9A84C]/30 selection:text-[#E8D5A3]">
    <header class="border-b border-white/10 bg-[#05080F]/80 backdrop-blur-md sticky top-0 z-40 px-6 py-4">
      <div class="max-w-5xl mx-auto flex items-center justify-between">
        <a href="/" class="flex items-center gap-3">
          <img src="/novara-logo.svg" alt="Novara Systems" class="w-8 h-8 rounded-lg" />
          <span class="font-mono text-sm font-bold tracking-wider text-white">NOVARA SYSTEMS</span>
        </a>
        <a href="/" class="text-xs font-mono text-[#94A3B8] hover:text-[#C9A84C]">← Home</a>
      </div>
    </header>
    <main class="max-w-6xl mx-auto px-6 py-16">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-3xl md:text-5xl font-bold text-white mb-4 font-mono">Official Knowledge Lab &amp; Articles</h1>
        <p class="text-base text-[#94A3B8]">In-depth engineering blueprints on autonomous multi-agent pipelines, 4K NVENC video rendering, anti-ban infrastructure, and high-ticket scaling.</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        ${cards}
      </div>
    </main>
  </div>`;
}

function generateSitemapXml(articles) {
  const now = new Date().toISOString().split('T')[0];
  const urls = [
    `  <url>\n    <loc>https://novarasystems.store/</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>1.0</priority>\n  </url>`,
    `  <url>\n    <loc>https://novarasystems.store/blog</loc>\n    <lastmod>${now}</lastmod>\n    <changefreq>daily</changefreq>\n    <priority>0.9</priority>\n  </url>`,
  ];

  for (const article of articles) {
    const postDate = parseDate(article.publishDate || now);
    urls.push(
      `  <url>\n    <loc>https://novarasystems.store/blog/${article.slug}</loc>\n    <lastmod>${postDate}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`
    );
  }

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join('\n')}\n</urlset>\n`;
}

async function main() {
  console.log('[*] Initializing static prerender for novarasystems.store...');

  // Step 1: Load blogData.ts via Vite SSR loader
  const vite = await createServer({
    root,
    server: { middlewareMode: true },
    appType: 'custom',
  });

  const blogModule = await vite.ssrLoadModule('./src/data/blogData.ts');
  const articles = blogModule.ROTATING_BLOG_POSTS || [];
  await vite.close();

  console.log(`[+] Loaded ${articles.length} articles from src/data/blogData.ts`);

  // Step 2: Read template dist/index.html
  const templatePath = path.join(dist, 'index.html');
  const template = await fs.readFile(templatePath, 'utf8');

  // Step 3: Prerender each individual article page
  for (const article of articles) {
    const canonical = `https://novarasystems.store/blog/${article.slug}`;
    const postDate = parseDate(article.publishDate);

    const jsonLd = [
      {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: article.title,
        description: article.excerpt,
        author: {
          '@type': 'Organization',
          name: 'Novara Systems',
          url: 'https://novarasystems.store',
        },
        publisher: {
          '@type': 'Organization',
          name: 'Novara Systems',
          url: 'https://novarasystems.store',
        },
        datePublished: postDate,
        dateModified: postDate,
        mainEntityOfPage: {
          '@type': 'WebPage',
          '@id': canonical,
        },
      },
      {
        '@context': 'https://schema.org',
        '@type': 'EducationalOrganization',
        name: 'Novara Media Inner Circle',
        url: 'https://www.skool.com/novara-ai-media-group-5745',
        description: 'Elite community and academy teaching autonomous AI video engineering and sovereign media production.',
      },
    ];

    const html = setHead(template, {
      title: `${article.title} • Novara Systems`,
      description: article.excerpt,
      canonical,
      type: 'article',
      image: 'https://novarasystems.store/og-preview.png',
      jsonLd,
    }).replace('<div id="root"></div>', `<div id="root">${renderArticleShell(article)}</div>`);

    const articleDir = path.join(dist, 'blog', article.slug);
    await fs.mkdir(articleDir, { recursive: true });
    await fs.writeFile(path.join(articleDir, 'index.html'), html, 'utf8');
  }

  // Step 4: Prerender the /blog listing page
  const blogListHtml = setHead(template, {
    title: 'Official Knowledge Lab & Blueprints • Novara Systems',
    description: 'Practical engineering breakdowns on multi-agent pipelines, 4K NVENC video rendering, anti-ban infrastructure, and agency monetization.',
    canonical: 'https://novarasystems.store/blog',
  }).replace('<div id="root"></div>', `<div id="root">${renderBlogIndex(articles)}</div>`);

  const blogDir = path.join(dist, 'blog');
  await fs.mkdir(blogDir, { recursive: true });
  await fs.writeFile(path.join(blogDir, 'index.html'), blogListHtml, 'utf8');
  console.log(`[+] Prerendered /blog and ${articles.length} static article pages to ${dist}/blog/...`);

  // Step 5: Dynamic sitemap.xml generation
  const sitemapXml = generateSitemapXml(articles);
  await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemapXml, 'utf8');
  await fs.writeFile(path.join(root, 'public', 'sitemap.xml'), sitemapXml, 'utf8');
  console.log(`[+] Generated dynamic sitemap.xml with ${articles.length + 2} URLs.`);
}

main().catch((err) => {
  console.error('[!] Prerender build failed:', err);
  process.exit(1);
});
