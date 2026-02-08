import React from "react";
import { Link } from "react-router-dom";

export const TopNavbar = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-2 px-4">
      <div className="container mx-auto flex justify-between items-center max-w-screen-xl text-xs">
        <div className="flex items-center space-x-4">
          <Link to="/" className="hover:text-ui-primary text-gray-600 dark:text-gray-300">
            <img
              src="/logo.png"
              className="h-20 w-full object-contain"
              alt="Amazing Nepal – Nepal travel and tours logo"
            />
          </Link>
          <span className="hidden sm:block">Your Company Slogan Here</span>
        </div>
        <div className="flex space-x-4">
          <Link to="/about" className="hover:text-ui-primary text-gray-600 dark:text-gray-300">
            About
          </Link>
          <Link to="/support" className="hover:text-ui-primary text-gray-600 dark:text-gray-300">
            Support
          </Link>
          <Link to="/contact" className="hover:text-ui-primary text-gray-600 dark:text-gray-300">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
};