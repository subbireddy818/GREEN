import React, { useState } from "react";
import { Plus, Minus } from "lucide-react";

const FAQ = () => {
  const [openId, setOpenId] = useState(null);

  const faqs = [
    {
      id: 1,
      question: "Can I use solar power in my apartment?",
      answer: "Yes, you can use solar power in apartments. Solar Panels available in different sizes and types, few of them are - Portable Solar Panels - Solar Balcony Systems - Community Solar. If you are considering installing the solar panels in your apartment, you need permission of your apartment association or incharges. You may also need to obtain permission from local municipality too."
    },
    {
      id: 2,
      question: "How is solar energy used in a housing society?",
      answer: "Solar energy in housing societies provides multiple benefits: - Reduced electricity costs - Power up your street lights, water plants, etc. - Increased energy independence - Improved environmental impact - Increased property value - Your roof stays cooler"
    },
    {
      id: 3,
      question: "Do I need batteries to store and use solar panels?",
      answer: "No, you do not need any batteries to use solar panels, but if you want to store the solar energy to use it for later, when the sun is not shining, you will need to install batteries."
    },
    {
      id: 4,
      question: "What type of maintenance is required for rooftop solar systems?",
      answer: "Rooftop Solar Panels for housing societies require very low maintenance. But the main action you need to perform is - To clean them regularly to remove any dust and dirt. - Furthermore, you need to check your solar system regularly for any damages."
    }
  ];

  return (
    <section className="bg-white py-16 px-0">
      <style>{`
        :host, :root {
          --fa-font-thin: normal 100 1em / -12 "Font Awesome 6 Pro";
        }
      `}</style>
      <div className="mx-auto max-w-7xl" style={{ marginLeft: '120px', marginRight: '120px' }}>
        <h2 className="text-[#111827] text-center font-bold mb-12 text-[35.2px]">
          Frequently Asked Questions
        </h2>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-white"
              style={{
                width: '1198.4px',
                height: openId === faq.id ? 'auto' : '59.2px',
                paddingTop: '18px',
                paddingRight: '55px',
                paddingBottom: '18px',
                paddingLeft: '30px',
                boxShadow: 'none',
                fontSize: '18px',
                fontWeight: '600',
                borderRadius: '8px',
                color: openId === faq.id ? '#3A954F' : 'var(--tp-heading-primary)',
                border: '1px solid rgba(10, 11, 15, 0.1)',
                background: 'var(--tp-common-white)',
                transition: 'all 0.3s ease'
              }}
            >
              <button
                onClick={() => setOpenId(openId === faq.id ? null : faq.id)}
                className="w-full flex items-center justify-between text-left"
              >
                <h3 className="pr-4" style={{ color: openId === faq.id ? '#3A954F' : 'var(--tp-heading-primary)' }}>
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openId === faq.id ? (
                    <Minus className="w-5 h-5" style={{ color: '#3A954F' }} />
                  ) : (
                    <Plus className="w-5 h-5" style={{ color: 'var(--tp-heading-primary)' }} />
                  )}
                </div>
              </button>
              
              {openId === faq.id && (
                <div 
                  className="mt-4"
                  style={{
                    padding: '0px 128px 34px 0px',
                    color: '#828282',
                    fontSize: '16px',
                    fontFamily: 'Inter, sans-serif',
                    lineHeight: '1.5'
                  }}
                >
                  <p>
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
