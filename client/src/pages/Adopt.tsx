import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";
import adoptionHero from "@/assets/aishi/raw/13.png";
import fosterHero from "@/assets/aishi/raw/17.png";

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
const stg = (i: number, v: boolean) => ({ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.09}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.09}s` });
const rb = (extra: any = {}) => ({ display:"inline-flex" as const, alignItems:"center" as const, gap:8, background:RED, color:"#fff", padding:"14px 28px", borderRadius:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:700 as const, fontSize:"0.9rem", letterSpacing:"0.05em", textDecoration:"none", transition:"all 0.2s", boxShadow:"0 4px 16px rgba(219,69,61,0.28)", ...extra });
const ob = (extra: any = {}) => ({ display:"inline-flex" as const, alignItems:"center" as const, gap:8, background:"transparent", color:"#fff", border:"1.5px solid rgba(255,255,255,0.4)", padding:"14px 28px", borderRadius:10, fontFamily:"'Josefin Sans',sans-serif", fontWeight:600 as const, fontSize:"0.9rem", letterSpacing:"0.05em", textDecoration:"none", transition:"all 0.2s", backdropFilter:"blur(6px)", ...extra });
const lift = { onMouseEnter:(e:any)=>{e.currentTarget.style.transform="translateY(-2px)";}, onMouseLeave:(e:any)=>{e.currentTarget.style.transform="none";} };

export default function Adopt() {
  const steps = [
    { n:"01", title:"Find Your Match", desc:"Browse our available dogs and connect with our team." },
    { n:"02", title:"Tell Us About Yourself", desc:"Complete a short application so we can understand your lifestyle." },
    { n:"03", title:"Meet & Greet", desc:"Spend time together and get to know each other." },
    { n:"04", title:"Home Visit", desc:"A friendly check-in to ensure a safe and comfortable environment." },
    { n:"05", title:"Welcome Home", desc:"Complete the adoption process and begin your journey together." },
  ];
  const requirements = [
    { icon:"🏡", title:"Home Environment", desc:"A safe, secure space where the dog can thrive." },
    { icon:"💚", title:"Commitment", desc:"Lifelong care including medical attention, nutrition, and love." },
    { icon:"⏰", title:"Time & Attention", desc:"Daily interaction to help the dog adjust and bond." },
    { icon:"🏥", title:"Veterinary Care", desc:"Willingness to provide ongoing medical care as needed." },
  ];

  const r1=useReveal(); const r2=useReveal(); const r3=useReveal();
  const r4=useReveal(); const r5=useReveal(); const r6=useReveal(); const r7=useReveal();

  return (
    <div style={{ backgroundColor: C }}>

      {/* HERO */}
      <section style={{ position:"relative", height:"100svh", minHeight:500, maxHeight:740, overflow:"hidden" }}>
        <img src={adoptionHero} alt="Dog adoption" style={{ position:"absolute", inset:0, width:"100%", height:"115%", objectFit:"cover" }} />
        <div style={{ position:"absolute", inset:0, background:"linear-gradient(135deg, rgba(1,56,53,0.85) 0%, rgba(0,0,0,0.3) 100%)" }} />
        <div style={{ position:"absolute", left:0, top:0, bottom:0, width:4, background:`linear-gradient(to bottom, transparent, ${C}, transparent)`, opacity:0.3 }} />
        <div className="container" style={{ position:"relative", height:"100%", display:"flex", flexDirection:"column", justifyContent:"center", paddingTop:72 }}>
          <p style={{ color:"rgba(241,231,220,0.6)", fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:16 }}>Open Your Heart</p>
          <h1 style={{ color:"#fff", fontFamily:"'Josefin Sans',sans-serif", maxWidth:620, marginBottom:22 }}>Give a Dog a Forever Home</h1>
          <p style={{ color:"rgba(255,255,255,0.82)", fontFamily:"'Quicksand',sans-serif", fontSize:"1.05rem", maxWidth:500, lineHeight:1.8, marginBottom:36 }}>
            Every dog deserves more than survival — they deserve love, comfort, and a family to call their own.
          </p>
          <div style={{ display:"flex", flexWrap:"wrap", gap:12 }}>
            <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer" style={rb()} {...lift}>🐾 Meet Our Dogs</a>
            <a href="#foster" style={ob()}>🏡 Foster a Dog</a>
            <Link href="/donate"><a style={ob()}>💛 Virtually Adopt</a></Link>
          </div>
        </div>
      </section>

      {/* WAYS TO HELP */}
      <section style={{ background:C, padding:"72px 0" }}>
        <div className="container" ref={r1.ref}>
          <div style={{ textAlign:"center", marginBottom:40, ...stg(0, r1.visible) }}>
            <p style={{ color:G, fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12, opacity:0.5 }}>Choose Your Path</p>
            <h2 style={{ fontFamily:"'Josefin Sans',sans-serif", color:G }}>There's More Than One Way to Help</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap:16 }} className="ways-grid">
            {[
              { icon:"🏡", t:"Adopt", d:"Open your heart and home to a rescued dog looking for a family of their own." },
              { icon:"🐾", t:"Foster", d:"Provide a temporary home while a dog heals, gains confidence, or waits for their forever family." },
              { icon:"💛", t:"Virtual Adoption", d:"Support a dog's food, shelter, and medical care, even if you're unable to bring them home." },
            ].map((w, i) => (
              <div key={i} style={{ background:G, borderRadius:16, padding:"32px 24px", border:"1px solid rgba(241,231,220,0.08)", transition:"all 0.28s", ...stg(i+1, r1.visible) }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-6px)";(e.currentTarget as HTMLElement).style.boxShadow="0 20px 48px rgba(1,56,53,0.2)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}>
                {/* emoji + heading same line */}
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:14, flexWrap:"nowrap" }}>
                  <span style={{ fontSize:"1.6rem", lineHeight:1, flexShrink:0 }}>{w.icon}</span>
                  <h3 style={{ fontFamily:"'Josefin Sans',sans-serif", color:C, fontWeight:700, fontSize:"1rem", margin:0, lineHeight:1.2 }}>{w.t}</h3>
                </div>
                <p style={{ color:"rgba(241,231,220,0.7)", fontSize:"0.9rem", lineHeight:1.75, margin:0 }}>{w.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MEET OUR DOGS */}
      <section style={{ background:G, padding:"80px 0" }}>
        <div className="container" style={{ textAlign:"center" }} ref={r2.ref}>
          <div style={stg(0, r2.visible)}>
            <p style={{ color:"rgba(241,231,220,0.5)", fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:14 }}>Find Your Match</p>
            <h2 style={{ color:C, fontFamily:"'Josefin Sans',sans-serif", maxWidth:560, margin:"0 auto 18px" }}>Looking for Your New Best Friend?</h2>
            <p style={{ color:"rgba(241,231,220,0.72)", fontFamily:"'Quicksand',sans-serif", fontSize:"1rem", maxWidth:480, margin:"0 auto 32px", lineHeight:1.8 }}>
              Every dog in our care has a story. Some are playful, some are shy, some are seniors — but all of them are waiting for someone to love.
            </p>
            <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer" style={rb()} {...lift}>🐾 Meet Our Dogs <ArrowRight size={14} /></a>
          </div>
        </div>
      </section>

      {/* ADOPTION PROCESS */}
      <section style={{ background:C, padding:"96px 0" }}>
        <div className="container" ref={r3.ref}>
          <div style={{ textAlign:"center", marginBottom:52, ...stg(0, r3.visible) }}>
            <p style={{ color:G, opacity:0.5, fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:10 }}>Simple Steps</p>
            <h2 style={{ fontFamily:"'Josefin Sans',sans-serif", color:G }}>How Adoption Works</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(190px, 1fr))", gap:18 }}>
            {steps.map((step, i) => (
              <div key={i} style={{ background:G, borderRadius:14, padding:"26px 20px", ...stg(i+1, r3.visible), transition:`opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${(i+1)*0.09}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${(i+1)*0.09}s, box-shadow 0.28s` }}
                onMouseEnter={e=>{(e.currentTarget as HTMLElement).style.transform="translateY(-5px)";(e.currentTarget as HTMLElement).style.boxShadow="0 16px 40px rgba(1,56,53,0.2)";}}
                onMouseLeave={e=>{(e.currentTarget as HTMLElement).style.transform="none";(e.currentTarget as HTMLElement).style.boxShadow="none";}}>
                <div style={{ fontFamily:"'Josefin Sans',sans-serif", fontWeight:700, fontSize:"1.8rem", color:"rgba(241,231,220,0.25)", marginBottom:10, lineHeight:1 }}>{step.n}</div>
                <h3 style={{ fontFamily:"'Josefin Sans',sans-serif", color:C, fontWeight:700, fontSize:"0.95rem", marginBottom:8 }}>{step.title}</h3>
                <p style={{ color:"rgba(241,231,220,0.65)", fontSize:"0.85rem", lineHeight:1.7, margin:0 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOSTER */}
      <section id="foster" style={{ background:G, padding:"96px 0" }}>
        <div className="container" ref={r4.ref}>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))", gap:56, alignItems:"center" }}>
            <div style={{ position:"relative", ...stg(0, r4.visible) }}>
              <div style={{ position:"absolute", inset:-12, border:`2px solid rgba(241,231,220,0.15)`, borderRadius:20 }} />
              <img src={fosterHero} alt="Foster a dog" style={{ width:"100%", aspectRatio:"4/3", objectFit:"cover", borderRadius:16, display:"block", position:"relative", zIndex:1 }} />
            </div>
            <div style={stg(1, r4.visible)}>
              <p style={{ color:"rgba(241,231,220,0.5)", fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Make a Difference</p>
              <h2 style={{ color:C, fontFamily:"'Josefin Sans',sans-serif", marginBottom:20 }}>A Temporary Home.<br />A Lifelong Impact.</h2>
              <p style={{ color:"rgba(241,231,220,0.75)", lineHeight:1.85, marginBottom:16 }}>Not every rescue is ready for adoption right away. By fostering, you become a crucial part of their journey.</p>
              <ul style={{ listStyle:"none", padding:0, margin:"0 0 30px", display:"flex", flexDirection:"column", gap:10 }}>
                {["Give a dog a safe and loving place to stay","Help them build confidence and trust","Support their recovery and rehabilitation","Food and medical care provided by Aishiforfurries","Ongoing support from our team"].map((b,i)=>(
                  <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, color:"rgba(241,231,220,0.75)", fontSize:"0.9rem" }}>
                    <span style={{ color:C, fontWeight:700, marginTop:1, opacity:0.6 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <Link href="/contact"><a style={rb()} {...lift}>🏡 Apply to Foster <ArrowRight size={14} /></a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* VIRTUAL ADOPTION */}
      <section style={{ background:C, padding:"96px 0" }}>
        <div className="container" ref={r5.ref}>
          <div style={{ maxWidth: 640 }}>
            <div style={stg(0, r5.visible)}>
              <p style={{ color:G, opacity:0.5, fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:12 }}>Support From Afar</p>
              <h2 style={{ color:G, fontFamily:"'Josefin Sans',sans-serif", marginBottom:18 }}>Love Knows No Distance</h2>
              <p style={{ color:"#3d2e20", lineHeight:1.85, marginBottom:14 }}>Not everyone can bring a dog home — and that's okay. Through virtual adoption, you can sponsor a rescue dog's daily care while they stay safely with us.</p>
              <ul style={{ listStyle:"none", padding:0, margin:"0 0 30px", display:"flex", flexDirection:"column", gap:10 }}>
                {["Monthly or one-time sponsorship options","Regular updates about your sponsored dog","Direct contribution towards their care","A meaningful way to help, wherever you are"].map((b,i)=>(
                  <li key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, color:"#3d2e20", fontSize:"0.9rem" }}>
                    <span style={{ color:G, fontWeight:700, marginTop:1, opacity:0.6 }}>✓</span> {b}
                  </li>
                ))}
              </ul>
              <Link href="/donate"><a style={rb()} {...lift}>💛 Virtually Adopt <ArrowRight size={14} /></a></Link>
            </div>
          </div>
        </div>
      </section>

      {/* REQUIREMENTS */}
      <section style={{ background:G, padding:"80px 0" }}>
        <div className="container" ref={r6.ref}>
          <div style={{ textAlign:"center", marginBottom:44, ...stg(0, r6.visible) }}>
            <p style={{ color:"rgba(241,231,220,0.5)", fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:10 }}>Before You Apply</p>
            <h2 style={{ color:C, fontFamily:"'Josefin Sans',sans-serif" }}>Adoption Requirements</h2>
          </div>
          <div style={{ display:"grid", gridTemplateColumns:"repeat(auto-fit, minmax(220px, 1fr))", gap:18 }}>
            {requirements.map((r,i)=>(
              <div key={i} style={{ background:"rgba(241,231,220,0.07)", border:"1px solid rgba(241,231,220,0.10)", borderRadius:14, padding:"26px 20px", ...stg(i+1, r6.visible) }}>
                {/* emoji + title same line */}
                <div style={{ display:"flex", alignItems:"center", gap:10, marginBottom:10, flexWrap:"nowrap" }}>
                  <span style={{ fontSize:"1.5rem", lineHeight:1, flexShrink:0 }}>{r.icon}</span>
                  <h3 style={{ fontFamily:"'Josefin Sans',sans-serif", color:C, fontWeight:700, fontSize:"0.95rem", margin:0, lineHeight:1.2 }}>{r.title}</h3>
                </div>
                <p style={{ color:"rgba(241,231,220,0.62)", fontSize:"0.85rem", lineHeight:1.7, margin:0 }}>{r.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section style={{ background:C, padding:"96px 0", textAlign:"center" }}>
        <div className="container" ref={r7.ref}>
          <div style={stg(0, r7.visible)}>
            <p style={{ color:G, opacity:0.5, fontFamily:"'Josefin Sans',sans-serif", fontSize:"0.72rem", fontWeight:700, letterSpacing:"0.18em", textTransform:"uppercase", marginBottom:14 }}>One Decision</p>
            <h2 style={{ fontFamily:"'Josefin Sans',sans-serif", color:G, maxWidth:500, margin:"0 auto 18px" }}>One Decision Can Change a Life</h2>
            <div style={{ color:"#3d2e20", fontFamily:"'Quicksand',sans-serif", fontSize:"1rem", lineHeight:2.2, maxWidth:380, margin:"0 auto 40px" }}>
              <p>Every adoption creates room for another rescue.</p>
              <p>Every foster home helps a dog heal.</p>
              <p>Every virtual adoption keeps a bowl full and a tail wagging.</p>
            </div>
            <div style={{ display:"flex", flexWrap:"wrap", gap:14, justifyContent:"center" }}>
              <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer" style={rb()} {...lift}>🐾 Meet Our Dogs</a>
              <Link href="/contact"><a style={rb()} {...lift}>🏡 Apply to Foster</a></Link>
              <Link href="/donate"><a style={rb()} {...lift}>💛 Virtually Adopt</a></Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
