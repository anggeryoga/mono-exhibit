import { exhibitions } from "@/lib/exhibitions";

export type Post = {
  slug: string;
  kicker: string;
  title: string;
  author: string;
  date: string;
  read: string;
  excerpt: string;
  /** Optional: override cover image. Falls back to matching exhibition image by slug. */
  image?: string;
  /** Optional: long-form body, each item is a paragraph. */
  body?: string[];
};

/**
 * Tambahkan postingan baru di sini.
 * Cukup tambahkan satu object baru ke array `posts`, blog & halaman detail
 * akan otomatis terupdate.
 */
export const posts: Post[] = [
  {
    slug: "concrete-dreams",
    kicker: "Field Notes",
    title: "Walking through Concrete Dreams",
    author: "Ines Vargas",
    date: "12 Mar 2026",
    read: "6 min",
    excerpt: "On the strange choreography of brutalist halls and the dancers we placed inside them.",
    body: [
      "We began with the assumption that brutalism is loud. After three months inside the halls, we learned the opposite — it is the quietest material we have ever worked with.",
      "The dancers responded by slowing down. The architecture set the tempo.",
    ],
  },
  {
    slug: "404-art-not-found",
    kicker: "Essay",
    title: "404 as a Medium",
    author: "Mara Voss",
    date: "21 Jan 2026",
    read: "9 min",
    excerpt: "What happens when the broken file becomes the final work, signed and dated.",
  },
  {
    slug: "floracipher",
    kicker: "Studio Visit",
    title: "Inside the Floracipher Greenhouse",
    author: "Lena Park",
    date: "02 Feb 2026",
    read: "7 min",
    excerpt: "Steel petals, hallucinated taxonomies, and a neural network that refuses to bloom on schedule.",
  },
  {
    slug: "the-last-library",
    kicker: "Conversation",
    title: "Burning the Last Library",
    author: "Theo Albrecht",
    date: "18 Mar 2026",
    read: "5 min",
    excerpt: "A short interview with the curator on what it means to lend a book made of wax.",
  },
  {
    slug: "haute-data",
    kicker: "Long Read",
    title: "The Dress that Reads the Feed",
    author: "Camille Ortiz",
    date: "03 Jun 2026",
    read: "12 min",
    excerpt: "Optical fiber, trending hashtags, and the surprisingly tender choreography of algorithmic fashion.",
  },
  {
    slug: "theremin-forest",
    kicker: "Sound",
    title: "How to Score a Forest",
    author: "Erik Lund",
    date: "20 May 2026",
    read: "8 min",
    excerpt: "Tuning a woodland of antennae and learning to be quiet enough to hear the trees.",
  },
];

export function imageFor(slug: string): string | undefined {
  const post = posts.find((p) => p.slug === slug);
  if (post?.image) return post.image;
  return exhibitions.find((e) => e.slug === slug)?.img;
}

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
