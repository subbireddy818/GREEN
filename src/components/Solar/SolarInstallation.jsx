import React, { useState } from "react";
import Navbar from "../Navbar.jsx";
import CTAButtons from "./CTAButtons.jsx";
import InstallationServices from "./InstallationServices.jsx";
import WhyChooseSolar from "./WhyChooseSolar.jsx";
import GCHBenefits from "./GCHBenefits.jsx";
import SolarBenefitsCards from "./SolarBenefitsCards.jsx";
import Weprovide from "./Weprovide.jsx";
import Subsidy from "./Subsidy.jsx";
import RooftopSolutions from "./RooftopSolutions.jsx";
import FinanceOptions from "./FinanceOptions.jsx";
import DocumentRequirements from "./DocumentRequirements.jsx";
import LoanCalculator from "./LoanCalculator.jsx";
import RepaymentTable from "./RepaymentTable.jsx";
import GetALoanForm from "./GetALoanForm.jsx";
import Components from "./Components.jsx";

function SolarInstallation() {
  // Shared loan state for both components
  const [sharedLoanData, setSharedLoanData] = useState({
    loanAmount: 50_000,
    loanTerm: 0.5,
    activeTab: "residential"
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <CTAButtons />
      <InstallationServices />
      <WhyChooseSolar />
      <GCHBenefits />
      <SolarBenefitsCards />
      <Weprovide />
      <Subsidy />
      <RooftopSolutions />
      <FinanceOptions />
      <DocumentRequirements />
      <LoanCalculator sharedLoanData={sharedLoanData} setSharedLoanData={setSharedLoanData} />
      <RepaymentTable 
        loanAmount={sharedLoanData.loanAmount} 
        loanTerm={sharedLoanData.loanTerm} 
        interestRate={sharedLoanData.activeTab === "housingSociety" ? 9.15 : 7.99} 
      />
      <GetALoanForm />
      <Components />
    </div>
  );
}

export default SolarInstallation;
