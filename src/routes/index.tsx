import { createFileRoute } from "@tanstack/react-router";
import ex01 from "@/assets/ex-01.jpg";
import ex02 from "@/assets/ex-02.jpg";
import ex03 from "@/assets/ex-03.jpg";
import ex04 from "@/assets/ex-04.jpg";
import ex05 from "@/assets/ex-05.jpg";
import ex06 from "@/assets/ex-06.jpg";
import ex07 from "@/assets/ex-07.jpg";
import ex08 from "@/assets/ex-08.jpg";
import ex09 from "@/assets/ex-09.jpg";
import ex10 from "@/assets/ex-10.jpg";
import ex11 from "@/assets/ex-11.jpg";
import ex12 from "@/assets/ex-12.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "NEIROVISION — Exhibitions" },
      {
        name: "description",
        content:
          "NEIROVISION exhibitions archive — an experimental gallery of AI art, surreal portraits, and avant-garde installations.",
      },
      { property: "og:title", content: "NEIROVISION — Exhibitions" },
      {
        property: "og:description",
        content:
          "Experimental gallery of AI art, surreal portraits, and avant-garde installations.",
      },
    ],
  }),
  component: Index,
});

type Exhibition = {
  title: string;
  desc: string;
  code: string;
  img: string;
  span?: number; // visual offset row pattern
};

const exhibitions: Exhibition[] = [
  { title: "Concrete Dreams", desc: "Brutalist architecture meets surrealist painting in monolithic installation", code: "25S", img: ex01 },
  { title: "The Whispering Wire", desc: "Images translating fabulous atmospheres", code: "5S", img: ex02 },
  { title: "404: Art Not Found", desc: "A collection of intentionally corrupted digital files as modern art", code: "14S", img: ex03 },
  { title: "Floracipher", desc: "Fragile petals and steel structures, ancient symbols of floristry and neural network predictions of new forms", code: "25S", img: ex04 },
  { title: "The Last Library", desc: "Physical books transformed into combustible art objects", code: "13S", img: ex05 },
  { title: "Pixelated Wilderness", desc: "8-bit landscapes sprawling across massive LED canvases", code: "8S", img: ex06 },
  { title: "Anonymous Portraits", desc: "Faces reconstructed from deleted social media profile data", code: "12S", img: ex07 },
  { title: "The Alchemy of Dust", desc: "Precision sculptures carved from household debris and subway air particles", code: "22S", img: ex08 },
  { title: "The Museum of Last Words", desc: "Final utterances of historical figures materialized as suspended glass typography", code: "25S", img: ex09 },
  { title: "Haute Data", desc: "Algorithmic fashion: Dresses that reshape in real-time based on social media trends, woven with optical fiber", code: "05", img: ex10 },
  { title: "Theremin Forest", desc: "Walk through an electronic woodland", code: "16S", img: ex11 },
  { title: "Woven Times", desc: "Traditional rugs reinterpreted through modern patterns and technology - where ancient symbols meet digital patterns, and hand embroidery argues with laser cutting", code: "2S", img: ex12 },
];

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

function Header() {
  return (
    <header className="border-b border-foreground/80">
      <div className="grid grid-cols-3 items-center px-4 py-3 text-[10px] uppercase tracking-[0.18em]">
        <nav className="flex gap-5">
          <a href="#" className="hover:opacity-60">Exhibitions</a>
          <a href="#" className="hover:opacity-60">Store</a>
          <a href="#" className="hover:opacity-60">About</a>
        </nav>
        <div className="text-center font-bold tracking-[0.3em] text-xs">NEIROVISION</div>
        <nav className="flex justify-end items-center gap-5">
          <a href="#" className="hover:opacity-60">Contacts</a>
          <a href="#" className="hover:opacity-60">Blog</a>
          <a href="#" className="hover:opacity-60">Privacy</a>
          <span className="flex gap-3 ml-2">
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="5" width="18" height="14"/><path d="M3 5l9 8 9-8"/></svg>
            <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>
          </span>
        </nav>
      </div>
    </header>
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
      <h1 className="font-display select-none text-center font-black uppercase leading-[0.82] tracking-[-0.04em] text-foreground"
          style={{ fontSize: "clamp(4rem, 19vw, 22rem)" }}>
        Exhibitions
      </h1>
    </section>
  );
}

function GalleryItem({ item, offset }: { item: Exhibition; offset: string }) {
  return (
    <article className={`flex flex-col ${offset}`}>
      <div className="mb-3">
        <h3 className="text-[11px] font-bold uppercase tracking-wider leading-tight">{item.title}</h3>
        <p className="mt-1 text-[10px] leading-snug text-foreground/70 uppercase tracking-wide">
          {item.desc}
        </p>
        <p className="mt-1 text-[10px] font-bold tracking-wider">{item.code}</p>
      </div>
      <div className="overflow-hidden bg-foreground/5 aspect-[2/3]">
        <img
          src={item.img}
          alt={item.title}
          loading="lazy"
          width={512}
          height={768}
          className="h-full w-full object-cover transition-transform duration-700 ease-out hover:scale-[1.03] hover:opacity-90"
        />
      </div>
    </article>
  );
}

function Gallery() {
  // staggered offset like reference: every other column drops slightly
  const offsets = ["", "", "", "", "", "", "md:mt-16", "md:mt-16", "md:mt-16", "md:mt-16", "md:mt-16", "md:mt-16"];
  return (
    <section className="px-4 pb-16">
      <div className="grid grid-cols-2 gap-x-3 gap-y-8 md:grid-cols-3 md:gap-x-4 lg:grid-cols-6">
        {exhibitions.map((e, i) => (
          <GalleryItem key={e.title} item={e} offset={offsets[i] ?? ""} />
        ))}
      </div>
    </section>
  );
}

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground font-sans">
      <Header />
      <Hero />
      <Gallery />
    </main>
  );
}
