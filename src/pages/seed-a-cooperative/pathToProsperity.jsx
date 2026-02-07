import React from 'react';

const PathToProsperity = () => {
  return (
    <section className="w-full py-20 bg-brand-lilac-100">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2">
             {/* Placeholder for an image or graphic */}
             <div className="w-full aspect-video bg-brand-lilac-300 rounded-2xl flex items-center justify-center">
                <span className="text-brand-lilac-800 font-bold opacity-50">Impact Graphic Placeholder</span>
             </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold font-primary text-brand-lilac-900 mb-6">
              Path to Prosperity
            </h2>
            <p className="text-lg font-secondary text-brand-dark mb-6 leading-relaxed">
              Your investment follows a clear path: from immediate relief to sustainable income generation. We track every dollar to ensure it directly empowers mothers to become self-reliant entrepreneurs.
            </p>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-teal shrink-0 mt-1"></div>
                <span className="text-brand-dark-400 font-medium">Step 1: Resource Provision</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-lilac shrink-0 mt-1"></div>
                <span className="text-brand-dark-400 font-medium">Step 2: Skills Training</span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-brand-pink shrink-0 mt-1"></div>
                <span className="text-brand-dark-400 font-medium">Step 3: Market Integration</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToProsperity;
