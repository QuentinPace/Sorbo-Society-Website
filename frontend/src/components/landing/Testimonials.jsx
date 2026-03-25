import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { InfiniteMovingCards } from '../ui/infinite-moving-cards';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';
import { Star, Quote, TrendingUp, Award, Heart, Zap } from 'lucide-react';

const testimonials = [
  {
    quote: "Working with this team has been absolutely transformative for our business. Their innovative approach and dedication to excellence exceeded every expectation. The results speak for themselves - we've seen a 300% increase in engagement and our revenue has doubled.",
    name: "Sarah Mitchell",
    title: "CEO at TechVision Inc.",
    image: "https://placehold.co/100x100/3b82f6/ffffff?text=SM",
    rating: 5,
    company: "TechVision Inc.",
    metric: "+300% Growth"
  },
  {
    quote: "I've worked with many agencies, but none compare to the level of professionalism and creativity this team brings. They don't just deliver projects - they deliver experiences. Our brand has never looked better, and our customers can't stop talking about it.",
    name: "Michael Chen",
    title: "Founder & Creative Director",
    image: "https://placehold.co/100x100/3b82f6/ffffff?text=MC",
    rating: 5,
    company: "Design Co.",
    metric: "10x ROI"
  },
  {
    quote: "Exceptional quality and unmatched service. From day one, they understood our vision and brought it to life in ways we couldn't have imagined. The attention to detail and commitment to our success has been remarkable. This partnership has been a game-changer.",
    name: "Emily Rodriguez",
    title: "Marketing Director",
    image: "https://placehold.co/100x100/3b82f6/ffffff?text=ER",
    rating: 5,
    company: "Global Brands",
    metric: "$2M+ Revenue"
  },
  {
    quote: "The impact on our business has been phenomenal. Not only did they deliver ahead of schedule, but the quality of work was outstanding. Our conversion rates have skyrocketed, and we've gained a competitive edge in our market. Truly world-class.",
    name: "James Anderson",
    title: "VP of Operations",
    image: "https://placehold.co/100x100/3b82f6/ffffff?text=JA",
    rating: 5,
    company: "Enterprise Solutions",
    metric: "+450% Conversions"
  },
  {
    quote: "Innovation meets execution. This team has redefined what's possible for our platform. Their technical expertise and strategic thinking have positioned us as industry leaders. The seamless collaboration and results-driven approach are unmatched.",
    name: "Alexandra Foster",
    title: "Product Lead",
    image: "https://placehold.co/100x100/3b82f6/ffffff?text=AF",
    rating: 5,
    company: "InnovateTech",
    metric: "Industry Leader"
  },
  {
    quote: "From concept to completion, every interaction was smooth and professional. They anticipated our needs, solved problems before they arose, and delivered a product that has transformed how we do business. Our team and customers are thrilled.",
    name: "David Park",
    title: "Co-Founder",
    image: "https://placehold.co/100x100/3b82f6/ffffff?text=DP",
    rating: 5,
    company: "StartupHub",
    metric: "5-Star Launch"
  }
];

const stats = [
  { icon: <TrendingUp className="w-6 h-6" />, value: "500+", label: "Happy Clients", color: "from-blue-500 to-cyan-500" },
  { icon: <Award className="w-6 h-6" />, value: "98%", label: "Satisfaction Rate", color: "from-blue-600 to-blue-400" },
  { icon: <Heart className="w-6 h-6" />, value: "1000+", label: "Projects Delivered", color: "from-cyan-500 to-blue-500" },
  { icon: <Zap className="w-6 h-6" />, value: "24/7", label: "Support Available", color: "from-blue-500 to-indigo-500" }
];

