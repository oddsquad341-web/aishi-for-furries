import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import adoptionHero from "@/assets/aishi/raw/13.png";
import fosterHero from "@/assets/aishi/raw/14.png";
import fosterLifeImage from "@/assets/aishi/raw/17.png";

const BRAND_GREEN = "#013835";

export default function Adopt() {
  const adoptionSteps = [
    { number: "1", title: "Find Your Match", description: "Browse our available dogs and connect with our team." },
    { number: "2", title: "Tell Us About Yourself", description: "Complete a short application so we can understand your lifestyle and find the best fit." },
    { number: "3", title: "Meet & Greet", description: "Spend time together and get to know each other." },
    { number: "4", title: "Home Visit", description: "A friendly check-in to ensure a safe and comfortable environment." },
    { number: "5", title: "Welcome Home", description: "Complete the adoption process and begin your journey together." },
  ];

  const requirements = [
    { icon: "🏡", title: "Home Environment", description: "A safe, secure space where the dog can thrive. Indoor or outdoor space depending on the dog's needs." },
    { icon: "💚", title: "Commitment", description: "Genuine commitment to providing lifelong care, including medical attention, nutrition, and love." },
    { icon: "⏰", title: "Time & Attention", description: "Time to help the dog adjust, socialise, and bond with your family through daily interaction." },
    { icon: "🏥", title: "Veterinary Care", description: "Willingness to provide ongoing medical care, vaccinations, and emergency treatment as needed." },
  ];

  return (
    <div className="min-h-screen">

      {/* Hero Section */}
      <section className="relative h-[480px] md:h-[560px] overflow-hidden">
        <img src={adoptionHero} alt="Happy adopted family with dog" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-black/45"></div>
        <div className="relative h-full container flex flex-col justify-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-5 leading-tight">Give a Dog a Forever Home</h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
              Every dog deserves more than survival — they deserve love, comfort, and a family to call their own. Whether you're ready to adopt, foster, or support a rescue from afar, your kindness can change the course of a dog's life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer">
                <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg font-semibold">🐾 Meet Our Dogs</Button>
              </a>
              <a href="#foster">
                <Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold">🏡 Foster a Dog</Button>
              </a>
              <Link href="/donate">
                <a><Button variant="outline" className="border-white text-white hover:bg-white/20 px-8 py-6 text-lg font-semibold">💛 Virtually Adopt</Button></a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Ways to Help */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">There's More Than One Way to Help</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: "🏡", title: "Adopt", description: "Open your heart and home to a rescued dog looking for a family of their own." },
              { icon: "🐾", title: "Foster", description: "Provide a temporary home while a dog heals, gains confidence, or waits for their forever family." },
              { icon: "💛", title: "Virtual Adoption", description: "Support a dog's food, shelter, medical care, and daily wellbeing, even if you're unable to bring them home." },
            ].map((way, idx) => (
              <Card key={idx} className="p-8 text-center hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{way.icon}</div>
                <h3 className="text-xl font-bold mb-3" style={{ color: "var(--card-foreground)" }}>{way.title}</h3>
                <p style={{ color: "var(--card-foreground)", opacity: 0.8 }}>{way.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Meet Our Dogs */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Looking for Your New Best Friend?</h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto mb-8 leading-relaxed">
            Every dog in our care has a story. Some are playful, some are shy, some are seniors looking for a quiet corner to nap in — but all of them are waiting for someone to love. Take a look through our rescues. Your newest family member might just be waiting for you.
          </p>
          <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-10 py-6 text-lg font-semibold">🐾 Meet Our Dogs</Button>
          </a>
        </div>
      </section>

      {/* Adoption Process */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">How Adoption Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {adoptionSteps.map((step, idx) => (
              <Card key={idx} className="p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-10 h-10 text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg" style={{ backgroundColor: BRAND_GREEN }}>
                    {step.number}
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2" style={{ color: "var(--card-foreground)" }}>{step.title}</h3>
                    <p style={{ color: "var(--card-foreground)", opacity: 0.75 }}>{step.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Foster a Dog */}
      <section id="foster" className="py-14 md:py-20 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">A Temporary Home. A Lifelong Impact.</h2>
              <p className="text-foreground/80 leading-relaxed mb-4 text-base md:text-lg">
                Not every rescue is ready for adoption right away. Some need time to recover from surgery. Some need to learn that humans can be kind. Others simply need a warm bed and a little patience while they wait for their forever family.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6 text-base md:text-lg font-medium">By fostering, you become a crucial part of their journey.</p>
              <h3 className="font-bold text-lg mb-4">Why Foster?</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Give a dog a safe and loving place to stay",
                  "Help them build confidence and trust",
                  "Support their recovery and rehabilitation",
                  "Create space for us to rescue more animals",
                  "Food and medical care provided by Aishiforfurries",
                  "Ongoing support from our team",
                ].map((benefit, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <span className="font-bold mt-0.5" style={{ color: BRAND_GREEN }}>✓</span>
                    {benefit}
                  </li>
                ))}
              </ul>
              <Link href="/contact">
                <a><Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 text-lg font-semibold">🏡 Apply to Foster</Button></a>
              </Link>
            </div>
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img src={fosterHero} alt="Foster family with dog" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Virtual Adoption */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-xl overflow-hidden shadow-lg">
              <img src={fosterLifeImage} alt="Dog in our care" className="w-full h-full object-cover" />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Love Knows No Distance</h2>
              <p className="text-foreground/80 leading-relaxed mb-4 text-base md:text-lg">
                Not everyone can bring a dog home — and that's okay. Through virtual adoption, you can sponsor a rescue dog's food, shelter, medical treatment, and daily care while they continue to stay safely with us.
              </p>
              <p className="text-foreground/80 leading-relaxed mb-6 text-base md:text-lg">
                Your support gives them stability, comfort, and a better quality of life while they wait for a forever home — or remain in our care long-term.
              </p>
              <h3 className="font-bold text-lg mb-4">What's Included?</h3>
              <ul className="space-y-2 mb-8">
                {[
                  "Monthly or one-time sponsorship options",
                  "Regular updates about your sponsored dog",
                  "Direct contribution towards their care and wellbeing",
                  "A meaningful way to help, wherever you are",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-foreground/80">
                    <span className="font-bold mt-0.5" style={{ color: BRAND_GREEN }}>✓</span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link href="/donate">
                <a><Button className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-5 text-lg font-semibold">💛 Virtually Adopt a Dog</Button></a>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Adoption Requirements */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "#FBF7EE" }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center" style={{ color: BRAND_GREEN }}>Adoption Requirements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {requirements.map((req, idx) => (
              <Card key={idx} className="p-6 bg-white hover:shadow-lg transition-all" style={{ border: "2px solid rgba(1,56,53,0.15)" }}>
                <div className="flex items-start gap-4">
                  <div className="text-3xl">{req.icon}</div>
                  <div>
                    <h3 className="font-bold mb-2" style={{ color: BRAND_GREEN }}>{req.title}</h3>
                    <p className="text-foreground/70 text-sm">{req.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">One Decision Can Change a Life</h2>
          <div className="text-lg md:text-xl mb-8 max-w-xl mx-auto opacity-90 space-y-1 leading-relaxed">
            <p>Every adoption creates room for another rescue.</p>
            <p>Every foster home helps a dog heal.</p>
            <p>Every virtual adoption keeps a bowl full and a tail wagging.</p>
            <p>However you choose to help, you'll become part of a rescue story that wouldn't be possible without you.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="https://adoption.barket.in/foster/aashima-madan-492" target="_blank" rel="noopener noreferrer">
              <Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold">🐾 Meet Our Dogs</Button>
            </a>
            <Link href="/contact"><a><Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">🏡 Apply to Foster</Button></a></Link>
            <Link href="/donate"><a><Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">💛 Virtually Adopt</Button></a></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
