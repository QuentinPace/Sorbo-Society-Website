import { useState } from "react";

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
      {/* HERO */}
      <section className="relative flex flex-col items-center justify-center text-center px-6 pt-24 pb-20 overflow-hidden">
        {/* Glow bg */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-glow-accent blur-[120px] pointer-events-none" />

        <span className="inline-block text-xs font-bold tracking-widest uppercase text-accent border border-accent/30 px-4 py-1.5 rounded-full mb-6 bg-accent/5">
          Monthly Discovery Box
        </span>

        <h1 className="relative text-4xl md:text-6xl lg:text-7xl font-black leading-tight tracking-tight max-w-4xl mb-6">
          The Energy Drinks{" "}
          <span className="text-accent">You've Never Heard Of</span>
          <br />
          Delivered Monthly.
        </h1>

        <p className="relative text-white/60 text-lg md:text-xl max-w-xl mb-10 leading-relaxed">
          We source the most underground, niche, and limited-edition energy
          drinks from around the world — straight to your door every month. No
          mainstream. No filler.
        </p>

        {/* EMAIL CAPTURE */}
        <div id="signup" className="relative w-full max-w-md">
          {submitted ? (
            <div className="flex flex-col items-center gap-3 py-6 px-8 rounded-2xl bg-accent/10 border border-accent/30">
              <p className="text-lg font-bold text-accent">
                You're on the list!
              </p>
              <p className="text-white/60 text-sm">
                We'll notify you when the first drop launches.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 bg-white/5 border border-white/10 text-white placeholder-white/30 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent/60 focus:bg-white/10 transition-all duration-200"
                required
              />
              <button
                type="submit"
                disabled={loading}
                className="bg-accent text-background font-bold text-sm px-7 py-4 rounded-xl hover:bg-accent-hover active:scale-95 transition-all duration-200 disabled:opacity-60 whitespace-nowrap"
              >
                {loading ? "Adding you..." : "Get Early Access"}
              </button>
            </form>
          )}
          {error && (
            <p className="text-red-400 text-xs mt-2 text-left">{error}</p>
          )}
          {!submitted && (
            <p className="text-white/30 text-xs mt-3">
              No spam. Ever. Just drops.
            </p>
          )}
        </div>

        {/* Social proof
        <div className="relative mt-10 flex items-center gap-2 text-white/40 text-sm">
          <div className="flex -space-x-2">
            {["A", "K", "M", "J", "R"].map((l, i) => (
              <div
                key={i}
                className="w-7 h-7 rounded-full bg-gradient-to-br from-accent/40 to-accent/10 border border-white/10 flex items-center justify-center text-xs font-bold text-accent"
              >
                {l}
              </div>
            ))}
          </div>
          <span>200+ people already on the waitlist</span>
        </div> */}
      </section>

      {/* HOW IT WORKS */}
      <section className="px-6 md:px-16 py-20 border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-accent mb-3 block">
              The Process
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              How SORBO Society Works
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "We Hunt",
                desc: "Our team tracks down the rarest, most obscure energy drinks from micro-brands, international markets, and underground labs.",
              },
              {
                step: "02",
                title: "We Curate",
                desc: "Every drink is vetted for taste, uniqueness, and story.",
              },
              {
                step: "03",
                title: "You Discover",
                desc: "Your monthly box drops with drinks you've never seen before.",
              },
            ].map((item) => (
              <div
                key={item.step}
                className="bg-surface border border-border rounded-2xl p-8 hover:border-accent/20 hover:bg-white/5 transition-all duration-300 group"
              >
                <span className="text-5xl font-black text-accent/20 group-hover:text-accent/30 transition-colors block mb-4">
                  {item.step}
                </span>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/50 leading-relaxed text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

      {/* CTA */}
      <section className="px-6 md:px-16 py-24 border-t border-border">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[300px] rounded-full bg-accent/10 blur-[80px] pointer-events-none" />

          <h2 className="text-3xl md:text-5xl font-black mb-4 relative">
            Don't Miss the First Drop
          </h2>

          <p className="text-white/50 mb-10 relative">
            We're launching soon with a limited founding member box.
          </p>

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
                  {loading ? "Adding..." : "Join Waitlist"}
                </button>
              </>
            )}
          </form>
        </div>
      </section>
    </div>
  );
}
