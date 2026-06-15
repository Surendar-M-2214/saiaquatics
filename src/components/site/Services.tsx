import { Waves, Mountain, Wrench, Sparkles, Fish as FishIcon, Building2 } from "lucide-react";
import { motion } from "framer-motion";

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
    <section id="services" className="flow-section bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase">Services</div>
          <h2 className="mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl">
            Everything aquatic, <span className="text-[#00BCD4]">end to end</span>.
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            One studio for design, build, livestock and lifelong maintenance.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((s, i) => (
            <motion.article
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-3xl bg-white border border-slate-200 p-7 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <div className="relative grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-[#00BCD4] group-hover:bg-[#00BCD4] group-hover:text-white transition-colors duration-300">
                <s.icon className="h-6 w-6" strokeWidth={2} />
              </div>
              <h3 className="relative mt-6 text-2xl font-bold text-[#0B1E36]">{s.title}</h3>
              <p className="relative mt-3 text-sm leading-relaxed text-slate-500 font-medium">
                {s.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
