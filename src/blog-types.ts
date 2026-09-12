export interface BlogSource {
  url: string;
  title: string;
  platform: string;
}

export interface BlogArticleData {
  title: string;
  slug: string;
  excerpt: string;
  seo_title: string;
  meta_description: string;
  focus_phrase?: string;
  oracle_draft_id?: string;
  oracle_layout?: string;
  hero_image?: string;
  hero_alt?: string;
  description: string;
  canonical_url: string;
  keywords: string[];
  sources: BlogSource[];
  businessIntroHtml: string;
  faq: Array<{ question: string; answer: string }>;
  date: string;
  dateModified: string;
  bodyHtml: string;
  jsonLd: unknown[];
}
