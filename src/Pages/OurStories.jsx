import React from 'react';

export default function OurStories() {
  const milestones = [
    {
      year: "The Spark",
      title: "Bridging the Digital Divide",
      desc: "MetroSites was established with a clear core objective: dismantling over-complicated technical jargon and delivering exceptionally clean, high-performance web ecosystems for startups and growing enterprise groups."
    },
    {
      year: "150+ Shipped",
      title: "Proving the Framework",
      desc: "We scaled our technical execution across South Africa, successfully shipping custom web platforms, educational LMS software suites, responsive mobile architectures, and measurable conversion blueprints."
    },
    {
      year: "The Present & Beyond",
      title: "Sustainable Technical Scale",
      desc: "Expanding parameters into end-to-end solutions—from robust localized hardware supplies and cloud networking systems to integrated renewable energy configurations for continuous digital operations."
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#2C423F] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#050714]/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            Our Legacy & Journey
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            The MetroSites Story
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            How a dedicated team of engineers combined product strategy, clean visual interfaces, and scalable infrastructure to empower regional commerce.
          </p>
        </div>
      </section>

      {/* Narrative Split Block Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-4 lg:sticky lg:top-28">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">Our Philosophy</span>
            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">Built to Deliver Uncompromised Performance</h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              We believe great engineering isn’t just about lines of script; it’s about aligning software layouts to objective operational objectives. Whether prototyping agile wireframes or standing up network clusters, your bottom-line velocity remains our prime target parameter.
            </p>
            <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center gap-3">
              <span className="text-emerald-600 font-bold text-xl">✓</span>
              <p className="text-xs text-emerald-800 font-medium">Clear plans, clean setups, fast execution timelines, and zero jargon.</p>
            </div>
          </div>

          {/* Interactive Dynamic Vertical Timeline */}
          <div className="lg:col-span-7 space-y-12 pl-2 sm:pl-8 border-l-2 border-slate-200/80">
            {milestones.map((milestone, idx) => (
              <div key={idx} className="relative group space-y-3">
                {/* Timeline Dot Indicator */}
                <div className="absolute -left-[15px] sm:-left-[39px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-[#2C423F] group-hover:border-emerald-500 transition-colors duration-300 shadow-sm"></div>
                
                <span className="inline-block bg-[#050714] text-emerald-400 font-mono font-bold text-xs tracking-wider px-3 py-1 rounded-md">
                  {milestone.year}
                </span>
                
                <h3 className="text-xl font-bold text-slate-950 tracking-tight group-hover:text-blue-600 transition-colors">
                  {milestone.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed">
                  {milestone.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Micro Metrics Closure */}
      <section className="bg-slate-100 py-16 px-4 sm:px-6 lg:px-8 border-t border-slate-200/60 text-center">
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-xl border border-slate-200/40 shadow-sm"><p className="text-2xl font-black text-[#2C423F]">100%</p><p className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Committed Execution</p></div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/40 shadow-sm"><p className="text-2xl font-black text-emerald-600">Local</p><p className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">South African Footprint</p></div>
          <div className="bg-white p-6 rounded-xl border border-slate-200/40 shadow-sm"><p className="text-2xl font-black text-[#2C423F]">Continuous</p><p className="text-xs text-slate-500 font-medium uppercase mt-1 tracking-wider">Optimization Paradigms</p></div>
        </div>
      </section>

    </div>
  );
}