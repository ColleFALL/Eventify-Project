import React, { useRef } from "react";
import Slider from "react-slick";
import "./CityCarousel.css";

// 🖼️ Importation des images
import charlotte from "../../assets/Images/Participants-Images/charlotte.webp";
import chicago from "../../assets/Images/Participants-Images/chicago.webp";
import dallas from "../../assets/Images/Participants-Images/dallas.webp";
import diego from "../../assets/Images/Participants-Images/diego.webp";
import houston from "../../assets/Images/Participants-Images/houston.webp";



const CityCarousel = () => {
  const sliderRef = useRef(null);

  const items = [
    {
      title: "New York",
      image: charlotte,
      subtitle: "The city that never sleeps",
    },
    {
      title: "Los Angeles",
      image: chicago,
      subtitle: "City of Angels",
    },
    {
      title: "Chicago",
      image: dallas,
      subtitle: "The Windy City",
    },
    {
      title: "Washington",
      image: diego,
      subtitle: "The Capital",
    },
    {
      title: "Washington",
      image: houston,
      subtitle: "The Capital",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 900, settings: { slidesToShow: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="city-carousel">
      <div className="city-carousel__header">
        <h2 className="city-carousel__title">Top destinations in United States</h2>

        {/* Flèches */}
        <div className="city-carousel__controls">
          <button className="round-btn" onClick={() => sliderRef.current.slickPrev()}>
            ‹
          </button>
          <button className="round-btn" onClick={() => sliderRef.current.slickNext()}>
            ›
          </button>
        </div>
      </div>

      <div className="city-carousel__sliderWrap">
        <Slider ref={sliderRef} {...settings}>
          {items.map((it, i) => (
            <div key={i} className="card-wrap">
              <a className="city-card" href="#">
                <div className="city-card__image">
                  <img src={it.image} alt={it.title} />
                </div>
                <div className="city-card__overlay">
                  <h3 className="city-card__title">{it.title}</h3>
                  <p className="city-card__subtitle">{it.subtitle}</p>
                </div>
              </a>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default CityCarousel;
