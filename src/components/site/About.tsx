import { Award, Leaf, Sparkles } from "lucide-react";
import { useParallax } from "./useParallax";
import aquascapeImg from "@/assets/project-aquascape.jpg";

export function About() {
  const parallaxRef = useParallax<HTMLDivElement>(0.18);
  return (
    <section id="about" className="flow-section">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-2">
        <div ref={parallaxRef} className="parallax-card scroll-reveal relative">
          <div className="animate-glow-pulse absolute -inset-6 rounded-[2rem] bg-gradient-to-br from-aqua/20 to-coral/10 blur-2xl" />
          <div className="tilt-card relative overflow-hidden rounded-[2rem] glass-strong">
            <img
              src={aquascapeImg}
              alt="Bespoke aquascape installation by Sai Aquatics"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ocean-deep/55 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between">
              <div>
                <div className="text-xs tracking-wider text-aqua uppercase">Featured</div>
                <div className="font-display text-2xl">Iwagumi Nature Scape</div>
              </div>
              <div className="glass rounded-full px-3 py-1 text-xs">120 gallons</div>
            </div>
          </div>
        </div>

        <div>
          <div className="text-xs tracking-[0.25em] text-aqua uppercase">About Sai Aquatics</div>
          <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
            A decade of crafting <span className="text-gradient italic">living art</span>.
          </h2>
          <p className="mt-5 text-muted-foreground leading-relaxed">
            Sai Aquatics began with a simple obsession — building aquatic worlds that feel alive.
            From the first 30-gallon tank in a small studio to wall-spanning installations in luxury
            homes and corporate lobbies, our craft has stayed the same: balanced ecosystems,
            immaculate engineering, and design that elevates the room it lives in.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every project is bespoke. Every plant, stone, and fish is chosen. And every tank is
            maintained as carefully as it was built.
          </p>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { i: Award, t: "12+ Years", d: "Of aquatic mastery" },
              { i: Leaf, t: "Live Ecosystems", d: "Naturally balanced" },
              { i: Sparkles, t: "White-Glove", d: "Care & maintenance" },
            ].map((b) => (
              <div key={b.t} className="glass rounded-2xl p-5">
                <b.i className="h-5 w-5 text-aqua" />
                <div className="mt-3 font-display text-lg">{b.t}</div>
                <div className="text-sm text-muted-foreground">{b.d}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
