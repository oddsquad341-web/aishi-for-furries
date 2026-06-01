import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Stethoscope, Utensils } from "lucide-react";

export default function Home() {
  const stats = [
    {
      number: "65+",
      label: "Permanent Rescues",
      icon: Heart,
    },
    {
      number: "500+",
      label: "Medical Cases",
      icon: Stethoscope,
    },
    {
      number: "150+",
      label: "Dogs Fed Daily",
      icon: Utensils,
    },
    {
      number: "40+",
      label: "Adoptions",
      icon: Users,
    },
  ];

  const pillars = [
    {
      title: "Rescue",
      description: "Emergency response and field pickups for animals in distress.",
      icon: "🚑",
    },
    {
      title: "Medical Care",
      description: "Professional treatment and rehabilitation for injured and sick dogs.",
      icon: "⚕️",
    },
    {
      title: "Shelter",
      description: "Safe, long-term care for special-needs and vulnerable dogs.",
      icon: "🏠",
    },
    {
      title: "Vaccination & Sterilization",
      description: "Public health initiatives preventing disease and overpopulation.",
      icon: "💉",
    },
    {
      title: "Feeding Program",
      description: "Daily nutritious meals for community dogs across Gurgaon.",
      icon: "🍖",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/hero-rescue-dog-HNguHuHDe6yXDaBocNMdRJ.webp"
          alt="Rescued dog receiving care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full container flex flex-col justify-center items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 leading-tight">
              Transforming Compassion into Action
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8">
              Helping stray animals in Gurgaon through rescue, rehabilitation, feeding, and care.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                    Donate Now
                  </Button>
                </a>
              </Link>
              <Link href="/volunteer">
                <a>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg">
                    Volunteer
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-12 h-12 text-primary mx-auto mb-4" />
                  <div className="text-3xl font-bold text-primary mb-2">{stat.number}</div>
                  <p className="text-foreground font-medium">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Five Pillars */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Five Pillars</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Comprehensive care across rescue, medical support, shelter, prevention, and community feeding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((pillar, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-border">
                <div className="text-4xl mb-4">{pillar.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{pillar.title}</h3>
                <p className="text-foreground/70">{pillar.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Aashima Madan</h2>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                What started as caring for 2 dogs in 2017 has evolved into a registered NGO dedicated to giving stray animals dignity, health, and hope.
              </p>
              <p className="text-foreground/80 mb-4 leading-relaxed">
                Aashima's vision is simple yet powerful: every animal deserves compassion, medical care, and a chance at a better life. Through Aishi For Furries, she leads a team of passionate volunteers and staff members who work tirelessly in Gurgaon's streets and shelters.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Today, the organization has grown to serve hundreds of animals, from emergency rescues to long-term shelter care, always guided by the belief that "where tails wag and hearts heal."
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/volunteer-team-LjmuH7Ft7TPGaNkTgto8dw.webp"
                alt="Aashi For Furries team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Us in Making a Difference</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Whether you donate, volunteer, or adopt, every action counts. Help us transform compassion into action for Gurgaon's stray animals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <a>
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg">
                  Donate Now
                </Button>
              </a>
            </Link>
            <Link href="/volunteer">
              <a>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                  Volunteer
                </Button>
              </a>
            </Link>
            <Link href="/adopt">
              <a>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                  Adopt/Foster
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
