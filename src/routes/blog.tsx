import { useState, useMemo } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import { PageShell } from "@/components/site-header";
import { SearchBar } from "@/components/search-bar";
import { exhibitions } from "@/lib/exhibitions";

export const Route = createFileRoute("/blog")({
  head: () => ({
    meta: [
      { title: "Blog — polisibang.site" },
      { name: "description", content: "Field notes, essays, and dispatches from the polisibang.site editorial desk." },
      { property: "og:title", content: "Blog — polisibang.site" },
      { property: "og:description", content: "Field notes, essays, and dispatches from the polisibang.site editorial desk." },
    ],
  }),
  component: BlogPage,
});

const posts = [
  { slug: "concrete-dreams", kicker: "Field Notes", title: "Walking through Concrete Dreams", author: "Ines Vargas", date: "12 Mar 2026", read: "6 min", excerpt: "On the strange choreography of brutalist halls and the dancers we placed inside them." },
  { slug: "404-art-not-found", kicker: "Essay", title: "404 as a Medium", author: "Mara Voss", date: "21 Jan 2026", read: "9 min", excerpt: "What happens when the broken file becomes the final work, signed and dated." },
  { slug: "floracipher", kicker: "Studio Visit", title: "Inside the Floracipher Greenhouse", author: "Lena Park", date: "02 Feb 2026", read: "7 min", excerpt: "Steel petals, hallucinated taxonomies, and a neural network that refuses to bloom on schedule." },
  { slug: "the-last-library", kicker: "Conversation", title: "Burning the Last Library", author: "Theo Albrecht", date: "18 Mar 2026", read: "5 min", excerpt: "A short interview with the curator on what it means to lend a book made of wax." },
  { slug: "haute-data", kicker: "Long Read", title: "The Dress that Reads the Feed", author: "Camille Ortiz", date: "03 Jun 2026", read: "12 min", excerpt: "Optical fiber, trending hashtags, and the surprisingly tender choreography of algorithmic fashion." },
  { slug: "theremin-forest", kicker: "Sound", title: "How to Score a Forest", author: "Erik Lund", date: "20 May 2026", read: "8 min", excerpt: "Tuning a woodland of antennae and learning to be quiet enough to hear the trees." },
];

function imageFor(slug: string) {
  return exhibitions.find((e) => e.slug === slug)?.img;
}

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
