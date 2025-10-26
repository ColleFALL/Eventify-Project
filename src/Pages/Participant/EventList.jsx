import React, { useState } from "react";
import EventCard from "./EventCard";
import "./EventCard.css";
import "./EventList.css";
import part1 from "../../assets/Images/Participants-Images/part1.jpeg";
import part2 from "../../assets/Images/Participants-Images/part2.jpeg";
import part3 from "../../assets/Images/Participants-Images/part3.jpeg";
import part4 from "../../assets/Images/Participants-Images/part4.jpeg";
// import Hero2 from "../../assets/Images/Participants-Images/Hero2.webp";

const EventList = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", "Today", "Tomorrow", "This weekend", "Free", "Online"];

  const events = [
    {
      image:
        part1,
      title: "SALTIS 2025",
      date: "Tue, Nov 25 • 8:00 AM",
      location: "Dakar, Senegal",
      price: "Free",
      link: "#",
    },
    {
      image:part2,
        
      title: "Business Mission to Senegal 2025",
      date: "Wed, Dec 3 • 9:00 AM",
      location: "King Fahd Palace Hôtel",
      price: "From $0.00",
      link: "#",
    },
    {
      image:
        part3,
      title: "AFRICA LEGAL FORUM",
      date: "Sat, Nov 22 • 9:00 AM",
      location: "Noom Hotel Dakar Sea Plaza",
      price: "Free",
      badge: "Just added",
      link: "#",
    },
    {
      image:
        part4,
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
