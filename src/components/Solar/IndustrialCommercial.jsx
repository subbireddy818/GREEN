import React from 'react';
import Navbar from "../Navbar.jsx";

const IndustrialCommercial = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-blue-50">
      <Navbar />
      <div className="pt-20">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <h1 className="text-4xl font-bold text-gray-800 text-center mb-8">
            Industrial/Commercial Solar Installation
          </h1>
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              Industrial & Commercial Solar Solutions
            </h2>
            <p className="text-gray-600 mb-6">
              Power your business with our industrial and commercial solar solutions. We provide large-scale solar installations for factories, offices, warehouses, and commercial establishments.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Benefits</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Significant cost savings on electricity</li>
                  <li>• Tax benefits and incentives</li>
                  <li>• Corporate sustainability goals</li>
                  <li>• Reduced carbon footprint</li>
                </ul>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-3">Services</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Large-scale solar planning</li>
                  <li>• Industrial-grade installations</li>
                  <li>• 24/7 maintenance support</li>
                  <li>• ROI analysis and reporting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default IndustrialCommercial;
