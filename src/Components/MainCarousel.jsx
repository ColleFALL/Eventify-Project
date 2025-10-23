import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 right-4 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-xl" />
  </button>
);

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 left-4 transform -translate-y-1/2 z-10 p-3 rounded-full bg-white bg-opacity-80 hover:bg-opacity-100 shadow-md"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-xl" />
  </button>
);

const MainCarousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <div className="relative w-full overflow-hidden mb-12">
      <Slider {...settings}>
        <div className="h-80 relative">
          <img
            src="/images/banners/event-promo1.jpg"
            alt="Promo 1"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <div className="text-center">
              <h1 className="text-5xl font-extrabold text-orange-400 leading-tight">
                THIS HALLOWEEN
              </h1>
              <h1 className="text-6xl font-extrabold text-yellow-300 mt-2 leading-tight">
                MAKE IT HAUNTED
              </h1>
              <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-lg shadow-xl hover:bg-gray-100 transition">
                Get Tickets Now
              </button>
            </div>
          </div>
        </div>

        <div className="h-80 relative">
          <img
            src="/images/banners/event-promo2.jpg"
            alt="Promo 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h1 className="text-white text-4xl font-bold">Another Big Event</h1>
          </div>
        </div>
      </Slider>
    </div>
  );
};

export default MainCarousel;
