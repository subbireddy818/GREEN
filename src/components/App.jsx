import React, { useState } from "react";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import WhyGCHSection from "./WhyGCHSection.jsx";
import Footer from "./footer.jsx";
import Expertsewage from "./Wwmanagement/Expertsewage.jsx";
import ServicesSection from "./Wwmanagement/Servicesection.jsx";
import Effluenttreatment from "./Wwmanagement/Effluenttreatment.jsx";
import TechnologiesSection from "./Wwmanagement/TechnologiesSection.jsx";
import BenefitsSection from "./Wwmanagement/BenefitsSection.jsx";


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <HeroSection />
      <WhyGCHSection />
      <Footer />
      <Expertsewage />
      <ServicesSection />
      <Effluenttreatment />
      < TechnologiesSection />
      < BenefitsSection />
    </div>
  );
}

export default App;
