import { useState, useEffect } from "react";
import { X } from "lucide-react";

const G = "#013835"; const C = "#F1E7DC"; const RED = "#DB453D";

export default function LeadPopup() {
  const [visible, setVisible] = useState(false);
  const [name, setName] = useState("");
  const [contact, setContact] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  useEffect(() => {
    // Show after 2s, only once per session
    if (sessionStorage.getItem("popup_seen")) return;
    const t = setTimeout(() => setVisible(true), 2000);
    return () => clearTimeout(t);
  }, []);

  const close = () => {
    setVisible(false);
    sessionStorage.setItem("popup_seen", "1");
  };

  const submit = async () => {
    if (!name.trim() || !contact.trim()) return;
    setSending(true);
    const phone = "919873212040";
    const msg = encodeURIComponent(`New visitor from Aishi For Furries website!\nName: ${name}\nContact: ${contact}`);
    // Open WhatsApp with pre-filled message to the rescue number
    window.open(`https://wa.me/${phone}?text=${msg}`, "_blank");
    setSending(false);
    setSent(true);
    setTimeout(() => { setVisible(false); sessionStorage.setItem("popup_seen", "1"); }, 1800);
  };

  if (!visible) return null;

  return (
    <div style={{ position: "fixed", inset: 0, zIndex: 99999, background: "rgba(1,28,27,0.65)", backdropFilter: "blur(4px)", display: "flex", alignItems: "center", justifyContent: "center", padding: 20 }}>
      <div style={{ background: "#fff", borderRadius: 18, padding: "36px 32px 32px", maxWidth: 420, width: "100%", position: "relative", boxShadow: "0 24px 64px rgba(0,0,0,0.25)", animation: "popIn 0.35s cubic-bezier(0.22,1,0.36,1)" }}>
        <style>{`@keyframes popIn { from { opacity:0; transform:scale(0.88) translateY(20px); } to { opacity:1; transform:none; } }`}</style>

        {/* Close */}
        <button onClick={close} style={{ position: "absolute", top: 14, right: 14, background: "rgba(1,56,53,0.07)", border: "none", borderRadius: "50%", width: 30, height: 30, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer", color: G }}>
          <X size={16} />
        </button>

        {/* Logo mark */}
        <div style={{ width: 44, height: 44, borderRadius: "50%", background: G, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, fontSize: "1.4rem" }}>🐾</div>

        {!sent ? (
          <>
            <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, fontSize: "1.25rem", marginBottom: 6 }}>Stay Connected</h3>
            <p style={{ color: "rgba(1,56,53,0.6)", fontSize: "0.85rem", lineHeight: 1.6, marginBottom: 24, fontFamily: "'Quicksand',sans-serif" }}>
              Leave your details and we'll keep you updated on rescues, adoptions, and ways to help.
            </p>

            <div style={{ display: "flex", flexDirection: "column", gap: 12, marginBottom: 20 }}>
              <input
                type="text"
                placeholder="Your name"
                value={name}
                onChange={e => setName(e.target.value)}
                style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(1,56,53,0.2)", fontFamily: "'Quicksand',sans-serif", fontSize: "0.9rem", outline: "none", color: "#111", background: "#FAFAF8" }}
              />
              <input
                type="text"
                placeholder="Email or phone number"
                value={contact}
                onChange={e => setContact(e.target.value)}
                style={{ padding: "12px 14px", borderRadius: 10, border: "1px solid rgba(1,56,53,0.2)", fontFamily: "'Quicksand',sans-serif", fontSize: "0.9rem", outline: "none", color: "#111", background: "#FAFAF8" }}
              />
            </div>

            <button
              onClick={submit}
              disabled={sending || !name.trim() || !contact.trim()}
              style={{ width: "100%", background: !name.trim() || !contact.trim() ? "rgba(219,69,61,0.45)" : RED, color: "#fff", border: "none", borderRadius: 10, padding: "13px 0", fontFamily: "'Josefin Sans',sans-serif", fontWeight: 700, fontSize: "0.95rem", letterSpacing: "0.04em", cursor: !name.trim() || !contact.trim() ? "not-allowed" : "pointer", transition: "background 0.2s" }}>
              {sending ? "Sending…" : "Submit"}
            </button>

            <p style={{ textAlign: "center", marginTop: 12, fontSize: "0.75rem", color: "rgba(1,56,53,0.4)", fontFamily: "'Quicksand',sans-serif" }}>We respect your privacy. No spam, ever.</p>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "12px 0" }}>
            <div style={{ fontSize: "2.5rem", marginBottom: 12 }}>🐶</div>
            <h3 style={{ fontFamily: "'Josefin Sans',sans-serif", color: G, marginBottom: 8 }}>Thank you!</h3>
            <p style={{ color: "rgba(1,56,53,0.6)", fontSize: "0.85rem", fontFamily: "'Quicksand',sans-serif" }}>We'll be in touch soon.</p>
          </div>
        )}
      </div>
    </div>
  );
}
