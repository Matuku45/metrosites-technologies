import React, { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    // Matching the deep dark teal/slate background from image_3bfec7.png
    <header className="bg-[#2C423F] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-24 items-center">
          
          {/* Logo Section */}
          <div className="flex-shrink-0 flex items-center gap-2">
            {/* 
              Placeholder for your Bahlahli Business Solutions logo from image_3bfec7.png.
              Replace the src path below with your actual logo image file path when ready.
            */}
            <div className="h-16 w-auto flex items-center justify-center font-bold tracking-tight text-emerald-400">
              <span className="text-white">METROSITES</span>
              <span className="text-emerald-500 font-black ml-1">.</span>
            </div>
          </div>

          {/* Desktop Navigation - Exact items from image_3bfec7.png */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-12">
            
            {/* Active Home Link with the white bottom border underline */}
            <a href="#" className="relative text-lg font-semibold text-white tracking-wide py-2 after:absolute after:bottom-0 after:left-0 after:w-full after:h-[3px] after:bg-white after:rounded-full">
              Home
            </a>
            
            <a href="#" className="text-lg font-medium text-slate-200 hover:text-white transition-colors tracking-wide">
              About
            </a>
            
            <a href="#" className="text-lg font-medium text-slate-200 hover:text-white transition-colors tracking-wide">
              Services
            </a>
            
            {/* Multi-line stack for 'Our Story' matching the image layout */}
            <a href="#" className="text-lg font-medium text-slate-200 hover:text-white transition-colors tracking-wide leading-tight text-center">
              Our <br /> Story
            </a>
            
            <a href="#" className="text-lg font-medium text-slate-200 hover:text-white transition-colors tracking-wide">
              Leadership
            </a>
            
            {/* Multi-line stack for 'Why Us' matching the image layout */}
            <a href="#" className="text-lg font-medium text-slate-200 hover:text-white transition-colors tracking-wide leading-tight text-center">
              Why <br /> Us
            </a>

          </nav>

          {/* Desktop Pill Button from image_3bfec7.png */}
          <div className="hidden lg:flex items-center">
            <button className="px-7 py-3 text-base font-bold text-[#2C423F] bg-white rounded-full hover:bg-slate-100 transition-all transform hover:scale-105 duration-200 shadow-md">
              Contact Us
            </button>
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
          <a href="#" className="block px-4 py-2.5 rounded-xl text-base font-semibold bg-white/10 text-white">Home</a>
          <a href="#" className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">About</a>
          <a href="#" className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Services</a>
          <a href="#" className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Our Story</a>
          <a href="#" className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Leadership</a>
          <a href="#" className="block px-4 py-2.5 rounded-xl text-base font-medium text-slate-300 hover:text-white hover:bg-white/5">Why Us</a>
          <div className="pt-4 px-4">
            <button className="w-full py-3 text-center text-base font-bold text-[#2C423F] bg-white rounded-full shadow-lg">
              Contact Us
            </button>
          </div>
        </div>
      )}
    </header>
  );
}