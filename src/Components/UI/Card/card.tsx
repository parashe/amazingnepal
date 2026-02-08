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

  const shortDescription = description
    ? description.split(" ").slice(0, 12).join(" ") + (description.split(" ").length > 12 ? "…" : "")
    : "";

  return (
    <Link
      to={`/destination/${destination_id}`}
      onClick={handleClick}
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ui-primary focus-visible:ring-offset-2 rounded-xl"
    >
      <article className="h-full flex flex-col bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-lg hover:border-ui-primary/30 dark:hover:border-ui-primary/40 transition-all duration-300 overflow-hidden">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-700 flex-shrink-0">
          <img
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-400"
            src={imageUrl?.[0]?.url}
            alt={title}
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
          <div className="absolute top-2 right-2 rounded-md bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm px-2 py-0.5 text-[10px] font-semibold text-gray-800 dark:text-gray-200 flex items-center gap-1">
            <ClockIcon className="w-3 h-3" color="currentColor" />
            {duration}
          </div>
        </div>

        {/* Content */}
        <div className="flex flex-col flex-1 p-3 min-w-0">
          <h3 className="text-base font-bold text-gray-900 dark:text-white leading-tight line-clamp-2 mb-1.5">
            {title}
          </h3>
          {shortDescription && (
            <p className="text-gray-600 dark:text-gray-400 text-xs leading-relaxed line-clamp-2 mb-3 flex-1">
              {shortDescription}
            </p>
          )}
          <div className="flex items-center justify-between pt-3 mt-auto border-t border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-1 text-ui-primary font-semibold text-sm">
              <CashIcon className="w-3.5 h-3.5 shrink-0" color="currentColor" />
              <span>{price}</span>
              <span className="text-[10px] font-normal text-gray-500 dark:text-gray-400">/ person</span>
            </div>
            <span className="inline-flex items-center gap-0.5 text-xs font-medium text-ui-primary group-hover:gap-1 transition-all">
              View
              <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </span>
          </div>
        </div>
      </article>
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
    <Link
      to={`/recommended/${id}`}
      className="block group focus:outline-none focus-visible:ring-2 focus-visible:ring-ui-primary focus-visible:ring-offset-2 rounded-2xl"
    >
      <article className="relative w-full bg-white dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700 rounded-2xl shadow-lg hover:shadow-2xl hover:border-ui-primary/30 dark:hover:border-ui-primary/40 transition-all duration-300 overflow-hidden recommended-content">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
            src={imageUrl}
            alt={`${place} – Nepal attraction, Amazing Nepal`}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />
          <div className="absolute top-4 left-4">
            <span className="inline-block rounded-lg bg-white/20 dark:bg-black/30 backdrop-blur-sm px-3 py-1 text-xs font-semibold text-white uppercase tracking-wider">
              Attraction
            </span>
          </div>
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-5 md:p-6">
          <h3 className="text-xl font-bold text-white tracking-tight leading-snug drop-shadow-lg">
            {place}
          </h3>
          <div className="recommended-details mt-3 px-0 py-0 transition-all duration-300 opacity-0 group-hover:opacity-100 absolute inset-0 flex flex-col justify-end p-5 md:p-6 bg-gradient-to-t from-black/95 via-black/40 to-transparent">
            <p className="text-white text-sm leading-relaxed line-clamp-4 mb-5 drop-shadow-md">
              {description}
            </p>
            <span className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-ui-primary hover:bg-ui-secondary text-white text-sm font-semibold w-fit transition-all shadow-lg shadow-ui-primary/30 group-hover:shadow-ui-primary/40">
              View details
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
          </div>
        </div>
      </article>
    </Link>
  );
};
