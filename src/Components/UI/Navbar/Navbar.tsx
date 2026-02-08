import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
// import { DropdownIcon } from "../../svg"; // used when Browse Destinations is enabled
import { destinationData } from "../../window/Destination/data";

export const Navbar: React.FC = () => {
  const [showlist, setShowlist] = useState<boolean>(false);
  const [showDropdown, setShowDropdown] = useState<boolean>(false);
  const [mobileSearchQuery, setMobileSearchQuery] = useState<string>("");
  const [mobileSearchFocused, setMobileSearchFocused] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLUListElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const mobileSearchRef = useRef<HTMLDivElement>(null);

  const location = useLocation();

  const filteredDestinations = mobileSearchQuery.trim()
    ? destinationData.filter((d) =>
        d.title.toLowerCase().includes(mobileSearchQuery.toLowerCase())
      )
    : destinationData.slice(0, 8);

  const closeMobileMenu = () => {
    setShowlist(false);
  };

  const isActive = (path: string): string => {
    return location.pathname === path ? "text-ui-primary" : "text-gray-900 dark:text-gray-200";
  };

  const navListClassName = `
    fixed top-0 left-0 w-full h-full bg-gray-50 dark:bg-gray-900 z-50 transition-transform transform
    ${showlist ? "translate-x-0" : "-translate-x-full"}
    md:relative md:top-auto md:left-auto md:w-auto md:h-auto md:bg-transparent md:translate-x-0
  `;

  const handleNavList = () => {
    setShowlist(!showlist);
  };

  // Used when Browse Destinations is enabled:
  // const handleDropdown = (event: React.MouseEvent) => {
  //   event.stopPropagation();
  //   setShowDropdown((prev) => !prev);
  // };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node) &&
      buttonRef.current &&
      !buttonRef.current.contains(event.target as Node)
    ) {
      setShowDropdown(false);
    }
    if (
      mobileSearchRef.current &&
      !mobileSearchRef.current.contains(event.target as Node)
    ) {
      setMobileSearchFocused(false);
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

  const showMobileSearchResults =
    mobileSearchFocused || mobileSearchQuery.length > 0;

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-2xl font-semibold dark:border-gray-900 dark:bg-gray-900 dark:text-white">
      <div className="flex flex-nowrap container mx-auto items-center max-w-screen-xl px-2 sm:px-4 text-sm gap-2">
        <Link to="/" className="flex-shrink-0">
          <div className="h-20 w-20 sm:h-24 sm:w-24 md:h-20 md:w-auto rounded-sm overflow-hidden bg-white flex items-center justify-center dark:bg-gray-900">
            <img
              src="/logo.png"
              className="h-full w-full object-contain p-1 sm:p-2"
              alt="Amazing Nepal – Nepal travel and tours logo"
            />
          </div>
        </Link>

        {/* Spacer: pushes search to center on desktop */}
        <div className="flex-1 min-w-0 hidden md:block" aria-hidden="true" />

        {/* Search bar - centered on desktop, full width on mobile */}
        <div
          ref={mobileSearchRef}
          className="flex-1 min-w-0 md:flex-initial md:w-56 lg:w-64 md:max-w-[280px] relative"
        >
          <label htmlFor="navbar-destination-search" className="sr-only">
            Search destinations
          </label>
          <div className="relative">
            <span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </span>
            <input
              id="navbar-destination-search"
              type="search"
              value={mobileSearchQuery}
              onChange={(e) => setMobileSearchQuery(e.target.value)}
              onFocus={() => setMobileSearchFocused(true)}
              onBlur={() => {}}
              placeholder="Search destinations..."
              className="w-full pl-8 pr-8 py-2.5 rounded-lg border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-500 text-base focus:ring-2 focus:ring-ui-primary focus:border-ui-primary focus:bg-white dark:focus:bg-gray-800"
              autoComplete="off"
            />
            {mobileSearchQuery && (
              <button
                type="button"
                onClick={() => setMobileSearchQuery("")}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 p-1"
                aria-label="Clear search"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
          {showMobileSearchResults && (
            <div className="absolute left-0 right-0 top-full mt-1 py-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-600 rounded-lg shadow-xl z-50 max-h-[60vh] overflow-y-auto">
              <p className="px-3 py-1.5 text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                {mobileSearchQuery.trim() ? "Results" : "Destinations"}
              </p>
              {filteredDestinations.length > 0 ? (
                <ul className="space-y-0.5">
                  {filteredDestinations.map((d) => (
                    <li key={d.destination_id}>
                      <Link
                        to={`/destination/${d.destination_id}`}
                        onClick={() => {
                          setMobileSearchQuery("");
                          setMobileSearchFocused(false);
                        }}
                        className="block py-2.5 px-3 text-gray-800 dark:text-gray-200 hover:bg-ui-primary/10 hover:text-ui-primary font-medium text-base"
                      >
                        {d.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="px-3 py-3 text-base text-gray-500 dark:text-gray-400">No destinations match.</p>
              )}
              <Link
                to="/destination"
                onClick={() => {
                  setMobileSearchQuery("");
                  setMobileSearchFocused(false);
                }}
                className="block py-2.5 px-3 mt-1 border-t border-gray-100 dark:border-gray-700 text-ui-primary font-semibold text-base hover:bg-ui-primary/10"
              >
                View all destinations →
              </Link>
            </div>
          )}
        </div>

        {/* Spacer: keeps search centered on desktop (nav items come after) */}
        <div className="flex-1 min-w-0 hidden md:block" aria-hidden="true" />

        <div className="flex items-center flex-shrink-0 md:hidden">
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
              onClick={closeMobileMenu}
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

          <ul className="flex flex-col py-6 px-2 md:p-0 mt-4 gap-3 text-base md:text-base rounded-lg bg-gray-50 md:flex-row md:space-x-5 md:mt-0 md:border-0 md:bg-transparent dark:bg-gray-900 md:dark:bg-transparent dark:border-gray-700 dark:text-white">
            <li>
              <Link
                to="/"
                onClick={closeMobileMenu}
                className={`block py-2  border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/"
                )}`}
              >
                Home
              </Link>
            </li>
            {/* Browse Destinations - commented for now
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
                  onNavigate={closeMobileMenu}
                  ref={dropdownRef}
                />
              )}
            </li>
            */}
            <li>
              <Link
                to="/service"
                onClick={closeMobileMenu}
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white ${isActive(
                  "/service"
                )}`}
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="/destination"
                onClick={closeMobileMenu}
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
                onClick={closeMobileMenu}
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3  md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
                  "/nepal"
                )}`}
              >
                Explore Nepal
              </Link>
            </li>
            <li>
              <Link
                to="/gallery"
                onClick={closeMobileMenu}
                className={`block py-2 border-b border-gray-200 dark:border-gray-50 rounded-sm sm:border-none px-3 md:px-3 xl:px-6 lg:py-2 hover:text-ui-primary sm:rounded md:hover:text-ui-primary md:border-0 md:p-0 dark:hover:text-white dark:text-white${isActive(
                  "/gallery"
                )}`}
              >
                Gallery
              </Link>
            </li>
            <li className="md:hidden">
              <Link
                to="/contact"
                onClick={closeMobileMenu}
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
  onNavigate?: () => void;
};

const DropdownContent = React.forwardRef<
  HTMLUListElement,
  DropdownContentProps
>(({ setShowDropdown, onNavigate }, ref) => {
  const handleLinkClick = () => {
    setShowDropdown(false);
    onNavigate?.();
  };
  return (
    <ul
      ref={ref}
      className="absolute w-full sm:p-6 sm:w-[70vw] lg:w-[55vw] bg-gray-50 sm:mt-0 lg:mt-5 py-2 sm:py-5 md:py-0 top-full left-1/2 sm:left-auto  md:left-0 transform -translate-x-1/2 sm:translate-x-0 md:translate-x-0 border-none border sm:border-gray-400 rounded-lg shadow-lg dark:bg-gray-900 dark:border-gray-900 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 overflow-auto max-h-[70vh]"
    >
      {destinationData?.map((destination) => (
        <li key={destination?.destination_id} className="relative group">
          <Link
            to={`/destination/${destination?.destination_id}`}
            className="block px-4 py-3 sm:rounded-lg text-base text-gray-800 hover:bg-gray-100 hover:text-ui-primary dark:text-white dark:hover:bg-gray-600 transition duration-300"
            onClick={handleLinkClick}
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



