import React from "react";
import CarouselLayout from "../../UI/Carousel/carousel";
import data from "./data";
export const Carousel = () => {
  return (
    <div className="mx-auto ">
  <CarouselLayout slides={data.slides} />
  </div>
  )
};

