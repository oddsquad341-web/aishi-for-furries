import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, CheckCircle } from "lucide-react";
import adoptionHero from "@/assets/aishi/raw/13.png";
import fosterHero from "@/assets/aishi/raw/14.png";
import fosterLifeImage from "@/assets/aishi/raw/17.png";

const G = "#013835"; const C = "#F1E7DC"; const GOLD = "#B99572";

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

const btn = (gold = false) => ({ display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: gold ? GOLD : G, color: gold ? G : C, padding: "14px 30px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.9rem", letterSpacing: "0.05em", textDecoration: "none", transition: "all 0.2s", boxShadow: gold ? "0 4px 16px rgba(185,149,114,0.3)" : "0 4px 16px rgba(1,56,53,0.15)" });

export default function Adopt() {
  const steps = [
    { n: "01", title: "Find Your Match", desc: "Browse our available dogs and connect with our team." },
    { n: "02", title: "Tell Us About Yourself", desc: "Complete a short application so we can understand your lifestyle." },
    { n: "03", title: "Meet & Greet", desc: "Spend time together and get to know each other." },
    { n: "04", title: "Home Visit", desc: "A friendly check-in to ensure a safe and comfortable environment." },
    { n: "05", title: "Welcome Home", desc: "Complete the adoption process and begin your journey together." },
  ];
  const requirements = [
    { icon: "🏡", title: "Home Environment", desc: "A safe, secure space where the dog can thrive." },
    { icon: "💚", title: "Commitment", desc: "Lifelong care including medical attention, nutrition, and love." },
    { icon: "⏰", title: "Time & Attention", desc: "Daily interaction to help the dog adjust and bond." },
    { icon: "🏥", title: "Veterinary Care", desc: "Willingness to provide ongoing medical care as needed." },
  ];

  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  const r4 = useReveal(); const r5 = useReveal(); const r6 = useReveal(); const r7 = useReveal();

  const hoverLift = { onMouseEnter: (e: any) => { e.currentTarget.style.transform="translateY(-2px)"; e.currentTarget.style.boxShadow="0 10px 28px rgba(1,56,53,0.22)"; }, onMouseLeave: (e: any) => { e.currentTarget.style.transform="none"; e.currentTarget.style.boxShadow="0 4px 16px rgba(1,56,53,0.15)"; } };

  return (
    <div style={{ backgroundColor: C }}>

      {/* HERO */}
      <section style={{ position: "relative", height: "100svh", minHeight: 500, maxHeight: 740, overflow: "hidden" }}>
        <img src={adoptionHero} alt="Dog adoption" style={{ position: "absolute", inset: 0, width: "100%", height: "115%", objectFit: "cover", objectPosition: "center" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(1,56,53,0.82) 0%, rgba(0,0,0,0.35) 100%)" }} />
        <div style={{ position: "absolute", left: 0, top: 0, bottom: 0, width: 4, background: `linear-gradient(to bottom, transparent, ${GOLD}, transparent)` }} />
        <div className="container" style={{ position: "relative", height: "100%", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: 72 }}>
          <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Open Your Heart</p>
          <h1 style={{ color: "#fff", fontFamily: "'Josefin Sans',sans-serif", maxWidth: 640, marginBottom: 24 }}>Give a Dog a Forever Home</h1>
          <p style={{ color: "rgba(255,255,255,0.82)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 500, lineHeight: 1.8, marginBottom: 36 }}>
            Every dog deserves more than survival — they deserve love, comfort, and a family to call their own.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer" style={btn(true)} {...hoverLift}>🐾 Meet Our Dogs</a>
            <a href="#foster" style={{ ...btn(), background: "rgba(255,255,255,0.12)", border: "1.5px solid rgba(255,255,255,0.35)" }}>🏡 Foster a Dog</a>
            <Link href="/donate"><a style={{ ...btn(), background: "transparent", border: "1.5px solid rgba(255,255,255,0.35)", color: "#fff" }}>💛 Virtually Adopt</a></Link>
          </div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={r1.ref}>
          <div style={{ textAlign: "center", marginBottom: 56, ...s(0, r1.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Choose Your Path</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G }}>There's More Than One Way to Help</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {[{ icon: "🏡", t: "Adopt", d: "Open your heart and home to a rescued dog looking for a family of their own." }, { icon: "🐾", t: "Foster", d: "Provide a temporary home while a dog heals, gains confidence, or waits for their forever family." }, { icon: "💛", t: "Virtual Adoption", d: "Support a dog's food, shelter, and medical care, even if you're unable to bring them home." }].map((w, i) => (
              <div key={i} style={{ background: G, borderRadius: 16, padding: "40px 28px", textAlign: "center", border: "1px solid rgba(241,231,220,0.10)", transition: "all 0.28s", ...s(i+1, r1.visible) }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-6px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 20px 48px rgba(1,56,53,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ fontSize: "2.5rem", marginBottom: 20 }}>{w.icon}</div>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, marginBottom: 12 }}>{w.t}</h3>
                <p style={{ color: "rgba(241,231,220,0.7)", fontSize: "0.9rem", lineHeight: 1.75, margin: 0 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR DOGS */}
      <section style={{ background: G, padding: "80px 0" }}>
        <div className="container" style={{ textAlign: "center" }} ref={r2.ref}>
          <div style={s(0, r2.visible)}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>Find Your Match</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", maxWidth: 580, margin: "0 auto 20px" }}>Looking for Your New Best Friend?</h2>
            <p style={{ color: "rgba(241,231,220,0.72)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 500, margin: "0 auto 36px", lineHeight: 1.8 }}>
              Every dog in our care has a story. Some are playful, some are shy, some are seniors — but all of them are waiting for someone to love.
            </p>
            <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer" style={btn(true)}>🐾 Meet Our Dogs <ArrowRight size={15} /></a>
          </div>
        </div>
      </section>

      {/* ADOPTION PROCESS */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={r3.ref}>
          <div style={{ textAlign: "center", marginBottom: 56, ...s(0, r3.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Simple Steps</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G }}>How Adoption Works</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 20 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background: G, borderRadius: 14, padding: "28px 22px", ...s(i+1, r3.visible), transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${(i+1)*0.09}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(i+1)*0.09}s, box-shadow 0.28s` }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(1,56,53,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "2rem", color: GOLD, marginBottom: 12, opacity: 0.7 }}>{step.n}</div>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{step.title}</h3>
                <p style={{ color: "rgba(241,231,220,0.68)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOSTER */}
      <section id="foster" style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={r4.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
            <div style={{ position: "relative", ...s(0, r4.visible) }}>
              <div style={{ position: "absolute", inset: -12, border: `2px solid ${GOLD}`, borderRadius: 20, opacity: 0.2 }} />
              <img src={fosterHero} alt="Foster a dog" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 16, display: "block", position: "relative", zIndex: 1 }} />
            </div>
            <div style={s(1, r4.visible)}>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Make a Difference</p>
              <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", marginBottom: 20 }}>A Temporary Home.<br />A Lifelong Impact.</h2>
              <p style={{ color: "rgba(241,231,220,0.78)", lineHeight: 1.85, marginBottom: 16 }}>Not every rescue is ready for adoption right away. By fostering, you become a crucial part of their journey.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Give a dog a safe and loving place to stay", "Help them build confidence and trust", "Support their recovery and rehabilitation", "Food and medical care provided by Aishiforfurries", "Ongoing support from our team"].map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "rgba(241,231,220,0.78)", fontSize: "0.9rem" }}>
                    <span style={{ color: GOLD, fontWeight: 700, marginTop: 1 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact"><a style={btn(true)} {...hoverLift}>🏡 Apply to Foster <ArrowRight size={14} /></a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIRTUAL ADOPTION */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={r5.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 60, alignItems: "center" }}>
            <div style={s(0, r5.visible)}>
              <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Support From Afar</p>
              <h2 style={{ color: G, fontFamily: "'Josefin Sans',sans-serif", marginBottom: 20 }}>Love Knows No Distance</h2>
              <p style={{ color: "#5a3e2b", lineHeight: 1.85, marginBottom: 16 }}>Not everyone can bring a dog home — and that's okay. Through virtual adoption, you can sponsor a rescue dog's daily care while they stay safely with us.</p>
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px", display: "flex", flexDirection: "column", gap: 10 }}>
                {["Monthly or one-time sponsorship options", "Regular updates about your sponsored dog", "Direct contribution towards their care", "A meaningful way to help, wherever you are"].map((b, i) => (
                  <li key={i} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "#5a3e2b", fontSize: "0.9rem" }}>
                    <span style={{ color: G, fontWeight: 700, marginTop: 1 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <Link href="/donate"><a style={btn()} {...hoverLift}>💛 Virtually Adopt <ArrowRight size={14} /></a></Link>
            </div>
            <div style={{ position: "relative", ...s(1, r5.visible) }}>
              <div style={{ position: "absolute", bottom: -12, right: -12, width: 80, height: 80, background: GOLD, borderRadius: "50% 0 50% 0", opacity: 0.15 }} />
              <img src={fosterLifeImage} alt="Virtual adoption" style={{ width: "100%", aspectRatio: "4/3", objectFit: "cover", borderRadius: 16, display: "block", position: "relative", zIndex: 1 }} />
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ background: G, padding: "80px 0" }}>
        <div className="container" ref={r6.ref}>
          <div style={{ textAlign: "center", marginBottom: 48, ...s(0, r6.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 12 }}>Before You Apply</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif" }}>Adoption Requirements</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {requirements.map((r, i) => (
              <div key={i} style={{ background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.10)", borderRadius: 14, padding: "28px 22px", ...s(i+1, r6.visible) }}>
                <div style={{ fontSize: "2rem", marginBottom: 14 }}>{r.icon}</div>
                <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, fontSize: "1rem", marginBottom: 8 }}>{r.title}</h3>
                <p style={{ color: "rgba(241,231,220,0.65)", fontSize: "0.875rem", lineHeight: 1.7, margin: 0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background: C, padding: "100px 0", textAlign: "center" }}>
        <div className="container" ref={r7.ref}>
          <div style={s(0, r7.visible)}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 16 }}>One Decision</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, maxWidth: 540, margin: "0 auto 20px" }}>One Decision Can Change a Life</h2>
            <div style={{ color: "#5a3e2b", fontFamily: "'Quicksand',sans-serif", fontSize: "1rem", lineHeight: 2.2, maxWidth: 400, margin: "0 auto 44px" }}>
              <p>Every adoption creates room for another rescue.</p>
              <p>Every foster home helps a dog heal.</p>
              <p>Every virtual adoption keeps a bowl full and a tail wagging.</p>
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center" }}>
              <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer" style={btn()} {...hoverLift}>🐾 Meet Our Dogs</a>
              <Link href="/contact"><a style={btn(true)} {...hoverLift}>🏡 Apply to Foster</a></Link>
              <Link href="/donate"><a style={{ ...btn(), background: "transparent", border: `2px solid ${G}`, color: G }}>💛 Virtually Adopt</a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
