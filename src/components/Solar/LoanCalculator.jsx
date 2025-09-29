import React, { useEffect, useState } from "react";

export default function LoanCalculator({ sharedLoanData, setSharedLoanData }) {
  const [isVisible, setIsVisible] = useState(false);

  // Use shared state or local state as fallback
  const { loanAmount, loanTerm, activeTab } = sharedLoanData || { loanAmount: 50_000, loanTerm: 0.5, activeTab: "residential" };
  
  // Helper functions to update shared state
  const updateLoanAmount = (amount) => {
    if (setSharedLoanData) {
      setSharedLoanData(prev => ({ ...prev, loanAmount: amount }));
    }
  };

  const updateLoanTerm = (term) => {
    if (setSharedLoanData) {
      setSharedLoanData(prev => ({ ...prev, loanTerm: term }));
    }
  };

  const updateActiveTab = (tab) => {
    if (setSharedLoanData) {
      setSharedLoanData(prev => ({ ...prev, activeTab: tab }));
    }
  };
  
  // Dynamic interest rate based on tab
  const getInterestRate = () => {
    switch(activeTab) {
      case 'residential': return 7.99;
      case 'commercial': return 7.99;
      case 'housingSociety': return 9.15;
      default: return 7.99;
    }
  };
  
  const interestRate = getInterestRate();

  useEffect(() => setIsVisible(true), []);

  // ---- Helpers ----
  const emi = React.useMemo(() => {
    const P = loanAmount;
    const r = interestRate / 100 / 12;     // monthly rate
    const n = Math.round(loanTerm * 12);   // months

    if (r === 0) return P / n;
    return (P * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1);
  }, [loanAmount, loanTerm, interestRate, activeTab]);

  const totalInterest = emi * Math.round(loanTerm * 12) - loanAmount;
  const totalRepayment = emi * Math.round(loanTerm * 12);

  const fmtINR = (v) =>
    new Intl.NumberFormat("en-IN", { style: "currency", currency: "INR" }).format(
      Math.round(v)
    );
  const fmtNum = (v) => new Intl.NumberFormat("en-IN").format(Math.round(v));

  // Track fill % - non-linear mapping
  const amtMin = 50_000;
  const amtMax = 10_000_000;
  
  // Calculate which segment we're in and the percentage within that segment
  const getAmountPercentage = (amount) => {
    if (amount <= 50_000) return 0;
    if (amount <= 1_000_000) return 20;
    if (amount <= 2_500_000) return 40;
    if (amount <= 5_000_000) return 60;
    if (amount <= 7_500_000) return 80;
    return 100;
  };
  
  const amtPct = getAmountPercentage(loanAmount);

  const termMin = 0.5;
  const termMax = 5;
  
  // Calculate which term stop we're at for visual fill progress
  const getTermPercentage = (term) => {
    if (term <= 0.5) return 0;
    if (term <= 1) return 20;
    if (term <= 2) return 40;
    if (term <= 3) return 60;
    if (term <= 4) return 80;
    return 100;
  };
  
  const termPct = getTermPercentage(loanTerm);

  const amtStops = [
    { label: "50K", value: 50_000, left: "0%" },
    { label: "10L", value: 1_000_000, left: "20%" },
    { label: "25L", value: 2_500_000, left: "40%" },
    { label: "50L", value: 5_000_000, left: "60%" },
    { label: "75L", value: 7_500_000, left: "80%" },
    { label: "1CR", value: 10_000_000, left: "100%" },
  ];

  const termStops = [
    { label: "6M", value: 0.5, left: "0%" },
    { label: "1Y", value: 1, left: "20%" },
    { label: "2Y", value: 2, left: "40%" },
    { label: "3Y", value: 3, left: "60%" },
    { label: "4Y", value: 4, left: "80%" },
    { label: "5Y", value: 5, left: "100%" },
  ];

  return (
    <section
      className={`w-full bg-gray-50 pt-[100px] pb-[70px] transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Container */}
      <div className="max-w-[1600px] mx-auto px-[15px]">
        {/* Heading */}
        <div className="text-center mb-8">
          <h2 className="text-[32px] font-bold text-[#111827] mb-2 drop-shadow-lg">
            Loan Calculator
          </h2>
          <p className="text-[16px] text-[#666666]">
            Calculate your loan EMI and repayment details
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex bg-gray-100 rounded-lg p-1">
            {[
              { id: "residential", label: "Residential" },
              { id: "commercial", label: "Commercial" },
              { id: "housingSociety", label: "Housing Society" },
            ].map((tab) => (
              <button
                key={tab.id}
                    onClick={() => updateActiveTab(tab.id)}
                className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                  activeTab === tab.id
                    ? "bg-[#008000] text-white shadow-sm"
                    : "text-[#333333] hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Panels */}
        <div className="flex justify-between gap-8" style={{ marginLeft: '120px', marginRight: '120px' }}>
              {/* Left: Calculator */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ width: '650px', height: '500px' }}>
            <div className="bg-[#008000] text-white flex items-center justify-center" style={{ width: '650px', height: '60px' }}>
              <h3 className="text-[20px] font-semibold">Loan Calculator</h3>
            </div>

            <div className="p-[25px]">
              {/* Loan Amount */}
              <div className="mb-8">
                <label className="block text-[16px] font-semibold text-[#333333] mb-3">
                  Loan Amount:
                </label>

                <input
                  type="text"
                  value={fmtNum(loanAmount)}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/,/g, "");
                    if (/^\d*$/.test(raw)) {
                      const n = Number(raw || 0);
                      if (n >= amtMin && n <= amtMax) {
                        // Find closest stop for snapping
                        const closestStop = amtStops.reduce((closest, stop) => 
                          Math.abs(stop.value - n) < Math.abs(closest.value - n) ? stop : closest
                        );
                        updateLoanAmount(Math.abs(n - closestStop.value) <= 25000 ? closestStop.value : n);
                      }
                    }
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent"
                />

                {/* Range + dots */}
                <div className="mt-6">
                  <div className="relative">
                  <input
                    type="range"
                    min="0"
                    max="5"
                    step="1"
                    value={amtStops.findIndex(s => s.value === loanAmount)}
                    onChange={(e) => {
                      const index = Number(e.target.value);
                      updateLoanAmount(amtStops[index].value);
                    }}
                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                    style={{
                      background: `linear-gradient(to right,#008000 0%,#008000 ${amtPct}%,#e5e7eb ${amtPct}%,#e5e7eb 100%)`,
                    }}
                  />
                    {/* Dots */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 pointer-events-none">
                      {amtStops.map((s) => {
                        const filled = loanAmount >= s.value;
                        return (
                          <div
                            key={s.value}
                            className={`absolute w-3 h-3 rounded-full ${
                              filled
                                ? "bg-[#008000]"
                                : "bg-white border-2 border-[#008000]"
                            }`}
                            style={{ left: s.left, transform: "translateX(-50%)" }}
                          />
                        );
                      })}
                    </div>
                  </div>

                  {/* Amount Labels */}
                  <div className="relative text-sm text-gray-700 mt-3">
                    {amtStops.map((s, index) => (
                      <span
                        key={s.label}
                        className="absolute"
                        style={{ left: s.left, transform: "translateX(-50%)" }}
                      >
                        {s.label}
                        {index < amtStops.length - 1 && (
                          <div className="absolute left-[50%] top-[100%] transform translate-x-1/2 translate-y-1 w-px h-3 bg-gray-300"></div>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Loan Term */}
              <div className="mb-2">
                <label className="block text-[16px] font-semibold text-[#333333] mb-3">
                  Loan Term:
                </label>

                <input
                  type="text"
                  value={`${loanTerm === 0.5 ? "6 months" : `${loanTerm} years`}`}
                  onChange={(e) => {
                    const raw = e.target.value.replace(/[^\d.]/g, "");
                    const n = Number(raw || 0);
                    
                    // Allow any value within range with smart snapping
                    if (n >= termMin && n <= termMax) {
                      // Find closest stop for snapping
                      const closestStop = termStops.reduce((closest, stop) => 
                        Math.abs(stop.value - n) < Math.abs(closest.value - n) ? stop : closest
                      );
                      // Snap if within 0.25 of a year
                      updateLoanTerm(Math.abs(n - closestStop.value) <= 0.25 ? closestStop.value : n);
                    }
                  }}
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#008000] focus:border-transparent"
                />

                {/* Range + dots */}
                <div className="mt-6">
                  <div className="relative">
                    <input
                      type="range"
                      min="0"
                      max="5"
                      step="1"
                      value={termStops.findIndex(s => s.value === loanTerm)}
                      onChange={(e) => {
                        const index = Number(e.target.value);
                        updateLoanTerm(termStops[index].value);
                      }}
                      className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
                      style={{
                        background: `linear-gradient(to right,#008000 0%,#008000 ${termPct}%,#e5e7eb ${termPct}%,#e5e7eb 100%)`,
                      }}
                    />
                    {/* Dots */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 w-full h-2 pointer-events-none">
                      {termStops.map((s) => {
                        const filled = loanTerm >= s.value;
                        return (
                          <div
                            key={s.value}
                            className={`absolute w-3 h-3 rounded-full ${
                              filled
                                ? "bg-[#008000]"
                                : "bg-white border-2 border-[#008000]"
                            }`}
                            style={{ left: s.left, transform: "translateX(-50%)" }}
                          />
                        );
                      })}
                    </div>
                  </div>
                  {/* Term Labels */}
                  <div className="relative text-sm text-gray-700 mt-3">
                    {termStops.map((s, index) => (
                      <span
                        key={s.label}
                        className="absolute"
                        style={{ left: s.left, transform: "translateX(-50%)" }}
                      >
                        {s.label}
                        {index < termStops.length - 1 && (
                          <div className="absolute left-[50%] top-[100%] transform translate-x-1/2 translate-y-1 w-px h-3 bg-gray-300"></div>
                        )}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

              {/* Right: Result */}
              <div className="bg-white rounded-lg shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105" style={{ width: '650px', height: '500px' }}>
            <div className="bg-[#008000] text-white flex items-center justify-center" style={{ width: '650px', height: '60px' }}>
              <h3 className="text-[20px] font-semibold">Calculation Result</h3>
            </div>

            <div className="p-[25px]">
              <div className="grid grid-cols-2 gap-6">
                {/* Interest Rate */}
                <div className="bg-gray-50 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ width: '259.5px', height: '89.6px' }}>
                  <div className="text-[14px] text-[#666666]">Interest Rate</div>
                  <div className="text-[18px] font-bold text-[#333333]">
                    {interestRate}%
                  </div>
                </div>

                {/* Loan Amount */}
                <div className="bg-gray-50 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ width: '259.5px', height: '89.6px' }}>
                  <div className="text-[14px] text-[#666666]">Loan Amount</div>
                  <div className="text-[18px] font-bold text-[#333333]">
                    ₹{fmtNum(loanAmount)}
                  </div>
                </div>

                {/* Loan Term */}
                <div className="bg-gray-50 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ width: '259.5px', height: '89.6px' }}>
                  <div className="text-[14px] text-[#666666]">Loan Term</div>
                  <div className="text-[18px] font-bold text-[#333333]">
                    {loanTerm === 0.5 ? "0.5 Year(s)" : `${loanTerm} Year(s)`}
                  </div>
                </div>

                {/* Total Interest */}
                <div className="bg-gray-50 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ width: '259.5px', height: '89.6px' }}>
                  <div className="text-[14px] text-[#666666]">Total Interest</div>
                  <div className="text-[18px] font-bold text-[#333333]">
                    {fmtINR(totalInterest)}
                  </div>
                </div>

                {/* Total Repayment */}
                <div className="bg-gray-50 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ width: '259.5px', height: '89.6px' }}>
                  <div className="text-[14px] text-[#666666]">Total Repayment</div>
                  <div className="text-[18px] font-bold text-[#333333]">
                    {fmtINR(totalRepayment)}
                  </div>
                </div>

                {/* EMI */}
                <div className="bg-gray-50 rounded-lg flex flex-col justify-center items-center transition-all duration-300 hover:scale-105 hover:shadow-lg" style={{ width: '259.5px', height: '89.6px' }}>
                  <div className="text-[14px] text-[#666666]">EMI</div>
                  <div className="text-[18px] font-bold text-[#333333]">
                    {fmtINR(emi)}
                  </div>
                </div>
              </div>

            </div>
          </div>
      </div>
      </div>

       {/* slider thumbs (WebKit + Firefox) - hidden */}
       <style>{`
         .slider::-webkit-slider-thumb {
           -webkit-appearance: none;
           appearance: none;
           width: 0px;
           height: 0px;
           background: transparent;
           border: none;
         }
         .slider::-moz-range-thumb {
           width: 0px;
           height: 0px;
           background: transparent;
           border: none;
         }
       `}</style>
    </section>
  );
}
