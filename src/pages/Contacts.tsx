import { PageShell } from "@/components/site-header";
import { usePageMeta } from "@/lib/use-page-meta";

const channels = [
  { k: "General", v: "hello@polisibang.site" },
  { k: "Press", v: "press@polisibang.site" },
  { k: "Submissions", v: "open@polisibang.site" },
  { k: "Store / Editions", v: "store@polisibang.site" },
];

export default function Contacts() {
  usePageMeta({
    title: "Contacts — polisibang.site",
    description: "Get in touch with the polisibang.site editorial desk, press, and visitor services.",
  });
  return (
    <PageShell
      eyebrow="Contact / Desk Open"
      title="contacts"
      intro="The archive answers within five working days. Walk-ins by appointment only."
    >
      <section className="px-4 py-12 grid grid-cols-1 md:grid-cols-12 gap-8 border-b border-foreground/80">
        <div className="md:col-span-5 space-y-6">
          {channels.map((c) => (
            <div key={c.k} className="border-t border-foreground/30 pt-3">
              <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{c.k}</p>
              <p className="mt-1 font-display text-2xl md:text-3xl">{c.v}</p>
            </div>
          ))}
          <div className="border-t border-foreground/30 pt-3">
            <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Studio</p>
            <p className="mt-1 text-sm md:text-base">
              Floor 02, Building H<br />
              14 Beaune Passage<br />
              Jakarta · Indonesia
            </p>
          </div>
        </div>

        <form
          className="md:col-span-7 flex flex-col gap-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks — your message is in the queue.");
          }}
        >
          <label className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Name</span>
            <input required className="border-b border-foreground bg-transparent py-2 outline-none focus:border-b-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Email</span>
            <input required type="email" className="border-b border-foreground bg-transparent py-2 outline-none focus:border-b-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Subject</span>
            <input className="border-b border-foreground bg-transparent py-2 outline-none focus:border-b-2" />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">Message</span>
            <textarea required rows={6} className="border-b border-foreground bg-transparent py-2 outline-none focus:border-b-2 resize-none" />
          </label>
          <button className="self-start mt-2 border border-foreground px-6 py-3 text-[10px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors">
            Send Message
          </button>
        </form>
      </section>
    </PageShell>
  );
}
