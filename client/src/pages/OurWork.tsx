import { Card } from "@/components/ui/card";

export default function OurWork() {
  const programs = [
    {
      title: "Rescue Operations",
      icon: "🚑",
      description: "Emergency response and field pickups for animals in distress.",
      details: [
        "24/7 emergency rescue coordination",
        "Hit-and-run case response",
        "Field pickups across Gurgaon",
        "Safe transport to shelter and medical facilities",
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/hero-rescue-dog-HNguHuHDe6yXDaBocNMdRJ.webp",
    },
    {
      title: "Medical Care & Rehabilitation",
      icon: "⚕️",
      description: "Professional treatment and rehabilitation for injured and sick dogs.",
      details: [
        "Veterinary examination and diagnosis",
        "Surgical interventions when needed",
        "Long-term rehabilitation programs",
        "Special care for trauma cases (e.g., wheelchair dogs)",
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/impact-medical-care-o65XCUxGgKZpUudpPr4dQB.webp",
    },
    {
      title: "Shelter & Long-Term Care",
      icon: "🏠",
      description: "Safe, comfortable, and long-term care for special-needs and vulnerable dogs.",
      details: [
        "Secure shelter facilities",
        "Individual care plans for each animal",
        "Special attention for elderly and disabled dogs",
        "Socialization and behavioral support",
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/volunteer-team-LjmuH7Ft7TPGaNkTgto8dw.webp",
    },
    {
      title: "Vaccination & Sterilization",
      icon: "💉",
      description: "Public health initiatives preventing disease and overpopulation.",
      details: [
        "90+ dogs neutered to date",
        "Vaccination programs for community dogs",
        "Disease prevention initiatives",
        "Population control to reduce street suffering",
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/impact-medical-care-o65XCUxGgKZpUudpPr4dQB.webp",
    },
    {
      title: "Daily Feeding Program",
      icon: "🍖",
      description: "Nutritious meals for community dogs across Gurgaon.",
      details: [
        "150+ dogs fed daily",
        "Multiple feeding locations",
        "Nutritionally balanced meals",
        "Community engagement in feeding rounds",
      ],
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/feeding-program-oTB5vXxhTZkF7YgTroS.webp",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Work</h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Comprehensive animal care across five key pillars: rescue, medical support, shelter, prevention, and community feeding.
          </p>
        </div>
      </section>

      {/* Programs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container space-y-16">
          {programs.map((program, idx) => (
            <div key={idx} className={`grid grid-cols-1 md:grid-cols-2 gap-8 items-center ${idx % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
              {/* Content */}
              <div className={idx % 2 === 1 ? "md:order-2" : ""}>
                <div className="text-5xl mb-4">{program.icon}</div>
                <h2 className="text-3xl font-bold mb-4 text-foreground">{program.title}</h2>
                <p className="text-lg text-foreground/80 mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.details.map((detail, didx) => (
                    <li key={didx} className="flex items-start gap-3">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-foreground/70">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Image */}
              <div className={`relative h-80 rounded-lg overflow-hidden shadow-lg ${idx % 2 === 1 ? "md:order-1" : ""}`}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Impact Summary */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Our Collective Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="p-8 text-center border-border">
              <div className="text-4xl font-bold text-primary mb-2">500+</div>
              <p className="text-foreground/70">Medical cases treated</p>
            </Card>
            <Card className="p-8 text-center border-border">
              <div className="text-4xl font-bold text-primary mb-2">150+</div>
              <p className="text-foreground/70">Dogs fed daily</p>
            </Card>
            <Card className="p-8 text-center border-border">
              <div className="text-4xl font-bold text-primary mb-2">90+</div>
              <p className="text-foreground/70">Dogs neutered</p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
