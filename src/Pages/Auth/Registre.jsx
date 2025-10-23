import React, { useState } from "react";
import { UserIcon, EnvelopeIcon, LockClosedIcon } from "@heroicons/react/24/solid";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebaseConfig";



export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();
    setError("");

    // Vérification simple
    if (!email || !password || !confirmPassword) {
      setError("Veuillez remplir tous les champs.");
      return;
    }
    if (password !== confirmPassword) {
      setError("Les mots de passe ne correspondent pas.");
      return;
    }
    if (password.length < 6) {
      setError("Le mot de passe doit avoir au moins 6 caractères.");
      return;
    }

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      console.log("Utilisateur créé :", userCredential.user);
      alert("Inscription réussie !");
      // Optionnel : rediriger vers la page login ou home
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Créer un compte</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleRegister} className="flex flex-col gap-4">
          {/* Email */}
          <div className="flex items-center border rounded-lg p-2">
            <EnvelopeIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 outline-none"
            />
          </div>

          {/* Mot de passe */}
          <div className="flex items-center border rounded-lg p-2">
            <LockClosedIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Mot de passe"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="flex-1 outline-none"
            />
          </div>

          {/* Confirmer mot de passe */}
          <div className="flex items-center border rounded-lg p-2">
            <LockClosedIcon className="h-5 w-5 text-gray-500 mr-2" />
            <input
              type="password"
              placeholder="Confirmer mot de passe"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="flex-1 outline-none"
            />
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            S'inscrire
          </button>
        </form>
      </div>
    </div>
  );
}
