import React from "react";
import { Link } from "react-router-dom";

const items = [
  { label: "Treks & tours", to: "/destination", description: "Curated trips and itineraries" },
  { label: "Travel packages", to: "/service", description: "Tailored trips & support" },
  { label: "Travel insurance", to: "/service", description: "Coverage for your journey" },
  { label: "Immigration", to: "/service", description: "Visa & relocation support" },
];

export const WhatWeDoStrip: React.FC = () => {
  return (
    <section className="border-y border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50" aria-label="What we do">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-4 md:py-5">
        <p className="text-center text-gray-500 dark:text-gray-400 text-xs font-semibold uppercase tracking-wider mb-3 md:mb-4">
          What we do
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {items.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className="block p-3 md:p-4 rounded-xl border border-gray-100 dark:border-gray-700/80 bg-gray-50/50 dark:bg-gray-800/30 hover:border-ui-primary/30 hover:bg-ui-primary/5 dark:hover:bg-ui-primary/10 transition-colors text-center md:text-left"
            >
              <span className="font-semibold text-gray-900 dark:text-white text-sm md:text-base block mb-0.5">
                {item.label}
              </span>
              <span className="text-gray-500 dark:text-gray-400 text-xs">
                {item.description}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
