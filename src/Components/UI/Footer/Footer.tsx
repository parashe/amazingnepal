import React from "react";
import { Link } from "react-router-dom";
import { CONTACT, whatsAppUrl, telUrl, mailToUrl } from "../../../Lib/contact";

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-10">
          <div className="text-center md:text-left">
            <Link to="/" className="inline-block">
              <img
                src="/logo.png"
                className="h-20 w-auto object-contain"
                alt="Amazing Nepal – Nepal travel and tours logo"
              />
            </Link>
            <p className="mt-4 text-gray-500 dark:text-gray-400 max-w-xs text-sm">
              Treks, tours & travel support for Nepal and the Himalayas.
            </p>
          </div>

          <div className="md:col-span-2">
            <h3 className="font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Quick links
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              <ul className="space-y-3">
                <li>
                  <Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    About us
                  </Link>
                </li>
                <li>
                  <Link to="/destination" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    Top Destinations
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/nepal" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    Explore Nepal
                  </Link>
                </li>
              </ul>
              <ul className="space-y-3">
                <li>
                  <Link to="/recommended" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    Top attractions
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to="/faq" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-ui-primary transition-colors">
                    Contact us
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-4">
              Get in touch
            </h3>
            <ul className="space-y-3 text-gray-500 dark:text-gray-400">
              <li>
                <a href={telUrl} className="hover:text-ui-primary transition-colors block">
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={whatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-ui-primary transition-colors block"
                >
                  WhatsApp: {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={mailToUrl} className="hover:text-ui-primary transition-colors block break-all">
                  {CONTACT.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-800 text-center text-gray-500 dark:text-gray-400">
          <p>
            © {new Date().getFullYear()}{" "}
            <Link to="/" className="hover:text-ui-primary transition-colors font-medium">
              Amazing Nepal
            </Link>
            . All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
