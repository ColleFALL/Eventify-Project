// src/Components/Navbar.jsx
import React from "react";
import { IoSearch, IoLocationSharp, IoMenu } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchChange }) => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        {/* --- Logo --- */}
        <Link to="/" className="flex items-center space-x-1">
          <span className="text-2xl font-extrabold text-red-600">eventbrite</span>
        </Link>

        {/* --- Barre de recherche --- */}
        <div className="flex-1 max-w-3xl mx-6 hidden sm:block">
          <div className="flex border border-gray-300 rounded-full overflow-hidden">
            {/* --- Recherche par mot-clé --- */}
            <div className="flex items-center p-3 flex-grow">
              <IoSearch className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                placeholder="Rechercher un événement..."
                className="w-full focus:outline-none text-gray-700 placeholder-gray-500"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>

            {/* --- Filtre par lieu --- */}
            <div className="hidden md:flex items-center p-3 border-l border-gray-200">
              <IoLocationSharp className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                placeholder="Lieu"
                className="w-full focus:outline-none text-gray-700 placeholder-gray-500"
              />
            </div>

            <button className="bg-red-600 text-white px-6 hover:bg-red-700 transition flex items-center justify-center">
              <IoSearch className="text-2xl" />
            </button>
          </div>
        </div>

        {/* --- Actions utilisateur --- */}
        <div className="flex items-center space-x-3">
          {/* Ta partie Participant */}
          <Link
            to="/participant"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition hidden md:block"
          >
            Participer à un événements
          </Link>

          {/* Placeholder pour le membre "Auth" */}
          <Link
            to="/login"
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition hidden md:block"
          >
            Connexion
          </Link>
           <Link
            to="/login"
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition hidden md:block"
          >
            Inscription
          </Link>
          <Link
            to="/participant"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition hidden md:block"
          >
            Creer un événement
          </Link>

          {/* Placeholder pour un futur menu mobile */}
          <button className="text-gray-600 hover:text-gray-900 sm:hidden">
            <IoMenu className="text-3xl" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;