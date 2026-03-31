
import React from 'react';
import { TrendingDown, ShieldCheck, RefreshCw } from 'lucide-react';

const stats = [
  {
    icon: <TrendingDown className="w-8 h-8 text-pink-500" />,
    title: "Cortisol Reduction",
    description: "Viewing art for just 2 minutes lowers cortisol levels measurably."
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-pink-500" />,
    title: "WHO Recognition",
    description: "The WHO Art & Health Lab identifies art as a key tool for mental wellbeing."
  },
  {
    icon: <RefreshCw className="w-8 h-8 text-pink-500" />,
    title: "Attention Restoration",
    description: "Nature-based art triggers the brain's natural recovery mode."
  }
];

const ScienceBacked: React.FC = () => {
  return (
    <section className="py-24 bg-[#0A1F44] px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">The Science Behind Slow Art</h2>
          <div className="w-24 h-1 bg-pink-600 mx-auto rounded-full"></div>
          <p className="text-slate-300 mt-6 text-lg max-w-2xl mx-auto">
            Art isn&apos;t just beautiful &mdash; it&apos;s therapeutic. Over 3,000 studies confirm what we&apos;ve always felt.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors duration-300 flex flex-col items-center text-center group"
            >
              <div className="mb-6 p-3 bg-[#0A1F44] rounded-xl border border-slate-800 group-hover:border-pink-500/50 transition-colors">
                {stat.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{stat.title}</h3>
              <p className="text-slate-200 leading-relaxed">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-slate-500 text-sm">
            Research supported by: WHO Art &amp; Health Lab &bull; NHS &bull; Cleveland Clinic
          </p>
        </div>
      </div>
    </section>
  );
};

export default ScienceBacked;
