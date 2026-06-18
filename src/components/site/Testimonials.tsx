import { useState } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const items = [
  {
    name: "Sai Aquatics",
    role: "Chennai Service",
    quote:
      "Customer reviews and feedback will be displayed here as we continue serving aquarium enthusiasts across Chennai.",
    rating: 5,
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((i + 1) % items.length);
  const prev = () => setI((i - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section className="flow-section bg-white">
      <div className="mx-auto max-w-5xl px-4 sm:px-6">
        <div className="text-center">
          <div className="text-xs font-bold tracking-[0.25em] text-[#00BCD4] uppercase">Testimonials</div>
          <h2 className="mt-3 text-4xl font-bold text-[#0B1E36] sm:text-5xl">
            What Our <span className="text-[#00BCD4]">Customers Say</span>.
          </h2>
        </div>

        <div className="relative mt-14">
          <div className="bg-slate-50 border border-slate-200 shadow-sm relative overflow-hidden rounded-[2rem] p-8 sm:p-14 text-center">
            <div className="absolute -top-12 left-1/2 -translate-x-1/2 font-display text-[10rem] leading-none text-[#E0F7FA] select-none">
              “
            </div>
            <div className="relative">
              <div className="flex justify-center gap-1">
                {Array.from({ length: t.rating }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-[#00BCD4] text-[#00BCD4]" />
                ))}
              </div>
              <p className="mt-6 font-display text-2xl font-medium leading-relaxed sm:text-3xl text-[#0B1E36]">{t.quote}</p>
              <div className="mt-8 flex items-center justify-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-full bg-[#E0F7FA] font-display text-xl font-bold text-[#00BCD4]">
                  {t.name.charAt(0)}
                </div>
                <div className="text-left">
                  <div className="font-bold text-[#0B1E36]">{t.name}</div>
                  <div className="text-xs font-semibold text-slate-500">{t.role}</div>
                </div>
              </div>
            </div>
          </div>

          {items.length > 1 && (
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
                      i === k ? "w-8 bg-cyan-500" : "w-2 bg-slate-200"
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
          )}
        </div>
      </div>
    </section>
  );
}
