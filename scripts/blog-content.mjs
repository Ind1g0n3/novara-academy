import fs from 'node:fs/promises';
import path from 'node:path';

const REQUIRED = ['title', 'slug', 'excerpt', 'meta_description', 'canonical_url', 'date'];
const SLUG = /^[a-z0-9]+(?:-[a-z0-9]+)*$/;

export function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, character => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;',
  })[character]);
}

function parseValue(raw, file, key) {
  const value = raw.trim();
  if (!value) return '';
  try {
    return JSON.parse(value);
  } catch {
    // Oracle's frontmatter is a JSON-subset of YAML, but accepting an unquoted
    // scalar makes failures from dates and simple legacy values less surprising.
    if (/^[^\[\]{},]+$/.test(value)) return value;
    throw new Error(`${file}: frontmatter value for "${key}" is not valid JSON`);
  }
}

export function parseFrontmatter(source, file = '<markdown>') {
  const normalized = source.replace(/^\uFEFF/, '').replace(/\r\n?/g, '\n');
  const match = normalized.match(/^---\n([\s\S]*?)\n---(?:\n|$)/);
  if (!match) throw new Error(`${file}: missing --- frontmatter block`);
  const data = {};
  for (const [index, line] of match[1].split('\n').entries()) {
    if (!line.trim() || line.trimStart().startsWith('#')) continue;
    const field = line.match(/^([A-Za-z_][\w-]*):\s*(.*)$/);
    if (!field) throw new Error(`${file}:${index + 2}: unsupported frontmatter syntax`);
    if (Object.hasOwn(data, field[1])) throw new Error(`${file}: duplicate frontmatter key "${field[1]}"`);
    data[field[1]] = parseValue(field[2], file, field[1]);
  }
  return { data, body: normalized.slice(match[0].length) };
}

function safeUrl(raw) {
  const url = String(raw).trim();
  if (/^(https?:|mailto:|tel:)/i.test(url) || /^(\/|#)/.test(url)) return url;
  return '#';
}

function markdownDestination(raw) {
  let value = String(raw).replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>');
  if (value.startsWith('<') && value.endsWith('>')) value = value.slice(1, -1);
  return value;
}

function markdownLabel(raw) {
  return String(raw).replace(/\\([\[\]\\])/g, '$1');
}

function sourcePlatform(url, supplied = '') {
  const platform = String(supplied || '').trim().toLowerCase();
  if (platform) return platform;
  try {
    const host = new URL(url).hostname.replace(/^www\./, '').toLowerCase();
    return host === 'x.com' || host === 'twitter.com' ? 'x' : 'web';
  } catch { return 'web'; }
}

function normalizeSources(value, file) {
  if (value === undefined) return [];
  if (!Array.isArray(value)) throw new Error(`${file}: sources must be an array`);
  return value.map((source, index) => {
    if (!source || typeof source !== 'object' || Array.isArray(source)) {
      throw new Error(`${file}: sources[${index}] must be an object`);
    }
    const url = String(source.url || '').trim();
    try {
      const parsed = new URL(url);
      if (!/^https?:$/.test(parsed.protocol)) throw new Error('unsupported protocol');
    } catch { throw new Error(`${file}: sources[${index}].url must be an absolute HTTP URL`); }
    return {
      url,
      title: String(source.title || `Source ${index + 1}`).trim(),
      platform: sourcePlatform(url, source.platform),
    };
  });
}

function extractMarkdownSources(markdown) {
  const sourceHeading = /^##[ \t]+Sources[ \t]*$/im.exec(markdown);
  if (!sourceHeading) return { body: markdown, sources: [] };
  const afterHeading = sourceHeading.index + sourceHeading[0].length;
  const nextHeading = /^#{1,2}[ \t]+/m.exec(markdown.slice(afterHeading));
  const sectionEnd = nextHeading ? afterHeading + nextHeading.index : markdown.length;
  const section = markdown.slice(afterHeading, sectionEnd);
  const mapping = /^\s*\d+[.)]\s+\[((?:\\.|[^\]])+)\]\((<[^>\n]+>|[^\s)]+)\)\s*$/;
  const sources = [];
  const retained = [];
  for (const line of section.split('\n')) {
    const match = line.match(mapping);
    if (!match) { retained.push(line); continue; }
    const url = markdownDestination(match[2]);
    if (!/^https?:/i.test(url)) { retained.push(line); continue; }
    sources.push({ url, title: markdownLabel(match[1]), platform: sourcePlatform(url) });
  }
  const notes = retained.join('\n').trim();
  const replacement = notes ? `## Sources\n\n${notes}\n\n` : '';
  return {
    body: `${markdown.slice(0, sourceHeading.index).trimEnd()}\n\n${replacement}${markdown.slice(sectionEnd).trimStart()}`.trim(),
    sources,
  };
}

