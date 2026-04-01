import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { label: 'Spaces', href: 'https://ikonoworld.art/spaces.html' },
    { label: 'TV', href: 'https://ikonoworld.art/tv.html' },
    { label: 'Vision', href: 'https://ikonoworld.art/vision.html' },
    { label: 'Meditation', href: '#', active: true },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0A1F44]/95 backdrop-blur-md border-b border-slate-800/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">

        {/* Left: Logo */}
        <a href="https://ikonoworld.art/" title="ikono – Feel the Art" className="flex-shrink-0">
          <img
            src="https://raw.githubusercontent.com/EliMarkevitch/images/main/ikono_logo.png"
            alt="ikono logo"
            style={{ height: '28px', width: 'auto', display: 'block' }}
          />
        </a>

        {/* Center: Nav Items (desktop) */}
        <div className="hidden md:flex items-center border border-slate-700 rounded-full px-2 py-1 gap-1">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className={`px-4 py-1.5 text-sm font-medium rounded-full transition-all ${
                item.active
                  ? 'bg-pink-500/20 text-pink-400 border border-pink-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Right: spacer for layout balance */}
        <div className="hidden md:block w-[120px]"></div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0A1F44]/98 backdrop-blur-md border-t border-slate-800/50 px-6 pb-6 pt-4 space-y-2">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              onClick={() => setMobileOpen(false)}
              className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-all ${
                item.active
                  ? 'bg-pink-500/20 text-pink-400 border border-pink-500/40'
                  : 'text-slate-300 hover:text-white hover:bg-slate-800/50'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
