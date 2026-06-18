import { Waves, Mountain, Wrench, Sparkles, Fish as FishIcon, Building2 } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Waves,
    title: "Aquarium Installation",
    desc: "Professional aquarium setup services for homes, offices and commercial spaces. We help design, install and maintain aquariums tailored to your requirements.",
  },
  {
    icon: Mountain,
    title: "Custom Aquascaping",
    desc: "Beautiful underwater landscapes using aquatic plants, rocks and natural elements to create visually stunning aquariums.",
  },
  {
    icon: Wrench,
    title: "Aquarium Maintenance",
    desc: "Regular maintenance services including water testing, cleaning, filter servicing and fish health monitoring.",
  },
  {
    icon: Sparkles,
    title: "Tank Cleaning",
    desc: "Deep cleaning services to keep your aquarium healthy, crystal clear and algae free.",
  },
  {
    icon: FishIcon,
    title: "Fish & Accessories",
    desc: "Quality fish, aquatic plants, fish food, filters, lighting and aquarium accessories for all types of setups.",
  },
  {
    icon: Building2,
    title: "Commercial Projects",
    desc: "Custom aquarium solutions for offices, restaurants, clinics, showrooms and other commercial environments.",
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
            Complete Aquarium Solutions <span className="text-[#00BCD4]">Under One Roof</span>.
          </h2>
          <p className="mt-4 text-slate-500 font-medium">
            From aquarium setup and aquascaping to maintenance and fish supplies, we provide end-to-end aquatic solutions across Chennai.
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
