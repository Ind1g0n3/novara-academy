import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { escapeHtml, loadArticles, generateSitemapXml } from './blog-content.mjs';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const dist = process.env.BLOG_DIST_DIR || path.join(root, 'dist');
const template = await fs.readFile(path.join(dist, 'index.html'), 'utf8');
const articles = await loadArticles(process.env.BLOG_CONTENT_DIR || path.join(root, 'content/blog'));

function safeJson(value) {
  return JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e').replace(/&/g, '\\u0026');
}

function setHead(html, { title, description, canonical, type = 'website', image = '', jsonLd = [] }) {
  let result = html.replace(/<title>[\s\S]*?<\/title>/i, '')
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
    '<meta name="twitter:card" content="summary_large_image" />',
    `<meta name="twitter:title" content="${escapeHtml(title)}" />`,
    `<meta name="twitter:description" content="${escapeHtml(description)}" />`,
    ...(image ? [
      `<meta property="og:image" content="${escapeHtml(image)}" />`,
      `<meta name="twitter:image" content="${escapeHtml(image)}" />`,
    ] : []),
    ...jsonLd.map(data => `<script type="application/ld+json">${safeJson(data)}</script>`),
  ].join('\n    ');
  return result.replace('</head>', `    ${tags}\n  </head>`);
}

function formatDate(value) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value));
}

function shell(content) {
  return `<div id="root"><div class="bg-[#05080F] text-[#EDF0F5] font-sans antialiased relative min-h-screen"><main class="blog-article-shell relative z-10 px-6 pt-36 pb-24">${content}</main></div></div>`;
}

const skoolBannerHtml = `<aside class="skool-promo-card my-12 p-6 md:p-8 rounded-xl border border-[#C9A84C]/40 bg-[#070D18] text-[#EDF0F5] shadow-2xl relative overflow-hidden not-prose">
<div class="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
<div class="max-w-xl">
<div class="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#C9A84C]/15 text-[#E8D5A3] border border-[#C9A84C]/30">🔥 Novara Media Inner Circle</div>
<h3 class="text-xl md:text-2xl font-bold tracking-tight text-white mb-2 font-serif">Join the Novara AI Media Group</h3>
<p class="text-sm text-[#8B9BB4] leading-relaxed">Get direct access to our autonomous media systems, production blueprints, private SOPs, and weekly live engineering masterclasses.</p>
</div>
<a href="https://www.skool.com/novara-ai-media-group-5745" target="_blank" rel="noopener noreferrer" class="inline-flex items-center justify-center px-6 py-3 border border-[#C9A84C] bg-[#C9A84C] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#E8D5A3] transition-all duration-300 shrink-0">Join Community →</a>
</div>
</aside>`;

const sidebarSkoolWidget = `<div class="p-4 rounded border border-[#C9A84C]/30 bg-[#050B14] mb-2">
<span class="text-[10px] font-mono tracking-widest uppercase text-[#C9A84C] block mb-1">👑 Community</span>
<p class="text-xs text-[#8B9BB4] mb-3 leading-snug">Connect with operators in the Novara AI Media Group.</p>
<a href="https://www.skool.com/novara-ai-media-group-5745" target="_blank" rel="noopener noreferrer" class="block text-center py-2 px-3 bg-[#C9A84C] text-black text-[11px] font-bold tracking-wider uppercase hover:bg-[#E8D5A3] transition-colors">Join Skool →</a>
</div>`;

