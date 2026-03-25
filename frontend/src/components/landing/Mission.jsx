import { useState,useRef } from 'react';
import { gsap } from "gsap";
import { useSpring, animated, useTrail, config, useInView } from '@react-spring/web';
import { CardBody, CardContainer, CardItem } from '../ui/3d-card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { TextGenerateEffect } from '../ui/text-generate-effect';
import { Target, Rocket, Users, Globe, Lightbulb, Award } from 'lucide-react';

const keyPillars = [
  {
    title: "Innovation",
    description: "Pushing boundaries daily with cutting-edge technology and creative solutions that redefine what's possible.",
    icon: <Lightbulb className="w-8 h-8 text-blue-600" />
  },
  {
    title: "Collaboration",
    description: "Together we achieve more through teamwork, open communication, and shared vision for success.",
    icon: <Users className="w-8 h-8 text-purple-600" />
  },
  {
    title: "Global Impact",
    description: "Worldwide solutions that transcend borders and create meaningful change across continents.",
    icon: <Globe className="w-8 h-8 text-pink-600" />
  },
  {
    title: "Excellence",
    description: "Quality in every detail, ensuring that everything we deliver exceeds expectations.",
    icon: <Award className="w-8 h-8 text-orange-600" />
  }
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "50+", label: "Countries Reached" },
  { value: "98%", label: "Client Satisfaction" }
];

