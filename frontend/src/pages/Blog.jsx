import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import ArticleCard from "@/components/articles/ArticleCard";
import TagFilter from "@/components/articles/TagFilter";
import { getArticlesManifest, formatArticleDate } from "@/lib/articles";

const KNOWN_TAGS = [
  "AI Strategy",
  "AI Implementation",
  "AI for Marketing & Sales",
  "AI Consultancy",
  "AI Governance",
  "AI Technology",
];

const FeaturedArticle = ({ article }) => {
  if (!article) return null;

  const FALLBACK =
    "data:image/svg+xml;utf8," +
    encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='800' height='450'><rect width='100%' height='100%' fill='#f3f4f6'/></svg>`
    );

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group block bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#FF6B2C] transition-all hover:shadow-xl mb-12"
      data-testid="blog-featured-article"
    >
      <div className="grid md:grid-cols-2">
        <div className="aspect-[16/9] md:aspect-auto overflow-hidden bg-gray-100 min-h-[240px]">
          <img
            src={article.image || FALLBACK}
            alt={article.title}
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            onError={(e) => { e.currentTarget.src = FALLBACK; }}
          />
        </div>
        <div className="p-8 md:p-10 flex flex-col justify-center">
          <div className="flex flex-wrap gap-2 mb-4">
            {(article.tags || []).slice(0, 2).map((tag) => (
              <Badge
                key={tag}
                variant="outline"
                className="border-[#FF6B2C] text-[#FF6B2C] bg-[#FF6B2C]/5"
              >
                {tag}
              </Badge>
            ))}
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 leading-snug">
            {article.title}
          </h2>
          {article.excerpt && (
            <p className="text-gray-600 mb-6 line-clamp-3">{article.excerpt}</p>
          )}
          <div className="flex items-center justify-between mt-auto pt-2">
            {article.date && (
              <span className="text-sm text-gray-400">
                {formatArticleDate(article.date)}
              </span>
            )}
            <span className="text-[#FF6B2C] font-semibold text-sm inline-flex items-center gap-1">
              Read article
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Blog = () => {
  const [manifest, setManifest] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    getArticlesManifest().then(setManifest);
  }, []);

  if (!manifest) {
    return (
      <div className="pt-32 pb-24 text-center text-gray-400">Loading…</div>
    );
  }

  const allArticles = manifest.articles || [];

  const availableTags = KNOWN_TAGS.filter((tag) =>
    allArticles.some((a) => (a.tags || []).includes(tag))
  );

  const filtered = activeTag
    ? allArticles.filter((a) => (a.tags || []).includes(activeTag))
    : allArticles;

  const featured = filtered[0] || null;
  const rest = filtered.slice(1);

  return (
    <div className="pt-20" data-testid="blog-page">
      <Helmet>
        <title>Blog | otobrothers</title>
        <meta
          name="description"
          content="Practical AI insights for business leaders — strategy, implementation, governance and more."
        />
        <meta property="og:title" content="Blog | otobrothers" />
        <meta
          property="og:description"
          content="Practical AI insights for business leaders — strategy, implementation, governance and more."
        />
      </Helmet>

      {/* Hero */}
      <section className="py-16 px-6 text-center max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          The otobrothers blog
        </h1>
        <p className="text-lg text-gray-500">
          Practical AI insights for business leaders — strategy, implementation,
          governance and more.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-24">
        {allArticles.length === 0 ? (
          <p className="text-center text-gray-400 py-16">
            No articles yet. Check back soon.
          </p>
        ) : (
          <>
            <TagFilter
              tags={availableTags}
              activeTag={activeTag}
              onSelect={setActiveTag}
            />

            {filtered.length === 0 ? (
              <p className="text-center text-gray-400 py-16">
                No articles in this category yet.
              </p>
            ) : (
              <>
                <FeaturedArticle article={featured} />
                {rest.length > 0 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {rest.map((article) => (
                      <ArticleCard key={article.slug} article={article} />
                    ))}
                  </div>
                )}
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default Blog;
