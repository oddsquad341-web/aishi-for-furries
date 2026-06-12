export default function FloatingWhatsApp() {
  const whatsappNumber = "919873218040";
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=Hello%20Aishi%20For%20Furries`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        bottom: 24,
        right: 24,
        zIndex: 9999,
        width: 56,
        height: 56,
        borderRadius: "50%",
        backgroundColor: "#25D366",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "0 4px 20px rgba(37,211,102,0.45)",
        transition: "transform 0.2s, box-shadow 0.2s",
        cursor: "pointer",
      }}
      onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1.12)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 28px rgba(37,211,102,0.55)"; }}
      onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 20px rgba(37,211,102,0.45)"; }}
      aria-label="Chat on WhatsApp"
    >
      {/* Official WhatsApp SVG icon */}
      <svg width="30" height="30" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 3C8.82 3 3 8.82 3 16c0 2.42.65 4.7 1.78 6.67L3 29l6.52-1.71A13 13 0 0016 29c7.18 0 13-5.82 13-13S23.18 3 16 3z" fill="#fff"/>
        <path d="M16 5.2A10.8 10.8 0 015.2 16c0 2.02.56 3.9 1.53 5.52l.23.37-1.04 3.8 3.91-1.02.36.21A10.77 10.77 0 0016 26.8 10.8 10.8 0 0026.8 16 10.8 10.8 0 0016 5.2zm5.32 14.83c-.22.62-1.28 1.18-1.76 1.25-.45.07-1.01.1-1.63-.1-.38-.12-.86-.28-1.48-.55-2.6-1.12-4.3-3.74-4.43-3.91-.13-.17-1.06-1.41-1.06-2.69 0-1.28.67-1.9.9-2.16.24-.26.52-.32.7-.32l.5.01c.16 0 .38-.06.59.45l.76 1.85c.06.15.1.32.01.5l-.28.41-.42.46c-.14.14-.28.3-.12.58.16.28.72 1.18 1.54 1.91.94.84 2.06 1.4 2.36 1.53.22.1.48.08.66-.12l.47-.55c.18-.22.36-.16.6-.1l1.72.81c.25.12.41.18.47.28.06.1.06.56-.16 1.17z" fill="#25D366"/>
      </svg>
    </a>
  );
}
