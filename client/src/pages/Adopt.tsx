import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import adoptionHero from "@/assets/aishi/raw/13.png";
import fosterHero from "@/assets/aishi/raw/14.png";
import fosterLifeImage from "@/assets/aishi/raw/17.png";

export default function Adopt() {
  const adoptionSteps = [
    {
      number: "1",
      title: "Browse & Connect",
      description: "Explore available dogs on our adoption portal and find your perfect match.",
    },
    {
      number: "2",
      title: "Application",
      description: "Fill out our adoption application to help us understand your lifestyle and home.",
    },
    {
      number: "3",
      title: "Meet & Greet",
      description: "Visit our shelter to meet the dog and spend time together.",
    },
    {
      number: "4",
      title: "Home Visit",
      description: "Our team will visit your home to ensure a safe and loving environment.",
    },
    {
      number: "5",
      title: "Adoption",
      description: "Complete the adoption process and take your new family member home.",
    },
    {
      number: "6",
      title: "Lifetime Support",
      description: "We provide ongoing support and guidance for your adopted dog's adjustment.",
    },
  ];

  const fosterBenefits = [
    "Give a dog a safe, loving temporary home",
    "Help dogs adjust before permanent adoption",
    "Reduce shelter overcrowding",
    "Provide socialization and rehabilitation",
    "No adoption fees for foster-to-adopt",
    "We cover food, medical care, and supplies",
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src={adoptionHero}
          alt="Happy adopted family with dog"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full container flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Give a Dog a Forever Home
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Adoption and fostering are powerful acts of compassion. Every dog deserves a loving family.
          </p>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">The Adoption Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {adoptionSteps.map((step, idx) => (
              <Card key={idx} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-2">{step.title}</h3>
                    <p className="text-foreground/70">{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Available Dogs */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">Dogs Looking for Homes</h2>
          <p className="text-center text-foreground/80 mb-12 max-w-2xl mx-auto">
            Browse our full adoption database on Barket to find your perfect match. Each profile includes photos, temperament, age, and medical status.
          </p>
          <div className="text-center">
            <a
              href="https://adoption.barket.in/foster/aashima-madan-492"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg">
                Browse Available Dogs on Barket
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Fostering */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Foster a Dog</h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Fostering is a wonderful way to help without a permanent commitment. By opening your home to a rescued dog, you provide them with safety, socialization, and love while they await adoption.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6">
                Foster dogs receive all necessary medical care, food, and supplies at no cost to you. Many foster families end up adopting their foster dogs—creating beautiful forever homes.
              </p>
              <h3 className="text-xl font-bold text-foreground mb-4">Foster Benefits:</h3>
              <ul className="space-y-2 mb-8">
                {fosterBenefits.map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-primary font-bold">✓</span>
                    <span className="text-foreground/80">{benefit}</span>
                  </li>
                ))}
              </ul>
              <Link href="/volunteer">
                <a>
                  <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6">
                    Apply to Foster
                  </Button>
                </a>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <img
                src={fosterHero}
                alt="Foster family with dog"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Foster a Life Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-sm uppercase tracking-[0.32em] text-secondary font-semibold">
                Foster a Life
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-5 mb-6">
                Keep a dog safe from the shelter or bring one home.
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-8">
                Choose the support that fits your life: virtual foster care for those who love from afar, or home foster and adoption for those ready to open their doors.
              </p>
              <div className="space-y-10">
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Option 1: Virtual Foster</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li>Contribute monthly or one-time to fund feeding, shelter, medicine, and care.</li>
                    <li>Aishi For Furries continues to care for the dog at the shelter.</li>
                    <li>Supporters may receive regular updates about their foster dog.</li>
                    <li>Best for people who cannot bring a dog home but still want to save a life.</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-foreground mb-3">Option 2: Home Foster / Adopt</h3>
                  <ul className="space-y-3 text-foreground/80">
                    <li>Bring a dog into your home temporarily or permanently.</li>
                    <li>Temporary fostering supports recovery and helps the dog adjust.</li>
                    <li>Permanent adoption gives a rescued dog a forever family.</li>
                    <li>Aishi For Furries provides screening, guidance, and transition support.</li>
                  </ul>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link href="/donate">
                  <a>
                    <Button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white">
                      Virtually Foster a Dog
                    </Button>
                  </a>
                </Link>
                <a
                  href="https://adoption.barket.in/foster/aashima-madan-492"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                    Home Foster / Adopt
                  </Button>
                </a>
                <Link href="/donate">
                  <a>
                    <Button variant="outline" className="w-full border-emerald-700 text-emerald-700 hover:bg-emerald-50">
                      Donate for Medical Care
                    </Button>
                  </a>
                </Link>
              </div>
            </div>
            <div className="relative h-96 rounded-[1.25rem] overflow-hidden shadow-lg">
              <img
                src={fosterLifeImage}
                alt="Foster dog receiving care"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Requirements - Premium Checklist */}
      <section className="py-12 md:py-16" style={{ backgroundColor: '#FBF7EE' }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-900">Adoption Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <Card className="p-6 border-2 border-emerald-200 bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏡</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2">Home Environment</h3>
                  <p className="text-foreground/70 text-sm">A safe, secure space where the dog can thrive. Indoor or outdoor space depending on the dog's needs.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2 border-emerald-200 bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💚</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2">Commitment</h3>
                  <p className="text-foreground/70 text-sm">Genuine commitment to providing lifelong care, including medical attention, nutrition, and love.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2 border-emerald-200 bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">⏰</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2">Time & Attention</h3>
                  <p className="text-foreground/70 text-sm">Time to help the dog adjust, socialize, and bond with your family through daily interaction.</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-2 border-emerald-200 bg-white hover:shadow-lg transition-all">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="font-bold text-emerald-900 mb-2">Veterinary Care</h3>
                  <p className="text-foreground/70 text-sm">Willingness to provide ongoing medical care, vaccinations, and emergency treatment as needed.</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-12 md:py-16 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Change a Life?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Every adoption or foster placement creates space for another rescue. Start your application today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://adoption.barket.in/foster/aashima-madan-492"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg">
                Browse Dogs
              </Button>
            </a>
            <Link href="/volunteer">
              <a>
                <Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg">
                  Apply to Foster
                </Button>
              </a>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