export function Mission() {
  // Header animation
  const [headerRef, headerInView] = useInView({ once: true });
  const headerSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-30px)' },
    to: { 
      opacity: headerInView ? 1 : 0, 
      transform: headerInView ? 'translateY(0px)' : 'translateY(-30px)' 
    },
    config: config.molasses,
  });

  // Grid items animation
  const [gridRef, gridInView] = useInView({ once: true });
  const gridTrail = useTrail(2, {
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { 
      opacity: gridInView ? 1 : 0, 
      transform: gridInView ? 'translateY(0px)' : 'translateY(50px)' 
    },
    config: config.gentle,
  });

  // Pillars animation
  const [pillarsRef, pillarsInView] = useInView({ once: true });
  const pillarsTrail = useTrail(keyPillars.length, {
    from: { opacity: 0, transform: 'scale(0.8) translateY(30px)' },
    to: { 
      opacity: pillarsInView ? 1 : 0, 
      transform: pillarsInView ? 'scale(1) translateY(0px)' : 'scale(0.8) translateY(30px)' 
    },
    config: config.wobbly,
  });

  // Vision card animation
  const [visionRef, visionInView] = useInView({ once: true });
  const visionSpring = useSpring({
    from: { opacity: 0, transform: 'scale(0.95) translateY(40px)' },
    to: { 
      opacity: visionInView ? 1 : 0, 
      transform: visionInView ? 'scale(1) translateY(0px)' : 'scale(0.95) translateY(40px)' 
    },
    config: config.slow,
  });

  // Stats animation
  const statsTrail = useTrail(stats.length, {
    from: { opacity: 0, transform: 'translateY(20px)' },
    to: { 
      opacity: visionInView ? 1 : 0, 
      transform: visionInView ? 'translateY(0px)' : 'translateY(20px)' 
    },
    delay: 400,
    config: config.gentle,
  });

  // Floating orbs animation
  const orb1Spring = useSpring({
    from: { transform: 'translate(0px, 0px) scale(1)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translate(20px, -20px) scale(1.1)' });
        await next({ transform: 'translate(-10px, 10px) scale(0.95)' });
        await next({ transform: 'translate(0px, 0px) scale(1)' });
      }
    },
    config: { duration: 8000 },
  });

  const orb2Spring = useSpring({
    from: { transform: 'translate(0px, 0px) scale(1)' },
    to: async (next) => {
      while (true) {
        await next({ transform: 'translate(-15px, 15px) scale(1.05)' });
        await next({ transform: 'translate(10px, -10px) scale(0.9)' });
        await next({ transform: 'translate(0px, 0px) scale(1)' });
      }
    },
    config: { duration: 7000 },
  });

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20" />
      
      {/* Animated Grid */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating Orbs with Animation */}
      <animated.div 
        style={orb1Spring}
        className="absolute top-20 right-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl" 
      />
      <animated.div 
        style={orb2Spring}
        className="absolute bottom-20 left-10 w-80 h-80 bg-purple-400/20 rounded-full blur-3xl" 
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <animated.div 
          ref={headerRef}
          style={headerSpring}
          className="text-center mb-16 lg:mb-20"
        >
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-purple-100 text-blue-800 border border-blue-200 shadow-lg">
              <Target className="w-4 h-4" />
              Our Purpose
            </span>
          </div>
          <h2 className="text-4xl lg:text-6xl font-bold text-foreground mb-4 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-purple-900">
            <TextGenerateEffect words="Mission & Vision" className="text-4xl lg:text-6xl font-bold text-black" />
          </h2>
          <p className="text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto">
            Driving innovation and creating meaningful impact through technology
          </p>
        </animated.div>

        {/* Main Content Grid */}
        <div ref={gridRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* 3D Card Image */}
          <animated.div style={gridTrail[0]}>
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-full h-auto rounded-2xl p-8 border-2 border-slate-200 bg-white hover:shadow-2xl transition-shadow duration-500">
                <CardItem translateZ="100" className="w-full">
                  <div className="relative rounded-xl overflow-hidden">
                    <img
                      src="https://placehold.co/600x450/1e40af/ffffff?text=Our+Workspace"
                      alt="Our collaborative workspace"
                      className="rounded-xl w-full h-auto"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  </div>
                </CardItem>
                <CardItem translateZ="50" className="absolute top-8 right-8">
                  <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                    <p className="text-sm font-semibold text-foreground">Est. 2015</p>
                  </div>
                </CardItem>
                <div className="absolute top-4 right-4 w-16 h-16 bg-blue-500/10 rounded-full blur-xl" />
                <div className="absolute bottom-4 left-4 w-20 h-20 bg-purple-500/10 rounded-full blur-xl" />
              </CardBody>
            </CardContainer>
          </animated.div>

          {/* Mission Content */}
          <animated.div style={gridTrail[1]} className="flex flex-col gap-8">
            <div>
              <h3 className="text-3xl lg:text-4xl font-bold text-foreground mb-6 flex items-center gap-3">
                <Rocket className="w-10 h-10 text-blue-600" />
                Our Mission
              </h3>
              <p className="text-muted-foreground text-lg lg:text-xl leading-relaxed">
                To empower businesses through state-of-the-art technology, intuitive design, and a relentless commitment to excellence. We create digital experiences that are not only functional but also inspiring, transforming challenges into opportunities and ideas into reality.
              </p>
            </div>

            {/* CEO Quote Card with 3D Effect */}
            <CardContainer className="inter-var">
              <CardBody className="relative group/card w-full h-auto rounded-2xl p-6 border-2 border-slate-200 bg-white">
                <div className="flex items-start gap-6">
                  <CardItem translateZ="60">
                    <Avatar className="w-20 h-20 border-4 border-blue-500 shadow-lg flex-shrink-0">
                      <AvatarImage src="https://placehold.co/100x100/4D9FFF/FFFFFF?text=CEO" alt="CEO" />
                      <AvatarFallback className="bg-blue-600 text-white text-xl font-bold">JD</AvatarFallback>
                    </Avatar>
                  </CardItem>
                  <div className="flex-1">
                    <CardItem translateZ="40" className="mb-4">
                      <svg className="w-8 h-8 text-blue-500/30" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </CardItem>
                    <CardItem translateZ="50">
                      <p className="text-muted-foreground text-lg italic leading-relaxed mb-4">
                        Innovation is the heartbeat of progress. Our goal is to build a future where technology amplifies human potential and creates opportunities for everyone to thrive.
                      </p>
                    </CardItem>
                    <CardItem translateZ="30">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-foreground text-lg">Jane Doe</p>
                          <p className="text-sm text-muted-foreground">Chief Executive Officer</p>
                        </div>
                        <div className="h-12 w-px bg-gradient-to-b from-transparent via-slate-300 to-transparent" />
                        <div className="text-right">
                          <p className="text-sm font-semibold text-blue-600">Leadership</p>
                          <p className="text-xs text-muted-foreground">Since 2015</p>
                        </div>
                      </div>
                    </CardItem>
                  </div>
                </div>
              </CardBody>
            </CardContainer>
          </animated.div>
        </div>

        {/* Key Pillars with Hover Effect */}
        <div
          ref={pillarsRef}
          className="mb-0 relative py-20"
        >
          {/* Dotted Pattern Background */}
          <div className="absolute inset-0 opacity-100 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.8) 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0'
          }} />
          
          {/* Fade effects */}
          <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
          <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-white to-transparent pointer-events-none" />
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-foreground mb-12 relative z-10">
            What Drives Us Forward
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 relative z-10">
            {pillarsTrail.map((style, idx) => {
              const pillar = keyPillars[idx];
              return (
                <AnimatedPillarCard key={idx} style={style} pillar={pillar} />
              );
            })}
          </div>
        </div>

        {/* Vision Statement with 3D Card */}
        <animated.div
          ref={visionRef}
          style={visionSpring}
          className="relative py-20 -my-20 -mb-10"
        >
          {/* Dotted Pattern Background */}
          <div className="absolute inset-0 opacity-100 pointer-events-none" style={{
            backgroundImage: `radial-gradient(circle, rgba(59, 130, 246, 0.8) 2px, transparent 2px)`,
            backgroundSize: '40px 40px',
            backgroundPosition: '0 0'
          }} />
          
          <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none" />
          
          <CardContainer className="inter-var w-full relative z-10">
            <CardBody className="relative group/card w-full h-auto rounded-3xl p-12 lg:p-16 bg-gradient-to-r from-blue-600 to-blue-400 text-white overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />
              
              <div className="relative z-10 text-center max-w-4xl mx-auto">
                <CardItem translateZ="50" className="mb-6">
                  <h3 className="text-3xl lg:text-5xl font-bold">Our Vision for Tomorrow</h3>
                </CardItem>
                <CardItem translateZ="40" className="mb-8">
                  <p className="text-xl lg:text-2xl leading-relaxed opacity-95">
                    We envision a world where cutting-edge technology seamlessly integrates with human creativity, enabling businesses to reach their full potential and create lasting positive impact on society.
                  </p>
                </CardItem>
                <CardItem translateZ="60">
                  <div className="flex flex-wrap justify-center gap-8 text-center">
                    {statsTrail.map((style, idx) => {
                      const stat = stats[idx];
                      return (
                        <animated.div key={idx} style={style}>
                          <div className="text-4xl lg:text-5xl font-bold mb-2">{stat.value}</div>
                          <div className="text-lg opacity-90">{stat.label}</div>
                        </animated.div>
                      );
                    })}
                    <animated.div style={statsTrail[0]} className="hidden sm:block w-px bg-white/30 self-stretch" />
                    <animated.div style={statsTrail[1]} className="hidden sm:block w-px bg-white/30 self-stretch" />
                  </div>
                </CardItem>
              </div>
            </CardBody>
          </CardContainer>
        </animated.div>
      </div>
    </section>
  );
}

