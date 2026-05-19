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

export type Exhibition = {
  slug: string;
  title: string;
  desc: string;
  code: string;
  img: string;
  category: string;
  date: string;
  location: string;
  curator: string;
  longDesc: string[];
};

export const exhibitions: Exhibition[] = [
  { slug: "concrete-dreams", title: "Concrete Dreams", desc: "Brutalist architecture meets surrealist painting in monolithic installation", code: "25S", img: ex01, category: "Installation", date: "12 Mar — 28 Jun 2026", location: "Hall A / Floor 02", curator: "Ines Vargas", longDesc: ["Concrete Dreams collides raw brutalist volumes with the dream-logic of surrealist painting. Visitors move through monolithic forms where shadow, fire, and figure dissolve into a single ritual space.", "The work asks what remains of architecture when it is asked to remember, to grieve, and to dance."] },
  { slug: "the-whispering-wire", title: "The Whispering Wire", desc: "Images translating fabulous atmospheres", code: "5S", img: ex02, category: "Print Series", date: "04 Apr — 19 May 2026", location: "Hall B / Floor 01", curator: "Hiro Tanaka", longDesc: ["A series of large-format prints where crimson clouds, lone moons, and migrating birds form a quiet, almost mythological weather report.", "Each image is a translation of sound into atmosphere."] },
  { slug: "404-art-not-found", title: "404: Art Not Found", desc: "A collection of intentionally corrupted digital files as modern art", code: "14S", img: ex03, category: "Digital", date: "21 Jan — 30 Apr 2026", location: "Black Room", curator: "Mara Voss", longDesc: ["404 frames glitched, deleted, and broken digital files as finished works. What the machine refuses to render becomes the subject.", "The exhibition is a meditation on absence in an age of total recording."] },
  { slug: "floracipher", title: "Floracipher", desc: "Fragile petals and steel structures, ancient symbols of floristry and neural network predictions of new forms", code: "25S", img: ex04, category: "Sculpture", date: "02 Feb — 14 Jul 2026", location: "Atrium", curator: "Lena Park", longDesc: ["Floracipher trains neural networks on centuries of floral symbology, then casts their hallucinations in steel and silk.", "The result is a botany that has never existed and cannot be pressed."] },
  { slug: "the-last-library", title: "The Last Library", desc: "Physical books transformed into combustible art objects", code: "13S", img: ex05, category: "Object", date: "18 Mar — 09 Jun 2026", location: "Hall C", curator: "Theo Albrecht", longDesc: ["A working library of books cast in wax, paraffin, and pressed sulphur — every volume engineered to burn cleanly.", "Reading is permitted. Borrowing is not."] },
  { slug: "pixelated-wilderness", title: "Pixelated Wilderness", desc: "8-bit landscapes sprawling across massive LED canvases", code: "8S", img: ex06, category: "LED Installation", date: "11 May — 22 Aug 2026", location: "LED Hall", curator: "Yuki Mori", longDesc: ["Eight-bit forests, rivers, and storms rendered at architectural scale.", "The lowest resolution becomes the most immersive."] },
  { slug: "anonymous-portraits", title: "Anonymous Portraits", desc: "Faces reconstructed from deleted social media profile data", code: "12S", img: ex07, category: "Photography", date: "27 Feb — 05 May 2026", location: "Hall A / Floor 01", curator: "Aiden Cole", longDesc: ["Each portrait is built from metadata left behind by accounts that have been deleted.", "The exhibition is an obituary written in pixels."] },
  { slug: "the-alchemy-of-dust", title: "The Alchemy of Dust", desc: "Precision sculptures carved from household debris and subway air particles", code: "22S", img: ex08, category: "Sculpture", date: "09 Jan — 30 Mar 2026", location: "Black Room", curator: "Sofia Renn", longDesc: ["Dust collected from apartments, tunnels, and platforms, compressed and carved into monoliths.", "Each work is heavier than it looks."] },
  { slug: "the-museum-of-last-words", title: "The Museum of Last Words", desc: "Final utterances of historical figures materialized as suspended glass typography", code: "25S", img: ex09, category: "Typography", date: "14 Apr — 28 Jul 2026", location: "Atrium", curator: "Noor Hadid", longDesc: ["Final sentences cast in suspended glass — each letter a fragile weight hung in still air.", "Visitors are asked to walk quietly. The works ring at the slightest disturbance."] },
  { slug: "haute-data", title: "Haute Data", desc: "Algorithmic fashion: Dresses that reshape in real-time based on social media trends, woven with optical fiber", code: "05", img: ex10, category: "Fashion", date: "03 Jun — 17 Sep 2026", location: "Hall B / Floor 02", curator: "Camille Ortiz", longDesc: ["Garments woven with optical fiber that respond to live social-media sentiment.", "The dresses are never the same shape twice."] },
  { slug: "theremin-forest", title: "Theremin Forest", desc: "Walk through an electronic woodland", code: "16S", img: ex11, category: "Sound", date: "20 May — 12 Aug 2026", location: "Hall D", curator: "Erik Lund", longDesc: ["A woodland of antennae that plays itself as visitors move between trees.", "The forest is silent only when empty."] },
  { slug: "woven-times", title: "Woven Times", desc: "Traditional rugs reinterpreted through modern patterns and technology - where ancient symbols meet digital patterns, and hand embroidery argues with laser cutting", code: "2S", img: ex12, category: "Textile", date: "08 Feb — 19 Jun 2026", location: "Textile Wing", curator: "Amina Belkacem", longDesc: ["Hand embroidery and laser cutting share the same warp.", "The patterns are old. The arguments between them are new."] },
];

export function getExhibition(slug: string) {
  return exhibitions.find((e) => e.slug === slug);
}
