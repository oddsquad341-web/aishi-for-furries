import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Heart, Users, Stethoscope, Utensils, Scissors, ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import heroImage from "@/assets/aishi/raw/2.png";
import founderImage from "@/assets/aishi/raw/0.png";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import blackyImage from "@/assets/aishi/raw/9.png";

const G = "#013835";
const CREAM = "#F1E7DC";
const GOLD = "#B99572";

// ── Scroll-reveal hook ──────────────────────────────────────────
function useReveal(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

// ── Animated counter ────────────────────────────────────────────
function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let start = 0;
    const duration = 1800;
    const step = 16;
    const increment = target / (duration / step);
    const timer = setInterval(() => {
      start += increment;
      if (start >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(start));
    }, step);
    return () => clearInterval(timer);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Home() {
  const stats = [
    { number: 65, suffix: "+", label: "Permanent Rescues", icon: Heart },
    { number: 500, suffix: "+", label: "Medical Cases", icon: Stethoscope },
    { number: 150, suffix: "+", label: "Dogs Fed Daily", icon: Utensils },
    { number: 40, suffix: "+", label: "Adoptions", icon: Users },
    { number: 1500, suffix: "+", label: "Sterilisations", icon: Scissors },
  ];

  const pillars = [
    { title: "Rescue", description: "Emergency response and field pickups for animals in distress.", icon: "🚑" },
    { title: "Medical Care", description: "Professional treatment and rehabilitation for injured and sick dogs.", icon: "⚕️" },
    { title: "Shelter", description: "Safe, long-term care for special-needs and vulnerable dogs.", icon: "🏠" },
    { title: "Vaccination & Sterilisation", description: "Public health initiatives preventing disease and overpopulation.", icon: "💉" },
    { title: "Feeding Program", description: "Daily nutritious meals for community dogs across Gurgaon.", icon: "🍖" },
  ];

  const journey = [
    { year: "2017", title: "It Begins", description: "Two community dogs spark a lifelong mission." },
    { year: "2020", title: "COVID Response", description: "Rescues intensified while the world shut down." },
    { year: "2024", title: "Permanent Shelter", description: "A sanctuary for senior and paralysed animals." },
    { year: "2025", title: "Registered NGO", description: "Formal recognition, expanded reach and impact." },
  ];

  const stories = [
    { image: lakshmiImage, name: "Lakshmi", description: "Spinal injury survivor now living with dignity.", slug: "lakshmi" },
    { image: narayanImage, name: "Narayan", description: "Hit-and-run survivor rehabilitated to freedom.", slug: "narayan" },
    { image: blackyImage, name: "Blacky", description: "A brave story of recovery and care.", slug: "blacky" },
  ];

  // Hero text reveal
  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 100); return () => clearTimeout(t); }, []);

  // Parallax hero
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onScroll = () => {
      if (heroRef.current) {
        const img = heroRef.current.querySelector("img") as HTMLElement;
        if (img) img.style.transform = `translateY(${window.scrollY * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Section reveals
  const statsReveal = useReveal(0.1);
  const storiesReveal = useReveal(0.1);
  const pillarsReveal = useReveal(0.1);
  const founderReveal = useReveal(0.1);
  const timelineReveal = useReveal(0.1);

  const staggerStyle = (i: number, visible: boolean) => ({
    opacity: visible ? 1 : 0,
    transform: visible ? "translateY(0)" : "translateY(40px)",
    transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
  });

  return (
    <div style={{ overflowX: "hidden" }}>

      {/* ── HERO ─────────────────────────────────────────── */}
      <section ref={heroRef} style={{ position: "relative", height: "100svh", minHeight: 520, maxHeight: 800, overflow: "hidden" }}>
        <img src={heroImage} alt="Rescued dog" style={{
          position: "absolute", inset: 0, width: "100%", height: "115%",
          objectFit: "cover", objectPosition: "center",
          willChange: "transform",
        }} />
        {/* layered gradient */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,56,53,0.75) 0%, rgba(0,0,0,0.3) 60%, rgba(0,0,0,0.1) 100%)" }} />
        {/* decorative gold line */}
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />

        <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "80px" }}>
          {/* eyebrow */}
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: "rgba(241,231,220,0.12)", border: `1px solid rgba(241,231,220,0.25)`,
            borderRadius: 999, padding: "6px 16px", marginBottom: 24,
            width: "fit-content",
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(12px)",
            transition: "all 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s",
          }}>
            <span style={{ width: 7, height: 7, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
            <span style={{ color: CREAM, fontSize: "0.78rem", fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, letterSpacing: "0.12em", textTransform: "uppercase" }}>
              Animal Welfare · Gurgaon
            </span>
          </div>

          <h1 style={{
            color: "#FFFFFF", maxWidth: 680, marginBottom: 24,
            fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700,
            fontSize: "clamp(2.2rem, 5.5vw, 4rem)", lineHeight: 1.1, letterSpacing: "-0.01em",
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s",
          }}>
            Every Dog Deserves<br />
            <span style={{ color: GOLD }}>a Second Chance</span>
          </h1>

          <p style={{
            color: "rgba(255,255,255,0.85)", maxWidth: 520, marginBottom: 36,
            fontFamily: "'Quicksand', sans-serif", fontSize: "1.1rem", lineHeight: 1.75,
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s",
          }}>
            Rescuing, rehabilitating, and caring for Gurgaon's most vulnerable dogs — from emergency rescues to lifelong shelter residents.
          </p>

          <div style={{
            display: "flex", flexWrap: "wrap", gap: 12,
            opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)",
            transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s",
          }}>
            <Link href="/donate">
              <a style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: GOLD, color: G,
                padding: "14px 28px", borderRadius: 10,
                fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700,
                fontSize: "0.95rem", letterSpacing: "0.04em", textDecoration: "none",
                transition: "all 0.2s", boxShadow: "0 4px 20px rgba(185,149,114,0.4)",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 28px rgba(185,149,114,0.5)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(185,149,114,0.4)"; }}
              >
                💛 Donate Now
              </a>
            </Link>
            <Link href="/adopt">
              <a style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: "rgba(255,255,255,0.12)", color: "#fff",
                border: "1.5px solid rgba(255,255,255,0.4)",
                padding: "14px 28px", borderRadius: 10,
                fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600,
                fontSize: "0.95rem", letterSpacing: "0.04em", textDecoration: "none",
                backdropFilter: "blur(8px)",
                transition: "all 0.2s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.12)"; }}
              >
                🐾 Meet Our Dogs
              </a>
            </Link>
          </div>

          {/* scroll hint */}
          <div style={{
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
            opacity: heroVisible ? 0.6 : 0, transition: "opacity 1s 1.2s",
          }}>
            <span style={{ color: CREAM, fontSize: "0.7rem", fontFamily: "'Josefin Sans', sans-serif", letterSpacing: "0.15em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: 1, height: 40, background: `linear-gradient(to bottom, ${CREAM}, transparent)`, animation: "scrollPulse 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────── */}
      <section style={{ background: G, padding: "64px 0" }}>
        <div className="container" ref={statsReveal.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(140px, 1fr))", gap: "2px" }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} style={{
                  textAlign: "center", padding: "32px 16px",
                  borderRight: i < stats.length - 1 ? "1px solid rgba(241,231,220,0.12)" : "none",
                  ...staggerStyle(i, statsReveal.visible),
                }}>
                  <Icon style={{ width: 28, height: 28, color: GOLD, margin: "0 auto 12px" }} />
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem, 3vw, 2.5rem)", color: CREAM, lineHeight: 1 }}>
                    <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: "rgba(241,231,220,0.6)", fontSize: "0.8rem", fontFamily: "'Josefin Sans', sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 8 }}>
                    {stat.label}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STORIES OF HOPE ──────────────────────────────── */}
      <section style={{ background: "#FAF6F0", padding: "96px 0" }}>
        <div className="container" ref={storiesReveal.ref}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 56, flexWrap: "wrap", gap: 16 }}>
            <div>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Real Lives. Real Change.</p>
              <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", color: G, margin: 0 }}>Stories of Hope</h2>
            </div>
            <Link href="/rescue-stories">
              <a style={{ display: "flex", alignItems: "center", gap: 6, color: G, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: "0.875rem", textDecoration: "none", letterSpacing: "0.05em" }}>
                View all <ArrowRight size={15} />
              </a>
            </Link>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {stories.map((story, i) => (
              <Link key={i} href={`/rescue-stories/${story.slug}`}>
                <a style={{ textDecoration: "none", display: "block" }}>
                  <div style={{
                    ...staggerStyle(i, storiesReveal.visible),
                    background: G, borderRadius: 16, overflow: "hidden",
                    cursor: "pointer", position: "relative",
                    boxShadow: "0 4px 24px rgba(1,56,53,0.12)",
                  }}
                    className="story-card"
                    onMouseEnter={e => {
                      const img = (e.currentTarget as HTMLElement).querySelector(".story-img") as HTMLElement;
                      if (img) { img.style.transform = "scale(1.08) translateY(-4px)"; }
                      (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(1,56,53,0.22)";
                    }}
                    onMouseLeave={e => {
                      const img = (e.currentTarget as HTMLElement).querySelector(".story-img") as HTMLElement;
                      if (img) { img.style.transform = "scale(1) translateY(0)"; }
                      (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
                      (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 24px rgba(1,56,53,0.12)";
                    }}
                    style={{ transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)", ...staggerStyle(i, storiesReveal.visible) }}
                  >
                    {/* image pops out effect via clip + scale */}
                    <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                      <img src={story.image} alt={story.name} className="story-img" style={{
                        width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top",
                        transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)",
                        display: "block",
                      }} />
                      {/* gradient fade into card */}
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to top, ${G}, transparent)` }} />
                    </div>
                    <div style={{ padding: "20px 24px 28px" }}>
                      <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", color: CREAM, marginBottom: 8, fontSize: "1.3rem" }}>{story.name}</h3>
                      <p style={{ color: "rgba(241,231,220,0.72)", fontSize: "0.9rem", marginBottom: 16, lineHeight: 1.6 }}>{story.description}</p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 6, color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Read story <ArrowRight size={13} />
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATION BANNER ──────────────────────────────── */}
      <section style={{ background: `linear-gradient(135deg, #012825 0%, ${G} 60%, #025950 100%)`, padding: "96px 0", position: "relative", overflow: "hidden" }}>
        {/* decorative circles */}
        <div style={{ position: "absolute", right: -100, top: -100, width: 400, height: 400, borderRadius: "50%", border: `1px solid rgba(241,231,220,0.06)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", right: -40, top: -40, width: 250, height: 250, borderRadius: "50%", border: `1px solid rgba(241,231,220,0.08)`, pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -80, bottom: -80, width: 300, height: 300, borderRadius: "50%", border: `1px solid rgba(185,149,114,0.08)`, pointerEvents: "none" }} />

        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Make a Difference Today</p>
          <h2 style={{ color: CREAM, fontFamily: "'Josefin Sans', sans-serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", maxWidth: 640, margin: "0 auto 24px" }}>Give Them a Second Chance</h2>
          <p style={{ color: "rgba(241,231,220,0.75)", fontFamily: "'Quicksand', sans-serif", fontSize: "1.05rem", maxWidth: 540, margin: "0 auto 40px", lineHeight: 1.8 }}>
            Every rescue deserves food, medical care, and a safe place to heal. Your donation helps us care for abandoned, injured, senior, and special-needs dogs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/donate">
              <a style={{ display: "inline-flex", alignItems: "center", gap: 8, background: GOLD, color: G, padding: "15px 32px", borderRadius: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 20px rgba(185,149,114,0.3)" }}>
                💛 Donate Now
              </a>
            </Link>
            <Link href="/adopt">
              <a style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "transparent", color: CREAM, border: `1.5px solid rgba(241,231,220,0.35)`, padding: "15px 32px", borderRadius: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, fontSize: "0.95rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s" }}>
                🐾 Adopt a Dog
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ─────────────────────────────────── */}
      <section style={{ background: "#FAF6F0", padding: "96px 0" }}>
        <div className="container" ref={pillarsReveal.ref}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>How We Help</p>
            <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", color: G }}>Our Five Pillars</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{
                ...staggerStyle(i, pillarsReveal.visible),
                background: G, borderRadius: 16, padding: "32px 24px",
                border: "1px solid rgba(241,231,220,0.10)",
                transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s, box-shadow 0.25s`,
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(1,56,53,0.25)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.boxShadow = "none"; if (pillarsReveal.visible) (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: 16 }}>{p.icon}</div>
                <h3 style={{ fontFamily: "'Josefin Sans', sans-serif", color: CREAM, fontSize: "1.05rem", fontWeight: 700, marginBottom: 10 }}>{p.title}</h3>
                <p style={{ color: "rgba(241,231,220,0.68)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET AASHIMA ─────────────────────────────────── */}
      <section style={{ background: "#fff", padding: "96px 0" }}>
        <div className="container" ref={founderReveal.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
            {/* Image with decorative frame */}
            <div style={{ ...staggerStyle(0, founderReveal.visible), position: "relative" }}>
              <div style={{ position: "absolute", inset: -16, border: `2px solid ${GOLD}`, borderRadius: 20, opacity: 0.25, zIndex: 0 }} />
              <div style={{ position: "absolute", top: -8, right: -8, width: 80, height: 80, background: GOLD, borderRadius: "0 20px 0 80px", opacity: 0.15, zIndex: 0 }} />
              <img src={founderImage} alt="Aashima Madan" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 16, position: "relative", zIndex: 1, display: "block" }} />
            </div>
            <div style={staggerStyle(1, founderReveal.visible)}>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>The Person Behind the Mission</p>
              <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", color: G, marginBottom: 24 }}>Meet Aashima Madan</h2>
              <p style={{ color: "#3a3a3a", lineHeight: 1.85, marginBottom: 16 }}>
                What began with two community dogs in 2017 has grown into Aishi For Furries — a registered animal welfare organization dedicated to rescuing, rehabilitating, and caring for dogs in need.
              </p>
              <p style={{ color: "#3a3a3a", lineHeight: 1.85, marginBottom: 16 }}>
                For Aashima, the mission has always been simple: every animal deserves kindness, medical care, safety, and the opportunity to live with dignity.
              </p>
              <p style={{ color: "#3a3a3a", lineHeight: 1.85, marginBottom: 32 }}>
                Today, Aishi For Furries cares for over 100 community dogs, houses 45+ permanent residents, and continues to provide medical support, shelter, and rehabilitation to vulnerable animals across Gurgaon.
              </p>
              <Link href="/about">
                <a style={{ display: "inline-flex", alignItems: "center", gap: 8, background: G, color: CREAM, padding: "13px 28px", borderRadius: 10, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.05em", textDecoration: "none" }}>
                  Our Story <ArrowRight size={15} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── JOURNEY TIMELINE ─────────────────────────────── */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={timelineReveal.ref}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Since 2017</p>
            <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", color: CREAM }}>Our Journey</h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:block" style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 1, background: `linear-gradient(to right, transparent, rgba(241,231,220,0.2), transparent)`, transform: "translateY(-50%)" }} />
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24 }}>
              {journey.map((item, i) => {
                const isUp = i % 2 === 0;
                return (
                  <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", ...staggerStyle(i, timelineReveal.visible) }}>
                    <div style={{ width: "100%", ...(isUp ? { marginBottom: 32 } : { marginTop: 32, order: 2 }) }}>
                      <div style={{ background: "rgba(241,231,220,0.07)", border: "1px solid rgba(241,231,220,0.12)", borderRadius: 14, padding: "24px 20px", textAlign: "center" }}>
                        <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: "1.5rem", color: GOLD, marginBottom: 8 }}>{item.year}</div>
                        <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, color: CREAM, marginBottom: 8, fontSize: "0.95rem" }}>{item.title}</div>
                        <p style={{ color: "rgba(241,231,220,0.6)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                      </div>
                    </div>
                    <div style={{ width: 14, height: 14, borderRadius: "50%", background: GOLD, border: "3px solid rgba(241,231,220,0.3)", flexShrink: 0, position: "relative", zIndex: 1 }} />
                  </div>
                );
              })}
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden" style={{ position: "relative", paddingLeft: 24 }}>
            <div style={{ position: "absolute", left: 6, top: 0, bottom: 0, width: 1, background: "rgba(241,231,220,0.15)" }} />
            {journey.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 28, ...staggerStyle(i, timelineReveal.visible) }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: GOLD, flexShrink: 0, marginTop: 6, position: "relative", left: -30 }} />
                <div style={{ background: "rgba(241,231,220,0.07)", border: "1px solid rgba(241,231,220,0.12)", borderRadius: 12, padding: "18px 16px", flex: 1, marginLeft: -14 }}>
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, color: GOLD, marginBottom: 4 }}>{item.year}</div>
                  <div style={{ fontFamily: "'Josefin Sans', sans-serif", fontWeight: 600, color: CREAM, marginBottom: 6, fontSize: "0.9rem" }}>{item.title}</div>
                  <p style={{ color: "rgba(241,231,220,0.6)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────── */}
      <section style={{ background: "#FAF6F0", padding: "112px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans', sans-serif", fontSize: "0.75rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 20 }}>Every Life Matters</p>
          <h2 style={{ fontFamily: "'Josefin Sans', sans-serif", color: G, fontSize: "clamp(2rem, 4vw, 3rem)", maxWidth: 640, margin: "0 auto 28px" }}>Help Us Keep Showing Up</h2>
          <div style={{ color: "#555", fontFamily: "'Quicksand', sans-serif", fontSize: "1.05rem", lineHeight: 2, marginBottom: 44, maxWidth: 440, margin: "0 auto 44px" }}>
            <p>For the dog recovering from surgery.</p>
            <p>For the senior who has nowhere else to go.</p>
            <p>For the puppy waiting for a family.</p>
            <p style={{ fontWeight: 700, color: G }}>For every life that still needs a second chance.</p>
          </div>
          <Link href="/donate">
            <a style={{ display: "inline-flex", alignItems: "center", gap: 10, background: G, color: CREAM, padding: "16px 40px", borderRadius: 12, fontFamily: "'Josefin Sans', sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.05em", textDecoration: "none", boxShadow: "0 8px 32px rgba(1,56,53,0.2)", transition: "all 0.2s" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 48px rgba(1,56,53,0.28)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 8px 32px rgba(1,56,53,0.2)"; }}
            >
              Donate Now <ArrowRight size={16} />
            </a>
          </Link>
        </div>
      </section>

      <style>{`
        @keyframes scrollPulse {
          0%, 100% { opacity: 0.4; transform: scaleY(0.8); }
          50% { opacity: 1; transform: scaleY(1); }
        }
      `}</style>
    </div>
  );
}
