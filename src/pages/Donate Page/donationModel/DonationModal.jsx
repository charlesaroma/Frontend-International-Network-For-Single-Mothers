import React, { useState, useEffect, useCallback } from "react";
import CampaignCard from "./CampaignCard";
import DonationPanel from "./DonationPanel";

/**
 * Donation Modal — Orchestrator.
 * Manages overlay, close logic, state, and composes
 * CampaignCard (left) + DonationPanel (right).
 *
 * @param {{
 *   isOpen: boolean,
 *   onClose: Function,
 *   tier: { title: string, subtitle: string, amount: string, description: string } | null
 * }} props
 */
const DonationModal = ({ isOpen, onClose, tier }) => {
  const [frequency, setFrequency] = useState("once");
  const [selectedAmount, setSelectedAmount] = useState("");
  const [customAmount, setCustomAmount] = useState("");
  const [step, setStep] = useState("donation");

  /* ── Reset state when modal opens / tier changes ── */
  useEffect(() => {
    if (isOpen) {
      setStep("donation");
      setFrequency("once");
      if (tier?.amount && !tier.amount.includes("+")) {
        setSelectedAmount(tier.amount.replace(/[^0-9]/g, ""));
        setCustomAmount("");
      } else {
        setSelectedAmount("");
        setCustomAmount("");
      }
    }
  }, [isOpen, tier]);

  /* Lock body scroll (robust for mobile) */
  useEffect(() => {
    if (isOpen) {
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";

      return () => {
        document.body.style.position = "";
        document.body.style.top = "";
        document.body.style.width = "";
        document.body.style.overflow = "";
        window.scrollTo(0, scrollY);
      };
    }
  }, [isOpen]);

  /* ── ESC key closes modal ── */
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

  /* ── Handlers ── */
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
    <>
      {/* ── FULL-SCREEN OVERLAY ── */}
      <div className="fixed inset-0 z-100 overflow-y-auto">
        {/* Dark backdrop */}
        <div
          className="absolute inset-0 bg-brand-dark/90 backdrop-blur-sm"
          onClick={onClose}
        />

        {/* Close button — top-right of viewport */}
        <button
          onClick={onClose}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-60 text-brand-cream-100 hover:opacity-70 transition-opacity cursor-pointer"
          aria-label="Close modal"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* ── CONTENT — cards + security links ── */}
        <div className="relative z-55 min-h-screen md:min-h-0 flex items-start md:items-center justify-center p-4 py-14 md:p-8">
          <div className="w-full max-w-[1200px] flex flex-col md:flex-row items-stretch md:items-end justify-center gap-4 md:gap-6">
            {/* Two cards side by side */}
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-stretch">
              <CampaignCard tier={tier} />

              <DonationPanel
                frequency={frequency}
                setFrequency={setFrequency}
                selectedAmount={selectedAmount}
                customAmount={customAmount}
                onPresetClick={handlePresetClick}
                onCustomChange={handleCustomChange}
                step={step}
                setStep={setStep}
                canContinue={canContinue}
                finalAmount={finalAmount}
              />
            </div>

            {/* Security links — to the right, bottom-aligned with cards */}
            <div className="hidden md:flex flex-col items-end gap-2 pb-2 shrink-0">
              <p className="flex items-center gap-2 text-sm text-brand-cream-100/70 hover:text-brand-cream-100 hover:underline transition-all cursor-help whitespace-nowrap">
                Is my donation secure
                <span className="w-5 h-5 rounded-full bg-brand-cream-100/30 text-brand-cream-100 text-[10px] font-bold grid place-items-center">
                  ?
                </span>
              </p>
              <p className="flex items-center gap-2 text-sm text-brand-cream-100/70 hover:text-brand-cream-100 hover:underline transition-all cursor-help whitespace-nowrap">
                Can I cancel my recurring donation
                <span className="w-5 h-5 rounded-full bg-brand-cream-100/30 text-brand-cream-100 text-[10px] font-bold grid place-items-center">
                  ?
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationModal;
