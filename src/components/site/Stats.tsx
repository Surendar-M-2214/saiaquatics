import { useEffect, useRef, useState } from "react";
import { Users, Waves, Calendar, MapPin, Wrench } from "lucide-react";
import { motion } from "framer-motion";

interface StatItem {
  icon: any;
  end?: number;
  suffix?: string;
  text?: string;
  label: string;
}

const stats: StatItem[] = [
  { icon: Waves, end: 10, suffix: "+", label: "Projects Completed" },
  { icon: Calendar, end: 3, suffix: "+", label: "Years Experience" },
  { icon: MapPin, text: "Chennai", label: "Local Service Coverage" },
  { icon: Wrench, text: "Aquarium Setup", label: "Maintenance & Support" },
];

function Counter({ end, suffix }: { end: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          const start = performance.now();
          const dur = 1600;
          const tick = (t: number) => {
            const p = Math.min(1, (t - start) / dur);
            const eased = 1 - Math.pow(1 - p, 3);
            setN(Math.round(end * eased));
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          io.disconnect();
        }
      },
      { threshold: 0.4 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, [end]);
  return (
    <span ref={ref}>
      {n}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section id="why" className="flow-section bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="text-xs font-bold tracking-[0.2em] text-[#00BCD4] uppercase">Why Choose Us</div>
          <h2 className="mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl">
            Why Customers Choose <span className="text-[#00BCD4]">Sai Aquatics</span>.
          </h2>
        </motion.div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="bg-white border border-slate-100 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden rounded-3xl p-7 text-center"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-cyan-50 text-[#00BCD4]">
                <s.icon className="h-6 w-6" />
              </div>
              <div className={`mt-5 font-bold text-[#0B1E36] tracking-tight leading-none ${s.text ? "text-3xl py-1 sm:text-2xl lg:text-3xl" : "text-5xl"}`}>
                {s.end !== undefined ? (
                  <Counter end={s.end} suffix={s.suffix || ""} />
                ) : (
                  s.text
                )}
              </div>
              <div className="mt-2 text-sm font-medium tracking-wider text-slate-500 uppercase">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
