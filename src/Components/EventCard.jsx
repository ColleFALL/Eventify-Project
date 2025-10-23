import React from "react";
import { Link } from "react-router-dom";
import { IoLocationSharp, IoCalendarClearOutline } from "react-icons/io5";

const EventCard = ({ event }) => {
  return (
    <Link
      to={event.link || `/event/${event.id}`}
      className="block transform hover:scale-[1.02] transition-all duration-300 group"
    >
      <div className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all">
        {/* --- Image de l'événement --- */}
        <div className="relative h-48">
          <img
            src={event.image}
            alt={event.title}
            loading="lazy"
            className="w-full h-full object-cover transition duration-300 group-hover:opacity-90"
          />
          {event.badge && (
            <span
              className={`absolute top-3 left-3 px-3 py-1 text-xs font-semibold rounded-full ${
                event.badge === "Inscrit" || event.badge === "Just added"
                  ? "bg-green-100 text-green-800"
                  : "bg-purple-100 text-purple-800"
              }`}
            >
              {event.badge}
            </span>
          )}
        </div>

        {/* --- Contenu texte --- */}
        <div className="p-5">
          <h3 className="text-lg font-bold text-gray-800 mb-2 truncate group-hover:text-purple-600 transition-colors">
            {event.title}
          </h3>

          <p className="flex items-center text-sm text-red-600 font-semibold mb-1">
            <IoCalendarClearOutline className="mr-2" />
            {event.date}
          </p>

          <p className="flex items-center text-sm text-gray-500 mb-3">
            <IoLocationSharp className="mr-2 text-gray-500" />
            {event.location}
          </p>

          <p className="text-base font-bold text-gray-800">{event.price}</p>

          {event.progress > 0 && (
            <div className="w-full bg-gray-200 rounded-full h-1.5 mt-3">
              <div
                className="bg-red-600 h-1.5 rounded-full transition-all duration-300"
                style={{ width: `${event.progress}%` }}
              ></div>
            </div>
          )}
        </div>
      </div>
    </Link>
  );
};

export default EventCard;
