// src/App.jsx
import React from "react";
import { Routes, Route } from "react-router-dom"; // juste Routes et Route
import Index from "./Pages/Participant";
import Hero from "./Pages/Participant/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Icons from "./Pages/Participant/icons";

function App() {
  return (
    <>
      <Navbar /> {/* Navbar visible sur toutes les pages */}

      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/hero" element={<Hero />} />
         <Route path="Icons/" element={<Icons />} />
      </Routes>

      <Footer /> {/* Footer visible sur toutes les pages */}
    </>
  );
}

export default App;
