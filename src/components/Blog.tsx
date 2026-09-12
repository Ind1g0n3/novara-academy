import React from 'react';
import { ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { articles } from '../generated/blog-posts';

function displayDate(value: string) {
  return new Intl.DateTimeFormat('en-US', { dateStyle: 'long', timeZone: 'UTC' }).format(new Date(value));
}

export const Blog: React.FC = () => {
  return (
    <main id="blog" className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto relative z-10">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#C9A84C]/8 blur-[140px] pointer-events-none -z-10" />

      {/* Header */}
      <header className="text-center max-w-3xl mx-auto mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#C9A84C]/10 border border-[#C9A84C]/30 text-xs font-mono font-bold text-[#E8D5A3] uppercase tracking-widest mb-4">
          <BookOpen className="w-3.5 h-3.5 text-[#C9A84C]" />
          <span>The Knowledge Lab &amp; Engineering Blueprints</span>
        </div>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-wider text-[#EDF0F5] mb-4 uppercase">
          Autonomous Systems &amp; <span className="text-[#C9A84C]">Media Engineering</span>
        </h1>
        <p className="text-base text-[#94A3B8] leading-relaxed">
          Production blueprints on multi-agent architectures, anti-ban social infrastructure, 4K rendering pipelines, and sovereign creator operations.
        </p>
      </header>

      {/* Articles Grid */}
      {articles && articles.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {articles.map((article) => (
            <article
              key={article.slug}
              className="rounded-3xl p-6 border border-white/10 bg-[#05080F]/80 backdrop-blur-xl hover:border-[#C9A84C]/50 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1 relative overflow-hidden"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-2.5 py-0.5 rounded-full bg-[#C9A84C]/15 border border-[#C9A84C]/40 text-[#F5E2B3] text-[10px] font-mono font-bold uppercase tracking-wider">
                    {article.keywords && article.keywords[0] ? article.keywords[0] : 'Sovereign Blueprint'}
                  </span>
                  <span className="text-[11px] font-mono text-[#8B9BB4] flex items-center gap-1">
                    <Clock className="w-3 h-3 text-[#C9A84C]" />
                    {displayDate(article.date)}
                  </span>
                </div>

                <h2 className="text-base sm:text-lg font-bold text-[#EDF0F5] group-hover:text-[#F5E2B3] transition-colors leading-snug mb-3">
                  <Link to={`/blog/${article.slug}`}>{article.title}</Link>
                </h2>

                <p className="text-xs text-[#8B9BB4] leading-relaxed line-clamp-3 mb-6">
                  {article.excerpt}
                </p>
              </div>

              <Link
                to={`/blog/${article.slug}`}
                className="w-full py-3 rounded-xl bg-[#0B1120] border border-white/10 hover:border-[#C9A84C] text-[#E8D5A3] hover:text-white font-mono text-xs font-bold transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Read Full Blueprint</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#C9A84C] transition-transform group-hover/btn:translate-x-1" />
              </Link>
            </article>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 text-[#8B9BB4] font-mono text-sm">
          No articles published yet. Check back soon.
        </div>
      )}
    </main>
  );
};

export default Blog;
