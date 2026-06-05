import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import volunteerHero from "@/assets/aishi/raw/15.png";

const G = "#013835"; const C = "#F1E7DC"; const GOLD = "#F1E7DC";

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
const s = (i: number, v: boolean) => ({ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(30px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.09}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.09}s` });
const btn = (outline = false) => ({ display:"inline-flex" as const, alignItems:"center" as const, gap:8, background: outline ? "transparent" : C, color: outline ? C : G, border: outline ? `1.5px solid rgba(241,231,220,0.4)` : "none", padding:"14px 30px", borderRadius:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, fontSize:"0.9rem", letterSpacing:"0.05em", textDecoration:"none", transition:"all 0.2s", boxShadow: outline ? "none" : "0 4px 16px rgba(241,231,220,0.35)" });

export default function Volunteer() {
  const areas = [
    { n: "01", title: "CSR Sponsorships", items: ["Medical treatments", "Rescue operations", "Shelter development", "Daily feeding programmes", "Vaccination drives", "Sterilisation initiatives"] },
    { n: "02", title: "Infrastructure Support", items: ["Kennels", "Medical rooms", "Rehabilitation areas", "Shelter expansion", "Equipment and supplies"] },
    { n: "03", title: "Employee Engagement", items: ["Shelter visits", "Volunteering days", "Donation drives", "Awareness sessions"] },
    { n: "04", title: "School & Community", items: ["Awareness workshops", "Fundraising drives", "Student engagement programmes", "Community welfare initiatives"] },
    { n: "05", title: "In-Kind Contributions", items: ["Dog food", "Medicines", "Medical equipment", "Bedding", "Cleaning supplies", "Transport support"] },
  ];
  const process = ["Initial conversation", "Identify areas of support", "Define scope and timelines", "Execute and report impact", "Share updates and outcomes"];

  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  const r4 = useReveal(); const r5 = useReveal(); const r6 = useReveal();

  return (
    <div style={{ backgroundColor: C }}>

      {/* HERO */}
      <section style={{ position: "relative", height: "80svh", minHeight: 480, maxHeight: 680, overflow: "hidden" }}>
        <img src={volunteerHero} alt="Partner with us" style={{ position: "absolute", inset: 0, width: "100%", height: "115%", objectFit: "cover" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,56,53,0.88) 0%, rgba(0,0,0,0.3) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />
        <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 72 }}>
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Collaborate With Us</p>
          <h1 style={{ color: "#fff", fontFamily: "'Josefin Sans',sans-serif", maxWidth: 600, marginBottom: 24 }}>Partner With Us</h1>
          <p style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 500, lineHeight: 1.8, marginBottom: 36 }}>
            Create meaningful impact for animals in need. Whether you're a company, school, or community group — your support can change lives.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="mailto:aishiforfurries@gmail.com" style={btn()}>✉ Get in Touch <ArrowRight size={14} /></a>
            <a href="#areas" style={btn(true)}>Explore Areas</a>
          </div>
        </div>
      </section>

      {/* WHY PARTNER */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={r1.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 56, alignItems: "center" }}>
            <div style={s(0, r1.visible)}>
              <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 20 }} />
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Why Partner</p>
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 24 }}>Grassroots Impact.<br />Tangible Results.</h2>
              <p style={{ color: "#5a3e2b", lineHeight: 1.85 }}>What began with two community dogs has grown into a registered animal welfare organisation caring for over 150 community dogs and 45+ permanent residents. Our work focuses on direct, measurable impact — from emergency medical treatment and feeding programs to sterilisation, rehabilitation, and lifelong care.</p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, ...s(1, r1.visible) }}>
              {[{ n: "150+", l: "Community Dogs" }, { n: "45+", l: "Permanent Residents" }, { n: "500+", l: "Medical Cases" }].map((stat, i) => (
                <div key={i} style={{ background: G, borderRadius: 14, padding: "28px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "1.8rem", color: GOLD, marginBottom: 6 }}>{stat.n}</div>
                  <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.75rem", color: "rgba(241,231,220,0.65)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{stat.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AREAS */}
      <section id="areas" style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={r2.ref}>
          <div style={{ textAlign: "center", marginBottom: 56, ...s(0, r2.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>How You Can Help</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif" }}>Areas of Partnership</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {areas.map((a, i) => (
              <div key={i} style={{ background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.10)", borderRadius: 14, padding: "28px 22px", transition: "all 0.28s", ...s(i+1, r2.visible) }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.11)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "1.6rem", color: GOLD, opacity: 0.6, marginBottom: 12 }}>{a.n}</div>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, fontSize: "1rem", marginBottom: 14 }}>{a.title}</h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                  {a.items.map((item, j) => (
                    <li key={j} style={{ display: "flex", alignItems: "center", gap: 8, color: "rgba(241,231,220,0.65)", fontSize: "0.825rem" }}>
                      <span style={{ width: 5, height: 5, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />{item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT NEEDS */}
      <section style={{ background: C, padding: "80px 0" }}>
        <div className="container" ref={r3.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48, alignItems: "center" }}>
            <div style={s(0, r3.visible)}>
              <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 24 }}>Currently Seeking Support</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                {["Shelter infrastructure", "Medical funds", "Sterilisation drives", "Monthly feeding programme", "Rehabilitation support"].map((n, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 14, padding: "14px 18px", background: G, borderRadius: 10, color: C, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, fontSize: "0.9rem" }}>
                    <span style={{ width: 8, height: 8, borderRadius: "50%", background: GOLD, flexShrink: 0 }} />{n}
                  </div>
                ))}
              </div>
            </div>
            <div style={s(1, r3.visible)}>
              <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 20 }}>Why Animal Welfare Matters</h2>
              <p style={{ color: "#5a3e2b", lineHeight: 1.85 }}>Animal welfare plays an important role in creating healthier and more compassionate communities. Through vaccination, sterilisation, rescue, and rehabilitation, organisations can contribute meaningfully towards public health, sustainability, and community wellbeing.</p>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={r4.ref}>
          <div style={{ textAlign: "center", marginBottom: 56, ...s(0, r4.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Simple Process</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif" }}>How We Work Together</h2>
          </div>
          <div style={{ maxWidth: 640, margin: "0 auto", display: "flex", flexDirection: "column", gap: 4 }}>
            {process.map((step, i) => (
              <div key={i} style={{ display: "flex", alignItems: "center", gap: 20, padding: "20px 24px", background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.10)", borderRadius: 12, ...s(i+1, r4.visible), transition: `all 0.28s, opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${(i+1)*0.09}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(i+1)*0.09}s` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.11)"; (e.currentTarget as HTMLElement).style.transform = "translateX(6px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; }}>
                <div style={{ width: 36, height: 36, borderRadius: "50%", background: GOLD, color: G, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.875rem", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>{i+1}</div>
                <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, color: C, fontSize: "0.95rem" }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: C, padding: "100px 0", textAlign: "center" }}>
        <div className="container" ref={r6.ref}>
          <div style={s(0, r6.visible)}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Get In Touch</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, maxWidth: 540, margin: "0 auto 20px" }}>Let's Create Impact Together</h2>
            <p style={{ color: "#5a3e2b", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 480, margin: "0 auto 44px", lineHeight: 1.8 }}>
              We're always looking to collaborate with organisations that share our commitment to compassion and community welfare.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="mailto:aishiforfurries@gmail.com" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#DB453D", color:"#fff", padding:"14px 32px", borderRadius:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, fontSize:"0.9rem", letterSpacing:"0.05em", textDecoration:"none", transition:"all 0.2s", boxShadow:"0 4px 16px rgba(219,69,61,0.28)" }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform="none"; }}>
                ✉ Email Us <ArrowRight size={14} />
              </a>
              <a href="tel:+919873218040" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#DB453D", color:"#fff", padding:"14px 32px", borderRadius:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, fontSize:"0.9rem", letterSpacing:"0.05em", textDecoration:"none", transition:"all 0.2s", boxShadow:"0 4px 16px rgba(219,69,61,0.28)" }}>
                📞 Call Us
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
