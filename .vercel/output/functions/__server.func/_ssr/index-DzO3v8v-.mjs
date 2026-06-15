import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { U as User, M as Menu, A as Award, L as Leaf, S as Sparkles, W as Waves, a as Mountain, b as Wrench, F as Fish, B as Building2, c as Users, T as Trophy, C as Calendar, d as Star, e as ChevronLeft, f as ChevronRight, P as Phone, g as MessageCircle, h as MapPin, i as Mail, j as Send, I as Instagram, k as Facebook } from "../_libs/lucide-react.mjs";
import { m as motion } from "../_libs/framer-motion.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const links = [
  { href: "/configurator", label: "Build Tank" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" }
];
function Nav() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [mobileOpen, setMobileOpen] = reactExports.useState(false);
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { className: `fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-4 sm:pt-6`, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto w-full max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#top", className: "flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 shadow-sm border border-slate-200 hover:bg-white transition-colors", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/saiaqua%20logo.png", alt: "Sai Aquatics Logo", className: "h-6 w-6 sm:h-7 sm:w-7 object-cover rounded-full" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-base sm:text-lg font-bold text-[#0B1E36] tracking-tight", children: "Sai Aquatics" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { className: "hidden md:flex items-center gap-8 rounded-full bg-white/80 backdrop-blur-md px-8 py-2.5 border border-slate-200 shadow-sm transition-colors hover:bg-white", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: l.href,
          className: "text-sm font-semibold text-[#0B1E36] transition-colors hover:text-[#00BCD4]",
          children: l.label
        },
        l.href
      )) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contact", className: "grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 hover:bg-white transition-colors", "aria-label": "Account", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-5 w-5 text-[#0B1E36]" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setMobileOpen(!mobileOpen),
            className: "md:hidden grid h-10 w-10 place-items-center rounded-full bg-[#0B1E36] text-white shadow-sm hover:bg-[#00BCD4] transition-colors",
            "aria-label": "Menu",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
          }
        )
      ] })
    ] }),
    mobileOpen && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 md:hidden flex flex-col gap-4", children: links.map((l) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      "a",
      {
        href: l.href,
        onClick: () => setMobileOpen(false),
        className: "text-base font-semibold text-[#0B1E36] hover:text-[#00BCD4] px-2 py-1",
        children: l.label
      },
      l.href
    )) })
  ] });
}
const heroAquarium = "/assets/hero-aquarium-LzXAghUP.jpg";
function Hero() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "top", className: "relative w-full overflow-hidden bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-x-0 top-0 h-[80vh] bg-gradient-to-b from-[#E0F7FA] via-[#F2FBFD] to-white" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative mx-auto max-w-7xl px-4 sm:px-6 pt-32 pb-20", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 lg:grid-cols-2 gap-12 items-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left pt-10", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.h1,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, ease: "easeOut" },
            className: "text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0B1E36] mb-6 leading-[1.1]",
            children: "Designing Bespoke Aquatic Ecosystems."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.1, ease: "easeOut" },
            className: "text-xl sm:text-2xl text-[#00BCD4] font-bold mb-4",
            children: "Living Art For Your Home & Office."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.p,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
            className: "text-slate-600 max-w-lg mb-10 text-lg leading-relaxed font-medium",
            children: "From custom aquascaping to white-glove maintenance, Sai Aquatics engineers stunning underwater worlds that breathe life into any space."
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 20 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.8, delay: 0.3, ease: "easeOut" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#portfolio", className: "inline-flex items-center justify-center rounded-full bg-[#00BCD4] text-white font-bold px-8 py-3.5 transition-all hover:bg-[#0097A7] hover:scale-105 shadow-xl shadow-cyan-500/20", children: [
              "View Our Work ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "ml-2", children: "→" })
            ] })
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-[400px] sm:h-[500px] lg:h-[600px] w-full flex justify-center items-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, y: 40 },
            animate: { opacity: 1, y: [0, -15, 0] },
            transition: {
              opacity: { duration: 1 },
              y: { duration: 6, repeat: Infinity, ease: "easeInOut" }
            },
            className: "relative w-[90%] h-[90%] rounded-[3rem] overflow-hidden shadow-2xl shadow-cyan-900/20 z-10 border-[8px] border-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: heroAquarium,
                alt: "Bespoke Aquarium Installation",
                className: "w-full h-full object-cover"
              }
            )
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 0.8, duration: 0.8 },
            className: "absolute left-0 top-1/4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-100 z-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-4xl font-bold text-[#00BCD4]", children: "500+" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-600 font-bold mt-1", children: [
                "Custom Tanks",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Installed"
              ] })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
            transition: { delay: 1, duration: 0.8 },
            className: "absolute right-0 bottom-1/4 bg-white/95 backdrop-blur-md rounded-2xl p-5 shadow-2xl border border-slate-100 z-20",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-4xl font-bold text-[#00BCD4]", children: [
                "12",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl", children: "yrs" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-sm text-slate-600 font-bold mt-1", children: [
                "Aquascaping",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Experience"
              ] })
            ]
          }
        )
      ] })
    ] }) })
  ] });
}
const aquascape = "/assets/project-aquascape-C_QiAuh0.jpg";
function About() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "about", className: "flow-section bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, margin: "-100px" },
        transition: { duration: 0.8, ease: "easeOut" },
        className: "relative",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "animate-glow-pulse absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative overflow-hidden rounded-[2rem] glass-strong shadow-2xl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: aquascape,
                alt: "Bespoke aquascape installation by Sai Aquatics",
                width: 1024,
                height: 1024,
                loading: "lazy",
                className: "h-full w-full object-cover transition-transform duration-700 hover:scale-105"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0B1E36]/80 via-transparent to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-6 left-6 right-6 flex items-end justify-between", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-wider text-[#00BCD4] uppercase", children: "Featured" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-bold text-white mt-1", children: "Iwagumi Nature Scape" })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-semibold text-white border border-white/30", children: "120 gallons" })
            ] })
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, x: 40 },
        whileInView: { opacity: 1, x: 0 },
        viewport: { once: false, margin: "-100px" },
        transition: { duration: 0.8, delay: 0.2, ease: "easeOut" },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase", children: "About Sai Aquatics" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl leading-tight", children: [
            "A decade of crafting ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00BCD4]", children: "living art" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-slate-600 text-lg leading-relaxed", children: "Sai Aquatics began with a simple obsession — building aquatic worlds that feel alive. From the first 30-gallon tank in a small studio to wall-spanning installations in luxury homes and corporate lobbies, our craft has stayed the same: balanced ecosystems, immaculate engineering, and design that elevates the room it lives in." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-600 text-lg leading-relaxed", children: "Every project is bespoke. Every plant, stone, and fish is chosen. And every tank is maintained as carefully as it was built." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-10 grid gap-4 sm:grid-cols-3", children: [
            { i: Award, t: "12+ Years", d: "Of aquatic mastery" },
            { i: Leaf, t: "Live Ecosystems", d: "Naturally balanced" },
            { i: Sparkles, t: "White-Glove", d: "Care & maintenance" }
          ].map((b, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: { once: false },
              transition: { duration: 0.6, delay: 0.4 + index * 0.1 },
              className: "bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(b.i, { className: "h-6 w-6 text-[#00BCD4]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 font-bold text-slate-900 text-lg", children: b.t }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-medium text-slate-500 mt-1", children: b.d })
              ]
            },
            b.t
          )) })
        ]
      }
    )
  ] }) });
}
const services = [
  {
    icon: Waves,
    title: "Aquarium Installation",
    desc: "Custom freshwater, planted, and marine tanks built around your space — from concept to first fish."
  },
  {
    icon: Mountain,
    title: "Custom Aquascaping",
    desc: "Nature Aquarium, Iwagumi, Dutch and biotope styles by award-trained aquascapers."
  },
  {
    icon: Wrench,
    title: "Aquarium Maintenance",
    desc: "Scheduled white-glove visits keeping water chemistry, plants, and inhabitants in perfect health."
  },
  {
    icon: Sparkles,
    title: "Tank Cleaning",
    desc: "Deep cleaning, algae control, equipment servicing and water polishing for crystal clarity."
  },
  {
    icon: Fish,
    title: "Fish & Accessories",
    desc: "Curated livestock, premium plants, hardscape, lighting, filtration and CO₂ systems sourced worldwide."
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Wall-spanning showpieces for hotels, restaurants, hospitals and corporate lobbies."
  }
];
function Services() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "services", className: "flow-section bg-slate-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, margin: "-100px" },
        transition: { duration: 0.8 },
        className: "mx-auto max-w-2xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase", children: "Services" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl", children: [
            "Everything aquatic, ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00BCD4]", children: "end to end" }),
            "."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-slate-500 font-medium", children: "One studio for design, build, livestock and lifelong maintenance." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3", children: services.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.article,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, margin: "-50px" },
        transition: { duration: 0.6, delay: i * 0.1 },
        className: "group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-white transition-colors duration-300", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6", strokeWidth: 2 }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative mt-6 text-2xl font-bold text-[#0B1E36]", children: s.title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-3 text-sm leading-relaxed text-slate-500 font-medium", children: s.desc })
        ]
      },
      s.title
    )) })
  ] }) });
}
const home = "/assets/project-home-DQGxiMAA.jpg";
const office = "/assets/project-office-DWj2-MRv.jpg";
const commercial = "/assets/project-commercial-DWqqSS_k.jpg";
const reef = "/assets/project-reef-DdBg91AN.jpg";
const discus = "/assets/project-discus-BaB39WQ9.jpg";
const projects = [
  {
    img: home,
    title: "Curved Wall Aquarium",
    cat: "Home",
    size: "300 gal",
    loc: "Bandra Residence",
    span: "sm:col-span-2 sm:row-span-2"
  },
  { img: reef, title: "Reef Showpiece", cat: "Home", size: "180 gal", loc: "Juhu Villa", span: "" },
  {
    img: office,
    title: "Reception Centerpiece",
    cat: "Office",
    size: "500 gal",
    loc: "BKC HQ",
    span: "sm:col-span-2"
  },
  {
    img: aquascape,
    title: "Iwagumi Nature Scape",
    cat: "Aquascaping",
    size: "60 gal",
    loc: "Studio Build",
    span: ""
  },
  {
    img: commercial,
    title: "Lobby Cylinder",
    cat: "Commercial",
    size: "2,000 gal",
    loc: "5★ Hotel",
    span: "sm:row-span-2"
  },
  {
    img: discus,
    title: "Discus Dining Tank",
    cat: "Home",
    size: "120 gal",
    loc: "Powai Penthouse",
    span: ""
  }
];
const categories = ["All", "Home", "Office", "Commercial", "Aquascaping"];
function Portfolio() {
  const [active, setActive] = reactExports.useState("All");
  const [open, setOpen] = reactExports.useState(null);
  const filtered = projects.filter((p) => active === "All" || p.cat === active);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { id: "portfolio", className: "flow-section bg-white", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col items-start justify-between gap-6 md:flex-row md:items-end", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, x: -30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: false, margin: "-100px" },
            transition: { duration: 0.8 },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase", children: "Portfolio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl", children: [
                "Recent ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00BCD4]", children: "installations" }),
                "."
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 max-w-xl text-slate-500 font-medium", children: "A selection of homes, offices and commercial spaces transformed with our aquariums." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: { opacity: 0, x: 30 },
            whileInView: { opacity: 1, x: 0 },
            viewport: { once: false, margin: "-100px" },
            transition: { duration: 0.8, delay: 0.2 },
            className: "flex flex-wrap gap-2",
            children: categories.map((c) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                onClick: () => setActive(c),
                className: `rounded-full px-4 py-2 text-sm font-semibold transition-all border ${active === c ? "bg-[#0B1E36] text-white border-[#0B1E36]" : "bg-white text-slate-500 border-slate-200 hover:text-[#00BCD4] hover:border-[#00BCD4]"}`,
                children: c
              },
              c
            ))
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 flex sm:grid flex-nowrap overflow-x-auto sm:overflow-visible snap-x snap-mandatory pb-8 -mx-4 px-4 sm:mx-0 sm:px-0 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 hide-scrollbar", children: filtered.map((p, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.button,
        {
          onClick: () => setOpen(i),
          initial: { opacity: 0, y: 30 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: false, margin: "-50px" },
          transition: { duration: 0.6, delay: i * 0.1 },
          className: `flex-shrink-0 w-[85vw] sm:w-auto snap-center group relative overflow-hidden rounded-3xl text-left border border-slate-200 shadow-sm hover:shadow-xl transition-shadow aspect-[4/3]`,
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: p.img,
                alt: `${p.title} — ${p.cat} aquarium project`,
                loading: "lazy",
                className: "absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-[#0B1E36] via-[#0B1E36]/40 to-transparent" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-4 top-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full bg-white/20 backdrop-blur-md border border-white/30 px-3 py-1 text-[10px] font-bold tracking-wider uppercase text-white", children: p.cat }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "absolute bottom-0 left-0 right-0 p-5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xl font-bold text-white", children: p.title }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-1 flex items-center gap-3 text-xs font-medium text-slate-300", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.size }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-1 rounded-full bg-[#00BCD4]" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: p.loc })
              ] })
            ] })
          ]
        },
        p.title
      )) })
    ] }),
    open !== null && /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        className: "fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-md",
        onClick: () => setOpen(null),
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, scale: 0.95 },
            animate: { opacity: 1, scale: 1 },
            className: "relative max-h-[88vh] w-full max-w-4xl overflow-hidden rounded-3xl bg-white shadow-2xl",
            onClick: (e) => e.stopPropagation(),
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "img",
                {
                  src: filtered[open].img,
                  alt: filtered[open].title,
                  className: "h-[60vh] w-full object-cover"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "p-6", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-wider text-[#00BCD4] uppercase", children: filtered[open].cat }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-3xl font-bold text-[#0B1E36]", children: filtered[open].title }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-2 text-sm font-medium text-slate-500", children: [
                  filtered[open].size,
                  " · ",
                  filtered[open].loc
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  onClick: () => setOpen(null),
                  className: "absolute right-4 top-4 grid h-10 w-10 place-items-center rounded-full bg-white/50 backdrop-blur-md text-[#0B1E36] hover:bg-white transition-colors",
                  "aria-label": "Close",
                  children: "✕"
                }
              )
            ]
          }
        )
      }
    )
  ] });
}
const stats = [
  { icon: Waves, end: 520, suffix: "+", label: "Projects Completed" },
  { icon: Users, end: 480, suffix: "+", label: "Happy Customers" },
  { icon: Trophy, end: 150, suffix: "+", label: "Commercial Installations" },
  { icon: Calendar, end: 12, suffix: "yrs", label: "Years of Experience" }
];
function Counter({ end, suffix }) {
  const [n, setN] = reactExports.useState(0);
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { ref, children: [
    n,
    suffix
  ] });
}
function Stats() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "why", className: "flow-section bg-white", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false, margin: "-100px" },
        transition: { duration: 0.8 },
        className: "mx-auto max-w-2xl text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase", children: "Why Choose Us" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl", children: [
            "Numbers from a decade ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00BCD4]", children: "underwater" }),
            "."
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4", children: stats.map((s, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        initial: { opacity: 0, y: 30 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: false },
        transition: { duration: 0.6, delay: i * 0.1 },
        className: "bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden rounded-3xl p-7 text-center",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-[#00BCD4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-6 w-6" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 text-5xl font-bold text-[#0B1E36]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Counter, { end: s.end, suffix: s.suffix }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 text-sm font-medium tracking-wider text-slate-500 uppercase", children: s.label })
        ]
      },
      s.label
    )) })
  ] }) });
}
const items = [
  {
    name: "Rohan Mehta",
    role: "Homeowner · Bandra",
    quote: "Sai Aquatics built a wall aquarium that's become the centerpiece of our living room. The maintenance service is flawless — tank looks as stunning as day one.",
    rating: 5
  },
  {
    name: "Priya Nair",
    role: "Interior Designer",
    quote: "My go-to aquarium studio for luxury residential projects. Their aquascaping is on a different level and they always deliver on time.",
    rating: 5
  },
  {
    name: "The Leela Hotels",
    role: "Hospitality Client",
    quote: "A 2,000 gallon lobby installation handled end to end with zero disruption. Professional, precise, and the result is breathtaking.",
    rating: 5
  }
];
function Testimonials() {
  const [i, setI] = reactExports.useState(0);
  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);
  const t = items[i];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { className: "flow-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-5xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-[0.25em] text-[#00BCD4] uppercase", children: "Testimonials" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl", children: [
        "Loved by ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00BCD4] italic", children: "homes & brands" }),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-14", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 shadow-sm relative overflow-hidden rounded-[2rem] p-8 sm:p-14 text-center", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-12 left-1/2 -translate-x-1/2 font-display text-[10rem] leading-none text-[#E0F7FA] select-none", children: "“" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center gap-1", children: Array.from({ length: t.rating }).map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-4 w-4 fill-[#00BCD4] text-[#00BCD4]" }, k)) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl text-[#0B1E36]", children: t.quote }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-12 w-12 place-items-center rounded-full bg-[#E0F7FA] font-display text-xl font-bold text-[#00BCD4]", children: t.name.charAt(0) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-left", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#0B1E36]", children: t.name }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-500", children: t.role })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 flex items-center justify-center gap-4", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: prev,
            "aria-label": "Previous testimonial",
            className: "grid h-11 w-11 place-items-center rounded-full glass text-foreground hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronLeft, { className: "h-5 w-5" })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-2", children: items.map((_, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: () => setI(k),
            "aria-label": `Go to testimonial ${k + 1}`,
            className: `h-1.5 rounded-full transition-all ${i === k ? "w-8 bg-aqua" : "w-2 bg-white/20"}`
          },
          k
        )) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            onClick: next,
            "aria-label": "Next testimonial",
            className: "grid h-11 w-11 place-items-center rounded-full glass text-foreground hover:bg-white/10",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "h-5 w-5" })
          }
        )
      ] })
    ] })
  ] }) });
}
const schema = objectType({
  name: stringType().trim().min(2, "Name is required").max(80),
  phone: stringType().trim().min(7, "Phone is required").max(20),
  location: stringType().trim().min(2, "Location is required").max(80),
  type: stringType().trim().min(2).max(60),
  message: stringType().trim().max(800)
});
function Contact() {
  const [sent, setSent] = reactExports.useState(false);
  const [err, setErr] = reactExports.useState(null);
  const onSubmit = (e) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      name: fd.get("name"),
      phone: fd.get("phone"),
      location: fd.get("location"),
      type: fd.get("type"),
      message: fd.get("message")
    });
    if (!parsed.success) {
      setErr(parsed.error.issues[0]?.message ?? "Please check the form");
      return;
    }
    setErr(null);
    setSent(true);
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "contact", className: "flow-section", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto max-w-7xl px-4 sm:px-6", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-10 lg:grid-cols-5", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs tracking-[0.25em] text-aqua uppercase", children: "Contact" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("h2", { className: "mt-3 text-4xl font-medium sm:text-5xl", children: [
          "Let’s build your ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-gradient italic", children: "aquarium" }),
          "."
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground", children: "Tell us about your space. We’ll respond within one business day with a free consultation." }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-8 space-y-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "tel:+919566002857",
              className: "bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4 transition-all hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-[#E0F7FA] text-[#00BCD4]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Phone, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-500 uppercase", children: "Call" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#0B1E36]", children: "095660 02857" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "a",
            {
              href: "https://wa.me/919566002857",
              target: "_blank",
              rel: "noreferrer",
              className: "bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4 transition-all hover:shadow-md",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 place-items-center rounded-xl bg-green-50 text-green-600", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageCircle, { className: "h-5 w-5" }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-500 uppercase", children: "WhatsApp" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#0B1E36]", children: "Chat with our studio" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-red-50 text-red-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-500 uppercase", children: "Studio" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "font-bold text-[#0B1E36] text-sm sm:text-base leading-snug", children: [
                "No.8/112, Anna Salai, Satya Nagar,",
                /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                "Kovilambakkam, Chennai 600129"
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-white border border-slate-200 flex items-center gap-4 rounded-2xl p-4", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid h-11 w-11 flex-shrink-0 place-items-center rounded-xl bg-blue-50 text-blue-500", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-5 w-5" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-slate-500 uppercase", children: "Email" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "font-bold text-[#0B1E36]", children: "hello@saiaquatics.in" })
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "form",
        {
          onSubmit,
          className: "glass-strong relative overflow-hidden rounded-[2rem] p-6 sm:p-9 lg:col-span-3",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid gap-4 sm:grid-cols-2", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Name", name: "name", placeholder: "Your full name" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Phone", name: "phone", placeholder: "+91 ..." }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Location", name: "location", placeholder: "City / Area" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Project Type", name: "type", placeholder: "Home / Office / Commercial" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-wider text-slate-500 uppercase", children: "Message" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "textarea",
                  {
                    name: "message",
                    rows: 4,
                    maxLength: 800,
                    placeholder: "Tell us about your space and vision...",
                    className: "mt-2 w-full resize-none rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1E36] outline-none transition-colors focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4]"
                  }
                )
              ] })
            ] }),
            err && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl bg-destructive/15 px-4 py-2 text-sm text-destructive-foreground", children: err }),
            sent && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 rounded-xl bg-aqua/15 px-4 py-2 text-sm text-aqua", children: "Thank you — we’ll be in touch shortly." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                type: "submit",
                className: "group mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-aqua to-cyan-glow px-6 py-3.5 text-sm font-semibold text-ocean-deep shadow-[0_10px_40px_-10px_var(--aqua)] transition-transform hover:scale-[1.01] sm:w-auto",
                children: [
                  "Send Enquiry",
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "h-4 w-4 transition-transform group-hover:translate-x-0.5" })
                ]
              }
            )
          ]
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-12 overflow-hidden rounded-3xl border border-slate-200 shadow-sm relative w-full pt-[100%] sm:pt-[50%] md:pt-[40%]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        title: "Studio location",
        src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.4779395771143!2d80.18362367507595!3d12.941240087371359!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525fdf9bb65d65%3A0x6ba9bb478c040426!2ssai%20aquatics!5e0!3m2!1sen!2sin!4v1781533271192!5m2!1sen!2sin",
        loading: "lazy",
        referrerPolicy: "no-referrer-when-downgrade",
        className: "absolute inset-0 w-full h-full border-0"
      }
    ) })
  ] }) });
}
function Field({
  label,
  name,
  placeholder
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "text-xs font-bold tracking-wider text-slate-500 uppercase", children: label }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        name,
        placeholder,
        maxLength: 120,
        className: "mt-2 w-full rounded-2xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B1E36] outline-none transition-colors focus:border-[#00BCD4] focus:ring-1 focus:ring-[#00BCD4]"
      }
    )
  ] });
}
function Footer() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "relative mt-10 overflow-hidden bg-[#0B1E36] py-16 text-white border-t border-slate-200", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-4 relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:col-span-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/saiaqua%20logo.png", alt: "Sai Aquatics Logo", className: "h-8 w-8 object-cover rounded-full" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-bold text-2xl tracking-tight text-white", children: [
            "Sai ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[#00BCD4]", children: "Aquatics" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-md text-sm text-slate-400 font-medium leading-relaxed", children: "Premium aquarium installations, aquascaping and maintenance for homes, offices and commercial spaces across India." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-wider text-[#00BCD4] uppercase", children: "Quick Links" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-3 text-sm font-medium text-slate-300", children: [
          ["#about", "About"],
          ["#services", "Services"],
          ["#portfolio", "Portfolio"],
          ["#contact", "Contact"]
        ].map(([h, l]) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: h, className: "hover:text-white transition-colors", children: l }) }, h)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-bold tracking-wider text-[#00BCD4] uppercase", children: "Follow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-4 flex gap-3", children: [
          { i: Instagram, h: "#" },
          { i: Facebook, h: "#" },
          { i: MessageCircle, h: "https://wa.me/919999999999" }
        ].map(({ i: I, h }, k) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: h,
            className: "grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-[#00BCD4] transition-colors text-white",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(I, { className: "h-4 w-4" })
          },
          k
        )) })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-8 text-center text-xs font-medium text-slate-400 sm:px-6", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Sai Aquatics. All rights reserved."
    ] })
  ] });
}
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("main", { className: "relative min-h-screen text-[#0B1E36] overflow-x-hidden selection:bg-cyan-900 selection:text-cyan-50", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(About, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Services, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Portfolio, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Stats, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonials, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Contact, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] }) });
}
export {
  Index as component
};
