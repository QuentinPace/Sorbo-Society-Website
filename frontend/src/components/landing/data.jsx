// components/about-us/data.ts
import { Users, Lightbulb, Target, TrendingUp } from 'lucide-react';

export const coreValuesData = [
  {
    icon: <Users className="h-8 w-8 text-neutral-500" />,
    title: 'Customer-Centric',
    description: 'Our clients success is at the core of our solutions.',
    className: 'md:col-span-2',
  },
  {
    icon: <Lightbulb className="h-8 w-8 text-neutral-500" />,
    title: 'Innovation',
    description: 'We constantly push boundaries, leveraging technology to create what’s next.',
    className: 'md:col-span-1',
  },
  {
    icon: <Target className="h-8 w-8 text-neutral-500" />,
    title: 'Integrity',
    description: 'We operate with transparency and honesty, building trust with every interaction.',
    className: 'md:col-span-1',
  },
  {
    icon: <TrendingUp className="h-8 w-8 text-neutral-500" />,
    title: 'Excellence',
    description: 'Committed to the highest standards of quality in everything we do.',
    className: 'md:col-span-2',
  },
];

export const partnersData = [
  { name: 'QuantumLeap' },
  { name: 'InnovateHub' },
  { name: 'NextGen Solutions' },
  { name: 'Apex Dynamics' },
  { name: 'Stellar Tech' },
  { name: 'Momentum AI' },
];

export const testimonialsData = [
    {
        quote: "Working with this team was a game-changer for our business. Their dedication and expertise delivered results beyond our expectations. Highly recommended!",
        name: 'Sarah L.',
        title: 'CEO of InnovateHub',
    },
    {
        quote: "The level of professionalism and technical skill is unmatched. They tackled complex challenges with ease and were a pleasure to collaborate with.",
        name: 'Michael B.',
        title: 'CTO at QuantumLeap',
    },
    {
        quote: "From concept to launch, the process was seamless. They understood our vision perfectly and brought it to life with creativity and precision.",
        name: 'Jessica T.',
        title: 'Marketing Director, Apex Dynamics',
    }
];