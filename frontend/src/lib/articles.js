// Fetches the build-time generated articles manifest (public/articles-manifest.json)
// and exposes small helpers used by the Free Resources page and the Article view.

let cachedManifest = null;
let inFlight = null;

export async function getArticlesManifest() {
  if (cachedManifest) return cachedManifest;
  if (inFlight) return inFlight;

  inFlight = fetch(`${process.env.PUBLIC_URL || ""}/articles-manifest.json`, { cache: "no-cache" })
    .then((res) => {
      if (!res.ok) throw new Error(`Failed to load articles manifest: ${res.status}`);
      return res.json();
    })
    .then((data) => {
      cachedManifest = data;
      return data;
    })
    .catch((err) => {
      console.error(err);
      cachedManifest = { articles: [], knownTags: [] };
      return cachedManifest;
    })
    .finally(() => {
      inFlight = null;
    });

  return inFlight;
}

export async function getArticleBySlug(slug) {
  const manifest = await getArticlesManifest();
  return manifest.articles.find((a) => a.slug === slug) || null;
}

export async function getArticleBody(article) {
  if (!article) return "";
  const res = await fetch(`${process.env.PUBLIC_URL || ""}/${article.file}`, { cache: "no-cache" });
  if (!res.ok) return "";
  const raw = await res.text();
  // Strip the leading HTML-comment frontmatter block if present.
  return raw.replace(/^\s*<!--[\s\S]*?-->/, "").trim();
}

export function getRelatedArticles(manifest, article) {
  if (!article || !manifest?.articles) return [];
  const bySlug = new Map(manifest.articles.map((a) => [a.slug, a]));
  return (article.related || []).map((slug) => bySlug.get(slug)).filter(Boolean);
}

export function formatArticleDate(dateStr) {
  const d = new Date(dateStr);
  if (Number.isNaN(d.getTime())) return "";
  return d.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}
