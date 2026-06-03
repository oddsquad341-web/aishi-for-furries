import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Stethoscope, Utensils } from "lucide-react";
import heroImage from "@/assets/aishi/raw/2.png";
import founderImage from "@/assets/aishi/raw/0.png";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import khushiImage from "@/assets/aishi/raw/8.png";
import blackyImage from "@/assets/aishi/raw/9.png";
import raniImage from "@/assets/aishi/raw/10.png";
import adoptionImage from "@/assets/aishi/raw/12.png";
import fosterPreview from "@/assets/aishi/raw/53.jpg";

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

  const journey = [
    {
      year: "2017",
      title: "Aashima's Journey Begins",
      description:
        "Two community dogs sparked a mission that would eventually transform hundreds of lives.",
      icon: "🐾",
    },
    {
      year: "2020",
      title: "COVID Response",
      description: "While the world shut down, rescue and feeding efforts intensified.",
      icon: "🍲",
    },
    {
      year: "2024",
      title: "Permanent Shelter",
      description: "A dedicated sanctuary opened for senior, injured, and paralysed animals.",
      icon: "🏠",
    },
    {
      year: "2025",
      title: "Registered NGO",
      description: "Aishi For Furries became a registered organisation, expanding impact and long-term care.",
      icon: "🏛️",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[500px] md:h-[600px] overflow-hidden">
        <img
          src={heroImage}
          alt="A rescued dog in our care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full container flex flex-col justify-center items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-foreground mb-4 leading-tight">
              Transforming compassion into action
            </h1>
            <p className="text-lg md:text-xl text-primary-foreground/90 mb-8">
              Giving every street dog in Gurgaon a chance at life, health, and hope through rescue, rehabilitation, feeding and long-term care.
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
                  <Icon className="w-12 h-12 mx-auto mb-4" style={{ color: 'var(--card-foreground)' }} />
                  <div className="text-3xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>{stat.number}</div>
                  <p className="font-medium" style={{ color: 'var(--card-foreground)' }}>{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories of Hope Preview */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl md:text-4xl font-bold">Stories of Hope</h2>
            <Link href="/rescue-stories"><a className="text-primary font-medium">View all</a></Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="overflow-hidden">
              <img src={lakshmiImage} alt="Lakshmi" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Lakshmi</h3>
                <p className="text-foreground/70">Spinal injury survivor now living with dignity.</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <img src={narayanImage} alt="Narayan" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Narayan</h3>
                <p className="text-foreground/70">Hit-and-run survivor rehabilitated to freedom.</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <img src={blackyImage} alt="Blacky" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="text-lg font-bold">Blacky</h3>
                <p className="text-foreground/70">A brave story of recovery and care.</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Foster a Life Preview */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1.3fr_0.9fr] gap-10 items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.32em] text-secondary font-semibold">
                Foster a Life
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-5 mb-5">
                Save a life without changing your address.
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Support a rescued dog through a virtual foster or open your home for temporary fostering or adoption. We care for the dog with love, and you help keep hope alive.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                <Link href="/adopt">
                  <a>
                    <Button className="w-full bg-primary hover:bg-primary/90 text-primary-foreground">
                      Virtually Foster a Dog
                    </Button>
                  </a>
                </Link>
                <Link href="/adopt">
                  <a>
                    <Button variant="outline" className="w-full border-primary text-primary">
                      Home Foster / Adopt
                    </Button>
                  </a>
                </Link>
                <Link href="/donate">
                  <a>
                    <Button variant="outline" className="w-full border-primary text-primary">
                      Donate for Medical Care
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-[1.25rem] overflow-hidden shadow-lg">
              <img
                src={fosterPreview}
                alt="Foster care for rescued dog"
                className="w-full h-full object-cover"
              />
            </div>
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
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
              {pillars.slice(0, 3).map((pillar, idx) => {
                return (
                  <Card key={idx} className={`p-6 hover:shadow-lg transition-shadow border-2`}>
                    <h3 className="text-xl font-bold mb-2 flex items-center" style={{ color: 'var(--card-foreground)' }}>
                      <span className="text-2xl mr-3 align-middle">{pillar.icon}</span>
                      {pillar.title}
                    </h3>
                    <p style={{ color: 'var(--card-foreground)', opacity: 0.9 }}>{pillar.description}</p>
                  </Card>
                );
              })}
            </div>

            <div className="flex justify-center">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
                {pillars.slice(3).map((pillar, idx) => {
                  return (
                    <Card key={idx} className={`p-6 hover:shadow-lg transition-shadow border-2`}>
                      <h3 className="text-xl font-bold mb-2 flex items-center" style={{ color: 'var(--card-foreground)' }}>
                        <span className="text-2xl mr-3 align-middle">{pillar.icon}</span>
                        {pillar.title}
                      </h3>
                      <p style={{ color: 'var(--card-foreground)', opacity: 0.9 }}>{pillar.description}</p>
                    </Card>
                  );
                })}
              </div>
            </div>
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
                src={founderImage}
                alt="Aashima Madan caring for rescued dogs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Section - Premium Timeline */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FBF7EE' }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8 text-emerald-900">Our Journey</h2>
          <p className="text-center text-foreground/80 mb-10 max-w-2xl mx-auto">
            Moments that shaped our mission — milestones of compassion, resilience, and growth.
          </p>

          <div className="relative">
            {/* connecting line */}
            <div className="hidden md:block absolute left-0 right-0 top-1/2 transform -translate-y-1/2">
              <div className="h-1 bg-emerald-200/60 rounded-full mx-auto" style={{ maxWidth: '100%' }} />
            </div>

            <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-8 md:gap-0">
              {journey.map((item, idx) => {
                const up = idx % 2 === 0;
                return (
                  <div
                    key={item.year}
                    className={`md:w-1/4 flex flex-col items-center md:items-start md:relative ${up ? 'md:-translate-y-6' : 'md:translate-y-6'}`}
                  >
                    <div className="relative z-10 flex flex-col items-center md:items-center text-center md:text-center">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-full bg-emerald-900 text-white flex items-center justify-center text-2xl shadow-md">
                          {item.icon}
                        </div>
                        <div className="text-emerald-900 font-bold text-lg">{item.year}</div>
                      </div>
                      <div className="max-w-xs bg-white rounded-lg p-4 shadow-sm hover:shadow-md transition-transform transform hover:-translate-y-1">
                        <h3 className="text-xl font-semibold text-foreground flex items-center justify-center md:justify-center">
                          {item.title}
                        </h3>
                        <p className="text-foreground/70 mt-2">{item.description}</p>
                      </div>
                    </div>
                    {/* node on line */}
                    <div className="hidden md:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 bg-emerald-900 rounded-full shadow" />
                    </div>
                  </div>
                );
              })}
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
