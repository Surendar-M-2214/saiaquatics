import { Fish, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Bubbles } from "./OceanBackground";

export function Footer() {
  return (
    <footer className="relative isolate mt-10 overflow-hidden border-t border-white/5 bg-ocean-deep/80 py-16">
      <Bubbles count={10} />
      <div
        className="pointer-events-none absolute inset-0 -z-10 opacity-60"
        style={{
          background:
            "radial-gradient(ellipse at bottom, color-mix(in oklab, var(--aqua) 18%, transparent), transparent 60%)",
        }}
      />
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-aqua to-cyan-glow text-ocean-deep">
              <Fish className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl">
              Sai <span className="text-gradient">Aquatics</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-muted-foreground">
            Premium aquarium installations, aquascaping and maintenance for
            homes, offices and commercial spaces across India.
          </p>
        </div>

        <div>
          <div className="text-xs tracking-wider text-aqua uppercase">Quick Links</div>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              ["#about", "About"],
              ["#services", "Services"],
              ["#portfolio", "Portfolio"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="hover:text-foreground">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs tracking-wider text-aqua uppercase">Follow</div>
          <div className="mt-4 flex gap-2">
            {[
              { i: Instagram, h: "#" },
              { i: Facebook, h: "#" },
              { i: MessageCircle, h: "https://wa.me/919999999999" },
            ].map(({ i: I, h }, k) => (
              <a
                key={k}
                href={h}
                className="grid h-10 w-10 place-items-center rounded-full glass transition-colors hover:bg-white/10"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-7xl border-t border-white/5 px-4 pt-6 text-center text-xs text-muted-foreground sm:px-6">
        © {new Date().getFullYear()} Sai Aquatics. All rights reserved.
      </div>
    </footer>
  );
}
