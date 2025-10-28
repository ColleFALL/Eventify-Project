// src/context/AuthContext.jsx
import { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../Firebase/FirebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";

// 1️⃣ Crée le contexte
const AuthContext = createContext();

// 2️⃣ Hook pour utiliser le contexte facilement
export const useAuth = () => useContext(AuthContext);

// 3️⃣ Fournisseur du contexte
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); // utile si tu veux gérer un loader global

  // 4️⃣ Surveille l’état de l’authentification
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser); // met à jour l’utilisateur connecté
      setLoading(false);    // fin du chargement
    });

    // Cleanup
    return () => unsubscribe();
  }, []);

  // 5️⃣ Fonction pour déconnexion
  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null); // optionnel, car onAuthStateChanged va déjà mettre null
    } catch (error) {
      console.error("Erreur lors de la déconnexion :", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, logout, loading }}>
      {children}
    </AuthContext.Provider>
  );
};
