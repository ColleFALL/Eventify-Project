import React, { useRef, useState } from "react";
import Slider from "react-slick";
import "./CityCarousel.css";

/*
Usage:
import CityCarousel from "./Components/CityCarousel";
<CityCarousel items={myItemsArray} />

items = [{ title, image, subtitle, badge, link }, ...]
*/

const CityCarousel = ({ items = [] }) => {
  const sliderRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false, // on gère nos flèches custom
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
    afterChange: (index) => setCurrent(index),
  };

  const prev = () => sliderRef.current && sliderRef.current.slickPrev();
  const next = () => sliderRef.current && sliderRef.current.slickNext();

  const total = items.length;
  const progressPercent =
    total <= 1 ? 0 : Math.round((current / Math.max(1, total - 1)) * 100);

  return (
    <section className="city-carousel">
      <div className="city-carousel__header">
        <h2 className="city-carousel__title">Top destinations in United States</h2>

        {/* Flèches custom */}
        <div className="city-carousel__controls">
          <button className="round-btn" onClick={prev} aria-label="Previous">
            ‹
          </button>
          <button className="round-btn" onClick={next} aria-label="Next">
            ›
          </button>
        </div>
      </div>

      <div className="city-carousel__sliderWrap">
        <Slider ref={sliderRef} {...settings}>
          {items.map((it, i) => (
            <div key={i} className="card-wrap">
              <a className="city-card" href={it.link || "#"}>
                <div className="city-card__image">
                  <img src={it.image} alt={it.title} />
                </div>
                <div className="city-card__overlay">
                  {it.badge && <span className="city-card__badge">{it.badge}</span>}
                  <h3 className="city-card__title">{it.title}</h3>
                  {it.subtitle && <p className="city-card__subtitle">{it.subtitle}</p>}
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>

      {/* Barre de progression */}
      <div className="city-carousel__scrollbar">
        <input
          className="scroll-range"
          type="range"
          min="0"
          max="100"
          value={progressPercent}
          readOnly
        />
      </div>
    </section>
  );
};

export default CityCarousel;
