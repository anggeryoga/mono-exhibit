import { Link } from "@tanstack/react-router";

const links = [
  { to: "/" as const, label: "Exhibitions" },
  { to: "/store" as const, label: "Store" },
  { to: "/about" as const, label: "About" },
  { to: "/ranking" as const, label: "Ranking" },
];

const right = [
  { to: "/contacts" as const, label: "Contacts" },
  { to: "/blog" as const, label: "Blog" },
  { to: "/privacy" as const, label: "Privacy" },
];

export function Header() {
  return (
    <header className="border-b border-foreground/80 sticky top-0 z-50 backdrop-blur-md bg-background/70 supports-[backdrop-filter]:bg-background/55">
      <div className="grid grid-cols-3 items-center px-3 md:px-5 py-3 md:py-3.5 text-[9px] md:text-[10px] uppercase tracking-[0.22em]">
        <nav className="flex gap-3 md:gap-6 overflow-hidden items-center">
          {links.map((l, i) => (
            <Link
              key={l.to}
              to={l.to}
              className={`relative py-1 hover:opacity-100 opacity-70 transition-opacity ${i > 0 ? "hidden sm:inline" : ""}`}
              activeProps={{ className: "font-bold opacity-100 [&]:opacity-100" }}
              activeOptions={{ exact: true }}
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <Link
          to="/"
          className="text-center font-display tracking-[0.18em] md:tracking-[0.24em] text-[11px] md:text-sm lowercase hover:tracking-[0.3em] transition-all duration-500"
        >
          polisibang.site
        </Link>

        <nav className="flex justify-end items-center gap-3 md:gap-5">
          {right.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className="hidden md:inline opacity-70 hover:opacity-100 transition-opacity"
              activeProps={{ className: "font-bold [&]:opacity-100" }}
            >
              {l.label}
            </Link>
          ))}
          <span className="flex items-center gap-3 md:ml-3 md:pl-3 md:border-l md:border-foreground/30">
            <Link to="/contacts" aria-label="Mail" className="opacity-70 hover:opacity-100">
              <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14"/><path d="M3 5l9 8 9-8"/></svg>
            </Link>
            <span className="hidden md:inline font-mono tabular-nums text-[9px] opacity-60">25 · 26</span>
          </span>
        </nav>
      </div>
    </header>
  );
}

export function PageShell({
  eyebrow,
  title,
  intro,
  children,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen text-foreground font-sans">
      <Header />
      <section className="px-4 pt-10 pb-6 border-b border-foreground/80">
        <p className="text-[10px] uppercase tracking-[0.2em] text-foreground/60">{eyebrow}</p>
        <h1
          className="mt-3 font-display lowercase leading-[0.88] tracking-[-0.04em]"
          style={{ fontSize: "clamp(2.5rem, 11vw, 11rem)" }}
        >
          {title}
        </h1>
        {intro && (
          <p className="mt-5 max-w-2xl text-sm md:text-base uppercase tracking-wide text-foreground/75">
            {intro}
          </p>
        )}
      </section>
      {children}
    </main>
  );
}
