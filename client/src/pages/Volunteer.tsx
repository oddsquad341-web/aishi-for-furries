import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { toast } from "sonner";

export default function Volunteer() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    interests: [] as string[],
    availability: "",
    transport: "",
    experience: "",
    message: "",
  });

  const opportunities = [
    {
      title: "Feeding Rounds",
      description: "Help distribute nutritious meals to community dogs across Gurgaon.",
      icon: "🍖",
    },
    {
      title: "Rescue Support",
      description: "Assist in emergency rescues and field operations.",
      icon: "🚑",
    },
    {
      title: "Transport",
      description: "Help transport rescued dogs to shelter and medical facilities.",
      icon: "🚗",
    },
    {
      title: "Shelter Care",
      description: "Provide daily care, cleaning, and socialization at the shelter.",
      icon: "🏠",
    },
    {
      title: "Adoption Support",
      description: "Help match dogs with families and support the adoption process.",
      icon: "❤️",
    },
    {
      title: "Social Media & Fundraising",
      description: "Help spread awareness and organize fundraising events.",
      icon: "📱",
    },
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (interest: string) => {
    setFormData((prev) => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter((i) => i !== interest)
        : [...prev.interests, interest],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for your interest! We'll contact you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      city: "",
      interests: [],
      availability: "",
      transport: "",
      experience: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-96 overflow-hidden">
        <img
          src="https://d2xsxph8kpxj0f.cloudfront.net/310519663706632196/DkHDdAnMY683ZkQqSoBkTQ/volunteer-team-LjmuH7Ft7TPGaNkTgto8dw.webp"
          alt="Volunteer team with dogs"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative h-full container flex flex-col justify-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Volunteer With Us
          </h1>
          <p className="text-lg text-white/90 max-w-2xl">
            Find purpose by helping Gurgaon's stray animals. Every hour counts.
          </p>
        </div>
      </section>

      {/* Opportunities */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">Volunteer Opportunities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {opportunities.map((opp, idx) => (
              <Card key={idx} className="p-6 border-border hover:shadow-lg transition-shadow">
                <div className="text-4xl mb-4">{opp.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-2">{opp.title}</h3>
                <p className="text-foreground/70">{opp.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Volunteer */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Why Volunteer?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 border-border text-center">
              <div className="text-4xl mb-4">💖</div>
              <h3 className="font-bold text-foreground mb-2">Make a Real Impact</h3>
              <p className="text-foreground/70">Your time directly saves lives and improves animal welfare in Gurgaon.</p>
            </Card>
            <Card className="p-6 border-border text-center">
              <div className="text-4xl mb-4">🤝</div>
              <h3 className="font-bold text-foreground mb-2">Join a Community</h3>
              <p className="text-foreground/70">Connect with like-minded people who share your passion for animal welfare.</p>
            </Card>
            <Card className="p-6 border-border text-center">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="font-bold text-foreground mb-2">Find Purpose</h3>
              <p className="text-foreground/70">Volunteering provides fulfillment and meaningful work that matters.</p>
            </Card>
          </div>
        </div>
      </section>

      {/* Volunteer Form */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Apply to Volunteer</h2>
          <Card className="p-8 border-border">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  required
                />
              </div>

              {/* City */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  placeholder="e.g., Gurgaon, Delhi"
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Interests */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Areas of Interest
                </label>
                <div className="space-y-2">
                  {["Feeding Rounds", "Rescue Support", "Transport", "Shelter Care", "Adoption Support", "Social Media & Fundraising"].map((interest) => (
                    <label key={interest} className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        checked={formData.interests.includes(interest)}
                        onChange={() => handleCheckboxChange(interest)}
                        className="w-4 h-4 rounded border-border"
                      />
                      <span className="text-foreground">{interest}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Availability
                </label>
                <select
                  name="availability"
                  value={formData.availability}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select availability</option>
                  <option value="weekdays">Weekdays</option>
                  <option value="weekends">Weekends</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              {/* Transport */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Do you have access to transport?
                </label>
                <select
                  name="transport"
                  value={formData.transport}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select option</option>
                  <option value="yes">Yes</option>
                  <option value="no">No</option>
                </select>
              </div>

              {/* Experience */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Prior experience with animals?
                </label>
                <textarea
                  name="experience"
                  value={formData.experience}
                  onChange={handleInputChange}
                  placeholder="Tell us about your experience..."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={3}
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Additional Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us why you want to volunteer..."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={4}
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                Submit Application
              </Button>
            </form>
          </Card>
        </div>
      </section>
    </div>
  );
}
