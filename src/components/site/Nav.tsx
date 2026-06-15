import { useEffect, useState } from "react";
import { Fish } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <nav
          className={`flex items-center justify-between rounded-2xl px-4 py-3 transition-all duration-500 ${
            scrolled ? "glass-strong" : "bg-transparent"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="grid h-9 w-9 place-items-center rounded-xl bg-gradient-to-br from-aqua to-cyan-glow text-ocean-deep shadow-[0_0_24px_-6px_var(--aqua)]">
              <Fish className="h-5 w-5" strokeWidth={2.5} />
            </span>
            <span className="font-display text-xl font-semibold tracking-tight">
              Sai <span className="text-gradient">Aquatics</span>
            </span>
          </a>
          <div className="hidden items-center gap-7 md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-gradient-to-r from-aqua to-cyan-glow px-5 py-2 text-sm font-semibold text-ocean-deep shadow-[0_0_20px_-4px_var(--aqua)] transition-transform hover:scale-105 sm:inline-block"
          >
            Free Consultation
          </a>
        </nav>
      </div>
    </header>
  );
}
