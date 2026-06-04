import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Heart, Users, Stethoscope, Utensils, Scissors } from "lucide-react";
import heroImage from "@/assets/aishi/raw/2.png";
import founderImage from "@/assets/aishi/raw/0.png";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import blackyImage from "@/assets/aishi/raw/9.png";

export default function Home() {
  const stats = [
    { number: "65+", label: "Permanent Rescues", icon: Heart },
    { number: "500+", label: "Medical Cases", icon: Stethoscope },
    { number: "150+", label: "Dogs Fed Daily", icon: Utensils },
    { number: "40+", label: "Adoptions", icon: Users },
    { number: "200+", label: "Sterilisations", icon: Scissors },
  ];

  const pillars = [
    { title: "Rescue", description: "Emergency response and field pickups for animals in distress.", icon: "🚑" },
    { title: "Medical Care", description: "Professional treatment and rehabilitation for injured and sick dogs.", icon: "⚕️" },
    { title: "Shelter", description: "Safe, long-term care for special-needs and vulnerable dogs.", icon: "🏠" },
    { title: "Vaccination & Sterilisation", description: "Public health initiatives preventing disease and overpopulation.", icon: "💉" },
    { title: "Feeding Program", description: "Daily nutritious meals for community dogs across Gurgaon.", icon: "🍖" },
  ];

  const journey = [
    {
      year: "2017",
      title: "Aashima's Journey Begins",
      description: "Two community dogs sparked a mission that would eventually transform hundreds of lives.",
    },
    {
      year: "2020",
      title: "COVID Response",
      description: "While the world shut down, rescue and feeding efforts intensified.",
    },
    {
      year: "2024",
      title: "Permanent Shelter",
      description: "A dedicated sanctuary opened for senior, injured, and paralysed animals.",
    },
    {
      year: "2025",
      title: "Registered NGO",
      description: "Aishi For Furries became a registered organisation, expanding impact and long-term care.",
    },
  ];

  const stories = [
    {
      image: lakshmiImage,
      name: "Lakshmi",
      description: "Spinal injury survivor now living with dignity.",
      slug: "lakshmi",
    },
    {
      image: narayanImage,
      name: "Narayan",
      description: "Hit-and-run survivor rehabilitated to freedom.",
      slug: "narayan",
    },
    {
      image: blackyImage,
      name: "Blacky",
      description: "A brave story of recovery and care.",
      slug: "blacky",
    },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Banner */}
      <section className="relative h-[500px] md:h-[620px] overflow-hidden">
        <img
          src={heroImage}
          alt="A rescued dog in our care"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative h-full container flex flex-col justify-center items-start">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 leading-tight">
              Every Dog Deserves a Second Chance
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Rescuing, rehabilitating, and caring for Gurgaon's most vulnerable dogs — from emergency rescues to lifelong shelter residents.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="/donate">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold">
                    💛 Donate Now
                  </Button>
                </a>
              </Link>
              <Link href="/adopt">
                <a>
                  <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold">
                    🐾 Meet Our Dogs
                  </Button>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Numbers */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Our Impact in Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <Card key={idx} className="p-6 text-center hover:shadow-lg transition-shadow">
                  <Icon className="w-10 h-10 mx-auto mb-3 text-primary" />
                  <div className="text-3xl font-bold mb-1 text-foreground">{stat.number}</div>
                  <p className="text-sm font-medium text-foreground/70">{stat.label}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stories of Hope */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl md:text-4xl font-bold">Stories of Hope</h2>
            <Link href="/rescue-stories">
              <a className="text-primary font-medium hover:underline">View all →</a>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <Link key={idx} href={`/rescue-stories/${story.slug}`}>
                <a className="group block">
                  <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1">
                    <div className="overflow-hidden h-52">
                      <img
                        src={story.image}
                        alt={story.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1">{story.name}</h3>
                      <p className="text-foreground/70 text-sm">{story.description}</p>
                      <span className="text-primary text-sm font-medium mt-3 inline-block">Read story →</span>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-5 uppercase tracking-wide">
            Give Them a Second Chance
          </h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Every rescue deserves food, medical care, and a safe place to heal. Your donation helps us care for abandoned, injured, senior, and special-needs dogs while they wait for the homes they deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate">
              <a>
                <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold">
                  💛 Donate Now
                </Button>
              </a>
            </Link>
            <Link href="/adopt">
              <a>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">
                  🐾 Adopt a Dog
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Our Five Pillars */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Our Five Pillars</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-base md:text-lg">
            Comprehensive care across rescue, medical support, shelter, prevention, and community feeding.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
            {pillars.slice(0, 3).map((pillar, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-2">
                <h3 className="text-xl font-bold mb-2 flex items-center text-foreground">
                  <span className="text-2xl mr-3">{pillar.icon}</span>
                  {pillar.title}
                </h3>
                <p className="text-foreground/70">{pillar.description}</p>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-3xl">
              {pillars.slice(3).map((pillar, idx) => (
                <Card key={idx} className="p-6 hover:shadow-lg transition-shadow border-2">
                  <h3 className="text-xl font-bold mb-2 flex items-center text-foreground">
                    <span className="text-2xl mr-3">{pillar.icon}</span>
                    {pillar.title}
                  </h3>
                  <p className="text-foreground/70">{pillar.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Meet Aashima Madan */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Meet Aashima Madan</h2>
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
              <img
                src={founderImage}
                alt="Aashima Madan caring for rescued dogs"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <section className="py-14 md:py-20" style={{ backgroundColor: '#FBF7EE' }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-emerald-900">Our Journey</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-base md:text-lg">
            Moments that shaped our mission — milestones of compassion, resilience, and growth.
          </p>

          {/* Desktop timeline */}
          <div className="hidden md:block relative">
            <div className="absolute left-0 right-0 top-1/2 transform -translate-y-1/2 h-0.5 bg-emerald-200 rounded-full" />
            <div className="grid grid-cols-4 gap-6">
              {journey.map((item, idx) => {
                const isUp = idx % 2 === 0;
                return (
                  <div key={item.year} className="flex flex-col items-center relative">
                    {/* Card above/below line */}
                    <div className={`w-full ${isUp ? 'mb-8' : 'mt-8 order-last'}`}>
                      <div className="bg-white rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow border border-emerald-100 text-center">
                        <div className="text-emerald-900 font-bold text-xl mb-2">{item.year}</div>
                        <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                        <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                    {/* Node on line */}
                    <div className="relative z-10 w-5 h-5 bg-emerald-900 rounded-full shadow-md border-2 border-white flex-shrink-0" />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Mobile timeline */}
          <div className="md:hidden flex flex-col gap-6 relative">
            <div className="absolute left-5 top-0 bottom-0 w-0.5 bg-emerald-200" />
            {journey.map((item, idx) => (
              <div key={item.year} className="flex items-start gap-5 pl-2">
                <div className="relative z-10 w-5 h-5 bg-emerald-900 rounded-full shadow-md border-2 border-white flex-shrink-0 mt-1" />
                <div className="bg-white rounded-xl p-5 shadow-sm border border-emerald-100 flex-1">
                  <div className="text-emerald-900 font-bold text-lg mb-1">{item.year}</div>
                  <h3 className="font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-foreground/60 text-sm leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Keep Showing Up</h2>
          <div className="text-lg md:text-xl mb-8 max-w-xl mx-auto opacity-90 space-y-1 leading-relaxed">
            <p>For the dog recovering from surgery.</p>
            <p>For the senior who has nowhere else to go.</p>
            <p>For the puppy waiting for a family.</p>
            <p>For every life that still needs a second chance.</p>
          </div>
          <Link href="/donate">
            <a>
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-10 py-6 text-lg font-semibold">
                Donate Now
              </Button>
            </a>
          </Link>
        </div>
      </section>

    </div>
  );
}
