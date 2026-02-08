import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

interface CarouselProps {
  slides: string[];
  autoPlayInterval?: number;
}

const CarouselLayout: React.FC<CarouselProps> = ({
  slides,
  autoPlayInterval = 6000,
}) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  }, [slides.length]);

  const prevSlide = useCallback(() => {
    setActiveSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  }, [slides.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(timer);
  }, [activeSlide, autoPlayInterval, nextSlide]);

  return (
    <section
      className="relative w-full overflow-hidden"
      aria-label="Featured destinations carousel"
    >
      {/* Mobile: compact image carousel + CTA below */}
      {slides?.length > 0 && (
        <div className="md:hidden">
          <div className="relative h-[220px] sm:h-[260px]">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ease-in-out ${
                  index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                aria-hidden={index !== activeSlide}
              >
<img
                src={slide}
                alt="Nepal travel – Himalayas and trekking destination, Amazing Nepal"
                className="w-full h-full object-cover object-center"
                loading={index === 0 ? "eager" : "lazy"}
                  draggable={false}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" aria-hidden="true" />
              </div>
            ))}
            <div className="absolute inset-y-0 left-0 z-20 flex items-center pl-2">
              <button
                type="button"
                onClick={prevSlide}
                className="p-2 rounded-full bg-white/90 text-gray-800 shadow"
                aria-label="Previous slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>
            <div className="absolute inset-y-0 right-0 z-20 flex items-center pr-2">
              <button
                type="button"
                onClick={nextSlide}
                className="p-2 rounded-full bg-white/90 text-gray-800 shadow"
                aria-label="Next slide"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            <div className="absolute bottom-2 left-1/2 -translate-x-1/2 z-20 flex gap-1.5">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setActiveSlide(i)}
                  className={`h-1.5 rounded-full transition-all ${
                    i === activeSlide ? "w-5 bg-white" : "w-1.5 bg-white/60"
                  }`}
                  aria-label={`Slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
          <div className="bg-white px-4 py-3 shadow-sm border-b border-gray-100">
            <p className="text-gray-900 font-bold text-center text-lg md:text-xl">Discover stunning destinations with us</p>
          </div>
        </div>
      )}
      {slides?.length === 0 && (
        <div className="md:hidden py-12 px-6 bg-gray-50">
          <HeroTextContent className="max-w-lg mx-auto text-center" />
        </div>
      )}

      {/* Desktop: full carousel with images */}
      <div className="hidden md:block relative h-[520px] lg:h-[620px]">
        {slides?.length > 0 && (
          <>
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
              index === activeSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
            aria-hidden={index !== activeSlide}
          >
            <img
              src={slide}
              alt="Nepal travel – Himalayas trekking and tours, Amazing Nepal"
              className="w-full h-full object-cover object-center"
              loading={index === 0 ? "eager" : "lazy"}
              draggable={false}
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent"
              aria-hidden="true"
            />
          </div>
        ))}

        {/* Arrow buttons - z-30 so they sit above the card overlay and receive clicks */}
        <div className="absolute inset-y-0 left-0 z-30 flex items-center pl-3 md:pl-6">
          <button
            type="button"
            onClick={prevSlide}
            className="p-3 rounded-full bg-white/95 hover:bg-white text-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent border border-white/50"
            aria-label="Previous slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        </div>
        <div className="absolute inset-y-0 right-0 z-30 flex items-center pr-3 md:pr-6">
          <button
            type="button"
            onClick={nextSlide}
            className="p-3 rounded-full bg-white/95 hover:bg-white text-gray-800 shadow-xl hover:shadow-2xl hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-transparent border border-white/50"
            aria-label="Next slide"
          >
            <svg className="w-5 h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" strokeWidth={2.5} viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        <div className="absolute inset-0 z-20 flex items-center justify-center md:justify-start px-4 md:pl-14 lg:pl-24">
          <CarouselCard />
        </div>

        {/* Dots - z-30 so they sit above the card overlay */}
        <div
          className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2.5"
          role="tablist"
          aria-label="Slide indicators"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              type="button"
              role="tab"
              aria-selected={index === activeSlide}
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => setActiveSlide(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeSlide
                  ? "w-9 h-2.5 bg-white shadow-lg shadow-white/30"
                  : "w-2.5 h-2.5 bg-white/70 hover:bg-white hover:scale-125"
              }`}
            />
          ))}
        </div>
          </>
        )}
      </div>
    </section>
  );
};

export default CarouselLayout;

/** Shared hero text + CTA (used on mobile as text-only, on desktop inside CarouselCard) */
const HeroTextContent = ({ className = "" }: { className?: string }) => (
  <div className={className}>
    <div className="flex items-center justify-center gap-2 mb-3 md:justify-start">
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-ui-primary/10">
        <svg className="h-4 w-4 text-ui-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </span>
      <p className="text-ui-primary font-bold uppercase tracking-[0.2em]">
        Amazing Nepal
      </p>
    </div>
    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900 tracking-tight leading-tight mb-3">
      Discover stunning destinations with us
    </h2>
    <p className="text-gray-600 leading-relaxed mb-6 max-w-md md:max-w-none">
      Mountains, cultural landmarks, and unforgettable adventures — we have the perfect journey for you.
    </p>
    <Link
      to="/destination"
      className="group inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-ui-primary to-ui-secondary text-white font-semibold text-base uppercase tracking-wide shadow-lg shadow-ui-primary/25 hover:shadow-xl hover:shadow-ui-primary/30 hover:-translate-y-0.5 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2 md:justify-start"
    >
      Explore destinations
      <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
      </svg>
    </Link>
  </div>
);

const CarouselCard = () => {
  return (
    <div className="w-full max-w-lg text-center md:text-left">
      <div className="relative overflow-hidden rounded-2xl bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm shadow-2xl border border-white/20 dark:border-gray-700/50 px-6 py-6 md:px-8 md:py-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center justify-center md:justify-start gap-2">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-ui-primary/15 dark:bg-ui-primary/25">
              <svg className="h-5 w-5 text-ui-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              </svg>
            </span>
            <p className="text-ui-primary font-semibold uppercase tracking-widest text-sm">
              Amazing Nepal
            </p>
          </div>
          <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
            Treks, tours & travel support for Nepal and the Himalayas
          </p>
          <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Where the Himalayas meet ancient culture
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mt-1 mb-2 leading-relaxed">
            From snow-capped peaks to sacred temples — trek, explore, and discover the soul of the roof of the world.
          </p>
          <div className="mt-2">
            <Link
              to="/destination"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-ui-primary hover:bg-ui-secondary text-white font-semibold text-base transition-all focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900 shadow-lg shadow-ui-primary/25 hover:shadow-xl hover:shadow-ui-primary/30 hover:-translate-y-0.5"
            >
              Explore destinations
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
