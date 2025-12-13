import React from 'react';
import Hero from './components/Hero';
import Features from './components/Features';
import WhyJoin from './components/WhyJoin';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <main className="w-full min-h-screen bg-[#0A1F44] text-slate-200 selection:bg-pink-500 selection:text-white">
      <Hero />
      <Features />
      <WhyJoin />
      <Footer />
    </main>
  );
};

export default App;