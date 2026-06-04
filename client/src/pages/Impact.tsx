import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import { useEffect, useRef, useState } from "react";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import khushiImage from "@/assets/aishi/raw/8.png";
import blackyImage from "@/assets/aishi/raw/9.png";
import raniImage from "@/assets/aishi/raw/10.png";
import adoptionImage from "@/assets/aishi/raw/12.png";

const BRAND_GREEN = "#013835";

export default function Impact() {
  const metrics = [
    { number: "65+", label: "Permanent Rescues" },
    { number: "500+", label: "Medical Cases" },
    { number: "150+", label: "Dogs Fed Daily" },
    { number: "40+", label: "Adoptions" },
    { number: "1500+", label: "Sterilisations" },
    { number: "45+", label: "Permanent Shelter Residents" },
  ];

  const testimonials = [
    {
      text: "Aashima is one of the very few people who genuinely wants to erase misery of every dog. She is someone who will stop her car for any wounded dog she comes across, will kneel in the rain to comfort a trembling stray. Her compassion and kindness is evident in the way she patiently handles frightened or injured dogs, taking the time to earn their trust and ensure they feel secure.",
      author: "Shivali",
    },
    {
      text: "Aashima is always very dedicated to every dog she feeds or rescues. She considers each one of them as her family. She takes care of these children with unconditional love and devotion just like a parent. They try to give best nutrition to each child and also promptly take them to the vet whenever needed.",
      author: "Eva, Animal Social Worker",
    },
    {
      text: "I adopted my dog Rani through Aishi For Furries, and I am truly grateful for the love and care that the team gives to every animal rescue. Because of her, Rani not only found a safe and loving home, but also became a wonderful addition to our family and a loving sister to our older dog, Togo.",
      author: "Bhoomija",
    },
    {
      text: "I know Aishi For Furries for last 4 years. Never met her as I live in the states, but she's the only one I count on when it comes to my fur babies. She's just a call away. All my babies under her care are well looked after.",
      author: "Anjali",
    },
    {
      text: "I have been connected with Aashima for over a year now and every time I speak with her I feel the compassion towards the furry babies that she has. From rescues to foster and guiding in a distress situation she has done it all. Steps up to the cause when needed the most.",
      author: "Deepika",
    },
    {
      text: "Aashima, your kindness has a way of touching hearts without even trying. The love and passion with which you serve the dogs is something truly rare. You don't just feed them — you protect them, you understand them, you make them feel seen in a world that often forgets to notice.",
      author: "Shweta",
    },
    {
      text: "As a veterinarian, I've worked alongside Aashima on several critical cases. Her commitment to the animals in her care is unwavering. She never gives up, even in the most challenging situations, and her dedication to their recovery is truly inspiring.",
      author: "Dr. Ruhil, Veterinarian",
    },
    {
      text: "Volunteering with Aishi For Furries has been one of the most meaningful experiences of my life. Seeing the direct impact of our work — from rescue to recovery to adoption — gives you a real sense of purpose. Aashima leads by example every single day.",
      author: "Yatharth, Volunteer",
    },
  ];

  const stories = [
    { title: "Lakshmi", description: "Thrown into a 40-ft dry well with severe spinal fractures, Lakshmi now moves with a custom wheelchair and lives with dignity under our care.", image: lakshmiImage, slug: "lakshmi" },
    { title: "Narayan", description: "Found after a hit-and-run with a damaged spine, Narayan survived because our team refused to give up. Today he feels the sun again in a safe home.", image: narayanImage, slug: "narayan" },
    { title: "Khushi", description: "Dragging himself across an empty plot with crushing injuries, Khushi received life-saving treatment and now enjoys freedom with supportive care.", image: khushiImage, slug: "khushi" },
    { title: "Blacky", description: "Blacky survived two amputations and taught us why consistent community care and responsible feeding matter for every indie's future.", image: blackyImage, slug: "blacky" },
    { title: "Rani", description: "A hit-and-run victim with a fractured spine, Rani beat the odds and now walks and runs again, living safely at our shelter for life.", image: raniImage, slug: "rani" },
    { title: "Adoption Story", description: "Rani found a forever family through Aishi For Furries and now thrives as a cherished member of her new home.", image: adoptionImage, slug: "adoption-story" },
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;
    let rafId: number;
    const speed = 0.5;
    const step = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        if (container.scrollLeft >= track.scrollWidth / 2) {
          container.scrollLeft -= track.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(step);
    };
    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  return (
    <div className="min-h-screen">

      {/* Opening Section */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">The Difference We've Made Together</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            Every rescue, meal, vaccination, and adoption is made possible through the support of our community.
          </p>
        </div>
      </section>

      {/* By The Numbers */}
      <section className="py-14 md:py-20" style={{ backgroundColor: "#FBF7EE" }}>
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center" style={{ color: BRAND_GREEN }}>By The Numbers</h2>
          <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto text-base md:text-lg">
            Every number represents a life transformed, a rescue completed, a second chance given.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {metrics.map((metric, idx) => (
              <Card key={idx} className="p-8 text-center border-2 hover:shadow-lg transition-all">
                <div className="text-5xl font-bold mb-3" style={{ color: "var(--card-foreground)" }}>{metric.number}</div>
                <p className="font-medium leading-relaxed" style={{ color: "var(--card-foreground)" }}>{metric.label}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Beyond The Numbers */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Every Number Has A Story</h2>
          <p className="text-lg text-foreground/80 leading-relaxed">
            While statistics help measure our work, the true impact lies in the lives we've changed — from injured dogs learning to walk again to abandoned puppies finding loving families.
          </p>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {stories.map((story, idx) => (
              <Link key={idx} href={`/rescue-stories/${story.slug}`}>
                <a className="group block">
                  <Card className="overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 p-0">
                    <div className="overflow-hidden h-48 rounded-t-xl">
                      <img src={story.image} alt={story.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    </div>
                    <div className="p-5">
                      <h3 className="text-lg font-bold mb-1" style={{ color: "var(--card-foreground)" }}>{story.title}</h3>
                      <p className="text-sm leading-relaxed" style={{ color: "var(--card-foreground)", opacity: 0.75 }}>{story.description}</p>
                      <span className="text-sm font-medium mt-3 inline-block" style={{ color: "var(--card-foreground)" }}>Read story →</span>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-14 md:py-20 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
          <div className="relative">
            <div className="flex justify-end mb-4 gap-2">
              <button onClick={() => containerRef.current?.scrollBy({ left: -340, behavior: "smooth" })} aria-label="Scroll left" className="p-2 rounded-md text-primary-foreground hover:opacity-90" style={{ backgroundColor: BRAND_GREEN }}>‹</button>
              <button onClick={() => containerRef.current?.scrollBy({ left: 340, behavior: "smooth" })} aria-label="Scroll right" className="p-2 rounded-md text-primary-foreground hover:opacity-90" style={{ backgroundColor: BRAND_GREEN }}>›</button>
            </div>
            <div ref={containerRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)} className="overflow-x-hidden" style={{ scrollBehavior: "smooth" }}>
              <div ref={trackRef} className="flex gap-6 w-max">
                {[...testimonials, ...testimonials].map((t, idx) => (
                  <Card key={idx} className="p-6" style={{ minWidth: 320, maxWidth: 360 }}>
                    <p className="mb-4 italic text-sm leading-relaxed" style={{ color: "var(--card-foreground)" }}>"{t.text}"</p>
                    <p className="font-semibold text-sm" style={{ color: "var(--card-foreground)" }}>— {t.author}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Impact */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Creating Change Beyond Rescue</h2>
          <p className="text-lg text-foreground/80 mb-8 leading-relaxed">Our work extends beyond individual rescues through:</p>
          <ul className="space-y-3">
            {["Community feeding", "Vaccination drives", "Sterilisation initiatives", "Awareness programmes", "School engagement"].map((item, idx) => (
              <li key={idx} className="flex items-center gap-3 text-base md:text-lg text-foreground/80">
                <span className="w-2 h-2 rounded-full flex-shrink-0" style={{ backgroundColor: BRAND_GREEN }}></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final Banner */}
      <section className="py-14 md:py-20 bg-primary text-primary-foreground">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Help Us Create More Stories Like These</h2>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90 leading-relaxed">
            Every contribution — whether through donations, volunteering, fostering, or adoption — helps us reach another animal in need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/donate"><a><Button className="bg-primary-foreground text-primary hover:bg-primary-foreground/90 px-8 py-6 text-lg font-semibold">💛 Donate</Button></a></Link>
            <Link href="/adopt"><a><Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">🐾 Adopt</Button></a></Link>
            <Link href="/volunteer"><a><Button variant="outline" className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10 px-8 py-6 text-lg font-semibold">🤝 Volunteer</Button></a></Link>
          </div>
        </div>
      </section>

    </div>
  );
}
