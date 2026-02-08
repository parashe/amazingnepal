import React from "react";
import { Link } from "react-router-dom";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <nav
      className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900"
      aria-label="Breadcrumb"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-3">
        <ol className="inline-flex items-center gap-1.5 text-sm text-gray-600 dark:text-gray-400">
          <li>
            <Link
              to="/"
              className="hover:text-ui-primary dark:hover:text-white transition-colors"
            >
              Home
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="inline-flex items-center gap-1.5">
              <span aria-hidden="true">/</span>
              {item.href ? (
                <Link
                  to={item.href}
                  className="text-ui-primary font-medium hover:text-ui-secondary dark:text-white"
                >
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-900 dark:text-white font-medium">
                  {item.label}
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
};
