import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [showlist, setShowlist] = React.useState(false);
  const [showdropdown, setShowdropdown] = React.useState(false);
  const [showInnerDropdown, setShowInnerDropdown] = React.useState(false);

  const navLsitClassName = ` w-full   md:block md:w-auto text-center items-center ${
    showlist ? "block" : "hidden"
  }`;

  const dropDownClassName = `md:absolute font-normal  bg-gray-50 mx-auto lg:mt-3 md:px-5   w-full lg:max-w-[250px] md:bg-white py-3 divide-y divide-gray-100 rounded-lg md:shadow w-44 dark:bg-gray-700 dark:divide-gray-600 ${
    showdropdown ? "block" : "hidden"
  }`;

  const innerDropDownClassName = `md:absolute lg:left-[100%] bg-gray-50 mx-auto   md:px-5  w-full md:max-w-[250px] md:bg-white py-3 divide-y divide-gray-100 rounded-lg md:shadow w-44 dark:bg-gray-700 ${
    showInnerDropdown ? "block" : "hidden"
  }`;

  const handleDropdown = () => {
    setShowInnerDropdown(false);
    setShowdropdown(!showdropdown);
  };

  const handleNavList = () => {
    setShowlist(!showlist);
    setShowInnerDropdown(false);
    setShowdropdown(false);
  };

  return (
    <>
      <nav className=" bg-white  py-3  font-semibold border-gray-200 dark:border-gray-600 dark:bg-gray-900 shadow-md  top-0   lg:top-0 left-0 z-50 md:z-0 w-full ">
        <div className="flex flex-wrap container mx-auto  justify-center items-center max-w-screen-xl px-4   text-sm">
          <a
            href="/"
            className="flex items-center space-x-3 rtl:space-x-reverse px-5"
          >
            <img
              src="/logo.png"
              className="h-10 w-full object-contain"
              alt="Amazing Logo"
            />
          </a>
          <button
            data-collapse-toggle="navbar-dropdown"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
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
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={navLsitClassName} id="navbar-dropdown">
            <ul className=" flex flex-col p-4 md:p-0 mt-4 border  border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white py-3 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              <li>
                <a
                  href="/#"
                  className="block py-2  px-3 text-white lg:px-4 lg:py-2 md:hover:bg-gray-100  hover:bg-gray-100  bg-ui-purple rounded md:bg-transparent md:text-ui-purple md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <Link
                  to="/services"
                  className="block py-2 px-3 text-gray-900 lg:px-4 lg:py-2 md:hover:bg-gray-100 rounded md:hover:bg-transparent md:border-0 md:hover:text-ui-purple hover:bg-ui-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  aria-current="page"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/destination"
                  className="block py-2 px-3 lg:px-4 lg:py-2 md:hover:bg-gray-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ui-purple md:hover:bg-ui-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Top Destination
                </Link>
              </li>
              <li>
                <Link
                  to="/nepal"
                  className="block py-2 px-3 lg:px-4 lg:py-2 md:hover:bg-gray-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ui-purple md:hover:bg-ui-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Nepal
                </Link>
              </li>
              <li>
                <Link
                  to="/gallery"
                  className="block py-2 px-3 lg:px-4 lg:py-2 md:hover:bg-gray-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ui-purple md:hover:bg-ui-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Gallery
                </Link>
              </li>

              <li>
                <a
                  href="/#"
                  className="block py-2 px-3 lg:px-4 lg:py-2 md:hover:bg-gray-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ui-purple md:hover:bg-ui-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  About Us
                </a>
              </li>

              <li>
                <Link
                to="/contact"
                  className="block py-2 px-3 lg:px-4 lg:py-2 md:hover:bg-gray-100 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-ui-purple md:hover:bg-ui-gray-100 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};
