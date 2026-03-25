// components/about-us/Partners.tsx

// import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
// import React from "react";
import { motion } from "framer-motion";
// From Aceternity UI

export function Partners() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  

  const partners = [
    { name: "QuantumLeap" },
    { name: "InnovateHub" },
    { name: "NextGen Solutions" },
    { name: "Apex Dynamics" },
    { name: "Stellar Tech" },
    { name: "Momentum AI" },
  ];

 

  const partnerLogos = partners.map((p) => ({ name: p.name }));
  return (
    <motion.div
      className="mt-20 lg:mt-24 w-full"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="relative z-10 overflow-hidden bg-brand-tint/60 py-16 lg:py-20 shadow-inner">
        {/* New Grid Background */}
        <div className="absolute inset-0 z-0 opacity-10 text-brand-primary">
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
            <defs>
              <pattern
                id="grid"
                width="80"
                height="80"
                patternUnits="userSpaceOnUse"
              >
                <path
                  d="M 80 0 L 0 0 0 80"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h3
            variants={itemVariants}
            className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8"
          >
            Trusted by Industry Leaders
          </motion.h3>
        </div>
        <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
          <motion.div
            className="flex items-center gap-16 pr-16"
            animate={{ x: ["0%", "-100%"] }}
            transition={{
              ease: "linear",
              duration: 25,
              repeat: Infinity,
            }}
          >
            {[...partners, ...partners].map((partner, index) => (
              <div
                key={index}
                className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors"
                style={{ minWidth: "160px" }}
              >
                <span className="text-2xl font-semibold tracking-wider text-center">
                  {partner.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
