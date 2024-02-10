import React from "react";

import { Title } from "../../atoms";
import { destinationData } from "./data";
import { DestinationCard } from "../../UI/Card/card";

interface DestinationProps {
  className?: string;
  title?: string;
}
const Destination: React.FC<DestinationProps> = ({ className, title }) => {
  const handleOnClickSeeMore = () => {
    console.log("see more");
  };

  const staticClassName =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-6 md:pt-20 p-5";
  const finalClassName = className + " " + staticClassName;
  return (
    <div className="mt-10 md:mt-28 container mx-auto">
      <Title title={`${title ? title : "Our Top Destination"}`} />

      {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
      <div className={finalClassName}>
        {destinationData.map((service, index) => (
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
  const [searchQuery, setSearchQuery] = React.useState(""); // State to manage search query

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
      <div className="md:mt-10 container mx-auto ">
        <div className="flex flex-wrap justify-center md:justify-between py-5 px-5">
          <h4 className="text-2xl font-bold text-gray-800 uppercase tracking-wide py-5 md:w-1/2">
            <span className="text-indigo-900s"> Explore </span>Our Top
            Destinations
          </h4>

          <form className="md:w-1/4 md:mt-4">
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center px-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={handleSearchInputChange}
                className="block w-full p-3 min-w-[300px]  max-w-[500px]  text-center px-10 text-sm text-gray-900 border border-gray-300 rounded-md bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
    </>
  );
};
