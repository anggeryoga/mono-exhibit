import { Link } from "@tanstack/react-router";

export function Header() {
  return (
    <header className="border-b border-foreground/80 sticky top-0 bg-background z-50">
      <div className="grid grid-cols-3 items-center px-3 md:px-4 py-3 text-[9px] md:text-[10px] uppercase tracking-[0.18em]">
        <nav className="flex gap-3 md:gap-5 overflow-hidden">
          <Link to="/" className="hover:opacity-60">Exhibitions</Link>
          <a href="#" className="hover:opacity-60 hidden sm:inline">Store</a>
          <a href="#" className="hover:opacity-60 hidden sm:inline">About</a>
        </nav>
        <Link to="/" className="text-center font-bold tracking-[0.25em] md:tracking-[0.3em] text-[10px] md:text-xs">
          NEIROVISION
        </Link>
        <nav className="flex justify-end items-center gap-3 md:gap-5">
          <a href="#" className="hover:opacity-60 hidden md:inline">Contacts</a>
          <a href="#" className="hover:opacity-60 hidden md:inline">Blog</a>
          <a href="#" className="hover:opacity-60 hidden md:inline">Privacy</a>
          <span className="flex gap-3 md:ml-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14"/><path d="M3 5l9 8 9-8"/></svg>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
          </span>
        </nav>
      </div>
    </header>
  );
}
