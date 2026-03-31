
import React from 'react';
import { Star, Gift, Calendar } from 'lucide-react';

const WhyJoin: React.FC = () => {
  return (
    <section className="py-20 bg-[#0A1F44] border-y border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Text Content */}
          <div className="lg:w-1/2 w-full">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
              Why Join the <br />
              <span className="text-pink-500">Waiting List?</span>
            </h2>
            
            <div className="space-y-8">
              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Star className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Exclusive Early Access</h3>
                  <p className="text-slate-400">Be among the first to experience the full 7-day calm journey before the public release.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Gift className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Special Launch Offer</h3>
                  <p className="text-slate-400">Subscribers get a special discount for the full premium app features upon launch.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <Calendar className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">A Resolution You Can Keep</h3>
                  <p className="text-slate-400">Forget hour-long meditations. Start a new year resolution that actually sticks.</p>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Section (Replaced Image) */}
          <div className="lg:w-1/2 w-full bg-slate-900/40 p-8 md:p-12 rounded-3xl border border-slate-800/50 backdrop-blur-sm shadow-xl">
             <div className="flex flex-col items-center lg:items-start text-center lg:text-left">
                <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to discover your calm?
                </h3>
                <p className="text-lg text-slate-300 mb-8 font-light">
                  No noise. No pressure. Just calm.
                </p>
                <div className="w-full">
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfgG_BwD4yemBWcypp-5hOxbBh2z-ZNBpa7HEr5KRpJ7Qu5Mg/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 text-sm text-pink-400 font-bold rounded-xl border-2 border-pink-500 hover:bg-pink-500/10 transition-all transform hover:scale-[1.02] whitespace-nowrap"
                    >
                      Join List
                    </a>
                </div>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyJoin;
