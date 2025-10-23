// src/pages/Auth/ForgotPassword.jsx
import { useState } from "react";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../../src/Firebase/FirebaseConfig";
import { useNavigate } from "react-router-dom";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleReset = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");
    setLoading(true);
    try {
      await sendPasswordResetEmail(auth, email);
      setMessage("✅ Un lien de réinitialisation vous a été envoyé !");
      setEmail("");
    } catch (err) {
      console.error(err);
      setError("❌ Adresse email non trouvée ou invalide.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-orange-400 font-bold text-center mb-4">Eventbrite</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Mot de passe oublié</h2>

        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            {message}
          </div>
        )}
        {error && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleReset} className="space-y-4">
          <input
            type="email"
            placeholder="Votre email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-6 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            {loading ? "Envoi en cours..." : "Envoyer le lien"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Retour à la{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 font-medium cursor-pointer"
          >
            Connexion
          </span>
        </p>
      </div>
    </div>
  );
}
