import { Card } from "@/components/ui/card";

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
      title: "From Trauma to Triumph",
      description: "A dog rescued from a hit-and-run incident with severe injuries, including spinal damage, now thrives with a wheelchair and loving family.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/adoption-success-RfRFS6bErxVFUFinsVJabG.webp",
    },
    {
      title: "Second Chances Work",
      description: "A shy street dog, rescued and rehabilitated, found a forever home with a family who saw past the fear to the loving companion within.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/adoption-success-RfRFS6bErxVFUFinsVJabG.webp",
    },
    {
      title: "Community Impact",
      description: "Through our feeding program, 150+ community dogs receive daily nutrition, reducing malnutrition and disease in Gurgaon's stray population.",
      image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/feeding-program-oTB5vXxhTZkF7YgTroS.webp",
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
