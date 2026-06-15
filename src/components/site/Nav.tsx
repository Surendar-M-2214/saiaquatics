import { useEffect, useState } from "react";
import { Fish, User, Menu } from "lucide-react";

const links = [
  { href: "/configurator", label: "Build Tank" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 pt-4 sm:pt-6`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 flex items-center justify-between gap-4">
        
        {/* Left Pill - Logo */}
        <a href="#top" className="flex items-center gap-2 rounded-full bg-white/90 backdrop-blur-md px-4 py-2 sm:px-5 sm:py-2.5 shadow-sm border border-slate-200 hover:bg-white transition-colors">
          <img src="/saiaqua%20logo.png" alt="Sai Aquatics Logo" className="h-10 w-10 sm:h-12 sm:w-12 object-cover rounded-full" />
          <span className="text-base sm:text-lg font-bold text-[#0B1E36] tracking-tight">Sai Aquatics</span>
        </a>

        {/* Center Pill - Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8 rounded-full bg-white/80 backdrop-blur-md px-8 py-2.5 border border-slate-200 shadow-sm transition-colors hover:bg-white">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-semibold text-[#0B1E36] transition-colors hover:text-[#00BCD4]"
            >
              {l.label}
            </a>
          ))}
        </nav>

        {/* Right Section - Account & Mobile Menu */}
        <div className="flex items-center gap-2">
          {/* Account Icon (Minimized) */}
          <a href="#contact" className="grid h-10 w-10 sm:h-11 sm:w-11 place-items-center rounded-full bg-white/90 backdrop-blur-md shadow-sm border border-slate-200 hover:bg-white transition-colors" aria-label="Account">
            <User className="h-5 w-5 text-[#0B1E36]" />
          </a>
          
          {/* Mobile Menu Toggle (Only visible on small screens) */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full bg-[#0B1E36] text-white shadow-sm hover:bg-[#00BCD4] transition-colors" 
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-white shadow-xl border border-slate-100 md:hidden flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setMobileOpen(false)}
              className="text-base font-semibold text-[#0B1E36] hover:text-[#00BCD4] px-2 py-1"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
