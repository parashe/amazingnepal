import React from "react";
import { CashIcon, ClockIcon } from "../../svg";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  children?: React.ReactNode;
}

export const Card: React.FC<ServiceCardProps> = ({ children }) => {
  return (
    <div className="w-full relative  md:max-w-md  border border-gray-100  bg-white  rounded-lg shadow-lg cursor-pointer  shadow-ui-third-theme hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 ">
      {children}
    </div>
  );
};

type image = {
  url: string;
  id: number;
};

interface DestinationCardProps {
  destination_id: string;
  price: string;
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
  return (
    <Link to={`/destination/${destination_id}`}>
      <div className="w-full   md:max-w-sm  bg-white  rounded-lg  shadow-lg cursor-pointer  hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 relative">
        <div className="w-full relative">
          <div className="relative ">
            <img
              className="aspect-[16/9] object-cover w-full  h-full  max-h-[300px] brightness-75 hover:transform hover:scale-105 hover:transition hover:duration-300"
              src={imageUrl && imageUrl[0]?.url}
              alt=""
              loading="lazy"
            />
          </div>

          {/* <div className="absolute top-0 left-0 ml-0 bg-pink-500 rounded-lg shadow-lg">
  <p className="text-white px-5 py-2 text-xs font-semibold">Nepal</p>
</div> */}
        </div>

        <div className="p-5">
          <h5 className="mb-0 text-auto font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
            {title}
          </h5>
          <div className="text-justify flex flex-wrap justify-center py-3">
            <div className="text-center p-1 pb-2 ">
              <p className="mb-1  text-xs px-3 text-gray-900 dark:text-gray-400">
                {description}
              </p>
            </div>
            <div className="flex flex-wrap justify-center  ">
              <CashIcon color="#f9a8d4" className="w-4 h-4" />

              <p className="mb-1  text-[10px]  px-3 text-gray-900 dark:text-gray-400">
                <span className="text-pink-500 font-bold">{price} </span>/ Per
                Person
              </p>
            </div>
            <div className="flex flex-wrap justify-center ">
              <ClockIcon color="#f9a8d4" className="w-2 h-2" />
              <p className="mb-1  text-xs px-3 text-gray-900 dark:text-gray-400">
                <span className="text-pink-500 font-bold">{duration}</span>
              </p>
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
      <div className="relative w-full md:max-w-sm bg-white border border-gray-200 rounded-xs shadow-sm cursor-pointer overflow-hidden recommended-content">
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
            <button className="px-5 py-3 text-center uppercase text-xs font-bold bg-pink-500 text-white hover:bg-pink-600 transition duration-300 cursor-pointer rounded-sm">
              View Details
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};
