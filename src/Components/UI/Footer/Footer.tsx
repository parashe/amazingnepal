import React from "react";
import { Link } from "react-router-dom";
import { ContactPerson } from "../../window/Contact/contact_person";

export const Footer = () => {
  return (
    <footer className="bg-gray-100 shadow-xl mt-24 dark:bg-gray-900 bottom-0 lg:pt-12">
      <div className="py-10 mx-auto w-full max-w-screen-xl p-4 lg:py-20">
        <div className="md:flex md:justify-between">
          <div className="mb-6 md:mb-0 text-center">
            <Link to="/" className="flex items-center justify-center">
               <div className="h-32 xl:h-48 w-full rounded-lg overflow-hidden flex items-center justify-center">
                <img
                  src="/logo.png"
                  className="h-full w-full object-contain p-2"
                  alt="Footer Logo"
                />
              </div>
            </Link>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-500 uppercase dark:text-white">
                Useful Link
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
                Useful Link
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
                    Top Destination
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <ContactPerson />
            </div>
          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-16" />
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <Link
              to="https://flowbite.com/"
              className="hover:underline hover:text-ui-primary"
            >
              Amazing Nepal
            </Link>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};
