import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HERO SECTION */}
      <section className="relative bg-gradient-to-r from-blue-700 to-indigo-800 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
          
          {/* Hero Text */}
          <div className="flex-1 space-y-6 text-center md:text-left">
            <span className="inline-block bg-blue-500/30 text-blue-200 text-sm font-semibold tracking-wide uppercase px-3 py-1 rounded-full">
              Innovative Digital Solutions
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight">
              Building the Future of <span className="text-blue-400">Metrosites Technologies</span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-200 max-w-2xl">
              We deliver cutting-edge software development, web applications, and digital transformation strategies tailored to scale your business.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button className="px-8 py-3 bg-white text-blue-700 font-medium rounded-lg shadow-lg hover:bg-slate-100 transition duration-300 transform hover:-translate-y-0.5">
                Get Started
              </button>
              <button className="px-8 py-3 border border-slate-300/50 text-white font-medium rounded-lg hover:bg-white/10 transition duration-300">
                Learn More
              </button>
            </div>
          </div>

          {/* Hero Visual Placeholder */}
          <div className="flex-1 w-full max-w-md md:max-w-none">
            <div className="relative aspect-video md:aspect-square bg-white/10 rounded-2xl backdrop-blur-md border border-white/20 shadow-2xl flex items-center justify-center p-8 overflow-hidden group">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
              <div className="text-center z-10">
                <span className="text-6xl block mb-4">🚀</span>
                <p className="text-sm font-mono text-blue-200">&lt;Transforming Ideas Into Reality /&gt;</p>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. SERVICES / FEATURES SECTION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Our Core Expertise
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Discover how we can help your business thrive in the competitive digital landscape.
          </p>
        </div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center text-blue-600 text-xl font-bold mb-6">
              💻
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Web Development</h3>
            <p className="text-slate-600 leading-relaxed">
              High-performance, responsive websites and web applications built using modern frameworks like React and Tailwind CSS.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 text-xl font-bold mb-6">
              📱
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Mobile Solutions</h3>
            <p className="text-slate-600 leading-relaxed">
              Cross-platform mobile applications that provide seamless user experiences across iOS and Android devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-shadow duration-300">
            <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 text-xl font-bold mb-6">
              ☁️
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">Cloud Infrastructure</h3>
            <p className="text-slate-600 leading-relaxed">
              Secure, scalable, and optimized cloud setups ensuring your operational workflows run smoothly 24/7.
            </p>
          </div>

        </div>
      </section>

      {/* 3. CALL TO ACTION (CTA) SECTION */}
      <section className="bg-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Ready to jumpstart your next project?
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-lg">
            Get in touch with the Metrosites Technologies team today and let’s craft something amazing together.
          </p>
          <div className="pt-4">
            <button className="px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition duration-300 shadow-lg shadow-blue-600/20">
              Contact Us Now
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}