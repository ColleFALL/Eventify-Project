import React, { useState } from "react";
import { Link } from "react-router-dom";  

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="h-20 ++++++++++  flex justify-between items-center px-6 md:px-10">
      {/* ----- LEFT SIDE ----- */}
      <div className="flex items-center gap-2.5">
        <a href="#">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="28"
            viewBox="0 0 20 25"
            fill="none"
          >
            <path
              d="M19.8556 20.5207C19.8556 19.1236 19.2133 17.8773 18.2083
              17.0594L10.2311 10.8395C10.099 10.7384 10.2338 10.5335 10.3802 10.6151L13.4955 12.3599C14.9076 13.1511 16.6924 12.6934 17.5484 
              11.3194C18.4496 9.86997 17.9732 7.96105 16.4928 7.10683L11.9201 4.46433C11.7755 4.38006 11.8819 4.16007 12.0389 4.22128L14.1395
                5.0622C14.4366 5.16687 14.6752 5.20945 14.9254 5.20945C16.0652 5.20945 17.0002 
                4.30821 17.0809 3.23666C17.1856 1.84933 16.1238 0.878906 14.8571
              0.878906H5.14662C3.90032 0.878906 2.85273 1.89812 2.86958 3.14175C2.87756 3.8026 3.17384 4.39248 3.63776 4.79697C3.98725 5.10123
                5.16436 6.04327 5.72408 6.49033C5.82432 6.57017 5.76755 6.72984 5.63981 6.72984H3.6963C1.65256 6.74226 0 8.4028 0 10.4483C0 11.4826 
                0.422232 12.4184 1.10437 13.0917L12.3556 23.785C13.1522 24.5275 14.2202 24.9825 15.3955 24.9825C17.8597 24.9825 19.8556 22.984 19.8556
                20.5207Z"
              fill="#FF5010"
            ></path>
          </svg>
        </a>
        <h1 className="text-xl font-bold text-[#ff5010]">Organizer</h1>
      </div>

      {/* ----- CENTER LINKS (hidden on mobile) ----- */}
      <div className="hidden md:flex justify-between items-center gap-6">
        {["Features", "Event Types", "Resources", "Pricing"].map((item) => (
          <a
            key={item}
            href="#"
            className="text-sm font-semibold px-3 py-1 hover:bg-gray-100 hover:rounded-2xl transition"
          >
            {item}
          </a>
        ))}
      </div>

      {/* ----- RIGHT BUTTONS (hidden on mobile) ----- */}
      <div className="hidden md:flex justify-end items-center gap-4">
        <a href="#">
          
          <button className="bg-white text-[#ff5010] font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-[#ff5010] hover:text-white transition duration-300">
            Contact Sales
          </button>
        </a>
        <a href="#">
          <button className="bg-[#ff5010] text-white font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-white hover:text-[#ff5010] transition duration-300">
            Get Started
          </button>
        </a>
      </div>

      {/* ----- MOBILE MENU ICON ----- */}
      <div
        className="md:hidden cursor-pointer"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? (
          // close icon (X)
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#ff5010]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        ) : (
          // hamburger icon
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 text-[#ff5010]"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </div>

      {/* ----- MOBILE DROPDOWN MENU ----- */}
      {menuOpen && (
        <div className="absolute top-20 left-0 w-full bg-amber-50 flex flex-col items-center gap-4 py-4 md:hidden border-t border-gray-200">
          {["Features", "Event Types", "Resources", "Pricing"].map((item) => (
            <a
              key={item}
              href="#"
              className="text-lg font-semibold hover:text-[#ff5010] transition"
            >
              {item}
            </a>
          ))}
          <div className="flex flex-col gap-3 mt-4">
            <button className="bg-white text-[#ff5010] font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-[#ff5010] hover:text-white transition duration-300">
              Contact Sales
            </button>
            <button className="bg-[#ff5010] text-white font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-white hover:text-[#ff5010] transition duration-300">
              Get Started
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
