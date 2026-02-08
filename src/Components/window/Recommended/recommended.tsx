import React from "react";
import { Link } from "react-router-dom";
import { RecommendedCard } from "../../UI/Card/card";
import { recommendData } from "./data";

const RECOMMENDED_SHOWN_ON_HOME = 4;

interface RecommendedProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
  /** Limit number of cards (e.g. on home). Omit to show all. */
  limit?: number;
}

const Recommended: React.FC<RecommendedProps> = ({
  className = "",
  title,
  CalledFromPage,
  limit = RECOMMENDED_SHOWN_ON_HOME,
}) => {
  const items = limit > 0 ? recommendData.slice(0, limit) : recommendData;
  const hasMore = limit > 0 && recommendData.length > limit;

  return (
    <section id="recommended" className="relative mt-6 md:mt-8 py-6 md:py-8">
      {/* Subtle background strip */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-transparent dark:from-gray-900/50 dark:to-transparent pointer-events-none" aria-hidden="true" />
      <div className="relative container mx-auto px-4 sm:px-6">
        <header className="text-center max-w-3xl mx-auto mb-5 md:mb-6">
          <div className="inline-flex items-center gap-2 rounded-full bg-ui-primary/10 dark:bg-ui-primary/20 px-3 py-1 mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-ui-primary" aria-hidden="true" />
            <p className="text-xs font-semibold text-ui-primary uppercase tracking-widest">
              What to do in Nepal
            </p>
          </div>
          <h2 className="text-xl md:text-3xl font-bold text-gray-900 dark:text-white leading-tight tracking-tight">
            Top{" "}
            <span className="text-ui-primary">attractions</span> to experience in{" "}
            <span className="text-ui-primary">Nepal</span>
          </h2>
          <p className="mt-3 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base">
            From cultural wonders in the Kathmandu Valley to the stunning beauty of the Himalayas.
          </p>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {items.map((item) => (
            <RecommendedCard key={item.id} {...item} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-5 text-center">
            <Link
              to="/recommended"
              className="inline-flex items-center gap-2 rounded-lg border-2 border-ui-primary bg-transparent px-4 py-2 text-sm font-semibold text-ui-primary transition-colors hover:bg-ui-primary hover:text-white dark:border-ui-primary dark:hover:bg-ui-primary dark:hover:text-white"
            >
              View all attractions
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default Recommended;
