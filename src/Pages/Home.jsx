import React, { useState, useEffect } from 'react';

// Importing your specific carousel assets
import carousel1 from '../assets/couresel.png';
import carousel2 from '../assets/couresel1.png';

export default function Home() {
  // Array holding your carousel images
  const images = [carousel1, carousel2];
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically cycle through images every 3000ms (3 seconds)
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer); // Clean up timer on unmount
  }, [images.length]);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. FULL WIDTH RESPONSIVE CAROUSEL HERO */}
      <section className="w-full bg-slate-950 overflow-hidden relative border-b border-slate-200">
        <div className="w-full mx-auto max-w-[1920px]">
          {/* Fixed aspect ratio and height logic for mobile vs desktop layouts */}
          <div className="relative aspect-video h-[35vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] min-h-[260px] max-h-[75vh] w-full overflow-hidden group">
            
            {/* Slides Slider Core Wrapper */}
            <div 
              className="flex w-full h-full transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {images.map((imgSrc, index) => (
                <div key={index} className="w-full h-full flex-shrink-0 relative">
                  <img 
                    src={imgSrc} 
                    alt={`Slide ${index + 1}`} 
                    className="w-full h-full object-cover select-none absolute inset-0" 
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
              ))}
            </div>

            {/* Slider Indicator Dots */}
            <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2.5 z-10">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`h-2.5 rounded-full transition-all duration-300 shadow-sm ${
                    currentIndex === index ? 'w-8 bg-white' : 'w-2.5 bg-white/40 hover:bg-white/60'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 2. SERVICES / FEATURES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Solutions That Drive Digital Transformation
          </h2>

          <p className="mt-4 text-lg text-slate-600">
            We combine technology, innovation, and infrastructure expertise
            to help organizations operate smarter, grow faster, and stay secure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {/* Card 1 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-cyan-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🌐
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Digital Solutions
            </h3>
            <p className="text-slate-600">
              Modern websites, business platforms, and enterprise applications
              designed to enhance user experience and business performance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              ☁️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cloud & Infrastructure
            </h3>
            <p className="text-slate-600">
              Scalable cloud environments, networking solutions, and
              infrastructure services built for reliability and growth.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🔒
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Cybersecurity
            </h3>
            <p className="text-slate-600">
              Protect your business with advanced security strategies,
              monitoring, risk management, and compliance solutions.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              ⚡
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Sustainable Energy
            </h3>
            <p className="text-slate-600">
              Smart energy technologies and sustainable solutions that
              support operational efficiency and long-term resilience.
            </p>
          </div>

          {/* Card 5 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-orange-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              📊
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Digital Marketing
            </h3>
            <p className="text-slate-600">
              SEO, content strategies, social campaigns, and analytics
              focused on increasing visibility and generating quality leads.
            </p>
          </div>

          {/* Card 6 */}
          <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:-translate-y-2">
            <div className="w-14 h-14 bg-pink-100 rounded-2xl flex items-center justify-center text-3xl mb-6">
              🚀
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              Innovation & Growth
            </h3>
            <p className="text-slate-600">
              Future-focused technology consulting that helps businesses
              innovate, scale, and stay competitive in a changing world.
            </p>
          </div>

        </div>
      </section>
    </div>
  );
}