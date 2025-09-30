import React, { useState, useEffect } from "react";
import { ChevronDown, ChevronUp, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openInstall, setOpenInstall] = useState(false);
  const [openMobile, setOpenMobile] = useState(false);
  const [showNav, setShowNav] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  // track scroll direction + top state
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);

      if (window.scrollY > lastScrollY) {
        // scrolling down → hide
        setShowNav(false);
      } else {
        // scrolling up → show
        setShowNav(true);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const MenuItems = () => (
    <ul className="text-base py-2">
      <li>
        <Link
          to="/solar-installation"
          className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-green-700 transition text-gray-800"
          onClick={() => setOpenInstall(false)}
        >
          Solar Installation
        </Link>
      </li>
      <li>
        <Link
          to="/housing-society"
          className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-green-700 transition text-gray-800"
          onClick={() => setOpenInstall(false)}
        >
          Housing Society
        </Link>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-green-700 transition text-gray-800"
        >
          Water/Waste Water Management
        </a>
      </li>
      <li>
        <a
          href="#"
          className="block px-4 py-2 rounded-md hover:bg-gray-100 hover:text-green-700 transition text-gray-800"
        >
          Bio–Methanation
        </a>
      </li>
    </ul>
  );

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      } ${isAtTop ? "bg-transparent" : "bg-white/80 backdrop-blur shadow-sm"}`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10">
        <div className="h-20 flex items-center justify-between">
          {/* Left: Brand + nav beside logo */}
          <div className="flex items-center gap-12">
            {/* Brand */}
            <a href="#" className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-500 to-green-600 text-white grid place-items-center shadow-md">
                <span className="font-bold text-lg">GC</span>
              </div>
              <div className="leading-tight">
                <h1
                  className={`text-2xl font-extrabold tracking-tight ${
                    isAtTop ? "text-white" : "text-gray-900"
                  }`}
                >
                  <span className={isAtTop ? "text-green-300" : "text-green-600"}>
                    Green
                  </span>
                  <span
                    className={isAtTop ? "text-orange-300" : "text-orange-500"}
                  >
                    Carbon
                  </span>
                  <span className={isAtTop ? "text-white" : "text-gray-900"}>
                    Hub
                  </span>
                </h1>
                <p
                  className={`text-sm -mt-0.5 ${
                    isAtTop ? "text-white/80" : "text-gray-600"
                  }`}
                >
                  Net-Zero Solutions
                </p>
              </div>
            </a>

            {/* Desktop nav beside logo */}
            <nav className="hidden md:flex items-center gap-8">
              <Link
                to="/"
                className={`text-lg font-medium transition ${
                  isAtTop
                    ? "text-white hover:text-green-300"
                    : "text-gray-800 hover:text-green-600"
                }`}
              >
                Home
              </Link>
              <div className="relative">
                <button
                  type="button"
                  onClick={() => setOpenInstall((s) => !s)}
                  className={`flex items-center gap-1 text-lg font-medium transition ${
                    isAtTop
                      ? "text-white hover:text-green-300"
                      : "text-gray-800 hover:text-green-600"
                  }`}
                >
                  Installation
                  {openInstall ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openInstall && (
                  <div className="absolute left-0 mt-3 w-72 rounded-lg border border-black/10 bg-white shadow-xl">
                    <MenuItems />
                  </div>
                )}
              </div>
            </nav>
          </div>

          {/* Right: Login + mobile toggle */}
          <div className="flex items-center gap-4">
            <button
              className={`hidden md:inline-flex px-7 py-3 rounded-lg text-lg font-medium transition shadow-sm ${
                isAtTop
                  ? "bg-green-600 hover:bg-green-700 text-white"
                  : "bg-green-600 hover:bg-green-700 text-white"
              }`}
            >
              Login
            </button>
            <button
              className={`md:hidden p-3 rounded-lg ${
                isAtTop ? "text-white hover:bg-white/10" : "text-gray-800"
              }`}
              onClick={() => setOpenMobile((s) => !s)}
              aria-label="Toggle menu"
            >
              {openMobile ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      {openMobile && (
        <div className="md:hidden border-t border-black/10 bg-white">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-2">
            <Link
              to="/"
              className="block px-2 py-2 rounded-md text-gray-800 font-medium hover:bg-gray-100"
              onClick={() => setOpenMobile(false)}
            >
              Home
            </Link>
            <details className="px-2">
              <summary className="flex items-center justify-between py-2 cursor-pointer text-gray-800 font-medium">
                Installation
                <ChevronDown className="w-4 h-4" />
              </summary>
              <div className="pl-2 pt-2">
                <MenuItems />
              </div>
            </details>
            <button className="w-full mt-2 bg-green-600 hover:bg-green-700 text-white px-5 py-3 rounded-lg text-lg font-medium transition">
              Login
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
