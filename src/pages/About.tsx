import { PageShell } from "@/components/site-header";
import { usePageMeta } from "@/lib/use-page-meta";

const team = [
  { name: "Ines Vargas", role: "Director / Curator" },
  { name: "Mara Voss", role: "Digital Curator" },
  { name: "Lena Park", role: "Sculpture & Research" },
  { name: "Hiro Tanaka", role: "Print Editor" },
  { name: "Theo Albrecht", role: "Object Archive" },
  { name: "Camille Ortiz", role: "Fashion / Wearables" },
];

export default function About() {
  usePageMeta({
    title: "About — polisibang.site",
    description: "polisibang.site is an experimental editorial archive of post-digital art, surreal portraiture, and algorithmic design.",
  });
  return (
    <PageShell
      eyebrow="About / Studio"
      title="about"
      intro="An editorial archive operating between gallery, journal, and laboratory. We publish, exhibit, and burn things on a schedule."
    >
      <section className="px-4 py-12 border-b border-foreground/80 grid grid-cols-1 md:grid-cols-12 gap-6">
        <p className="md:col-span-4 text-[10px] uppercase tracking-[0.2em] text-foreground/60">Statement</p>
        <div className="md:col-span-8 space-y-5 text-base md:text-lg leading-relaxed text-foreground/85">
          <p>polisibang.site collects, frames, and stages work that lives between media: post-digital portraiture, algorithmic textiles, sound forests, dust monoliths.</p>
          <p>We treat the archive as a living surface. Exhibitions rotate quarterly, prints are reissued monthly, and the catalogue is rewritten in public.</p>
          <p>The studio is open by appointment. The archive is open always.</p>
        </div>
      </section>

      <section className="px-4 py-12 border-b border-foreground/80">
        <h2 className="font-display uppercase text-3xl md:text-5xl mb-8">Studio</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-6">
          {team.map((t) => (
            <div key={t.name} className="border-t border-foreground/30 pt-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{t.role}</p>
              <p className="mt-1 font-display uppercase text-xl">{t.name}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { k: "Founded", v: "2021" },
          { k: "Exhibitions / Year", v: "12" },
          { k: "Archive", v: "1,348 works" },
        ].map((s) => (
          <div key={s.k} className="border-t border-foreground/80 pt-4">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{s.k}</p>
            <p className="mt-2 font-display text-4xl md:text-5xl">{s.v}</p>
          </div>
        ))}
      </section>
    </PageShell>
  );
}
