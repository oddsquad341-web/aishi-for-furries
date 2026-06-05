import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import lakshmiImage from "@/assets/aishi/raw/15.png";
import narayanImage from "@/assets/aishi/raw/14.png";
import khushiImage from "@/assets/aishi/raw/13.png";
import blackyImage from "@/assets/aishi/raw/17.png";
import raniImage from "@/assets/aishi/raw/20.jpg";
import adoptionImage from "@/assets/aishi/raw/23.jpg";
import photo52 from "@/assets/aishi/raw/52.jpg";

const G = "#013835"; const C = "#F1E7DC"; const GOLD = "#DB453D"; const RED = "#DB453D";

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
const stg = (i: number, v: boolean) => ({ opacity: v ? 1 : 0, transform: v ? "translateY(0)" : "translateY(28px)", transition: `opacity 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.08}s, transform 0.6s cubic-bezier(0.22,1,0.36,1) ${i*0.08}s` });

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const { ref, visible } = useReveal(0.3);
  useEffect(() => {
    if (!visible) return;
    let val = 0; const step = target / 80;
    const t = setInterval(() => { val += step; if (val >= target) { setCount(target); clearInterval(t); } else setCount(Math.floor(val)); }, 20);
    return () => clearInterval(t);
  }, [visible, target]);
  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Impact() {
  const metrics = [
    { number: 65, suffix: "+", label: "Permanent Rescues" },
    { number: 500, suffix: "+", label: "Medical Cases" },
    { number: 150, suffix: "+", label: "Dogs Fed Daily" },
    { number: 40, suffix: "+", label: "Adoptions" },
    { number: 65, suffix: "+", label: "Shelter Residents" },
  ];

  const testimonials = [
    { text: "Aashima is one of the very few people who genuinely wants to erase misery of every dog. She is someone who will stop her car for any wounded dog she comes across, will kneel in the rain to comfort a trembling stray — someone who refuses to walk away even when a situation looks hopeless. She always prioritizes the safety and comfort of the animals. Her compassion and kindness is evident in the way she patiently handles frightened or injured dogs, taking the time to earn their trust and ensure they feel secure. Aashima tirelessly works day in and out to take care of these voiceless souls just like a mother and give them a new and secure life.", author: "Shivali" },
    { text: "Aashima is always very dedicated to every dog she feeds or rescues. She considers each one of them as her family. She takes care of these children with unconditional love and devotion just like a parent. Active nurturing is formed for the fur babies, irrespective if the baby is from the streets or is a pet. They try to give best nutrition to each child and also promptly takes them to vet whenever needed.", author: "Eva, Animal Social Worker" },
    { text: "I adopted my dog Rani through AishiForFurries, and I am truly grateful for the love and care that the team gives to every animal rescue. Aashima treats each one as her own, with a kind of patience and compassion that is rare in a world often unkind to animals. Because of her, Rani not only found a safe and loving home, but also became a wonderful addition to our family and a loving sister to our older dog, Togo. I'm thankful every day for the trust, support, and goodness Aashima brings into the lives of these voiceless souls.", author: "Bhoomija" },
    { text: "I know AishiForFurries for last 4 years. Never met her as I live in the states, but she's the only one I count on when it comes to my fur babies. She's just a call away. All my babies under her care are well looked. I know she's there so I don't fear about my kids even when I'm gone.", author: "Anjali" },
    { text: "I have been connected with Aashima for over a year now and every time I speak with her I feel the compassion towards the furry babies that she has. From rescues to foster and guiding in a distress situation she has done it all. Steps up to the cause when needed the most. A big thanks to her for what she is doing and loads of strength to continue it.", author: "Deepika" },
    { text: "Aashima, your kindness has a way of touching hearts without even trying. The love and passion with which you serve the dogs — it's something truly rare. You don't just feed them — you protect them, you understand them, you make them feel seen in a world that often forgets to notice. Watching the way you care is like watching compassion in its purest form. These little souls may not have words, but they feel you, they trust you, and they're safer because of you. And honestly, so are the people who get inspired just by seeing you do what you do. Thank you for being that light — steady, gentle, and full of love. The world needs more hearts like yours, and the dogs who have you in their corner are incredibly lucky.", author: "Shweta" },
    { text: "Watching Aashima care for all these wonderful animals inspires me every single day. I'm truly grateful to contribute to her tireless mission.", author: "Dr. Ruhil" },
    { text: "Volunteering with Aishi for Furries has been an incredibly fulfilling experience. Seeing rescued animals recover, find loving homes, and get a second chance at life reminds me why this work matters. Proud to be part of a team that turns compassion into action every day.", author: "Yatharth, Volunteer" },
  ];

  const stories = [
    { title: "Lakshmi", description: "Thrown into a 40-ft dry well with severe spinal fractures. Now moves with a custom wheelchair.", image: lakshmiImage, slug: "lakshmi" },
    { title: "Narayan", description: "Found after a hit-and-run with a damaged spine. Today he feels the sun again in a safe home.", image: narayanImage, slug: "narayan" },
    { title: "Khushi", description: "Dragging himself with crushing injuries. Received life-saving treatment and now enjoys freedom.", image: khushiImage, slug: "khushi" },
    { title: "Blacky", description: "Survived two amputations and taught us why consistent community care matters for every indie.", image: blackyImage, slug: "blacky" },
    { title: "Rani", description: "A hit-and-run victim with a fractured spine. Rani beat the odds and now walks and runs again.", image: raniImage, slug: "rani" },
    { title: "Adoption Story", description: "A rescued dog found a forever family through Aishi For Furries and now thrives.", image: adoptionImage, slug: "adoption-story" },
  ];

  // Testimonial carousel — auto-advance + manual nav
  const [tIdx, setTIdx] = useState(0);
  const [paused, setPaused] = useState(false);
  const total = testimonials.length;
  const prev = () => setTIdx(i => (i - 1 + total) % total);
  const next = () => setTIdx(i => (i + 1) % total);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setTIdx(i => (i + 1) % total), 4000);
    return () => clearInterval(t);
  }, [paused, total]);

  const r1 = useReveal(); const r2 = useReveal(); const r3 = useReveal();
  const r4 = useReveal(); const r5 = useReveal(); const r6 = useReveal();

  const redBtn = { display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: RED, color: "#fff", padding: "13px 28px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(219,69,61,0.28)" };
  const greenBtn = { display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: G, color: C, padding: "13px 28px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s", boxShadow: "0 4px 16px rgba(1,56,53,0.18)" };
  const outlineBtn = { display: "inline-flex" as const, alignItems: "center" as const, gap: 8, background: "transparent", color: G, border: `2px solid ${G}`, padding: "13px 28px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.875rem", letterSpacing: "0.04em", textDecoration: "none", transition: "all 0.2s" };

  return (
    <div style={{ backgroundColor: C }}>

      {/* HERO */}
      <section style={{ background: `linear-gradient(135deg, #012825 0%, ${G} 70%)`, padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.06)", pointerEvents: "none" }} />
        <div className="container" ref={r1.ref}>
          <div style={stg(0, r1.visible)}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Our Impact</p>
            <h1 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", maxWidth: 680, marginBottom: 20 }}>The Difference We've Made Together</h1>
            <p style={{ color: "rgba(241,231,220,0.72)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.8 }}>
              Every rescue, meal, vaccination, and adoption is made possible through the support of our community.
            </p>
          </div>
        </div>
      </section>

      {/* BY THE NUMBERS */}
      <section style={{ background: C, padding: "80px 0" }}>
        <div className="container" ref={r2.ref}>
          <div style={{ textAlign: "center", marginBottom: 52, ...stg(0, r2.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Measured Impact</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G }}>By The Numbers</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 18 }}>
            {metrics.map((m, i) => (
              <div key={i} style={{ background: G, borderRadius: 14, padding: "32px 20px", textAlign: "center", transition: "all 0.28s", ...stg(i, r2.visible) }}
                onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 16px 40px rgba(1,56,53,0.2)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                <div style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "clamp(1.8rem,3vw,2.5rem)", color: C, lineHeight: 1, marginBottom: 8 }}>
                  <AnimatedNumber target={m.number} suffix={m.suffix} />
                </div>
                <p style={{ color: "rgba(241,231,220,0.6)", fontSize: "0.75rem", fontFamily: "'Josefin Sans',sans-serif", letterSpacing: "0.08em", textTransform: "uppercase", margin: 0 }}>{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* BEYOND THE NUMBERS */}
      <section style={{ background: G, padding: "80px 0" }}>
        <div className="container" ref={r3.ref}>
          <div style={{ maxWidth: 680, ...stg(0, r3.visible) }}>
            <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 20 }} />
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif", marginBottom: 20 }}>Every Number Has A Story</h2>
            <p style={{ color: "rgba(241,231,220,0.72)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", lineHeight: 1.85 }}>
              While statistics help measure our work, the true impact lies in the lives we've changed — from injured dogs learning to walk again to abandoned puppies finding loving families.
            </p>
          </div>
        </div>
      </section>

      {/* SUCCESS STORIES */}
      <section style={{ background: C, padding: "96px 0" }}>
        <div className="container" ref={r4.ref}>
          <div style={{ textAlign: "center", marginBottom: 52, ...stg(0, r4.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Real Stories</p>
            <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G }}>Success Stories</h2>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 22 }}>
            {stories.map((story, i) => (
              <Link key={i} href={`/rescue-stories/${story.slug}`}>
                <a style={{ textDecoration: "none", display: "block" }}>
                  <div style={{ background: G, borderRadius: 16, overflow: "hidden", boxShadow: "0 4px 20px rgba(1,56,53,0.10)", transition: "all 0.35s cubic-bezier(0.22,1,0.36,1)", ...stg(i, r4.visible) }}
                    onMouseEnter={e => { const c = e.currentTarget as HTMLElement; c.style.transform = "translateY(-6px)"; c.style.boxShadow = "0 20px 48px rgba(1,56,53,0.22)"; const img = c.querySelector(".simg") as HTMLElement; if (img) img.style.transform = "scale(1.07)"; }}
                    onMouseLeave={e => { const c = e.currentTarget as HTMLElement; c.style.transform = "none"; c.style.boxShadow = "0 4px 20px rgba(1,56,53,0.10)"; const img = c.querySelector(".simg") as HTMLElement; if (img) img.style.transform = "scale(1)"; }}>
                    <div style={{ height: 200, overflow: "hidden" }}>
                      <img src={story.image} alt={story.title} className="simg" style={{ width: "100%", height: "100%", objectFit: "cover", display: "block", transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)" }} />
                    </div>
                    <div style={{ padding: "18px 20px 22px" }}>
                      <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: C, fontWeight: 700, fontSize: "1.1rem", marginBottom: 6 }}>{story.title}</h3>
                      <p style={{ color: C, fontSize: "0.85rem", lineHeight: 1.65, marginBottom: 12 }}>{story.description}</p>
                      <span style={{ color: RED, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.72rem", letterSpacing: "0.08em", textTransform: "uppercase", display: "inline-flex", alignItems: "center", gap: 5 }}>Read story <ArrowRight size={11} /></span>
                    </div>
                  </div>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS — 2-up on desktop, single on mobile */}
      <section style={{ background: G, padding: "96px 0" }}>
        <div className="container" ref={r5.ref}>
          <div style={{ textAlign: "center", marginBottom: 48, ...stg(0, r5.visible) }}>
            <p style={{ color: GOLD, fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 10 }}>Voices of Support</p>
            <h2 style={{ color: C, fontFamily: "'Josefin Sans',sans-serif" }}>What People Say</h2>
          </div>

          {/* DESKTOP: show 2 at a time, advance by 2 */}
          <div className="hidden md:block">
            <div style={{ position: "relative" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div style={{ overflow: "hidden", borderRadius: 16 }}>
                <div style={{ display: "flex", transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)", transform: `translateX(-${Math.floor(tIdx / 2) * 100}%)` }}>
                  {Array.from({ length: Math.ceil(total / 2) }).map((_, pageIdx) => (
                    <div key={pageIdx} style={{ minWidth: "100%", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20, boxSizing: "border-box" }}>
                      {[pageIdx * 2, pageIdx * 2 + 1].map(ti => {
                        const t = testimonials[ti];
                        if (!t) return <div key={ti} />;
                        return (
                          <div key={ti} style={{ padding: "36px 32px", background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.10)", borderRadius: 16, boxSizing: "border-box", transition: "all 0.25s", cursor: "default" }}
                            onMouseEnter={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.11)"; (e.currentTarget as HTMLElement).style.transform = "translateY(-4px)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 12px 36px rgba(0,0,0,0.22)"; }}
                            onMouseLeave={e => { (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.06)"; (e.currentTarget as HTMLElement).style.transform = "none"; (e.currentTarget as HTMLElement).style.boxShadow = "none"; }}>
                            <div style={{ color: "rgba(241,231,220,0.4)", fontSize: "2.4rem", lineHeight: 1, marginBottom: 12, fontFamily: "serif" }}>"</div>
                            <p style={{ color: C, fontFamily: "'Quicksand',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 20, fontStyle: "italic" }}>{t.text}</p>
                            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                              <div style={{ width: 34, height: 34, borderRadius: "50%", background: "rgba(241,231,220,0.15)", border: "1.5px solid rgba(241,231,220,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: C, fontSize: "0.8rem", flexShrink: 0 }}>{t.author[0]}</div>
                              <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: C, fontSize: "0.82rem", letterSpacing: "0.04em" }}>— {t.author}</span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ))}
                </div>
              </div>
              {/* Desktop controls */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 28 }}>
                <button onClick={() => setTIdx(i => Math.max(0, i - 2))} aria-label="Previous" style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(241,231,220,0.10)", border: "1.5px solid rgba(241,231,220,0.25)", color: C, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.10)"}>
                  <ChevronLeft size={20} />
                </button>
                <div style={{ display: "flex", gap: 8 }}>
                  {Array.from({ length: Math.ceil(total / 2) }).map((_, i) => (
                    <button key={i} onClick={() => setTIdx(i * 2)} aria-label={`Page ${i+1}`} style={{ width: Math.floor(tIdx / 2) === i ? 24 : 8, height: 8, borderRadius: 99, background: Math.floor(tIdx / 2) === i ? RED : "rgba(241,231,220,0.25)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                  ))}
                </div>
                <button onClick={() => setTIdx(i => Math.min(total % 2 === 0 ? total - 2 : total - 1, i + 2))} aria-label="Next" style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(241,231,220,0.10)", border: "1.5px solid rgba(241,231,220,0.25)", color: C, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.10)"}>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>

          {/* MOBILE: single card carousel unchanged */}
          <div className="md:hidden">
            <div style={{ position: "relative" }} onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
              <div style={{ overflow: "hidden", borderRadius: 16 }}>
                <div style={{ display: "flex", transition: "transform 0.45s cubic-bezier(0.22,1,0.36,1)", transform: `translateX(-${tIdx * 100}%)` }}>
                  {testimonials.map((t, i) => (
                    <div key={i} style={{ minWidth: "100%", padding: "32px 24px", background: "rgba(241,231,220,0.06)", border: "1px solid rgba(241,231,220,0.10)", borderRadius: 16, boxSizing: "border-box" }}>
                      <div style={{ color: "rgba(241,231,220,0.5)", fontSize: "3rem", lineHeight: 1, marginBottom: 16, fontFamily: "serif" }}>"</div>
                      <p style={{ color: C, fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", lineHeight: 1.85, marginBottom: 24, fontStyle: "italic" }}>{t.text}</p>
                      <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                        <div style={{ width: 36, height: 36, borderRadius: "50%", background: "rgba(241,231,220,0.15)", border: "1.5px solid rgba(241,231,220,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: C, fontSize: "0.875rem", flexShrink: 0 }}>{t.author[0]}</div>
                        <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, color: C, fontSize: "0.875rem", letterSpacing: "0.04em" }}>— {t.author}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 28 }}>
                <button onClick={prev} aria-label="Previous" style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(241,231,220,0.10)", border: "1.5px solid rgba(241,231,220,0.25)", color: C, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.10)"}>
                  <ChevronLeft size={20} />
                </button>
                <div style={{ display: "flex", gap: 8 }}>
                  {testimonials.map((_, i) => (
                    <button key={i} onClick={() => setTIdx(i)} aria-label={`Testimonial ${i+1}`} style={{ width: i === tIdx ? 24 : 8, height: 8, borderRadius: 99, background: i === tIdx ? RED : "rgba(241,231,220,0.25)", border: "none", cursor: "pointer", transition: "all 0.3s", padding: 0 }} />
                  ))}
                </div>
                <button onClick={next} aria-label="Next" style={{ width: 48, height: 48, borderRadius: "50%", background: "rgba(241,231,220,0.10)", border: "1.5px solid rgba(241,231,220,0.25)", color: C, cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", transition: "all 0.2s" }}
                  onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.18)"}
                  onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "rgba(241,231,220,0.10)"}>
                  <ChevronRight size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COMMUNITY IMPACT */}
      <section style={{ background: C, padding: "80px 0" }}>
        <div className="container" ref={r6.ref}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 48 }}>
            <div style={stg(0, r6.visible)}>
              <div style={{ width: 40, height: 3, background: GOLD, borderRadius: 2, marginBottom: 20 }} />
              <h2 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 20 }}>Creating Change Beyond Rescue</h2>
              <p style={{ color: "#5a3e2b", lineHeight: 1.85, marginBottom: 24 }}>Our work extends beyond individual rescues through:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                {["Community feeding", "Vaccination drives", "Sterilisation initiatives", "Awareness programmes", "School engagement"].map((item, i) => (
                  <div key={i} style={{ display: "flex", alignItems: "center", gap: 12, padding: "12px 16px", background: G, borderRadius: 10 }}>
                    <span style={{ width: 7, height: 7, borderRadius: "50%", background: RED, flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Josefin Sans',sans-serif", fontWeight: 600, color: C, fontSize: "0.9rem" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={stg(1, r6.visible)}>
              <div style={{ background: G, borderRadius: 16, overflow: "hidden", height: "100%", display: "flex", flexDirection: "column" }}>
                <img src={photo52} alt="Our dogs" style={{ width: "100%", height: 200, objectFit: "cover", objectPosition: "center", display: "block" }} />
                <div style={{ padding: "32px 32px 40px", flex: 1 }}>
                  <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: RED, fontSize: "1.4rem", marginBottom: 16 }}>Help Us Create More Stories Like These</h3>
                  <p style={{ color: C, fontFamily: "'Quicksand',sans-serif", fontSize: "0.95rem", lineHeight: 1.8, marginBottom: 28 }}>
                    Every contribution — through donations, volunteering, fostering, or adoption — helps us reach another animal in need.
                  </p>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
                    <Link href="/donate"><a style={redBtn}>💛 Donate</a></Link>
                    <Link href="/adopt"><a style={redBtn}>🐾 Adopt</a></Link>
                    <Link href="/volunteer"><a style={redBtn}>🤝 Volunteer</a></Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
