import { Link } from "wouter";
import { Mail, Phone, MapPin, Instagram, Facebook } from "lucide-react";
import logo from "@/assets/aishi/raw/circularlogo.png";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground py-12 md:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4 flex items-center gap-3">
              <img src={logo} alt="Aishi For Furries" className="h-8 w-8 object-contain" />
              Aishi For Furries
            </h3>
            <p className="text-sm opacity-90">
              Transforming compassion into action for Gurgaon's stray animals through rescue, rehabilitation, and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about">
                  <a className="hover:underline opacity-90 hover:opacity-100">About Us</a>
                </Link>
              </li>
              <li>
                <Link href="/our-work">
                  <a className="hover:underline opacity-90 hover:opacity-100">Our Work</a>
                </Link>
              </li>
              <li>
                <Link href="/impact">
                  <a className="hover:underline opacity-90 hover:opacity-100">Impact</a>
                </Link>
              </li>
              <li>
                <Link href="/adopt">
                  <a className="hover:underline opacity-90 hover:opacity-100">Adopt/Foster</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Get Involved */}
          <div>
            <h4 className="font-semibold mb-4">Get Involved</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/donate">
                  <a className="hover:underline opacity-90 hover:opacity-100">Donate</a>
                </Link>
              </li>
              <li>
                <Link href="/volunteer">
                  <a className="hover:underline opacity-90 hover:opacity-100">Volunteer</a>
                </Link>
              </li>
              <li>
                <Link href="/contact">
                  <a className="hover:underline opacity-90 hover:opacity-100">Contact Us</a>
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="mt-0.5 flex-shrink-0" />
                <a href="tel:+919873218040" className="hover:underline opacity-90 hover:opacity-100">
                  +91 9873218040
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="mt-0.5 flex-shrink-0" />
                <a href="mailto:aishiforfurries@gmail.com" className="hover:underline opacity-90 hover:opacity-100 break-all">
                  aishiforfurries@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="mt-0.5 flex-shrink-0" />
                <span className="opacity-90">Gurgaon, Haryana</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-foreground/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm opacity-80">
            © 2025 Aishi For Furries. All rights reserved. | Registered NGO in Gurgaon
          </p>
          <div className="flex items-center gap-4">
            <a
              href="https://www.instagram.com/aishiforfurries/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Instagram size={20} />
            </a>
            <a
              href="https://www.facebook.com/aishiforfurries"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-opacity"
            >
              <Facebook size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
