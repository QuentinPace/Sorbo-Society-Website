import { useState, useEffect, useCallback, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";

const faqs = [
  {
    q: "When will the box ship?",
    a: "We ship the months boxes the first of every month.",
  },
  {
    q: "Can I cancel anytime?",
    a: "Yes. No contracts, no lock-ins. Cancel before your next billing date and you won't be charged again.",
  },
  {
    q: "Where do the drinks come from?",
    a: "We source from micro-brands, international importers, and direct from distributors in Asia, Europe, and the Americas. If it's weird and hard to find, we want it.",
  },
  {
    q: "Do you ship internationally?",
    a: "Starting with US-only for the first few months, then expanding internationally. Join the waitlist to get notified when we reach your region.",
  },
  {
    q: "What if I don't like a drink?",
    a: "That's the point — you're exploring. But if something is genuinely off, reach out to quentin@sorbosociety.com and we'll make it right. We stand behind every can.",
  },
  {
    q: "Is checkout handled securely?",
    a: "Yes — all payments are processed through Stripe. Your card info is never stored on our servers.",
  },
];

const drinkSlides = [
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070157.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070233.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070400.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070431.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070502.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070636.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20070835.png" },
  { src: "https://cdn.sorbosociety.com/Screenshot%202026-04-16%20071023.png" },
];

const included = [
  {
    icon: "🌐",
    title: "6 Globally Sourced Drinks",
    desc: "Every month we pull drinks from markets most people in the US have never accessed — Japanese functional energy drinks, Korean caffeine innovations, European micro-brews, South American import-only brands. Each can is chosen because it's genuinely hard to find, not because it's trending.",
  },
  {
    icon: "📖",
    title: "Printed Tasting Notes",
    desc: "Every SORBO Discovery Box comes with a printed card covering the full flavor profile of each drink, its caffeine content, and why we picked it this month. You're not just drinking — you're learning about a world of energy drinks that most people don't know exists.",
  },
  {
    icon: "💬",
    title: "Members-Only Community",
    desc: "Access to a private Discord with other serious energy drink enthusiasts. Share what you're tasting, trade recommendations, get behind-the-scenes looks at what we're sourcing, and join our monthly live tasting sessions with the team.",
  },
  {
    icon: "🚚",
    title: "Free Shipping, Every Month",
    desc: "No surprise fees at checkout. Shipping is included in your subscription price every single month, no matter where you are in the US. We handle the logistics so you can focus on the discovery.",
  },
];

function DrinkCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "start",
    slidesToScroll: 1,
  });
  const [selectedIndex, setSelectedIndex] = useState(0);
  const autoplayRef = useRef(null);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi],
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi],
  );

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => emblaApi.off("select", onSelect);
  }, [emblaApi, onSelect]);

  useEffect(() => {
    if (!emblaApi) return;
    autoplayRef.current = setInterval(() => emblaApi.scrollNext(), 3000);
    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  const stopAutoplay = () => clearInterval(autoplayRef.current);

  return (
    <div className="relative" onMouseEnter={stopAutoplay}>
      <div className="overflow-hidden rounded-2xl" ref={emblaRef}>
        <div className="flex gap-4 px-1 py-1">
          {drinkSlides.map((drink, i) => (
            <div key={i} className="shrink-0 w-48 md:w-56 group cursor-default">
              <div className="relative rounded-xl overflow-hidden bg-white/[0.03] border border-white/8 group-hover:border-[#74dff6]/30 transition-all duration-300 aspect-[1.5/4]">
                <img
                  src={drink.src}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#212121]/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Arrows */}
      <button
        onClick={scrollPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-10 h-10 rounded-full bg-[#212121] border border-white/15 flex items-center justify-center hover:border-[#74dff6]/40 hover:text-[#74dff6] transition-all duration-200 cursor-pointer text-white/60 shadow-lg"
      >
        ‹
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-10 h-10 rounded-full bg-[#212121] border border-white/15 flex items-center justify-center hover:border-[#74dff6]/40 hover:text-[#74dff6] transition-all duration-200 cursor-pointer text-white/60 shadow-lg"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-5">
        {drinkSlides.map((_, i) => (
          <button
            key={i}
            onClick={() => emblaApi && emblaApi.scrollTo(i)}
            className={`rounded-full transition-all duration-200 cursor-pointer ${
              i === selectedIndex
                ? "w-5 h-1.5 bg-[#74dff6]"
                : "w-1.5 h-1.5 bg-white/20 hover:bg-white/40"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

export default function DiscoveryBox() {
  const [openFaq, setOpenFaq] = useState(null);

  const handleCheckout = () => {
    // TODO: wire up Stripe checkout
    // Example:
    // const stripe = await loadStripe(process.env.VITE_STRIPE_PUBLIC_KEY);
    // const response = await fetch('/api/create-checkout-session', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ planId: 'vaultd-monthly' }),
    // });
    // const { sessionId } = await response.json();
    // stripe.redirectToCheckout({ sessionId });
    alert("Stripe checkout coming soon");
  };

  return (
    <div className="min-h-screen bg-[#212121] text-white font-sans">
      {/* HERO */}
      <section className="relative text-center px-6 pt-20 pb-16 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] rounded-full bg-[#74dff6]/7 blur-[130px] pointer-events-none" />
        <span className="relative text-xs font-bold tracking-widest uppercase text-[#74dff6] border border-[#74dff6]/30 px-4 py-1.5 rounded-full mb-6 inline-block bg-[#74dff6]/5">
          One Box. One Mission.
        </span>
        <h1 className="relative text-4xl md:text-6xl font-black mb-5 tracking-tight leading-tight">
          The SORBO
          <br />
          <span className="text-[#74dff6]">Discovery Box</span>
        </h1>
        <p className="relative text-white/55 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
          Six of the most niche, obscure, and hard-to-find energy drinks on the
          planet — sourced from international markets, micro-brands, and
          limited-run producers — delivered to your door every month with full
          tasting notes.
        </p>
      </section>

      {/* DRINK CAROUSEL */}
      <section className="pb-16 overflow-hidden">
        <div className="text-center mb-10 px-6">
          <span className="text-xs font-bold tracking-widest uppercase text-[#74dff6] mb-3 block">
            What Could Be In Your Box
          </span>
          <h2 className="text-2xl md:text-3xl font-black">
            A Taste of What We Find
          </h2>
          <p className="text-white/40 text-sm mt-2 max-w-md mx-auto">
            These are the kinds of drinks we're hunting. Every month is
            different — you'll never get the same box twice.
          </p>
        </div>
        <div className="px-10 md:px-20 max-w-6xl mx-auto">
          <DrinkCarousel />
        </div>
      </section>

      {/* PRODUCT CARD */}
      <section className="px-6 md:px-16 pb-20">
        <div className="max-w-2xl mx-auto">
          <div className="relative rounded-3xl p-10 border border-[#74dff6]/30 bg-[#74dff6]/6 shadow-[0_0_80px_rgba(116,223,246,0.07)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
              <span className="bg-[#74dff6] text-[#212121] text-xs font-black px-5 py-2 rounded-full tracking-widest uppercase">
                Founding Member Rate
              </span>
            </div>

            <div className="text-center mb-8 pt-2">
              <div className="flex items-end justify-center gap-2 mb-2">
                <span className="text-7xl font-black">$45.99</span>
                <span className="text-white/40 text-lg mb-3">/ month</span>
              </div>
              <p className="text-white/40 text-sm">
                Free shipping included · Cancel anytime
              </p>
            </div>

            <div className="space-y-3 mb-10">
              {[
                "6 handpicked niche energy drinks",
                "Printed tasting notes",
                "Members-only Discord community",
                "Free shipping every month",
              ].map((perk) => (
                <div key={perk} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#74dff6]/20 border border-[#74dff6]/40 flex items-center justify-center shrink-0">
                    <span className="text-[#74dff6] text-xs">✓</span>
                  </div>
                  <span className="text-white/80 text-sm">{perk}</span>
                </div>
              ))}
            </div>

            {/* Stripe checkout button */}
            <button
              onClick={handleCheckout}
              className="w-full bg-[#74dff6] text-[#212121] font-black text-base py-5 rounded-xl hover:bg-[#5dd4f0] active:scale-[0.98] transition-all duration-200 cursor-pointer tracking-wide"
            >
              Subscribe Now →
            </button>

            <p className="text-center text-white/25 text-xs mt-4">
              Secure checkout via Stripe · No hidden fees
            </p>
          </div>
        </div>
      </section>

      {/* WHAT'S INCLUDED */}
      <section className="px-6 md:px-16 py-20 border-t border-white/5">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-xs font-bold tracking-widest uppercase text-[#74dff6] mb-3 block">
              Every Month
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              What's In Your Box
            </h2>
            <p className="text-white/45 max-w-xl mx-auto leading-relaxed">
              Every element of the SORBO Discovery Box is intentional. We don't
              pad boxes with filler — if it's in there, it earned its spot.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {included.map((item) => (
              <div
                key={item.title}
                className="flex gap-5 bg-white/[0.03] border border-white/8 rounded-2xl p-7 hover:border-[#74dff6]/20 hover:bg-white/[0.05] transition-all duration-300"
              >
                <span className="text-3xl shrink-0 mt-0.5">{item.icon}</span>
                <div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-white/45 text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* THE SOURCING PHILOSOPHY */}
      <section className="px-6 md:px-16 py-20 border-t border-white/5">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#74dff6] mb-3 block">
              Our Standard
            </span>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              How We Pick What Goes In
            </h2>
            <p className="text-white/45 max-w-2xl mx-auto leading-relaxed">
              Every drink that lands in a SORBO Discovery Box passes through a
              two-part filter. If it fails any one of these, it doesn't make it
              in.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                num: "01",
                title: "It Has to Be Hard to Find",
                desc: "If you can walk into a 7-Eleven and grab it, it's not for us. We source things that require effort — import orders, direct brand relationships, regional exclusives, and micro-batch releases.",
              },
              {
                num: "02",
                title: "It Has to Be Worth Drinking",
                desc: "Obscure doesn't mean bad. We taste everything before it ships. If it isn't genuinely interesting to drink — regardless of how rare it is — it doesn't make the cut.",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="bg-white/[0.03] border border-white/8 rounded-2xl p-8 hover:border-[#74dff6]/20 transition-all duration-300 group"
              >
                <span className="text-5xl font-black text-[#74dff6]/15 group-hover:text-[#74dff6]/25 transition-colors block mb-4">
                  {item.num}
                </span>
                <h3 className="text-base font-bold mb-3">{item.title}</h3>
                <p className="text-white/45 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA REPEAT */}
      <section className="px-6 md:px-16 py-20 border-t border-white/5">
        <div className="max-w-2xl mx-auto text-center relative">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] rounded-full bg-[#74dff6]/6 blur-[90px] pointer-events-none" />
          <h2 className="relative text-3xl md:text-4xl font-black mb-4">
            Ready to Discover?
          </h2>
          <p className="relative text-white/45 mb-8 leading-relaxed">
            Join as a founding member and lock in $45.99/month before we open to
            the public.
          </p>
          <button
            onClick={handleCheckout}
            className="relative bg-[#74dff6] text-[#212121] font-black px-10 py-5 rounded-xl hover:bg-[#5dd4f0] active:scale-[0.98] transition-all duration-200 text-base cursor-pointer"
          >
            Subscribe Now — $45.99/mo →
          </button>
          <p className="relative text-white/25 text-xs mt-4">Free shipping</p>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 md:px-16 py-20 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-xs font-bold tracking-widest uppercase text-[#74dff6] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-black">
              Questions Answered
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className={`border rounded-xl overflow-hidden transition-all duration-200 ${openFaq === i ? "border-[#74dff6]/25 bg-[#74dff6]/5" : "border-white/8 bg-white/[0.02]"}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 bg-[#74dff6]/5 py-5 text-left cursor-pointer"
                >
                  <span className="font-semibold text-sm pr-4">{faq.q}</span>
                  <span
                    className={`text-[#74dff6] text-xl font-light transition-transform duration-200 shrink-0 ${openFaq === i ? "rotate-45" : ""}`}
                  >
                    +
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-white/55 text-sm leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
