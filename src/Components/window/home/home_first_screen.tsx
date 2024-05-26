import React from "react";
import { MapPinIcon, SearchIcon } from "../../svg";

import { DestinationHomeContent } from "../Destination/destination_home";

export const HomeFirstScreen = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="relative w-full">
          <HomeTopContent
            imageUrl="/assets/home.webp"
            description="Amazing Nepal"
          />
        </div>
        <div className="mb-10">
          <DestinationHomeContent />
        </div>
      </div>
    </>
  );
};

export const HomeTopContent = ({
    imageUrl,
  }: {
    imageUrl: string | undefined;
    description: string | undefined;
  }) => {
    return (
      <div className="relative w-full">
        {/* Placeholder Image */}
        <div
          className="w-full h-60 md:h-[500px] bg-gray-300 animate-pulse"
          aria-hidden="true"
        ></div>
        {/* Actual Image */}
        <img
          className="absolute top-0 left-0 w-full h-full object-cover brightness-50 transition duration-500 ease-in-out transform hover:scale-105"
          src={imageUrl}
          alt="Amazing Nepal"
          loading="lazy"
        />
        {/* Content */}
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h1 className="text-xl md:text-5xl font-black mb-4">
            Explore the Beauty of Nepal
          </h1>
          <p className="text-xs md:text-xl">
            Discover breathtaking landscapes, vibrant cultures, and unforgettable
            adventures
          </p>
        </div>
      </div>
    );
  };
  
