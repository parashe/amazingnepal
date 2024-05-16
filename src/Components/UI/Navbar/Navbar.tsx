import React from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownIcon } from "../../svg";
import { destinationData } from "../../window/Destination/data";
export const Navbar = () => {
  const [showlist, setShowlist] = React.useState(false);
  const [showDropdown, setShowDropdown] = React.useState(false);

  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? " text-pink-500" : "text-gray-900";
  };

  const navListClassName = `w-full md:block md:w-auto text-center items-center ${
    showlist ? "block" : "hidden"
  }`;

  const handleNavList = () => {
    setShowlist(!showlist);
  };

  const handleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-2xl font-semibold dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-wrap container mx-auto justify-around items-center max-w-screen-xl px-4 text-sm">
        <Link
          to="/"
          className={`flex items-center space-x-3 rtl:space-x-reverse px-5`}
        >
          <img
            src="/logo.png"
            className="h-16 w-16 brightness-100 rounded-full object-cover"
            alt="Amazing Logo"
          />
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:text-pink-500 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-dropdown"
          aria-expanded="false"
          onClick={handleNavList}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className={navListClassName} id="navbar-dropdown">
          <ul className="flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white py-5 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <Link
                to="/"
                className={`block py-4 px-3 lg:px-6 lg:py-2 hover:text-pink-500 rounded md:hover:text-pink-500 md:border-0 md:p-0 dark:hover:text-white ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <button
                onClick={handleDropdown}
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-pink-500 rounded md:hover:text-pink-500 md:border-0 md:p-0 dark:hover:text-white ${
                  showDropdown ? "text-pink-500" : "text-gray-900"
                }`}
              >
                <span className="flex items-center">
                  Destinations
                  <DropdownIcon className="w-5 h-5 ml-1" color="#ec4899" />
                </span>
              </button>
              {showDropdown && <DropdownContent />}
            </li>
            <li>
              <Link
                to="/nepal"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-pink-500 rounded md:hover:text-pink-500 md:border-0 md:p-0 dark:hover:text-white ${isActive(
                  "/nepal"
                )}`}
              >
                Explore Nepal
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-pink-500 rounded md:hover:text-pink-500 md:border-0 md:p-0 dark:hover:text-white ${isActive(
                  "/service"
                )}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-pink-500 rounded md:hover:text-pink-500 md:border-0 md:p-0 dark:hover:text-white ${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-pink-500 rounded md:hover:text-pink-500 md:border-0 md:p-0 dark:hover:text-white ${isActive(
                  "/contact"
                )}`}
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const DropdownContent = () => {
  return (
    <ul className="absolute left-1/2 transform -translate-x-1/2 mt-3 w-full md:py-12 md:px-10 xl:mt-3   sm:w-auto sm:min-w-[700px] md:min-w-[800px] lg:min-w-[900px] xl:min-w-[1000px] bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto max-h-[70vh]">
      {destinationData?.map((destination) => (
        <li key={destination?.destination_id}>
          <Link
            to={`/destination/${destination?.destination_id}`}
            className="block px-5 py-2 text-xs text-gray-800 hover:bg-gray-100 hover:text-pink-500 dark:text-white dark:hover:bg-gray-600"
          >
            {destination?.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};