import React from "react";
import ContinueWithPesapal from "./ContinueWithPesapal";

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

/**
 * Right card of the Donation Modal.
 * Handles frequency toggle, amount selection, custom input,
 * and the "Continue with PesaPal" flow.
 *
 * @param {{
 *   frequency: 'once' | 'monthly',
 *   setFrequency: Function,
 *   selectedAmount: string,
 *   customAmount: string,
 *   onPresetClick: Function,
 *   onCustomChange: Function,
 *   step: 'donation' | 'pesapal',
 *   setStep: Function,
 *   canContinue: boolean,
 *   finalAmount: string,
 * }} props
 */
const DonationPanel = ({
  frequency,
  setFrequency,
  selectedAmount,
  customAmount,
  onPresetClick,
  onCustomChange,
  step,
  setStep,
  canContinue,
  finalAmount,
}) => {
  return (
    <div className="w-full md:max-w-[400px] bg-brand-cream-100 rounded-xl shadow-lg p-5 md:p-8 flex flex-col overflow-y-auto max-h-[75vh] md:max-h-[600px]">
      {step === "donation" ? (
        <div className="flex flex-col space-y-4 md:space-y-6">
          {/* Title */}
          <h2 className="text-2xl font-bold font-primary text-brand-dark text-center">
            Empower A Mother Today
          </h2>

          {/* ── TOGGLE SWITCH ── */}
          <div className="flex justify-center">
            <div className="relative bg-brand-dark-200 rounded-full h-12 flex items-center p-1 w-[260px]">
              <button
                onClick={() => setFrequency("once")}
                className={`flex-1 h-full rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 cursor-pointer z-10
                  ${
                    frequency === "once"
                      ? "bg-brand-lilac text-brand-cream-100 shadow-md"
                      : "text-brand-dark-400 hover:text-brand-dark"
                  }`}
              >
                Give Once
              </button>

              {/* OR badge */}
              <span className="absolute left-1/2 -translate-x-1/2 z-20 w-8 h-8 rounded-full bg-brand-cream-100 shadow-sm flex items-center justify-center text-[10px] font-bold text-brand-dark-400">
                OR
              </span>

              <button
                onClick={() => setFrequency("monthly")}
                className={`flex-1 h-full rounded-full text-xs font-bold uppercase tracking-wide transition-all duration-300 cursor-pointer z-10
                  ${
                    frequency === "monthly"
                      ? "bg-brand-teal text-brand-cream-100 shadow-md"
                      : "text-brand-dark-400 hover:text-brand-dark"
                  }`}
              >
                Monthly
              </button>
            </div>
          </div>

          {/* ── PRESET AMOUNT GRID ── */}
          <div className="grid grid-cols-3 gap-3">
            {PRESET_AMOUNTS.map((val) => {
              const numericVal = val.replace(/,/g, "");
              const isActive = selectedAmount === numericVal;
              return (
                <button
                  key={val}
                  onClick={() => onPresetClick(numericVal)}
                  className={`h-11 rounded-md border text-sm font-semibold font-secondary transition-all duration-200 cursor-pointer
                    ${
                      isActive
                        ? "bg-brand-lilac-100 border-brand-lilac text-brand-lilac-800 shadow-inner"
                        : "bg-brand-cream-100 border-brand-dark-200 text-brand-dark-400 hover:border-brand-lilac-300 hover:text-brand-dark"
                    }`}
                >
                  ${val}
                </button>
              );
            })}
          </div>

          {/* ── CUSTOM AMOUNT INPUT ── */}
          <div className="flex items-center border-b-2 border-brand-dark-200 focus-within:border-brand-lilac transition-colors h-14">
            <span className="text-2xl text-brand-dark-300 font-secondary pl-1 pr-3">
              $
            </span>
            <input
              type="number"
              placeholder="0.00"
              value={customAmount}
              onChange={onCustomChange}
              className="flex-1 h-full bg-transparent text-2xl font-secondary text-brand-dark placeholder-brand-dark-200 focus:outline-none"
            />
          </div>

          {/* ── CONTINUE WITH PESAPAL BUTTON ── */}
          <button
            onClick={() => canContinue && setStep("pesapal")}
            disabled={!canContinue}
            className={`w-full h-14 rounded-md border border-brand-dark-200 bg-brand-cream-100 shadow-sm flex items-center justify-center gap-2 transition-all duration-200
              ${
                canContinue
                  ? "hover:shadow-md hover:bg-brand-cream-200 cursor-pointer"
                  : "opacity-50 cursor-not-allowed"
              }`}
          >
            <span className="text-brand-dark-400 font-semibold text-sm">
              Continue with
            </span>
            <span className="text-lg font-bold tracking-tight">
              <span className="text-pesapal-blue">pesa</span>
              <span className="text-pesapal-red">pal</span>
            </span>
          </button>
        </div>
      ) : (
        <ContinueWithPesapal
          amount={finalAmount}
          onBack={() => setStep("donation")}
        />
      )}
    </div>
  );
};

export default DonationPanel;
