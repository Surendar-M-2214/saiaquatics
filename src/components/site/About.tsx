import { Award, Leaf, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import aquascapeImg from "@/assets/project-aquascape.jpg";

export function About() {
  return (
    <section id="about" className="flow-section bg-white">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        
        {/* Left Image Column */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="animate-glow-pulse absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-cyan-400/20 to-blue-500/10 blur-2xl" />
          <div className="relative overflow-hidden rounded-[2rem] glass-strong shadow-2xl">
            <img
              src={aquascapeImg}
              alt="Bespoke aquascape installation by Sai Aquatics"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0B1E36]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-xs font-bold tracking-wider text-[#00BCD4] uppercase">Featured</div>
                <div className="text-2xl font-bold text-white mt-1">Iwagumi Nature Scape</div>
              </div>
              <div className="bg-white/20 backdrop-blur-md rounded-full px-4 py-1.5 text-xs font-semibold text-white border border-white/30">120 gallons</div>
            </div>
          </div>
        </motion.div>

        {/* Right Text Column */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        >
          <div className="text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase">About Sai Aquatics</div>
          <h2 className="mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl leading-tight">
            A decade of crafting <span className="text-[#00BCD4]">living art</span>.
          </h2>
          <p className="mt-5 text-slate-600 text-lg leading-relaxed">
            Sai Aquatics began with a simple obsession — building aquatic worlds that feel alive.
            From the first 30-gallon tank in a small studio to wall-spanning installations in luxury
            homes and corporate lobbies, our craft has stayed the same: balanced ecosystems,
            immaculate engineering, and design that elevates the room it lives in.
          </p>
          <p className="mt-4 text-slate-600 text-lg leading-relaxed">
            Every project is bespoke. Every plant, stone, and fish is chosen. And every tank is
            maintained as carefully as it was built.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { i: Award, t: "12+ Years", d: "Of aquatic mastery" },
              { i: Leaf, t: "Live Ecosystems", d: "Naturally balanced" },
              { i: Sparkles, t: "White-Glove", d: "Care & maintenance" },
            ].map((b, index) => (
              <motion.div 
                key={b.t}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                className="bg-slate-50 border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <b.i className="h-6 w-6 text-[#00BCD4]" />
                <div className="mt-3 font-bold text-slate-900 text-lg">{b.t}</div>
                <div className="text-sm font-medium text-slate-500 mt-1">{b.d}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