function safeEditorialText(value) {
  return String(value || '').replace(/[\r\n#\[\]<>]/g, ' ').replace(/\s+/g, ' ').trim();
}

function ensureEditorialSections(markdown, data) {
  const title = safeEditorialText(data.title) || 'this development';
  const focus = safeEditorialText(data.focus_phrase) || title;
  const excerpt = safeEditorialText(data.excerpt) || `This article explains the practical significance of ${focus}.`;
  const sections = [];
  if (!/^##[ \t]+Why this matters to/im.test(markdown)) {
    sections.push(`## Why this matters to Novara\n\nAt Novara, I help businesses turn AI-assisted media production, automation, and search visibility into practical systems that create durable value. This article about ${title} is relevant to that work because it connects a current development to the decisions brands and operators make about ${focus}. The goal is to explain the story clearly, show why it matters to the services we offer, and give readers a useful path from information to implementation.`);
  }
  sections.push(markdown.trim());
  if (!/^##[ \t]+Frequently Asked Questions[ \t]*$/im.test(markdown)) {
    sections.push(`## Frequently Asked Questions\n\n### What does ${focus} mean for businesses?\n\n${excerpt}\n\n### Why is ${focus} important for AI search and digital visibility?\n\nClear definitions, direct answers, structured evidence, and useful original analysis make this topic easier for readers and answer engines to understand and cite.\n\n### How can Novara help apply ${focus}?\n\nNovara connects the insight in this article to practical media production, automation, content systems, and search visibility work built around a business's audience and goals.`);
  }
  if (!/^##[ \t]+Put this insight to work with/im.test(markdown)) {
    sections.push(`## Put this insight to work with Novara\n\nIf ${title} affects how your business approaches ${focus}, Novara can help turn the insight into a relevant content, automation, and search visibility plan. Explore what we offer and contact us to connect this specific story to your audience, workflow, and measurable business goals.`);
  }
  return sections.filter(Boolean).join('\n\n');
}

function extractBusinessIntro(markdown) {
  const heading = /^##[ \t]+Why this matters to[^\n]*$/im.exec(markdown);
  if (!heading) return { body: markdown, introHtml: '' };
  const afterHeading = heading.index + heading[0].length;
  const nextHeading = /^##[ \t]+/m.exec(markdown.slice(afterHeading));
  if (!nextHeading) return { body: markdown, introHtml: '' };
  const sectionEnd = afterHeading + nextHeading.index;
  const introMarkdown = markdown.slice(afterHeading, sectionEnd).trim();
  return {
    body: `${markdown.slice(0, heading.index).trimEnd()}\n\n${markdown.slice(sectionEnd).trimStart()}`.trim(),
    introHtml: renderMarkdown(introMarkdown),
  };
}

function plainMarkdown(value) {
  return String(value)
    .replace(/\[(\d+)\]/g, '')
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/\[([^\]]+)\]\([^)]*\)/g, '$1')
    .replace(/[*_`>#-]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

function extractFaq(markdown) {
  const heading = /^##[ \t]+Frequently Asked Questions[ \t]*$/im.exec(markdown);
  if (!heading) return [];
  const afterHeading = heading.index + heading[0].length;
  const nextH2 = /^##[ \t]+/m.exec(markdown.slice(afterHeading));
  const section = markdown.slice(afterHeading, nextH2 ? afterHeading + nextH2.index : markdown.length);
  const questions = [...section.matchAll(/^###[ \t]+(.+?\?)[ \t]*$/gm)];
  return questions.map((match, index) => {
    const answerStart = match.index + match[0].length;
    const answerEnd = index + 1 < questions.length ? questions[index + 1].index : section.length;
    return { question: plainMarkdown(match[1]), answer: plainMarkdown(section.slice(answerStart, answerEnd)) };
  }).filter(item => item.question && item.answer);
}

function inlineMarkdown(source) {
  const tokens = [];
  let text = String(source).replace(/`([^`\n]+)`/g, (_, code) => {
    tokens.push(`<code>${escapeHtml(code)}</code>`);
    return `\u0000${tokens.length - 1}\u0000`;
  });
  text = escapeHtml(text);
  text = text.replace(/!\[((?:\\.|[^\]])*)\]\((<[^>\n]+>|[^\s)]+)(?:\s+&quot;(.*?)&quot;)?\)/g,
    (_, alt, url, title) => `<img src="${escapeHtml(safeUrl(markdownDestination(url)))}" alt="${markdownLabel(alt)}"${title ? ` title="${title}"` : ''} loading="lazy" />`);
  text = text.replace(/\[((?:\\.|[^\]])+)\]\((<[^>\n]+>|[^\s)]+)(?:\s+&quot;(.*?)&quot;)?\)/g,
    (_, label, url, title) => {
      const href = safeUrl(markdownDestination(url));
      const external = /^https?:/i.test(href) ? ' target="_blank" rel="noopener noreferrer"' : '';
      return `<a href="${escapeHtml(href)}"${title ? ` title="${title}"` : ''}${external}>${markdownLabel(label)}</a>`;
    });
  text = text.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    .replace(/__([^_]+)__/g, '<strong>$1</strong>')
    .replace(/(^|[^*])\*([^*\n]+)\*/g, '$1<em>$2</em>')
    .replace(/(^|[^_])_([^_\n]+)_/g, '$1<em>$2</em>')
    .replace(/~~([^~]+)~~/g, '<del>$1</del>');
  return text.replace(/\u0000(\d+)\u0000/g, (_, index) => tokens[Number(index)]);
}

