// Author profiles shown on the "Published by" block of each article.
// Keyed by the lowercase "author" value used in article frontmatter.

export const AUTHORS = {
  dan: {
    name: "Dan Megherlich",
    photo: "/dan_megherlich.jpeg",
    bio: "Dan brings 20+ years of B2B sales leadership across EMEA, scaling revenue from $10K to $100M+ at AMD and SHI. He builds sales engines from scratch, championing AI tools for every team.",
  },
  cristian: {
    name: "Cristian Megherlich",
    photo: "/cristian_megherlich.jpeg",
    bio: "Cristian has 25+ years in advertising, marketing, and award-winning design. Since 2024 he's been teaching entrepreneurs to automate and grow with AI and marketing. Strong communicator with deep business process expertise.",
  },
};

export function getAuthor(key) {
  if (!key) return null;
  return AUTHORS[key.trim().toLowerCase()] || null;
}
