// src/pages/Auth/Register.jsx
import { useState } from "react";

export default function Register() {
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "participant",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Formulaire soumis :", form);
    setMessage(`Inscription simulée : ${form.nom} ${form.prenom} (${form.role})`);
    setForm({ nom: "", prenom: "", email: "", password: "", role: "participant" });
  };

  return (
    <div className="min-h-screen bg-orange-200 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-orange-400 font-bold"  >Eventbrite</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Créer un compte</h2>

        {message && <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4 h-90 bg-white">
          {/* Ligne 1 : Nom & Prénom */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              placeholder="Prénom"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Ligne 2 : Email & Password */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />

            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          {/* Ligne 3 : Rôle (prend toute la largeur) */}
          <div className="grid grid-cols-2 gap-4">
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            >
              <option value="participant">Participant</option>
              <option value="organisateur">Organisateur</option>
            </select>

            <input
              name="number"
              type="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Telephone"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full py-3 mt-10 bg-orange-500 to-purple-500 text-white font-semibold rounded-xl shadow-md hover:from-purple-500 hover:to-blue-500 transition-all duration-300"
          >
            S'inscrire
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Déjà inscrit ? <span className="text-blue-500 font-medium cursor-pointer">Se connecter</span>
        </p>
      </div>
    </div>
  );
}
