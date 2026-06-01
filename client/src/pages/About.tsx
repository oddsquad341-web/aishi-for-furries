import { Card } from "@/components/ui/card";

export default function About() {
  const values = [
    {
      title: "Compassion",
      description: "We believe every animal deserves care, respect, and dignity.",
    },
    {
      title: "Transparency",
      description: "We are open about our work, finances, and impact with our community.",
    },
    {
      title: "Community",
      description: "We work together with volunteers, donors, and partners to amplify our impact.",
    },
    {
      title: "Excellence",
      description: "We maintain high standards in rescue, medical care, and animal welfare.",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">About Aishi For Furries</h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Aishi For Furries is a registered NGO in Gurgaon dedicated to giving stray animals dignity, health, and hope through rescue, rehabilitation, and community care.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Mission</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                To rescue, rehabilitate, and provide comprehensive care for stray and abandoned animals in Gurgaon, ensuring they receive medical treatment, nutrition, shelter, and opportunities for adoption and fostering.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We work tirelessly to reduce animal suffering through emergency response, preventive care, and community engagement.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary">Our Vision</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                A Gurgaon where every stray animal is treated with compassion, has access to medical care, and is given a second chance at life.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                We envision a community where animal welfare is a shared responsibility, and where rescue, adoption, and volunteering are celebrated as acts of kindness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Aashima Madan's Journey</h2>
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground/80 leading-relaxed mb-4">
              In 2017, Aashima Madan began her animal welfare journey by caring for just 2 dogs. What started as a personal passion quickly grew into a mission to help the hundreds of stray animals struggling on Gurgaon's streets.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Recognizing the urgent need for organized, professional animal rescue and care, Aashima formalized her efforts by registering Aishi For Furries as an NGO. Today, the organization operates across multiple locations in Gurgaon, running rescue operations, medical clinics, feeding programs, and adoption initiatives.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Aashima's work is guided by a simple belief: every animal has intrinsic worth and deserves compassion. Her leadership has inspired a growing community of volunteers, donors, and partners who share this vision.
            </p>
            <p className="text-foreground/80 leading-relaxed">
              <strong>Contact:</strong> +91 9873218040 | aishiforfurries@gmail.com
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, idx) => (
              <Card key={idx} className="p-6 border-border hover:shadow-lg transition-shadow">
                <h3 className="text-xl font-bold text-primary mb-3">{value.title}</h3>
                <p className="text-foreground/70">{value.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Registration & Trust */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Trust & Transparency</h2>
          <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg border border-border">
            <p className="text-foreground/80 leading-relaxed mb-4">
              Aishi For Furries is a <strong>registered NGO in Gurgaon, Haryana</strong>, committed to full transparency in our operations and financial management.
            </p>
            <p className="text-foreground/80 leading-relaxed mb-4">
              Our funding is allocated as follows:
            </p>
            <ul className="space-y-2 text-foreground/80 mb-4">
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-primary rounded-full"></span>
                <strong>60%</strong> - Rescue & Medical Care
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-accent rounded-full"></span>
                <strong>30%</strong> - Food & Shelter
              </li>
              <li className="flex items-center gap-2">
                <span className="w-3 h-3 bg-secondary rounded-full"></span>
                <strong>10%</strong> - Awareness & Community Engagement
              </li>
            </ul>
            <p className="text-foreground/80 leading-relaxed">
              We believe in earning your trust through consistent, measurable impact and honest communication about our work.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
