import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import WhyGCHSection from "./WhyGCHSection.jsx";
import Footer from "./footer.jsx";
import Expertsewage from "./Wwmanagement/Expertsewage.jsx";
import ServicesSection from "./Wwmanagement/Servicesection.jsx";
import Effluenttreatment from "./Wwmanagement/Effluenttreatment.jsx";
import TechnologiesSection from "./Wwmanagement/TechnologiesSection.jsx";
import BenefitsSection from "./Wwmanagement/BenefitsSection.jsx";
import SolarInstallation from "./Solar/SolarInstallation.jsx";
import Residential from "./Solar/Residential.jsx";
import HousingSociety from "./Solar/HousingSociety.jsx";
import IndustrialCommercial from "./Solar/IndustrialCommercial.jsx";


// Home Page Component
function HomePage() {
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

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solar-installation" element={<SolarInstallation />} />
        <Route path="/residential" element={<Residential />} />
        <Route path="/housing-society" element={<HousingSociety />} />
        <Route path="/industrial-commercial" element={<IndustrialCommercial />} />
      </Routes>
    </Router>
  );
}

export default App;