function headingId(text) {
  return String(text).replace(/<[^>]*>/g, '').toLowerCase().replace(/&[a-z#0-9]+;/g, '')
    .replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '') || 'section';
}

export function renderMarkdown(markdown) {
  const lines = String(markdown).replace(/\r\n?/g, '\n').split('\n');
  const output = [];
  let paragraph = [];
  let list = null;
  const flushParagraph = () => {
    if (paragraph.length) output.push(`<p>${inlineMarkdown(paragraph.join(' '))}</p>`);
    paragraph = [];
  };
  const closeList = () => {
    if (list) output.push(`</${list}>`);
    list = null;
  };

  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    if (/^```/.test(line)) {
      flushParagraph(); closeList();
      const language = line.slice(3).trim().replace(/[^\w-]/g, '');
      const code = [];
      index += 1;
      while (index < lines.length && !/^```\s*$/.test(lines[index])) code.push(lines[index++]);
      output.push(`<pre><code${language ? ` class="language-${escapeHtml(language)}"` : ''}>${escapeHtml(code.join('\n'))}</code></pre>`);
      continue;
    }
    const heading = line.match(/^(#{1,6})\s+(.+)$/);
    if (heading) {
      flushParagraph(); closeList();
      const content = inlineMarkdown(heading[2]);
      output.push(`<h${heading[1].length} id="${headingId(content)}">${content}</h${heading[1].length}>`);
      continue;
    }
    if (/^\s*(?:---+|\*\*\*+)\s*$/.test(line)) {
      flushParagraph(); closeList(); output.push('<hr />'); continue;
    }
    const item = line.match(/^\s*(?:([-+*])|(\d+)\.)\s+(.+)$/);
    if (item) {
      flushParagraph();
      const type = item[2] ? 'ol' : 'ul';
      if (list !== type) { closeList(); output.push(`<${type}>`); list = type; }
      output.push(`<li>${inlineMarkdown(item[3])}</li>`);
      continue;
    }
    const quote = line.match(/^>\s?(.*)$/);
    if (quote) {
      flushParagraph(); closeList(); output.push(`<blockquote><p>${inlineMarkdown(quote[1])}</p></blockquote>`); continue;
    }
    if (!line.trim()) { flushParagraph(); closeList(); continue; }
    paragraph.push(line.trim());
  }
  flushParagraph(); closeList();
  return output.join('\n');
}

export function parseArticle(source, file = '<markdown>') {
  const { data, body: rawBody } = parseFrontmatter(source, file);
  for (const key of REQUIRED) {
    if (typeof data[key] !== 'string' || !data[key].trim()) throw new Error(`${file}: required string frontmatter "${key}" is missing`);
  }
  if (!SLUG.test(data.slug)) throw new Error(`${file}: slug must contain lowercase words separated by hyphens`);
  try { new URL(data.canonical_url); } catch { throw new Error(`${file}: canonical_url must be an absolute URL`); }
  if (Number.isNaN(Date.parse(data.date))) throw new Error(`${file}: date must be a valid date`);
  if (data.dateModified !== undefined && (typeof data.dateModified !== 'string' || Number.isNaN(Date.parse(data.dateModified)))) {
    throw new Error(`${file}: dateModified must be a valid date`);
  }

  const jsonLd = [];
  let body = rawBody.replace(/<script\s+type=["']application\/ld\+json["']\s*>([\s\S]*?)<\/script>/gi, (_, json) => {
    try { jsonLd.push(JSON.parse(json)); }
    catch (error) { throw new Error(`${file}: invalid JSON-LD: ${error.message}`); }
    return '';
  });
  body = body.replace(/<!--\s*oracle(?:[^-]|-(?!->))*-->/gi, '');
  body = ensureEditorialSections(body, data);
  const extracted = extractMarkdownSources(body);
  const business = extractBusinessIntro(extracted.body);
  const faq = extractFaq(business.body);
  if (faq.length && !jsonLd.some(item => item?.['@type'] === 'FAQPage')) {
    jsonLd.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map(item => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: { '@type': 'Answer', text: item.answer },
      })),
    });
  }
  const mergedSources = [];
  for (const source of [...normalizeSources(data.sources, file), ...extracted.sources]) {
    if (!mergedSources.some(existing => existing.url === source.url)) mergedSources.push(source);
  }
  for (const schema of jsonLd) {
    const types = Array.isArray(schema?.['@type']) ? schema['@type'] : [schema?.['@type']];
    if (!types.some(type => type === 'Article' || type === 'BlogPosting')) continue;
    schema.citation = mergedSources.map(source => source.url);
    schema.isBasedOn = mergedSources.map(source => ({
      '@type': source.platform === 'x' ? 'SocialMediaPosting' : 'Article',
      url: source.url,
      name: source.title,
    }));
  }
  return {
    ...data,
    seo_title: typeof data.seo_title === 'string' && data.seo_title ? data.seo_title : data.title,
    description: typeof data.description === 'string' && data.description ? data.description : data.excerpt,
    keywords: Array.isArray(data.keywords) ? data.keywords.map(String) : (typeof data.keywords === 'string' ? data.keywords.split(',').map(x => x.trim()).filter(Boolean) : []),
    sources: mergedSources,
    businessIntroHtml: business.introHtml,
    faq,
    dateModified: typeof data.dateModified === 'string' ? data.dateModified : data.date,
    bodyHtml: renderMarkdown(business.body.trim()),
    jsonLd,
  };
}

