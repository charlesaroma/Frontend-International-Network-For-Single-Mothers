import React from 'react';

// Icons
const SeedIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-lilac-800">
    <path d="M12 22V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C12 22 7 22 7 17C7 14.2386 9.23858 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22C12 22 17 22 17 17C17 14.2386 14.7614 12 12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C12 7 9 4 6 4C6 7 9 9 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 10C12 6.5 15 3 18 3C18 6.5 15 9.5 12 10Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const EquippingIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-lilac-800">
    <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 21V19C22.9993 18.1137 22.7044 17.2528 22.1614 16.5523C21.6184 15.8519 20.8581 15.3516 20 15.13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0078 6.11684 19.0078 7.005C19.0078 7.89316 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ProductivityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-lilac-800">
    <path d="M12 20V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 20V4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M6 20V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const StabilityIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-lilac-800">
    <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 8V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const ImpactIcon = () => (
  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-brand-lilac-800">
    <path d="M4 15C4 15 5 14 8 14C11 14 13 16 16 16C19 16 20 15 20 15V3C20 3 19 4 16 4C13 4 11 2 8 2C5 2 4 3 4 3V15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M4 22V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const STEPS = [
  { label: "The Seed", icon: <SeedIcon /> },
  { label: "Equipping", icon: <EquippingIcon /> },
  { label: "Productivity", icon: <ProductivityIcon /> },
  { label: "Stability", icon: <StabilityIcon /> },
  { label: "National Impact", icon: <ImpactIcon /> },
];

const PathToProsperity = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-8 md:px-24 text-center">
        <h2 className="text-3xl md:text-4xl font-bold font-primary text-black mb-16">
          Path to Prosperity
        </h2>

        <div className="relative">
          {/* Horizontal Line separating Icons and Text */}
          <div className="hidden md:block absolute top-26 left-0 right-0 h-1 bg-brand-lilac-600 z-0 opacity-70"></div>

          <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 md:gap-4 relative z-10">
            {STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center w-full md:w-1/5">
                {/* Icon Circle */}
                <div className="w-24 h-24 rounded-full bg-brand-cream-200 flex items-center justify-center mb-8 relative z-10 shadow-sm border border-brand-cream-600/10">
                  {step.icon}
                </div>
                
                {/* Label */}
                <h3 className="text-lg md:text-xl font-bold font-primary text-brand-dark">
                  {step.label}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PathToProsperity;