export function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  return (
    <section className="relative py-20 lg:py-32 overflow-hidden bg-white">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50/30 to-blue-50/20" />
      
      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(0deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent),
                          linear-gradient(90deg, transparent 24%, rgba(0,0,0,.05) 25%, rgba(0,0,0,.05) 26%, transparent 27%, transparent 74%, rgba(0,0,0,.05) 75%, rgba(0,0,0,.05) 76%, transparent 77%, transparent)`,
          backgroundSize: '60px 60px',
          animation: 'grid-move 20s linear infinite'
        }} />
      </div>
      
      {/* Floating Orbs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-400/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-blue-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-cyan-400/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div 
          className="text-center mb-16 lg:mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-block mb-6">
            <span className="inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold bg-gradient-to-r from-blue-100 to-blue-50 text-blue-800 border border-blue-200 shadow-lg">
              <Star className="w-4 h-4 fill-yellow-500 text-yellow-500" />
              Client Success Stories
            </span>
          </div>
          <h2 className="text-5xl lg:text-7xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-slate-900 via-blue-900 to-blue-700">
            Loved by Thousands
          </h2>
          <p className="text-xl lg:text-2xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Don't just take our word for it - hear what our amazing clients have to say
          </p>
        </motion.div>

        {/* Stats Grid */}
        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300" 
                   style={{ background: `linear-gradient(to right, var(--tw-gradient-stops))` }} />
              <div className="relative bg-white backdrop-blur-sm border-2 border-slate-200 rounded-2xl p-6 text-center hover:border-blue-500 hover:shadow-xl transition-all duration-300">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-gradient-to-r ${stat.color} mb-4`}>
                  <div className="text-white">
                    {stat.icon}
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-slate-900 mb-2">{stat.value}</div>
                <div className="text-sm text-slate-600">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Featured Testimonial - Large Card */}
        <motion.div
          className="mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="relative bg-white backdrop-blur-xl border-2 border-slate-200 rounded-3xl p-8 lg:p-12 overflow-hidden group hover:border-blue-500 hover:shadow-2xl transition-all duration-500">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-400/10 rounded-full blur-3xl group-hover:bg-blue-400/20 transition-all duration-500" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-500/10 rounded-full blur-3xl group-hover:bg-blue-500/20 transition-all duration-500" />
            
            <div className="relative z-10">
              <Quote className="w-16 h-16 text-blue-500/30 mb-6" />
              
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedTestimonial}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-2xl lg:text-3xl text-slate-900 font-medium leading-relaxed mb-8">
                    "{testimonials[selectedTestimonial].quote}"
                  </p>
                  
                  <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-20 h-20 border-4 border-blue-500 shadow-xl">
                        <AvatarImage src={testimonials[selectedTestimonial].image} />
                        <AvatarFallback className="bg-blue-600 text-white text-xl font-bold">
                          {testimonials[selectedTestimonial].name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-xl font-bold text-slate-900">{testimonials[selectedTestimonial].name}</p>
                        <p className="text-slate-600">{testimonials[selectedTestimonial].title}</p>
                        <p className="text-sm text-slate-500">{testimonials[selectedTestimonial].company}</p>
                      </div>
                    </div>
                    
                    <div className="flex flex-col items-end gap-2">
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                        ))}
                      </div>
                      <div className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-400 rounded-full">
                        <p className="text-white font-bold text-sm">{testimonials[selectedTestimonial].metric}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation Dots */}
              <div className="flex justify-center gap-3 mt-8">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedTestimonial(idx)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      idx === selectedTestimonial 
                        ? 'w-8 bg-blue-500' 
                        : 'w-2 bg-slate-300 hover:bg-slate-400'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Infinite Moving Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-3xl lg:text-4xl font-bold text-center text-slate-900 mb-12">
            Real Stories, Real Results
          </h3>
          <div className="relative">
            <InfiniteMovingCards
              items={testimonials.map(t => ({
                quote: t.quote,
                name: t.name,
                title: t.title
              }))}
              direction="right"
              speed="slow"
              className="py-8"
            />
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <p className="text-xl text-slate-600 mb-6">Ready to become our next success story?</p>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-400 text-white font-bold rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Start Your Journey Today
          </button>
        </motion.div>
      </div>

      <style>{`
        @keyframes grid-move {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(60px, 60px);
          }
        }

        .animate-scroll {
          animation: scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite;
        }
        
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        :global(.scroller ul li) {
          background: white !important;
          border: 2px solid rgb(226, 232, 240) !important;
          box-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
          transition: all 0.3s ease;
          position: relative;
          overflow: visible;
        }
        
        :global(.scroller ul li::before) {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(135deg, rgb(59, 130, 246), rgb(96, 165, 250));
          border-radius: 1rem;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }
        
        :global(.scroller ul li:hover::before) {
          opacity: 1;
        }
        
        :global(.scroller ul li:hover) {
          border-color: transparent !important;
          box-shadow: 0 25px 50px -12px rgb(0 0 0 / 0.25);
          transform: translateY(-8px) scale(1.02);
        }
        
        :global(.scroller ul li blockquote) {
          position: relative;
        }
        
        :global(.scroller ul li blockquote::before) {
          content: '"';
          position: absolute;
          top: -20px;
          left: -10px;
          font-size: 4rem;
          color: rgb(59, 130, 246);
          opacity: 0.1;
          font-family: Georgia, serif;
          line-height: 1;
        }
        
        :global(.scroller ul li blockquote span:first-of-type) {
          color: rgb(15, 23, 42) !important;
          font-size: 1rem;
          line-height: 1.75;
          font-weight: 400;
        }
        
        :global(.scroller ul li blockquote .flex) {
          margin-top: 1.5rem;
          padding-top: 1rem;
          border-top: 1px solid rgb(226, 232, 240);
        }
        
        :global(.scroller ul li blockquote .flex span) {
          color: rgb(100, 116, 139) !important;
        }
        
        :global(.scroller ul li blockquote .flex span:first-child) {
          font-weight: 700;
          color: rgb(15, 23, 42) !important;
          font-size: 1rem;
        }
        
        :global(.scroller ul li blockquote .flex span:last-child) {
          font-size: 0.875rem;
          color: rgb(148, 163, 184) !important;
        }
      `}</style>
    </section>
  );
}