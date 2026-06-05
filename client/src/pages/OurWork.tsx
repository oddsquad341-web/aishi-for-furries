import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import rescueImage from "@/assets/aishi/raw/18.jpg";
import medicalImage from "@/assets/aishi/raw/2.png";
import shelterImage from "@/assets/aishi/raw/3.jpg";
import vaccinationImage from "@/assets/aishi/raw/4.jpg";
import feedingImage from "@/assets/aishi/raw/5.jpg";
import adoptionImage from "@/assets/aishi/raw/12.png";

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
        "1500+ sterilisations completed",
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
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            From the streets of Gurgaon to safe shelter and second chances, our work spans every stage of a dog's journey.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section style={{ background: "#F1E7DC" }}>
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
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Whether it's a meal, a vaccination, a surgery, or a forever home, every step of our work is made possible through the support of our community.
          </p>
          <Link href="/donate">
            <a><Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-6 text-lg font-semibold">Donate Now</Button></a>
          </Link>
        </div>
      </section>

    </div>
  );
}
