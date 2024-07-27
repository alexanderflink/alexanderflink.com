import type { APIRoute } from "astro";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";

async function getItems() {
  const posts = await getCollection("blog");

  return posts.map(
    (post): RSSFeedItem => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: new Date(post.data.date),
      link: `blog/${post.slug}`,
      categories: post.data.tags,
    }),
  );
}

export const GET: APIRoute = async (context) => {
  return rss({
    // `<title>` field in output xml
    title: "Alexander Flink",
    // `<description>` field in output xml
    description: "",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: "https://alexanderflink.com",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await getItems(),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
};
