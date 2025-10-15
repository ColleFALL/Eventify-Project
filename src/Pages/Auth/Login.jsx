// src/pages/Auth/Login.jsx
import { useState } from "react";

export default function Login() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Connexion simulée :", form);
    setMessage(`Connexion simulée pour ${form.email}`);
    setForm({ email: "", password: "" });
  };

  return (
    <div className="min-h-screen bg-orange-200 to-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-orange-400 font-bold text-center mb-4">Eventbrite</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Connexion</h2>

        {message && <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded-lg text-center">{message}</div>}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <input
            name="email"
            type="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Mot de passe */}
          <input
            name="password"
            type="password"
            value={form.password}
            onChange={handleChange}
            placeholder="Mot de passe"
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {/* Bouton Se connecter */}
          <button
            type="submit"
            className="w-full py-3 mt-6 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            Se connecter
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Pas encore de compte ? <span className="text-blue-500 font-medium cursor-pointer">S'inscrire</span>
        </p>
      </div>
    </div>
  );
}
