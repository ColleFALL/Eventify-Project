import React, { useRef } from "react";
import { Link } from "react-router-dom";
import Toukitravel from "../../assets/Images/Organisations-Images/Toukitravel.jpeg";
import PartenaireToukiTravel from "../../assets/Images/Organisations-Images/PartenaireToukiTravel.jpeg";
import emailjs from "@emailjs/browser";

export default function ToukiTravelDashboard() {
  const formRef = useRef();

  const handleSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Remplace par ton ID de service EmailJS
        "YOUR_TEMPLATE_ID", // Remplace par ton ID de template EmailJS
        formRef.current,
        "YOUR_PUBLIC_KEY", // Remplace par ta clé publique EmailJS
      )
      .then(
        () => alert("Rendez-vous envoyé avec succès !"),
        (err) => alert("Erreur lors de l'envoi : " + err.text),
      );

    e.target.reset();
  };

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

      <main className="px-10 py-8 w-full space-y-12">
        {/* Prise de rendez-vous */}
        <section>
          <div className="bg-gradient-to-r from-[#ff5112] via-[#ff7d6d] to-[#ffb855] text-white px-10 py-12 rounded-2xl">
            <p className="text-orange-100 text-sm font-medium uppercase tracking-widest mb-2">
              Votre agence de confiance
            </p>
            <h2 className="text-4xl font-extrabold mb-3 leading-tight">
              Voyagez avec sérénité.
              <br />
              Confiez-nous votre projet.
            </h2>
            <p className="text-orange-100 max-w-lg">
              Visas, études à l'étranger, tourisme — nous vous accompagnons à
              chaque étape vers votre destination de rêve.
            </p>
          </div>

          <h2 className="text-2xl font-semibold my-6">Prise de rendez-vous</h2>
          <div className="grid lg:grid-cols-2 gap-8 bg-blue-50 rounded-2xl p-6 shadow-sm">
            <form
              ref={formRef}
              onSubmit={handleSendEmail}
              className="grid gap-4"
            >
              <input
                name="nom"
                className="border rounded-lg p-2"
                placeholder="Nom du client"
                required
              />
              <input
                name="email"
                type="email"
                className="border rounded-lg p-2"
                placeholder="Email"
                required
              />
              <input
                name="telephone"
                type="tel"
                className="border rounded-lg p-2"
                placeholder="Téléphone"
                required
              />
              <input
                name="date"
                type="date"
                className="border rounded-lg p-2"
                required
              />
              <input
                name="heure"
                type="time"
                className="border rounded-lg p-2"
                required
              />
              <select
                name="consultation"
                className="border rounded-lg p-2"
                required
              >
                <option value="">Type de consultation</option>
                <option value="Visa">Visa</option>
                <option value="Études">Études</option>
                <option value="Tourisme">Tourisme</option>
                <option value="Autre">Autre</option>
              </select>
              <textarea
                name="message"
                className="border rounded-lg p-2"
                placeholder="Notes / Demandes particulières"
                rows="3"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition"
                >
                  Créer le rendez-vous
                </button>
              </div>
            </form>

<div className="relative rounded-2xl overflow-hidden shadow-lg group">
  <img
    src={PartenaireToukiTravel}
    alt="Touki Travel partenaire"
    className="w-full h-full object-cover min-h-[320px] transition duration-700 group-hover:scale-105"
  />

  {/* Overlay dégradé subtil */}
  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent"></div>

  {/* Texte flottant élégant */}
  <div className="absolute bottom-6 left-6 text-white">
    <h3 className="text-2xl font-bold">Votre partenaire voyage</h3>
    <p className="text-sm opacity-90">
      Un accompagnement personnalisé à chaque étape
    </p>
  </div>
</div>
          </div>
        </section>
        {/* Newsletter */}
        {/* Newsletter Section */}{" "}
        <section className="mb-16">
          <h2 className="text-3xl font-bold mb-8 text-gray-800">Newsletters</h2>

          <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-3xl p-8 shadow-md">
            <div className="grid lg:grid-cols-2 gap-10 items-stretch">
              {/* ================= LEFT - APERÇU ================= */}
              <div className="border border-gray-200 rounded-2xl p-6 bg-white shadow-sm hover:shadow-lg transition duration-300 flex flex-col">
                <h3 className="text-xl font-semibold mb-4 text-orange-600">
                  Aperçu de la newsletter
                </h3>

                <div className="rounded-xl overflow-hidden mb-4">
                  <img
                    src={Toukitravel}
                    alt="Aperçu Newsletter Touki Travel"
                    className="w-full h-60 object-cover hover:scale-105 transition duration-500"
                  />
                </div>

                <h4 className="text-lg font-bold text-gray-800 mb-2">
                  Découvrez nos nouvelles destinations
                </h4>

                <p className="text-sm text-gray-600 leading-relaxed mb-4">
                  Touki Travel vous accompagne dans vos projets de voyage,
                  d’études et de tourisme à travers le monde. Profitez de nos
                  offres exclusives et destinations soigneusement sélectionnées.
                </p>

                <button className="mt-auto text-orange-600 font-medium text-sm hover:underline">
                  Voir un exemple complet →
                </button>
              </div>

              {/* ================= RIGHT - ABONNEMENT ================= */}
              <div className="border border-gray-200 rounded-2xl p-8 bg-white shadow-sm hover:shadow-lg transition duration-300 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-semibold mb-3 text-orange-600">
                    Abonnez-vous à nos actualités
                  </h3>

                  <p className="text-sm text-gray-600 mb-6 leading-relaxed">
                    Recevez en priorité nos nouvelles destinations, promotions
                    exclusives et conseils pour vos voyages, études et demandes
                    de visa.
                  </p>

                  <div className="grid gap-4">
                    <input
                      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                      type="text"
                      placeholder="Votre prénom"
                    />

                    <input
                      className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition"
                      type="email"
                      placeholder="Votre adresse e-mail"
                    />

                    <select className="border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-orange-400 focus:border-orange-400 outline-none transition">
                      <option value="">Choisissez vos préférences</option>
                      <option>Nouvelles destinations</option>
                      <option>Offres promotionnelles</option>
                      <option>Conseils visa & études</option>
                      <option>Toutes nos actualités</option>
                    </select>

                    <label className="flex items-start gap-3 text-sm text-gray-600">
                      <input
                        type="checkbox"
                        className="mt-1 accent-orange-500"
                      />
                      J’accepte de recevoir les communications et offres
                      exclusives de Touki Travel.
                    </label>
                  </div>
                </div>

                <div className="mt-8">
                  <button className="w-full bg-orange-500 text-white py-3 rounded-xl hover:bg-orange-600 transition duration-300 font-semibold shadow-md hover:shadow-lg">
                    S’abonner maintenant
                  </button>

                  <p className="text-xs text-center text-gray-400 mt-4">
                    Désinscription possible à tout moment • Aucun spam garanti
                  </p>
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
