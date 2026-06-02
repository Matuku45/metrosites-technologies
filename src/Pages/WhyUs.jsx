import React from 'react';

export default function WhyUs() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">

      {/* 1. HERO HEADER SECTION */}
      <section className="bg-[#2C423F] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#050714]/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            The MetroSites Advantage
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Engineered for Impact, Built for Scale
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We combine precise technical strategy, stunning user-centric design, and reliable engineering to deliver digital work that looks incredible and genuinely moves the needle.
          </p>
        </div>
      </section>

      {/* 2. CORE VALUE PILLARS (BENTO GRID STYLE) */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">Our Core Pillars</span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">What Sets Us Apart</h2>
          <p className="text-base text-slate-600">No complex tech jargon—just clean code, seamless processes, and high-yielding results.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">✨</div>
              <h3 className="font-bold text-slate-950 text-xl">Creative Excellence</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Polished visuals, exceptionally thoughtful user experiences, and hyper-consistent branding executed perfectly across every single device screen size.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#2C423F]">95%</span>
              <span className="text-xs text-slate-500 font-medium">Client Satisfaction Rate</span>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">📈</div>
              <h3 className="font-bold text-slate-950 text-xl">Proven Outcomes</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                Clear milestones, objective target parameters, and regular analytics reporting so you always maintain full transparency on your project's performance layout.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-emerald-600">200%</span>
              <span className="text-xs text-slate-500 font-medium">Average ROI Increase</span>
            </div>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/60 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">🛠️</div>
              <h3 className="font-bold text-slate-950 text-xl">Expert Engineering Team</h3>
              <p className="text-sm text-slate-600 leading-relaxed">
                A high-performance unit of product designers, systems developers, and growth marketers who consistently ship features on time and offer support post-launch.
              </p>
            </div>
            <div className="pt-6 border-t border-slate-100 mt-6 flex items-baseline gap-2">
              <span className="text-3xl font-black text-[#2C423F]">50+</span>
              <span className="text-xs text-slate-500 font-medium">Industry Awards & Honors</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. THE STRATEGIC METHODOLOGY TIMELINE */}
      <section className="bg-[#050714] text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Our Methodology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Why Leading Brands Choose Us
            </h2>
            <p className="text-base text-slate-400">
              We focus strictly on structural frameworks and operational transparency. Here is how we maintain seamless output velocity:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            
            {/* Split Pillar 1 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono font-bold text-emerald-400">
                01
              </div>
              <h4 className="text-xl font-bold text-white">Strategic Thinking</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                We align every viewport wireframe, API integration layer, and technical content screen explicitly to a clear user need and core business milestone.
              </p>
            </div>

            {/* Split Pillar 2 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center font-mono font-bold text-blue-400">
                02
              </div>
              <h4 className="text-xl font-bold text-white">Data-Driven Focus</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Decisions are entirely guided by empirical analytics telemetry, intensive user testing loops, and system A/B variance metrics—never guesswork.
              </p>
            </div>

            {/* Split Pillar 3 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl space-y-4 hover:bg-white/10 transition-all">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center font-mono font-bold text-emerald-400">
                03
              </div>
              <h4 className="text-xl font-bold text-white">24/7 Dedicated Support</h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Helpful, exceptionally responsive infrastructure maintenance engineers backed by stringent SLA commitments so your platform stays secure, fast, and operational.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CLOSING TRUST / CONVERSION PROMPT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 text-center max-w-4xl mx-auto">
        <div className="bg-[#2C423F] text-white p-12 rounded-3xl shadow-xl space-y-6 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-2xl pointer-events-none"></div>
          
          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight relative z-10">
            Let’s Bring Your Digital Vision To Life
          </h3>
          <p className="text-slate-200 text-sm sm:text-base max-w-xl mx-auto leading-relaxed relative z-10">
            We work with forward-thinking businesses across South Africa to turn complex code parameters into simple, elegant workflows that convert visitors into loyal clients.
          </p>
          <div className="pt-4 relative z-10">
            <button className="px-8 py-3.5 bg-white text-[#2C423F] font-bold text-sm rounded-full hover:bg-slate-100 transition-all transform hover:scale-105 duration-200 shadow-md">
              Start Your Next Project
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}