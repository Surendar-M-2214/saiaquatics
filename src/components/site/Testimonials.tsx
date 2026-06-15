import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    name: "Rohan Mehta",
    role: "Homeowner · Bandra",
    quote:
      "Sai Aquatics built a wall aquarium that's become the centerpiece of our living room. The maintenance service is flawless — tank looks as stunning as day one.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Interior Designer",
    quote:
      "My go-to aquarium studio for luxury residential projects. Their aquascaping is on a different level and they always deliver on time.",
    rating: 5,
  },
  {
    name: "The Leela Hotels",
    role: "Hospitality Client",
    quote:
      "A 2,000 gallon lobby installation handled end to end with zero disruption. Professional, precise, and the result is breathtaking.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section className="flow-section">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs tracking-[0.25em] text-aqua uppercase">Testimonials</div>
          <h2 className="mt-3 text-4xl font-medium sm:text-5xl">
            Loved by <span className="text-gradient italic">homes &amp; brands</span>.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="glass-strong relative overflow-hidden rounded-[2rem] p-8 sm:p-14 text-center">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-display text-[10rem] leading-none text-aqua/10 select-none">
              “
            </div>
            <div className="relative">
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-aqua text-aqua" />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl leading-relaxed sm:text-3xl">{t.quote}</p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-gradient-to-br from-aqua to-cyan-glow font-display text-lg text-ocean-deep">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="grid h-11 w-11 place-items-center rounded-full glass text-foreground hover:bg-white/10"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {items.map((_, k) => (
                <button
                  key={k}
                  onClick={() => setI(k)}
                  aria-label={`Go to testimonial ${k + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    i === k ? "w-8 bg-aqua" : "w-2 bg-white/20"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="grid h-11 w-11 place-items-center rounded-full glass text-foreground hover:bg-white/10"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
