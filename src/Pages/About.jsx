import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-[#2C423F] text-white py-20 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle decorative background glow from image_3b2201.png tone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#050714]/30 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-4">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1.5 rounded-full">
            Who We Are
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight">
            About Metrosites Technologies
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We are a team of passionate engineers, designers, and strategists dedicated to delivering high-performance digital ecosystems that empower businesses to scale effortlessly.
          </p>
        </div>
      </section>

      {/* 2. LIVE STATS COUNTER BAR (Nice Feature) */}
      <section className="bg-[#050714] text-white py-10 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">99%</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Client Satisfaction</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">150+</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Projects Delivered</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-emerald-400">5yr+</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Industry Experience</p>
          </div>
          <div className="space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-white">24/7</p>
            <p className="text-xs uppercase tracking-wider text-slate-400 font-medium">Dedicated Support</p>
          </div>
        </div>
      </section>

      {/* 3. OUR STORY & MISSION */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          <div className="space-y-6">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Our Journey & Vision
            </h2>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              Founded with a mission to bridge the gap between complex technological systems and real-world commercial goals, Metrosites Technologies transforms ideas into secure, scalable digital realities.
            </p>
            <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
              We focus heavily on technical performance, exceptional user-centric design paradigms, and maintainable software infrastructures. Whether optimizing cloud workflows or engineering customized cross-platform applications, your operational growth remains our focal deliverable.
            </p>
          </div>

          {/* Styled Placeholder Window representing structured system build */}
          <div className="bg-[#2C423F] p-8 rounded-2xl shadow-xl text-white space-y-4 border border-white/5">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="font-mono text-xs text-slate-300 space-y-2 pt-2">
              <p className="text-emerald-400">// Driven by continuous refinement</p>
              <p><span className="text-purple-400">const</span> metrosites = &#123;</p>
              <p className="pl-4">frameworks: <span className="text-yellow-300">["React", "Tailwind", "Cloud"]</span>,</p>
              <p className="pl-4">standards: <span className="text-yellow-300">["Security", "Scalability", "Speed"]</span>,</p>
              <p className="pl-4">execution: <span className="text-yellow-300">() =&gt; "Flawless Performance"</span></p>
              <p>&#125;;</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. CORE VALUES SECTION */}
      <section className="bg-slate-100 py-20 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Values That Guide Us</h2>
            <p className="text-sm text-slate-600">The cultural foundation supporting our engineering frameworks daily.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200/40 shadow-sm space-y-3">
              <span className="text-2xl">🛡️</span>
              <h3 className="font-bold text-slate-900 text-lg">Uncompromising Integrity</h3>
              <p className="text-xs text-slate-600 leading-relaxed">We establish reliable, open engineering relations with transparent communication lines at every phase.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200/40 shadow-sm space-y-3">
              <span className="text-2xl">🎯</span>
              <h3 className="font-bold text-slate-900 text-lg">Precision Driven</h3>
              <p className="text-xs text-slate-600 leading-relaxed">From lines of code to UI pixels, architectural performance details are accurately calculated for reliability.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200/40 shadow-sm space-y-3">
              <span className="text-2xl">⚡</span>
              <h3 className="font-bold text-slate-900 text-lg">Agile Adaptability</h3>
              <p className="text-xs text-slate-600 leading-relaxed">Technology moves exceptionally fast; our engineers continuously refine setups to keep you ahead.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. TEAM / LEADERSHIP GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Our Leadership</h2>
          <p className="text-sm text-slate-600">The specialist professionals executing your operational solutions.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {/* Member 1 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group">
            <div className="h-48 bg-[#050714] flex items-center justify-center text-3xl opacity-90 group-hover:opacity-100 transition-opacity">
              👤
            </div>
            <div className="p-5 text-center">
              <h4 className="font-bold text-base text-slate-900">Thabiso</h4>
              <p className="text-xs text-blue-600 font-medium">Lead Solutions Architect</p>
            </div>
          </div>

          {/* Member 2 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group">
            <div className="h-48 bg-[#2C423F] flex items-center justify-center text-3xl opacity-90 group-hover:opacity-100 transition-opacity">
              👤
            </div>
            <div className="p-5 text-center">
              <h4 className="font-bold text-base text-slate-900">N. Mokoena</h4>
              <p className="text-xs text-blue-600 font-medium">Senior DevOps Engineer</p>
            </div>
          </div>

          {/* Member 3 */}
          <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group sm:col-span-2 lg:col-span-1 mx-auto w-full sm:max-w-sm lg:max-w-none">
            <div className="h-48 bg-[#050714] flex items-center justify-center text-3xl opacity-90 group-hover:opacity-100 transition-opacity">
              👤
            </div>
            <div className="p-5 text-center">
              <h4 className="font-bold text-base text-slate-900">S. Sithole</h4>
              <p className="text-xs text-blue-600 font-medium">Head of UI/UX Design</p>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}