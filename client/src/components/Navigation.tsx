import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

const BRAND_GREEN = "#013835";
const CREAM = "#F1E7DC";

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
    <nav
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backgroundColor: scrolled ? "rgba(1,56,53,0.97)" : BRAND_GREEN,
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: `1px solid rgba(241,231,220,0.10)`,
        transition: "all 0.3s ease",
      }}
    >
      <div className="container" style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "68px" }}>

        {/* Logo */}
        <Link href="/">
          <a style={{ display: "flex", alignItems: "center", gap: "10px", textDecoration: "none" }}>
            <img src={logo} alt="Aishi For Furries" style={{ height: 40, width: 40, objectFit: "contain", borderRadius: "50%" }} />
            <span style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: "1.15rem",
              fontWeight: 400,
              color: CREAM,
              letterSpacing: "0.01em",
              lineHeight: 1.2,
            }}>
              Aishi For Furries
            </span>
          </a>
        </Link>

        {/* Desktop nav */}
        <div style={{ display: "flex", alignItems: "center", gap: "4px" }} className="hidden md:flex">
          {navItems.map((item) => {
            const active = location === item.href;
            return (
              <Link key={item.href} href={item.href}>
                <a style={{
                  padding: "6px 14px",
                  fontSize: "0.875rem",
                  fontWeight: active ? 500 : 400,
                  color: active ? CREAM : "rgba(241,231,220,0.75)",
                  borderRadius: "6px",
                  textDecoration: "none",
                  letterSpacing: "0.01em",
                  backgroundColor: active ? "rgba(241,231,220,0.12)" : "transparent",
                  transition: "all 0.15s ease",
                }}
                  onMouseEnter={e => { if (!active) (e.target as HTMLElement).style.color = CREAM; (e.target as HTMLElement).style.backgroundColor = "rgba(241,231,220,0.08)"; }}
                  onMouseLeave={e => { if (!active) (e.target as HTMLElement).style.color = "rgba(241,231,220,0.75)"; (e.target as HTMLElement).style.backgroundColor = "transparent"; }}
                >
                  {item.label}
                </a>
              </Link>
            );
          })}
        </div>

        {/* Donate CTA */}
        <div className="hidden md:flex">
          <Link href="/donate">
            <a style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              padding: "9px 22px",
              backgroundColor: CREAM,
              color: BRAND_GREEN,
              borderRadius: "8px",
              fontWeight: 600,
              fontSize: "0.875rem",
              textDecoration: "none",
              letterSpacing: "0.02em",
              transition: "all 0.18s ease",
              boxShadow: "0 1px 3px rgba(0,0,0,0.15)",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "#fff"; (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = CREAM; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
            >
              💛 Donate Now
            </a>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
          style={{ padding: "8px", color: CREAM, background: "none", border: "none" }}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile drawer */}
      {isOpen && (
        <div style={{
          backgroundColor: BRAND_GREEN,
          borderTop: "1px solid rgba(241,231,220,0.12)",
          padding: "16px 0 24px",
        }}>
          <div className="container" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a style={{
                  display: "block",
                  padding: "10px 14px",
                  color: "rgba(241,231,220,0.9)",
                  textDecoration: "none",
                  fontSize: "1rem",
                  borderRadius: "6px",
                }}>
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/donate">
              <a style={{
                display: "block",
                marginTop: "12px",
                padding: "12px 14px",
                backgroundColor: CREAM,
                color: BRAND_GREEN,
                fontWeight: 600,
                textDecoration: "none",
                borderRadius: "8px",
                textAlign: "center",
              }}>
                💛 Donate Now
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
