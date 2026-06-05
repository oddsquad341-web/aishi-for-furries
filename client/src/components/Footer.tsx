import { Link } from "wouter";
import { Mail, Phone, MapPin } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

const G = "#013835"; const C = "#F1E7DC"; const GOLD = "#DB453D";

const SvgInstagram = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
  </svg>
);
const SvgFacebook = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Adopt & Foster", href: "/adopt" },
  { label: "Partner With Us", href: "/volunteer" },
];

const involvedLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Partner With Us", href: "/volunteer" },
  { label: "Foster a Dog", href: "/adopt" },
  { label: "Contact Us", href: "/contact" },
];

const linkStyle = { color: "rgba(241,231,220,0.6)", textDecoration: "none", fontSize: "0.875rem", fontFamily: "'Quicksand',sans-serif", fontWeight: 500, transition: "color 0.15s" };

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1E1D" }}>
      <div className="container" style={{ paddingTop: 48, paddingBottom: 32 }}>

        {/* Grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr)", gap: "28px 24px", marginBottom: 36 }}>

          {/* Brand */}
          <div style={{ gridColumn: "span 1" }}>
            <Link href="/">
              <a style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
                <img src={logo} alt="Aishi For Furries" style={{ height: 34, width: 34, objectFit: "contain", borderRadius: "50%", border: "1.5px solid rgba(241,231,220,0.2)" }} />
                <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.9rem", color: C, fontWeight: 600 }}>Aishi For Furries</span>
              </a>
            </Link>
            <p style={{ color: "rgba(241,231,220,0.55)", fontSize: "0.8rem", lineHeight: 1.65, marginBottom: 18, maxWidth: 200, fontFamily: "'Quicksand',sans-serif" }}>
              Rescuing, rehabilitating, and caring for Gurgaon's most vulnerable dogs since 2017.
            </p>
            {/* Social icons — explicit SVG so colour always renders */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: "https://www.instagram.com/aishiforfurries/", icon: <SvgInstagram />, label: "Instagram" },
                { href: "https://www.facebook.com/aishiforfurries", icon: <SvgFacebook />, label: "Facebook" },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer" aria-label={s.label}
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 38, height: 38, borderRadius: "50%", border: "1.5px solid rgba(241,231,220,0.25)", color: C, transition: "all 0.2s", flexShrink: 0 }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(241,231,220,0.12)"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(241,231,220,0.5)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; (e.currentTarget as HTMLElement).style.borderColor = "rgba(241,231,220,0.25)"; }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p style={{ fontSize: "0.68rem", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(241,231,220,0.35)", marginBottom: 18 }}>Navigation</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {navLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a style={linkStyle}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(241,231,220,0.6)"}
                    >{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <p style={{ fontSize: "0.68rem", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(241,231,220,0.35)", marginBottom: 18 }}>Get Involved</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {involvedLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a style={linkStyle}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = C}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(241,231,220,0.6)"}
                    >{l.label}</a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.68rem", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", color: "rgba(241,231,220,0.35)", marginBottom: 18 }}>Contact</p>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="tel:+919873218040" style={{ display: "flex", alignItems: "center", gap: 10, ...linkStyle }}>
                <Phone size={13} style={{ color: GOLD, flexShrink: 0 }} /> +91 9873218040
              </a>
              <a href="mailto:aishiforfurries@gmail.com" style={{ display: "flex", alignItems: "flex-start", gap: 10, ...linkStyle, wordBreak: "break-all" }}>
                <Mail size={13} style={{ color: GOLD, flexShrink: 0, marginTop: 3 }} /> aishiforfurries@gmail.com
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 10, ...linkStyle }}>
                <MapPin size={13} style={{ color: GOLD, flexShrink: 0 }} /> Gurgaon, Haryana
              </div>
            </div>
          </div>
        </div>

        {/* Divider + bottom bar */}
        <div style={{ borderTop: "1px solid rgba(241,231,220,0.08)", paddingTop: 28, display: "flex", flexDirection: "column", alignItems: "center", gap: 6, textAlign: "center" }}>
          <p style={{ fontSize: "0.78rem", color: "rgba(241,231,220,0.3)", fontFamily: "'Quicksand',sans-serif" }}>
            © 2025 Aishi For Furries · Registered NGO · Gurgaon, Haryana
          </p>
          <p style={{ fontSize: "0.7rem", color: "rgba(241,231,220,0.18)", fontFamily: "'Josefin Sans',sans-serif", letterSpacing: "0.06em", textTransform: "uppercase" }}>
            Every life matters · Every dog deserves a second chance
          </p>
        </div>
      </div>
    </footer>
  );
}
