import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

const quickLinks = [
  { label: "About Us", href: "/about" },
  { label: "Our Work", href: "/our-work" },
  { label: "Impact", href: "/impact" },
  { label: "Adopt & Foster", href: "/adopt" },
  { label: "Partner With Us", href: "/volunteer" },
];

const involvedLinks = [
  { label: "Donate", href: "/donate" },
  { label: "Volunteer", href: "/volunteer" },
  { label: "Foster a Dog", href: "/adopt" },
  { label: "Contact Us", href: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: "#0A1E1D", color: "#F1E7DC" }}>
      <div className="container py-14 md:py-20">

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <img src={logo} alt="Aishi For Furries" className="h-10 w-10 object-contain rounded-full" style={{ border: "1.5px solid rgba(241,231,220,0.25)" }} />
              <span style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "1.05rem", color: "#F1E7DC" }}>
                Aishi For Furries
              </span>
            </div>
            <p className="text-sm mb-5 leading-relaxed" style={{ color: "rgba(241,231,220,0.6)", maxWidth: "240px" }}>
              Rescuing, rehabilitating, and caring for Gurgaon's most vulnerable dogs since 2017.
            </p>
            <div className="flex gap-3">
              {[
                { href: "https://www.instagram.com/aishiforfurries/", icon: <Instagram size={15} /> },
                { href: "https://www.facebook.com/aishiforfurries", icon: <Facebook size={15} /> },
              ].map((s, i) => (
                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center w-9 h-9 rounded-full transition-all duration-200 hover:bg-white/10"
                  style={{ border: "1px solid rgba(241,231,220,0.2)", color: "#F1E7DC" }}>
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(241,231,220,0.4)" }}>Navigation</p>
            <ul className="flex flex-col gap-2.5">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-sm no-underline transition-colors duration-150 hover:text-white" style={{ color: "rgba(241,231,220,0.65)" }}>
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(241,231,220,0.4)" }}>Get Involved</p>
            <ul className="flex flex-col gap-2.5">
              {involvedLinks.map(l => (
                <li key={l.href}>
                  <Link href={l.href}>
                    <a className="text-sm no-underline transition-colors duration-150 hover:text-white" style={{ color: "rgba(241,231,220,0.65)" }}>
                      {l.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest mb-4" style={{ color: "rgba(241,231,220,0.4)" }}>Contact</p>
            <ul className="flex flex-col gap-3">
              <li>
                <a href="tel:+919873218040" className="flex items-center gap-2.5 text-sm no-underline" style={{ color: "rgba(241,231,220,0.65)" }}>
                  <Phone size={13} className="flex-shrink-0" /> +91 9873218040
                </a>
              </li>
              <li>
                <a href="mailto:aishiforfurries@gmail.com" className="flex items-start gap-2.5 text-sm no-underline break-all" style={{ color: "rgba(241,231,220,0.65)" }}>
                  <Mail size={13} className="flex-shrink-0 mt-0.5" /> aishiforfurries@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5 text-sm" style={{ color: "rgba(241,231,220,0.65)" }}>
                <MapPin size={13} className="flex-shrink-0" /> Gurgaon, Haryana
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-2 text-center md:text-left" style={{ borderTop: "1px solid rgba(241,231,220,0.10)" }}>
          <p className="text-xs" style={{ color: "rgba(241,231,220,0.35)" }}>
            © 2025 Aishi For Furries. Registered NGO · Gurgaon, Haryana
          </p>
          <p className="text-xs" style={{ color: "rgba(241,231,220,0.22)" }}>
            Every life matters. Every dog deserves a second chance.
          </p>
        </div>
      </div>
    </footer>
  );
}
