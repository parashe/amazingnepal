import React, { useState } from "react";
import { MapPinIcon } from "../../svg";

import { destinationData } from "../Destination/data";

import { DestinationHomeContent } from "../Destination/destination_home";

export const HomeFirstScreen = () => {
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Destination[]>([]);

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (query.trim() !== "") {
      filterResults(query);
    } else {
      setSearchResults([]);
    }
  };

  const filterResults = (query: string) => {
    const filtered = destinationData.filter((destination) =>
      destination.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchResults(filtered as any);
  };

  return (
    <>
      <div className="relative w-full h-full flex flex-col items-center">
        <HomeTopContent
          imageUrl="/assets/breadcrumb/breadcrumbdestination.webp"
          description="Amazing Nepal"
        />
        <div className="w-full flex justify-center">
          <ContentCard
            searchQuery={searchQuery}
            handleSearchInputChange={handleSearchInputChange}
          />
        </div>
        <div className="mt-0"></div>
        <DestinationHomeContent
          destinations={
            searchQuery ? searchResults : destinationData.slice(0, 6)
          }
        />
      </div>
    </>
  );
};

export const HomeTopContent = ({
  imageUrl,
}: {
  imageUrl: string | undefined;
  description: string | undefined;
}) => {
  return (
    <div className="w-full ">
      {/* Image */}
      <img
        className="w-full h-60 md:h-72 object-cover brightness-75 transition duration-500 ease-in-out transform hover:scale-105"
        src={imageUrl}
        alt=""
        loading="lazy"
      />
    </div>
  );
};

interface Destination {
  destination_id: number;
  title: string;
}

interface ContentCardProps {
  searchQuery: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  searchQuery,
  handleSearchInputChange,
}) => {
  return (
    <div className="flex flex-row justify-center items-center w-full bg-gradient-to-r from-blue-400 via-red-400 to-pink-500 min-h-[200px] shadow-xl p-8  relative text-white">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-center items-center flex-wrap md:flex-nowrap gap-6">
          <img
            src="/assets/tripicon.png"
            alt="Nepal Destination"
            className="w-24 h-24 rounded-full mb-3 animate-pulse"
          />
          <div className="text-center md:text-left">
            <h2 className="text-4xl font-black mb-2">Amazing Nepal</h2>
            <p className="text-lg mb-4 flex items-center justify-center md:justify-start">
              Discover the beauty of Nepal with us
              <MapPinIcon className="w-5 h-5 inline-block ml-2 text-blue-200" />
            </p>
          </div>
          <div className="w-full md:w-auto">
            <Search
              searchQuery={searchQuery}
              handleSearchInputChange={handleSearchInputChange}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

interface SearchProps {
  searchQuery: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Search: React.FC<SearchProps> = ({
  searchQuery,
  handleSearchInputChange,
}) => {
  return (
    <div className="w-full">
      <form className="min-w-[350px] sm:min-w-[400px] md:min-w-[600px] mx-auto">
        <div className="relative">
          <input
            type="search"
            id="default-search"
            className="block w-full border border-gray-300 p-5 ps-10 text-lg text-gray-900 rounded-full bg-white focus:ring-2 focus:ring-pink-500"
            placeholder="Search for destinations"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
        </div>
      </form>
    </div>
  );
};
