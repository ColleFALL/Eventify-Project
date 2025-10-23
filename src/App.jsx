import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";

// 🔐 Pages Auth
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

// 🧑‍💼 Pages Organisateur
import Organiser from "./Pages/Organizer/Organiser.jsx";
// import Navbar1 from "../src/Pages/Organizer/NavbarORG.jsx";
import Navbar1  from "../src/Pages/Organizer/NavbarORG.jsx";
import Section1 from "../src/Pages/Organizer/section1.jsx";
import Section2 from "../src/Pages/Organizer/section2.jsx";
import Section3 from "../src/Pages/Organizer/section3.jsx";
import Section4 from "../src/Pages/Organizer/section4.jsx";
import Footer from "./Pages/Organizer/Footer.jsx";
import EventbriteDashboard from "./Pages/Organizer/CreateEvent.jsx";

function App() {
  return (
      <Routes>
        {/* --- Auth Routes --- */}
        <Route path="/" element={<Navigate to="/login" />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />

        {/* --- Organizer Routes --- */}
        <Route path="/organizer" element={<Organiser />} />
        <Route path="/section1" element={<Section1 />} />
        <Route path="/section2" element={<Section2 />} />
        <Route path="/section3" element={<Section3 />} />
        <Route path="/section4" element={<Section4 />} />
        <Route path="/footer" element={<Footer />} />
        <Route path="/create-event" element={<EventbriteDashboard />} />
      </Routes>
  );
}

export default App;
