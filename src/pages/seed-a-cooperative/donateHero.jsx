import React from 'react';

const DonateHero = () => {
  return (
    <section 
      className="relative w-full h-[600px] bg-cover bg-center flex items-end justify-center pb-20 overflow-hidden group"
      style={{
        backgroundImage: `url("https://ik.imagekit.io/sbgenu6wj/Internation%20Network%20For%20Single%20Mothers/donatebg.png?updatedAt=1770487650885")`
      }}
    >
      {/* White transparent overlay on the image */}
      <div className="absolute inset-0 bg-white/50 transition-opacity duration-700"></div>
      
      {/* Content with glass background */}
      <div className="relative z-10 w-full">
        <div className="bg-white/60 backdrop-blur-md p-8 md:p-12 text-center w-full shadow-sm border border-white/50">
          <h1 className="text-5xl md:text-7xl font-bold font-primary text-brand-dark mb-6 uppercase tracking-tight">
            Donate With <br className="hidden md:block" /> Dignity
          </h1>
          <p className="text-lg md:text-xl font-secondary text-brand-dark-400 max-w-3xl mx-auto leading-relaxed">
            We are not asking for a donation to sustain poverty; we are inviting an investment to dismantle it. Your resources are the 'threads' that build the rope of national prosperity.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DonateHero;
