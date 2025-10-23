// src/Pages/Participant/MyEvents.jsx
import React from "react";
import EventCard from "./EventCard";
import { IoAlertCircleOutline } from "react-icons/io5";
import { Link } from "react-router-dom";
const myRegisteredEvents = [
  {
    id: 1,
    title: "SALTIS 2025: Tech Conference",
    date: "Tue, Nov 25",
    location: "Dakar, Senegal",
    price: "Free",
    image:
       "https://images.weserv.nl/?url=cdn.evbstatic.com/s3-build/fe/build/images/8e0b75a85f431f77f7e94b5e376a93cf-fall_desktop.webp",
    badge: "Inscrit",
    link: "https://www.eventbrite.com/d/ny--new-york/events/",
    progress: 0,
  },
  {
    id: 5,
    title: "Dakar Music Festival 2025",
    date: "Sat, Mar 10",
    location: "Place du Souvenir",
    price: "From $25.00",
    image: "https://eventbrite-build.s3.amazonaws.com/fe/dist/discover-lib/11.25.13/browser/static/images/home/seasonal/halloween_desktop.webp",

    badge: "Payé",
    link: "/event/5",
    progress: 0,
  },
];

const MyEvents = () => {
  const hasEvents = myRegisteredEvents.length > 0;

  return (
    <div className="container mx-auto p-4 md:p-10 min-h-[70vh]">
      <h1 className="text-4xl font-bold mb-8 text-purple-700 border-b-2 border-purple-200 pb-3">
        Mes Événements à Venir (US008)
      </h1>

      {hasEvents ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {myRegisteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      ) : (
        <div className="text-center bg-white rounded-2xl shadow-md p-12 mt-16">
          <IoAlertCircleOutline className="text-6xl text-yellow-500 mx-auto mb-4" />
          <p className="text-lg text-gray-600 mb-3">
            Vous n'êtes inscrit à aucun événement pour l'instant.
          </p>
          <a
            href="/"
            className="inline-block text-purple-600 hover:text-purple-800 font-medium hover:underline"
          >
            Parcourir les événements publics
          </a>
        </div>
      )}
    </div>
  );
};

export default MyEvents;
