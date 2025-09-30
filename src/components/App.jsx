import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar.jsx";
import HeroSection from "./HeroSection.jsx";
import WhyGCHSection from "./WhyGCHSection.jsx";
import Footer from "./Footer.jsx";
import Expertsewage from "./Wwmanagement/Expertsewage.jsx";
import ServicesSection from "./Wwmanagement/Servicesection.jsx";
import Effluenttreatment from "./Wwmanagement/Effluenttreatment.jsx";
import TechnologiesSection from "./Wwmanagement/TechnologiesSection.jsx";
import BenefitsSection from "./Wwmanagement/BenefitsSection.jsx";
import SolarInstallation from "./Solar/SolarInstallation.jsx";
import Residential from "./Solar/Residential.jsx";
import HousingSociety from "./Solar/HousingSociety.jsx";
import IndustrialCommercial from "./Solar/IndustrialCommercial.jsx";


// Layout Component with Navbar and Footer
function Layout({ children }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        {children}
      </div>
      <Footer />
    </div>
  );
}

// Home Page Component
function HomePage() {
  return (
    <Layout>
      <HeroSection />
      <WhyGCHSection />
      <Expertsewage />
      <ServicesSection />
      <Effluenttreatment />
      <TechnologiesSection />
      <BenefitsSection />
    </Layout>
  );
}

// Solar Installation Page
function SolarInstallationPage() {
  return (
    <Layout>
      <SolarInstallation />
    </Layout>
  );
}

// Residential Page
function ResidentialPage() {
  return (
    <Layout>
      <Residential />
    </Layout>
  );
}

// Housing Society Page
function HousingSocietyPage() {
  return (
    <Layout>
      <HousingSociety />
    </Layout>
  );
}

// Industrial Commercial Page
function IndustrialCommercialPage() {
  return (
    <Layout>
      <IndustrialCommercial />
    </Layout>
  );
}

// Water Management Page
function WaterManagementPage() {
  return (
    <Layout>
      <Expertsewage />
      <ServicesSection />
      <Effluenttreatment />
      <TechnologiesSection />
      <BenefitsSection />
    </Layout>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/solar-installation" element={<SolarInstallationPage />} />
        <Route path="/water-management" element={<WaterManagementPage />} />
        <Route path="/residential" element={<ResidentialPage />} />
        <Route path="/housing-society" element={<HousingSocietyPage />} />
        <Route path="/industrial-commercial" element={<IndustrialCommercialPage />} />
      </Routes>
    </Router>
  );
}

export default App;
