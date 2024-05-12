import React from "react";
import { MapPinIcon, SVGIcon } from "../../svg";

export const FirstHomeScreen = () => {
  return (
    <>
      <div className="mx-auto relative">
        <div className="relative">
          <img
            className="lg:brightness-50 h-[275px] lg:h-full lg:w-full lg:max-h-[600px] w-full object-fill aspect-[19/10] object-center shadow-md"
            src="/assets/homeimage.jpeg"
            alt=""
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>
        <div className="absolute inset-0 flex justify-center items-center w-full">
          <Search />
        </div>
      </div>
    </>
  );
};

const Search = () => {
  return (
    <>
      <div>
        {" "}
        <Text />
        <form class="min-w-[350px] sm:min-w-[400px] md:min-w-[600px] mx-auto">
        
          <div class="relative">
            <input
              type="search"
              id="default-search"
              className="block w-full p-5  ps-10 text-sm text-gray-900  rounded-full bg-white focus:border-none focus:ring-none"
              placeholder="Search for destinations"
              
            />
            <div className="absolute end-2.5 bottom-2.5 ">
              <SearchButton />
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

const SearchButton = () => {
  return (
    <button
      type="submit"
      className="relative text-white bg-pink-500 hover:bg-pink-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-3 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    >
      <div className="flex items-center">
        <div className="mr-0 md:mr-3">
          <SVGIcon
            className="w-6 h-6 md:h-4 md:w-4 text-gray-500 dark:text-gray-400"
            color="white"
          />
        </div>
        <span className="sr-only md:not-sr-only">Search</span>
      </div>
    </button>
  );
};

const Text = () => {
  return (
    <>
      <p className="max-w-3xl text-xl text-center leading-relaxed  mb-3   font-black text-gray-900 lg:leading-10 dark:text-white ">
        <span className=" font-bold lg:text-5xl text-black  lg:font-extrabold ">
          <span className="  bg-gradient-to-r from-blue-500 via-red-400 to-pink-500 inline-block text-transparent bg-clip-text font-black">
            Discover stunning destinations{" "}
          </span>{" "}
          <span className="bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 inline-block text-transparent bg-clip-text font-black">
            {" "}
            with us{" "}
            <MapPinIcon className="w-5 h-5 inline-block" color="#ec4899" />
          </span>{" "}
        </span>{" "}
      </p>
    </>
  );
};
