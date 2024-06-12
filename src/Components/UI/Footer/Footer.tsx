import React from "react";
import { Link } from "react-router-dom";
import { ContactPerson } from "../../window/Contact/contact_person";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-xl dark:bg-gray-900">
      <div className="py-10 mx-auto max-w-screen-xl px-4 lg:py-20">
        <div className="md:flex md:justify-between md:space-x-8">
          <div className="mb-8 md:mb-0 md:w-1/3 text-center">
            <Link to="/" className="flex items-center justify-center">
              <div className="h-32 w-full rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"
                  className="h-full w-full object-contain p-2"
                  alt="Footer Logo"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-6">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                Useful Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="/nepal"
                    className="hover:underline hover:text-ui-primary"
                  >
                    Explore Nepal
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/gallery"
                    className="hover:underline hover:text-ui-primary"
                  >
                    Gallery
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/services"
                    className="hover:underline hover:text-ui-primary"
                  >
                    Services
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                Useful Links
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <Link
                    to="/contact"
                    className="hover:underline hover:text-ui-primary"
                  >
                    Contact Us
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    to="/destination"
                    className="hover:underline hover:text-ui-primary"
                  >
                    Top Destinations
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex justify-center items-center">
              <ContactPerson />
            </div>
          </div>
        </div>
        <hr className="my-8 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-12" />
        <div className="text-center text-sm text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link
              to="https://flowbite.com/"
              className="hover:underline hover:text-ui-primary"
            >
              Amazing Nepal
            </Link>
            . All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
