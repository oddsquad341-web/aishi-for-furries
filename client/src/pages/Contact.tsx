import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg text-foreground/80 max-w-3xl">
            Have questions? Need to report a rescue? Want to partner with us? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 border-border text-center">
              <Phone className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Phone</h3>
              <a href="tel:+919873218040" className="text-primary hover:underline">
                +91 9873218040
              </a>
            </Card>
            <Card className="p-6 border-border text-center">
              <Mail className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Email</h3>
              <a href="mailto:aishiforfurries@gmail.com" className="text-primary hover:underline break-all">
                aishiforfurries@gmail.com
              </a>
            </Card>
            <Card className="p-6 border-border text-center">
              <MapPin className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Location</h3>
              <p className="text-foreground/70">Gurgaon, Haryana</p>
            </Card>
            <Card className="p-6 border-border text-center">
              <Clock className="w-8 h-8 text-primary mx-auto mb-4" />
              <h3 className="font-bold text-foreground mb-2">Response Time</h3>
              <p className="text-foreground/70">24-48 hours</p>
            </Card>
          </div>

          {/* Social Links */}
          <div className="text-center">
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a
                href="https://www.instagram.com/aishiforfurries/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/aishiforfurries"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Send Us a Message</h2>
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
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select a subject</option>
                  <option value="rescue">Report a Rescue</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="volunteer">Volunteer Question</option>
                  <option value="adoption">Adoption Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Tell us how we can help..."
                  className="w-full px-4 py-2 border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                  rows={6}
                  required
                />
              </div>

              {/* Submit */}
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg">
                Send Message
              </Button>
            </form>
          </Card>
        </div>
      </section>

      {/* Rescue Help Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Emergency Rescue Help</h2>
          <div className="max-w-3xl mx-auto">
            <Card className="p-8 border-border border-2 border-primary">
              <h3 className="text-2xl font-bold text-primary mb-4">If You Find an Injured or Stray Dog</h3>
              <div className="space-y-4 mb-6">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    1
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Call or WhatsApp Us</h4>
                    <p className="text-foreground/70">+91 9873218040 (24/7 emergency line)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    2
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">Provide Details</h4>
                    <p className="text-foreground/70">Location, photos, condition of the animal, and your contact number</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold">
                    3
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-1">We'll Respond</h4>
                    <p className="text-foreground/70">Our team will assess and arrange rescue within the coverage area</p>
                  </div>
                </div>
              </div>

              <div className="bg-background p-4 rounded-lg">
                <h4 className="font-bold text-foreground mb-2">Coverage Area</h4>
                <p className="text-foreground/70 mb-2">We primarily operate in Gurgaon and surrounding areas. Response times vary based on location and availability.</p>
                <p className="text-sm text-foreground/60">
                  <strong>Note:</strong> For areas outside Gurgaon, we can provide guidance and connect you with local animal welfare organizations.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 md:py-16 bg-background">
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-2">How quickly can you respond to a rescue?</h3>
              <p className="text-foreground/70">
                Response times vary based on location and team availability, typically within 24-48 hours. Emergency cases may be prioritized.
              </p>
            </Card>
            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-2">What areas do you cover?</h3>
              <p className="text-foreground/70">
                We primarily operate in Gurgaon and surrounding areas. For rescues outside our coverage area, we can provide guidance and local resources.
              </p>
            </Card>
            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-2">Can I sponsor a specific dog?</h3>
              <p className="text-foreground/70">
                Yes! Contact us to learn about our dog sponsorship program. You can provide ongoing support for a specific dog's care.
              </p>
            </Card>
            <Card className="p-6 border-border">
              <h3 className="font-bold text-foreground mb-2">How do I report animal cruelty?</h3>
              <p className="text-foreground/70">
                Contact us immediately with details and photos. We work with local authorities to ensure animal welfare and legal action when necessary.
              </p>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
