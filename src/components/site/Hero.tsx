import { useEffect, useRef } from "react";
import { ArrowRight, Play } from "lucide-react";
import heroImg from "@/assets/hero-aquarium.jpg";
import { Bubbles, SwimmingFish, CausticsLayer } from "./OceanBackground";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const onMove = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.setProperty("--px", `${x * 20}px`);
      el.style.setProperty("--py", `${y * 20}px`);
    };
    el.addEventListener("mousemove", onMove);
    return () => el.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <section
      id="top"
      ref={ref}
      className="ocean-bg relative isolate min-h-[100svh] overflow-hidden pt-28 pb-16 sm:pt-32 sm:pb-20"
    >
      {/* Hero image as 3D aquarium scene */}
      <div
        className="absolute inset-0 -z-10 opacity-70"
        style={{
          backgroundImage: `url(${heroImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          transform: "translate3d(var(--px,0), var(--py,0), 0) scale(1.06)",
          transition: "transform 0.2s ease-out",
          maskImage: "radial-gradient(ellipse at center, black 55%, transparent 95%)",
        }}
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/25 to-background/70" />
      <CausticsLayer />
      <SwimmingFish />
      <Bubbles count={22} />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <div className="mx-auto max-w-4xl text-center">
          <div className="animate-fade-up inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium tracking-wider uppercase text-aqua">
            <span className="h-1.5 w-1.5 rounded-full bg-aqua animate-glow-pulse" />
            Premium Aquarium Studio · Est. Mumbai
          </div>

          <h1
            className="animate-fade-up mt-6 text-4xl leading-[1.05] font-medium sm:text-6xl md:text-7xl lg:text-8xl"
            style={{ animationDelay: "0.1s" }}
          >
            Transform your space with
            <span className="block italic text-gradient">stunning aquariums</span>
          </h1>

          <p
            className="animate-fade-up mx-auto mt-6 max-w-2xl text-base text-muted-foreground sm:text-lg"
            style={{ animationDelay: "0.2s" }}
          >
            Custom installations, aquascaping, and white-glove maintenance for homes, offices, and
            commercial spaces. Living art, engineered to last.
          </p>

          <div
            className="animate-fade-up mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row"
            style={{ animationDelay: "0.3s" }}
          >
            <a
              href="#portfolio"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-aqua to-cyan-glow px-7 py-3.5 text-sm font-semibold text-ocean-deep shadow-[0_10px_40px_-10px_var(--aqua)] transition-transform hover:scale-[1.03]"
            >
              View Our Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="group inline-flex items-center gap-2 rounded-full glass px-7 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-white/10"
            >
              <Play className="h-4 w-4 text-aqua" fill="currentColor" />
              Get Free Consultation
            </a>
          </div>

          {/* Floating stats */}
          <div
            className="animate-fade-up mx-auto mt-16 grid max-w-3xl grid-cols-3 gap-3 sm:gap-6"
            style={{ animationDelay: "0.45s" }}
          >
            {[
              { v: "12+", l: "Years" },
              { v: "500+", l: "Installations" },
              { v: "100%", l: "Bespoke" },
            ].map((s) => (
              <div
                key={s.l}
                className="glass animate-float-y rounded-2xl px-3 py-4 sm:px-6 sm:py-5"
                style={{ animationDelay: `${(Number(s.v.replace(/\D/g, "")) % 7) * 0.13}s` }}
              >
                <div className="font-display text-3xl font-medium text-gradient sm:text-4xl">
                  {s.v}
                </div>
                <div className="mt-1 text-xs tracking-wider text-muted-foreground uppercase">
                  {s.l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom water line */}
      <div className="pointer-events-none absolute right-0 bottom-0 left-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
}
