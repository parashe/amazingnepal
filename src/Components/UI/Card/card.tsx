import React from "react";
import { Button } from "../../atoms";
import { CashIcon, ClockIcon } from "../../svg";

interface ServiceCardProps {
  title: string;
  imageUrl: string;
  content: string;
  readMoreLink: string;
  onclick: () => void;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  imageUrl,
  content,
  readMoreLink,
  onclick,
}) => {
  return (
    <div className="w-full  relative md:max-w-md z-100 border border-gray-100  bg-white  rounded-lg shadow-lg cursor-pointer  shadow-ui-third-theme hover:shadow-sm hover:shadow-ui-light-pink dark:bg-gray-800 ">
      <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 text-white font-bold py-1 px-5 rounded-tr-lg rounded-bl-full transform hover:scale-105 transition-transform">
        <span className="text-xs">Features</span>
      </div>

      <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
        <img
          className="aspect-[16/9] object-contain   w-full rounded-lg max-h-[150px] p-2"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
          {title}
        </h5>

        <p className="mb-3 text-xs text-justify p-3 text-gray-900 dark:text-gray-400">
          {content}
        </p>
        <div className="text-center  ">
          <Button
            onClick={onclick}
            className="px-4 py-2 rounded-sm text-xs bg-gradient-to-r from-pink-400 via-red-500 to-purple-500  font-medium hover:from-pink-600 hover:to-purple-600 transition duration-50 text-white cursor-pointer"
          >
            See more
          
          </Button>
        </div>
      </div>
    </div>
  );
};

type image = {
  url: string;
  id: number;
};

interface DestinationCardProps {
  id: number;
  price: string;
  duration: string;
  included: string;
  title: string;
  imageUrl: image[];
  content?: string;
  readMoreLink?: string;
  onclick: () => void;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  imageUrl,
  content,
  readMoreLink,
  price,
  onclick,
  duration,
}) => {
  return (
    <div className="w-full gap-x-5 md:max-w-sm  bg-white border rounded-lg border-gray-200 shadow-lg cursor-pointer shadow-ui-third-theme hover:shadow-sm hover:shadow-ui-light-pink dark:bg-gray-800 relative">
      <div className="w-full relative">
        <div className="relative ">
          <img
            className="aspect-[16/9] object-cover w-full rounded-lg h-[220px] brightness-75 "
            src={imageUrl[0]?.url}
            alt=""
          />
        </div>
        <div className="text-center absolute top-0 left-0  ml-0 rounded-l-full  rounded-lg">
          <p className="bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 text-white px-4 py-2 text-xs font-semibold">
            {price}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h5 className="mb-0 text-lg font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
          {title}
        </h5>
        <div className="text-center flex flex-wrap justify-center p-3">
          <div className="flex flex-wrap justify-center ">
            <CashIcon color="#f9a8d4" className="w-4 h-4" />
            <p className="mb-1  text-[10px]  px-3 text-gray-900 dark:text-gray-400">
              <span className="text-ui-purple font-bold">{price} </span>/ Per
              Person
            </p>
          </div>
          <div className="flex flex-wrap justify-center ">
            <ClockIcon color="#f9a8d4" className="w-3 h-3" />
            <p className="mb-1  text-xs px-3 text-gray-900 dark:text-gray-400">
              <span className="text-ui-purple font-bold">{duration}</span>
            </p>
          </div>
        </div>

        <div className="pt-5">
          <Button
            onClick={onclick}
            className="px-4 py-2 text-center  text-xs font-medium  bg-pink-50 text-ui-purple hover:bg-ui-third-theme-light cursor-pointer rounded-sm "
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
