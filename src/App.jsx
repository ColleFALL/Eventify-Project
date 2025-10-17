import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import Organiser from './Pages/Organizer/Organiser.jsx'
import Section from './Pages/Organizer/section1.jsx'

function App() {
  return (
    <div className="min-h-screen bg-gray-100 w-full">
      {/* <header className=" bg-gray-600 text-white py-6 text-center">
        <h1 className="text-4xl font-bold underline">
          Bonjour l'équipe
        </h1>
      </header>

      <main className="p-8">
        <p>Bienvenue sur notre projet React 🎯</p>
      </main> */}
      <Organiser/>
      <section/>
    </div>
  );
 
}

export default App