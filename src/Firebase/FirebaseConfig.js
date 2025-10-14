// src/firebase/firebaseConfig.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

//  Copie ici ta configuration Firebase :
const firebaseConfig = {
  apiKey: "AIzaSyAWgYOzWc68QHL4_j8RkHGAidpb5cSZta0",
  authDomain: "eventify-18332.firebaseapp.com",
  projectId: "eventify-18332",
  storageBucket: "eventify-18332.firebasestorage.app",
  messagingSenderId: "562844109703",
  appId: "1:562844109703:web:ce3ebf0ce3168f58802122"
};



// Initialize Firebase
const app = initializeApp(firebaseConfig);

//  Exports des services qu'on va utiliser
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
