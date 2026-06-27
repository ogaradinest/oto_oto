import ArticleCard from "@/components/articles/ArticleCard";

const RelatedArticles = ({ articles }) => {
  if (!articles || articles.length === 0) return null;

  return (
    <section className="mt-16 pt-12 border-t border-gray-200" data-testid="related-articles">
      <h2 className="text-2xl font-bold mb-6">Related articles</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
};

export default RelatedArticles;