function articleBody(article) {
  if (article.oracle_layout === 'oracle-editorial-v1') {
    const hero = article.hero_image ? `<figure class="oracle-generated-image hero"><img src="${escapeHtml(article.hero_image)}" alt="${escapeHtml(article.hero_alt || article.title)}" loading="eager" /><figcaption>${escapeHtml(article.hero_alt || article.title)}</figcaption></figure>` : '';
    const keywords = (article.keywords || []).map(value => escapeHtml(value)).join(' · ') || 'Not set';
    return `<article class="oracle-editorial-layout">
<div class="oracle-reading-canvas">
<a href="/blog" class="oracle-back-link">← All articles</a>
<div class="oracle-article-kicker">Novara · Editorial intelligence</div>
${hero}
<h1>${escapeHtml(article.title)}</h1>
<p class="oracle-article-dek">${escapeHtml(article.excerpt)}</p>
<div class="oracle-article-byline"><time datetime="${escapeHtml(article.date)}">Published ${escapeHtml(formatDate(article.date))}</time></div>
<div class="oracle-article-body blog-prose">${article.bodyHtml}</div>
${skoolBannerHtml}
</div>
<aside class="oracle-article-sidebar">${sidebarSkoolWidget}<span>SEO brief</span><dl><div><dt>Focus phrase</dt><dd>${escapeHtml(article.focus_phrase || 'Not set')}</dd></div><div><dt>SEO title</dt><dd>${escapeHtml(article.seo_title)}</dd></div><div><dt>Meta description</dt><dd>${escapeHtml(article.meta_description)}</dd></div><div><dt>Topics</dt><dd>${keywords}</dd></div></dl></aside>
</article>`;
  }
  return `<article class="blog-article max-w-4xl mx-auto rounded-3xl border border-white/10 bg-[#05080F]/90 px-6 py-10 md:px-14 md:py-16">
<header class="mb-12 border-b border-white/10 pb-10">
<a href="/blog" class="mb-8 inline-flex text-brand-gold">← All articles</a>
<h1 class="text-4xl md:text-6xl font-bold">${escapeHtml(article.title)}</h1>
<p class="text-lg text-white/75">${escapeHtml(article.excerpt)}</p>
<time datetime="${escapeHtml(article.date)}">Published ${escapeHtml(formatDate(article.date))}</time>
</header>
<div class="blog-prose">${article.bodyHtml}</div>
${skoolBannerHtml}
</article>`;
}

for (const article of articles) {
  const html = setHead(template, {
    title: article.seo_title,
    description: article.meta_description,
    canonical: article.canonical_url,
    type: 'article',
    image: article.hero_image ? new URL(article.hero_image, article.canonical_url).href : '',
    jsonLd: article.jsonLd,
  }).replace('<div id="root"></div>', shell(articleBody(article)));
  const directory = path.join(dist, 'blog', article.slug);
  await fs.mkdir(directory, { recursive: true });
  await fs.writeFile(path.join(directory, 'index.html'), html);
}

const list = articles.length
  ? `<section class="max-w-5xl mx-auto"><h1 class="text-5xl font-bold">Thought Leadership</h1><div>${articles.map(article => `<article><time datetime="${escapeHtml(article.date)}">${escapeHtml(formatDate(article.date))}</time><h2><a href="/blog/${escapeHtml(article.slug)}">${escapeHtml(article.title)}</a></h2><p>${escapeHtml(article.excerpt)}</p></article>`).join('\n')}</div></section>`
  : '<section class="max-w-5xl mx-auto"><h1>Thought Leadership</h1><p>New insights are in production. Check back soon.</p></section>';
const blogHtml = setHead(template, {
  title: 'Insights & Articles | Novara',
  description: 'Practical guidance from Novara on digital strategy, search visibility, and building brands that last.',
  canonical: 'https://novaramedia.store/blog',
}).replace('<div id="root"></div>', shell(list));
await fs.mkdir(path.join(dist, 'blog'), { recursive: true });
await fs.writeFile(path.join(dist, 'blog', 'index.html'), blogHtml);
console.log(`Prerendered /blog and ${articles.length} article page${articles.length === 1 ? '' : 's'}.`);

// Dynamic sitemap.xml generation with all articles
const sitemapXml = generateSitemapXml(articles);
await fs.writeFile(path.join(dist, 'sitemap.xml'), sitemapXml);
if (!process.env.BLOG_DIST_DIR) {
  try {
    await fs.writeFile(path.join(root, 'public', 'sitemap.xml'), sitemapXml);
  } catch {}
}
console.log(`Generated dynamic sitemap.xml with ${articles.length + 2} URLs.`);


