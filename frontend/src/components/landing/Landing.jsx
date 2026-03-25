import Navbar from "../Navbar";
import HeroWithVideo from "./HeroSection"
import { useState, useEffect } from "react";
import { Mission } from "./Mission";
import { CoreValues } from "./CoreValues";
import { Partners } from "./Partners";
import { Testimonials } from "./Testimonials";
import { coreValuesData } from "./data";
import { partnersData } from "./data";
import { testimonialsData } from "./data";
import Footer from "./Footer";
export default function Landing() {
  const [headerBgOpacity, setHeaderBgOpacity] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const heroHeight = window.innerHeight;
      const scrolled = window.scrollY;
      // 0 while on hero, 1 when scrolled past it
      const opacity = scrolled > heroHeight ? 1 : 0;
      setHeaderBgOpacity(opacity);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="relative">
        <div className="relative h-screen w-full">
          <HeroWithVideo />
        </div>

        <div className="fixed top-0 left-0 right-0 z-50">
          <Navbar bgOpacity={headerBgOpacity} />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Mission />
        </div>
        <CoreValues values={coreValuesData} />
        <Partners partners={partnersData} />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Testimonials testimonials={testimonialsData} />
        </div>
        <Footer />
      </div>
    </>
  );
}
