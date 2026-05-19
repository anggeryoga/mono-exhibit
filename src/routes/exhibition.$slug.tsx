import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { Header } from "@/components/site-header";
import { exhibitions, getExhibition } from "@/lib/exhibitions";

export const Route = createFileRoute("/exhibition/$slug")({
  loader: ({ params }) => {
    const item = getExhibition(params.slug);
    if (!item) throw notFound();
    return { item };
  },
  head: ({ loaderData }) => {
    const t = loaderData?.item;
    const title = t ? `${t.title} — polisibang.site` : "Exhibition — polisibang.site";
    const desc = t?.desc ?? "Exhibition detail.";
    return {
      meta: [
        { title },
        { name: "description", content: desc },
        { property: "og:title", content: title },
        { property: "og:description", content: desc },
        ...(t ? [{ property: "og:image", content: t.img }] : []),
      ],
    };
  },
  notFoundComponent: () => (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <div className="px-4 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">404 / Not in Archive</p>
        <h1 className="mt-4 font-display text-5xl md:text-7xl uppercase">No such exhibition</h1>
        <Link to="/" className="mt-8 inline-block border-b border-foreground text-[10px] uppercase tracking-[0.2em] pb-1">
          Back to Archive
        </Link>
      </div>
    </main>
  ),
  errorComponent: ({ error }) => (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <div className="px-4 py-24 text-center">
        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Error</p>
        <p className="mt-4">{error.message}</p>
      </div>
    </main>
  ),
  component: Detail,
});

function Detail() {
  const { item } = Route.useLoaderData();
  const others = exhibitions.filter((e) => e.slug !== item.slug).slice(0, 4);

  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />

      {/* Breadcrumb */}
      <div className="px-4 pt-6 text-[10px] uppercase tracking-[0.18em] flex gap-2 text-foreground/60">
        <Link to="/" className="hover:text-foreground">Index</Link>
        <span>/</span>
        <span>Exhibition</span>
        <span>/</span>
        <span className="text-foreground">{item.code}</span>
      </div>

      {/* Title block */}
      <section className="px-4 pt-6 pb-8 border-b border-foreground/80">
        <div className="flex items-baseline justify-between gap-4 text-[10px] uppercase tracking-[0.18em] text-foreground/70">
          <span>{item.category}</span>
          <span className="font-bold text-foreground">{item.code}</span>
        </div>
        <h1
          className="mt-4 font-display uppercase leading-[0.88] tracking-[-0.03em]"
          style={{ fontSize: "clamp(2.5rem, 10vw, 9rem)" }}
        >
          {item.title}
        </h1>
        <p className="mt-6 max-w-2xl text-sm md:text-base uppercase tracking-wide text-foreground/80">
          {item.desc}
        </p>
      </section>

      {/* Image + meta */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-x-4 gap-y-8 px-4 py-10 border-b border-foreground/80">
        <div className="md:col-span-8">
          <div className="overflow-hidden bg-foreground/5 aspect-[3/4] md:aspect-[4/3]">
            <img
              src={item.img}
              alt={item.title}
              width={1024}
              height={768}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
        <aside className="md:col-span-4 flex flex-col gap-6 text-[11px] uppercase tracking-[0.15em]">
          <MetaRow label="Date" value={item.date} />
          <MetaRow label="Category" value={item.category} />
          <MetaRow label="Location" value={item.location} />
          <MetaRow label="Curator" value={item.curator} />
          <MetaRow label="Code" value={item.code} />
        </aside>
      </section>

      {/* Long description */}
      <section className="px-4 py-12 border-b border-foreground/80">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          <p className="md:col-span-4 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
            Statement<br />— {item.curator}
          </p>
          <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
            {item.longDesc.map((p: string, i: number) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="px-4 py-12">
        <div className="flex items-baseline justify-between mb-6 text-[10px] uppercase tracking-[0.2em]">
          <span>Continue / Archive</span>
          <Link to="/" className="border-b border-foreground pb-0.5 hover:opacity-60">
            All Exhibitions →
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-4 md:gap-x-4">
          {others.map((o) => (
            <Link
              key={o.slug}
              to="/exhibition/$slug"
              params={{ slug: o.slug }}
              className="group flex flex-col"
            >
              <div className="overflow-hidden bg-foreground/5 aspect-[2/3]">
                <img
                  src={o.img}
                  alt={o.title}
                  loading="lazy"
                  width={512}
                  height={768}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03] group-hover:opacity-90"
                />
              </div>
              <h3 className="mt-3 text-[11px] font-bold uppercase tracking-wider">{o.title}</h3>
              <p className="text-[10px] uppercase tracking-wide text-foreground/60">{o.category} · {o.code}</p>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}

function MetaRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-t border-foreground/30 pt-2">
      <p className="text-[9px] tracking-[0.2em] text-foreground/50">{label}</p>
      <p className="mt-1 font-bold text-foreground">{value}</p>
    </div>
  );
}
