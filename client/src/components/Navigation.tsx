import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

const G = "#013835"; const C = "#F1E7DC"; const GOLD = "#DB453D";
const RED = "#DB453D";

const navItems = [
  { label: "Home", href: "/" },
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
    const fn = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);
  useEffect(() => setIsOpen(false), [location]);

  return (
    <nav style={{ position: "sticky", top: 0, zIndex: 50, backgroundColor: G, borderBottom: "1px solid rgba(241,231,220,0.10)", boxShadow: scrolled ? "0 4px 24px rgba(1,56,53,0.25)" : "none", transition: "box-shadow 0.3s" }}>
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: 68 }}>

        {/* Logo */}
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none", flexShrink: 0 }}>
            <div style={{ width: 56, height: 56, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
              <img src={logo} alt="Aishi For Furries" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", filter: "brightness(0) invert(1)" }} />
            </div>
            <span style={{ color: "#fff", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "1.1rem" }}>Aishi For Furries</span>
          </a>
        </Link>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ alignItems: "center", gap: 2 }}>
          {navItems.map(item => {
            const active = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a style={{ padding: "6px 12px", fontSize: "0.82rem", fontFamily: "'Josefin Sans',sans-serif", fontWeight: active ? 700 : 500, color: active ? C : "rgba(241,231,220,0.65)", backgroundColor: active ? "rgba(241,231,220,0.12)" : "transparent", borderRadius: 8, textDecoration: "none", letterSpacing: "0.02em", transition: "all 0.15s" }}>
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Donate CTA */}
        <div className="hidden md:flex">
          <Link href="/donate">
            <a style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "9px 20px", backgroundColor: RED, color: "#fff", borderRadius: 8, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.82rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 2px 12px rgba(219,69,61,0.35)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 20px rgba(219,69,61,0.45)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 2px 12px rgba(219,69,61,0.35)"; }}
            >
              💛 Donate Now
            </a>
          </Link>
        </div>

        {/* Mobile burger */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden" style={{ padding: 8, color: C, background: "none", border: "none" }} aria-label="Toggle menu">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div style={{ backgroundColor: G, borderTop: "1px solid rgba(241,231,220,0.12)" }}>
          <div className="container" style={{ paddingTop: 16, paddingBottom: 24, display: "flex", flexDirection: "column", gap: 4 }}>
            {navItems.map(item => (
              <Link key={item.href} href={item.href}>
                <a style={{ display: "block", padding: "12px 16px", color: "rgba(241,231,220,0.88)", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 500, fontSize: "1rem", textDecoration: "none", borderRadius: 8, letterSpacing: "0.02em" }} onClick={() => setIsOpen(false)}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/donate">
              <a style={{ display: "block", marginTop: 8, padding: "14px 16px", backgroundColor: RED, color: "#fff", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "1rem", textDecoration: "none", borderRadius: 10, textAlign: "center" }} onClick={() => setIsOpen(false)}>
                💛 Donate Now
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
