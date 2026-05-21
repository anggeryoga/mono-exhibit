import { PageShell } from "@/components/site-header";
import { usePageMeta } from "@/lib/use-page-meta";

const sections = [
  { h: "What we collect", p: "Basic analytics (page views, referrers), and any information you provide through forms — name, email, message. We do not buy data and we do not sell it." },
  { h: "How we use it", p: "To run the archive, answer your messages, and improve what we publish. Aggregated, anonymous metrics feed the weekly ranking page." },
  { h: "Cookies", p: "Strictly necessary cookies only. No advertising trackers. You can disable cookies in your browser without breaking the site." },
  { h: "Third parties", p: "We use a small number of hosting and email providers. They process data on our behalf under standard data-processing agreements." },
  { h: "Your rights", p: "Request a copy of your data, ask us to delete it, or opt out of any communication. Write to privacy@polisibang.site and we will respond within thirty days." },
  { h: "Changes", p: "When this policy changes, we date it and post it here. The archive remembers every version." },
];

export default function Privacy() {
  usePageMeta({
    title: "Privacy — polisibang.site",
    description: "How polisibang.site collects, uses, and protects information from visitors of the site and the archive.",
  });
  return (
    <PageShell
      eyebrow="Policy / v3 · 2026"
      title="privacy"
      intro="Plain-language summary of how the archive handles your information. The legal version, if you need it, is available on request."
    >
      <section className="px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 max-w-5xl">
          {sections.map((s, i) => (
            <div key={s.h} className="contents">
              <p className="md:col-span-2 font-mono text-[10px] uppercase tracking-[0.2em] text-foreground/60">
                {String(i + 1).padStart(2, "0")}
              </p>
              <div className="md:col-span-10 border-t border-foreground/30 pt-3 pb-6">
                <h2 className="font-display uppercase text-2xl md:text-3xl">{s.h}</h2>
                <p className="mt-3 text-base md:text-lg leading-relaxed text-foreground/85">{s.p}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="mt-10 text-[10px] uppercase tracking-[0.2em] text-foreground/60">Last updated · 19 May 2026</p>
      </section>
    </PageShell>
  );
}
