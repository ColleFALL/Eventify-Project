import React from "react";
import { Link } from "react-router-dom";
import Toukitravel from "../../assets/Images/Organisations-Images/Toukitravel.jpeg";
import PartenaireToukiTravel from "../../assets/Images/Organisations-Images/PartenaireToukiTravel.jpeg";
                                          
// import PartenaireToukiTravel from "../../assets/images/Organisations-Images/PartenaireToukiTravel.jpeg";

export default function ToukiTravelDashboard() {
const destinations = [
  {
    name: "France",
    desc: "Voyages d'études, voyages culturels et tourisme urbain.",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=600&q=80",
    tag: "Europe",
  },
  {
    name: "Dubaï",
    desc: "Luxe, shopping, tourisme moderne et expériences premium.",
    image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=600&q=80",
    tag: "Moyen-Orient",
  },
  {
    name: "Maroc",
    desc: "Culture, désert, villes impériales et artisanat local.",
    image: "https://images.unsplash.com/photo-1539020140153-e479b8c22e70?w=600&q=80",
    tag: "Afrique",
  },
  {
    name: "Angleterre",
    desc: "Tourisme urbain, affaires et patrimoine historique.",
    image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?w=600&q=80",
    tag: "Europe",
  },
  {
    name: "Canada",
    desc: "Immigration, nature sauvage et tourisme longue durée.",
    image: "https://images.unsplash.com/photo-1517935706615-2717063c2225?w=600&q=80",
    tag: "Amérique",
  },
  {
    name: "États-Unis",
    desc: "Tourisme, business et grands événements internationaux.",
    image: "https://images.unsplash.com/photo-1485738422979-f5c462d49f74?w=600&q=80",
    tag: "Amérique",
  },
  {
    name: "Chine",
    desc: "Voyages d'affaires, tourisme culturel et grandes merveilles.",
    image: "https://images.unsplash.com/photo-1508804185872-d7badad00f7d?w=600&q=80",
    tag: "Asie",
  },
  {
    name: "Luxembourg",
    desc: "Voyages d'études, affaires et tourisme au cœur de l'Europe.",
    image: "https://images.unsplash.com/photo-1588668214407-6ea9a6d8c272?w=600&q=80",
    tag: "Europe",
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
                <div className="bg-gradient-to-r from-[#ff5112] via-[#ff7d6d] to-[#ffb855] text-white px-10 py-12">
        <p className="text-orange-100 text-sm font-medium uppercase tracking-widest mb-2">Votre agence de confiance</p>
        <h2 className="text-4xl font-extrabold mb-3 leading-tight">
          Voyagez avec sérénité.<br />Confiez-nous votre projet.
        </h2>
        <p className="text-orange-100 max-w-lg">
          Visas, études à l'étranger, tourisme — nous vous accompagnons à chaque étape vers votre destination de rêve.
        </p>
      </div>
      <br />
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
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 h-7 bg-orange-500 rounded-full" />
            <h2 className="text-2xl font-bold">Nos destinations</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
            {destinations.map((dest, i) => (
              <div key={i} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer border border-gray-100">
                <div className="relative h-44 overflow-hidden">
                  <img src={dest.image} alt={dest.name}
                    className="h-full w-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => { e.target.src = `https://via.placeholder.com/400x220/f97316/ffffff?text=${dest.name}`; }} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
                  <span className="absolute top-3 right-3 bg-white/90 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full">
                    {dest.tag}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="text-base font-bold mb-1">{dest.name}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{dest.desc}</p>
                  <button className="mt-3 text-orange-500 hover:text-orange-700 text-xs font-semibold flex items-center gap-1 group/btn">
                    Voir les détails <span className="group-hover/btn:translate-x-1 transition-transform">→</span>
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
      <footer className="bg-gray-200 border-t border-[#ff5010] py-8">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-600">
            © 2025 Touki Travel — Tous droits réservés
          </p>
          <div className="flex gap-4 font-semibold">
            <Link to="/mentions">Mentions légales</Link>
            <Link to="/contact">Contact</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
