import { BentoGrid, BentoGridItem } from '../ui/bento-grid';
import { Target, Users, Lightbulb, Shield, Zap, Heart, Award, Globe, TrendingUp, Rocket, Star, CheckCircle } from 'lucide-react';

const defaultValues = [
  {
    title: "Innovation First",
    description: "We constantly push boundaries and embrace cutting-edge technologies to deliver solutions that are ahead of their time. Our commitment to innovation drives us to explore new possibilities and challenge conventional thinking in everything we do.",
    icon: <Lightbulb className="w-12 h-12 text-blue-500" />,
    className: "md:col-span-2 min-h-[300px]"
  },
  {
    title: "Customer Excellence",
    description: "Every decision we make is centered around delivering exceptional value to our customers. We listen, adapt, and go above and beyond to ensure satisfaction and build lasting relationships based on trust and mutual success.",
    icon: <Heart className="w-12 h-12 text-pink-500" />,
    className: "md:col-span-1 min-h-[300px]"
  },
  {
    title: "Integrity & Trust",
    description: "Honesty and transparency form the foundation of everything we do. We build trust through consistent actions, ethical practices, and by always doing what's right, even when no one is watching.",
    icon: <Shield className="w-12 h-12 text-green-500" />,
    className: "md:col-span-1 min-h-[300px]"
  },
  {
    title: "Collaborative Spirit",
    description: "We believe the best results come from diverse perspectives working together. Our culture fosters open communication, mutual respect, and teamwork where every voice matters and collective success is celebrated.",
    icon: <Users className="w-12 h-12 text-blue-400" />,
    className: "md:col-span-2 min-h-[300px]"
  },
  {
    title: "Rapid Execution",
    description: "Speed matters in today's fast-paced world. We combine agility with precision to deliver results quickly without compromising quality, turning ideas into reality with remarkable efficiency.",
    icon: <Zap className="w-12 h-12 text-yellow-500" />,
    className: "md:col-span-1 min-h-[300px]"
  },
  {
    title: "Excellence in Quality",
    description: "We set the highest standards and never settle for mediocrity. Every product, service, and interaction reflects our unwavering commitment to quality and continuous improvement.",
    icon: <Award className="w-12 h-12 text-orange-500" />,
    className: "md:col-span-2 min-h-[300px]"
  },
  {
    title: "Global Perspective",
    description: "We think globally and act locally, understanding diverse markets and cultures. Our international mindset enables us to create solutions that resonate across borders and connect people worldwide.",
    icon: <Globe className="w-12 h-12 text-cyan-500" />,
    className: "md:col-span-1 min-h-[300px]"
  },
  {
    title: "Sustainable Growth",
    description: "We build for the long term with responsible practices that benefit our business, community, and planet. Growth is meaningful when it's sustainable, ethical, and creates positive impact for future generations.",
    icon: <TrendingUp className="w-12 h-12 text-emerald-500" />,
    className: "md:col-span-2 min-h-[300px]"
  },
  {
    title: "Bold Vision",
    description: "We dare to dream big and pursue ambitious goals that inspire and motivate. Our vision drives us forward, encouraging calculated risks and breakthrough thinking that shapes the future.",
    icon: <Rocket className="w-12 h-12 text-indigo-500" />,
    className: "md:col-span-1 min-h-[300px]"
  },
  {
    title: "Passion & Purpose",
    description: "We're driven by genuine passion for what we do and a clear sense of purpose. This energy fuels our creativity, resilience, and dedication to making a meaningful difference in the world.",
    icon: <Star className="w-12 h-12 text-rose-500" />,
    className: "md:col-span-1 min-h-[300px]"
  },
  {
    title: "Accountability",
    description: "We take ownership of our commitments and deliver on our promises. Accountability is embedded in our culture, ensuring transparency, reliability, and trust at every level of our organization.",
    icon: <CheckCircle className="w-12 h-12 text-teal-500" />,
    className: "md:col-span-2 min-h-[300px]"
  },
  {
    title: "Mission Driven",
    description: "Every action aligns with our core mission to create meaningful impact. We're purpose-led and results-focused, ensuring that our work contributes to a larger vision of positive transformation.",
    icon: <Target className="w-12 h-12 text-red-500" />,
    className: "md:col-span-1 min-h-[300px]"
  }
];

export function CoreValues({ values = defaultValues }) {
  return (
    <section className="relative mt-20 lg:mt-32 py-20 lg:py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-blue-50/20 dark:from-slate-950 dark:via-blue-950/30 dark:to-blue-950/20" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px'
        }} />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-blue-300/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '3s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20 lg:mb-24">
          <div className="inline-block mb-6">
            <span className="inline-flex items-center px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 dark:from-blue-900/30 dark:to-blue-900/30 dark:text-blue-300 border border-blue-200 dark:border-blue-800 shadow-lg">
              Our Foundation
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold text-foreground mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700 dark:from-slate-100 dark:via-blue-100 dark:to-blue-300">
            Core Values That Define Us
          </h2>
          <p className="text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            These principles are the compass that guides our decisions, shapes our culture, and defines who we are as an organization
          </p>
        </div>
        
        {/* Bento Grid */}
        <BentoGrid className="max-w-7xl mx-auto gap-6">
          {values.map((item, i) => (
            <BentoGridItem
              key={i}
              title={<span className="text-2xl font-bold">{item.title}</span>}
              description={<span className="text-base leading-relaxed">{item.description}</span>}
              header={
                <div className="flex justify-center items-center h-full p-8 group-hover:scale-110 transition-transform duration-500">
                  <div className="relative">
                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-400 to-cyan-500 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500" />
                    {/* Icon Container */}
                    <div className="relative bg-white/80 dark:bg-slate-800/80 p-6 rounded-2xl shadow-xl backdrop-blur-sm">
                      {item.icon}
                    </div>
                  </div>
                </div>
              }
              className={`${item.className} group hover:shadow-2xl transition-all duration-500 border-2 hover:border-blue-500/50 dark:hover:border-blue-400/50 backdrop-blur-sm bg-white/70 dark:bg-slate-900/70 hover:-translate-y-2`}
            />
          ))}
        </BentoGrid>
        
        {/* Stats Section */}
        <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-blue-400 mb-2">12+</div>
            <div className="text-sm lg:text-base text-muted-foreground font-medium">Core Principles</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 mb-2">100%</div>
            <div className="text-sm lg:text-base text-muted-foreground font-medium">Commitment</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">∞</div>
            <div className="text-sm lg:text-base text-muted-foreground font-medium">Impact</div>
          </div>
          <div className="text-center">
            <div className="text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-2">1</div>
            <div className="text-sm lg:text-base text-muted-foreground font-medium">United Team</div>
          </div>
        </div>
        
        {/* Bottom Accent */}
        <div className="mt-20 flex justify-center">
          <div className="h-1.5 w-40 bg-gradient-to-r from-transparent via-blue-500 to-transparent rounded-full shadow-lg shadow-blue-500/50" />
        </div>
      </div>
    </section>
  );
}