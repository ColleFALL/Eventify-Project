// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// 🔐 Pages Auth
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

// 🧑‍💼 Pages Organisateur
import Organiser from "./Pages/Organizer/Organiser.jsx";
import Navbar1 from "./Pages/Organizer/NavbarORG.jsx";
import Section1 from "./Pages/Organizer/section1.jsx";
import Section2 from "./Pages/Organizer/section2.jsx";
import Section3 from "./Pages/Organizer/section3.jsx";
import Section4 from "./Pages/Organizer/section4.jsx";
import FooterORG from "./Pages/Organizer/Footer.jsx";
import EventbriteDashboard from "./Pages/Organizer/CreateEvent.jsx";

// 👥 Pages Participant
import Index from "./Pages/Participant";
import Hero from "./Pages/Participant/Hero";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Icons from "./Pages/Participant/icons";
import EventList from "./Pages/Participant/EventList";
import CityCarousel from "./Pages/Participant/CityCarousel";

function App() {
  return (
    <>
      <Routes>
        {/* --- Auth Routes --- */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* --- Organizer Routes --- */}
        <Route path="/organizer" element={<Organiser />} />
        <Route path="/navbar-org" element={<Navbar1 />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/section4" element={<Section4 />} />
        <Route path="/footer-org" element={<FooterORG />} />
        <Route path="/create-event" element={<EventbriteDashboard />} />

        {/* --- Participant Routes --- */}
        <Route path="/participant" element={<Index />} />
        <Route path="/hero" element={<Hero />} />
        <Route path="/icons" element={<Icons />} />
        <Route path="/event-list" element={<EventList />} />
        <Route path="/city-carousel" element={<CityCarousel />} />
      </Routes>
    </>
  );
}

export default App;
