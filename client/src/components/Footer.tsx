import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

const BRAND_GREEN = "#013835";
const CREAM = "#F1E7DC";

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1E1D", color: CREAM }}>

      {/* Main footer grid */}
      <div className="container" style={{ paddingTop: "64px", paddingBottom: "48px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "48px" }}>

          {/* Brand column */}
          <div style={{ gridColumn: "span 1" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "16px" }}>
              <img src={logo} alt="Aishi For Furries" style={{ height: 44, width: 44, objectFit: "contain", borderRadius: "50%", border: "1.5px solid rgba(241,231,220,0.25)" }} />
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.1rem", color: CREAM, lineHeight: 1.2 }}>
                Aishi For Furries
              </span>
            </div>
            <p style={{ fontSize: "0.875rem", color: "rgba(241,231,220,0.65)", lineHeight: 1.7, marginBottom: "20px", maxWidth: "240px" }}>
              Rescuing, rehabilitating, and caring for Gurgaon's most vulnerable dogs since 2017.
            </p>
            <div style={{ display: "flex", gap: "12px" }}>
              <a href="https://www.instagram.com/aishiforfurries/" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.2)", color: CREAM, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(241,231,220,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/aishiforfurries" target="_blank" rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", justifyContent: "center", width: 36, height: 36, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.2)", color: CREAM, transition: "all 0.2s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "rgba(241,231,220,0.12)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.backgroundColor = "transparent"; }}
              >
                <Facebook size={16} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(241,231,220,0.45)", marginBottom: "16px" }}>Navigation</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "About Us", href: "/about" },
                { label: "Our Work", href: "/our-work" },
                { label: "Impact", href: "/impact" },
                { label: "Adopt & Foster", href: "/adopt" },
                { label: "Partner With Us", href: "/volunteer" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a style={{ color: "rgba(241,231,220,0.7)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CREAM}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(241,231,220,0.7)"}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get involved */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(241,231,220,0.45)", marginBottom: "16px" }}>Get Involved</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
              {[
                { label: "Donate", href: "/donate" },
                { label: "Volunteer", href: "/volunteer" },
                { label: "Foster a Dog", href: "/adopt" },
                { label: "Contact Us", href: "/contact" },
              ].map(link => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a style={{ color: "rgba(241,231,220,0.7)", textDecoration: "none", fontSize: "0.9rem", transition: "color 0.15s" }}
                      onMouseEnter={e => (e.currentTarget as HTMLElement).style.color = CREAM}
                      onMouseLeave={e => (e.currentTarget as HTMLElement).style.color = "rgba(241,231,220,0.7)"}
                    >
                      {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p style={{ fontSize: "0.7rem", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase", color: "rgba(241,231,220,0.45)", marginBottom: "16px" }}>Contact</p>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "14px" }}>
              <li>
                <a href="tel:+919873218040" style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(241,231,220,0.7)", textDecoration: "none", fontSize: "0.9rem" }}>
                  <Phone size={14} style={{ flexShrink: 0 }} />
                  +91 9873218040
                </a>
              </li>
              <li>
                <a href="mailto:aishiforfurries@gmail.com" style={{ display: "flex", alignItems: "flex-start", gap: "10px", color: "rgba(241,231,220,0.7)", textDecoration: "none", fontSize: "0.9rem", wordBreak: "break-all" }}>
                  <Mail size={14} style={{ flexShrink: 0, marginTop: "3px" }} />
                  aishiforfurries@gmail.com
                </a>
              </li>
              <li style={{ display: "flex", alignItems: "center", gap: "10px", color: "rgba(241,231,220,0.7)", fontSize: "0.9rem" }}>
                <MapPin size={14} style={{ flexShrink: 0 }} />
                Gurgaon, Haryana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: "1px solid rgba(241,231,220,0.10)", paddingTop: "24px", display: "flex", flexDirection: "column", gap: "8px", alignItems: "center", textAlign: "center" }}>
          <p style={{ fontSize: "0.8rem", color: "rgba(241,231,220,0.4)" }}>
            © 2025 Aishi For Furries. Registered NGO · Gurgaon, Haryana
          </p>
          <p style={{ fontSize: "0.75rem", color: "rgba(241,231,220,0.25)" }}>
            Every life matters. Every dog deserves a second chance.
          </p>
        </div>
      </div>
    </footer>
  );
}
