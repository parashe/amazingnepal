import React from "react";
import CarouselLayout from "../../UI/Carousel/carousel";
import data from "./data";
export const Carousel = () => {
  return (
    <div className="mt-10">
  <CarouselLayout slides={data.slides} />
  </div>
  )
};

