import { Card } from "@/components/ui/card";
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

      {/* Key Metrics */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {metrics.map((metric, idx) => (
              <Card key={idx} className="p-6 text-center border-border hover:shadow-lg transition-shadow">
                <div className="text-3xl font-bold text-primary mb-2">{metric.number}</div>
                <p className="text-sm text-foreground/70">{metric.label}</p>
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

      {/* Testimonials */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">What People Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 bg-accent/10 border-border">
              <p className="text-foreground/80 mb-4 italic">
                "Aishi For Furries gave my rescue dog a second chance at life. The care and dedication of the team is truly remarkable."
              </p>
              <p className="font-semibold text-foreground">- Adopter from Gurgaon</p>
            </Card>
            <Card className="p-6 bg-accent/10 border-border">
              <p className="text-foreground/80 mb-4 italic">
                "Volunteering with Aishi For Furries helped me find purpose. Seeing rescued dogs thrive is the most rewarding experience."
              </p>
              <p className="font-semibold text-foreground">- Volunteer</p>
            </Card>
            <Card className="p-6 bg-accent/10 border-border">
              <p className="text-foreground/80 mb-4 italic">
                "Supporting Aishi For Furries means supporting real, on-ground work that transforms lives. Their transparency and impact are unmatched."
              </p>
              <p className="font-semibold text-foreground">- Donor</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Impact */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">How Your Donation Helps</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <Card className="p-6 border-border">
              <div className="flex items-start gap-4">
                <div className="text-3xl">💉</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">₹500</h3>
                  <p className="text-foreground/70">Provides vaccination and basic medical check-up for one dog</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🍖</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">₹1,000</h3>
                  <p className="text-foreground/70">Feeds 10 community dogs for a week</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏥</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">₹5,000</h3>
                  <p className="text-foreground/70">Covers emergency medical treatment for a rescued dog</p>
                </div>
              </div>
            </Card>
            <Card className="p-6 border-border">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏠</div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">₹10,000</h3>
                  <p className="text-foreground/70">Provides shelter and care for a special-needs dog for a month</p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
