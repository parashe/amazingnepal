import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { DropdownIcon } from "../../svg";
import { destinationData } from "../../window/Destination/data";

export const Navbar: React.FC = () => {
  const [showlist, setShowlist] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const location = useLocation();

  const isActive = (path: string): string => {
    return location.pathname === path ? "text-ui-primary" : "text-gray-900";
  };

  const navListClassName = `
    fixed top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 z-50 transition-transform transform
    ${showlist ? "translate-x-0" : "-translate-x-full"}
    md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:translate-x-0
  `;

  const handleNavList = () => {
    setShowlist(!showlist);
  };

  const handleDropdown = (event: React.MouseEvent) => {
    event.stopPropagation();
    setShowDropdown((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    return
  }, [showDropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-2xl font-semibold dark:border-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-wrap container mx-auto justify-center items-center max-w-screen-xl px-4 text-sm">
        <Link to="/">
          <div className="h-24 w-24 md:h-20 md:w-auto rounded-sm overflow-hidden bg-white flex items-center justify-center dark:bg-gray-900">
            <img
              src="/logo.png"
              className="h-full w-full object-contain p-1 sm:p-2"
              alt="Logo"
            />
          </div>
        </Link>
        <div className="flex items-center md:hidden">
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:text-ui-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
        </div>
        <div className={navListClassName} id="navbar-dropdown">
          <div className="flex justify-between items-center p-4 md:hidden">
            <span className="font-semibold text-lg">Menu</span>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 text-sm text-gray-500 rounded-lg hover:text-ui-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="navbar-dropdown"
              aria-expanded="false"
              onClick={handleNavList}
            >
              <span className="sr-only">Close main menu</span>
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
                  d="M1 1l15 15M1 16L16 1"
                />
              </svg>
            </button>
          </div>
          <ul className="flex flex-col py-6 px-2 md:p-0 mt-4 gap-3 text-lg sm:text-sm rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent dark:border-gray-700 dark:text-white">
            <li>
              <Link
                to="/"
                className={`block py-2  border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center relative border-b border-gray-200  sm:border-none dark:border-gray-50">
              <button
                ref={buttonRef}
                onClick={handleDropdown}
                className={`block py-2 text-center px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-none md:p-0 dark:hover:text-white dark:text-white focus:border-none focus:ring-none ${
                  showDropdown ? "text-ui-primary" : "text-gray-900"
                }`}
              >
                <span className="flex justify-center items-center">
                  Browse Destinations
                  <DropdownIcon className="w-5 h-5 ml-1" color="#ec4899" />
                </span>
              </button>

              {showDropdown && (
                <DropdownContent
                  setShowDropdown={setShowDropdown}
                  ref={dropdownRef}
                />
              )}
            </li>
            <li>
              <Link
                to="/destination"
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
                  "/destination"
                )}`}
              >
                All Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/nepal"
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3  md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
                  "/nepal"
                )}`}
              >
                Explore Nepal
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
                  "/service"
                )}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
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

type DropdownContentProps = {
  setShowDropdown: React.Dispatch<React.SetStateAction<boolean>>;
};

const DropdownContent = React.forwardRef<
  HTMLUListElement,
  DropdownContentProps
>(({ setShowDropdown }, ref) => {
  return (
    <ul
      ref={ref}
      className="absolute w-full sm:p-6 sm:w-[70vw] lg:w-[55vw] bg-gray-50 sm:mt-0 lg:mt-5 py-2 sm:py-5 md:py-0 top-full left-1/2 sm:left-auto  md:left-0 transform -translate-x-1/2 sm:translate-x-0 md:translate-x-0 border-none border sm:border-gray-400 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[70vh]"
    >
      {destinationData?.map((destination) => (
        <li key={destination?.destination_id} className="relative group">
          <Link
            to={`/destination/${destination?.destination_id}`}
            className="block px-4 py-3 sm:rounded-lg text-sm text-gray-800 hover:bg-gray-100 hover:text-ui-primary dark:text-white dark:hover:bg-gray-600 transition duration-300"
            onClick={() => setShowDropdown(false)}
          >
            {destination?.title}
          </Link>
          <div className="absolute bottom-0 left-0 w-full h-0.5 bg-ui-primary opacity-0 transition duration-300"></div>
        </li>
      ))}
    </ul>
  );
});

DropdownContent.displayName = "DropdownContent";

export default Navbar;



