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
}

export const DestinationCard: React.FC<DestinationCardProps> = ({
  title,
  imageUrl,
  price,
  duration,
  destination_id,
}) => {
  return (
    <Link to={`/destination/${destination_id}`}>
      <div className="w-full  gap-x-5 md:max-w-sm  bg-white border rounded-lg border-gray-200 shadow-lg cursor-pointer shadow-ui-third-theme hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 relative">
        <div className="w-full relative">
          <div className="relative ">
            <img
              className="aspect-[16/9] object-cover w-full rounded-lg h-full max-h-[220px] brightness-75 "
              src={imageUrl && imageUrl[0]?.url}
              alt=""
            />
          </div>

          <div className="absolute top-0 left-0 ml-0 bg-pink-500  ">
            <p className="text-white px-5 py-2 text-xs font-semibold">Nepal</p>
          </div>
        </div>

        <div className="p-5">
          <h5 className="mb-0 text-auto font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
            {title}
          </h5>
          <div className="text-justify flex flex-wrap justify-center py-3">
            <div className="flex flex-wrap justify-center ">
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
      <div className="w-full  gap-x-5 md:max-w-sm  bg-white border border-gray-200  rounded-xs  shadow-sm cursor-pointer hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 relative">
        <div className="w-full relative">
          <div className="relative ">
            <img
              className="aspect-[16/9] object-cover w-full rounded-xs h-full min-h-[250px] max-h-[400px] brightness-75 "
              src={imageUrl}
              alt=""
            />
          </div>
        </div>

        <div className="p-5">
          <h5 className="mb-0 text-auto font-bold tracking-tight text-black leading-relaxed dark:text-white">
            {place}
          </h5>
          <div className="text-justify flex flex-wrap justify-center py-3">
            <p className="mb-1 text-sm  px-3 text-gray-900 dark:text-gray-400 ">
              {description}
            </p>
          </div>
          <button className="w-full  py-3 text-center uppercase  text-xs font-bold  bg-pink-500 text-white hover:bg-pink-600 transition duration-300 cursor-pointer rounded-sm ">
            View Details
          </button>
        </div>
      </div>
    </Link>
  );
};
