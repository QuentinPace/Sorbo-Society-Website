import { useState } from "react";
import DiscoveryBox from "../DiscoveryBox/DiscoveryBox";

export default function LandingPage() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    if (!email || !email.includes("@")) {
      setError("Please enter a valid email address.");
      return;
    }
    setLoading(true);
    await fetch("/api/email/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email }),
    });
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-background text-white font-sans">
      {/* FEATURES */}
      <section className="px-6 md:px-16 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <img
              src="../SORBO-small.png"
              alt="SORBO Logo"
              className="h-80 mx-auto block"
            />
            {/* <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
              Why SORBO Society
            </span>
            <h2 className="text-3xl md:text-4xl font-black">Built Different</h2> */}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              {
                icon: "🌍",
                title: "Global Sourcing",
                desc: "Drinks from worldwide markets.",
              },
              {
                icon: "🔒",
                title: "Members Only",
                desc: "Limited spots available.",
              },
              {
                icon: "📦",
                title: "Monthly Box",
                desc: "Curated selection each month.",
              },
              {
                icon: "✍️",
                title: "Tasting Notes",
                desc: "Story behind every drink.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-surface border border-border rounded-2xl p-6 hover:border-accent/20 transition-all duration-300"
              >
                <span className="text-3xl block mb-4">{item.icon}</span>
                <h3 className="text-base font-bold mb-2">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <DiscoveryBox />

      {/* CTA */}
      <section className="px-6 md:px-16 py-24 border-t border-border">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black mb-4 relative">
            Don't Miss SORBO Society updates
          </h2>

          <form
            onSubmit={handleSubmit}
            className="relative flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
          >
            {submitted ? (
              <div className="w-full flex items-center justify-center gap-2 py-4 px-6 rounded-xl bg-accent/10 border border-accent/30 text-accent font-bold">
                ✓ You're on the list!
              </div>
            ) : (
              <>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Your email address"
                  className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent/60 transition-all duration-200"
                  required
                />
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-accent text-background font-bold text-sm px-7 py-4 rounded-xl hover:bg-accent-hover active:scale-95 transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
                >
                  {loading ? "Adding..." : "Get Updates"}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
