
import React, { useState, useEffect } from 'react';
import { Play } from 'lucide-react';

const Hero: React.FC = () => {
  const [portraitIndex, setPortraitIndex] = useState(0);
  const [landscapeIndex, setLandscapeIndex] = useState(0);

  // Portrait phone: browsing/discovery art
  const portraitImages = [
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/Caspar-david-friedrich-wanderer.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/8.Gustav_Klimt_-_TREES.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/2.%20Jan_Vermeer_Login%3ASign-up.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/10.Dance-At-Bougival_TENDERNESS.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/11.Vassily_Kandinsky%2C_MYSTICAL.jpg"
  ];

  // Landscape phone: the meditation experience — cinematic, wide compositions
  const landscapeImages = [
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/4.Bierstadt_Sierra_Nevada_LANDSCAPE.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/6.Tsunami_Hokusai_19th_WATER.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/7.The_Bridge_Sisley_REFLECTION.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/9.Caspar_David_Friedrich_-_Man_and_Woman_Contemplating_the_Moon_-NIGHT%26MOONLIGHT.jpg",
    "https://raw.githubusercontent.com/EliMarkevitch/images/main/5.Berthe_Morisot_-_SOFT%20LIGHT.jpg"
  ];

  // Background image: same as landscape but used blurred behind everything
  const bgImage = "https://raw.githubusercontent.com/EliMarkevitch/images/main/4.Bierstadt_Sierra_Nevada_LANDSCAPE.jpg";

  useEffect(() => {
    const portraitInterval = setInterval(() => {
      setPortraitIndex((prev) => (prev + 1) % portraitImages.length);
    }, 4000);

    const landscapeInterval = setInterval(() => {
      setLandscapeIndex((prev) => (prev + 1) % landscapeImages.length);
    }, 5000); // Slower for the meditation phone — more contemplative

    return () => {
      clearInterval(portraitInterval);
      clearInterval(landscapeInterval);
    };
  }, [portraitImages.length, landscapeImages.length]);

  return (
    <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden py-20 lg:py-0 bg-[#0A1F44]">
      {/* Background: blurred art image for depth */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <img
          src={bgImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover opacity-15 blur-[2px] scale-110"
        />
        {/* Gradient overlays for readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0A1F44] via-[#0A1F44]/85 to-[#0A1F44]/60"></div>
        <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-[#0A1F44] to-transparent"></div>
        <div className="absolute top-0 left-0 right-0 h-1/4 bg-gradient-to-b from-[#0A1F44]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">

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

        {/* Right Column: Dual Phone Display */}
        <div className="flex-1 w-full flex justify-center lg:justify-end mt-8 lg:mt-0">
          <div className="relative" style={{ width: '720px', height: '780px' }}>

            {/* LANDSCAPE PHONE (behind, larger — the meditation experience) */}
            <div
              className="absolute group cursor-pointer"
              style={{ top: '0', right: '0', width: '630px', height: '390px' }}
            >
              <div className="relative w-full h-full bg-[#0A1F44] rounded-[1.5rem] border-[6px] border-slate-800 shadow-2xl shadow-black/50 overflow-hidden ring-1 ring-white/10 hover:scale-[1.01] transition-transform duration-500">
                {/* Landscape slideshow */}
                <div className="w-full h-full relative bg-black">
                  {landscapeImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`Meditation experience ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1500 ease-in-out ${
                        index === landscapeIndex ? 'opacity-90' : 'opacity-0'
                      }`}
                    />
                  ))}

                  {/* Subtle play button */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/20 shadow-lg">
                      <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                    </div>
                  </div>

                  {/* "Feel" label */}
                  <div className="absolute bottom-3 left-4 z-10">
                    <span className="text-white/70 text-xs font-medium tracking-widest uppercase">Feel</span>
                  </div>
                </div>
              </div>
            </div>

            {/* PORTRAIT PHONE (in front, smaller — the browse/discover mode) */}
            <div
              className="absolute group cursor-pointer z-10"
              style={{ bottom: '0', left: '0', width: '300px', height: '600px' }}
            >
              <div className="relative w-full h-full bg-[#0A1F44] rounded-[2rem] border-[6px] border-slate-800 shadow-2xl shadow-black/60 overflow-hidden ring-1 ring-white/10 hover:scale-[1.01] transition-transform duration-500">
                {/* Dynamic Island */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-5 bg-black rounded-b-xl z-20 flex justify-center items-center">
                  <div className="w-10 h-1 bg-slate-800 rounded-full"></div>
                </div>

                {/* Portrait slideshow */}
                <div className="w-full h-full relative bg-black">
                  {portraitImages.map((src, index) => (
                    <img
                      key={src}
                      src={src}
                      alt={`App browse ${index + 1}`}
                      className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                        index === portraitIndex ? 'opacity-80' : 'opacity-0'
                      }`}
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

                  {/* Play Button */}
                  <div className="absolute inset-0 bg-black/30 group-hover:bg-black/20 transition-colors flex items-center justify-center z-10">
                    <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center group-hover:bg-white/20 transition-all border border-white/20 shadow-lg">
                      <Play className="w-5 h-5 text-white ml-0.5 fill-white" />
                    </div>
                  </div>

                  {/* "Discover" label */}
                  <div className="absolute top-8 left-1/2 -translate-x-1/2 z-10">
                    <span className="text-white/70 text-xs font-medium tracking-widest uppercase">Discover</span>
                  </div>
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
