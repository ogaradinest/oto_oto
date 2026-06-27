import { Link } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { formatArticleDate } from "@/lib/articles";

const FALLBACK_IMAGE =
  "data:image/svg+xml;utf8," +
  encodeURIComponent(
    `<svg xmlns='http://www.w3.org/2000/svg' width='400' height='220'><rect width='100%' height='100%' fill='#f3f4f6'/></svg>`
  );

const ArticleCard = ({ article }) => {
  if (!article) return null;

  return (
    <Link
      to={`/articles/${article.slug}`}
      className="group bg-white rounded-2xl border-2 border-gray-200 overflow-hidden hover:border-[#FF6B2C] transition-all hover:shadow-lg flex flex-col"
      data-testid={`article-card-${article.slug}`}
    >
      <div className="aspect-[16/9] w-full overflow-hidden bg-gray-100">
        <img
          src={article.image || FALLBACK_IMAGE}
          alt={article.title}
          loading="lazy"
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          onError={(e) => {
            e.currentTarget.src = FALLBACK_IMAGE;
          }}
        />
      </div>
      <div className="p-6 flex flex-col flex-1">
        <div className="flex flex-wrap gap-2 mb-3">
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
        <h3 className="text-lg font-bold mb-2 leading-snug">{article.title}</h3>
        {article.excerpt ? (
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{article.excerpt}</p>
        ) : null}
        <div className="mt-auto flex items-center justify-between pt-2">
          {article.date ? (
            <span className="text-xs text-gray-400">{formatArticleDate(article.date)}</span>
          ) : (
            <span />
          )}
          <span className="text-[#FF6B2C] font-medium text-sm inline-flex items-center gap-1">
            Read article
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ArticleCard;
