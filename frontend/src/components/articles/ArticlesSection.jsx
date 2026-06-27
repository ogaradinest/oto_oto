import { useEffect, useMemo, useState } from "react";
import ArticleCard from "@/components/articles/ArticleCard";
import TagFilter from "@/components/articles/TagFilter";
import { getArticlesManifest } from "@/lib/articles";

const ArticlesSection = () => {
  const [manifest, setManifest] = useState(null);
  const [activeTag, setActiveTag] = useState(null);

  useEffect(() => {
    getArticlesManifest().then(setManifest);
  }, []);

  const articles = manifest?.articles || [];
  const knownTags = manifest?.knownTags || [];

  const availableTags = useMemo(() => {
    const used = new Set(articles.flatMap((a) => a.tags || []));
    return knownTags.filter((t) => used.has(t));
  }, [articles, knownTags]);

  const filtered = useMemo(() => {
    if (!activeTag) return articles;
    return articles.filter((a) => (a.tags || []).includes(activeTag));
  }, [articles, activeTag]);

  if (!manifest) return null;
  if (articles.length === 0) return null;

  return (
    <section className="py-16 bg-gray-50" data-testid="articles-section">
      <div className="max-w-5xl mx-auto px-6">
        <div className="mb-8">
          <h2 className="text-2xl md:text-3xl font-bold mb-2">Articles</h2>
          <p className="text-gray-600">Practical guides on AI strategy, implementation, and governance for SMBs.</p>
        </div>

        {availableTags.length > 0 ? (
          <TagFilter tags={availableTags} activeTag={activeTag} onSelect={setActiveTag} />
        ) : null}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>

        {filtered.length === 0 ? (
          <p className="text-gray-400 text-center py-12">No articles for this tag yet.</p>
        ) : null}
      </div>
    </section>
  );
};

export default ArticlesSection;
