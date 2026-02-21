

import { Link } from "react-router-dom";
import React, { useState, useEffect } from "react";

// images
import ttsphoto from "../../assets/Images/Organisations-Images/TTSphoto.png";
import Gauche from "../../assets/Images/Organisations-Images/Thailande.jpg";
import Milieu from "../../assets/Images/Organisations-Images/Japon.jpg";
import Droite from "../../assets/Images/Organisations-Images/Greece.jpg";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
const [lastScrollY, setLastScrollY] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > lastScrollY && window.scrollY > 80) {
      setShowNavbar(false);
    } else {
      setShowNavbar(true);
    }

    setLastScrollY(window.scrollY);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, [lastScrollY]);

  return (
    <>
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div
        className="elfsight-app-5a3b04f0-8582-4358-8f09-4d54736e2d4a"
        data-elfsight-app-lazy
      />

      {/* ================= NAVBAR ================= */}
      <nav
  className={`fixed top-0 left-0 w-full z-50 bg-white border-b shadow-sm transition-transform duration-500 ${
    showNavbar ? "translate-y-0" : "-translate-y-full"
  }`}
>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center">
            <span className="text-white font-black text-sm">TT</span>
          </div>
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold text-[#ff5010]">
              {" "}
              Travel Touki Service
            </h1>
          </div>

            <div className="hidden lg:flex gap-6">
              {[
                "Destinations",
                "Voyages sur mesure",
                "Expériences",
                "À propos",
              ].map((item) => (
                <Link
                  key={item}
                  to=""
                  className="text-sm font-semibold px-3 py-1 hover:bg-gray-100 rounded-2xl transition"
                >
                  {item}
                </Link>
              ))}
            </div>

          <div className="hidden md:flex gap-4">
            <Link to="/create-event">
              <button className="bg-white text-[#ff5010] font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-[#ff5010] hover:text-white transition">
                Devis gratuit
              </button>
            </Link>
            <Link to="/create-event">
              <button className="bg-[#ff5010] text-white font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-white hover:text-[#ff5010] transition">
                Planifier mon voyage
              </button>
            </Link>
          </div>

          <div
            className="md:hidden cursor-pointer text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? "✕" : "☰"}
          </div>
        </div>
      </nav>

      {/* ================= HERO ================= */}
<section className="w-full bg-gradient-to-r from-[#ffb8e5] via-[#ff7d6d] to-[#ff5112] py-20"> <div className="w-[95%] bg-[#f5f5f0] rounded-lg shadow-lg mx-auto flex flex-col sm:flex-row overflow-hidden"> <div className="w-full sm:w-[55%] px-8 py-12 flex flex-col justify-center"> <h1 className="text-4xl sm:text-7xl font-bold leading-tight mb-6"> Voyagez autrement. <br /> Nous créons l’exceptionnel. </h1> <p className="text-lg sm:text-2xl mb-8"> Touki Travel est une agence de voyage spécialisée dans la création de <strong>voyages sur mesure</strong>, de circuits organisés et d’expériences authentiques à travers le monde. </p> <p className="text-base sm:text-lg text-gray-700 mb-10"> Que vous rêviez d’un séjour détente, d’une aventure culturelle, d’un voyage de noces ou d’une escapade de luxe, nos experts conçoivent chaque itinéraire selon vos envies, votre budget et votre rythme. </p> <div className="flex flex-col sm:flex-row gap-4"> <Link to="/create-event"> <button className="bg-[#ff5010] text-white px-6 py-3 rounded-full border-2 border-[#ff5010]"> Demander un devis </button> </Link> <Link to="/create-event"> <button className="bg-white text-[#ff5010] px-6 py-3 rounded-full border-2 border-[#ff5010]"> Parler à un conseiller </button> </Link> </div> </div> <div className="hidden sm:block sm:w-[45%] p-10"> <img src={ttsphoto} alt="Voyage sur mesure et destinations de rêve" className="w-full h-full object-cover rounded-lg" /> </div> </div> </section>

      {/* ================= SERVICES ================= */}
      <section className="bg-gray-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Pourquoi choisir Touki Travel ?
          </h2>

          <p className="text-xl sm:text-2xl mb-16">
            Une expertise humaine, une organisation rigoureuse et une attention
            portée à chaque détail.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              [
                "🌍 Voyages sur mesure",
                "Chaque voyage est conçu spécialement pour vous, sans formule standardisée.",
              ],
              [
                "🧭 Circuits organisés",
                "Des itinéraires optimisés, testés et accompagnés par nos experts.",
              ],
              [
                "✨ Expériences exclusives",
                "Rencontres locales, hébergements uniques et activités authentiques.",
              ],
              [
                "🛎️ Assistance complète",
                "Un accompagnement avant, pendant et après votre voyage, 24/7.",
              ],
            ].map(([title, desc]) => (
              <div
                key={title}
className="
bg-white rounded-xl shadow-md p-8 text-left
cursor-pointer
transform transition-all duration-300 ease-out
hover:scale-105 hover:shadow-xl
active:scale-105 active:shadow-xl
"
              >
                <h3 className="text-xl font-bold mb-4">{title}</h3>
                <p className="text-gray-700">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSPIRATION ================= */}
      <section className="bg-blue-100 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Inspirez votre prochain voyage
          </h2>
          <p className="text-xl sm:text-2xl mb-16">
            Découvrez quelques-unes de nos destinations phares.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {[Gauche, Milieu, Droite].map((img, i) => (
              <div
  key={i}
  className="
  group
  text-left
  bg-white rounded-2xl p-4
  transition-all duration-300 ease-out
  shadow-md
  hover:-translate-y-2 hover:shadow-2xl
  active:-translate-y-1 active:scale-[1.02]
  will-change-transform
  "
>
                <img
                  src={img}
                  alt="Destination de voyage"
                  className="w-full h-56 object-cover rounded-lg mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">
                  Destinations d’exception
                </h3>
                <p className="text-gray-700 mb-4">
                  Des plages paradisiaques aux capitales culturelles,
                  laissez-vous guider vers des expériences inoubliables.
                </p>
                <Link
                  to="/create-event"
                  className="font-semibold text-[#ff5010]"
                >
                  Découvrir →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TESTIMONIALS ================= */}
      <section className="bg-blue-200 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-center mb-16">
            Ils ont voyagé avec nous
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {[
              "Un voyage de noces parfaitement organisé à Bali. Tout était fluide, magique et sans stress.",
              "Un circuit culturel exceptionnel au Maroc, riche en découvertes et en émotions.",
            ].map((text, i) => (
              <div key={i} className="bg-white rounded-2xl p-10 shadow-md">
                <span className="text-6xl font-bold">“</span>
                <p className="text-xl mb-6">{text}</p>
                <span className="font-semibold text-lg">
                  Client Touki Travel
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* ================= LOCALISATION ================= */}
      <section className="bg-blue-300 py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Texte */}
            <div className="text-center lg:text-left">
              <h2 className="text-4xl sm:text-5xl font-bold mb-6">
                Notre agence à votre écoute
              </h2>

              <p className="text-xl text-gray-700 mb-8">
                Venez nous rencontrer directement en agence pour discuter de
                votre projet de voyage. Nos conseillers vous accompagnent de A à
                Z pour construire un séjour sur mesure, en toute confiance.
              </p>

              <div className="space-y-4 text-lg text-gray-800">
                <p>
                  📍 <strong>Adresse :</strong>
                  <br />
                  Touki Travel
                  <br />
                  Liberté 6 Extension,
                  <br />
                  Dakar, Sénégal
                </p>

                <p>
                  🕘 <strong>Horaires :</strong>
                  <br />
                  Lundi – Vendredi : 09h00 – 18h00
                  <br />
                  Samedi : 10h00 – 14h00
                </p>

                <p>
                  📞 <strong>Téléphone :</strong> +221 77 598 41 91
                  <br />
                  ✉️ <strong>Email :</strong> contact@toukitravel.com
                </p>
              </div>

              <div className="mt-10">
                <Link to="/create-event">
                  <button className="bg-[#ff5010] text-white px-8 py-3 rounded-full border-2 border-[#ff5010]">
                    Prendre rendez-vous
                  </button>
                </Link>
              </div>
            </div>

            {/* Google Map */}
            <div className="w-full h-[450px] rounded-2xl overflow-hidden shadow-lg">
              <iframe
                title="Localisation Touki Travel"
                src="https://www.google.com/maps?q=14.73032,-17.46359&hl=fr&z=16&output=embed"
                className="w-full h-full border-0"
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
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
    </>
  );
}
