import React, { useState } from "react";
import { IoSearch, IoLocationSharp, IoMenu, IoClose } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = ({ onSearchChange }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* --- Logo --- */}
        <Link to="/" className="flex items-center space-x-1">
          <span className="text-2xl font-extrabold text-red-600">
            eventbrite
          </span>
        </Link>

        {/* --- Barre de recherche (desktop uniquement) --- */}
        <div className="hidden lg:flex flex-1 max-w-3xl mx-6">
          <div className="flex border border-gray-300 rounded-full overflow-hidden w-full">
            <div className="flex items-center p-3 flex-grow">
              <IoSearch className="text-gray-500 text-xl mr-2" />
              <input
                type="text"
                placeholder="Rechercher un événement..."
                className="w-full focus:outline-none text-gray-700 placeholder-gray-500"
                onChange={(e) => onSearchChange?.(e.target.value)}
              />
            </div>

            <div className="flex items-center p-3 border-l border-gray-200 w-48">
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

        {/* --- Actions utilisateur (desktop) --- */}
        <div className="hidden md:flex items-center space-x-3">
          <Link
            to="/participant"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition"
          >
            Participer
          </Link>

          <Link
            to="/login"
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition"
          >
            Connexion
          </Link>
           <Link
            to="/register"
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition hidden md:block"
          >
            Inscription
          </Link>
          <Link
            to="/CreateEvent"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition hidden md:block"
          >
            Creer un événement
          </Link>


          <Link
            to="/register"
            className="bg-gray-200 text-gray-800 font-semibold py-2 px-5 rounded-full hover:bg-gray-300 transition"
          >
            Inscription
          </Link>


          <Link
            to="/create-event"
            className="bg-purple-900 text-white font-semibold py-2 px-5 rounded-full hover:bg-purple-800 transition"
          >
            Créer un événement
          </Link>
        </div>

        {/* --- Menu mobile (icône burger) --- */}
        <button
          className="text-gray-700 text-3xl md:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoClose /> : <IoMenu />}
        </button>
      </div>

      {/* --- Menu mobile déroulant --- */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <div className="flex flex-col p-4 space-y-3">
            <input
              type="text"
              placeholder="Rechercher un événement..."
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
              onChange={(e) => onSearchChange?.(e.target.value)}
            />

            <input
              type="text"
              placeholder="Lieu"
              className="border border-gray-300 rounded-full px-4 py-2 focus:outline-none"
            />

            <Link
              to="/participant"
              className="bg-purple-900 text-white text-center py-2 rounded-full hover:bg-purple-800"
            >
              Participer
            </Link>

            <Link
              to="/login"
              className="bg-gray-200 text-gray-800 text-center py-2 rounded-full hover:bg-gray-300"
            >
              Connexion
            </Link>

            <Link
              to="/register"
              className="bg-gray-200 text-gray-800 text-center py-2 rounded-full hover:bg-gray-300"
            >
              Inscription
            </Link>

            <Link
              to="/create-event"
              className="bg-purple-900 text-white text-center py-2 rounded-full hover:bg-purple-800"
            >
              Créer un événement
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
