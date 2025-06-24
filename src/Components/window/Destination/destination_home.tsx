import React, { useState } from "react";
import { DestinationCard } from "../../UI/Card/card";
import { Link } from "react-router-dom";
import { ArrowRight, CrossIcon, SearchIcon } from "../../svg";
import { destinationData } from "./data";
import { Button } from "../../atoms";

interface Destination {
  destination_id: number;
  title: string;
}

export const DestinationHomeContent = () => {
  const [isSearchActive, setIsSearchActive] = useState<boolean>(true);
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

  const toggleSearch = () => {
    setIsSearchActive(!isSearchActive);
    if (!isSearchActive) {
      setSearchQuery("");
      setSearchResults([]);
    }
  };

  const clearSearch = () => {
    setSearchQuery("");
    setSearchResults([]);
  };

  // Determine which destinations to display based on search state
  const destinationsToDisplay = searchQuery
    ? searchResults
    : destinationData.slice(0, 6);

  return (
    <div className="md:mt-10 container mx-auto">
      <div
        className={`flex ${
          isSearchActive ? "flex-col" : "flex-row"
        } sm:flex-row justify-between items-center px-5 mb-2`}
      >
        <h4 className="text-xl sm:text-3xl font-bold text-gray-800 uppercase tracking-wide py-5 dark:text-white">
          <span className="text-ui-primary">Explore</span> Top Destinations
        </h4>
        <div className="flex items-center space-x-4">
          {isSearchActive ? (
            <>
              <Search
                searchQuery={searchQuery}
                handleSearchInputChange={handleSearchInputChange}
                toggleSearch={toggleSearch}
                isSearchActive={isSearchActive}
                clearSearch={clearSearch}
              />
            </>
          ) : (
            <button
              onClick={toggleSearch}
              className="animate-pulse bg-[#01204E] rounded-full px-3 py-3 font-bold text-white hover:bg-[#153448] transition duration-300 uppercase flex items-center"
            >
              <SearchIcon className="w-6 h-6 text-white" color="white" />
            </button>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:pt-10 px-5">
        {destinationsToDisplay.map((destination, index) => (
          <DestinationCard key={index} {...(destination as any)} />
        ))}
      </div>
      <div className="mt-10">
        <Link to="/destination">
          <Button
            onClick={() => window.scrollTo(0, 0)}
            className="bg-white border border-ui-primary px-10 py-2 mt-10 rounded-md text-ui-primary hover:bg-ui-primary hover:text-white transition duration-300"
          >
            Explore More &nbsp;
            <ArrowRight color="#0097f3" className="w-3 h-3" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

interface SearchProps {
  searchQuery: string;
  handleSearchInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  isSearchActive: boolean;

  toggleSearch: () => void;

  clearSearch: () => void;
}

const Search: React.FC<SearchProps> = ({
  searchQuery,
  handleSearchInputChange,
  isSearchActive,
  toggleSearch,
  clearSearch,
}) => {
  return (
    <div className="w-full">
      <form className="w-full sm:min-w-[400px] max-w-[400px] mx-auto">
        <div className="relative">
          <input
            type="search"
            autoComplete="off"
            id="default-search"
            className="block w-full border border-ui-primary p-1.5 pl-10 pr-10 text-base text-gray-900 rounded-full bg-white focus:ring-2 focus:ring-ui-primary dark:bg-gray-800 dark:text-white"
            placeholder="Search for destinations"
            value={searchQuery}
            onChange={handleSearchInputChange}
          />
          {isSearchActive && (
            <button
              type="button"
              onClick={toggleSearch}
              className="absolute inset-y-0 right-0 flex items-center pr-3"
            >
              <CrossIcon className="w-3 h-3 text-ui-primary" />
            </button>
          )}
        </div>
      </form>
    </div>
  );
};
