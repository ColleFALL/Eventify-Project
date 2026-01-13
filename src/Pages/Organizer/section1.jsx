// import React, { useState } from "react";
// import { Link } from "react-router-dom";

// // images
// import section1 from "../../assets/images/Organisations-Images/section1.webp";
// import Divgauche from "../../assets/images/Organisations-Images/Divgauche.jpg";
// import Divmilieu from "../../assets/images/Organisations-Images/Divmilieu.jpg";
// import Divdroite from "../../assets/images/Organisations-Images/Divdroite.png";

// export default function Page() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   return (
//     <>
//       {/* ================= NAVBAR ================= */}
//       <nav className="sticky top-0 z-50 bg-white border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
//           <div className="flex items-center gap-2.5">
//             <a href="#">
//               <svg xmlns="http://www.w3.org/2000/svg" width="22" height="28" viewBox="0 0 20 25" fill="none">
//                 <path
//                   d="M19.8556 20.5207C19.8556 19.1236 19.2133 17.8773..."
//                   fill="#FF5010"
//                 />
//               </svg>
//             </a>
//             <h1 className="text-xl font-bold text-[#ff5010]"> Touki Service</h1>
//           </div>

//           <div className="hidden md:flex gap-6">
//             {["Features", "Event Types", "Resources", "Pricing"].map((item) => (
//               <a key={item} href="#" className="text-sm font-semibold px-3 py-1 hover:bg-gray-100 rounded-2xl transition">
//                 {item}
//               </a>
//             ))}
//           </div>

//           <div className="hidden md:flex gap-4">
//             <button className="bg-white text-[#ff5010] font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-[#ff5010] hover:text-white transition">
//               Ne vous inscrivez pas
//             </button>
//             <button className="bg-[#ff5010] text-white font-bold px-4 py-2 rounded-full border-2 border-[#ff5010] hover:bg-white hover:text-[#ff5010] transition">
//               Tenez votre premier rendez-vous
//             </button>
//           </div>

//           <div className="md:hidden cursor-pointer text-2xl" onClick={() => setMenuOpen(!menuOpen)}>
//             {menuOpen ? "✕" : "☰"}
//           </div>
//         </div>

//         {menuOpen && (
//           <div className="md:hidden bg-amber-50 border-t py-4 flex flex-col items-center gap-4">
//             {["Features", "Event Types", "Resources", "Pricing"].map((item) => (
//               <a key={item} href="#" className="text-lg font-semibold">
//                 {item}
//               </a>
//             ))}
//           </div>
//         )}
//       </nav>

//       {/* ================= SECTION 1 ================= */}
//         <div className="w-full min-h-[250px] flex flex-col bg-gradient-to-r from-[#ffb8e5] via-[#ff7d6d] to-[#ff5112] gap-12 sm:gap-20 ">

//   {/* Breadcrumb */}
//   <div className="mt-4 sm:mt-6 px-4 sm:px-10 text-sm sm:text-base">
//     <a href="#">Home</a> <span> &gt; </span> <a href="#">Create Events</a>
//   </div>

//   {/* Main container */}
//   <div className="w-[95%] bg-[#f5f5f0] flex flex-col sm:flex-row rounded-lg shadow-lg mx-auto overflow-hidden mb-5">

//     {/* Text block */}
//     <div className="w-full sm:w-[55%] px-6 sm:px-10 py-10 sm:py-0 flex flex-col justify-center">

//       <h1 className="text-4xl sm:text-7xl font-bold mb-6 sm:mb-10 leading-tight">
//         Cabinet de conseil  <br /> et de prestation de service .
//       </h1>

//       <span className="text-lg sm:text-2xl">
//         Cabinet de voyage spécialisé dans l'organisation de voyages sur mesure et d'expériences inoubliables.
//       </span>

//       <div className="mt-10 sm:mt-20 flex flex-col sm:flex-row gap-4 sm:gap-5">
//         <Link to="/create-event">
//           <button className="bg-[#ff5010] text-white px-6 py-3 rounded-full border-2 border-[#ff5010] w-full sm:w-auto">
//             Tenez votre premier rendez-vous
//           </button>
//         </Link>

