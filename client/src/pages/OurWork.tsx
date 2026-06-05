import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import rescueImage from "@/assets/aishi/raw/18.jpg";
import medicalImage from "@/assets/aishi/raw/WhatsApp Image 2025-11-21 at 10.50.01 PM.jpeg";
import shelterImage from "@/assets/aishi/raw/WhatsApp Image 2025-11-21 at 11.22.29 PM (1).jpeg";
import vaccinationImage from "@/assets/aishi/raw/4.jpg";
import feedingImage from "@/assets/aishi/raw/5.jpg";
import adoptionImage from "@/assets/aishi/raw/53.jpg";

export default function OurWork() {
  const programs = [
    {
      title: "Feeding & Community Care",
      icon: "🍖",
      description: "Daily nutritious meals for community dogs across Gurgaon.",
      details: [
        "150+ dogs fed daily across multiple locations",
        "Nutritionally balanced meals",
        "Community engagement in feeding rounds",
        "Regular monitoring of community dog health",
      ],
      image: feedingImage,
    },
    {
      title: "Rescue & Emergency Response",
      icon: "🚑",
      description: "Emergency response and field pickups for animals in distress.",
      details: [
        "24/7 emergency rescue coordination",
        "Hit-and-run case response",
        "Field pickups across Gurgaon",
        "Safe transport to shelter and medical facilities",
      ],
      image: rescueImage,
    },
    {
      title: "Medical Care & Rehabilitation",
      icon: "⚕️",
      description: "Professional treatment and rehabilitation for injured and sick dogs.",
      details: [
        "Veterinary examination and diagnosis",
        "Surgical interventions when needed",
        "Long-term rehabilitation programmes",
        "Special care for trauma cases including wheelchair dogs",
      ],
      image: medicalImage,
    },
    {
      title: "Vaccination & Sterilisation",
      icon: "💉",
      description: "Public health initiatives preventing disease and overpopulation.",
      details: [
        "Vaccination programmes for community dogs",
        "Disease prevention initiatives",
        "Population control to reduce street suffering",
      ],
      image: vaccinationImage,
    },
    {
      title: "Shelter & Long-Term Care",
      icon: "🏠",
      description: "Safe, comfortable, long-term care for special-needs and vulnerable dogs.",
      details: [
        "Secure shelter facilities for 45+ permanent residents",
        "Individual care plans for each animal",
        "Special attention for elderly and disabled dogs",
        "Socialisation and behavioural support",
      ],
      image: shelterImage,
    },
    {
      title: "Adoption & Fostering",
      icon: "❤️",
      description: "Helping rescued dogs find safety, love, and a place to belong.",
      details: [
        "40+ successful adoptions",
        "Temporary and long-term fostering opportunities",
        "Home assessments and adoption support",
        "Ongoing guidance for adopters and foster families",
      ],
      image: adoptionImage,
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Opening */}
      <section style={{ background: "linear-gradient(135deg, #012825 0%, #013835 70%)", padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.06)", pointerEvents: "none" }} />
        <div className="container">
          <p style={{ color: "#DB453D", fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>What We Do</p>
          <h1 style={{ color: "#F1E7DC", fontFamily: "'Josefin Sans',sans-serif", maxWidth: 680, marginBottom: 20 }}>Our Work</h1>
          <p style={{ color: "rgba(241,231,220,0.72)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.8 }}>
            From the streets of Gurgaon to safe shelter and second chances, our work spans every stage of a dog's journey.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ background: "#F1E7DC", paddingTop: "60px" }}>
        <div className="container space-y-20">
          {programs.map((program, idx) => (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-10 items-center`}>
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <h2 className="text-3xl font-bold mb-4 text-foreground flex items-center gap-3">
                  <span className="text-4xl">{program.icon}</span>
                  {program.title}
                </h2>
                <p className="text-lg text-foreground/80 mb-6 leading-relaxed">{program.description}</p>
                <ul className="space-y-3">
                  {program.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-3">
                      <span className="w-2 h-2 rounded-full mt-2.5 flex-shrink-0" style={{ backgroundColor: "#013835" }}></span>
                      <span className="text-foreground/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className={`relative h-80 rounded-xl overflow-hidden shadow-lg ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <img src={program.image} alt={program.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Final Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Rescue Story Starts Somewhere</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto leading-relaxed" style={{ color: "#000" }}>
            Whether it's a meal, a vaccination, a surgery, or a forever home, every step of our work is made possible through the support of our community.
          </p>
          <Link href="/donate">
            <a style={{ display: "inline-flex", alignItems: "center", gap: 8, background: "#DB453D", color: "#fff", padding: "14px 32px", borderRadius: 10, fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", textDecoration: "none", boxShadow: "0 4px 16px rgba(219,69,61,0.3)" }}>Donate Now</a>
          </Link>
        </div>
      </section>

    </div>
  );
}
