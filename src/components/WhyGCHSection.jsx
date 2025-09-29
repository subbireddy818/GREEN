import React from 'react';
import { Check } from 'lucide-react';

const WhyGCHSection = () => {
  const benefits = [
    "Standardised scope of work",
    "Lowest industry prices", 
    "Transparent and Haggle-free purchase",
    "Get assured returns from sustainable projects"
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left side - Image drops in from top */}
          <div className="animate-dropIn">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/9800029/pexels-photo-9800029.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&fit=crop"
                alt="Sustainable energy landscape with wind turbines and solar panels"
                className="w-full h-[482px] object-cover rounded-2xl"
                style={{ width: '482.5px', height: '482.5px' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-green-900/20 to-transparent rounded-2xl"></div>
            </div>
          </div>

          {/* Right side - Content */}
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-12">
              Why <span className="text-green-600">GCH</span> ?
            </h2>
            
            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Check className="w-6 h-6 text-green-600" />
                    </div>
                  </div>
                  <p className="text-lg font-medium text-gray-800 flex-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyGCHSection;