//         <Link to="/create-event">
//           <button className="bg-white text-[#ff5010] px-6 py-3 rounded-full border-2 border-[#ff5010] w-full sm:w-auto">
//             Contact Sales
//           </button>
//         </Link>
//       </div>
//     </div>

//     {/* Image */}
//     <div className="hidden sm:block sm:w-[45%]">
//       <img
//         className="w-full h-full object-cover"
//         src={section1}
//         alt="Event illustration"
//       />
//     </div>

//   </div>
// </div>

//       {/* ================= SECTION 2 ================= */}
//       <section className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center space-y-6">
//           <h1 className="text-4xl sm:text-5xl font-bold">Host events and grow your community</h1>
//           <p className="text-xl sm:text-2xl">
//             From event ticketing to payment collection, tools to promote, market, and manage your events seamlessly.
//           </p>

//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
//             {[
//               ["Event Ticketing", "Everything you need to sell tickets for in-person or online events"],
//               ["Eventbrite Ads", "Create no-hassle ads that promote your event on Eventbrite"],
//               ["Marketing Tools", "All the event marketing tools you need in one place"],
//               ["Payments", "Easily collect and simplify event payments worldwide"],
//             ].map(([title, desc]) => (
//               <div key={title} className="bg-[#ff531a] text-white rounded-xl shadow-md p-6 flex flex-col justify-between">
//                 <div>
//                   <h3 className="text-xl font-semibold mb-2">{title}</h3>
//                   <p className="text-base">{desc}</p>
//                 </div>
//                 <button className="mt-6 bg-[#fef3c6] text-black py-3 rounded-lg font-bold uppercase text-xs">
//                   Discover
//                 </button>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 3 ================= */}
//       <section className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4 text-center">
//           <h3 className="text-2xl font-semibold">Eventbrite All Access</h3>
//           <p className="text-4xl sm:text-5xl font-bold mt-2">
//             Trends and insights from industry experts
//           </p>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
//             {[Divgauche, Divmilieu, Divdroite].map((img, i) => (
//               <div key={i} className="flex flex-col text-left">
//                 <img src={img} alt="" className="w-full h-56 object-cover rounded-lg mb-4" />
//                 <h2 className="text-2xl font-bold mb-2">Inspiring Event Content</h2>
//                 <p className="mb-4">Discover proven strategies to grow and engage your audience.</p>
//                 <a href="#" className="flex items-center font-semibold">
//                   Learn more →
//                 </a>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= SECTION 4 ================= */}
//       <section className="bg-gray-100 py-20">
//         <div className="max-w-7xl mx-auto px-4">
//           <h3 className="text-4xl sm:text-5xl font-bold text-center mb-12">
//             Success stories from our community
//           </h3>

//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
//             {["The Riot Comedy Club", "Drunk Theatre"].map((name, i) => (
//               <div key={i} className="bg-gray-200 rounded-2xl p-8 flex flex-col justify-between min-h-[320px]">
//                 <span className="text-6xl font-bold">“</span>
//                 <p className="text-2xl text-center">
//                   Ultimately what I need is for people to land on the event page.
//                 </p>
//                 <div className="flex items-center gap-3 mt-6">
//                   <span className="font-medium text-xl">{name}</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* ================= FOOTER ================= */}
//   <footer className="bg-gray-200 border-t border-[#ff531a] py-6 text-md text-gray-600">
//       <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
//          {/* Left section */}
//         <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
//           <a href="#" className="hover:text-gray-800">Status</a>
//            <span>.</span>
//           <a href="#" className="hover:text-gray-800">Terms</a>
//           <span>.</span>
//           <a href="#" className="hover:text-gray-800">Privacy</a>
//           <span>.</span>
//           <a href="#" className="hover:text-gray-800">Accessibility</a>
//           <span>.</span>
//           <a href="#" className="hover:text-gray-800">Cookies</a>
//           <span>.</span>
//           <a href="#" className="hover:text-gray-800">Manage Cookie Preferences</a>
//           <span>.</span>
//           <a href="#" className="hover:text-gray-800">Do Not Sell or Share My Personal Information</a>
//         </div>

