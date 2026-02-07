import React from 'react';

const PathToProsperity = () => {
  return (
    <section className="w-full py-24 bg-brand-lilac-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image / Visual */}
          <div className="w-full lg:w-1/2">
             <div className="w-full aspect-4/3 bg-brand-lilac-200 rounded-3xl overflow-hidden shadow-lg flex items-center justify-center relative group">
                {/* Decorative pattern or placeholder */}
                <div className="absolute inset-0 bg-brand-lilac-300/30"></div>
                <span className="relative z-10 text-brand-lilac-800 font-bold text-lg opacity-60 uppercase tracking-widest border-2 border-brand-lilac-800/30 px-6 py-3 rounded-lg">
                  Impact Graphic
                </span>
             </div>
          </div>

          {/* Right: Content */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold font-primary text-brand-lilac-900 mb-6 leading-tight">
              The Path to <br/> <span className="text-brand-teal-700">Prosperity</span>
            </h2>
            <p className="text-lg md:text-xl font-secondary text-brand-dark-400 mb-10 leading-relaxed max-w-lg">
              Your investment follows a clear path: from immediate relief to sustainable income generation. We track every dollar to ensure it directly empowers mothers.
            </p>
            
            <div className="space-y-8 relative pl-4">
              {/* Vertical Line Line */}
              <div className="absolute left-[27px] top-4 bottom-4 w-0.5 bg-brand-lilac-300/50"></div>

              {/* Step 1 */}
              <div className="relative flex items-start gap-6 group">
                <div className="relative z-10 w-14 h-14 rounded-full bg-brand-teal flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold font-primary text-xl">1</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold font-primary text-brand-dark mb-1">Resource Provision</h3>
                  <p className="text-brand-dark-400 font-secondary text-sm">Providing the essential tools and capital to start.</p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative flex items-start gap-6 group">
                <div className="relative z-10 w-14 h-14 rounded-full bg-brand-lilac flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold font-primary text-xl">2</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold font-primary text-brand-dark mb-1">Skills Training</h3>
                  <p className="text-brand-dark-400 font-secondary text-sm">Expert-led workshops on business and craft.</p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative flex items-start gap-6 group">
                <div className="relative z-10 w-14 h-14 rounded-full bg-brand-pink flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300">
                  <span className="text-white font-bold font-primary text-xl">3</span>
                </div>
                <div className="pt-2">
                  <h3 className="text-xl font-bold font-primary text-brand-dark mb-1">Market Integration</h3>
                  <p className="text-brand-dark-400 font-secondary text-sm">Connecting products to local and global markets.</p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToProsperity;
