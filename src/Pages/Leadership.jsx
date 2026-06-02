import React from 'react';

export default function Leadership() {
  const team = [
    {
      name: "Thabiso",
      role: "Lead Solutions Architect",
      bio: "Specializes in architecting full-stack cloud ecosystems, secure payment gateways, and highly scalable cross-platform frameworks.",
      icon: "💻"
    },
    {
      name: "N. Mokoena",
      role: "Senior DevOps Engineer",
      bio: "Drives automation pipelines, containerization, and continuous delivery systems to guarantee 99.9% uptime infrastructure metrics.",
      icon: "⚙️"
    },
    {
      name: "S. Sithole",
      role: "Head of UI/UX Design",
      bio: "Crafts accessible, high-conversion design systems and wireframe prototypes tailored around user engagement telemetry.",
      icon: "🎨"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans">
      
      {/* Hero Section */}
      <section className="bg-[#2C423F] text-white py-24 px-4 sm:px-6 lg:px-8 text-center relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#050714]/40 rounded-full blur-3xl pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10 space-y-6">
          <span className="text-emerald-400 font-bold text-xs uppercase tracking-widest bg-white/5 border border-white/10 px-4 py-1.5 rounded-full">
            Expertise Behind the Code
          </span>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
            Meet Our Leadership Team
          </h1>
          <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            A dedicated group of software engineers, designers, and systems architects shipping performant, digital-first products across South Africa.
          </p>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {team.map((member, i) => (
            <div key={i} className="bg-white rounded-2xl border border-slate-200/60 overflow-hidden shadow-sm hover:shadow-md transition-all group flex flex-col justify-between">
              <div>
                {/* Styled Profile Placeholder with Custom Color Accents */}
                <div className={`h-52 ${i % 2 === 0 ? 'bg-[#050714]' : 'bg-[#2C423F]'} flex items-center justify-center text-4xl relative overflow-hidden`}>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  <span className="transform group-hover:scale-110 transition-transform duration-300 select-none">👤</span>
                </div>
                
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <h4 className="font-bold text-xl text-slate-900 tracking-tight">{member.name}</h4>
                    <span className="text-lg">{member.icon}</span>
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-blue-600">{member.role}</p>
                  <p className="text-sm text-slate-600 leading-relaxed pt-2 border-t border-slate-100">
                    {member.bio}
                  </p>
                </div>
              </div>

              {/* Individual Social Hook Footer */}
              <div className="p-6 pt-0">
                <button className="w-full py-2.5 bg-slate-50 hover:bg-slate-100 text-slate-700 font-semibold text-xs rounded-xl border border-slate-200/60 transition-colors flex items-center justify-center gap-2">
                  <span>Connect Professional Profile</span>
                  <span className="text-[10px]">↗</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Standards Banner */}
      <section className="bg-[#050714] text-white py-16 px-4 sm:px-6 lg:px-8 text-center border-t border-white/5">
        <div className="max-w-3xl mx-auto space-y-4">
          <h3 className="text-xl sm:text-2xl font-bold tracking-tight">Direct Access to Senior Partners</h3>
          <p className="text-sm text-slate-400 leading-relaxed max-w-xl mx-auto">
            We don’t hide behind project managers. Our lead engineers design your system blueprints, join your roadmap kickoff calls, and guide your implementation frameworks directly.
          </p>
        </div>
      </section>

    </div>
  );
}