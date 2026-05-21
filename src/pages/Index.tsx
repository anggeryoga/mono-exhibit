import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "@/components/site-header";
import { SearchBar } from "@/components/search-bar";
import { exhibitions, type Exhibition } from "@/lib/exhibitions";
import { usePageMeta } from "@/lib/use-page-meta";

function Symbol() {
  return (
    <svg viewBox="0 0 40 20" className="h-3 w-6" fill="currentColor" aria-hidden>
      <polygon points="0,0 10,0 5,10" />
      <polygon points="10,0 20,0 15,10" />
      <polygon points="20,0 30,0 25,10" />
      <polygon points="30,0 40,0 35,10" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="px-4 pt-10 pb-8">
      <div className="flex items-start justify-between text-foreground">
        <Symbol />
        <Symbol />
        <Symbol />
      </div>
      <h1
        className="font-display select-none text-center font-black lowercase leading-[0.85] tracking-[-0.05em] text-foreground break-all"
        style={{ fontSize: "clamp(2.25rem, 13.5vw, 16rem)" }}
      >
        polisibang.site
      </h1>
    </section>
  );
}

function GalleryItem({ item, offset }: { item: Exhibition; offset: string }) {
  return (
    <Link to={`/exhibition/${item.slug}`} className={`flex flex-col group ${offset}`}>
      <div className="mb-3">
        <h3 className="text-[11px] font-bold uppercase tracking-wider leading-tight">{item.title}</h3>
        <p className="mt-1 text-[10px] leading-snug text-foreground/70 uppercase tracking-wide">{item.desc}</p>
        <p className="mt-1 text-[10px] font-bold tracking-wider">{item.code}</p>
      </div>
      <div className="overflow-hidden bg-foreground/5 aspect-[2/3]">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          width={512}
          height={768}
          className="img-mono h-full w-full object-cover group-hover:scale-[1.03]"
        />
      </div>
    </Link>
  );
}

function Gallery({ items }: { items: Exhibition[] }) {
  const offsets = ["", "", "", "", "", "", "md:mt-16", "md:mt-16", "md:mt-16", "md:mt-16", "md:mt-16", "md:mt-16"];
  if (items.length === 0) {
    return (
      <section className="px-4 py-24 text-center">
        <p className="text-[11px] uppercase tracking-[0.25em] text-foreground/60">No exhibitions match your search.</p>
      </section>
    );
  }
  return (
    <section className="px-4 pb-16 pt-8">
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-4 lg:grid-cols-6">
        {items.map((e, i) => (
          <GalleryItem key={e.slug} item={e} offset={offsets[i] ?? ""} />
        ))}
      </div>
    </section>
  );
}

export default function Index() {
  usePageMeta({
    title: "polisibang.site — Exhibitions Archive",
    description: "Experimental gallery archive of AI art, surreal portraits, and avant-garde installations.",
  });
  const [query, setQuery] = useState("");
  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return exhibitions;
    return exhibitions.filter((e) =>
      [e.title, e.desc, e.category, e.curator, e.location, e.code].join(" ").toLowerCase().includes(q),
    );
  }, [query]);

  return (
    <main className="min-h-screen text-foreground font-sans">
      <Header />
      <Hero />
      <SearchBar
        value={query}
        onChange={setQuery}
        placeholder="Search exhibitions, curators, categories…"
        resultCount={filtered.length}
        totalCount={exhibitions.length}
      />
      <Gallery items={filtered} />
    </main>
  );
}
