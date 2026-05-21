import { useState, useMemo } from "react";
import { PageShell } from "@/components/site-header";
import { SearchBar } from "@/components/search-bar";
import { exhibitions } from "@/lib/exhibitions";
import { usePageMeta } from "@/lib/use-page-meta";

const products = exhibitions.slice(0, 8).map((e, i) => ({
  ...e,
  price: 45 + ((i * 23) % 180),
  edition: `Ed. ${(i % 3) + 1}/50`,
  kind: ["Print", "Poster", "Catalogue", "Object"][i % 4],
}));

export default function Store() {
  usePageMeta({
    title: "Store — polisibang.site",
    description: "Editions, prints, and artifacts from the polisibang.site archive.",
  });
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return products;
    return products.filter((p) =>
      [p.title, p.desc, p.kind, p.category, p.edition].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <PageShell
      eyebrow="Editions / Open"
      title="store"
      intro="Limited prints, exhibition catalogues, and small objects. Each edition shipped flat from the archive."
    >
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search prints, catalogues, objects…"
        resultCount={filtered.length}
        totalCount={products.length}
      />

      <section className="px-4 py-10">
        {filtered.length === 0 ? (
          <p className="py-16 text-center text-[11px] uppercase tracking-[0.25em] text-foreground/60">No products match your search.</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-10">
            {filtered.map((p) => (
              <article key={p.slug} className="group flex flex-col">
                <div className="overflow-hidden bg-foreground/5 aspect-[3/4]">
                  <img src={p.img} alt={p.title} loading="lazy" className="img-mono h-full w-full object-cover group-hover:scale-[1.03]" />
                </div>
                <div className="mt-3 flex items-start justify-between gap-2">
                  <div>
                    <h3 className="text-[11px] font-bold uppercase tracking-wider">{p.title}</h3>
                    <p className="text-[10px] uppercase tracking-wide text-foreground/60">{p.kind} · {p.edition}</p>
                  </div>
                  <p className="font-mono tabular-nums text-sm">${p.price}</p>
                </div>
                <button className="mt-3 border border-foreground py-2 text-[10px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
                  Add to Cart
                </button>
              </article>
            ))}
          </div>
        )}
      </section>
    </PageShell>
  );
}
