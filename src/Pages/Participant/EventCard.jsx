import React from "react";
import "./EventCard.css";

const EventCard = ({ image, title, date, location, price, link, badge }) => {
  return (
    <a href={link} className="event-card">
      <div className="event-card__image">
        <img src={image} alt={title} />
      </div>

      <div className="event-card__content">
        {badge && <span className="event-card__badge">{badge}</span>}

        <h3 className="event-card__title">{title}</h3>

        <p className="event-card__date">{date}</p>
        {location && <p className="event-card__location">{location}</p>}
        {price && <p className="event-card__price">{price}</p>}
      </div>
    </a>
  );
};

export default EventCard;
