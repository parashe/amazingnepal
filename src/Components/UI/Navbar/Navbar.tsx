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

  const navListClassName = `w-full md:block md:w-auto text-center items-center ${
    showlist ? "block" : "hidden"
  }`;

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
    console.log("showDropdown state changed:", showDropdown);
  }, [showDropdown]);

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-2xl font-semibold dark:border-gray-600 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-wrap container mx-auto justify-center items-center max-w-screen-xl px-4 text-sm">
        <Link to="/">
          <div className="h-24 w-24 md:h-20 md:w-full rounded-sm overflow-hidden bg-white flex items-center justify-center dark:bg-gray-900">
            <img
              src="/logo.png"
              className="h-full w-full object-contain p-1 sm:p-2"
              alt="Logo"
            />
          </div>
        </Link>
        <button
          data-collapse-toggle="navbar-dropdown"
          type="button"
          className="inline-flex items-center justify-end p-2 w-10 h-10 text-sm text-gray-500 rounded-lg md:hidden hover:text-ui-primary focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
          <ul className="flex flex-col p-6 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-white py-5 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 dark:text-white">
            <li>
              <Link
                to="/"
                className={`block py-4 px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            <li className="flex justify-center">
              <button
                ref={buttonRef}
                onClick={handleDropdown}
                className={`block py-3 text-center px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${
                  showDropdown ? "text-ui-primary" : "text-gray-900"
                }`}
              >
                <span className="flex justify-center items-center ">
                  Browse Destinations
                  <DropdownIcon className="w-5 h-5 ml-1" color="#ec4899" />
                </span>
              </button>
              {showDropdown && <DropdownContent setShowDropdown={setShowDropdown} ref={dropdownRef} />}
            </li>
            <li>
              <Link
                to="/destination"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/destination"
                )}`}
              >
                All Destinations
              </Link>
            </li>
            <li>
              <Link
                to="/nepal"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/nepal"
                )}`}
              >
                Explore Nepal
              </Link>
            </li>
            <li>
              <Link
                to="/service"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/service"
                )}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className={`block py-3 px-3 lg:px-6 lg:py-2 hover:text-ui-primary rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
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

const DropdownContent = React.forwardRef<HTMLUListElement, DropdownContentProps>(({ setShowDropdown }, ref) => {
  return (
    <ul
      ref={ref}
      className="absolute w-[90vw] bg-gray-50 mt-10 top-1/2 left-1/2 transform -translate-x-1/2 md:py-12 md:px-16 sm:w-auto sm:min-w-[700px] md:min-w-[800px] lg:min-w-[900px] xl:min-w-[1000px] border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 overflow-auto max-h-[70vh]"
    >
      {destinationData?.map((destination) => (
        <li key={destination?.destination_id} className="relative group">
          <Link
            to={`/destination/${destination?.destination_id}`}
            className="block border-b border-gray-200 md:border-none px-5 py-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 hover:text-ui-primary dark:text-white dark:hover:bg-gray-600 transition duration-300"
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
