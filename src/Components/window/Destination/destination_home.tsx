import React from "react";
import { DestinationCard } from "../../UI/Card/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../svg";
import { destinationData } from "./data";

const DESTINATIONS_SHOWN = 4;

export const DestinationHomeContent = () => {
  const destinations = destinationData.slice(0, DESTINATIONS_SHOWN);

  return (
    <section className="container mx-auto px-4 sm:px-6 py-4 md:py-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-3 md:mb-4">
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-ui-primary uppercase tracking-widest mb-1">
            Destinations
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
            Explore top destinations
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400 text-sm max-w-xl sm:max-w-none">
            Curated trips — treks, pilgrimages, and cultural journeys.
          </p>
        </div>
        <Link
          to="/destination"
          onClick={() => window.scrollTo(0, 0)}
          className="inline-flex items-center gap-2 rounded-lg border-2 border-ui-primary bg-transparent px-4 py-2 text-sm font-semibold text-ui-primary transition-colors hover:bg-ui-primary hover:text-white dark:border-ui-primary dark:hover:bg-ui-primary dark:hover:text-white shrink-0 sm:ml-auto"
          aria-label="View all destinations"
        >
          View all
          <ArrowRight className="w-4 h-4" color="currentColor" />
        </Link>
      </header>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {destinations.map((destination) => (
          <DestinationCard
            key={destination.destination_id}
            {...(destination as any)}
          />
        ))}
      </div>
    </section>
  );
};
