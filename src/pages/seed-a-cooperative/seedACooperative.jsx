import React, { useState } from 'react';
import Hero from './donateHero'
import Stats from './stats'
import InvestmentTiers from './investmentTiers'
import PathToProsperity from './pathToProsperity'
import EmpowerAMotherToday from './empowerAMotherToday'
import DonationModal from './donationModel/DonationModal'


const SeedACooperative = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTier, setSelectedTier] = useState(null);

  const handleDonateClick = (tier = null) => {
    setSelectedTier(tier);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTier(null);
  };

  return (
    <div className="min-h-screen">
      <Hero />
      <Stats />
      <InvestmentTiers onDonateClick={handleDonateClick} />
      <PathToProsperity />
      <EmpowerAMotherToday onDonateClick={() => handleDonateClick(null)} />
      
      <DonationModal 
        isOpen={isModalOpen} 
        onClose={handleCloseModal} 
        tier={selectedTier} 
      />
    </div>
  );
};

export default SeedACooperative;
