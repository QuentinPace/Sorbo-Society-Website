import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Lightbulb, TrendingUp, Star } from 'lucide-react';

// Import the required shadcn/ui components
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';


// Main About Us Section Component
export default function AboutUsSection() {

  // Animation variants for Framer Motion
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

  const coreValues = [
    {
      icon: <Users size={32} className="text-primary" />,
      title: 'Customer-Centric',
      description: 'We prioritize our clients, ensuring their success is at the core of our solutions.',
    },
    {
      icon: <Lightbulb size={32} className="text-primary" />,
      title: 'Innovation',
      description: 'We constantly push boundaries, leveraging technology to create what’s next.',
    },
    {
      icon: <Target size={32} className="text-primary" />,
      title: 'Integrity',
      description: 'We operate with transparency and honesty, building trust with every interaction.',
    },
    {
      icon: <TrendingUp size={32} className="text-primary" />,
      title: 'Excellence',
      description: 'We are committed to the highest standards of quality in everything we do.',
    },
  ];

  const partners = [
    { name: 'QuantumLeap' },
    { name: 'InnovateHub' },
    { name: 'NextGen Solutions' },
    { name: 'Apex Dynamics' },
    { name: 'Stellar Tech' },
    { name: 'Momentum AI' },
  ];

  const testimonials = [
      {
        name: 'Sarah L.',
        role: 'CEO of InnovateHub',
        avatar: 'https://placehold.co/100x100/C8F2E9/0A2540?text=SL',
        stars: 5,
        review: "Working with this team was a game-changer for our business. Their dedication and expertise delivered results beyond our expectations. Highly recommended!"
      },
      {
        name: 'Michael B.',
        role: 'CTO at QuantumLeap',
        avatar: 'https://placehold.co/100x100/D4C3F0/0A2540?text=MB',
        stars: 5,
        review: "The level of professionalism and technical skill is unmatched. They tackled complex challenges with ease and were a pleasure to collaborate with."
      },
      {
        name: 'Jessica T.',
        role: 'Marketing Director, Apex Dynamics',
        avatar: 'https://placehold.co/100x100/C9B7E8/0A2540?text=JT',
        stars: 5,
        review: "From concept to launch, the process was seamless. They understood our vision perfectly and brought it to life with creativity and precision."
      }
    ];

  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-brand-tint/50 to-white py-16 sm:py-20 lg:py-24">
      {/* Background Dot Pattern (limited height and fade out) */}
      <div className="absolute inset-x-0 top-0 h-[calc(100vh_+_300px)] z-0 opacity-20 pointer-events-none"
           style={{
             maskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)',
             WebkitMaskImage: 'linear-gradient(to bottom, black 0%, black 80%, transparent 100%)'
           }}>
          <svg className="w-full h-full">
              <defs>
                  <pattern id="dot-pattern" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1" className="text-brand-primary/50" fill="currentColor"></circle>
                  </pattern>
              </defs>
              <rect x="0" y="0" width="100%" height="100%" fill="url(#dot-pattern)"></rect>
          </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={itemVariants}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-foreground tracking-tight">
            Forging the Future, One Line of Code at a Time
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground">
            We are a team of passionate developers, designers, and strategists dedicated to building innovative solutions that solve real-world problems.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 lg:mt-16 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants} className="relative">
            <motion.img
              src="https://placehold.co/600x450/e2e8f0/0a2540?text=Our+Workspace"
              alt="Our collaborative workspace"
              className="rounded-xl shadow-2xl w-full h-auto"
              whileHover={{ scale: 1.03 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
             {/* Gradient Overlay for image */}
            <div className="absolute inset-0 rounded-xl bg-gradient-to-t from-black/10 to-transparent" />
          </motion.div>

          <motion.div variants={itemVariants} className="flex flex-col gap-6">
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground">Our Mission</h3>
            <p className="text-muted-foreground text-base sm:text-lg">
              To empower businesses and individuals through state-of-the-art technology, intuitive design, and a relentless commitment to excellence. We believe in creating digital experiences that are not only functional but also inspiring and enjoyable.
            </p>
            <div className="bg-card border rounded-lg p-4 mt-4">
                <div className="flex items-start sm:items-center gap-4">
                    <Avatar className="w-16 h-16 border-2 border-primary">
                        <AvatarImage src="https://placehold.co/100x100/4D9FFF/FFFFFF?text=CEO" alt="CEO" />
                        <AvatarFallback>JD</AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                        <p className="text-muted-foreground italic">"Innovation is the heartbeat of progress. Our goal is to build a future where technology amplifies human potential, creating opportunities for everyone."</p>
                        <div className="mt-2 text-right">
                           <p className="font-bold text-foreground">Jane Doe, CEO</p>
                        </div>
                    </div>
                </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Core Values Section - Full Width */}
      <motion.div
        className="mt-16 lg:mt-20 w-full"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={containerVariants}
      >
        <div className="relative z-10 overflow-hidden py-12 lg:py-16 shadow-inner">
          {/* Layered Wave Background */}
          <div className="absolute inset-0 z-0">
            <div className="absolute bottom-0 left-0 w-full h-full text-brand-tint/80 opacity-60">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="1" d="M0,192L48,176C96,160,192,128,288,133.3C384,139,480,181,576,186.7C672,192,768,160,864,144C960,128,1056,128,1152,144C1248,160,1344,192,1392,208L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
             <div className="absolute bottom-0 left-0 w-full h-full text-brand-primary/20 opacity-40">
                <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" fillOpacity="1" d="M0,256L48,240C96,224,192,192,288,176C384,160,480,160,576,181.3C672,203,768,245,864,250.7C960,256,1056,224,1152,192C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-center text-foreground">
                Our Core Values
              </motion.h3>
              <motion.div
                variants={containerVariants}
                className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {coreValues.map((value, index) => (
                  <motion.div key={index} variants={itemVariants}>
                    <Card className="text-center h-full hover:shadow-lg transition-shadow duration-300 bg-white/70 backdrop-blur-xl">
                      <CardHeader className="items-center">
                        {value.icon}
                        <CardTitle className="mt-4">{value.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground text-sm">{value.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Partners Section - Full Width */}
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
                        <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                            <path d="M 80 0 L 0 0 0 80" fill="none" stroke="currentColor" strokeWidth="2"/>
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#grid)" />
                </svg>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-8">
                Trusted by Industry Leaders
              </motion.h3>
            </div>
            <div className="relative w-full overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_48px,_black_calc(100%-48px),transparent_100%)]">
                <motion.div
                  className="flex items-center gap-16 pr-16"
                  animate={{ x: ['0%', '-100%'] }}
                  transition={{
                      ease: 'linear',
                      duration: 25,
                      repeat: Infinity,
                  }}
                >
                  {[...partners, ...partners].map((partner, index) => (
                    <div key={index} className="flex-shrink-0 text-muted-foreground hover:text-foreground transition-colors" style={{ minWidth: '160px' }}>
                      <span className="text-2xl font-semibold tracking-wider text-center">{partner.name}</span>
                    </div>
                  ))}
                </motion.div>
            </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Customer Reviews Section */}
        <motion.div
          className="mt-20 lg:mt-24 relative overflow-hidden z-10 bg-brand-tint/30 rounded-xl p-8 lg:p-12 shadow-inner"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
        >
          {/* Angled Lines Background */}
          <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="lines" width="80" height="80" patternTransform="rotate(135)" patternUnits="userSpaceOnUse">
                    <rect width="40" height="80" fill="currentColor" className="text-brand-primary/30" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#lines)"/>
            </svg>
          </div>
            
          <div className="relative z-10">
            <motion.h3 variants={itemVariants} className="text-2xl sm:text-3xl font-bold text-center text-foreground mb-12">
              What Our Clients Say
            </motion.h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div key={index} variants={itemVariants}>
                  <Card className="h-full flex flex-col justify-between hover:shadow-xl transition-shadow duration-300 bg-white/70 backdrop-blur-xl">
                    <CardContent className="pt-6">
                      <div className="flex items-center mb-4">
                        {Array.from({ length: testimonial.stars }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-muted-foreground italic">"{testimonial.review}"</p>
                    </CardContent>
                    <CardHeader className="flex-row items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback>{testimonial.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>
                      <div>
                        <CardTitle className="text-base">{testimonial.name}</CardTitle>
                        <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

