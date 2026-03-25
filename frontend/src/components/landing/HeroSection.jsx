import React, { useState, useEffect } from 'react';
import { useSpring, animated, useTrail, config } from '@react-spring/web';
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = "Warsaw Chemical";
const tagline = "Discover the future of technology with our cutting-edge platforms. We build innovative solutions that drive progress and inspire change.";

// Floating particles data
const particles = [
  { top: '10%', left: '10%', size: 'w-2 h-2', delay: 0, color: 'bg-white' },
  { top: '32%', right: '20%', size: 'w-1.5 h-1.5', delay: 500, color: 'bg-blue-300' },
  { top: '33%', left: '25%', size: 'w-1 h-1', delay: 1000, color: 'bg-white' },
  { bottom: '32%', right: '33%', size: 'w-2 h-2', delay: 1500, color: 'bg-purple-300' },
  { bottom: '20%', left: '33%', size: 'w-1.5 h-1.5', delay: 2000, color: 'bg-white' },
  { top: '50%', right: '10%', size: 'w-1.5 h-1.5', delay: 2500, color: 'bg-pink-300' },
  { bottom: '50%', left: '15%', size: 'w-1 h-1', delay: 3000, color: 'bg-cyan-300' },
];

const buttons = [
  { text: 'Get Started', primary: true },
  { text: 'Learn More', primary: false }
];

export default function HeroWithVideo() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Track mouse movement for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Parallax effect for spotlight
  const spotlightSpring = useSpring({
    transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
    config: config.slow,
  });

  // Main content animation
  const contentSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(50px)' },
    to: { opacity: 1, transform: 'translateY(0px)' },
    delay: 300,
    config: config.molasses,
  });

  // Trail animation for buttons
  const trail = useTrail(buttons.length, {
    from: { opacity: 0, transform: 'translateY(20px) scale(0.9)' },
    to: { opacity: 1, transform: 'translateY(0px) scale(1)' },
    delay: 1500,
    config: config.gentle,
  });

  // Particle animations
  const particleTrail = useTrail(particles.length, {
    from: { opacity: 0, scale: 0 },
    to: { opacity: 0.2, scale: 1 },
    delay: 500,
    config: { ...config.wobbly, duration: 1000 },
  });

  // Grid animation
  const gridSpring = useSpring({
    from: { opacity: 0 },
    to: { opacity: 0.1 },
    delay: 200,
    config: config.slow,
  });

  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src="../../\public\Wc-Hero-Section-Video-Updated-3.mp4" type="video/mp4" />
      </video>

      {/* Base Dark Overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Gradient Overlay - Dark Bottom */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/60" />

      {/* Radial Gradient - Center Spotlight with Parallax */}
      <animated.div
        className="absolute inset-0"
        style={{
          background: "radial-gradient(circle at 50% 50%, rgba(59, 130, 246, 0.15) 0%, rgba(59, 130, 246, 0) 50%, transparent 100%)",
          ...spotlightSpring,
        }}
      />

      {/* Animated Grid Pattern */}
      <animated.div className="absolute inset-0" style={gridSpring}>
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(255,255,255,.05) 25%, rgba(255,255,255,.05) 26%, transparent 27%, transparent 74%, rgba(255,255,255,.05) 75%, rgba(255,255,255,.05) 76%, transparent 77%, transparent)`,
            backgroundSize: "50px 50px",
          }}
        />
      </animated.div>

      {/* Floating Particles with Trail Animation */}
      <div className="absolute inset-0">
        {particleTrail.map((style, index) => {
          const particle = particles[index];
          const floatAnimation = useSpring({
            from: { transform: 'translateY(0px)' },
            to: async (next) => {
              while (true) {
                await next({ transform: 'translateY(-20px)' });
                await next({ transform: 'translateY(0px)' });
              }
            },
            config: { duration: 3000 + index * 500 },
          });

          return (
            <animated.div
              key={index}
              className={`absolute ${particle.size} ${particle.color} rounded-full`}
              style={{
                top: particle.top,
                left: particle.left,
                right: particle.right,
                bottom: particle.bottom,
                opacity: style.opacity,
                transform: style.scale.to(s => `scale(${s})`),
                ...floatAnimation,
              }}
            />
          );
        })}
      </div>

      {/* Vignette Effect */}
      <div
        className="absolute inset-0 shadow-2xl pointer-events-none"
        style={{
          boxShadow: "inset 0 0 120px rgba(0, 0, 0, 0.5)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white px-4">
        <animated.div style={contentSpring} className="text-center max-w-4xl">
          <div className="mb-4">
            <TextGenerateEffect 
              words={words} 
              className="text-6xl md:text-8xl font-bold drop-shadow-lg text-white"
            />
          </div>
          <div className="mb-8">
            <TextGenerateEffect 
              words={tagline} 
              className="text-lg md:text-xl drop-shadow-md max-w-2xl mx-auto text-white"
            />
          </div>
          
          {/* Animated Buttons */}
          <div className="flex justify-center gap-4 flex-wrap">
            {trail.map((style, index) => {
              const button = buttons[index];
              const [isHovered, setIsHovered] = useState(false);
              
              const hoverSpring = useSpring({
                transform: isHovered ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0px)',
                boxShadow: isHovered 
                  ? '0 20px 25px -5px rgba(0, 0, 0, 0.3), 0 10px 10px -5px rgba(0, 0, 0, 0.2)'
                  : '0 10px 15px -3px rgba(0, 0, 0, 0.2), 0 4px 6px -2px rgba(0, 0, 0, 0.1)',
                config: config.wobbly,
              });

              return (
                <animated.button
                  key={index}
                  style={{ ...style, ...hoverSpring }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                  className={`px-8 py-4 font-semibold rounded-lg transition-all duration-300 ${
                    button.primary
                      ? 'bg-blue-600 text-white hover:bg-blue-700'
                      : 'bg-transparent border-2 border-white text-white hover:bg-white hover:text-black'
                  }`}
                >
                  {button.text}
                </animated.button>
              );
            })}
          </div>

          {/* Scroll Indicator */}
        </animated.div>
      </div>
          <AnimatedScrollIndicator />
    </div>
  );
}

// Scroll Indicator Component
function AnimatedScrollIndicator() {
  const scrollSpring = useSpring({
    from: { opacity: 0, transform: 'translateY(-20px)' },
    to: async (next) => {
      await next({ opacity: 1, transform: 'translateY(0px)' });
      while (true) {
        await next({ transform: 'translateY(10px)' });
        await next({ transform: 'translateY(0px)' });
      }
    },
    delay: 2000,
    config: { duration: 1500 },
  });

  return (
    <animated.div
      style={scrollSpring}
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/60"
    >
      <span className="text-sm font-medium">Scroll to explore</span>
      <div className="w-6 h-10 border-2 border-white/40 rounded-full flex items-start justify-center p-2">
        <div className="w-1.5 h-3 bg-white/60 rounded-full" />
      </div>
    </animated.div>
  );
}