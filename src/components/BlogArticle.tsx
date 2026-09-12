import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { articles } from '../generated/blog-posts';

function setMeta(selector: string, attributes: Record<string, string>) {
  let element = document.head.querySelector<HTMLMetaElement>(selector);
  if (!element) {
    element = document.createElement('meta');
    document.head.appendChild(element);
  }
  Object.entries(attributes).forEach(([name, value]) => element!.setAttribute(name, value));
}

function ArticleSeo({ article }: { article: (typeof articles)[number] }) {
  useEffect(() => {
    document.title = article.seo_title || article.title;
    let canonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.rel = 'canonical';
      document.head.appendChild(canonical);
    }
    canonical.href = article.canonical_url;
    setMeta('meta[name="description"]', { name: 'description', content: article.meta_description });
    setMeta('meta[property="og:title"]', { property: 'og:title', content: article.seo_title || article.title });
    setMeta('meta[property="og:description"]', { property: 'og:description', content: article.meta_description });
    setMeta('meta[property="og:url"]', { property: 'og:url', content: article.canonical_url });
    setMeta('meta[property="og:type"]', { property: 'og:type', content: 'article' });
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card', content: 'summary_large_image' });
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title', content: article.seo_title || article.title });
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description', content: article.meta_description });
  }, [article]);
  return null;
}

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value));
}

export const BlogArticle: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = articles.find((candidate) => candidate.slug === slug);

  if (!article) {
    return (
      <main className="max-w-4xl mx-auto px-6 py-32 text-center relative z-10">
        <h1 className="text-3xl font-bold mb-4">Article Not Found</h1>
        <p className="text-sm text-[#94A3B8] mb-8">The requested blueprint could not be located.</p>
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#C9A84C] text-black font-mono font-bold text-xs uppercase"
        >
          <ArrowLeft size={14} /> Back to Knowledge Lab
        </Link>
      </main>
    );
  }

  const jsonLdHtml = (value: unknown) =>
    JSON.stringify(value).replace(/</g, '\\u003c').replace(/>/g, '\\u003e');

  return (
    <main className="py-24 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto relative z-10">
      <ArticleSeo article={article} />

      {article.jsonLd &&
        article.jsonLd.map((data, index) => (
          <script
            key={index}
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: jsonLdHtml(data) }}
          />
        ))}

      {/* Back Link */}
      <Link
        to="/blog"
        className="inline-flex items-center gap-2 text-xs font-mono text-[#E8D5A3] hover:text-white transition-colors uppercase tracking-wider mb-8"
      >
        <ArrowLeft size={14} /> All Blueprints &amp; Articles
      </Link>

      {/* Article Container */}
      <article className="rounded-3xl border border-white/10 bg-[#05080F]/90 backdrop-blur-xl p-6 sm:p-12 shadow-2xl">
        {/* Header Metadata */}
        <header className="border-b border-white/10 pb-8 mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 rounded-full bg-[#C9A84C]/20 border border-[#C9A84C]/40 text-[#F5E2B3] text-xs font-mono font-bold uppercase tracking-wider">
              {article.keywords && article.keywords[0] ? article.keywords[0] : 'Sovereign Systems'}
            </span>
            <span className="text-xs font-mono text-[#8B9BB4]">
              Published {displayDate(article.date)}
            </span>
          </div>

          <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-base sm:text-lg text-[#94A3B8] leading-relaxed">
            {article.excerpt}
          </p>
        </header>

        {/* Article Body */}
        <div
          className="blog-prose prose prose-invert max-w-none text-[#CBD5E1] text-sm sm:text-base leading-relaxed space-y-6 [&_h2]:text-xl sm:[&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-white [&_h2]:mt-10 [&_h2]:mb-4 [&_h3]:text-lg [&_h3]:font-bold [&_h3]:text-[#E8D5A3] [&_h3]:mt-6 [&_h3]:mb-2 [&_a]:text-[#C9A84C] [&_a]:underline hover:[&_a]:text-[#F5E2B3] [&_pre]:bg-[#0B1120] [&_pre]:p-4 [&_pre]:rounded-xl [&_pre]:border [&_pre]:border-white/10 [&_code]:font-mono [&_code]:text-xs [&_blockquote]:border-l-2 [&_blockquote]:border-[#C9A84C] [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-[#E2E8F0]"
          dangerouslySetInnerHTML={{ __html: article.bodyHtml }}
        />

        {/* In-Article Community Banner */}
        <aside className="my-12 p-6 sm:p-8 rounded-2xl border border-[#C9A84C]/40 bg-[#070D18] text-[#EDF0F5] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="inline-flex items-center gap-2 px-2.5 py-1 mb-3 rounded-full text-[10px] font-mono tracking-widest uppercase bg-[#C9A84C]/15 text-[#E8D5A3] border border-[#C9A84C]/30">
                🔥 Novara Media Inner Circle
              </div>
              <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white mb-2 font-serif">
                Join the Novara AI Media Group
              </h3>
              <p className="text-sm text-[#8B9BB4] leading-relaxed">
                Get instant access to our autonomous media systems, 4K rendering scripts, anti-ban templates, and weekly live engineering labs.
              </p>
            </div>
            <a
              href="https://www.skool.com/novara-ai-media-group-5745"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-[#C9A84C] bg-[#C9A84C] text-black font-semibold text-xs tracking-widest uppercase hover:bg-[#E8D5A3] transition-all shrink-0"
            >
              Join Community →
            </a>
          </div>
        </aside>
      </article>
    </main>
  );
};

export default BlogArticle;
