import { useEffect, useState } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { Badge } from "@/components/ui/badge";
import RelatedArticles from "@/components/articles/RelatedArticles";
import {
  getArticlesManifest,
  getArticleBySlug,
  getArticleBody,
  getRelatedArticles,
  formatArticleDate,
} from "@/lib/articles";

const ArticleView = () => {
  const { slug } = useParams();
  const [status, setStatus] = useState("loading"); // loading | ready | not-found
  const [article, setArticle] = useState(null);
  const [body, setBody] = useState("");
  const [related, setRelated] = useState([]);

  useEffect(() => {
    let cancelled = false;

    async function load() {
      setStatus("loading");
      const manifest = await getArticlesManifest();
      const found = await getArticleBySlug(slug);

      if (!found) {
        if (!cancelled) setStatus("not-found");
        return;
      }

      const html = await getArticleBody(found);
      const relatedArticles = getRelatedArticles(manifest, found);

      if (!cancelled) {
        setArticle(found);
        setBody(html);
        setRelated(relatedArticles);
        setStatus("ready");
      }
    }

    load();
    return () => {
      cancelled = true;
    };
  }, [slug]);

  if (status === "not-found") {
    return <Navigate to="/free_resources" replace />;
  }

  if (status === "loading") {
    return <div className="pt-32 pb-24 text-center text-gray-400">Loading article…</div>;
  }

  return (
    <div className="pt-20" data-testid="article-view-page">
      <Helmet>
        <title>{article.title} | otobrothers</title>
        {article.excerpt ? <meta name="description" content={article.excerpt} /> : null}
        <meta property="og:title" content={article.title} />
        {article.excerpt ? <meta property="og:description" content={article.excerpt} /> : null}
        {article.image ? <meta property="og:image" content={article.image} /> : null}
      </Helmet>

      <article className="max-w-3xl mx-auto px-6 py-12">
        <Link
          to="/free_resources"
          className="text-sm text-gray-500 hover:text-[#FF6B2C] inline-flex items-center gap-1 mb-8"
        >
          ← Back to Free Resources
        </Link>

        <div className="flex flex-wrap gap-2 mb-4">
          {(article.tags || []).map((tag) => (
            <Badge key={tag} variant="outline" className="border-[#FF6B2C] text-[#FF6B2C] bg-[#FF6B2C]/5">
              {tag}
            </Badge>
          ))}
        </div>

        <h1 className="text-3xl md:text-4xl font-bold mb-3 leading-tight">{article.title}</h1>

        {article.date ? (
          <p className="text-sm text-gray-400 mb-8">{formatArticleDate(article.date)}</p>
        ) : null}

        {article.image ? (
          <img
            src={article.image}
            alt={article.title}
            className="w-full rounded-2xl mb-10 object-cover max-h-[420px]"
          />
        ) : null}

        <div className="article-body" dangerouslySetInnerHTML={{ __html: body }} />

        <RelatedArticles articles={related} />
      </article>
    </div>
  );
};

export default ArticleView;
