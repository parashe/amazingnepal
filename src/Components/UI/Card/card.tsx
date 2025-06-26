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

  // Contact Me on WhatsApp (direct to your number)
  const contactMeOnWhatsApp = () => {
    const url = `${window.location.origin}/destination/${destination_id}`;
    const message = `Hi, I'm interested in ${title}! Can you help me book this?\n${url}`;
    const phoneNumber = "+44-7411079563<"; // e.g., "+1234567890"
    window.open(
      `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <Link to={`/destination/${destination_id}`} onClick={handleClick}>
      <div className="w-full py-5 md:max-w-sm bg-white rounded-lg shadow-lg cursor-pointer hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 relative">
        <div className="w-full relative">
          <div className="relative">
            <img
              className="aspect-[16/9] object-cover w-full h-full max-h-[300px] brightness-75 hover:transform hover:scale-105 hover:transition hover:duration-300"
              src={imageUrl && imageUrl[0]?.url}
              alt=""
              loading="lazy"
            />
            {/* Social sharing buttons */}
            <div className="absolute bottom-2 right-2 flex gap-2">
              {/* Share buttons (grouped) */}
              <div className="flex gap-2  dark:bg-gray-900/80 p-1 rounded-full">
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    contactMeOnWhatsApp();
                  }}
                  className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-500 text-white px-4 py-4 rounded-full shadow-lg hover:scale-105 hover:shadow-emerald-500 transition-all duration-300 ease-in-out"
                  aria-label="Contact via WhatsApp"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>
                  {/* <span className="text-sm font-semibold">WhatsApp Us</span> */}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Card content (unchanged) */}
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
