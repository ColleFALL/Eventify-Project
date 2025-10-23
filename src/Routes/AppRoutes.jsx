// src/Routes/AppRoutes.jsx
import React from "react";
import { Routes, Route } from "react-router-dom";
import EventsList from "../Pages/Participant/EventsList.jsx"

const AppRoutes = () => {
  return (
    <Routes>
      {/* Route principale vers la liste des événements */}
      <Route path="/" element={<EventsList />} />
      
      {/* Tu peux ajouter d'autres routes ici */}
      {/* <Route path="/event/:id" element={<EventDetail />} /> */}
    </Routes>
  );
};

export default AppRoutes;
