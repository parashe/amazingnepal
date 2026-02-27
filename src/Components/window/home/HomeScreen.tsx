import React, { useState, useMemo, useRef, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { destinationData } from "../Destination/data";

const HERO_IMAGE = "/assets/carousel3.avif";
const MAX_RESULTS_SHOWN = 6;

export const HomeScreen: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim();
    if (!q) return [];
    const lower = q.toLowerCase();
    return destinationData.filter(
      (d) =>
        d.title.toLowerCase().includes(lower) ||
        (d.description && d.description.toLowerCase().includes(lower))
    );
  }, [searchQuery]);

  const hasQuery = searchQuery.trim().length > 0;

  const showPanel = showResults && hasQuery;
  const displayedResults = filteredDestinations.slice(0, MAX_RESULTS_SHOWN);
  const hasMore = filteredDestinations.length > MAX_RESULTS_SHOWN;

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setShowResults(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = searchQuery.trim();
    if (q) {
      navigate(`/destination?q=${encodeURIComponent(q)}`);
    } else {
      navigate("/destination");
    }
    setShowResults(false);
  };

  const handleSelectDestination = (destinationId: string) => {
    navigate(`/destination/${destinationId}`);
    setShowResults(false);
    setSearchQuery("");
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") setShowResults(false);
  };

  return (
    <section
      className="relative w-full min-h-[80vh] sm:min-h-[90vh] flex flex-col items-center justify-center overflow-visible py-8 sm:py-12 px-3 sm:px-6"
      aria-label="Home screen – discover Nepal"
    >
      {/* Background image – keep overflow-hidden so image doesn’t spill */}
      <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden>
        <img
          src={HERO_IMAGE}
          alt=""
          className="w-full h-full object-cover object-center scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70"
          aria-hidden
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-2xl mx-auto text-center">
        <p className="text-ui-primary/95 font-semibold uppercase tracking-[0.15em] sm:tracking-[0.2em] text-[10px] sm:text-xs mb-2 sm:mb-3 drop-shadow-sm">
          Amazing Nepal
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white tracking-tight leading-[1.15] drop-shadow-lg px-1">
          Discover the{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-ui-primary to-amber-200">
            Himalayas
          </span>
          <br />
          & beyond
        </h1>
        <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed drop-shadow-md px-1">
          Treks, cultural tours, and journeys across Nepal — start your adventure.
        </p>

        {/* Search + results – z-20 so dropdown appears above destination section below */}
        <div
          ref={containerRef}
          className="relative z-20 mt-2 sm:mt-4 w-full max-w-2xl mx-auto"
          onKeyDown={handleKeyDown}
        >
          <form onSubmit={handleSubmit} role="search" aria-label="Search destinations">
            {/* Search bar – input and button same height, aligned */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-0 bg-white/95 backdrop-blur-sm rounded-xl sm:rounded-full shadow-xl shadow-black/20 overflow-visible border border-white/20 sm:items-stretch">
              <label htmlFor="home-search" className="sr-only">
                Search by name or keyword (e.g. Everest, Annapurna, trek)
              </label>
              <div className="relative flex-1 flex items-center min-h-[44px] sm:h-12">
                <span
                  className="absolute left-3.5 top-1/2 -translate-y-1/2 flex items-center text-gray-400 pointer-events-none sm:relative sm:top-0 sm:left-0 sm:translate-y-0 sm:pl-4"
                  aria-hidden
                >
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </span>
                <input
                  id="home-search"
                  type="search"
                  value={searchQuery}
                  onChange={(e) => {
                    setSearchQuery(e.target.value);
                    setShowResults(true);
                  }}
                  onFocus={() => setShowResults(true)}
                  placeholder="Search by name or keyword..."
                  className="w-full h-full min-h-[44px] sm:min-h-0 py-2.5 sm:py-0 sm:h-full pl-10 sm:pl-2 pr-3 rounded-xl sm:rounded-none border-0 bg-transparent text-gray-900 placeholder-gray-500 text-sm sm:text-base focus:ring-0 outline-none min-w-0"
                  autoComplete="off"
                  aria-expanded={showPanel ? true : false}
                  aria-controls="home-search-results"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto min-h-[46px] sm:h-full sm:min-w-[100px] py-2.5 sm:py-0 px-4 sm:px-6 rounded-xl  sm:rounded-full text-sm font-semibold bg-gradient-to-r from-ui-primary to-ui-secondary hover:opacity-95 text-white shadow-md shrink-0 border-0 cursor-pointer flex items-center justify-center"
              >
                Explore
              </button>
            </div>
          </form>

          {/* Results dropdown – high z-index so it appears above destination cards section */}
          {showPanel && (
            <div
              id="home-search-results"
              role="listbox"
              className="absolute left-0 right-0 top-full mt-2 rounded-2xl bg-white shadow-2xl border border-gray-200 overflow-hidden z-[100] max-h-[min(70vh,400px)] overflow-y-auto"
              aria-label="Search results"
            >
              {filteredDestinations.length === 0 ? (
                <div className="p-6 text-center text-gray-500">
                  <p className="font-medium">No trips match your search.</p>
                  <p className="text-sm mt-1">Try a different keyword.</p>
                </div>
              ) : (
                <>
                  <div className="px-3 py-2 border-b border-gray-100 bg-gray-50">
                    <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      {filteredDestinations.length} trip{filteredDestinations.length !== 1 ? "s" : ""} found
                    </p>
                  </div>
                  <ul className="divide-y divide-gray-100">
                    {displayedResults.map((d) => (
                      <li key={d.destination_id}>
                        <button
                          type="button"
                          onClick={() => handleSelectDestination(d.destination_id)}
                          className="w-full flex items-center gap-3 p-3 sm:p-4 text-left hover:bg-ui-primary/5 transition-colors focus:outline-none focus:bg-ui-primary/5 focus-visible:ring-2 focus-visible:ring-ui-primary focus-visible:ring-inset"
                          role="option"
                        >
                          <div className="shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100">
                            {d.imageUrl?.[0]?.url ? (
                              <img
                                src={d.imageUrl[0].url}
                                alt=""
                                className="w-full h-full object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center text-gray-400">
                                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14" />
                                </svg>
                              </div>
                            )}
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-semibold text-gray-900 line-clamp-2">{d.title}</p>
                            <p className="text-sm text-gray-500 mt-0.5 flex items-center gap-2 flex-wrap">
                              {d.duration && <span>{d.duration}</span>}
                              {d.price && d.price !== "N/A" && (
                                <span className="text-ui-primary font-medium">{d.price} / person</span>
                              )}
                            </p>
                          </div>
                          <span className="shrink-0 text-gray-400" aria-hidden>
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                  {hasMore && (
                    <div className="p-3 border-t border-gray-100 bg-gray-50">
                      <Link
                        to={searchQuery.trim() ? `/destination?q=${encodeURIComponent(searchQuery.trim())}` : "/destination"}
                        onClick={() => setShowResults(false)}
                        className="block w-full py-2.5 text-center text-sm font-semibold text-ui-primary hover:text-ui-secondary transition-colors"
                      >
                        View all {filteredDestinations.length} results →
                      </Link>
                    </div>
                  )}
                </>
              )}
            </div>
          )}

          <p className="mt-1.5 sm:mt-2 text-[11px] sm:text-xs text-white/80 text-center">
            {hasQuery
              ? `${filteredDestinations.length} trip${filteredDestinations.length !== 1 ? "s" : ""} match — select one or view all`
              : "Find treks, tours, and pilgrimage trips across Nepal"}
          </p>
        </div>
      </div>
    </section>
  );
};
