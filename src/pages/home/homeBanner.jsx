import React from 'react';

const HomeBanner = () => {
  return (
    <div className="w-full bg-white py-20 flex justify-center items-center">
      <div className="max-w-[950px] px-4 text-center flex flex-col gap-4">
        <h2 className="font-secondary font-semibold text-[48px] leading-tight text-brand-dark">
          From Resilience to Economic Power
        </h2>
        <p className="font-secondary font-medium text-brand-dark-400 text-[28px] leading-normal">
          We are igniting a national transformation by turning single mothers into unstoppable economic force.
        </p>
      </div>
    </div>
  );
};

export default HomeBanner;