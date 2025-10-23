import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Organiser from './Pages/Organizer/Organiser.jsx'
import Navbar from './Pages/Organizer/NavbarORG.jsx'
import Section from './Pages/Organizer/section1.jsx'
import Section2 from './Pages/Organizer/section2.jsx'
import Section3 from './Pages/Organizer/section3.jsx'
import Section4 from './Pages/Organizer/section4.jsx'
import Footer from './Pages/Organizer/Footer.jsx'
import EventbriteDashboard from './Pages/Organizer/CreateEvent.jsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom';



function App() {
  return (
        <BrowserRouter>
            <div className="min-h-screen bg-gray-100 w-full">
          <Routes>
            <Route path="/" element={<Organiser/>} />
            <Route path="/section1" element={<Section />} />
            <Route path="/section2" element={<Section2 />} />
            <Route path="/section3" element={<Section3 />} />
            <Route path="/section4" element={<Section4 />} />
            <Route path="/footer" element={<Footer />} />
            <Route path="/create-event" element={<EventbriteDashboard />} />
          </Routes>
          </div>
        </BrowserRouter>
      
    



     
   
     
    
  );
 
}

export default App