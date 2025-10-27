// src/Pages/Participant/index.jsx
import React from "react";
import Hero from "./Hero";
import Icons from "./icons";
import EventList from "./EventList";
import CityCarousel from "./CityCarousel";


const Index = () => {
  return (
    <div>
     
      <Hero /> 
      <Icons/>
      <EventList/>
      <CityCarousel/>
    </div>
  );
};

export default Index;
