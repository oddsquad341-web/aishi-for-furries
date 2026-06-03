import { Link } from "wouter";
import { Card } from "@/components/ui/card";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import khushiImage from "@/assets/aishi/raw/8.png";
import blackyImage from "@/assets/aishi/raw/9.png";
import raniImage from "@/assets/aishi/raw/10.png";
import adoptionImage from "@/assets/aishi/raw/12.png";

const stories = [
  { id: "lakshmi", title: "Lakshmi", image: lakshmiImage, excerpt: "Spinal fracture survivor now moving with a custom wheelchair." },
  { id: "narayan", title: "Narayan", image: narayanImage, excerpt: "Hit-and-run survivor rehabilitated to a safe life." },
  { id: "khushi", title: "Khushi", image: khushiImage, excerpt: "Crushing injuries treated and now thriving with supportive care." },
  { id: "blacky", title: "Blacky", image: blackyImage, excerpt: "Survived multiple surgeries and now enjoys stable care." },
  { id: "rani", title: "Rani", image: raniImage, excerpt: "A hit-and-run victim who learned to walk again." },
  { id: "adoption", title: "Adoption Story", image: adoptionImage, excerpt: "A rescued dog finds a loving forever home." },
];

export default function RescueStories() {
  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Stories of Hope</h1>
          <p className="text-lg text-foreground/80 max-w-3xl">Read how each rescue changed a life — and how your support makes these stories possible.</p>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {stories.map((s) => (
              <Link key={s.id} href={`/rescue-stories/${s.id}`}>
                <a>
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <div className="relative h-56 overflow-hidden">
                      <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4">
                      <h3 className="text-xl font-bold mb-2">{s.title}</h3>
                      <p className="text-foreground/70">{s.excerpt}</p>
                    </div>
                  </Card>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
