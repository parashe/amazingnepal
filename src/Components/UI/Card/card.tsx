import React from "react";
import { Button } from "../../atoms";

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
    <div className="w-full md:max-w-md   bg-white border-2 border-gray-100  rounded-lg shadow-lg cursor-pointer  shadow-ui-third-theme hover:shadow-sm hover:shadow-ui-light-pink dark:bg-gray-800 ">
      <a href={readMoreLink} target="_blank" rel="noopener noreferrer">
        <img
          className="aspect-[16/9] object-contain   w-full rounded-lg h-[220px]"
          src={imageUrl}
          alt=""
        />
      </a>
      <div className="p-5">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
          {title}
        </h5>

        <p className="mb-3 font-normal text-justify p-3 text-gray-900 dark:text-gray-400">
          {content}
        </p>
        <div className="text-center  ">
          <Button
            onClick={onclick}
            className="px-5 py-3 bg-ui-purple hover:bg-ui-purple-dark text-white cursor-pointer"
          >
            See more
            <svg
              className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
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
    <div className="w-full md:max-w-md bg-white border-2 rounded-lg border-gray-100 shadow-lg cursor-pointer shadow-ui-third-theme hover:shadow-sm hover:shadow-ui-light-pink dark:bg-gray-800 relative">
      <div className="w-full relative">
        <div className="relative z-50">
          <img
            className="aspect-[16/9] object-cover w-full rounded-lg h-[220px] brightness-75 "
            src={imageUrl[0]?.url}
            alt=""
          />
        </div>
        <div className="text-center absolute top-0 left-0 mt-2 ml-0 rounded-l-full z-50 rounded-lg">
          <p className="bg-ui-purple text-white px-4 py-2 text-sm font-semibold">
            {price}
          </p>
        </div>
      </div>

      <div className="p-5">
        <h5 className="mb-0 text-2xl font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
          {title}
        </h5>
        <div className="text-center flex flex-wrap">
          <p className="mb-1  text-sm font-sm  px-3 text-gray-900 dark:text-gray-400">
            Price <span className="text-ui-purple font-bold">{price} </span>/
            Per Person
          </p>

          <p className="mb-1  text-sm px-3 text-gray-900 dark:text-gray-400">
            Duration:{" "}
            <span className="text-ui-purple font-bold">{duration}</span>
          </p>
        </div>

        <div className="pt-5">
          <Button
            onClick={onclick}
            className="px-5 text-center  text-md font-bold py-3 bg-ui-third-theme text-ui-purple hover:bg-ui-third-theme-light cursor-pointer rounded-sm "
          >
            View Details
          </Button>
        </div>
      </div>
    </div>
  );
};