//         {/* Right section */}
//         <div className="flex items-center gap-2">
//           <span>© 2025 Eventbrite</span>
//         </div>
//       </div>

//       {/* Logo section */}
//       <div className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-start gap-2">
//         {/* Replace this SVG with your own logo */}
//         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-6 h-6 fill-[#ff531a]">
//           <path d="M0 0h32v32H0z" fill="none" />
//           <path d="M16 4l8 8-8 8-8-8z" />
//         </svg>
//         <span className="text-xl font-bold text-[#ff531a]">eventbrite</span>
//       </div>
//     </footer>
//     </>
//   );
// }

import React, { useState } from "react";
import { Link } from "react-router-dom";

// images
import section1 from "../../assets/images/Organisations-Images/section1.webp";
import Gauche from "../../assets/images/Organisations-Images/Thailande.jpg";
import Milieu from "../../assets/images/Organisations-Images/Japon.jpg";
import Droite from "../../assets/images/Organisations-Images/Greece.jpg";

export default function Page() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <script src="https://elfsightcdn.com/platform.js" async></script>
      <div
        className="elfsight-app-5a3b04f0-8582-4358-8f09-4d54736e2d4a"
        data-elfsight-app-lazy
      />

      {/* ================= NAVBAR ================= */}
      <nav className="sticky top-0 z-50 bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
          <div className="flex items-center gap-2.5">
            <h1 className="text-xl font-bold text-[#ff5010]"> Travel Touki Service</h1>
          </div>

          <div className="hidden md:flex gap-6">
            {[
              "Destinations",
              "Voyages sur mesure",
              "Expériences",
              "À propos",
            ].map((item) => (
              <Link
                key={item}
                to="create-event"
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
      <section className="w-full bg-gradient-to-r from-[#ffb8e5] via-[#ff7d6d] to-[#ff5112] py-20">
        <div className="w-[95%] bg-[#f5f5f0] rounded-lg shadow-lg mx-auto flex flex-col sm:flex-row overflow-hidden">
          <div className="w-full sm:w-[55%] px-8 py-12 flex flex-col justify-center">
            <h1 className="text-4xl sm:text-7xl font-bold leading-tight mb-6">
              Voyagez autrement. <br /> Nous créons l’exceptionnel.
            </h1>

            <p className="text-lg sm:text-2xl mb-8">
              Touki Travel est une agence de voyage spécialisée dans la création
              de <strong>voyages sur mesure</strong>, de circuits organisés et
              d’expériences authentiques à travers le monde.
            </p>

            <p className="text-base sm:text-lg text-gray-700 mb-10">
              Que vous rêviez d’un séjour détente, d’une aventure culturelle,
              d’un voyage de noces ou d’une escapade de luxe, nos experts
              conçoivent chaque itinéraire selon vos envies, votre budget et
              votre rythme.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/create-event">
                <button className="bg-[#ff5010] text-white px-6 py-3 rounded-full border-2 border-[#ff5010]">
                  Demander un devis
                </button>
              </Link>
              <Link to="/creat-event">
                <button className="bg-white text-[#ff5010] px-6 py-3 rounded-full border-2 border-[#ff5010]">
                  Parler à un conseiller
                </button>
              </Link>
            </div>
          </div>

          <div className="hidden sm:block sm:w-[45%]">
            <img
              src={section1}
              alt="Voyage sur mesure et destinations de rêve"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

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
                className="bg-white rounded-xl shadow-md p-8 text-left
                 cursor-pointer transform transition duration-300
                 hover:scale-105 hover:shadow-lg"
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
              <div key={i} className="text-left">
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
                  Avenue Cheikh Anta Diop,
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
                  📞 <strong>Téléphone :</strong> +221 77 000 00 00
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
                src="https://www.google.com/maps?q=Avenue%20Cheikh%20Anta%20Diop%20Dakar&output=embed"
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
