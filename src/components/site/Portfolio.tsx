import { useState } from "react";
import { motion } from "framer-motion";
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
    <section id="portfolio" className="flow-section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase">Portfolio</div>
            <h2 className="mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl">
              Recent <span className="text-[#00BCD4]">installations</span>.
            </h2>
            <p className="mt-3 max-w-xl text-slate-500 font-medium">
              A selection of homes, offices and commercial spaces transformed with our aquariums.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-wrap gap-2"
          >
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-all border ${
                  active === c
                    ? "bg-[#0B1E36] text-white border-[#0B1E36]"
                    : "bg-white text-slate-500 border-slate-200 hover:text-[#00BCD4] hover:border-[#00BCD4]"
                }`}
              >
                {c}
              </button>
            ))}
          </motion.div>
        </div>

        <div className="mt-12 flex sm:grid flex-nowrap overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 hide-scrollbar">
          {filtered.map((p, i) => (
            <motion.button
              key={p.title}
              onClick={() => setOpen(i)}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex-shrink-0 w-[85vw] sm:w-auto snap-center group relative overflow-hidden rounded-3xl text-left border border-slate-200 shadow-sm hover:shadow-xl transition-shadow aspect-[4/3]`}
            >
              <img
                src={p.img}
                alt={`${p.title} — ${p.cat} aquarium project`}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/40 to-transparent" />
              <div className="absolute right-4 top-4">
                <span className="rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white">
                  {p.cat}
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <div className="text-xl font-bold text-white">{p.title}</div>
                <div className="mt-1 flex items-center gap-3 text-xs font-medium text-slate-300">
                  <span>{p.size}</span>
                  <span className="h-1 w-1 rounded-full bg-[#00BCD4]" />
                  <span>{p.loc}</span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {open !== null && (
        <div
          className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md"
          onClick={() => setOpen(null)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={filtered[open].img}
              alt={filtered[open].title}
              className="h-[60vh] w-full object-cover"
            />
            <div className="p-6">
              <div className="text-xs font-bold tracking-wider text-[#00BCD4] uppercase">{filtered[open].cat}</div>
              <div className="mt-1 text-3xl font-bold text-[#0B1E36]">{filtered[open].title}</div>
              <div className="mt-2 text-sm font-medium text-slate-500">
                {filtered[open].size} · {filtered[open].loc}
              </div>
            </div>
            <button
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/50 backdrop-blur-md text-[#0B1E36] hover:bg-white transition-colors"
              aria-label="Close"
            >
              ✕
            </button>
          </motion.div>
        </div>
      )}
    </section>
  );
}
