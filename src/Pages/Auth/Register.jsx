// src/pages/Auth/Register.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom"; // pour la redirection
import { auth, db } from "../../../src/Firebase/FirebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function Register() {
  const navigate = useNavigate(); // initialisation
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    email: "",
    password: "",
    role: "participant",
    number: "",
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
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        form.email,
        form.password
      );
      const user = userCredential.user;

      await setDoc(doc(db, "users", user.uid), {
        uid: user.uid,
        nom: form.nom,
        prenom: form.prenom,
        email: form.email,
        role: form.role,
        telephone: form.number,
        createdAt: new Date().toISOString(),
      });

      // Message de succès
      setMessage(`Bienvenue ${form.prenom} 🎉 Votre compte a été créé avec succès !`);

      // Reset du formulaire
      setForm({
        nom: "",
        prenom: "",
        email: "",
        password: "",
        role: "participant",
        number: "",
      });

      // 🔁 Redirection automatique vers la page de connexion
      setTimeout(() => {
        navigate("/login"); // redirige vers login après 1,5s
      }, 1500);

    } catch (error) {
      console.error("Erreur d'inscription :", error);
      let errorMsg = "Une erreur est survenue.";
      if (error.code === "auth/email-already-in-use") {
        errorMsg = "Cet email est déjà utilisé.";
      } else if (error.code === "auth/invalid-email") {
        errorMsg = "Email invalide.";
      } else if (error.code === "auth/weak-password") {
        errorMsg = "Mot de passe trop faible (min. 6 caractères).";
      }
      setMessage(errorMsg);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-orange-300 flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-xl p-8">
        <h1 className="text-orange-400 font-bold text-center fs-6">Eventbrite</h1>
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Créer un compte
        </h2>

        {message && (
          <div className="mb-4 p-3 bg-green-100 text-green-700 rounded-lg text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom & Prénom */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="nom"
              value={form.nom}
              onChange={handleChange}
              placeholder="Nom"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              name="prenom"
              value={form.prenom}
              onChange={handleChange}
              placeholder="Prénom"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Email & Password */}
          <div className="grid grid-cols-2 gap-4">
            <input
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
            <input
              name="password"
              type="password"
              value={form.password}
              onChange={handleChange}
              placeholder="Mot de passe"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          {/* Rôle & Téléphone */}
          <div className="grid grid-cols-2 gap-4">
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="participant">Participant</option>
              <option value="organisateur">Organisateur</option>
            </select>
            <input
              name="number"
              type="number"
              value={form.number}
              onChange={handleChange}
              placeholder="Téléphone"
              className="w-full p-3 border border-gray-300 rounded-lg"
              required
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-8 bg-orange-500 text-white font-semibold rounded-xl shadow-md hover:bg-orange-600 transition-all"
          >
            {loading ? "Création du compte..." : "S'inscrire"}
          </button>
        </form>

        <p className="mt-6 text-center text-gray-500">
          Déjà inscrit ?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-500 font-medium cursor-pointer"
          >
            Se connecter
          </span>
        </p>
      </div>
    </div>
  );
}
