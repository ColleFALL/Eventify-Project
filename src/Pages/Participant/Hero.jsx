import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Hero.css";
import Hero1 from "../../assets/Images/Participants-Images/Hero1.webp";
import Hero2 from "../../assets/Images/Participants-Images/Hero2.webp";


// Flèche "suivante"
function NextArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow next" onClick={onClick}>
      ➤
    </div>
  );
}

// Flèche "précédente"
function PrevArrow(props) {
  const { onClick } = props;
  return (
    <div className="arrow prev" onClick={onClick}>
      ➤
    </div>
  );
}

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />
  };

  const slides = [
    {
      id: 1,
      image: Hero1,
    },
    {
      id: 2,
      image: Hero2,
    },
    
  ];

  return (
    <div className="carousel-container">
      <Slider {...settings}>
        {slides.map((slide) => (
          <div key={slide.id} className="slide">
            <img src={slide.image} alt={slide.title} className="slide-image" />
            <div className="slide-overlay">
              <h2>{slide.title}</h2>
              <h1>{slide.subtitle}</h1>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Hero;
