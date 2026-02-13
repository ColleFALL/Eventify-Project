import React from "react";
import { Link } from "react-router-dom";
import Toukitravel from "../../assets/Images/Organisations-Images/Toukitravel.jpeg";
import PartenaireToukiTravel from "../../assets/Images/Organisations-Images/PartenaireToukiTravel.jpeg";
                                          
// import PartenaireToukiTravel from "../../assets/images/Organisations-Images/PartenaireToukiTravel.jpeg";

export default function ToukiTravelDashboard() {
  const destinations = [
    {
      name: "France",
      desc: "Voyages d'etudes,Voyages culturels et tourisme urbain  .",
      image: "https://via.placeholder.com/400x220?text=France",
    },
    {
      name: "Dubaï",
      desc: " Voyages d'etudes ,Luxe, shopping, tourisme moderne et expériences premium.",
      image: "https://via.placeholder.com/400x220?text=Dubai",
    },
    {
      name: "Maroc",
      desc: " Voyages d'etudes, Culture, désert, villes impériales et artisanat local.",
      image: "https://via.placeholder.com/400x220?text=Maroc",
    },
    {
      name: "Angleterre",
      desc: "Voyages d'etudes,Tourisme urbain, affaires et patrimoine historique.",
      image: "https://via.placeholder.com/400x220?text=Angleterre",
    },
    {
      name: "Canada",
      desc: "Voyages d'etudes, immigration, nature et tourisme longue durée.",
      image: "https://via.placeholder.com/400x220?text=Canada",
    },
    {
      name: "États-Unis",
      desc: "Tourisme, business,et grands événements.",
      image: "https://via.placeholder.com/400x220?text=USA",
    },
    {
      name: "Chine",
      desc: " Voyages d'etudes ,Voyages d'affaires et tourisme culturel.",
      image: "https://via.placeholder.com/400x220?text=Chine",
    },
    {
      name: "Luxembourg",
      desc: " Voyages d'etudes ,Voyages d'affaires et tourisme culturel.",
      image: "https://via.placeholder.com/400x220?text=Chine",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans w-full">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-orange-600">
          Bienvenue sur Travel Touki Service
        </h1>
        <Link to="/section1">
          <button className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 12H3m6 6l-6-6 6-6m6 12V6a2 2 0 012-2h3"
              />
            </svg>
            Retour à l'accueil
          </button>
        </Link>
      </header>

      <main className="px-10 py-8 w-full">
        {/* Prise de rendez-vous */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Prise de rendez-vous</h2>

          <div className="grid lg:grid-cols-2 gap-8 bg-blue- rounded-2xl p-6 shadow-sm">
            {/* Formulaire */}
            <div className="grid gap-4">
              <input
                className="border rounded-lg p-2"
                placeholder="Nom du client"
              />
              <input
                className="border rounded-lg p-2"
                placeholder="Email"
                type="email"
              />
              <input
                className="border rounded-lg p-2"
                placeholder="Téléphone"
                type="tel"
              />
              <input type="date" className="border rounded-lg p-2" />
              <input type="time" className="border rounded-lg p-2" />
              <select className="border rounded-lg p-2">
                <option>Type de consultation</option>
                <option>Visa</option>
                <option>Études</option>
                <option>Tourisme</option>
                <option>Autre</option>
              </select>
              <textarea
                className="border rounded-lg p-2"
                placeholder="Notes / Demandes particulières"
                rows="3"
              />
              <div className="flex justify-end">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition ">
                  Créer le rendez-vous
                </button>
              </div>
            </div>

            {/* Image */}
            <div className="flex items-center justify-center h-50%">
              <img
                src={PartenaireToukiTravel}
                alt="Touki Travel"
                className="rounded-xl object-contain"
              />
            </div>
          </div>
        </section>
        {/* Destinations */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Nos destinations</h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {destinations.map((dest, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="h-40 w-full object-cover"
                />
                <div className="p-4">
                  <h3 className="text-lg font-semibold mb-2">{dest.name}</h3>
                  <p className="text-sm text-gray-600">{dest.desc}</p>
                  <button className="mt-4 text-orange-600 hover:underline text-sm">
                    Voir les détails
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
        {/* Newsletter Section */}{" "}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Newsletters</h2>

          <div className="bg-gray-100 rounded-2xl p-6 shadow-sm">
            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Aperçu Newsletter */}
              <div className="border rounded-xl p-6 bg-gray-50">
                <h3 className="text-xl font-semibold mb-3 text-orange-600">
                  Aperçu de la newsletter
                </h3>

                <div className="space-y-4">
                  <div className="h-60 bg-gray-200 rounded-lg flex items-center justify-center text-4xl">
                    <img
                      src={Toukitravel}
                      alt=" Apercu d'un Newsletter de Touki Travel"
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <h4 className="text-lg font-bold">
                    Découvrez nos nouvelles destinations
                  </h4>

                  <p className="text-sm text-gray-600">
                    Touki Travel vous accompagne dans vos projets de voyage,
                    d’études et de tourisme à travers le monde. Profitez de nos
                    offres exclusives et destinations sélectionnées.
                  </p>

                  <button className="text-orange-600 text-sm hover:underline">
                    Voir un exemple complet
                  </button>
                </div>
              </div>

              {/* Formulaire Newsletter */}
              <div className="grid gap-4 ">
                <select className="border rounded-lg p-2">
                  <option>Type de newsletter</option>
                  <option>Nouvelle destination</option>
                  <option>Promotion spéciale</option>
                  <option>Newsletter mensuelle</option>
                  <option>Voyage thématique</option>
                </select>

                <input
                  className="border rounded-lg p-2"
                  placeholder="Titre de la newsletter"
                />

                <textarea
                  className="border rounded-lg p-2"
                  placeholder="Contenu du message"
                  rows="6"
                />

                <select className="border rounded-lg p-2">
                  <option>Destinataires</option>
                  <option>Tous les clients</option>
                  <option>Clients VIP</option>
                  <option>Nouveaux abonnés</option>
                </select>

                <div className="flex justify-end">
                  <button className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition">
                    Envoyer la newsletter
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 border-t border-orange-500 py-6 text-gray-600">
        <div className="max-w-7xl mx-auto px-4 flex justify-between">
          <span>© 2026 Touki Travel</span>
          <span className="font-bold text-orange-500">✈️ Touki Travel</span>
        </div>
      </footer>
    </div>
  );
}
