
import React from 'react';
import { Eye, Brain, Palette, Clock } from 'lucide-react';

const features = [
  {
    icon: <Eye className="w-8 h-8 text-pink-500" />,
    title: "Effortless",
    description: "No instructions, no music, no struggle. Just watch. Slow Art is meditation your body understands instantly."
  },
  {
    icon: <Brain className="w-8 h-8 text-pink-500" />,
    title: "Science-Backed",
    description: "Backed by research by the WHO Art & Health Lab demonstrating how art lowers stress and improves well-being."
  },
  {
    icon: <Palette className="w-8 h-8 text-pink-500" />,
    title: "Beautiful",
    description: "Pure presence. Pure art. Pure calm. Curated masterpieces from the world's greatest collections."
  },
  {
    icon: <Clock className="w-8 h-8 text-pink-500" />,
    title: "Time commitment",
    description: "A 2–4 minute commitment per day. The micro-habit that creates massive shifts in your mental state."
  }
];

const Features: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A1F44] px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The ikono Difference</h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center md:items-start md:text-left group"
            >
              <div className="mb-6 p-3 bg-[#0A1F44] rounded-xl border border-slate-800 group-hover:border-pink-500/50 transition-colors">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-slate-200 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
