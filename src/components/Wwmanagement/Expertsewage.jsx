import React from "react";

const ExpertSewage = () => {
  return (
    <section className="w-full bg-[#EBF3ED]">
      {/* Fixed Size Container */}
      <div
        className="mx-auto rounded-[15px] shadow-xl px-[15px]"
        style={{ width: "1200px", height: "598.8px", backgroundColor: "#EBF3ED" }}
      >
        {/* Heading */}
        <h4 className="text-[32px] font-bold text-[#333333] text-center mb-[55px] pt-6">
          Expert Sewage Treatment Plant Services in India
        </h4>

        {/* Content Row */}
        <div className="grid grid-cols-1 md:[grid-template-columns:570px_570px] gap-10 justify-center">
          {/* Left: Image */}
          <div className="flex justify-center md:justify-start">
            <img
              src="/w1.png"
              alt="Sewage Treatment Plant Diagram"
              className="rounded shadow-md"
              style={{
                width: "570px",
                height: "333.5px",
                objectFit: "contain",
              }}
            />
          </div>

          {/* Right: Description */}
          <div className="w-[570px] space-y-6">
            <p className="text-[18px] leading-8 text-justify text-[#333333]">
              Sewage Treatment Plant or simply called STP, plays a crucial role
              in houses, offices, industries and other public places. Biological
              wastewater consists of micro-organisms, suspended solids,
              dissolved chemicals, etc. that are harmful to the publicTo stay healthy and comfortable, we need Sewage Treatment Plants
              with proper maintenance at regular intervals. 
            </p>
            <p className="text-[18px] leading-8 text-justify text-[#333333]">
              GreenCarbonHub
              provides services like installation, maintenance, and repair.
              Whether it is a housing society or industry, our experts provide
              end-to-end solutions in Sewage Wastewater Treatment. Contact us
              today to learn more.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExpertSewage;
