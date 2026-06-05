import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import founderImage from "@/assets/aishi/raw/0.png";
import { ArrowRight } from "lucide-react";

const G = "#013835";
const C = "#F1E7DC";
const GOLD = "#DB453D";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el); return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const stagger = (i: number, visible: boolean) => ({
  opacity: visible ? 1 : 0,
  transform: visible ? "translateY(0)" : "translateY(32px)",
  transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i * 0.08}s`,
});

export default function About() {
  const values = [
    { title: "Compassion", description: "We believe every animal deserves kindness, care, and the chance to live with dignity." },
    { title: "Responsibility", description: "We are committed to the long-term wellbeing of every animal that comes under our care." },
    { title: "Community", description: "Lasting change is only possible through collective action. We work alongside volunteers, adopters, donors, and supporters to create greater impact." },
    { title: "Dignity", description: "Every life matters. We strive to provide safety, comfort, medical care, and respect to animals at every stage of their journey." },
    { title: "Commitment", description: "We show up every day with consistency, patience, and dedication — to improve the lives of animals in need." },
  ];

  const journey = [
    { year: "2017", title: "It Begins", up: true, description: "Two community dogs in Gurgaon spark a lifelong mission. Feeding, vaccination and neutering lead to deeper involvement." },
    { year: "2018", title: "Expanding Reach", up: false, description: "Feeding extended to 40+ dogs. A structured approach to vaccination and sterilisation introduced." },
    { year: "2019", title: "Community Awareness", up: true, description: "AishiForFurries becomes a trusted neighbourhood welfare initiative bridging feeders, residents, and vets." },
    { year: "2020", title: "COVID Response", up: false, description: "Groundwork intensified during the pandemic. The first Milaap crowdfunding campaign saved a critical hit-and-run case." },
    { year: "2021", title: "System Exposure", up: true, description: "Experience with a local NGO offered system exposure, but independent operations resumed to retain agility and ethics." },
    { year: "2022", title: "Rapid Growth", up: false, description: "Daily feeding reached 100+ dogs. A private rescue boarding facility established for paralysed, senior, and trauma dogs." },
    { year: "2023", title: "Permanent Rescues", up: true, description: "Rising permanent rescues increased operational costs; donations from friends and family were barely enough to get by." },
    { year: "2024", title: "NGO Registration", up: false, description: "Formal NGO registration initiated; groundwork began for a dedicated shelter for rescue, rehabilitation, and sterilisation." },
    { year: "2025", title: "Registered NGO", up: true, description: "Now a registered NGO with 45+ permanent residents. Neutered 90+ dogs, vaccinated 80+ dogs, conducted numerous surgeries." },
  ];

  const heroReveal = useReveal(0.1);
  const founderReveal = useReveal(0.1);
  const timelineReveal = useReveal(0.05);
  const visionReveal = useReveal(0.1);
  const valuesReveal = useReveal(0.1);

  return (
    <div style={{ backgroundColor: C }}>

      {/* ── HERO ── */}
      <section style={{ background: `linear-gradient(135deg, #012825 0%, ${G} 70%)`, padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 320, height: 320, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.06)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", left: -40, bottom: -40, width: 200, height: 200, borderRadius: "50%", border: `1px solid rgba(185,149,114,0.1)`, pointerEvents: "none" }} />
        <div className="container" ref={heroReveal.ref}>
          <div style={stagger(0, heroReveal.visible)}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Our Story</p>
            <h1 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", maxWidth: 700, marginBottom: 24 }}>
              Built on compassion.<br />Sustained by commitment.
            </h1>
            <p style={{ color: "rgba(241,231,220,0.75)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.1rem", maxWidth: 540, lineHeight: 1.8 }}>
              What began with two community dogs in 2017 has grown into a dedicated animal welfare organization caring for vulnerable dogs across Gurgaon.
            </p>
          </div>
        </div>
      </section>

      {/* ── FOUNDER ── */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={founderReveal.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 64, alignItems: "center" }}>
            <div style={{ position: "relative", ...stagger(0, founderReveal.visible) }}>
              <div style={{ position: "absolute", inset: -14, border: `2px solid ${GOLD}`, borderRadius: 20, opacity: 0.2 }} />
              <div style={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, background: GOLD, borderRadius: "50% 0 50% 0", opacity: 0.12 }} />
              <img src={founderImage} alt="Aashima Madan" style={{ width: "100%", aspectRatio: "4/5", objectFit: "cover", borderRadius: 16, display: "block", position: "relative", zIndex: 1 }} />
            </div>
            <div style={stagger(1, founderReveal.visible)}>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>The Person Behind the Mission</p>
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 28 }}>Aashima's Journey</h2>
              {[
                "What began with two community dogs in 2017 has grown into Aishi For Furries — a registered animal welfare organization dedicated to rescuing, rehabilitating, and caring for dogs in need.",
                "For Aashima, the mission has always been simple: every animal deserves kindness, medical care, safety, and the opportunity to live with dignity. What started as a personal commitment soon became a lifelong purpose, driven by countless rescues, recoveries, and second chances.",
                "Today, Aishi For Furries cares for over 100 community dogs, houses 45+ permanent residents, and continues to provide medical support, shelter, and rehabilitation to vulnerable animals across Gurgaon.",
                "At its heart, the organization remains rooted in the same belief it began with — that every life matters, and every dog deserves a place where they can heal, belong, and be loved.",
              ].map((t, i) => <p key={i} style={{ color: "#3d2e20", marginBottom: 16, lineHeight: 1.85 }}>{t}</p>)}
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={timelineReveal.ref}>
          <div style={{ textAlign: "center", marginBottom: 72 }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Since 2017</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif" }}>Our Journey</h2>
          </div>

          {/* DESKTOP — fixed heights, year pill guaranteed on line, no scroll */}
          <div className="hidden md:block" style={{ position: "relative" }}>
            <div style={{ position: "absolute", left: 0, right: 0, top: 160, height: 2, background: `linear-gradient(to right, transparent, rgba(185,149,114,0.45), transparent)`, zIndex: 0 }} />
            <div style={{ display: "grid", gridTemplateColumns: `repeat(${journey.length}, 1fr)`, gap: 8, position: "relative" }}>
              {journey.map((item, i) => (
                <div key={i} style={{ display: "flex", flexDirection: "column", alignItems: "center", ...stagger(i, timelineReveal.visible) }}>
                  {/* TOP — 150px, card if up:true */}
                  <div style={{ height: 150, width: "100%", display: "flex", alignItems: "flex-end", paddingBottom: 9 }}>
                    {item.up && (
                      <div style={{ background: "rgba(241,231,220,0.07)", border: "1px solid rgba(241,231,220,0.09)", borderRadius: 10, padding: "10px 8px", textAlign: "center", width: "100%" }}>
                        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: C, fontSize: "0.78rem", marginBottom: 4, lineHeight: 1.2 }}>{item.title}</div>
                        <p style={{ color: "rgba(241,231,220,0.55)", fontSize: "0.7rem", lineHeight: 1.45, margin: 0 }}>{item.description}</p>
                      </div>
                    )}
                  </div>

                  {/* YEAR pill ON the line */}
                  <div style={{ position: "relative", zIndex: 2, background: GOLD, color: G, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.75rem", padding: "5px 9px", borderRadius: 999, whiteSpace: "nowrap", boxShadow: "0 0 12px rgba(185,149,114,0.5)", flexShrink: 0 }}>
                    {item.year}
                  </div>

                  {/* BOTTOM — 150px, card if up:false */}
                  <div style={{ height: 150, width: "100%", display: "flex", alignItems: "flex-start", paddingTop: 9 }}>
                    {!item.up && (
                      <div style={{ background: "rgba(241,231,220,0.07)", border: "1px solid rgba(241,231,220,0.09)", borderRadius: 10, padding: "10px 8px", textAlign: "center", width: "100%" }}>
                        <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: C, fontSize: "0.78rem", marginBottom: 4, lineHeight: 1.2 }}>{item.title}</div>
                        <p style={{ color: "rgba(241,231,220,0.55)", fontSize: "0.7rem", lineHeight: 1.45, margin: 0 }}>{item.description}</p>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* MOBILE — vertical timeline */}
          <div className="md:hidden" style={{ position: "relative", paddingLeft: 28 }}>
            <div style={{ position: "absolute", left: 5, top: 0, bottom: 0, width: 2, background: `linear-gradient(to bottom, transparent, rgba(185,149,114,0.4), transparent)` }} />
            {journey.map((item, i) => (
              <div key={i} style={{ display: "flex", gap: 20, marginBottom: 24, ...stagger(i, timelineReveal.visible) }}>
                <div style={{ width: 12, height: 12, borderRadius: "50%", background: GOLD, flexShrink: 0, marginTop: 5, position: "relative", left: -34, boxShadow: `0 0 8px rgba(185,149,114,0.5)` }} />
                <div style={{ background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.12)", borderRadius: 12, padding: "16px", flex: 1, marginLeft: -14 }}>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: GOLD, marginBottom: 4, fontSize: "1rem" }}>{item.year} · {item.title}</div>
                  <p style={{ color: "rgba(241,231,220,0.65)", fontSize: "0.85rem", lineHeight: 1.6, margin: 0 }}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VISION + MISSION ── */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={visionReveal.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
            {[
              { label: "Our Vision", text: ["A future where every animal is treated with compassion, protected from suffering, and given the opportunity to live with dignity.", "We envision a Gurgaon where animal welfare is a shared responsibility, and every dog has access to safety, care, and a second chance."] },
              { label: "Our Mission", text: ["To rescue, rehabilitate, and care for vulnerable animals through medical support, shelter, feeding, sterilisation, and adoption initiatives.", "Through compassionate action and community involvement, we work to improve the lives of animals in need every day."] },
            ].map((item, i) => (
              <div key={i} style={{ ...stagger(i, visionReveal.visible) }}>
                <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 20 }} />
                <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 20 }}>{item.label}</h2>
                {item.text.map((t, j) => <p key={j} style={{ color: "#3d2e20", marginBottom: 14, lineHeight: 1.85 }}>{t}</p>)}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={valuesReveal.ref}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>What Drives Us</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif" }}>Core Values</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {values.map((v, i) => (
              <div key={i} style={{
                background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.10)",
                borderRadius: 14, padding: "32px 24px",
                transition: "all 0.28s cubic-bezier(0.22,1,0.36,1)",
                ...stagger(i, valuesReveal.visible),
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.11)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.06)"; (e.currentTarget as HTMLElement).style.transform = "translateY(0)"; }}
              >
                <div style={{ width: 32, height: 2, background: GOLD, borderRadius: 2, marginBottom: 16 }} />
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, marginBottom: 12, fontSize: "1.1rem" }}>{v.title}</h3>
                <p style={{ color: "rgba(241,231,220,0.68)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CLOSING BANNER ── */}
      <section style={{ background: C, padding: "100px 0", textAlign: "center" }}>
        <div className="container">
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Take Action</p>
          <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, maxWidth: 560, margin: "0 auto 24px" }}>Join Us In Building A Kinder Future</h2>
          <p style={{ color: "#5a3e2b", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.8 }}>
            Whether through a donation, adoption, fostering, or volunteering, every act of kindness helps us reach another animal in need.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
            {[{ label: "Donate", href: "/donate" }, { label: "Volunteer", href: "/volunteer" }, { label: "Adopt", href: "/adopt" }].map((btn, i) => (
              <Link key={i} href={btn.href}>
                <a style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DB453D", color: "#fff", padding: "14px 32px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(219,69,61,0.3)" }}
                  onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 10px 28px rgba(219,69,61,0.4)"; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(219,69,61,0.3)"; }}
                >
                  {btn.label} <ArrowRight size={14} />
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
