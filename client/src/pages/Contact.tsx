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
      <section style={{ background: "linear-gradient(135deg, #012825 0%, #013835 70%)", padding: "96px 0 80px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", right: -60, top: -60, width: 300, height: 300, borderRadius: "50%", border: "1px solid rgba(241,231,220,0.06)", pointerEvents: "none" }} />
        <div className="container">
          <p style={{ color: "#DB453D", fontFamily: "'Josefin Sans',sans-serif", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", marginBottom: 14 }}>Partner With Us</p>
          <h1 style={{ color: "#F1E7DC", fontFamily: "'Josefin Sans',sans-serif", maxWidth: 680, marginBottom: 20 }}>Get in Touch</h1>
          <p style={{ color: "rgba(241,231,220,0.72)", fontFamily: "'Quicksand',sans-serif", fontSize: "1.05rem", maxWidth: 520, lineHeight: 1.8 }}>
            Have questions? Want to partner with us or learn more about our work? We're here to help.
          </p>
        </div>
      </section>

      {/* Contact Info */}
      <section style={{ background: "#F1E7DC", padding: "64px 0" }}>
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
            <Card className="p-6 text-center">
              <Phone className="w-8 h-8 mx-auto mb-4" style={{ color: "#013835" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--card-foreground)" }}>Phone</h3>
              <a href="tel:+919873218040" className="text-sm hover:underline" style={{ color: "#DB453D", fontWeight: 600 }}>+91 9873218040</a>
            </Card>
            <Card className="p-6 text-center">
              <Mail className="w-8 h-8 mx-auto mb-4" style={{ color: "#013835" }} />
              <h3 className="font-bold mb-2" style={{ color: "var(--card-foreground)" }}>Email</h3>
              <a href="mailto:aishiforfurries@gmail.com" className="text-sm hover:underline break-all" style={{ color: "#DB453D", fontWeight: 600 }}>aishiforfurries@gmail.com</a>
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
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">Send Us a Message</h2>
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Full Name *</label>
                <input type="text" name="name" className="w-full px-4 py-3 rounded-lg focus:outline-none" value={formData.name} onChange={handleInputChange} style={{ background: "#F1E7DC", border: "1px solid rgba(1,56,53,0.18)", width: "100%" }} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Email *</label>
                <input type="email" name="email" className="w-full px-4 py-3 rounded-lg focus:outline-none" value={formData.email} onChange={handleInputChange} style={{ background: "#F1E7DC", border: "1px solid rgba(1,56,53,0.18)", width: "100%" }} required />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Phone Number</label>
                <input type="tel" name="phone" className="w-full px-4 py-3 rounded-lg focus:outline-none" value={formData.phone} onChange={handleInputChange} style={{ background: "#F1E7DC", border: "1px solid rgba(1,56,53,0.18)", width: "100%" }} />
              </div>
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subject</label>
                <select name="subject" className="w-full px-4 py-3 rounded-lg focus:outline-none" value={formData.subject} onChange={handleInputChange} style={{ background: "#F1E7DC", border: "1px solid rgba(1,56,53,0.18)", width: "100%" }}>
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
                <textarea name="message" className="w-full px-4 py-3 rounded-lg focus:outline-none" value={formData.message} onChange={handleInputChange} placeholder="Tell us how we can help..." style={{ background: "#F1E7DC" }} rows={6} required />
              </div>
              <button type="submit" style={{ width: "100%", background: "#DB453D", color: "#fff", padding: "18px 32px", borderRadius: 10, border: "none", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "1rem", letterSpacing: "0.04em", cursor: "pointer", boxShadow: "0 4px 16px rgba(219,69,61,0.3)", transition: "all 0.2s" }}>Send Message</button>
            </form>
          </Card>
        </div>
      </section>


    </div>
  );
}