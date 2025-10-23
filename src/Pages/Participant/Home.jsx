import React, { useState, useEffect } from "react";
import Navbar from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import EventCard from "../../Components/EventCard";
import MainCarousel from "../../Components/MainCarousel";
import PopularCities from "../../Components/PopularCities";
import { IoIosArrowForward } from "react-icons/io";

const initialEventsData = [
  { id: 1, title: "SALTIS 2025: Tech Conference", date: "Tue, Nov 25 • 6:00 AM", location: "Dakar, Senegal", category: "Technology", price: "Free", image: "https://picsum.photos/400/250?random=1", badge: null, progress: 70 },
  { id: 2, title: "Business Mission to Senegal", date: "Wed, Dec 3 • 9:00 AM", location: "Dakar, Senegal", category: "Business", price: "From $0.00", image: "https://picsum.photos/400/250?random=2", badge: null, progress: 0 },
  { id: 3, title: "AFRICA LEGAL FORUM", date: "Nov 22 • 9:00 AM", location: "Noom Hotel Dakar Seas Plaza", category: "Legal", price: "Free", image: "https://picsum.photos/400/250?random=3", badge: "Just added", progress: 0 },
  { id: 4, title: "Movement Class with the Liberated Pelvis", date: "Saturday • 11:45 AM", location: "Loman Art House", category: "Health", price: "Free", image: "https://picsum.photos/400/250?random=4", badge: "Sales soon", progress: 0 },
  { id: 5, title: "Dakar Music Festival 2025", date: "Sat, Mar 10 • 8:00 PM", location: "Place du Souvenir", category: "Music", price: "From $25.00", image: "https://picsum.photos/400/250?random=5", badge: null, progress: 50 },
];

const categories = ["All", "Technology", "Business", "Legal", "Health", "Music"];

const Home = () => {
  const [events, setEvents] = useState(initialEventsData);
  const [filter, setFilter] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    let filtered = initialEventsData;

    // Filtre par catégorie
    if (filter !== "All") {
      filtered = filtered.filter((event) => event.category === filter);
    }

    // Recherche par titre
    if (searchTerm) {
      filtered = filtered.filter((event) =>
        event.title.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setEvents(filtered);
  }, [filter, searchTerm]);

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar onSearchChange={setSearchTerm} />

      <MainCarousel />

      <main className="container mx-auto px-4 py-8">

        {/* Section filtres */}
        <section className="mb-8">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Filter by category</h2>
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`px-4 py-2 rounded-full border transition ${
                  filter === cat
                    ? "bg-purple-600 text-white border-purple-600"
                    : "bg-white text-gray-700 border-gray-300 hover:bg-purple-100"
                }`}
                onClick={() => setFilter(cat)}
              >
                {cat}
              </button>
            ))}
          </div>
        </section>

        {/* Section événements */}
        <section className="mb-12">
          <div className="flex items-center space-x-6 mb-8 border-b pb-4">
            <h2 className="text-2xl font-bold text-gray-800">Events in Dakar</h2>
          </div>

          {events.length === 0 ? (
            <p className="text-gray-500">No events found.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {events.map((event) => (
                <EventCard key={event.id} event={event} />
              ))}
            </div>
          )}
        </section>

        <PopularCities />

        {/* Section villes populaires */}
        <section className="my-12 px-4">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Popular cities</h2>
          <div className="flex flex-wrap gap-4">
            {["Things to do in Austin", "Things to do in Abilene", "Things to do in Denver"].map(
              (city) => (
                <a
                  key={city}
                  href="#"
                  className="flex items-center px-4 py-2 border rounded-full text-gray-700 hover:border-purple-600 hover:text-purple-600 transition"
                >
                  {city}
                  <IoIosArrowForward className="ml-2 text-sm" />
                </a>
              )
            )}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
};

export default Home;
