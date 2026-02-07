import React from 'react';
import Hero from './donateHero'
import Stats from './stats'
import InvestmentTiers from './investmentTiers'
import PathToProsperity from './pathToProsperity'


const SeedACooperative = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <InvestmentTiers />
      <PathToProsperity />
    </div>
  );
};

export default SeedACooperative;
