// src/pages/Auth/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // <-- importé
import { auth } from "../../../src/Firebase/FirebaseConfig";
import { signInWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const navigate = useNavigate(); // <-- initialisation
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      setMessage(`Bienvenue ${user.email}  Vous êtes connecté(e) !`);
      setForm({ email: "", password: "" });
    } catch (error) {
      console.error("Erreur de connexion :", error);
      let errorMsg = "Une erreur est survenue.";

      if (error.code === "auth/user-not-found") {
        errorMsg = "Utilisateur introuvable.";
      } else if (error.code === "auth/wrong-password") {
        errorMsg = "Mot de passe incorrect.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "Email invalide.";
      }

      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-300 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-orange-400 font-bold text-center mb-4">Eventbrite</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">Connexion</h2>

        {message && (
          <div className="mb-4 p-3 bg-blue-100 text-blue-700 rounded-lg text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
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

          {/* champ mot de passe oublier */}

         <p className="text-right text-sm mt-2 text-blue-500 hover:underline cursor-pointer"
           onClick={() => navigate("/forgot-password")}>
           Mot de passe oublié ?
         </p>


          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-6 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all duration-300"
          >
            {loading ? "Connexion en cours..." : "Se connecter"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Pas encore de compte ?{" "}
          <span
            onClick={() => navigate("/register")}
 // <-- lien actif vers Register
            className="text-blue-500 font-medium cursor-pointer"
          >
            S'inscrire
          </span>
        </p>
      </div>
    </div>
  );
}
