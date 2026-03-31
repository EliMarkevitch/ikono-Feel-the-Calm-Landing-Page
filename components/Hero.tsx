
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = [
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/Caspar-david-friedrich-wanderer.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/8.Gustav_Klimt_-_TREES.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/2.%20Jan_Vermeer_Login%3ASign-up.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/10.Dance-At-Bougival_TENDERNESS.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/11.Vassily_Kandinsky%2C_MYSTICAL.jpg"
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0 bg-[#0A1F44]">
      {/* Background Ambiance - Subtle gradients to replace the image for a clean, moody look */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] bg-pink-900/20 blur-[120px] rounded-full opacity-60"></div>
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-blue-900 blur-[80px] rounded-full opacity-50"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A1F44] via-[#0A1F44]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
        
        {/* Left Column: Text Content */}
        <div className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left">
          {/* Logo */}
          <div className="mb-6">
            <a href="https://ikonoworld.art/" title="ikono – Feel the Art">
              <img
                src="https://raw.githubusercontent.com/EliMarkevitch/images/main/ikono_logo.png"
                alt="ikono logo"
                style={{ height: '32px', width: 'auto', display: 'block' }}
              />
            </a>
          </div>
          
          <p className="text-xl md:text-2xl font-bold text-slate-200 mb-8 tracking-wide">
            Feel the calm
          </p>

          {/* Headline */}
          <h2 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Stop Trying to Meditate. <br />
            <span className="text-slate-300">Start Feeling Calm.</span>
          </h2>

          {/* Value Prop */}
          <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-2xl leading-relaxed">
            Experience 7 days of effortless calm through <span className="text-pink-400 font-medium">Slow Art</span> silent, contemplative videos scientifically shown to lower cortisol and place your mind into a meditative state.
          </p>

          {/* CTA Area */}
          <div className="w-full max-w-lg flex flex-col items-center lg:items-start">
             <p className="text-sm text-slate-400 uppercase tracking-widest mb-4 font-semibold">
              Get Early Access Now
            </p>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfgG_BwD4yemBWcypp-5hOxbBh2z-ZNBpa7HEr5KRpJ7Qu5Mg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 text-sm text-pink-400 font-bold rounded-xl border-2 border-pink-500 hover:bg-pink-500/10 transition-all transform hover:scale-[1.02] whitespace-nowrap inline-block text-center"
            >
              Join Now
            </a>

            <p className="text-lg md:text-xl text-slate-300 mt-6 leading-relaxed">
              Get full, free access to all themes for 7 days when the app launches.
            </p>
          </div>
        </div>

        {/* Right Column: Video Preview */}
        <div className="flex-1 w-full max-w-[300px] sm:max-w-[340px] lg:max-w-sm flex flex-col items-center mt-8 lg:mt-0">
          <div className="relative w-full aspect-[9/19] bg-[#0A1F44] rounded-[2.5rem] border-[8px] border-slate-800 shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/10 group cursor-pointer transform hover:scale-[1.01] transition-transform duration-500">
             {/* Dynamic Island / Notch */}
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-black rounded-b-xl z-20 flex justify-center items-center">
                 <div className="w-12 h-1 bg-slate-800 rounded-full"></div>
             </div>

             {/* Video Content Placeholder / Slideshow */}
             <div className="w-full h-full relative bg-black">
                 {images.map((src, index) => (
                   <img 
                     key={src}
                     src={src} 
                     alt={`App Interface Preview ${index + 1}`} 
                     className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                       index === currentImageIndex ? 'opacity-80' : 'opacity-0'
                     } group-hover:scale-105 transition-transform duration-1000`}
                   />
                 ))}
                 
                 {/* Watermark Logo */}
                 <div className="absolute bottom-[8%] left-1/2 -translate-x-1/2 z-0 pointer-events-none w-[70%] flex justify-center">
                    <img 
                      src="https://raw.githubusercontent.com/EliMarkevitch/images/main/Logo_Feelthe_calm_TEXT_ONLY-removebg-Transparent.png" 
                      alt="Feel the calm" 
                      className="w-full h-auto drop-shadow-md opacity-90"
                    />
                 </div>

                 {/* Play Button Overlay */}
                 <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                     <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/20 shadow-lg">
                         <Play className="w-6 h-6 text-white ml-1 fill-white" />
                     </div>
                 </div>
             </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;
