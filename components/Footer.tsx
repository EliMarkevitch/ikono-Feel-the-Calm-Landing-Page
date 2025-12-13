
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A1F44] py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
          <div className="mb-4 md:mb-0 flex items-center gap-4">
            <a href="#" title="ikono – Feel the Art">
              <img
                src="https://raw.githubusercontent.com/EliMarkevitch/images/main/ikono_logo.png"
                alt="ikono logo"
                style={{ height: '24px', width: 'auto', display: 'block' }}
              />
            </a>
            <span>© {new Date().getFullYear()} Markevitch Media GmbH All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-300 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
