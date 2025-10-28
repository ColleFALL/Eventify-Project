// src/App.jsx
import React from "react";
import { Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./index.css";

// 🔐 Pages Auth
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

// 🧑‍💼 Pages Organisateur
import Organiser from "./Pages/Organizer/Organiser";
import Navbar1 from "./Pages/Organizer/NavbarORG";
import Section1 from "./Pages/Organizer/section1";
import Section2 from "./Pages/Organizer/section2";
import Section3 from "./Pages/Organizer/section3";
import Section4 from "./Pages/Organizer/section4";
import FooterORG from "./Pages/Organizer/Footer";
import EventbriteDashboard from "./Pages/Organizer/CreateEvent";

// 👥 Pages Participant
// import Participant from "./Pages/Participant";
import Index from "./Pages/Participant/Index";
import Hero from "./Pages/Participant/Hero";
import Navbar from "./Pages/Participant/Navbar";
import Icons from "./Pages/Participant/icons";
import EventList from "./Pages/Participant/EventList";
import CityCarousel from "./Pages/Participant/CityCarousel";
import Footer from "./Pages/Participant/Footer";

// Layout pour les pages participant
const ParticipantLayout = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer/>
  </>
);

function App() {
  return (
    <Routes>
      {/* 🏠 Redirige la racine vers /participant */}
      <Route path="/" element={<Navigate to="/participant" replace />} />

      {/* 🔐 Authentification */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />

      {/* 🧑‍💼 Organizer */}
      <Route path="/organiser" element={<Organiser />} />
      <Route path="/navbar-org" element={<Navbar1 />} />
      <Route path="/section1" element={<Section1 />} />
      <Route path="/section2" element={<Section2 />} />
      <Route path="/section3" element={<Section3 />} />
      <Route path="/section4" element={<Section4 />} />
      <Route path="/footer-org" element={<FooterORG />} />
      <Route path="/create-event" element={<EventbriteDashboard />} />

      {/* 👥 Participant avec Navbar */}
      <Route path="/participant" element={<ParticipantLayout />}>
        <Route index element={<Index />} />
        <Route path="hero" element={<Hero />} />
        <Route path="icons" element={<Icons />} />
        <Route path="event-list" element={<EventList />} />
        <Route path="city-carousel" element={<CityCarousel />} />
        
      </Route>
    </Routes>
    
  );
}

export default App;