export async function loadArticles(contentDirectory) {
  let names;
  try { names = await fs.readdir(contentDirectory); }
  catch (error) { if (error.code === 'ENOENT') return []; throw error; }
  const posts = [];
  for (const name of names.filter(name => name.endsWith('.md')).sort()) {
    const file = path.join(contentDirectory, name);
    const article = parseArticle(await fs.readFile(file, 'utf8'), file);
    if (`${article.slug}.md` !== name) throw new Error(`${file}: filename must match frontmatter slug (${article.slug}.md)`);
    if (posts.some(post => post.slug === article.slug)) throw new Error(`${file}: duplicate slug "${article.slug}"`);
    posts.push(article);
  }
  return posts.sort((a, b) => Date.parse(b.date) - Date.parse(a.date));
}

export function generateSitemapXml(articles, baseUrl = 'https://novarasystems.store') {
  const sitemapUrls = [
    { loc: `${baseUrl}/`, priority: '1.0', changefreq: 'daily' },
    { loc: `${baseUrl}/blog`, priority: '0.9', changefreq: 'daily' },
    ...articles.map(article => ({
      loc: article.canonical_url || `${baseUrl}/blog/${article.slug}`,
      lastmod: article.dateModified
        ? new Date(article.dateModified).toISOString().split('T')[0]
        : (article.date ? new Date(article.date).toISOString().split('T')[0] : new Date().toISOString().split('T')[0]),
      priority: '0.8',
      changefreq: 'weekly',
    })),
  ];

  return `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.map(u => `  <url>
    <loc>${u.loc}</loc>
    ${u.lastmod ? `<lastmod>${u.lastmod}</lastmod>` : ''}
    <changefreq>${u.changefreq}</changefreq>
    <priority>${u.priority}</priority>
  </url>`).join('\n')}
</urlset>
`;
}

