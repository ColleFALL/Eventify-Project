import React, { useState } from "react";
import EventCard from "./EventCard";
import "./EventCard.css";
import "./EventList.css";

const EventList = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Today", "Tomorrow", "This weekend", "Free", "Online"];

  const events = [
    {
      image:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=800&q=80",
      title: "SALTIS 2025",
      date: "Tue, Nov 25 • 8:00 AM",
      location: "Dakar, Senegal",
      price: "Free",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1536180931879-fd2d652efddc?auto=format&fit=crop&w=800&q=80",
      title: "Business Mission to Senegal 2025",
      date: "Wed, Dec 3 • 9:00 AM",
      location: "King Fahd Palace Hôtel",
      price: "From $0.00",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=800&q=80",
      title: "AFRICA LEGAL FORUM",
      date: "Sat, Nov 22 • 9:00 AM",
      location: "Noom Hotel Dakar Sea Plaza",
      price: "Free",
      badge: "Just added",
      link: "#",
    },
    {
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=800&q=80",
      title: "CLUBLABO MEET UP Dakar 1",
      date: "Sat, Nov 1 • 9:00 AM",
      location: "Place du Souvenir Africain",
      price: "Free",
      badge: "Just added",
      link: "#",
    },
    
  ];

  // 💡 Si tu veux filtrer réellement, tu peux filtrer ici selon "activeFilter"
  const filteredEvents = events; // pour l’instant, on affiche tout

  return (
    <div className="event-section">
      <h2 className="event-section__title">Events in</h2>

      {/* ✅ Barre de filtres */}
      <div className="filter-bar">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`filter-btn ${
              activeFilter === filter ? "active" : ""
            }`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      {/* ✅ Liste d’événements */}
      <div className="event-section__scroll">
        {filteredEvents.map((event, i) => (
          <EventCard key={i} {...event} />
        ))}
      </div>
    </div>
  );
};

export default EventList;
