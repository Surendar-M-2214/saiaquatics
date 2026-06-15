import { useEffect, useRef, useState } from "react";
import { Trophy, Users, Waves, Calendar } from "lucide-react";

const stats = [
  { icon: Waves, end: 520, suffix: "+", label: "Projects Completed" },
  { icon: Users, end: 480, suffix: "+", label: "Happy Customers" },
  { icon: Trophy, end: 150, suffix: "+", label: "Commercial Installations" },
  { icon: Calendar, end: 12, suffix: "yrs", label: "Years of Experience" },
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
    <section id="why" className="flow-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <div className="text-xs tracking-[0.25em] text-aqua uppercase">Why Choose Us</div>
          <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
            Numbers from a decade <span className="text-gradient italic">underwater</span>.
          </h2>
        </div>
        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div
              key={s.label}
              className="glass relative overflow-hidden rounded-3xl p-7 text-center"
            >
              <div className="mx-auto grid h-12 w-12 place-items-center rounded-2xl bg-gradient-to-br from-aqua/30 to-cyan-glow/10 text-aqua">
                <s.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 font-display text-5xl font-medium text-gradient">
                <Counter end={s.end} suffix={s.suffix} />
              </div>
              <div className="mt-2 text-sm tracking-wider text-muted-foreground uppercase">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
