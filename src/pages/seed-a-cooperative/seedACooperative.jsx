import React from 'react';
import Hero from './donateHero'
import InvestmentTiers from './investmentTiers'
import PathToProsperity from './pathToProsperity'


const SeedACooperative = () => {
  return (
    <div className=" pb-10 min-h-screen">
      <Hero />
      <InvestmentTiers />
      <PathToProsperity />
    </div>
  );
};

export default SeedACooperative;
