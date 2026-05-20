import { createFileRoute } from "@tanstack/react-router";
import { posts } from "@/lib/posts";

const SITE_URL = "https://polisibang.site";
const SITE_TITLE = "polisibang.site — Blog";
const SITE_DESC = "Field notes, essays, and dispatches from the polisibang.site editorial desk.";

function escapeXml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");
}

function toRFC822(dateStr: string) {
  const d = new Date(dateStr);
  return isNaN(d.getTime()) ? new Date().toUTCString() : d.toUTCString();
}

function buildFeed(origin: string) {
  const items = posts
    .map((p) => {
      const link = `${origin}/exhibition/${p.slug}`;
      const body = p.body?.join("\n\n") ?? p.excerpt;
      return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(link)}</link>
      <guid isPermaLink="true">${escapeXml(link)}</guid>
      <pubDate>${toRFC822(p.date)}</pubDate>
      <author>noreply@polisibang.site (${escapeXml(p.author)})</author>
      <category>${escapeXml(p.kicker)}</category>
      <description>${escapeXml(p.excerpt)}</description>
      <content:encoded><![CDATA[${body}]]></content:encoded>
    </item>`;
    })
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${origin}/blog</link>
    <atom:link href="${origin}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE_DESC)}</description>
    <language>en</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
${items}
  </channel>
</rss>`;
}

export const Route = createFileRoute("/rss.xml")({
  server: {
    handlers: {
      GET: async ({ request }) => {
        const origin = new URL(request.url).origin || SITE_URL;
        const xml = buildFeed(origin);
        return new Response(xml, {
          status: 200,
          headers: {
            "Content-Type": "application/rss+xml; charset=utf-8",
            "Cache-Control": "public, max-age=3600",
          },
        });
      },
    },
  },
});
