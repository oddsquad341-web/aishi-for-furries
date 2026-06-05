import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import rescueImage from "@/assets/aishi/raw/18.jpg";
import medicalImage from "@/assets/aishi/raw/2.png";
import shelterImage from "@/assets/aishi/raw/3.jpg";
import vaccinationImage from "@/assets/aishi/raw/4.jpg";
import feedingImage from "@/assets/aishi/raw/5.jpg";
import adoptionImage from "@/assets/aishi/raw/12.png";

const G = "#013835"; const C = "#F1E7DC"; const RED = "#DB453D";

function useReveal(t = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [v, setV] = useState(false);
  useEffect(() => {
    const el = ref.current; if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setV(true); obs.disconnect(); } }, { threshold: t });
    obs.observe(el); return () => obs.disconnect();
  }, []);
  return { ref, visible: v };
}
const stg = (i: number, v: boolean) => ({ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.1}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.1}s` });

export default function OurWork() {
  const programs = [
    { title: "Feeding & Community Care", icon: "🍖", description: "Daily nutritious meals for community dogs across Gurgaon.", details: ["150+ dogs fed daily across multiple locations", "Nutritionally balanced meals", "Community engagement in feeding rounds", "Regular monitoring of community dog health"], image: feedingImage },
    { title: "Rescue & Emergency Response", icon: "🚑", description: "Emergency response and field pickups for animals in distress.", details: ["24/7 emergency rescue coordination", "Hit-and-run case response", "Field pickups across Gurgaon", "Safe transport to shelter and medical facilities"], image: rescueImage },
    { title: "Medical Care & Rehabilitation", icon: "⚕️", description: "Professional treatment and rehabilitation for injured and sick dogs.", details: ["Veterinary examination and diagnosis", "Surgical interventions when needed", "Long-term rehabilitation programmes", "Special care for trauma cases including wheelchair dogs"], image: medicalImage },
    { title: "Vaccination & Sterilisation", icon: "💉", description: "Public health initiatives preventing disease and overpopulation.", details: ["Ongoing sterilisation programme for community dogs", "Vaccination programmes for community dogs", "Disease prevention initiatives", "Population control to reduce street suffering"], image: vaccinationImage },
    { title: "Shelter & Long-Term Care", icon: "🏠", description: "Safe, comfortable, long-term care for special-needs and vulnerable dogs.", details: ["Secure shelter facilities for 45+ permanent residents", "Individual care plans for each animal", "Special attention for elderly and disabled dogs", "Socialisation and behavioural support"], image: shelterImage },
    { title: "Adoption & Fostering", icon: "❤️", description: "Helping rescued dogs find safety, love, and a place to belong.", details: ["40+ successful adoptions", "Temporary and long-term fostering opportunities", "Home assessments and adoption support", "Ongoing guidance for adopters and foster families"], image: adoptionImage },
  ];

  const r1 = useReveal(); const r2 = useReveal();

  return (
    <div style={{ backgroundColor: C }}>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, #012825 0%, ${G} 70%)`, padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.06)", pointerEvents: "none" }} />
        <div className="container" ref={r1.ref}>
          <div style={stg(0, r1.visible)}>
            <p style={{ color: C, opacity: 0.5, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>What We Do</p>
            <h1 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", maxWidth: 640, marginBottom: 20 }}>Our Work</h1>
            <p style={{ color: "rgba(241,231,220,0.75)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.8 }}>
              From the streets of Gurgaon to safe shelter and second chances, our work spans every stage of a dog's journey.
            </p>
          </div>
        </div>
      </section>

      {/* PROGRAMS */}
      <section style={{ background: C, padding: "80px 0" }}>
        <div className="container" ref={r2.ref}>
          <div style={{ display: "flex", flexDirection: "column", gap: 80 }}>
            {programs.map((program, idx) => (
              <div key={idx} style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 48, alignItems: "center", ...stg(idx, r2.visible) }}>
                {/* Text side */}
                <div style={{ order: idx % 2 === 1 ? 2 : 1 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                    <span style={{ fontSize: "2rem", lineHeight: 1 }}>{program.icon}</span>
                    <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)", margin: 0 }}>{program.title}</h2>
                  </div>
                  <p style={{ color: "#3d2e20", fontFamily: "'Quicksand',sans-serif", fontSize: "1rem", lineHeight: 1.8, marginBottom: 20 }}>{program.description}</p>
                  <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                    {program.details.map((detail, di) => (
                      <li key={di} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#3d2e20", fontFamily: "'Quicksand',sans-serif", fontSize: "0.95rem" }}>
                        <span style={{ width: 7, height: 7, borderRadius: "50%", background: G, flexShrink: 0, marginTop: 7 }} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
                {/* Image side */}
                <div style={{ order: idx % 2 === 1 ? 1 : 2, position: "relative", borderRadius: 16, overflow: "hidden", aspectRatio: "4/3" }}
                  onMouseEnter={e => { const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLElement; if (img) img.style.transform = "scale(1.06)"; }}
                  onMouseLeave={e => { const img = (e.currentTarget as HTMLElement).querySelector("img") as HTMLElement; if (img) img.style.transform = "scale(1)"; }}>
                  <img src={program.image} alt={program.title} style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)", boxShadow: "0 8px 32px rgba(1,56,53,0.12)" }} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL BANNER */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" style={{ textAlign: "center" }}>
          <p style={{ color: "rgba(241,231,220,0.5)", fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Be Part of It</p>
          <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", maxWidth: 540, margin: "0 auto 20px" }}>Every Rescue Story Starts Somewhere</h2>
          {/* BLACK text as requested */}
          <p style={{ color: "#000", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 520, margin: "0 auto 36px", lineHeight: 1.8 }}>
            Whether it's a meal, a vaccination, a surgery, or a forever home, every step of our work is made possible through the support of our community.
          </p>
          <Link href="/donate">
            <a style={{ display: "inline-flex", alignItems: "center", gap: 8, background: RED, color: "#fff", padding: "14px 36px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(219,69,61,0.3)" }}
              onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"; }}
              onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; }}>
              Donate Now <ArrowRight size={15} />
            </a>
          </Link>
        </div>
      </section>
    </div>
  );
}
