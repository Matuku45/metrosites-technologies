import React from 'react';

export default function Services() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-[#2C423F] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle decorative background glow from dark tone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#050714]/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            Our Capabilities
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            Services & Specialized Solutions
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to plan, design, launch, and grow your digital presence, alongside enterprise-grade deployment frameworks engineered for scale.
          </p>
        </div>
      </section>

      {/* 2. CORE DIGITAL AGENCY SERVICES */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 border border-blue-200 px-3 py-1 rounded-full">
            Digital Transformation
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Core Agency Services
          </h2>
          <p className="text-base text-slate-600">
            Tailored digital execution designed to optimize user engagement and capture market momentum.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Service 1 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">🎨</div>
              <h3 className="font-bold text-slate-900 text-xl">Brand Identity Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Logos, cohesive color palettes, and structured asset guidelines that make your business instantly recognizable across every client touchpoint.</p>
            </div>
            <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 pt-4 border-t border-slate-100">Learn More <span>→</span></button>
          </div>

          {/* Service 2 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">📐</div>
              <h3 className="font-bold text-slate-900 text-xl">UI/UX Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Interactive wireframes and high-fidelity interface designs that keep system users deeply engaged and make digital paths completely effortless.</p>
            </div>
            <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 pt-4 border-t border-slate-100">Learn More <span>→</span></button>
          </div>

          {/* Service 3 (Featured Stack) */}
          <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500 shadow-md flex flex-col justify-between relative hover:shadow-lg transition-all group">
            <span className="absolute -top-3 right-6 bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">Most Popular</span>
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center text-xl font-bold">💻</div>
              <h3 className="font-bold text-slate-900 text-xl">Web Development</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Blazing fast, responsive web systems and portals constructed over modern stacks—optimized to keep maintenance overhead simple and scalability streamlined.</p>
            </div>
            <button className="mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1 pt-4 border-t border-slate-100">Learn More <span>→</span></button>
          </div>

          {/* Service 4 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">📱</div>
              <h3 className="font-bold text-slate-900 text-xl">Mobile App Design</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Highly intuitive iOS and Android interface architectures engineered explicitly around conversion frameworks and swift mobile runtimes.</p>
            </div>
            <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 pt-4 border-t border-slate-100">Learn More <span>→</span></button>
          </div>

          {/* Service 5 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">🚀</div>
              <h3 className="font-bold text-slate-900 text-xl">Digital Marketing</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Data-driven content generation, targeted email nurture workflows, and tactical paid acquisition funnels configured to acquire highly qualified inbound pipeline.</p>
            </div>
            <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 pt-4 border-t border-slate-100">Learn More <span>→</span></button>
          </div>

          {/* Service 6 */}
          <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center text-xl font-bold group-hover:bg-emerald-500 group-hover:text-white transition-all">🔍</div>
              <h3 className="font-bold text-slate-900 text-xl">SEO Optimization</h3>
              <p className="text-sm text-slate-600 leading-relaxed">Deep-dive structural audit remedies, Core Web Vital speed enhancement, and precise keywords to aggressively boost search discovery metrics.</p>
            </div>
            <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1 pt-4 border-t border-slate-100">Learn More <span>→</span></button>
          </div>

        </div>
      </section>

      {/* 3. ENTERPRISE & GOVERNMENT SPECIALIZED SOLUTIONS */}
      <section className="bg-[#050714] text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-white/5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto space-y-16 relative z-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-bold text-emerald-400 uppercase tracking-widest bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Enterprise Procurement
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight">
              Our Products & Services
            </h2>
            <p className="text-base text-slate-400">
              Specialized infrastructure and systems provisioning for corporate structures and public sector departments.
            </p>
          </div>

          <div className="space-y-6 max-w-5xl mx-auto">
            
            {/* Solution 01 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:bg-white/10 transition-all group">
              <div className="text-2xl font-black text-emerald-400 font-mono tracking-tight bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 shrink-0">
                01
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Educational Software Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Developing and implementing robust, scalable e-learning environments, school learner management systems (LMS), and interactive digital curriculum educational tools.
                </p>
              </div>
            </div>

            {/* Solution 02 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:bg-white/10 transition-all group">
              <div className="text-2xl font-black text-white font-mono tracking-tight bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 shrink-0">
                02
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Hardware Supply</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Logistical procurement and scaling delivery of top-tier laptops, high-performance desktops, fault-tolerant enterprise servers, and critical workstation accessories.
                </p>
              </div>
            </div>

            {/* Solution 03 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:bg-white/10 transition-all group">
              <div className="text-2xl font-black text-emerald-400 font-mono tracking-tight bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 shrink-0">
                03
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">IT Infrastructure & Networking</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Architecting, implementing, and monitoring secure local and wide area network frameworks to maintain highly accurate, seamless connectivity profiles.
                </p>
              </div>
            </div>

            {/* Solution 04 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:bg-white/10 transition-all group">
              <div className="text-2xl font-black text-white font-mono tracking-tight bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 shrink-0">
                04
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Solar Energy Solutions</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Engineered renewable energy configurations, grid ties, and smart commercial backup power storage systems tailored to maintain uninterrupted sustainable operations.
                </p>
              </div>
            </div>

            {/* Solution 05 */}
            <div className="bg-white/5 border border-white/10 p-8 rounded-2xl flex flex-col md:flex-row gap-6 items-start hover:bg-white/10 transition-all group">
              <div className="text-2xl font-black text-emerald-400 font-mono tracking-tight bg-white/5 w-14 h-14 flex items-center justify-center rounded-xl border border-white/10 shrink-0">
                05
              </div>
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">Assistive Technology Reselling</h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Supplying highly specialized accessibility systems and inclusive interface equipment, ensuring uncompromised operation parameters across public sector channels.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. CALL TO ACTION PANEL */}
      <section className="bg-white py-24 px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto space-y-6 bg-slate-100 p-12 rounded-3xl border border-slate-200/50 shadow-inner">
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base max-w-xl mx-auto leading-relaxed">
            Let’s bring your architectural visions to life with an exceptional, clean execution strategy and rapid deployment milestones.
          </p>
          <div className="pt-4">
            <button className="px-8 py-3.5 bg-[#2C423F] text-white font-bold text-sm rounded-full hover:bg-[#1f2f2c] transition-all transform hover:scale-105 duration-200 shadow-md">
              Let's Discuss Your Goals
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}