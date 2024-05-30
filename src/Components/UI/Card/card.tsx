import React from "react";
import { CashIcon, ClockIcon } from "../../svg";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<ServiceCardProps> = ({ children }) => {
  return (
    <div className="w-full relative  md:max-w-md  border border-gray-100  bg-gray-100  rounded-lg shadow-lg cursor-pointer  shadow-ui-third-theme hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 ">
      {children}
    </div>
  );
};

type image = {
  url: string;
  id: number;
};

interface DestinationCardProps {
  destination_id: string | number;
  price?: string; // Making price optional
  duration: string;
  included: string;
  title: string;
  imageUrl: image[];
  content?: string;
  readMoreLink?: string;
  onclick?: () => void;
  attraction?: string[];
  description?: string;
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  imageUrl,
  price,
  duration,
  destination_id,
  description,
}) => {
  const handleClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <Link to={`/destination/${destination_id}`} onClick={handleClick}>
      <div className="w-full  py-5  md:max-w-sm  bg-white  rounded-lg  shadow-lg cursor-pointer  hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 relative">
        <div className="w-full relative">
          <div className="relative ">
            <img
              className="aspect-[16/9] object-cover w-full  h-full  max-h-[300px] brightness-75 hover:transform hover:scale-105 hover:transition hover:duration-300"
              src={imageUrl && imageUrl[0]?.url}
              alt=""
              loading="lazy"
            />
          </div>

          {/* <div className="absolute top-0 left-0 ml-0 bg-ui-primary rounded-lg shadow-lg">
  <p className="text-white px-5 py-2 text-xs font-semibold">Nepal</p>
</div> */}
        </div>

        <div className="p-5">
          <h5 className="mb-4 text-lg font-bold text-gray-900 dark:text-white">
            {title}
          </h5>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            {description?.split(" ").slice(0, 15).join(" ")}.
          </p>
          <div className="flex justify-center gap-2 px-2 items-center text-gray-700 dark:text-gray-300">
            <div className="flex items-center">
              <CashIcon className="w-5 h-5 mr-1" color="#d1d5db" />
              <span className="text-ui-primary text-sm font-bold">{price}</span>
              <span className="text-xs ml-1">/ Per Person</span>
            </div>
            <div className="flex items-center">
              <ClockIcon className="w-4 h-4 mr-1" color="#d1d5db" />
              <span className="text-ui-primary font-bold">{duration}</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

interface RecommendedCardProps {
  place: string;
  imageUrl: string;
  description: string;
  id: number;
  onclick?: () => void;
}

export const RecommendedCard: React.FC<RecommendedCardProps> = ({
  place,
  imageUrl,
  description,
  id,
}) => {
  return (
    <Link to={`/recommended/${id}`}>
      <div className="relative w-full md:max-w-sm  bg-white border border-gray-200 rounded-xs shadow-sm cursor-pointer overflow-hidden recommended-content">
        <div className="relative">
          <img
            className="w-full h-full md:h-[400px] object-cover"
            src={imageUrl}
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-5">
          <h5 className="mb-2 text-lg font-bold text-white uppercase tracking-tight leading-snug">
            {place}
          </h5>

          <div className="recommended-details px-3 py-3 transition-opacity duration-300 opacity-0 h-full absolute inset-0 top-1/3 bg-black bg-opacity-50">
            <p className="mb-4 md:px-4 md:py-1 text-white text-sm  dark:text-gray-400">
              {description}
            </p>
            <button className="px-5 py-3 text-center uppercase text-xs font-bold bg-ui-primary text-white hover:bg-ui-secondary transition duration-300 cursor-pointer rounded-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
