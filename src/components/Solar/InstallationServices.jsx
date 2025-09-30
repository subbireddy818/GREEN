import React from 'react';
import { Link } from 'react-router-dom';

const InstallationServices = () => {
  const services = [
    {
      id: 1,
      title: 'Residential',
      link: '/residential',
      image: 'https://images.pexels.com/photos/9875441/pexels-photo-9875441.jpeg?auto=compress&cs=tinysrgb&w=380&h=380&dpr=1',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"/>
        </svg>
      )
    },
    {
      id: 2,
      title: 'Housing Society',
      link: '/housing-society',
      image: 'https://images.pexels.com/photos/9875365/pexels-photo-9875365.jpeg?auto=compress&cs=tinysrgb&w=380&h=380&dpr=1',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path d="M4 3a2 2 0 100 4h12a2 2 0 100-4H4z"/>
          <path fillRule="evenodd" d="M3 8h14v7a2 2 0 01-2 2H5a2 2 0 01-2-2V8zm5 3a1 1 0 011-1h2a1 1 0 110 2H9a1 1 0 01-1-1z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      id: 3,
      title: 'Industrial/Commercial',
      link: '/industrial-commercial',
      image: 'https://images.pexels.com/photos/9875440/pexels-photo-9875440.jpeg?auto=compress&cs=tinysrgb&w=380&h=380&dpr=1',
      icon: (
        <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"/>
          <path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"/>
        </svg>
      )
    }
  ];

  return (
    <div className="bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-12">
          INSTALLATION SERVICES
        </h2>
        
        <div className="flex flex-wrap justify-center gap-8">
          {services.map((service) => (
            <div 
              key={service.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden" 
              style={{ width: '379.99px', height: '628.39px' }}
            >
              <div className="relative" style={{ width: '379.99px', height: '379.99px' }}>
                <img 
                  src={service.image}
                  alt={`${service.title} Solar Installation`}
                  className="w-full h-full object-cover"
                />
                <div 
                  className="absolute left-1/2 transform -translate-x-1/2 bg-white rounded-full flex items-center justify-center shadow-lg"
                  style={{ width: '80px', height: '80px', bottom: '-40px' }}
                >
                  {service.icon}
                </div>
              </div>
              <div className="p-4" style={{ paddingLeft: '15px', paddingRight: '15px' }}>
                <h3 className="text-2xl font-bold text-gray-800 text-center mb-6 mt-4">
                  {service.title}
                </h3>
                <div className="text-center">
                  <Link 
                    to={service.link}
                    className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105"
                  >
                    Click Here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InstallationServices;
