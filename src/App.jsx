import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./Pages/Auth/Register";
import Login from "./Pages/Auth/Login";
import ForgotPassword from "./Pages/Auth/ForgotPassword";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" />} /> {/* Redirection par défaut */}
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route path="*" element={<Navigate to="/login" />} /> {/* Pour toutes les routes inconnues */}
    </Routes>
  );
}

export default App;
