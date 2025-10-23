import React from "react";
import Slider from "react-slick";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const PrevArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -left-4 transform -translate-y-1/2 z-10 p-3 rounded-full border bg-white shadow-lg hover:bg-gray-100 transition"
    onClick={onClick}
  >
    <IoIosArrowBack className="text-xl text-gray-700" />
  </button>
);

const NextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 -right-4 transform -translate-y-1/2 z-10 p-3 rounded-full border bg-white shadow-lg hover:bg-gray-100 transition"
    onClick={onClick}
  >
    <IoIosArrowForward className="text-xl text-gray-700" />
  </button>
);

const destinations = [
  { name: "New York", image: "/images/destinations/newyork.jpg", link: "#" },
  { name: "Los Angeles", image: "/images/destinations/losangeles.jpg", link: "#" },
  { name: "Chicago", image: "/images/destinations/chicago.jpg", link: "#" },
  { name: "Washington", image: "/images/destinations/washington.jpg", link: "#" },
  { name: "Miami", image: "/images/destinations/miami.jpg", link: "#" },
  { name: "Boston", image: "/images/destinations/boston.jpg", link: "#" },
];

const PopularCities = () => {
  const settings = {
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="my-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          Top destinations in United States
        </h2>

        <div className="relative mx-4">
          <Slider {...settings}>
            {destinations.map((city, index) => (
              <div key={index} className="px-2">
                <a href={city.link} className="block group">
                  <div className="h-64 rounded-xl overflow-hidden shadow-lg relative">
                    <img
                      src={city.image}
                      alt={city.name}
                      className="w-full h-full object-cover transition duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end p-4">
                      <h3 className="text-white text-2xl font-bold">{city.name}</h3>
                    </div>
                    <div className="absolute bottom-0 left-0 w-full h-1 bg-red-600"></div>
                  </div>
                </a>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default PopularCities;
