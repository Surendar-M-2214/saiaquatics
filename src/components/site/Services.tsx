import {
  Waves,
  Mountain,
  Wrench,
  Sparkles,
  Fish as FishIcon,
  Building2,
} from "lucide-react";

const services = [
  {
    icon: Waves,
    title: "Aquarium Installation",
    desc: "Custom freshwater, planted, and marine tanks built around your space — from concept to first fish.",
  },
  {
    icon: Mountain,
    title: "Custom Aquascaping",
    desc: "Nature Aquarium, Iwagumi, Dutch and biotope styles by award-trained aquascapers.",
  },
  {
    icon: Wrench,
    title: "Aquarium Maintenance",
    desc: "Scheduled white-glove visits keeping water chemistry, plants, and inhabitants in perfect health.",
  },
  {
    icon: Sparkles,
    title: "Tank Cleaning",
    desc: "Deep cleaning, algae control, equipment servicing and water polishing for crystal clarity.",
  },
  {
    icon: FishIcon,
    title: "Fish & Accessories",
    desc: "Curated livestock, premium plants, hardscape, lighting, filtration and CO₂ systems sourced worldwide.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Wall-spanning showpieces for hotels, restaurants, hospitals and corporate lobbies.",
  },
];

export function Services() {
  return (
    <section id="services" className="relative py-28">
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 0%, color-mix(in oklab, var(--aqua) 14%, transparent), transparent 70%)",
        }}
      />
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.25em] text-aqua uppercase">Services</div>
          <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
            Everything aquatic, <span className="text-gradient italic">end to end</span>.
          </h2>
          <p className="mt-4 text-muted-foreground">
            One studio for design, build, livestock and lifelong maintenance.
          </p>
        </div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <article
              key={s.title}
              className="tilt-card group relative overflow-hidden rounded-3xl glass p-7"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              <div
                className="pointer-events-none absolute -top-20 -right-20 h-48 w-48 rounded-full opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{
                  background:
                    "radial-gradient(circle, color-mix(in oklab, var(--aqua) 35%, transparent), transparent 70%)",
                }}
              />
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-aqua/30 to-cyan-glow/10 text-aqua">
                <s.icon className="h-6 w-6" strokeWidth={1.75} />
              </div>
              <h3 className="relative mt-6 font-display text-2xl">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.desc}
              </p>
              <div className="relative mt-6 text-xs tracking-wider text-aqua uppercase opacity-0 transition-opacity group-hover:opacity-100">
                Enquire →
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
