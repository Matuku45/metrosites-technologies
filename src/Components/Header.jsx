import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Active styles helper function for cleaner JSX markup
  const getDesktopLinkClass = ({ isActive }) => 
    `text-lg font-medium tracking-wide py-2 transition-colors relative duration-200 hover:text-white ${
      isActive 
        ? 'text-white font-semibold after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-white after:rounded-full' 
        : 'text-slate-200'
    }`;

  const getMobileLinkClass = ({ isActive }) =>
    `block px-4 py-2.5 rounded-xl text-base transition-all ${
      isActive 
        ? 'font-semibold bg-white/10 text-white shadow-sm' 
        : 'font-medium text-slate-300 hover:text-white hover:bg-white/5'
    }`;

  return (
    <header className="bg-[#2C423F] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <Link to="/" className="h-16 w-auto flex items-center justify-center font-bold tracking-tight text-emerald-400 select-none">
              <span className="text-white">METROSITES.co.za</span>
              <span className="text-emerald-500 font-black ml-1">.</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            
            <NavLink to="/" className={getDesktopLinkClass} end>
              Home
            </NavLink>
            
            <NavLink to="/about" className={getDesktopLinkClass}>
              About
            </NavLink>
            
            <NavLink to="/services" className={getDesktopLinkClass}>
              Services
            </NavLink>
            
            <NavLink to="/story" className={getDesktopLinkClass} style={{ textAlign: 'center', lineHeight: '1.15' }}>
              Our <br /> Story
            </NavLink>
            
            <NavLink to="/leadership" className={getDesktopLinkClass}>
              Leadership
            </NavLink>
            
            <NavLink to="/why-us" className={getDesktopLinkClass} style={{ textAlign: 'center', lineHeight: '1.15' }}>
              Why <br /> Us
            </NavLink>

          </nav>

          {/* Desktop Action & Bumping Call Pill Element */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Interactive Bumping Phone Utility */}
            <a 
              href="tel:0813186838" 
              className="flex items-center gap-3 bg-white/5 border border-white/10 hover:bg-white/10 transition-all px-4 py-2 rounded-full group"
            >
              <div className="relative flex h-3 w-3">
                {/* Bumping background waves */}
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500"></span>
              </div>
              <div className="text-left">
                <p className="text-[10px] text-slate-300 font-bold uppercase tracking-wider leading-none">Call Us On</p>
                <p className="text-sm font-black text-white tracking-wide group-hover:text-emerald-400 transition-colors">081 318 6838</p>
              </div>
            </a>

          
          </div>

          {/* Mobile Hamburger Toggle Button */}
          <div className="lg:hidden flex items-center">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              type="button" 
              className="text-slate-200 hover:text-white focus:outline-none p-2 rounded-lg hover:bg-white/5"
              aria-label="Toggle navigation menu"
            >
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-[#223331] border-t border-white/5 px-4 pt-3 pb-6 space-y-2 shadow-xl animate-fadeIn">
          <NavLink onClick={() => setIsOpen(false)} to="/" className={getMobileLinkClass} end>Home</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/about" className={getMobileLinkClass}>About</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/services" className={getMobileLinkClass}>Services</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/story" className={getMobileLinkClass}>Our Story</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/leadership" className={getMobileLinkClass}>Leadership</NavLink>
          <NavLink onClick={() => setIsOpen(false)} to="/why-us" className={getMobileLinkClass}>Why Us</NavLink>
          
          <div className="pt-4 px-4 space-y-3">
            {/* Mobile Contact Button */}
            <Link onClick={() => setIsOpen(false)} to="/contact" className="block w-full">
              <button className="w-full py-3 text-center text-base font-bold text-[#2C423F] bg-white rounded-full shadow-lg">
                Contact Us
              </button>
            </Link>

            {/* Mobile Direct Dial Option */}
            <a 
              href="tel:0813186838" 
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-3 bg-white/5 border border-white/10 w-full py-3 rounded-full text-center"
            >
              <div className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
              </div>
              <span className="text-sm font-semibold text-slate-200">Call Us: 081 318 6838</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}