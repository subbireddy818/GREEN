import React, { useState } from "react";

const GREEN = "#008000";

const cards = [
  {
    id: 1,
    title: "Rooftop Solar Panel Layout Design",
    short:
      "GreenCarbonHub, a rooftop solar company, is one of the best rooftop solar panel Layout designing companies in Hyderabad near you that designs your requirements properly.",
    long: `Hyderabad GreenCarbonHub, a rooftop solar company, is one of the best rooftop solar panel Layout designing companies in Hyderabad near you that designs your requirements properly. Layout Design is an essential stage which ensures your solar system is correctly installed and efficiently. Our team of engineers visit your place and enquire about a few factors, including roof size, type of floor, orientation, amount of sunlight your roof receives, energy needs, building codes and regulations, etc. Then, we create a customised solar panel layout design for your rooftop solar system that maximizes energy production and minimizes costs. If you are considering installing rooftop solar panels for home or office in Hyderabad, Call the GreenCarbonHub Team Today!`,
  },
  {
    id: 2,
    title: "Rooftop Solar Panel Installation",
    short:
      "As experts, we can understand that choosing a Solar System for home or office is a big decision.",
    long: `As experts, we can understand that choosing a Solar System for home or office is a big decision. At GreenCarbonHub, we always try to understand the customer requirements precisely, thus making us your first choice for Rooftop Solar Panel Installation Services in Hyderabad. Our team of Solar System installers guide you in each and every step of the product. Moreover, our expertise will help you install the right system within your budget. Further, it saves money on your energy bills and reduces your surrounding CO2 levels. We assure that the right and long-life products are perfectly installed and work efficiently. Choose the Best Rooftop Solar Panel Company for your needs.`,
  },
  {
    id: 3,
    title: "Rooftop Solar Commissioning Services",
    short:
      "After installing your rooftop solar panels, it is necessary to have a solar commissioning.",
    long: `After installing your rooftop solar panels, it is necessary to have a solar commissioning. Solar Commissioning helps you ensure that the rooftop solar system is installed correctly and safely. Benefits of Rooftop Solar Commissioning Services: - Ensures that the whole rooftop solar power system is installed correctly - Ensures that the solar system is connected safely to the grid - Get your system up and running quickly. Our GreenCarbonHub team of expert solar technicians will visit your rooftop solar power system project and make sure that it is operating perfectly. If you are looking for an expert solar system commissioning team in Hyderabad, contact us today.`,
  },
];

export default function Weprovide() {
  const [openId, setOpenId] = useState(null);
  const toggle = (id) => setOpenId((p) => (p === id ? null : id));

  return (
    <section className="w-full bg-[#EAF3ED]">
      {/* Container */}
      <div className="mx-auto max-w-[1200px] px-[15px]">
        {/* Heading with 100px padding top and bottom */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-[#111827] pt-[100px] pb-[100px]">
          We Provide
        </h2>

        {/* Card row */}
        <div className="flex xl:flex-nowrap flex-wrap justify-between gap-y-8">
          {cards.map((c) => {
            const expanded = openId === c.id;
            return (
              <article
                key={c.id}
                className="bg-white rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.10)] transition-all duration-300 flex flex-col mx-[15px] mb-6"
                style={{
                  width: "379.99px",
                  height: expanded ? "593.2px" : "229.2px",
                }}
              >
                <div className="px-6 pt-6 flex-1 overflow-hidden">
                  <h3 className="text-center text-[22px] font-semibold text-[#111827]">
                    {c.title}
                  </h3>

                  {!expanded ? (
                    <p className="mt-4 text-[16px] leading-7 text-center text-[#333333]">
                      {c.short}
                    </p>
                  ) : (
                    <p className="mt-4 text-[16px] leading-7 text-justify text-[#333333]">
                      {c.long}
                    </p>
                  )}
                </div>

                <div className="w-full flex justify-center">
                  <button
                    onClick={() => toggle(c.id)}
                    className="rounded-md text-white font-semibold transition-transform duration-200 hover:scale-[1.02] active:scale-[0.99]"
                    style={{
                      background: GREEN,
                      padding: "6px 12px",
                      borderStyle: "solid",
                      borderWidth: "0.8px",
                      borderColor: GREEN,
                      marginTop: "11px",
                      marginBottom: "18px",
                    }}
                  >
                    {expanded ? "Read Less" : "Read More"}
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </div>
      {/* Bottom padding for container */}
      <div className="pb-[100px]"></div>
    </section>
  );
}
