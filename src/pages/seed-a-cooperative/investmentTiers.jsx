import React from 'react';

const TIERS = [
  {
    title: "The First Thread",
    amount: "$10",
    description: "Provides basic materials for a mother to start her journey."
  },
  {
    title: "The Weaver's Loom",
    amount: "$50",
    description: "Contributes to equipment and training for cooperative members."
  },
  {
    title: "The Harvest Share",
    amount: "$100",
    description: "Supports market access and business development services."
  },
  {
    title: "Legacy Fund",
    amount: "Custom",
    description: "A substantial contribution to create lasting impact and systemic change."
  }
];

const InvestmentTiers = () => {
  return (
    <section className="w-full py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold font-primary text-brand-teal-700 mb-4">
            Tiered Investment Options
          </h2>
          <p className="text-lg font-secondary text-brand-dark-400 max-w-2xl mx-auto">
            Choose a tier that resonates with you. Every contribution weaves a stronger fabric for our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TIERS.map((tier, index) => (
            <div 
              key={index} 
              className="bg-brand-cream-100 rounded-2xl p-8 border border-brand-teal-200 hover:shadow-lg transition-shadow flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 bg-brand-teal-100 rounded-full flex items-center justify-center mb-6 group-hover:bg-brand-teal-200 transition-colors">
                <span className="text-2xl font-bold text-brand-teal-700">{tier.amount}</span>
              </div>
              <h3 className="text-xl font-bold font-primary text-brand-dark mb-3">
                {tier.title}
              </h3>
              <p className="text-brand-dark-400 font-secondary leading-relaxed mb-8 flex-grow">
                {tier.description}
              </p>
              <button className="w-full py-3 px-6 bg-brand-lilac text-white font-bold rounded-full hover:bg-brand-lilac-700 transition-colors">
                Donate Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InvestmentTiers;
