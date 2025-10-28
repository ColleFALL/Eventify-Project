// src/Components/Navbar.jsx
import React, { useState } from "react";
import { IoSearch, IoLocationSharp, IoMenu, IoPersonCircle } from "react-icons/io5";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../Context/AuthContext";

const Navbar = ({ onSearchChange }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setShowDropdown(false);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-1">
          <span className="text-2xl font-extrabold text-red-600">eventbrite</span>
        </Link>

        {/* Barre de recherche */}
        <div className="flex-1 max-w-3xl mx-6 hidden sm:block">
          <div className="flex border border-gray-300 rounded-full overflow-hidden">
            <div className="flex items-center p-3 flex-grow">
              <IoSearch className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                placeholder="Search an event..."
                className="w-full focus:outline-none text-gray-700 placeholder-gray-500"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>
            <div className="hidden md:flex items-center p-3 border-l border-gray-200">
              <IoLocationSharp className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                placeholder="Place"
                className="w-full focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>
            <button className="bg-red-600 text-white px-6 hover:bg-red-700 transition flex items-center justify-center">
              <IoSearch className="text-2xl" />
            </button>
          </div>
        </div>

        {/* Actions utilisateur */}
        <div className="flex items-center space-x-3 relative">
          {/* Liens constants */}
          <Link
            to="/participant"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition hidden md:block"
          >
            Participate to a event
          </Link>
          <Link
            to="/organiser"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition hidden md:block"
          >
            Create a event
          </Link>

          {!user ? (
            <>
              <Link
                to="/login"
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition hidden md:block"
              >
                Log in
              </Link>
              <Link
                to="/register"
                className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition hidden md:block"
              >
                Sign up
              </Link>
            </>
          ) : (
            <div className="relative">
              {/* Affichage email + icône */}
              <button
                onClick={() => setShowDropdown(!showDropdown)}
                className="flex items-center space-x-2 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition"
              >
                <IoPersonCircle className="text-2xl text-gray-700" />
                <span className="hidden md:block">{user.email}</span>
              </button>

              {/* Dropdown */}
              {showDropdown && (
                <div className="absolute right-0 mt-2 w-48 bg-white shadow-lg rounded-lg overflow-hidden z-50">
                  <div className="px-4 py-3 border-b border-gray-200">
                    <p className="text-gray-700 font-semibold">{user.email}</p>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="w-full text-left px-4 py-3 hover:bg-red-100 text-red-600 font-semibold"
                  >
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          )}

          {/* Menu mobile */}
          <button className="text-gray-600 hover:text-gray-900 sm:hidden">
            <IoMenu className="text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
