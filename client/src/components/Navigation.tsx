import { useState } from "react";
import { Link } from "wouter";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/aishi/raw/1.png";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Our Work", href: "/our-work" },
    { label: "Impact", href: "/impact" },
    { label: "Adopt/Foster", href: "/adopt" },
    { label: "Volunteer", href: "/volunteer" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-background border-b border-border shadow-sm">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/">
          <a className="flex items-center gap-3 font-bold text-xl text-primary hover:opacity-80 transition-opacity">
            <img src={logo} alt="Aishi For Furries" className="h-8 md:h-10 object-contain" />
            <span>Aishi For Furries</span>
          </a>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href}>
              <a className="px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/20 rounded-md transition-colors">
                {item.label}
              </a>
            </Link>
          ))}
        </div>

        {/* Donate Button */}
        <div className="hidden md:flex items-center gap-4">
          <Link href="/donate">
            <a>
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground">
                Donate Now
              </Button>
            </a>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2 hover:bg-accent/20 rounded-md transition-colors"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden border-t border-border bg-background">
          <div className="container py-4 space-y-2">
            {navItems.map((item) => (
              <Link key={item.href} href={item.href}>
                <a
                  className="block px-3 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/20 rounded-md transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              </Link>
            ))}
            <Link href="/donate">
              <a onClick={() => setIsOpen(false)}>
                <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                  Donate Now
                </Button>
              </a>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
