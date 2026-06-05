import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { Heart, Users, Stethoscope, Utensils, Scissors, ArrowRight } from "lucide-react";
import heroImage from "@/assets/aishi/raw/2.png";
import founderImage from "@/assets/aishi/raw/0.png";
import lakshmiImage from "@/assets/aishi/raw/15.png";
import narayanImage from "@/assets/aishi/raw/14.png";
import blackyImage from "@/assets/aishi/raw/17.png";

const G = "#013835"; const C = "#F1E7DC"; const GOLD = "#B99572"; const RED = "#DB453D";

function useReveal(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let val = 0;
    const step = target / 80;
    const t = setInterval(() => { val += step; if (val >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(val)); }, 20);
    return () => clearInterval(t);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

const stg = (i: number, v: boolean, extra = 0) => ({
  opacity: v ? 1 : 0,
  transform: v ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.09 + extra}s, transform 0.65s cubic-bezier(0.22,1,0.36,1) ${i * 0.09 + extra}s`,
});

const redBtn = { display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: RED, color: "#fff", padding: "14px 28px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(219,69,61,0.3)" };
const outlineBtn = { display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: "rgba(255,255,255,0.10)", color: "#fff", border: "1.5px solid rgba(255,255,255,0.38)", padding: "14px 28px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", backdropFilter: "blur(6px)" };
const greenBtn = { display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: G, color: C, padding: "14px 28px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(1,56,53,0.18)" };

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
    { year: "2017", title: "It Begins", description: "Two community dogs spark a lifelong mission.", up: true },
    { year: "2019", title: "Community Grows", description: "AishiForFurries becomes a trusted neighbourhood welfare initiative.", up: false },
    { year: "2020", title: "COVID Response", description: "Rescues intensified while the world shut down.", up: true },
    { year: "2022", title: "Rapid Growth", description: "Daily feeding reaches 100+ dogs across Gurgaon.", up: false },
    { year: "2024", title: "Permanent Shelter", description: "A sanctuary for senior and paralysed animals.", up: true },
    { year: "2025", title: "Registered NGO", description: "Formal recognition, 45+ permanent residents.", up: false },
  ];

  const stories = [
    { image: lakshmiImage, name: "Lakshmi", description: "Spinal injury survivor now living with dignity.", slug: "lakshmi" },
    { image: narayanImage, name: "Narayan", description: "Hit-and-run survivor rehabilitated to freedom.", slug: "narayan" },
    { image: blackyImage, name: "Blacky", description: "A brave story of recovery and care.", slug: "blacky" },
  ];

  const [heroVisible, setHeroVisible] = useState(false);
  useEffect(() => { const t = setTimeout(() => setHeroVisible(true), 80); return () => clearTimeout(t); }, []);

  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const fn = () => { if (heroRef.current) { const img = heroRef.current.querySelector(".hero-bg") as HTMLElement; if (img) img.style.transform = `translateY(${window.scrollY * 0.28}px)`; } };
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  const statsR = useReveal(0.1); const storiesR = useReveal(0.1);
  const pillarsR = useReveal(0.1); const founderR = useReveal(0.1); const timelineR = useReveal(0.05);

  return (
    <div style={{ overflowX: "hidden", backgroundColor: C }}>

      {/* ── HERO ── */}
      <section ref={heroRef} style={{ position: "relative", height: "100svh", minHeight: 520, maxHeight: 820, overflow: "hidden" }}>
        <img className="hero-bg" src={heroImage} alt="" style={{ position: "absolute", inset: 0, width: "100%", height: "115%", objectFit: "cover", willChange: "transform" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,56,53,0.78) 0%, rgba(0,0,0,0.28) 70%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />
        <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 72 }}>
          {/* eyebrow */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "rgba(241,231,220,0.10)", border: "1px solid rgba(241,231,220,0.22)", borderRadius: 999, padding: "6px 14px", marginBottom: 20, width: "fit-content", opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(10px)", transition: "all 0.7s cubic-bezier(0.22,1,0.36,1) 0.1s" }}>
            <span style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: GOLD, display: "inline-block" }} />
            <span style={{ color: C, fontSize: "0.72rem", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase" }}>Animal Welfare · Gurgaon</span>
          </div>
          <h1 style={{ color: "#fff", maxWidth: 660, marginBottom: 22, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, lineHeight: 1.1, opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.2s" }}>
            Every Dog Deserves<br /><span style={{ color: GOLD }}>a Second Chance</span>
          </h1>
          <p style={{ color: "rgba(255,255,255,0.82)", maxWidth: 500, marginBottom: 36, fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", lineHeight: 1.8, opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.35s" }}>
            Rescuing, rehabilitating, and caring for Gurgaon's most vulnerable dogs — from emergency rescues to lifelong shelter residents.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12, opacity: heroVisible ? 1 : 0, transform: heroVisible ? "none" : "translateY(20px)", transition: "all 0.8s cubic-bezier(0.22,1,0.36,1) 0.5s" }}>
            <Link href="/donate"><a style={redBtn} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}>💛 Donate Now</a></Link>
            <Link href="/adopt"><a style={outlineBtn} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.18)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)"; }}>🐾 Meet Our Dogs</a></Link>
          </div>
          {/* scroll hint */}
          <div style={{ position: "absolute", bottom: 28, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 5, opacity: heroVisible ? 0.55 : 0, transition: "opacity 1.2s 1.2s" }}>
            <span style={{ color: C, fontSize: "0.65rem", fontFamily: "'Josefin Sans',sans-serif", letterSpacing: "0.18em", textTransform: "uppercase" }}>Scroll</span>
            <div style={{ width: 1, height: 36, background: `linear-gradient(to bottom, ${C}, transparent)`, animation: "scrollPulse 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ── STATS ── */}
      <section style={{ background: G, padding: "56px 0" }}>
        <div className="container" ref={statsR.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(120px, 1fr))", gap: 2 }}>
            {stats.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div key={i} style={{ textAlign: "center", padding: "28px 12px", borderRight: i < stats.length - 1 ? "1px solid rgba(241,231,220,0.10)" : "none", ...stg(i, statsR.visible) }}>
                  <Icon style={{ width: 22, height: 22, color: GOLD, margin: "0 auto 10px" }} />
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem, 3vw, 2.2rem)", color: C, lineHeight: 1 }}>
                    <AnimatedNumber target={stat.number} suffix={stat.suffix} />
                  </div>
                  <div style={{ color: "rgba(241,231,220,0.55)", fontSize: "0.72rem", fontFamily: "'Josefin Sans',sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", marginTop: 6 }}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── STORIES OF HOPE ── */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={storiesR.ref}>
          <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", marginBottom: 52, flexWrap: "wrap", gap: 12 }}>
            <div>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Real Lives. Real Change.</p>
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, margin: 0 }}>Stories of Hope</h2>
            </div>
            <Link href="/rescue-stories">
              <a style={{ display: "flex", alignItems: "center", gap: 6, color: G, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.82rem", textDecoration: "none", letterSpacing: "0.04em" }}>
                View all <ArrowRight size={14} />
              </a>
            </Link>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
            {stories.map((story, i) => (
              <Link key={i} href={`/rescue-stories/${story.slug}`}>
                <a style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: G, borderRadius: 16, overflow: "hidden", cursor: "pointer", boxShadow: "0 4px 20px rgba(1,56,53,0.10)", transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)", ...stg(i, storiesR.visible) }}
                    onMouseEnter={e => { const c = e.currentTarget as HTMLElement; c.style.transform = "translateY(-7px)"; c.style.boxShadow = "0 20px 48px rgba(1,56,53,0.22)"; const img = c.querySelector(".story-img") as HTMLElement; if (img) img.style.transform = "scale(1.07)"; }}
                    onMouseLeave={e => { const c = e.currentTarget as HTMLElement; c.style.transform = "translateY(0)"; c.style.boxShadow = "0 4px 20px rgba(1,56,53,0.10)"; const img = c.querySelector(".story-img") as HTMLElement; if (img) img.style.transform = "scale(1)"; }}>
                    <div style={{ height: 220, overflow: "hidden", position: "relative" }}>
                      <img src={story.image} alt={story.name} className="story-img" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)", display: "block" }} />
                      <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: 80, background: `linear-gradient(to top, ${G}, transparent)` }} />
                    </div>
                    <div style={{ padding: "20px 22px 26px" }}>
                      <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, marginBottom: 6, fontSize: "1.2rem", fontWeight: 700 }}>{story.name}</h3>
                      {/* BLACK text as requested */}
                      <p style={{ color: "#000", fontSize: "0.875rem", marginBottom: 14, lineHeight: 1.65, fontFamily: "'Quicksand',sans-serif" }}>{story.description}</p>
                      <span style={{ display: "inline-flex", alignItems: "center", gap: 5, color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.75rem", letterSpacing: "0.08em", textTransform: "uppercase" }}>
                        Read story <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── DONATION BANNER ── */}
      <section style={{ background: `linear-gradient(135deg, #012825 0%, ${G} 60%, #025950 100%)`, padding: "96px 0", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -80, top: -80, width: 360, height: 360, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.05)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -60, bottom: -60, width: 260, height: 260, borderRadius: "50%", border: `1px solid rgba(185,149,114,0.08)`, pointerEvents: "none" }} />
        <div className="container" style={{ textAlign: "center", position: "relative" }}>
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Make a Difference</p>
          <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", maxWidth: 580, margin: "0 auto 20px" }}>Give Them a Second Chance</h2>
          <p style={{ color: "rgba(241,231,220,0.72)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.8 }}>
            Every rescue deserves food, medical care, and a safe place to heal. Your donation helps us care for abandoned, injured, senior, and special-needs dogs.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            <Link href="/donate"><a style={redBtn} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}>💛 Donate Now</a></Link>
            <Link href="/adopt"><a style={{ ...outlineBtn, background: "transparent" }} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.10)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "transparent"; }}>🐾 Adopt a Dog</a></Link>
          </div>
        </div>
      </section>

      {/* ── FIVE PILLARS ── */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={pillarsR.ref}>
          <div style={{ textAlign: "center", marginBottom: 52 }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>How We Help</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G }}>Our Five Pillars</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 18 }}>
            {pillars.map((p, i) => (
              <div key={i} style={{ background: G, borderRadius: 14, padding: "28px 22px", border: "1px solid rgba(241,231,220,0.08)", transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)", ...stg(i, pillarsR.visible) }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(1,56,53,0.22)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                {/* emoji + title on same line */}
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 12, flexWrap: "nowrap" }}>
                  <span style={{ fontSize: "1.4rem", lineHeight: 1, flexShrink: 0 }}>{p.icon}</span>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, fontSize: "0.95rem", margin: 0, lineHeight: 1.25 }}>{p.title}</h3>
                </div>
                <p style={{ color: "rgba(241,231,220,0.65)", fontSize: "0.85rem", lineHeight: 1.7, margin: 0 }}>{p.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── MEET AASHIMA ── */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={founderR.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
            <div style={{ position: "relative", ...stg(0, founderR.visible) }}>
              <div style={{ position: "absolute", inset: -14, border: `2px solid ${GOLD}`, borderRadius: 20, opacity: 0.22 }} />
              <img src={founderImage} alt="Aashima Madan" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 16, display: "block", position: "relative", zIndex: 1 }} />
            </div>
            <div style={stg(1, founderR.visible)}>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>The Person Behind the Mission</p>
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, marginBottom: 24 }}>Meet Aashima Madan</h2>
              {[
                "What began with two community dogs in 2017 has grown into Aishi For Furries — a registered animal welfare organization dedicated to rescuing, rehabilitating, and caring for dogs in need.",
                "For Aashima, the mission has always been simple: every animal deserves kindness, medical care, safety, and the opportunity to live with dignity.",
                "Today, Aishi For Furries cares for over 100 community dogs, houses 45+ permanent residents, and continues to provide medical support, shelter, and rehabilitation to vulnerable animals across Gurgaon.",
              ].map((t, i) => <p key={i} style={{ color: "rgba(241,231,220,0.75)", marginBottom: 14, lineHeight: 1.85 }}>{t}</p>)}
              <Link href="/about">
                <a style={greenBtn} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                  Our Story <ArrowRight size={14} />
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={timelineR.ref}>
          <div style={{ textAlign: "center", marginBottom: 64 }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Since 2017</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G }}>Our Journey</h2>
          </div>
          {/* Desktop */}
          <div className="hidden md:block" style={{ position: "relative", overflowX: "auto" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: "50%", height: 2, background: `linear-gradient(to right, transparent, rgba(1,56,53,0.25), transparent)`, transform: "translateY(-50%)" }} />
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${journey.length}, 1fr)`, gap: 12, minWidth: 640 }}>
              {journey.map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", ...stg(i, timelineR.visible) }}>
                  <div style={{ height: 150, display: "flex", alignItems: "flex-end", paddingBottom: 16, width: "100%", justifyContent: "center" }}>
                    {item.up && (
                      <div style={{ background: G, border: "1px solid rgba(1,56,53,0.15)", borderRadius: 12, padding: "14px 12px", textAlign: "center", width: "100%" }}>
                        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: GOLD, fontSize: "1rem", marginBottom: 4 }}>{item.year}</div>
                        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, color: C, fontSize: "0.72rem", marginBottom: 5 }}>{item.title}</div>
                        <p style={{ color: "rgba(241,231,220,0.6)", fontSize: "0.68rem", lineHeight: 1.55, margin: 0 }}>{item.description}</p>
                      </div>
                    )}
                  </div>
                  <div style={{ width: 13, height: 13, borderRadius: "50%", background: GOLD, border: `3px solid ${C}`, flexShrink: 0, zIndex: 1, boxShadow: `0 0 10px rgba(185,149,114,0.4)` }} />
                  <div style={{ height: 150, display: "flex", alignItems: "flex-start", paddingTop: 16, width: "100%", justifyContent: "center" }}>
                    {!item.up && (
                      <div style={{ background: G, border: "1px solid rgba(1,56,53,0.15)", borderRadius: 12, padding: "14px 12px", textAlign: "center", width: "100%" }}>
                        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: GOLD, fontSize: "1rem", marginBottom: 4 }}>{item.year}</div>
                        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, color: C, fontSize: "0.72rem", marginBottom: 5 }}>{item.title}</div>
                        <p style={{ color: "rgba(241,231,220,0.6)", fontSize: "0.68rem", lineHeight: 1.55, margin: 0 }}>{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
          {/* Mobile */}
          <div className="md:hidden" style={{ position: "relative", paddingLeft: 26 }}>
            <div style={{ position: "absolute", left: 5, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, transparent, rgba(1,56,53,0.2), transparent)` }} />
            {journey.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 18, marginBottom: 20, ...stg(i, timelineR.visible) }}>
                <div style={{ width: 11, height: 11, borderRadius: "50%", background: GOLD, flexShrink: 0, marginTop: 6, position: "relative", left: -30, boxShadow: `0 0 8px rgba(185,149,114,0.4)` }} />
                <div style={{ background: G, border: "1px solid rgba(1,56,53,0.12)", borderRadius: 12, padding: "14px 16px", flex: 1, marginLeft: -12 }}>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: GOLD, marginBottom: 3, fontSize: "0.9rem" }}>{item.year} · {item.title}</div>
                  <p style={{ color: "rgba(241,231,220,0.62)", fontSize: "0.82rem", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ── */}
      <section style={{ background: G, padding: "100px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Every Life Matters</p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, maxWidth: 560, margin: "0 auto 24px" }}>Help Us Keep Showing Up</h2>
          <div style={{ fontFamily: "'Quicksand',sans-serif", fontSize: "1rem", lineHeight: 2.1, maxWidth: 400, margin: "0 auto 44px", color: "rgba(241,231,220,0.78)" }}>
            <p>For the dog recovering from surgery.</p>
            <p>For the senior who has nowhere else to go.</p>
            <p>For the puppy waiting for a family.</p>
            <p style={{ color: C, fontWeight: 700 }}>For every life that still needs a second chance.</p>
          </div>
          <Link href="/donate">
            <a style={redBtn} onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-3px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 14px 36px rgba(219,69,61,0.4)"; }} onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(219,69,61,0.3)"; }}>
              Donate Now <ArrowRight size={15} />
            </a>
          </Link>
        </div>
      </section>

      <style>{`@keyframes scrollPulse { 0%,100%{opacity:.35;transform:scaleY(.7)}50%{opacity:1;transform:scaleY(1)} }`}</style>
    </div>
  );
}
