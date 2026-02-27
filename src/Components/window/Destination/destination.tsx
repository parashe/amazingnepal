import React from "react";
import { useSearchParams } from "react-router-dom";
import { LoadingSkeleton } from "../../atoms";
import { destinationData } from "./data";
import { DestinationCard } from "../../UI/Card/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../svg";

interface DestinationProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
}

const Destination: React.FC<DestinationProps> = ({
  className = "",
  title,
  CalledFromPage,
}) => {
  const handleOnClickSeeMore = () => {
    return;
  };

  const staticClassName =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 p-5";
  const finalClassName = (className + " " + staticClassName).trim();

  return (
    <div className="mt-6 md:mt-12 container mx-auto px-4 sm:px-6">
      <header className="text-center max-w-3xl mx-auto mb-6 md:mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight">
          Explore the beauty of our{" "}
          <span className="text-ui-primary">premier destinations</span>
        </h2>
        <p className="mt-3 text-gray-600 dark:text-gray-400 text-base md:text-lg">
          Curated trips across Nepal — from sacred pilgrimages to Himalayan treks
          and cultural journeys.
        </p>
      </header>

      <div className="flex justify-end px-5 -mt-2 mb-2">
        <Link to="/destination" className="inline-flex" onClick={() => window.scrollTo(0, 0)}>
          <span className="sr-only">View all destinations</span>
          <button
            type="button"
            className="flex items-center justify-center w-12 h-12 rounded-full bg-ui-primary hover:bg-ui-secondary text-white transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2"
            onClick={handleOnClickSeeMore}
          >
            <ArrowRight color="white" className="w-6 h-6" />
          </button>
        </Link>
      </div>

      <div className={finalClassName}>
        {destinationData?.map((service, index) => (
          <DestinationCard
            key={service.destination_id ?? index}
            {...service}
            onclick={handleOnClickSeeMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;

/** Parse price string e.g. "£3000" or "£1,200" to number (per person). */
function parsePrice(priceStr: string | undefined): number {
  if (!priceStr || typeof priceStr !== "string") return 0;
  const cleaned = priceStr.replace(/[£,$\s]/g, "");
  const n = parseFloat(cleaned);
  return Number.isNaN(n) ? 0 : n;
}

const BUDGET_OPTIONS: { value: number; label: string }[] = [
  { value: 0, label: "Any budget" },
  { value: 500, label: "Under £500" },
  { value: 1000, label: "Under £1,000" },
  { value: 2000, label: "Under £2,000" },
  { value: 3000, label: "Under £3,000" },
  { value: 5000, label: "Under £5,000" },
  { value: 10000, label: "Under £10,000" },
];

export const DestinationPageContent = () => {
  const [searchParams] = useSearchParams();
  const qFromUrl = searchParams.get("q") ?? "";
  const budgetFromUrl = Math.max(0, Number(searchParams.get("budget")) || 0);
  const [showLoader, setShowLoader] = React.useState(true);
  const [searchQuery, setSearchQuery] = React.useState(qFromUrl);
  const [maxBudget, setMaxBudget] = React.useState(budgetFromUrl);

  React.useEffect(() => {
    setSearchQuery(qFromUrl);
  }, [qFromUrl]);

  React.useEffect(() => {
    setMaxBudget(budgetFromUrl);
  }, [budgetFromUrl]);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  const filteredDestinations = React.useMemo(() => {
    let list = destinationData;
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase().trim();
      list = list.filter(
        (d) =>
          d.title.toLowerCase().includes(q) ||
          (d.description && d.description.toLowerCase().includes(q))
      );
    }
    if (maxBudget > 0) {
      list = list.filter((d) => parsePrice(d.price) <= maxBudget);
    }
    return list;
  }, [searchQuery, maxBudget]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  if (showLoader) {
    return (
      <div className="container mx-auto py-8 px-4">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      <header className="text-center mb-6 md:mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
          Top <span className="text-ui-primary">Destinations</span>
        </h1>
        <p className="mt-2 text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
          Search and explore our handpicked trips across Nepal.
        </p>
      </header>

      <div className="mb-6 md:mb-8 space-y-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 sm:gap-4">
          <label htmlFor="budget-filter" className="text-sm font-medium text-gray-700 shrink-0">
            Show destinations within budget:
          </label>
          <select
            id="budget-filter"
            value={maxBudget}
            onChange={(e) => setMaxBudget(Number(e.target.value))}
            className="px-4 py-2.5 rounded-lg border border-gray-300 text-gray-900 bg-white focus:ring-2 focus:ring-ui-primary focus:border-ui-primary text-sm font-medium"
          >
            {BUDGET_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="destination-search" className="sr-only">
          Search destinations by name or description
        </label>
        <div className="relative max-w-xl mx-auto">
          <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-400 dark:text-gray-500"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            id="destination-search"
            type="search"
            placeholder="Search by name or keyword (e.g. Everest, Kailash, trek)..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="block w-full pl-12 pr-4 py-3.5 text-gray-900 dark:text-white bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600 rounded-xl placeholder-gray-500 focus:ring-2 focus:ring-ui-primary focus:border-ui-primary transition-colors"
            autoComplete="off"
          />
          {searchQuery && (
            <button
              type="button"
              onClick={() => setSearchQuery("")}
              className="absolute inset-y-0 right-0 flex items-center pr-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
              aria-label="Clear search"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          )}
        </div>
        <p className="mt-2 text-center text-sm text-gray-500 dark:text-gray-400">
          {filteredDestinations.length === destinationData.length && !searchQuery && maxBudget === 0
            ? `${destinationData.length} destinations`
            : `${filteredDestinations.length} destination${filteredDestinations.length !== 1 ? "s" : ""} within your criteria`}
        </p>
      </div>

      {filteredDestinations.length === 0 ? (
        <div className="text-center py-10 px-4 rounded-xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
          <p className="text-gray-600 dark:text-gray-400 font-medium">
            No destinations match your budget or search.
          </p>
          <p className="mt-1 text-gray-500 dark:text-gray-500 text-sm">
            Try a higher budget, a different keyword, or clear filters to see all destinations.
          </p>
          <button
            type="button"
            onClick={() => { setSearchQuery(""); setMaxBudget(0); }}
            className="mt-4 px-5 py-2.5 rounded-lg bg-ui-primary hover:bg-ui-secondary text-white font-semibold transition-colors"
          >
            Clear filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredDestinations.map((destination) => (
            <DestinationCard
              key={destination.destination_id}
              {...destination}
            />
          ))}
        </div>
      )}
    </div>
  );
};
