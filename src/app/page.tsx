import Link from "next/link";

const projects = [
  { slug: "hero", title: "1) Smooth Fade-In Hero" },
  { slug: "product-showcase", title: "2) Product Showcase Timeline" },
  { slug: "scroll-reveal", title: "3) Scroll Reveal Company Page" },
  { slug: "parallax-photos", title: "4) Parallax Photography Landing" },
  { slug: "pinned-agency", title: "5) Pinned Agency Section" },
  { slug: "saas-features", title: "6) Saas Feature Grid" },
  { slug: "fashion-text", title: "7) Fashion Text Reveal" },
  { slug: "car-sequence", title: "8) Car Image Sequence" },
  { slug: "conference-horizontal", title: "9) Tech Conference Horizontal" },
  { slug: "startup-transitions", title: "10) Startup Page Transitions" },
];

export default function Home() {
  return (
    <div className=" section flex-col items-start max-w-6xl mx-auto">
      <h1 className="text-3xl md:text-5xl font-bold mb-4">
        GSAP + Next.js + Tailwind 10 Projects Lab
      </h1>
      <p>
        Click any project below to open a dedicated demo page. Each one uses a
        different GSAP technique, from simple fade-ins to parallax and
        horizontal scrool.
      </p>

      <div className="grid md:grid-cols-2 gap-4 w-full">
        {projects.map((p) => (
          <Link
            key={p.slug}
            href={`/${p.slug}`}
            className="border border-slate-800 rounded-xl p-4 hover:border-emerald-400 hover:bg-slate-900 transition"
          >
            <h2 className="font-semibold mb-1">{p.title}</h2>
            <p className="text-s text-slate-400">
              open demo / view GSAP code and comments.
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
