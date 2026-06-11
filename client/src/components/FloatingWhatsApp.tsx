import { MessageCircle } from "lucide-react";

export default function FloatingWhatsApp() {
  const whatsappNumber = "919873218040"; // +91 98732 18040
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Aishi%20For%20Furries`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 left-6 z-40 flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
      style={{
        backgroundColor: "#25D366",
        color: "#fff",
      }}
      aria-label="Chat on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <MessageCircle size={28} strokeWidth={1.5} />
    </a>
  );
}
