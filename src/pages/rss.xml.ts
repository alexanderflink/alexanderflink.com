import type { APIRoute } from "astro";
import rss, { type RSSFeedItem } from "@astrojs/rss";
import { getCollection } from "astro:content";
import sanitizeHtml from "sanitize-html";
import MarkdownIt from "markdown-it";

const parser = new MarkdownIt();

async function getItems() {
  const posts = await getCollection("blog");

  return posts.map(
    (post): RSSFeedItem => ({
      title: post.data.title,
      description: post.data.excerpt,
      pubDate: new Date(post.data.date),
      link: `blog/${post.slug}`,
      content: sanitizeHtml(parser.render(post.body)),
      categories: post.data.tags,
    }),
  );
}

export const GET: APIRoute = async (context) => {
  return rss({
    // `<title>` field in output xml
    title: "Alexander Flink's Blog",
    // `<description>` field in output xml
    description:
      "Semi-regular ramblings about web development and other things I find interesting.",
    // Pull in your project "site" from the endpoint context
    // https://docs.astro.build/en/reference/api-reference/#contextsite
    site: context.site ?? "https://www.alexanderflink.com",
    // Array of `<item>`s in output xml
    // See "Generating items" section for examples using content collections and glob imports
    items: await getItems(),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  });
};
