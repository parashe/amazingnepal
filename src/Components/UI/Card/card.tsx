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

  const shareOnWhatsApp = () => {
    const url = `${window.location.origin}/destination/${destination_id}`;
    const message = `Check out this destination: ${title}\n${description?.split(" ").slice(0, 15).join(" ")}\n${url}`;
    window.open(`https://wa.me/?text=${encodeURIComponent(message)}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = `${window.location.origin}/destination/${destination_id}`;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnMessenger = () => {
    const url = `${window.location.origin}/destination/${destination_id}`;
    window.open(`fb-messenger://share/?link=${encodeURIComponent(url)}`, '_blank');
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
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  shareOnWhatsApp();
                }}
                className="bg-green-500 text-white p-2 rounded-full hover:bg-green-600 transition"
                aria-label="Share on WhatsApp"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z"/>
                </svg>
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  shareOnFacebook();
                }}
                className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition"
                aria-label="Share on Facebook"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                </svg>
              </button>
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  shareOnMessenger();
                }}
                className="bg-blue-500 text-white p-2 rounded-full hover:bg-blue-600 transition"
                aria-label="Share on Messenger"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M0 7.76C0 3.301 3.493 0 8 0s8 3.301 8 7.76-3.493 7.76-8 7.76c-.81 0-1.586-.107-2.316-.307a.639.639 0 0 0-.427.03l-1.588.702a.64.64 0 0 1-.898-.566l-.044-1.423a.639.639 0 0 0-.215-.456C.956 12.108 0 10.092 0 7.76zm5.546-1.459-2.35 3.728c-.225.358.214.761.551.506l2.525-1.916a.48.48 0 0 1 .578-.002l1.869 1.402a1.2 1.2 0 0 0 1.735-.32l2.35-3.728c.226-.358-.214-.761-.551-.506L9.728 7.381a.48.48 0 0 1-.578.002L7.281 5.98a1.2 1.2 0 0 0-1.735.32z"/>
                </svg>
              </button>
            </div>
          </div>
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
