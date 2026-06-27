/**
 * build-articles-manifest.js
 *
 * Scans frontend/public/articles/*.html for an HTML-comment frontmatter
 * block at the top of each file, and generates frontend/public/articles-manifest.json
 * which the React app fetches at runtime to render the Free Resources articles
 * grid, the tag filters, and the "Related Articles" block on each article page.
 *
 * This runs automatically in CI (.github/workflows/deploy.yml) before `yarn build`.
 * You never need to run this by hand or commit the generated JSON.
 *
 * Article file format (frontend/public/articles/<slug>.html):
 *
 *   <!--
 *   title: Why Most AI Strategies Fail Before They Start
 *   tags: AI Strategy, AI Consultancy
 *   date: 2026-06-18
 *   image: https://example.com/cover.jpg
 *   excerpt: A one to two sentence summary shown on the article card.
 *   -->
 *   <p>Article body HTML goes here...</p>
 *
 * The slug is taken from the filename (e.g. ai-strategy-failure-points.html
 * -> slug "ai-strategy-failure-points"). Internal links to other articles
 * should use href="#/articles/<other-slug>".
 */

const fs = require("fs");
const path = require("path");

const ARTICLES_DIR = path.join(__dirname, "..", "public", "articles");
const OUTPUT_FILE = path.join(__dirname, "..", "public", "articles-manifest.json");

const KNOWN_TAGS = [
  "AI Strategy",
  "AI Implementation",
  "AI for Marketing & Sales",
  "AI Consultancy",
  "AI Governance",
  "AI Technology",
];

const RELATED_COUNT = 3;

function slugify(filename) {
  return filename.replace(/\.html?$/i, "");
}

function parseFrontmatter(raw) {
  const match = raw.match(/^\s*<!--([\s\S]*?)-->/);
  if (!match) {
    return { meta: {}, body: raw.trim() };
  }
  const block = match[1];
  const body = raw.slice(match[0].length).trim();
  const meta = {};
  block
    .split(/\r?\n/)
    .map((l) => l.trim())
    .filter(Boolean)
    .forEach((line) => {
      const idx = line.indexOf(":");
      if (idx === -1) return;
      const key = line.slice(0, idx).trim().toLowerCase();
      const value = line.slice(idx + 1).trim();
      meta[key] = value;
    });
  return { meta, body };
}

function parseTags(value) {
  if (!value) return [];
  return value
    .split(",")
    .map((t) => t.trim())
    .filter(Boolean);
}

function main() {
  if (!fs.existsSync(ARTICLES_DIR)) {
    fs.mkdirSync(ARTICLES_DIR, { recursive: true });
  }

  const files = fs
    .readdirSync(ARTICLES_DIR)
    .filter((f) => f.toLowerCase().endsWith(".html"));

  const articles = [];

  for (const file of files) {
    const fullPath = path.join(ARTICLES_DIR, file);
    const raw = fs.readFileSync(fullPath, "utf8");
    const { meta } = parseFrontmatter(raw);

    if (!meta.title) {
      console.warn(`[articles] Skipping ${file}: missing "title" in frontmatter.`);
      continue;
    }

    const tags = parseTags(meta.tags);
    const unknown = tags.filter((t) => !KNOWN_TAGS.includes(t));
    if (unknown.length) {
      console.warn(
        `[articles] ${file}: tag(s) not in the standard list will still display: ${unknown.join(", ")}`
      );
    }

    const slug = (meta.slug || slugify(file)).trim();

    articles.push({
      slug,
      title: meta.title,
      tags,
      date: meta.date || "",
      image: meta.image || "",
      excerpt: meta.excerpt || "",
      file: `articles/${file}`,
    });
  }

  // Sort newest first (articles without a parseable date sink to the bottom).
  articles.sort((a, b) => {
    const da = Date.parse(a.date);
    const db = Date.parse(b.date);
    const va = Number.isNaN(da) ? -Infinity : da;
    const vb = Number.isNaN(db) ? -Infinity : db;
    return vb - va;
  });

  // Compute related articles: rank by number of shared tags, then recency.
  for (const article of articles) {
    const scored = articles
      .filter((other) => other.slug !== article.slug)
      .map((other) => {
        const shared = other.tags.filter((t) => article.tags.includes(t)).length;
        const date = Date.parse(other.date);
        return { slug: other.slug, shared, date: Number.isNaN(date) ? -Infinity : date };
      })
      .sort((a, b) => (b.shared - a.shared) || (b.date - a.date));

    article.related = scored.slice(0, RELATED_COUNT).map((s) => s.slug);
  }

  const manifest = {
    generatedAt: new Date().toISOString(),
    knownTags: KNOWN_TAGS,
    articles,
  };

  fs.writeFileSync(OUTPUT_FILE, JSON.stringify(manifest, null, 2));
  console.log(`[articles] Wrote ${articles.length} article(s) to ${path.relative(process.cwd(), OUTPUT_FILE)}`);
}

main();
