import { Card } from "@/components/ui/card";
import { useEffect, useRef, useState } from "react";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import khushiImage from "@/assets/aishi/raw/8.png";
import blackyImage from "@/assets/aishi/raw/9.png";
import raniImage from "@/assets/aishi/raw/10.png";
import adoptionImage from "@/assets/aishi/raw/12.png";

export default function Impact() {
  const metrics = [
    { number: "65+", label: "Permanent Rescues" },
    { number: "500+", label: "Medical Cases" },
    { number: "90+", label: "Dogs Neutered" },
    { number: "150+", label: "Dogs Fed Daily" },
    { number: "40+", label: "Adoptions" },
    { number: "1500+", label: "Sterilizations" },
  ];

  const testimonials = [
    {
      text: "Aashima is one of the very few people who genuinely wants to erase misery of every dog. She is someone who will stop her car for any wounded dog she comes across, will kneel in the rain to comfort a trembling stray. Someone who refuses to walk away even when a situation looks hopeless. She always prioritizes the safety and comfort of the animals. Her compassion and kindness is evident in the way she patiently handles frightened or injured dogs, taking the time to earn their trust and ensure they feel secure. Aashima tirelessly works day in and out to take care of these voiceless souls just like a mother and give them a new and secure life.",
      author: "Shivali",
    },
    {
      text: "Aashima is always very dedicated to every dog she feeds or rescues. She considers each one of them as her family. She takes care of these children with unconditional love and devotion just like a parent. Active Nurturing is formed for the fur babies, irrespective if the baby is from the streets or is a pet. They try to give best nutrition to each child and also promptly takes them to vet whenever needed.",
      author: "Eva, Animal Social Worker",
    },
    {
      text: "I adopted my dog Rani through Aishi For Furries, and I am truly grateful for the love and care that the team gives to every animal rescue. Aashima treats each one as her own, with a kind of patience and compassion that is rare in a world often unkind to animals. Because of her, Rani not only found a safe and loving home, but also became a wonderful addition to our family and a loving sister to our older dog, Togo. I'm thankful every day for the trust, support, and goodness Aashima brings into the lives of these voiceless souls.",
      author: "Bhoomija",
    },
    {
      text: "I know Aishi For Furries for last 4 years. Never met her as I live in the states, but she's the only one I count on when it comes to my fur babies. She's just a call away. All my babies under her care are well looked. I know she's there so I don't fear about my kids even when I'm gone.",
      author: "Anjali",
    },
    {
      text: "I have been connected with Aashima for over a year now and every time I speak with her I feel the compassion towards the furry babies that she has. From rescues to foster and guiding in a distress situation she has done it all. Steps up to the cause when needed the most. A big thanks to her for what she is doing and loads of strength to continue it.",
      author: "Deepika",
    },
    {
      text: "Aashima, your kindness has a way of touching hearts without even trying. The love and passion with which you serve the dogs is something truly rare. You don't just feed them - you protect them, you understand them, you make them feel seen in a world that often forgets to notice. Watching the way you care is like watching compassion in its purest form. These little souls may not have words, but they feel you, they trust you, and they're safer because of you. Thank you for being that light - steady, gentle, and full of love.",
      author: "Shweta",
    },
  ];

  const trackRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    const track = trackRef.current;
    if (!container || !track) return;

    let rafId: number;
    const speed = 0.6; // pixels per frame, tuned for moderate speed

    const step = () => {
      if (!isPaused) {
        container.scrollLeft += speed;
        // loop when we've scrolled half (since track is duplicated)
        if (container.scrollLeft >= track.scrollWidth / 2) {
          container.scrollLeft -= track.scrollWidth / 2;
        }
      }
      rafId = requestAnimationFrame(step);
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [isPaused]);

  const stories = [
    {
      title: "Lakshmi",
      description:
        "Thrown into a 40-ft dry well with severe spinal fractures, Lakshmi now moves with a custom wheelchair and lives with dignity under our care.",
      image: lakshmiImage,
    },
    {
      title: "Narayan",
      description:
        "Found after a hit-and-run with a damaged spine, Narayan survived because our team refused to give up. Today he feels the sun again in a safe home.",
      image: narayanImage,
    },
    {
      title: "Khushi",
      description:
        "Dragging himself across an empty plot with crushing injuries, Khushi received life-saving treatment and now enjoys freedom with supportive care.",
      image: khushiImage,
    },
    {
      title: "Blacky",
      description:
        "Blacky survived two amputations and taught us why consistent community care and responsible feeding matter for every indies' future.",
      image: blackyImage,
    },
    {
      title: "Rani",
      description:
        "A hit-and-run victim with a fractured spine, Rani beat the odds and now walks and runs again, living safely at our shelter for life.",
      image: raniImage,
    },
    {
      title: "Adoption Story",
      description:
        "Rani found a forever family through Aishi For Furries and now thrives as a cherished member of her new home.",
      image: adoptionImage,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Impact</h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Every number represents a life changed. Every story reflects our commitment to transforming compassion into measurable, lasting impact.
          </p>
        </div>
      </section>

          {/* Key Metrics - Premium Editorial Layout */}
          <section className="py-12 md:py-16" style={{ backgroundColor: '#FBF7EE' }}>
            <div className="container">
              <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-900">By The Numbers</h2>
              <p className="text-center text-foreground/70 mb-12 max-w-2xl mx-auto">Every number represents a life transformed, a rescue completed, a second chance given.</p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {metrics.map((metric, idx) => (
                  <Card key={idx} className={`p-8 text-center border-2 hover:shadow-lg transition-all`}>
                    <div className="text-5xl font-bold mb-3" style={{ color: 'var(--card-foreground)' }}>{metric.number}</div>
                    <p className="font-medium leading-relaxed" style={{ color: 'var(--card-foreground)' }}>{metric.label}</p>
                  </Card>
                ))}
              </div>
            </div>
          </section>

      {/* Success Stories */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Success Stories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <Card key={idx} className="overflow-hidden border-border hover:shadow-lg transition-shadow">
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3">{story.title}</h3>
                  <p className="text-foreground/70">{story.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Premium Carousel */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
          <div className="relative">
            <div className="flex items-center justify-between mb-4">
              <div />
              <div className="flex items-center gap-2">
                <button
                  onClick={() => containerRef.current && containerRef.current.scrollBy({ left: -320, behavior: 'smooth' })}
                  aria-label="Scroll left"
                  className="p-2 rounded-md bg-primary text-primary-foreground hover:opacity-90"
                >
                  ‹
                </button>
                <button
                  onClick={() => containerRef.current && containerRef.current.scrollBy({ left: 320, behavior: 'smooth' })}
                  aria-label="Scroll right"
                  className="p-2 rounded-md bg-primary text-primary-foreground hover:opacity-90"
                >
                  ›
                </button>
              </div>
            </div>

            <div
              ref={containerRef}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
              className="overflow-x-auto no-scrollbar"
              style={{ scrollBehavior: 'smooth' }}
            >
              <div ref={trackRef} className="flex gap-6 w-max">
                {[...testimonials, ...testimonials].map((testimonial, idx) => (
                  <Card key={idx} className="p-6 mx-1" style={{ minWidth: 320 }}>
                    <p className="mb-4 italic text-sm leading-relaxed" style={{ color: 'var(--card-foreground)' }}>
                      "{testimonial.text}"
                    </p>
                    <p className="font-semibold" style={{ color: 'var(--card-foreground)' }}>— {testimonial.author}</p>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Impact - Premium Cards */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-emerald-900">How Your Donation Helps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[{
              amount: '₹500', icon: '💉', text: 'Vaccination and medical check-up for one dog'
            },{
              amount: '₹1,000', icon: '🍖', text: 'Feeds 10 community dogs for a week'
            },{
              amount: '₹5,000', icon: '🏥', text: 'Emergency medical treatment for a rescued dog'
            },{
              amount: '₹10,000', icon: '🏠', text: 'Shelter and care for a special-needs dog for one month'
            }].map((d, i) => (
              <Card key={i} className="p-6 border-2">
                <div className="text-4xl mb-4" style={{ color: 'var(--card-foreground)' }}>{d.icon}</div>
                <h3 className="text-2xl font-bold mb-2" style={{ color: 'var(--card-foreground)' }}>{d.amount}</h3>
                <p className="text-sm leading-relaxed" style={{ color: 'var(--card-foreground)' }}>{d.text}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
