import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Participant/Home";
import Participant from "./Pages/Participant/Participant";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/participant" element={<Participant />} />
    </Routes>
  );
}

export default App;
