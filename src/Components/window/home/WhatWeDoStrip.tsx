import React from "react";
import { Link } from "react-router-dom";

const items = [
  {
    label: "Treks & tours",
    to: "/destination",
    description: "Curated trips and itineraries",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
      </svg>
    ),
  },
  {
    label: "Travel packages",
    to: "/service",
    description: "Tailored trips & support",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    label: "Travel insurance",
    to: "/service",
    description: "Coverage for your journey",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    label: "Immigration",
    to: "/service",
    description: "Visa & relocation support",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
];

export const WhatWeDoStrip: React.FC = () => {
  return (
    <section
      id="what-we-do"
      className="relative py-16 md:py-32 overflow-hidden"
      aria-label="What we do"
    >
      {/* Light band: soft primary tint, left accent – distinct but friendly */}
      <div className="relative  py-16 md:py-24 bg-gradient-to-r from-ui-primary/5 via-white to-ui-primary/5 dark:from-ui-primary/10 dark:via-gray-900 dark:to-ui-primary/10">
        <div className="absolute left-0 top-0 bottom-0 w-1 sm:w-1.5 bg-gradient-to-b from-ui-primary to-ui-secondary pointer-events-none" aria-hidden />

        <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
          {/* Centered on mobile, left-aligned from sm */}
          <div className="mb-8 md:mb-10 max-w-xl mx-auto sm:mx-0 text-center sm:text-left">
            <p className="text-ui-primary font-semibold uppercase tracking-widest text-xs mb-2">
              What we do
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
              Treks, tours & travel support for Nepal
            </h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
              From curated trips and travel packages to insurance and immigration—we&apos;re here for your journey.
            </p>
          </div>

          {/* Horizontal strip: 4 items, divider-separated */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-0 border-t border-gray-200 dark:border-gray-700 pt-6 md:pt-8">
            {items.map((item, index) => (
              <React.Fragment key={item.label}>
                {index > 0 && (
                  <div className="hidden sm:block w-px self-stretch min-h-[4rem] bg-gray-200 dark:bg-gray-700 shrink-0" aria-hidden />
                )}
                <Link
                  to={item.to}
                  className="group flex-1 min-w-0 flex flex-col sm:flex-row items-center sm:items-start gap-4 py-4 sm:py-0 sm:min-h-[5rem] sm:px-4 hover:bg-white/60 dark:hover:bg-gray-800/60 rounded-lg transition-colors -mx-2 px-2 sm:mx-0 text-center sm:text-left"
                >
                  <span className="flex items-center justify-center w-10 h-10 rounded-lg bg-ui-primary/15 dark:bg-ui-primary/25 text-ui-primary shrink-0 group-hover:bg-ui-primary group-hover:text-white transition-colors">
                    {item.icon}
                  </span>
                  <div className="min-w-0 flex flex-col items-center sm:items-start">
                    <h3 className="font-bold text-gray-900 dark:text-white text-base group-hover:text-ui-primary dark:group-hover:text-ui-primary transition-colors">
                      {item.label}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm mt-0.5">{item.description}</p>
                    <span className="inline-flex items-center gap-1 mt-2 text-ui-primary text-xs font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
                      Explore
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </span>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
