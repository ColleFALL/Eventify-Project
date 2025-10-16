import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { doc, setDoc } from "firebase/firestore";
import { db } from "../../../src/Firebase/FirebaseConfig";

export default function CompleteProfile() {
  const location = useLocation();
  const navigate = useNavigate();
  const { uid, email, name } = location.state || {}; // infos venant de Google Auth

  const [form, setForm] = useState({
    nom: name?.split(" ")[0] || "",
    prenom: name?.split(" ")[1] || "",
    telephone: "",
    role: "participant",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!uid) {
      setMessage("Utilisateur non reconnu. Veuillez vous reconnecter.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      await setDoc(doc(db, "users", uid), {
        uid,
        email,
        nom: form.nom,
        prenom: form.prenom,
        telephone: form.telephone,
        role: form.role,
        createdAt: new Date().toISOString(),
      });

      // Redirection selon le rôle choisi
      if (form.role === "organisateur") navigate("/admin");
      else navigate("/participant");
    } catch (error) {
      console.error(error);
      setMessage("Erreur lors de l'enregistrement du profil.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-purple-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          Compléter mon profil
        </h2>
        <p className="mb-4 text-center text-gray-600">Email : {email}</p>

        {message && (
          <div className="mb-4 p-3 bg-red-100 text-red-700 rounded-lg text-center">
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Nom et Prénom */}
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

          {/* Téléphone */}
          <input
            name="telephone"
            type="tel"
            value={form.telephone}
            onChange={handleChange}
            placeholder="Numéro de téléphone"
            className="w-full p-3 border border-gray-300 rounded-lg"
            required
          />

          {/* Rôle */}
          <div>
            <label className="block mb-2 font-semibold">Rôle</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg"
            >
              <option value="participant">Participant</option>
              <option value="organisateur">Organisateur</option>
            </select>
          </div>

          {/* Bouton */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 mt-4 bg-orange-500 text-white font-semibold rounded-xl hover:bg-orange-600 transition-all"
          >
            {loading ? "Enregistrement..." : "Valider et continuer"}
          </button>
        </form>
      </div>
    </div>
  );
}
