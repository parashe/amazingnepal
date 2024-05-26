import React from "react";

import { LoadingSkeleton } from "../../atoms";
import { destinationData } from "./data";
import { DestinationCard } from "../../UI/Card/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../svg";

interface DestinationProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
}
const Destination: React.FC<DestinationProps> = ({
  className,
  title,
  CalledFromPage,
}) => {
  const handleOnClickSeeMore = () => {
    console.log("see more");
  };

  const staticClassName =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-6 md:pt-20 p-5";
  const finalClassName = className + " " + staticClassName;
  return (
    <div className="mt-10 md:mt-20 container mx-auto">
      {CalledFromPage ? (
        <h1 className="text-2xl lg:text-4xl font-black text-black uppercase dark:text-white leading-relaxed">
          {" "}
          More Destinations
        </h1>
      ) : (
        <div className="text-center mx-auto w-full md:max-w-4xl gap-6">
          <div className="flex"></div>
          <div className="flex items-center justify-center ">
            <h2 className="text-2xl lg:text-4xl font-black text-black uppercase dark:text-white leading-relaxed">
              <span className=" font-black   text-pink-500 lg:font-extrabold ">
                EXPLORE{" "}
              </span>{" "}
              <span>
                THE UNPARALLELED{" "}
                <span className=" font-black  text-pink-500 lg:font-extrabold ">
                  BEAUTY{" "}
                </span>{" "}
                OF OUR PREMIER{" "}
                <span className=" font-black  text-pink-500 lg:font-extrabold ">
                  DESTINATIONS{" "}
                </span>{" "}
              </span>
            </h2>
          </div>

          <p className="text-neutral-600 p-2 md:mt-3 text-xs dark:text-neutral-400">
            Embark on an unforgettable journey through our meticulously curated
            selection of top-tier destinations, where opulence seamlessly
            intertwines with exhilarating adventure. Experience the epitome of
            luxury as you traverse breathtaking landscapes, immerse yourself in
            vibrant cultures, and create memories that will last a lifetime.
          </p>
        </div>
      )}

      {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
      <div className="flex flex-row justify-end px-5">
        <div className="text-center relative group ">
          <Link to="/destination">
            <button
              className=" animate-bounce mx-auto bg-pink-500 rounded-full  px-3 py-3 font-bold text-white hover:bg-pink-600 transition duration-300 uppercase"
              onClick={handleOnClickSeeMore}
            >
              <ArrowRight color="white" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>
      <div className={finalClassName}>
        {destinationData?.map((service, index) => (
          <DestinationCard
            key={index}
            {...service}
            onclick={handleOnClickSeeMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;

export const DestinationPageContent = () => {
  const [showLoader, setShowLoader] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState(""); // State to manage search query

  React.useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  // Function to filter destination data based on search query
  const filterDestinations = () => {
    return destinationData.filter((destination) =>
      destination.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  // Event handler for input change in search field
  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      {showLoader ? (
        <>
          <div className="container mx-auto py-2">
            <LoadingSkeleton />
          </div>
        </>
      ) : (
        <div className="md:mt-10 container mx-auto   ">
          <div className=" mb-4 flex flex-wrap justify-center md:justify-between py-5 px-5 bg-gradient-to-r from-blue-500 via-red-500 to-pink-500">
            <h4 className="text-2xl font-bold text-white uppercase tracking-wide py-5 md:w-1/2">
              <span> Explore </span>Our Top Destinations
            </h4>

            <form className="md:w-1/4 md:mt-4">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                  <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 19l-4-4m0-7a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  placeholder="Search destinations..."
                  value={searchQuery}
                  onChange={handleSearchInputChange}
                  className="block w-full p-3 min-w-[300px] max-w-[500px] text-center text-sm text-gray-900 border border-gray-300 rounded-full bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  required
                />
              </div>
            </form>
          </div>

          {/* Destination cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-4 gap-6 md:pt-10 px-5">
            {filterDestinations().map((destination, index) => (
              <DestinationCard key={index} {...destination} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
