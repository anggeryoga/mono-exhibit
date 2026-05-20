interface SearchBarProps {
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
  resultCount?: number;
  totalCount?: number;
}

export function SearchBar({ value, onChange, placeholder = "Search…", resultCount, totalCount }: SearchBarProps) {
  return (
    <div className="px-4 py-5 border-b border-foreground/80 bg-background/70 backdrop-blur-sm">
      <div className="flex items-center gap-3">
        <svg viewBox="0 0 24 24" className="h-4 w-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
          <circle cx="11" cy="11" r="7" />
          <path d="M20 20l-3.5-3.5" />
        </svg>
        <input
          type="search"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className="w-full bg-transparent border-0 border-b border-foreground/40 focus:border-foreground focus:outline-none py-1 text-sm uppercase tracking-[0.15em] placeholder:text-foreground/40"
        />
        {typeof resultCount === "number" && typeof totalCount === "number" && (
          <span className="shrink-0 font-mono tabular-nums text-[10px] uppercase tracking-[0.18em] text-foreground/60">
            {String(resultCount).padStart(2, "0")} / {String(totalCount).padStart(2, "0")}
          </span>
        )}
      </div>
    </div>
  );
}
