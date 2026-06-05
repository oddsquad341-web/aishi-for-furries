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
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  return (
    <div className="min-h-screen">

      {/* Hero */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Get in Touch</h1>
          <p className="text-lg md:text-xl text-foreground/80 max-w-3xl leading-relaxed">
            Have questions? Want to partner with us or learn more about our work? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ background: "#F1E7DC" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: "#013835" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--card-foreground)" }}>Phone</h3>
              <a href="tel:+919873218040" className="text-sm hover:underline" style={{ color: "var(--card-foreground)", opacity: 0.8 }}>+91 9873218040</a>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "#013835" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--card-foreground)" }}>Email</h3>
              <a href="mailto:aishiforfurries@gmail.com" className="text-sm hover:underline break-all" style={{ color: "var(--card-foreground)", opacity: 0.8 }}>aishiforfurries@gmail.com</a>
            </Card>
            <Card className="p-6 text-center">
              <MapPin className="w-8 h-8 mx-auto mb-4" style={{ color: "#013835" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--card-foreground)" }}>Location</h3>
              <p className="text-sm" style={{ color: "var(--card-foreground)", opacity: 0.8 }}>Gurgaon, Haryana</p>
            </Card>
            <Card className="p-6 text-center">
              <Clock className="w-8 h-8 mx-auto mb-4" style={{ color: "#013835" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--card-foreground)" }}>Response Time</h3>
              <p className="text-sm" style={{ color: "var(--card-foreground)", opacity: 0.8 }}>24–48 hours</p>
            </Card>
          </div>

          <div className="text-center">
            <h3 className="font-bold text-foreground mb-4">Follow Us</h3>
            <div className="flex justify-center gap-4">
              <a href="https://www.instagram.com/aishiforfurries/" target="_blank" rel="noopener noreferrer" className="px-6 py-2 text-primary-foreground rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#013835" }}>Instagram</a>
              <a href="https://www.facebook.com/aishiforfurries" target="_blank" rel="noopener noreferrer" className="px-6 py-2 text-primary-foreground rounded-lg hover:opacity-90 transition-opacity" style={{ backgroundColor: "#013835" }}>Facebook</a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Send Us a Message</h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input type="text" name="name" value={formData.name} onChange={handleInputChange} style={{ background: "#F1E7DC" }} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input type="email" name="email" value={formData.email} onChange={handleInputChange} style={{ background: "#F1E7DC" }} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input type="tel" name="phone" value={formData.phone} onChange={handleInputChange} style={{ background: "#F1E7DC" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select name="subject" value={formData.subject} onChange={handleInputChange} style={{ background: "#F1E7DC" }}>
                  <option value="">Select a subject</option>
                  <option value="donation">Donation Inquiry</option>
                  <option value="volunteer">Volunteer Question</option>
                  <option value="adoption">Adoption Support</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="foster">Fostering</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message *</label>
                <textarea name="message" value={formData.message} onChange={handleInputChange} placeholder="Tell us how we can help..." style={{ background: "#F1E7DC" }} rows={6} required />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold">Send Message</Button>
            </form>
          </Card>
        </div>
      </section>

      {/* FAQ */}
      <section style={{ background: "#F1E7DC" }}>
        <div className="container max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {[
              { q: "How quickly can you respond to a rescue?", a: "Response times vary based on location and team availability, typically within 24–48 hours. Emergency cases may be prioritised." },
              { q: "What areas do you cover?", a: "We primarily operate in Gurgaon and surrounding areas. For rescues outside our coverage area, we can provide guidance and local resources." },
              { q: "Can I sponsor a specific dog?", a: "Yes! Contact us to learn about our dog sponsorship programme. You can provide ongoing support for a specific dog's care." },
              { q: "How do I report animal cruelty?", a: "Contact us immediately with details and photos. We work with local authorities to ensure animal welfare and legal action when necessary." },
            ].map((faq, idx) => (
              <Card key={idx} className="p-6">
                <h3 className="font-bold text-foreground mb-2">{faq.q}</h3>
                <p className="text-foreground/70">{faq.a}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
