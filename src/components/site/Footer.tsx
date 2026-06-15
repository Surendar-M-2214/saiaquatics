import { Fish, Instagram, Facebook, MessageCircle } from "lucide-react";
import { Bubbles } from "./OceanBackground";

export function Footer() {
  return (
    <footer className="relative mt-10 overflow-hidden bg-[#0B1E36] py-16 text-white border-t border-slate-200">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 md:grid-cols-4 relative z-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img src="/saiaqua%20logo.png" alt="Sai Aquatics Logo" className="h-14 w-14 object-cover rounded-full" />
            <span className="font-bold text-2xl tracking-tight text-white">
              Sai <span className="text-[#00BCD4]">Aquatics</span>
            </span>
          </div>
          <p className="mt-4 max-w-md text-sm text-slate-400 font-medium leading-relaxed">
            Premium aquarium installations, aquascaping and maintenance for homes, offices and
            commercial spaces across India.
          </p>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#00BCD4] uppercase">Quick Links</div>
          <ul className="mt-4 space-y-3 text-sm font-medium text-slate-300">
            {[
              ["#about", "About"],
              ["#services", "Services"],
              ["#portfolio", "Portfolio"],
              ["#contact", "Contact"],
            ].map(([h, l]) => (
              <li key={h}>
                <a href={h} className="hover:text-white transition-colors">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="text-xs font-bold tracking-wider text-[#00BCD4] uppercase">Follow</div>
          <div className="mt-4 flex gap-3">
            {[
              { i: Instagram, h: "#" },
              { i: Facebook, h: "#" },
              { i: MessageCircle, h: "https://wa.me/919999999999" },
            ].map(({ i: I, h }, k) => (
              <a
                key={k}
                href={h}
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-[#00BCD4] transition-colors text-white"
              >
                <I className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 pt-8 text-center text-xs font-medium text-slate-400 sm:px-6">
        © {new Date().getFullYear()} Sai Aquatics. All rights reserved.
      </div>
    </footer>
  );
}
