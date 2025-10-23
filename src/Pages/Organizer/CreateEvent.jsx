import React from "react";

export default function EventbriteDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans w-full">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 border-b bg-white shadow-sm">
        <h1 className="text-3xl font-bold text-orange-600">
          Bienvenue sur Eventify
        </h1>
        <button className="flex items-center gap-2 px-4 py-2 border border-orange-500 text-orange-500 rounded-lg hover:bg-orange-50 transition">
          {/* Logout icon */}
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
          Déconnexion
        </button>
      </header>

      {/* Main Content */}
      <main className="px-10 py-8 w-full">
        {/* Dashboard Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Dashboard</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Nombre de vues</h3>
              <p className="text-3xl font-bold text-orange-500">—</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Inscriptions</h3>
              <p className="text-3xl font-bold text-orange-500">—</p>
            </div>
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h3 className="font-semibold mb-2">Événements actifs</h3>
              <p className="text-3xl font-bold text-orange-500">—</p>
            </div>
          </div>
        </section>

        {/* Create Event Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Créer un événement</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <form className="grid gap-4 max-w-2xl">
              <input
                className="border rounded-lg p-2"
                placeholder="Titre de l'événement"
              />
              <textarea
                className="border rounded-lg p-2"
                placeholder="Description"
              />
              <input className="border rounded-lg p-2" placeholder="Lieu" />
              <input type="date" className="border rounded-lg p-2" />
              <input
                className="border rounded-lg p-2"
                placeholder="URL de l'image"
              />
              <select className="border rounded-lg p-2">
                <option>Public</option>
                <option>Privé</option>
              </select>
              <div className="flex justify-end">
                <button className="bg-orange-500 text-white px-6 py-2 rounded-lg hover:bg-orange-600 transition">
                  Créer
                </button>
              </div>
            </form>
          </div>
        </section>

        {/* My Events Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mes événements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-2xl p-4 shadow-sm hover:shadow-md transition"
              >
                <img
                  src="https://via.placeholder.com/400x200"
                  alt=""
                  className="rounded-lg mb-3"
                />
                <h3 className="font-semibold text-lg mb-1">
                  Nom de l’événement
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Description de l’événement…
                </p>
                <p className="text-sm text-gray-600">📍 Lieu — Date</p>
                <div className="flex gap-3 mt-3 text-sm">
                  <button className="text-black hover:underline">
                    Modifier
                  </button>
                  <button className="text-black hover:underline">
                    Supprimer
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Participants Section */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Participants</h2>
          <div className="bg-white rounded-2xl p-6 shadow-sm overflow-x-auto">
            <table className="w-full text-left border-t">
              <thead>
                <tr className="text-gray-600 border-b">
                  <th className="py-2">Nom</th>
                  <th className="py-2">Email</th>
                  <th className="py-2">Événement</th>
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3].map((i) => (
                  <tr key={i} className="border-b">
                    <td className="py-2">Participant {i}</td>
                    <td className="py-2">email{i}@exemple.com</td>
                    <td className="py-2">Événement {i}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="flex justify-end mt-4">
              <button className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition">
                Exporter CSV
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 border-t border-[#ff531a] py-6 text-md text-gray-600 w-full">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Left section */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2">
            <a href="#" className="hover:text-gray-800">Status</a>
            <span>.</span>
            <a href="#" className="hover:text-gray-800">Terms</a>
            <span>.</span>
            <a href="#" className="hover:text-gray-800">Privacy</a>
            <span>.</span>
            <a href="#" className="hover:text-gray-800">Accessibility</a>
            <span>.</span>
            <a href="#" className="hover:text-gray-800">Cookies</a>
            <span>.</span>
            <a href="#" className="hover:text-gray-800">Manage Cookie Preferences</a>
            <span>.</span>
            <a href="#" className="hover:text-gray-800">Do Not Sell or Share My Personal Information</a>
          </div>

          {/* Right section */}
          <div className="flex items-center gap-2">
            <span>© 2025 Eventbrite</span>
          </div>
        </div>

        {/* Logo section */}
        <div className="max-w-7xl mx-auto px-4 mt-6 flex items-center justify-start gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            className="w-6 h-6 fill-[#ff531a]"
          >
            <path d="M0 0h32v32H0z" fill="none" />
            <path d="M16 4l8 8-8 8-8-8z" />
          </svg>
          <span className="text-xl font-bold text-[#ff531a]">eventbrite</span>
        </div>
      </footer>
    </div>
  );
}
