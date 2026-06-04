import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import volunteerHero from "@/assets/aishi/raw/15.png";

const BRAND_GREEN = "#013835";

export default function Volunteer() {
  const areas = [
    {
      number: "1",
      title: "CSR Sponsorships",
      items: ["Medical treatments", "Rescue operations", "Shelter development", "Daily feeding programmes", "Vaccination drives", "Sterilisation initiatives"],
    },
    {
      number: "2",
      title: "Infrastructure Support",
      items: ["Kennels", "Medical rooms", "Rehabilitation areas", "Shelter expansion", "Equipment and supplies"],
    },
    {
      number: "3",
      title: "Employee Engagement",
      items: ["Shelter visits", "Volunteering days", "Donation drives", "Awareness sessions"],
    },
    {
      number: "4",
      title: "School & Community Initiatives",
      items: ["Awareness workshops", "Fundraising drives", "Student engagement programmes", "Community welfare initiatives"],
    },
    {
      number: "5",
      title: "In-Kind Contributions",
      items: ["Dog food", "Medicines", "Medical equipment", "Bedding", "Cleaning supplies", "Transport support"],
    },
  ];

  const process = [
    "Initial conversation",
    "Identify areas of support",
    "Define scope and timelines",
    "Execute and report impact",
    "Share updates and outcomes",
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[540px] overflow-hidden">
        <img src={volunteerHero} alt="Partner with Aishiforfurries" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/50"></div>
        <div className="relative h-full container flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">Partner With Us</h1>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed">
              Create meaningful impact for animals in need. Whether you're a company, school, institution, or community group, your support can help provide food, medical care, shelter, and second chances to vulnerable dogs across Gurgaon.
            </p>
          </div>
        </div>
      </section>

      {/* Why Partner */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Grassroots Impact. Tangible Results.</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            What began with two community dogs has grown into a registered animal welfare organisation caring for over 150 community dogs and 45+ permanent residents. Our work focuses on direct, measurable impact — from emergency medical treatment and feeding programs to sterilisation, rehabilitation, and lifelong care.
          </p>
        </div>
      </section>

      {/* Areas of Partnership */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Areas of Partnership</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {areas.map((area, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full text-white flex items-center justify-center font-bold text-sm flex-shrink-0" style={{ backgroundColor: BRAND_GREEN }}>
                    {area.number}
                  </div>
                  <h3 className="text-lg font-bold" style={{ color: "var(--card-foreground)" }}>{area.title}</h3>
                </div>
                <ul className="space-y-2">
                  {area.items.map((item, iidx) => (
                    <li key={iidx} className="flex items-start gap-2 text-sm" style={{ color: "var(--card-foreground)", opacity: 0.8 }}>
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_GREEN }}></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Current Needs */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Areas Currently Seeking Support</h2>
          <ul className="space-y-3">
            {["Shelter infrastructure", "Medical funds", "Sterilisation drives", "Monthly feeding programme", "Rehabilitation support"].map((need, idx) => (
              <li key={idx} className="flex items-center gap-3 text-base md:text-lg text-foreground/80">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_GREEN }}></span>
                {need}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Why Animal Welfare Matters */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Animal Welfare Matters</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            Animal welfare plays an important role in creating healthier and more compassionate communities. Through vaccination, sterilisation, rescue, and rehabilitation, organisations can contribute meaningfully towards public health, sustainability, and community wellbeing.
          </p>
        </div>
      </section>

      {/* Partnership Process */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "#FBF7EE" }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: BRAND_GREEN }}>How We Work Together</h2>
          <div className="space-y-4">
            {process.map((step, idx) => (
              <div key={idx} className="flex items-center gap-5 bg-white rounded-xl p-5 shadow-sm" style={{ border: "1px solid rgba(1,56,53,0.12)" }}>
                <div className="w-10 h-10 rounded-full text-white flex items-center justify-center font-bold text-lg flex-shrink-0" style={{ backgroundColor: BRAND_GREEN }}>
                  {idx + 1}
                </div>
                <span className="text-foreground font-medium text-base md:text-lg">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Let's Create Impact Together</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            We're always looking to collaborate with organisations that share our commitment to compassion and community welfare. Whether you're looking to support a specific initiative or build a long-term partnership, we'd love to hear from you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="mailto:aishiforfurries@gmail.com">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold">✉ Email Us</Button>
            </a>
            <a href="tel:+919873218040">
              <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">📞 Call Us</Button>
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}
