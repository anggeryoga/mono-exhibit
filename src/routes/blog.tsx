import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-header";
import { SearchBar } from "@/components/search-bar";
import { posts, imageFor } from "@/lib/posts";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — polisibang.site" },
      { name: "description", content: "Field notes, essays, and dispatches from the polisibang.site editorial desk." },
      { property: "og:title", content: "Blog — polisibang.site" },
      { property: "og:description", content: "Field notes, essays, and dispatches from the polisibang.site editorial desk." },
    ],
    links: [
      { rel: "alternate", type: "application/rss+xml", title: "polisibang.site — Blog RSS", href: "/rss.xml" },
    ],
  }),
  component: BlogPage,
});

function BlogPage() {
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return posts;
    return posts.filter((p) =>
      [p.title, p.excerpt, p.author, p.kicker].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  const [featured, ...rest] = filtered;

  return (
    <PageShell
      eyebrow="Editorial / 2026"
      title="blog"
      intro="Dispatches from curators, artists, and resident writers. Long reads, studio visits, and field notes from the archive."
    >
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search posts, authors, topics…"
        resultCount={filtered.length}
        totalCount={posts.length}
      />

      {filtered.length === 0 && (
        <section className="px-4 py-24 text-center">
          <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">No posts match your search.</p>
        </section>
      )}

      {featured && (
        <section className="px-4 py-10 border-b border-foreground/80">
          <Link to="/exhibition/$slug" params={{ slug: featured.slug }} className="grid grid-cols-1 md:grid-cols-12 gap-6 group">
            <div className="md:col-span-7 overflow-hidden bg-foreground/5 aspect-[4/3]">
              <img src={imageFor(featured.slug)} alt={featured.title} className="img-mono h-full w-full object-cover group-hover:scale-[1.02]" />
            </div>
            <div className="md:col-span-5 flex flex-col justify-end">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{featured.kicker} · Featured</p>
              <h2 className="mt-3 font-display uppercase leading-[0.95] tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}>
                {featured.title}
              </h2>
              <p className="mt-4 text-sm md:text-base text-foreground/80">{featured.excerpt}</p>
              <p className="mt-5 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                {featured.author} · {featured.date} · {featured.read}
              </p>
            </div>
          </Link>
        </section>
      )}

      {rest.length > 0 && (
        <section className="px-4 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-10">
            {rest.map((p) => (
              <Link key={p.slug} to="/exhibition/$slug" params={{ slug: p.slug }} className="group flex flex-col">
                <div className="overflow-hidden bg-foreground/5 aspect-[4/5]">
                  <img src={imageFor(p.slug)} alt={p.title} loading="lazy" className="img-mono h-full w-full object-cover group-hover:scale-[1.03]" />
                </div>
                <p className="mt-3 text-[10px] uppercase tracking-[0.2em] text-foreground/60">{p.kicker}</p>
                <h3 className="mt-1 font-display uppercase text-xl md:text-2xl leading-tight">{p.title}</h3>
                <p className="mt-2 text-sm text-foreground/75">{p.excerpt}</p>
                <p className="mt-3 text-[10px] uppercase tracking-[0.18em] text-foreground/60">
                  {p.author} · {p.date} · {p.read}
                </p>
              </Link>
            ))}
          </div>
        </section>
      )}
    </PageShell>
  );
}
