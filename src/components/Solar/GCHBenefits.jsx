import React from 'react';
import { DollarSign, Users, TrendingDown, Home, CheckCircle, Settings } from 'lucide-react';

const GCHBenefits = () => {
  const benefits = [
    {
      id: 1,
      icon: <DollarSign className="w-12 h-12 text-green-600" />,
      title: 'Easy Finance Options'
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12 text-green-600" />,
      title: 'Free Consultancy'
    },
    {
      id: 3,
      icon: <TrendingDown className="w-12 h-12 text-green-600" />,
      title: 'Lowest Industry Prices'
    },
    {
      id: 4,
      icon: <Home className="w-12 h-12 text-green-600" />,
      title: 'Transparent & Haggle-free purchase'
    },
    {
      id: 5,
      icon: <CheckCircle className="w-12 h-12 text-green-600" />,
      title: 'Standardised scope of work'
    },
    {
      id: 6,
      icon: <Settings className="w-12 h-12 text-green-600" />,
      title: 'Choice of Branded Components'
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-gray-800 text-center mb-5" style={{ fontSize: '35.2px', fontWeight: 'bold', marginBottom: '20px' }}>
          Why Should You Choose GCH for Your Rooftop Solar Power Project?
        </h2>
        
        <p className="text-gray-600 text-center max-w-5xl mx-auto mb-12" style={{ fontSize: '17.6px', lineHeight: '1.6' }}>
          <span className="font-bold text-gray-800">GreenCarbonHub</span> is promoted by a Civil Servant with 23 years of experience in administration, particularly in power management, solid waste management, and liquid waste management. Supported by a team of experienced experts, GreenCarbonHub offers all Net-Zero solutions under one roof. If you are looking for the best rooftop solar company in Hyderabad, we are just a few miles away. Here are the reasons to choose us:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {benefits.map((benefit) => (
            <div 
              key={benefit.id}
              className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center p-6"
              style={{ width: '379.99px', height: '150.4px' }}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 
                className="text-gray-800 font-semibold text-center leading-tight"
                style={{ fontSize: '16px', marginTop: '8px' }}
              >
                {benefit.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GCHBenefits;
