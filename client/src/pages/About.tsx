import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import founderImage from "@/assets/aishi/raw/0.png";

const BRAND_GREEN = "#013835";

export default function About() {
  const values = [
    {
      title: "Compassion",
      description: "We believe every animal deserves kindness, care, and the chance to live with dignity.",
    },
    {
      title: "Responsibility",
      description: "We are committed to the long-term wellbeing of every animal that comes under our care.",
    },
    {
      title: "Community",
      description: "Lasting change is only possible through collective action. We work alongside volunteers, adopters, donors, and supporters to create greater impact.",
    },
    {
      title: "Dignity",
      description: "Every life matters. We strive to provide safety, comfort, medical care, and respect to animals at every stage of their journey.",
    },
    {
      title: "Commitment",
      description: "We show up every day with consistency, patience, and dedication — to improve the lives of animals in need.",
    },
  ];

  const journey = [
    { year: "2017", title: "Aashima's Journey Begins", description: "Two community dogs sparked a mission that would eventually transform hundreds of lives." },
    { year: "2020", title: "COVID Response", description: "While the world shut down, rescue and feeding efforts intensified." },
    { year: "2024", title: "Permanent Shelter", description: "A dedicated sanctuary opened for senior, injured, and paralysed animals." },
    { year: "2025", title: "Registered NGO", description: "Aishi For Furries became a registered organisation, expanding impact and long-term care." },
  ];

  return (
    <div className="min-h-screen">

      {/* About Aishiforfurries */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Built on compassion. Sustained by commitment.</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            What began with two community dogs in 2017 has grown into a dedicated animal welfare organization caring for vulnerable dogs across Gurgaon.
          </p>
        </div>
      </section>

      {/* About Aashima + Timeline */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-10">Aashima's Journey</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <p className="text-foreground/80 mb-4 leading-relaxed text-base md:text-lg">
                What began with two community dogs in 2017 has grown into Aishi For Furries — a registered animal welfare organization dedicated to rescuing, rehabilitating, and caring for dogs in need.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed text-base md:text-lg">
                For Aashima, the mission has always been simple: every animal deserves kindness, medical care, safety, and the opportunity to live with dignity. What started as a personal commitment soon became a lifelong purpose, driven by countless rescues, recoveries, and second chances.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed text-base md:text-lg">
                Today, Aishi For Furries cares for over 100 community dogs, houses 45+ permanent residents, and continues to provide medical support, shelter, and rehabilitation to vulnerable animals across Gurgaon.
              </p>
              <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
                At its heart, the organization remains rooted in the same belief it began with — that every life matters, and every dog deserves a place where they can heal, belong, and be loved.
              </p>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img src={founderImage} alt="Aashima Madan" className="w-full h-full object-cover" />
            </div>
          </div>

          {/* Timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 rounded-full" style={{ backgroundColor: BRAND_GREEN, opacity: 0.2 }} />
            <div className="grid grid-cols-4 gap-6">
              {journey.map((item, idx) => {
                const isUp = idx % 2 === 0;
                return (
                  <div key={item.year} className="flex flex-col items-center relative">
                    <div className={`w-full ${isUp ? "mb-8" : "mt-8 order-last"}`}>
                      <div className="bg-background rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow text-center" style={{ border: `1px solid rgba(1,56,53,0.15)` }}>
                        <div className="font-bold text-xl mb-2" style={{ color: BRAND_GREEN }}>{item.year}</div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    <div className="relative z-10 w-5 h-5 rounded-full shadow-md border-2 border-white flex-shrink-0" style={{ backgroundColor: BRAND_GREEN }} />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="md:hidden flex flex-col gap-6 relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5" style={{ backgroundColor: BRAND_GREEN, opacity: 0.2 }} />
            {journey.map((item) => (
              <div key={item.year} className="flex items-start gap-5 pl-2">
                <div className="relative z-10 w-5 h-5 rounded-full shadow-md border-2 border-white flex-shrink-0 mt-1" style={{ backgroundColor: BRAND_GREEN }} />
                <div className="bg-background rounded-xl p-5 shadow-sm flex-1" style={{ border: `1px solid rgba(1,56,53,0.15)` }}>
                  <div className="font-bold text-lg mb-1" style={{ color: BRAND_GREEN }}>{item.year}</div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Vision</h2>
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-4">
            A future where every animal is treated with compassion, protected from suffering, and given the opportunity to live with dignity.
          </p>
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            We envision a Gurgaon where animal welfare is a shared responsibility, and every dog has access to safety, care, and a second chance.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg mb-4">
            To rescue, rehabilitate, and care for vulnerable animals through medical support, shelter, feeding, sterilisation, and adoption initiatives.
          </p>
          <p className="text-foreground/80 leading-relaxed text-base md:text-lg">
            Through compassionate action and community involvement, we work to improve the lives of animals in need every day.
          </p>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--card-foreground)" }}>{value.title}</h3>
                <p style={{ color: "var(--card-foreground)", opacity: 0.8 }}>{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Closing Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us In Building A Kinder Future</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Whether through a donation, adoption, fostering, or volunteering, every act of kindness helps us reach another animal in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate"><a><Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold">Donate</Button></a></Link>
            <Link href="/volunteer"><a><Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">Volunteer</Button></a></Link>
            <Link href="/adopt"><a><Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">Adopt</Button></a></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
