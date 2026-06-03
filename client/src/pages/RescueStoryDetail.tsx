import { useRoute } from "wouter";
import { Card } from "@/components/ui/card";
import lakshmiImage from "@/assets/aishi/raw/6.jpg";
import narayanImage from "@/assets/aishi/raw/7.jpg";
import khushiImage from "@/assets/aishi/raw/8.png";
import blackyImage from "@/assets/aishi/raw/9.png";
import raniImage from "@/assets/aishi/raw/10.png";
import adoptionImage from "@/assets/aishi/raw/12.png";

const storyMap: Record<string, any> = {
  lakshmi: {
    title: "Lakshmi",
    images: [lakshmiImage],
    content: `Thrown into a 40-ft dry well with severe spinal fractures, Lakshmi received immediate rescue and specialised care. Today she moves with a custom wheelchair and enjoys dignity, playtime, and attentive medical follow-up under Aishi For Furries' care.`,
  },
  narayan: {
    title: "Narayan",
    images: [narayanImage],
    content: `Found after a hit-and-run with a damaged spine, Narayan survived because our team refused to give up. After surgeries and rehabilitation, he now enjoys daily walks and sunlight in a safe environment.`,
  },
  khushi: {
    title: "Khushi",
    images: [khushiImage],
    content: `Dragging himself across an empty plot with crushing injuries, Khushi received life-saving treatment and now has mobility support and a comfortable recovery routine at our shelter.`,
  },
  blacky: {
    title: "Blacky",
    images: [blackyImage],
    content: `Blacky survived two amputations and a long recovery. His resilience reminds us why long-term care and attentive monitoring are essential for every rescue.`,
  },
  rani: {
    title: "Rani",
    images: [raniImage],
    content: `A hit-and-run victim with a fractured spine, Rani beat the odds and now walks and runs again, living safely at our shelter for life.`,
  },
  adoption: {
    title: "Adoption Story",
    images: [adoptionImage],
    content: `A rescued dog found a forever family through Aishi For Furries and now thrives as a cherished member of their home. Adoption transforms lives on both sides.`,
  },
};

export default function RescueStoryDetail() {
  const [match, params] = useRoute("/rescue-stories/:id");
  const id = params?.id || "";
  const story = storyMap[id];

  if (!story) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-foreground/70">Story not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">{story.title}</h1>
        </div>
      </section>

      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <Card className="p-0 overflow-hidden">
                <div className="grid grid-cols-1 gap-2">
                  {story.images.map((img: string, idx: number) => (
                    <div key={idx} className="h-64 overflow-hidden">
                      <img src={img} alt={story.title} className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </Card>
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-4">{story.title}</h2>
              <p className="text-foreground/80 leading-relaxed mb-6">{story.content}</p>
              <p className="text-foreground/70">Your support — donations, fostering, volunteering — helps us create more stories like this.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
