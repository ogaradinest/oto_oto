# How to publish an article

1. Write your article as a single HTML file and save it in this folder
   (`frontend/public/articles/`). The filename becomes the article's URL slug,
   so `ai-pricing-mistakes.html` becomes `otobrothers.co.uk/#/articles/ai-pricing-mistakes`.

2. Start the file with an HTML comment block containing the article's
   metadata, then the body HTML below it:

```html
<!--
title: Your Article Title
tags: AI Strategy, AI Consultancy
date: 2026-06-20
image: https://link-to-a-cover-photo.jpg
excerpt: One to two sentences shown on the article card and in search previews.
-->
<p>Your article body goes here, as plain HTML.</p>
<p>To link to another article on the site, use: <a href="#/articles/other-article-slug">link text</a></p>
```

3. Use only these tags (others will still display, but won't match the
   site's filter pills): `AI Strategy`, `AI Implementation`,
   `AI for Marketing & Sales`, `AI Consultancy`, `AI Governance`,
   `AI Technology`. You can list more than one tag, comma-separated.

4. Commit the file to the `main` branch (drag-and-drop via the GitHub web UI
   works fine — Add file → Upload files). GitHub Actions automatically:
   - scans every file in this folder
   - regenerates `articles-manifest.json`
   - works out 3 "related articles" per article based on shared tags
   - rebuilds and redeploys the site

   No other file needs to change. You never edit `articles-manifest.json`
   by hand — it's generated fresh on every deploy.

5. To take an article down, delete its HTML file and push — it disappears
   from the grid and from any "Related articles" blocks automatically.
