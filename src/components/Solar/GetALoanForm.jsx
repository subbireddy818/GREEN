import React, { useEffect, useState } from "react";

export default function GetALoanForm() {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => setIsVisible(true), []);

  return (
    <section
      className={`transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      } bg-[#3a954f]`}
    >
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          {/* Left: Text */}
          <div className="text-white">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Get A Loan</h2>
            <p className="text-xl md:text-2xl font-semibold mb-10">
              Elevate Your Solar Business
            </p>

            <div>
              <p className="text-lg mb-4">Follow us</p>
              <div className="flex items-center gap-6">
                {/* Facebook */}
                <a
                  href="#"
                  aria-label="Facebook"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#3a954f]">
                    <path d="M22 12.06C22 6.48 17.52 2 11.94 2 6.36 2 1.88 6.48 1.88 12.06c0 5 3.66 9.15 8.44 9.94v-7.03H7.9v-2.91h2.42V9.65c0-2.4 1.43-3.73 3.62-3.73 1.05 0 2.15.19 2.15.19v2.36h-1.21c-1.19 0-1.56.74-1.56 1.5v1.8h2.65l-.42 2.91H13.3V22c4.78-.79 8.44-4.94 8.44-9.94z" />
                  </svg>
                </a>

                {/* Instagram */}
                <a
                  href="#"
                  aria-label="Instagram"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#3a954f]">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zM18 6.75a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 18 6.75z" />
                  </svg>
                </a>

                {/* X */}
                <a
                  href="#"
                  aria-label="X"
                  className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:scale-110 transition"
                >
                  <svg viewBox="0 0 24 24" className="w-6 h-6 fill-[#3a954f]">
                    <path d="M18.244 3H21l-6.5 7.43L22 21h-6.756l-4.56-5.557L4.8 21H2l7.03-8.03L2 3h6.756l4.2 5.12L18.244 3zm-2.368 16h1.562L8.17 5H6.61l9.266 14z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Right: Form (card grows naturally; button inside) */}
          <div className="bg-white rounded-xl shadow-lg w-full max-w-xl p-7">
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-[#333] mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a954f]"
                />
              </div>

              {/* Email / Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    placeholder="Enter Your Email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a954f]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+91 9999999999"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a954f]"
                  />
                </div>
              </div>

              {/* Company / Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    placeholder="Eg. Greencarbonhub"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a954f]"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-[#333] mb-2">
                    Location
                  </label>
                  <input
                    type="text"
                    placeholder="Eg. Hyderabad"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a954f]"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-[#333] mb-2">
                  Any Messages
                </label>
                <textarea
                  rows={3}
                  placeholder="Your Message (Optional)"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#3a954f] resize-none"
                />
              </div>

              {/* Submit — stays INSIDE the card */}
              <button
                type="submit"
                className="w-full py-3 text-white font-semibold rounded-lg transition hover:shadow-lg"
                style={{ backgroundColor: "#0d6efd" }}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Optional: Floating actions (remove if not needed) */}
      {/* 
      <div className="fixed right-6 bottom-6 flex flex-col gap-4 z-40">
        <button className="w-12 h-12 bg-[#3a954f] rounded-full text-white text-xl shadow-lg hover:scale-110 transition">
          📞
        </button>
        <button className="w-12 h-12 bg-[#3a954f] rounded-full text-white text-xl shadow-lg hover:scale-110 transition">
          💬
        </button>
      </div>
      */}
    </section>
  );
}
