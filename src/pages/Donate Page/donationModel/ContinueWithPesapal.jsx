import React from "react";

/**
 * PesaPal payment mock view.
 * Shown after the user clicks "Continue with PesaPal" on the DonationPanel.
 *
 * @param {{ amount: string, onBack: Function }} props
 */
const ContinueWithPesapal = ({ amount, onBack }) => {
  const steps = [
    { num: 1, label: "Enter Details", active: true },
    { num: 2, label: "Make Payment", active: false },
    { num: 3, label: "Confirmation", active: false },
  ];

  return (
    <div className="h-full flex flex-col">
      {/* Back button */}
      <div className="mb-6">
        <button
          onClick={onBack}
          className="text-sm text-brand-dark-300 hover:text-brand-lilac flex items-center gap-1 cursor-pointer transition-colors"
        >
          ← Back
        </button>
      </div>

      {/* PesaPal Logo */}
      <div className="mb-6">
        <span className="text-2xl font-bold tracking-tight">
          <span className="text-pesapal-blue">pesa</span>
          <span className="text-pesapal-red">pal</span>
        </span>
      </div>

      {/* Stepper */}
      <div className="flex items-center justify-between relative mb-8">
        <div className="absolute top-1/2 left-0 w-full h-0.5 bg-brand-dark-200 -z-10" />
        <div className="absolute top-1/2 left-0 w-1/3 h-0.5 bg-pesapal-red -z-10" />

        {steps.map((s) => (
          <div
            key={s.num}
            className="flex flex-col items-center bg-brand-cream-100 px-2"
          >
            <div
              className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mb-1
                ${
                  s.active
                    ? "bg-pesapal-red text-brand-cream-100"
                    : "bg-brand-dark-200 text-brand-dark-400"
                }`}
            >
              {s.num}
            </div>
            <span
              className={`text-xs ${s.active ? "text-brand-dark" : "text-brand-dark-300"}`}
            >
              {s.label}
            </span>
          </div>
        ))}
      </div>

      {/* Mock Form Fields */}
      <div className="space-y-4 opacity-50 pointer-events-none select-none">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-brand-dark mb-1">
              First Name *
            </label>
            <div className="h-10 border border-brand-dark-200 rounded bg-brand-cream-200" />
          </div>
          <div>
            <label className="block text-xs font-bold text-brand-dark mb-1">
              Last Name *
            </label>
            <div className="h-10 border border-brand-dark-200 rounded bg-brand-cream-200" />
          </div>
        </div>
        <div>
          <label className="block text-xs font-bold text-brand-dark mb-1">
            Email Address *
          </label>
          <div className="h-10 border border-brand-dark-200 rounded bg-brand-cream-200" />
        </div>
        <div>
          <label className="block text-xs font-bold text-brand-dark mb-1">
            Amount (USD) *
          </label>
          <div className="h-10 border border-brand-dark-200 rounded bg-brand-cream-200 flex items-center px-3 text-brand-dark-400 font-secondary">
            ${amount || "0.00"}
          </div>
        </div>
      </div>

      {/* Mock proceed button */}
      <div className="mt-auto pt-6 text-center">
        <p className="text-sm text-brand-dark-300 mb-4">
          This is a demo of the PesaPal integration.
          <br />
          In production, this redirects to the secure PesaPal gateway.
        </p>
        <button className="block w-full bg-pesapal-red text-brand-cream-100 font-bold py-4 rounded-md hover:opacity-90 transition-opacity uppercase tracking-wide cursor-pointer">
          Proceed to Payment (Mock)
        </button>
      </div>
    </div>
  );
};

export default ContinueWithPesapal;
