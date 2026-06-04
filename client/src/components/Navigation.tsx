import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

const navItems = [
  { label: "About", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Adopt & Foster", href: "/adopt" },
  { label: "Partner With Us", href: "/volunteer" },
  { label: "Contact", href: "/contact" },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <nav className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-lg" : ""}`}
      style={{ backgroundColor: "#013835", borderBottom: "1px solid rgba(241,231,220,0.10)" }}>
      <div className="container flex items-center justify-between h-16 md:h-[68px]">

        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-2 md:gap-3 no-underline flex-shrink-0">
            <img src={logo} alt="Aishi For Furries" className="h-9 w-9 md:h-10 md:w-10 object-contain rounded-full" />
            <span className="text-base md:text-lg font-semibold" style={{ color: "#F1E7DC", fontFamily: "'Josefin Sans', sans-serif", fontWeight: 400 }}>
              Aishi For Furries
            </span>
          </a>
        </Link>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => {
            const active = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a className="px-3 py-2 text-sm rounded-md transition-all duration-150 no-underline"
                  style={{
                    color: active ? "#F1E7DC" : "rgba(241,231,220,0.72)",
                    backgroundColor: active ? "rgba(241,231,220,0.12)" : "transparent",
                    fontWeight: active ? 500 : 400,
                  }}>
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Desktop Donate CTA */}
        <div className="hidden md:flex items-center">
          <Link href="/donate">
            <a className="inline-flex items-center gap-1.5 px-5 py-2 rounded-lg text-sm font-semibold no-underline transition-all duration-200 hover:brightness-110"
              style={{ backgroundColor: "#F1E7DC", color: "#013835" }}>
              💛 Donate Now
            </a>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 rounded-md"
          style={{ color: "#F1E7DC", background: "none", border: "none" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div style={{ backgroundColor: "#013835", borderTop: "1px solid rgba(241,231,220,0.12)" }}>
          <div className="container py-4 flex flex-col gap-1">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a className="block px-4 py-3 rounded-md text-base no-underline"
                  style={{ color: "rgba(241,231,220,0.85)" }}
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/donate">
              <a className="block mt-3 px-4 py-3 rounded-lg text-base font-semibold text-center no-underline"
                style={{ backgroundColor: "#F1E7DC", color: "#013835" }}
                onClick={() => setIsOpen(false)}>
                💛 Donate Now
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
