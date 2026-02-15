import React, { useState, useEffect, useCallback } from "react";
import ContinueWithPesapal from "../../../Donate Page/donationModel/ContinueWithPesapal";

const PRESET_AMOUNTS = [
  "10",
  "100",
  "500",
  "1000",
  "2,500",
  "5,000",
  "10,000",
  "20,000",
  "50,000",
];

const SendDonation = ({ isOpen, onClose }) => {
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState("donation"); // 'donation' | 'pesapal'

  // Reset state when modal opens
  useEffect(() => {
    if (isOpen) {
      setStep("donation");
      setSelectedAmount("");
      setCustomAmount("");
    }
  }, [isOpen]);

  // Lock body scroll
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ESC key closes modal
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === "Escape") onClose();
    },
    [onClose],
  );

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen, handleKeyDown]);

  if (!isOpen) return null;

  const handlePresetClick = (val) => {
    setSelectedAmount(val);
    setCustomAmount("");
  };

  const handleCustomChange = (e) => {
    setCustomAmount(e.target.value);
    setSelectedAmount("");
  };

  const finalAmount = selectedAmount || customAmount;
  const canContinue =
    finalAmount && parseFloat(finalAmount.replace(/,/g, "")) > 0;

  return (
    <div className="fixed inset-0 z-100 overflow-hidden">
      {/* Dark backdrop */}
      <div
        className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Close button */}
      <button
        onClick={onClose}
        className="fixed top-4 right-4 md:top-6 md:right-6 z-60 text-brand-cream-100 hover:opacity-70 transition-opacity cursor-pointer"
        aria-label="Close modal"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.5}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Content */}
      <div className="relative z-55 h-full w-full flex items-center justify-center p-4">
        <div className="w-full max-w-[480px] flex flex-col items-center gap-8">
          {/* Card */}
          <div className="w-full bg-white rounded-lg shadow-xl overflow-hidden p-6 md:p-10">
            {step === "donation" ? (
              <div className="flex flex-col items-center">
                <h2 className="text-2xl md:text-3xl font-bold font-primary text-brand-dark mb-8 text-center">
                  Sponsor with Capital
                </h2>

                {/* Amount Grid */}
                <div className="grid grid-cols-3 gap-3 w-full mb-6">
                  {PRESET_AMOUNTS.map((val) => {
                    const numericVal = val.replace(/,/g, "");
                    const isActive = selectedAmount === numericVal;
                    return (
                      <button
                        key={val}
                        onClick={() => handlePresetClick(numericVal)}
                        className={`h-12 rounded border text-sm font-bold font-primary transition-all duration-200 cursor-pointer flex items-center justify-center
                          ${
                            isActive
                              ? "bg-brand-lilac-100 border-brand-lilac text-brand-lilac-800 shadow-inner"
                              : "bg-brand-cream-100 border-transparent text-brand-dark hover:border-brand-lilac-300"
                          }`}
                      >
                        ${val}
                      </button>
                    );
                  })}
                </div>

                {/* Custom Amount Input */}
                <div className="flex items-center w-full bg-brand-cream-100/50 border border-brand-dark-200 rounded h-14 px-4 mb-8 focus-within:border-brand-lilac transition-colors">
                  <span className="text-xl text-brand-dark-400 font-secondary border-r border-brand-dark-200 pr-3 mr-3 h-6 flex items-center">
                    $
                  </span>
                  <input
                    type="number"
                    placeholder="0.00"
                    value={customAmount}
                    onChange={handleCustomChange}
                    className="flex-1 h-full bg-transparent text-2xl font-secondary text-brand-dark placeholder-brand-dark-200/50 focus:outline-none"
                  />
                </div>

                {/* Continue Button */}
                <button
                  onClick={() => canContinue && setStep("pesapal")}
                  disabled={!canContinue}
                  className={`w-full h-14 rounded border border-brand-dark-200 bg-white shadow-sm flex items-center justify-center gap-2 transition-all duration-200 mb-6
                    ${
                      canContinue
                        ? "hover:shadow-md hover:bg-brand-cream-100 cursor-pointer"
                        : "opacity-60 cursor-not-allowed"
                    }`}
                >
                  <span className="text-brand-dark-400 font-bold text-sm tracking-wide">
                    Continue with
                  </span>
                  <span className="text-xl font-bold tracking-tight">
                    <span className="text-pesapal-blue">pesa</span>
                    <span className="text-pesapal-red">pal</span>
                  </span>
                </button>

                <p className="text-[10px] text-brand-dark-400 leading-tight text-center max-w-xs mx-auto">
                  PesaPal gateway ensures your donation is secure and tracked
                  with a "Gold Standard" of integrity.
                </p>
              </div>
            ) : (
              <ContinueWithPesapal
                amount={finalAmount}
                onBack={() => setStep("donation")}
              />
            )}
          </div>

          {/* Security Links (Outside card, bottom right aligned usually, but here centered below per UI mock logic or layout) */}
          <div className="flex flex-col items-center md:items-end w-full gap-2 px-4">
            {/* Actually the UI screenshot shows them bottom right of the SCREEN, outside the modal card. */}
            {/* Let's position them absolute on desktop or flex end */}
          </div>
        </div>

        {/* Security links - Fixed positioning inside the container to match "bottom right" relative to screen */}
        <div className="absolute bottom-8 right-8 flex-col items-end gap-3 z-60 hidden md:flex">
          <button className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-cream-200 transition-colors group cursor-help">
            Is my donation secure
            <span className="w-4 h-4 rounded-full bg-white text-brand-dark flex items-center justify-center text-[10px] font-black group-hover:bg-brand-cream-200">
              ?
            </span>
          </button>
          <button className="flex items-center gap-2 text-xs font-bold text-white hover:text-brand-cream-200 transition-colors group cursor-help">
            Can I cancel my recurring donation
            <span className="w-4 h-4 rounded-full bg-white text-brand-dark flex items-center justify-center text-[10px] font-black group-hover:bg-brand-cream-200">
              ?
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default SendDonation;
