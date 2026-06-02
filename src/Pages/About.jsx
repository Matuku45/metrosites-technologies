import React from 'react';

export default function About() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* 1. HERO HEADER SECTION */}
      <section className="bg-[#2C423F] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        {/* Subtle decorative background glow from image_3b2201.png tone */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#050714]/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            Transform Your Digital Presence
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            We plan, design, and build modern websites and apps that help businesses grow.
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            From UI/UX and SEO to robust software development and performance digital marketing, <span className="text-emerald-400 font-semibold">MetroSites</span> is your dedicated engineering partner for real, measurable results.
          </p>
        </div>
      </section>

      {/* 2. CORE LIVE PERFORMANCE STATS BAR */}
      <section className="bg-[#050714] text-white py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">150</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Projects Delivered</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">95%</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Satisfaction Rate</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-emerald-400 tracking-tight">24</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Team Members</p>
          </div>
          <div className="space-y-1">
            <p className="text-4xl sm:text-5xl font-black text-white tracking-tight">10+</p>
            <p className="text-xs uppercase tracking-widest text-slate-400 font-semibold">Years Combined Experience</p>
          </div>
        </div>
      </section>

      {/* 3. DISCOVER OUR STORY & METHODOLOGY */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          <div className="space-y-6">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">Discover Our Story</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight leading-tight">
              Practical, High-Quality Work for a Digital-First World
            </h2>
            <p className="text-slate-600 leading-relaxed text-base">
              MetroSites helps startups and SMEs ship fast, look professional, and convert more leads. We combine technical strategy, thoughtful interface design, and modern engineering to deliver ecosystems that are easy to use and remarkably simple to maintain.
            </p>
            
            {/* Interactive Checkmark Value Points */}
            <div className="space-y-3.5 pt-2">
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs flex-shrink-0 mt-1">✓</div>
                <p className="text-sm text-slate-700 font-medium"><strong className="text-slate-900">Clear Strategy:</strong> Prototyping and wireframing paths out carefully before we construct a single line of code.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs flex-shrink-0 mt-1">✓</div>
                <p className="text-sm text-slate-700 font-medium"><strong className="text-slate-900">Clean, Responsive Design:</strong> Tailoring front-end visuals perfectly to display uniquely across your targeted device types.</p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 text-xs flex-shrink-0 mt-1">✓</div>
                <p className="text-sm text-slate-700 font-medium"><strong className="text-slate-900">Measurable Growth:</strong> Baking in technical search optimizations and precise conversion tracking protocols by default.</p>
              </div>
            </div>
          </div>

          {/* Interactive Structured Code Window Viewports */}
          <div className="bg-[#2C423F] p-8 rounded-2xl shadow-xl text-white space-y-6 border border-white/5 relative">
            <div className="absolute top-4 right-4 bg-white/10 px-3 py-1 rounded-md text-[10px] uppercase tracking-widest font-mono text-emerald-400">
              Active Environment
            </div>
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-400"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
              <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
            </div>
            <div className="font-mono text-xs text-slate-300 space-y-3 pt-2">
              <p className="text-slate-400">// Delivering values across South Africa</p>
              <p><span className="text-emerald-400">const</span> metrics = &#123;</p>
              <p className="pl-4">happyClients: <span className="text-yellow-300">"200+ Partners"</span>,</p>
              <p className="pl-4">operationalFocus: <span className="text-yellow-300">["Scale", "Speed", "ROI"]</span>,</p>
              <p className="pl-4">deploymentSLA: <span className="text-yellow-300">"24/7 Monitored"</span></p>
              <p>&#125;;</p>
            </div>
          </div>

        </div>
      </section>

      {/* 4. SERVICES CAPABILITIES SECTION */}
      <section className="bg-slate-100 py-24 px-4 sm:px-6 lg:px-8 border-t border-b border-slate-200/60">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
            <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest bg-emerald-50 border border-emerald-200 px-3 py-1 rounded-full">Services Portfolio</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">Our Core Capabilities</h2>
            <p className="text-base text-slate-600">Everything you need to plan, design, launch, and systematically grow your digital presence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Service 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="text-2xl">🎨</div>
                <h3 className="font-bold text-slate-900 text-xl">Brand Identity Design</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Logos, cohesive color palettes, and structured asset guidelines that make your business instantly recognizable across every client touchpoint.</p>
              </div>
              <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">Learn More <span>→</span></button>
            </div>

            {/* Service 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="text-2xl">📐</div>
                <h3 className="font-bold text-slate-900 text-xl">UI/UX Design</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Interactive wireframes and high-fidelity interface designs that keep system users deeply engaged and make digital paths completely effortless.</p>
              </div>
              <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">Learn More <span>→</span></button>
            </div>

            {/* Service 3 (Featured Modern Stack) */}
            <div className="bg-white p-8 rounded-2xl border-2 border-emerald-500/80 shadow-md flex flex-col justify-between relative hover:shadow-lg transition-all">
              <span className="absolute -top-3 right-6 bg-emerald-500 text-white font-bold text-[10px] uppercase tracking-wider px-3 py-1 rounded-full shadow-sm">Most Popular</span>
              <div className="space-y-4">
                <div className="text-2xl">💻</div>
                <h3 className="font-bold text-slate-900 text-xl">Web Development</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Blazing fast, responsive web systems and portals constructed over modern stacks—optimized to keep maintenance overhead simple and scalability streamlined.</p>
              </div>
              <button className="mt-6 text-sm font-bold text-emerald-600 hover:text-emerald-700 transition-colors flex items-center gap-1">Learn More <span>→</span></button>
            </div>

            {/* Service 4 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="text-2xl">📱</div>
                <h3 className="font-bold text-slate-900 text-xl">Mobile App Design</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Highly intuitive iOS and Android interface architectures engineered explicitly around conversion frameworks and swift mobile runtimes.</p>
              </div>
              <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">Learn More <span>→</span></button>
            </div>

            {/* Service 5 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="text-2xl">🚀</div>
                <h3 className="font-bold text-slate-900 text-xl">Digital Marketing</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Data-driven content generation, targeted email nurture workflows, and tactical paid acquisition funnels configured to acquire highly qualified inbound pipeline.</p>
              </div>
              <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">Learn More <span>→</span></button>
            </div>

            {/* Service 6 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="text-2xl">🔍</div>
                <h3 className="font-bold text-slate-900 text-xl">SEO Optimization</h3>
                <p className="text-sm text-slate-600 leading-relaxed">Deep-dive structural audit remedies, Core Web Vital speed enhancement, and precise keywords to aggressively boost search discovery metrics.</p>
              </div>
              <button className="mt-6 text-sm font-bold text-blue-600 hover:text-blue-700 transition-colors flex items-center gap-1">Learn More <span>→</span></button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. WHY US - VALUE PROP SPLIT */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Why Us</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Why Leading Brands Choose MetroSites</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We keep product cycles refreshingly direct: plan, prototype, build, measure, and scale. No needless tech jargon—just clean code and applications engineered to drive bottom-line velocity.
            </p>
          </div>
          
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm space-y-3">
              <div className="text-xl">💡</div>
              <h4 className="font-bold text-slate-950 text-base">Strategic Thinking</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Every individual viewport layout and element hook maps straight to actionable commercial targets.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm space-y-3">
              <div className="text-xl">📊</div>
              <h4 className="font-bold text-slate-950 text-base">Data-Driven</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Product decisions map directly back to target telemetry metrics, dynamic user testing pools, and real analytics feedback.</p>
            </div>
            <div className="bg-white p-6 rounded-xl border border-slate-200/60 shadow-sm space-y-3">
              <div className="text-xl">🕒</div>
              <h4 className="font-bold text-slate-950 text-base">24/7 Support</h4>
              <p className="text-xs text-slate-600 leading-relaxed">Responsive infrastructure engineers backed by clear SLAs to ensure application architecture preserves execution speed.</p>
            </div>
          </div>
        </div>

        {/* Dynamic ROI Metrics Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8 border-t border-slate-200">
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-3xl font-black text-[#2C423F]">95%</div>
            <div className="text-xs"><p className="font-bold text-slate-900">Client Satisfaction</p><p className="text-slate-500">Creative Excellence built to adapt across devices smoothly.</p></div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-3xl font-black text-emerald-600">200%</div>
            <div className="text-xs"><p className="font-bold text-slate-900">Average ROI Increase</p><p className="text-slate-500">Measurable goals paired with transparent execution visibility.</p></div>
          </div>
          <div className="flex items-center gap-4 bg-white p-6 rounded-xl border border-slate-100 shadow-sm">
            <div className="text-3xl font-black text-[#2C423F]">50+</div>
            <div className="text-xs"><p className="font-bold text-slate-900">Industry Recognitions</p><p className="text-slate-500">Expert engineering team delivering features on schedule.</p></div>
          </div>
        </div>
      </section>

      {/* 6. TEAM / LEADERSHIP GRID */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100 border-y border-slate-200/70">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">Our Leadership</h2>
            <p className="text-sm text-slate-600">The specialist professionals executing your operational solutions.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group">
              <div className="h-48 bg-[#050714] flex items-center justify-center text-3xl opacity-90 group-hover:opacity-100 transition-opacity">👤</div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-base text-slate-900">Thabiso</h4>
                <p className="text-xs text-blue-600 font-medium">Lead Solutions Architect</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group">
              <div className="h-48 bg-[#2C423F] flex items-center justify-center text-3xl opacity-90 group-hover:opacity-100 transition-opacity">👤</div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-base text-slate-900">N. Mokoena</h4>
                <p className="text-xs text-blue-600 font-medium">Senior DevOps Engineer</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl overflow-hidden border border-slate-200/50 shadow-sm group sm:col-span-2 lg:col-span-1 mx-auto w-full sm:max-w-sm lg:max-w-none">
              <div className="h-48 bg-[#050714] flex items-center justify-center text-3xl opacity-90 group-hover:opacity-100 transition-opacity">👤</div>
              <div className="p-5 text-center">
                <h4 className="font-bold text-base text-slate-900">S. Sithole</h4>
                <p className="text-xs text-blue-600 font-medium">Head of UI/UX Design</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. CLIENT TESTIMONIAL FEEDBACK MESH */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-16">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Testimonials</span>
          <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">What Clients Say About MetroSites</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6">
            <p className="text-sm text-slate-600 italic leading-relaxed">"Our traffic and enquiries increased within weeks. The process was smooth from kickoff to launch."</p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <div><h5 className="font-bold text-slate-900 text-sm">Rachel Taylor</h5><p className="text-[11px] text-slate-500">Marketing Lead, GrowthCo</p></div>
              <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2.5 py-1 rounded border border-emerald-200">Verified</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6">
            <p className="text-sm text-slate-600 italic leading-relaxed">"Reliable partner for complex builds. Performance and accessibility scores were excellent across testing targets."</p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <div><h5 className="font-bold text-slate-900 text-sm">Christopher Lee</h5><p className="text-[11px] text-slate-500">VP Engineering, DevStream</p></div>
              <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2.5 py-1 rounded border border-emerald-200">Verified</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6">
            <p className="text-sm text-slate-600 italic leading-relaxed">"User testing improved dramatically after the redesign. The team listened closely and iterated exceptionally quickly."</p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <div><h5 className="font-bold text-slate-900 text-sm">Amanda Rodriguez</h5><p className="text-[11px] text-slate-500">UX Researcher, UserFirst</p></div>
              <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2.5 py-1 rounded border border-emerald-200">Verified</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6 md:col-span-2 lg:col-span-1 max-w-md lg:max-w-none mx-auto w-full">
            <p className="text-sm text-slate-600 italic leading-relaxed">"The team delivered on time with outstanding attention to detail. Our new site loads faster and converts better."</p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <div><h5 className="font-bold text-slate-900 text-sm">Jennifer Martinez</h5><p className="text-[11px] text-slate-500">Product Designer, TechCorp</p></div>
              <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2.5 py-1 rounded border border-emerald-200">Verified</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200/50 shadow-sm flex flex-col justify-between space-y-6 md:hidden lg:flex">
            <p className="text-sm text-slate-600 italic leading-relaxed">"Clean code and great communication. MetroSites worked like an extension of our in-house engineering team."</p>
            <div className="flex justify-between items-center pt-2 border-t border-slate-100">
              <div><h5 className="font-bold text-slate-900 text-sm">Alexander Chen</h5><p className="text-[11px] text-slate-500">Frontend Engineer, InnovateLab</p></div>
              <span className="bg-emerald-50 text-emerald-700 font-semibold text-[10px] px-2.5 py-1 rounded border border-emerald-200">Verified</span>
            </div>
          </div>

        </div>
      </section>

      {/* 8. SPLIT CORE INTERACTIVE CONTACT FORM & DETAIL PANELS */}
      <section className="bg-[#050714] text-white py-24 px-4 sm:px-6 lg:px-8 border-t border-white/5 relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10">
          
          {/* Information Side Panel */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest">Contact Us</span>
              <h2 className="text-3xl font-extrabold tracking-tight">Let's Start a Conversation</h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Ready to transform your ideas? We work with forward-thinking businesses across South Africa. Whether you need a quick tactical landing page or a complex secure application platform, we are here to help.
              </p>
            </div>

            {/* Direct Contact Metadata Points */}
            <div className="space-y-5">
              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xl">✉️</span>
                <div>
                  <h5 className="text-xs text-slate-400 font-medium uppercase tracking-wider">Email Us</h5>
                  <p className="text-sm font-semibold text-white">director@metroshuttle.co.za</p>
                  <p className="text-[11px] text-slate-500">Response guaranteed within 24 hours</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xl">📞</span>
                <div>
                  <h5 className="text-xs text-slate-400 font-medium uppercase tracking-wider">Call Us</h5>
                  <p className="text-sm font-semibold text-white">081 318 6838</p>
                  <p className="text-[11px] text-slate-500">Mon–Fri, 9:00–18:00 SAST</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-xl bg-white/5 border border-white/10">
                <span className="text-xl">📍</span>
                <div>
                  <h5 className="text-xs text-slate-400 font-medium uppercase tracking-wider">Visit Our Office</h5>
                  <p className="text-sm font-semibold text-white">Pretoria, South Africa</p>
                  <p className="text-[11px] text-slate-500">Consultations strictly by appointment</p>
                </div>
              </div>
            </div>

            {/* Micro Stats Footer blocks */}
            <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10 text-center">
              <div><p className="text-lg font-bold text-emerald-400">24h</p><p className="text-[10px] text-slate-400">Average Response</p></div>
              <div><p className="text-lg font-bold text-white">98%</p><p className="text-[10px] text-slate-400">Client Satisfaction</p></div>
              <div><p className="text-lg font-bold text-emerald-400">150+</p><p className="text-[10px] text-slate-400">Projects Shipped</p></div>
            </div>
          </div>

          {/* Core Interactive Contact Form Card */}
          <div className="lg:col-span-7 bg-white text-slate-900 p-8 rounded-2xl shadow-2xl space-y-6">
            <div className="space-y-1">
              <h3 className="text-xl font-bold tracking-tight">Share Your Project Goals</h3>
              <p className="text-xs text-slate-500">Drop your system parameters below and our engineering directors will step in with a simple strategy blueprint.</p>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wide text-slate-700">Full Name</label>
                  <input type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-slate-50" placeholder="John Doe" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase tracking-wide text-slate-700">Company Email</label>
                  <input type="email" className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-slate-50" placeholder="john@company.com" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-700">Subject / Objective</label>
                <input type="text" className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-slate-50" placeholder="Web Platform Architecture, App Migration, etc." />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold uppercase tracking-wide text-slate-700">Project Parameters & Timeline</label>
                <textarea rows="4" className="w-full px-4 py-2.5 text-sm rounded-xl border border-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-600/20 bg-slate-50 resize-none" placeholder="Tell us a little bit about your platform target, conversion objectives, or existing ecosystem bottlenecks..."></textarea>
              </div>

              <button type="submit" className="w-full py-3 bg-[#2C423F] hover:bg-[#20312E] text-white font-bold text-sm rounded-xl transition duration-300 shadow-md shadow-slate-900/10">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}