function AnimatedPillarCard({ style, pillar }) {
  // We still use react-spring for the card's main hover effect (lift and shadow)
  const [isHovered, setIsHovered] = useState(false);
  const hoverSpring = useSpring({
    transform: isHovered ? 'translateY(-8px) scale(1.02)' : 'translateY(0px) scale(1)',
    boxShadow: isHovered
      ? '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)'
      : '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
    config: config.wobbly,
  });

  // ✨ 1. Create a ref to target the icon's DOM element
  const iconRef = useRef(null);

  // ✨ 2. Create GSAP-powered event handlers
  const handleMouseEnter = () => {
    setIsHovered(true);
    // Animate TO the hovered state
    gsap.to(iconRef.current, {
      y: -4,          // translateY
      scale: 1.2,
      rotate: 10,
      filter: 'drop-shadow(0 3px 5px rgba(0, 0, 0, 0.15))',
      duration: 0.5,
      ease: 'elastic.out(1, 0.75)', // A wobbly, bouncy ease
    });
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    // Animate back TO the original state
    gsap.to(iconRef.current, {
      y: 0,
      scale: 1,
      rotate: 0,
      filter: 'drop-shadow(0 0px 0px rgba(0, 0, 0, 0))',
      duration: 0.3,
      ease: 'power2.out',
    });
  };

  return (
    <animated.div
      style={style}
      className="relative group block p-2 h-full w-full"
      // ✨ 3. Use the new GSAP handlers
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <animated.div
        style={hoverSpring}
        className="rounded-2xl h-full w-full p-6 overflow-hidden bg-white border-2 border-slate-200 group-hover:border-blue-500 relative z-20 transition-colors duration-300"
      >
        <div className="relative z-50">
          {/* ✨ 4. Apply the ref to the icon wrapper div.
                 Note: We changed animated.div to a regular div since GSAP is handling it now. */}
          <div ref={iconRef} className="flex justify-center mb-4">
            {pillar.icon}
          </div>
          <h4 className="text-foreground font-bold tracking-wide text-xl text-center mb-4">
            {pillar.title}
          </h4>
          <p className="text-muted-foreground tracking-wide leading-relaxed text-sm text-center">
            {pillar.description}
          </p>
        </div>
      </animated.div>
    </animated.div>
  );
}