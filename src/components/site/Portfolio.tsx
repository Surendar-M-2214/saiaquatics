import { useState } from "react";
import home from "@/assets/project-home.jpg";
import office from "@/assets/project-office.jpg";
import aquascape from "@/assets/project-aquascape.jpg";
import commercial from "@/assets/project-commercial.jpg";
import reef from "@/assets/project-reef.jpg";
import discus from "@/assets/project-discus.jpg";

type Cat = "All" | "Home" | "Office" | "Commercial" | "Aquascaping";

const projects: {
  img: string;
  title: string;
  cat: Exclude<Cat, "All">;
  size: string;
  loc: string;
  span: string;
}[] = [
  {
    img: home,
    title: "Curved Wall Aquarium",
    cat: "Home",
    size: "300 gal",
    loc: "Bandra Residence",
    span: "sm:col-span-2 sm:row-span-2",
  },
  { img: reef, title: "Reef Showpiece", cat: "Home", size: "180 gal", loc: "Juhu Villa", span: "" },
  {
    img: office,
    title: "Reception Centerpiece",
    cat: "Office",
    size: "500 gal",
    loc: "BKC HQ",
    span: "sm:col-span-2",
  },
  {
    img: aquascape,
    title: "Iwagumi Nature Scape",
    cat: "Aquascaping",
    size: "60 gal",
    loc: "Studio Build",
    span: "",
  },
  {
    img: commercial,
    title: "Lobby Cylinder",
    cat: "Commercial",
    size: "2,000 gal",
    loc: "5★ Hotel",
    span: "sm:row-span-2",
  },
  {
    img: discus,
    title: "Discus Dining Tank",
    cat: "Home",
    size: "120 gal",
    loc: "Powai Penthouse",
    span: "",
  },
];

const categories: Cat[] = ["All", "Home", "Office", "Commercial", "Aquascaping"];

export function Portfolio() {
  const [active, setActive] = useState<Cat>("All");
  const [open, setOpen] = useState<number | null>(null);
  const filtered = projects.filter((p) => active === "All" || p.cat === active);

  return (
    <section id="portfolio" className="flow-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs tracking-[0.25em] text-aqua uppercase">Portfolio</div>
            <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
              Recent <span className="text-gradient italic">installations</span>.
            </h2>
            <p className="mt-3 max-w-xl text-muted-foreground">
              A selection of homes, offices and commercial spaces transformed with our aquariums.
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm transition-all ${
                  active === c
                    ? "bg-gradient-to-r from-aqua to-cyan-glow text-ocean-deep shadow-[0_0_20px_-6px_var(--aqua)]"
                    : "glass text-muted-foreground hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-3 sm:auto-rows-[260px]">
          {filtered.map((p, i) => (
            <button
              key={p.title}
              onClick={() => setOpen(i)}
              className={`tilt-card group relative overflow-hidden rounded-3xl text-left ${p.span}`}
            >
              <img
                src={p.img}
                alt={`${p.title} — ${p.cat} aquarium project`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep via-ocean-deep/30 to-transparent" />
              <div className="absolute right-4 top-4">
                <span className="rounded-full glass-strong px-3 py-1 text-[10px] tracking-wider uppercase text-aqua">
                  {p.cat}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="font-display text-xl text-foreground">{p.title}</div>
                <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                  <span>{p.size}</span>
                  <span className="h-1 w-1 rounded-full bg-aqua" />
                  <span>{p.loc}</span>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-ocean-deep/85 p-4 backdrop-blur-md animate-fade-up"
          onClick={() => setOpen(null)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-3xl glass-strong"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[open].img}
              alt={filtered[open].title}
              className="h-[60vh] w-full object-cover"
            />
            <div className="p-6">
              <div className="text-xs tracking-wider text-aqua uppercase">{filtered[open].cat}</div>
              <div className="mt-1 font-display text-3xl">{filtered[open].title}</div>
              <div className="mt-2 text-sm text-muted-foreground">
                {filtered[open].size} · {filtered[open].loc}
              </div>
            </div>
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full glass text-foreground"
              aria-label="Close"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
