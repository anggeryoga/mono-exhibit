import { Link } from "react-router-dom";
import { PageShell } from "@/components/site-header";
import { exhibitions } from "@/lib/exhibitions";
import { usePageMeta } from "@/lib/use-page-meta";

const metrics = exhibitions
  .map((e, i) => {
    const visits = 8240 - i * 437 + ((i * 91) % 233);
    const trend = ((i * 7) % 11) - 5;
    return { ...e, visits, trend };
  })
  .sort((a, b) => b.visits - a.visits);

export default function Ranking() {
  usePageMeta({
    title: "Ranking — polisibang.site",
    description: "Weekly ranked archive of the most visited exhibitions on polisibang.site.",
  });
  return (
    <PageShell
      eyebrow="Archive / Week 21"
      title="ranking"
      intro="The most visited exhibitions this week, ranked by archive footfall, residency time, and citation count."
    >
      <section className="px-4 py-10">
        <div className="hidden md:grid grid-cols-12 gap-4 pb-3 border-b border-foreground/80 text-[10px] uppercase tracking-[0.2em] text-foreground/60">
          <div className="col-span-1">#</div>
          <div className="col-span-2">Cover</div>
          <div className="col-span-4">Title</div>
          <div className="col-span-2">Category</div>
          <div className="col-span-2 text-right">Visits</div>
          <div className="col-span-1 text-right">Trend</div>
        </div>

        <ul>
          {metrics.map((m, idx) => (
            <li key={m.slug} className="border-b border-foreground/30">
              <Link
                to={`/exhibition/${m.slug}`}
                className="grid grid-cols-12 gap-3 md:gap-4 items-center py-4 group hover:bg-foreground/[0.03]"
              >
                <div className="col-span-2 md:col-span-1 font-display text-3xl md:text-5xl leading-none">
                  {String(idx + 1).padStart(2, "0")}
                </div>
                <div className="col-span-3 md:col-span-2">
                  <div className="overflow-hidden bg-foreground/5 aspect-[3/4]">
                    <img src={m.img} alt={m.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
                  </div>
                </div>
                <div className="col-span-7 md:col-span-4">
                  <h3 className="font-display uppercase text-lg md:text-2xl leading-tight">{m.title}</h3>
                  <p className="mt-1 text-[10px] uppercase tracking-wide text-foreground/60 line-clamp-2">{m.desc}</p>
                </div>
                <div className="hidden md:block md:col-span-2 text-[10px] uppercase tracking-[0.18em] text-foreground/70">
                  {m.category}
                </div>
                <div className="hidden md:block md:col-span-2 text-right font-mono tabular-nums">
                  {m.visits.toLocaleString()}
                </div>
                <div className="hidden md:block md:col-span-1 text-right font-mono tabular-nums">
                  <span className={m.trend >= 0 ? "text-foreground" : "text-foreground/50"}>
                    {m.trend >= 0 ? "▲" : "▼"} {Math.abs(m.trend)}
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </PageShell>
  );
}
