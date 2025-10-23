import React from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import MyEvents from "../../components/MyEvents";

const Participant = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <MyEvents />
      </main>
      <Footer />
    </div>
  );
};

export default Participant;
