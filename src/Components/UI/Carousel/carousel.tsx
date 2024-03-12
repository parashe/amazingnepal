import React, { useState } from "react";
import { Button } from "../../atoms";
import { Link } from "react-router-dom";

interface CarouselProps {
  slides: string[];
}

const CarouselLayout: React.FC<CarouselProps> = ({ slides }) => {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setActiveSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  return (
    <div className="relative w-full  ">
      <div
        className="relative w-full  h-[275px] lg:h-full lg:max-h-[700px]  transition duration-500"
        data-carousel="static"
        data-carousel-auto="true"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`${
              index === activeSlide ? "block" : "hidden"
            } duration-700 ease-out`}
            data-carousel-item={index === activeSlide ? "active" : ""}
          >
            <img
              src={slide}
              className="lg:brightness-50   h-[275px]  lg:h-full lg:w-full lg:max-h-[600px] w-full object-fill aspect-[19/10] object-center rounded-lg shadow-md"
              alt="slide"
              loading="lazy"
            />
          </div>
        ))}

        <button
          type="button"
          className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-prev
          onClick={prevSlide}
        >
          <span className="inline-flex items-center justify-center  lg:w-12 lg:h-12 w-10 h-10 rounded-full bg-pink-500 dark:bg-gray-800/30 group-hover:bg-pink-600 dark:group-hover:bg-pink-600 ">
            <svg
              className="lg:w-5 lg:h-5 w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 1 1 5l4 4"
              />
            </svg>
            <span className="sr-only">Previous</span>
          </span>
        </button>
        {/* Previous button content */}

        <button
          type="button"
          className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
          data-carousel-next
          onClick={nextSlide}
        >
          <span className="inline-flex  lg:w-12 lg:h-12 items-center justify-center w-10 h-10 rounded-full bg-pink-500 dark:bg-gray-800/30 group-hover:bg-pink-600 dark:group-hover:bg-pink-600 ">
            <svg
              className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
            <span className="sr-only">Next</span>
          </span>
        </button>
      </div>
      <div className=" md:block absolute top-1/2 left-1/2  -translate-y-1/2 md:left-1/3 -translate-x-1/2">
        <CarouselCard />
      </div>
    </div>
  );
};

export default CarouselLayout;

const CarouselCard = () => {
  return (
    <>
      <div className=" w-[250px] md:w-full max-h-[250px] lg:h-full leading-relaxed md:max-h-[500px] opacity-65 md:opacity-75  px-5 py-8 lg:bg-white max-w-[520px] bg-ui-third-theme border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        {/* <a href="/#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Noteworthy technology acquisitions 2021 since th {}
          </h5>
        </a> */}
        <p className=" text-center leading-relaxed  mb-3 md:pt-5  text-gray-900 lg:leading-10  ">
          <span className=" font-bold lg:text-5xl text-black  lg:font-extrabold ">
            <span className=" bg-gradient-to-r from-blue-500 via-red-400 to-pink-500 inline-block text-transparent bg-clip-text font-extrabold">
              Discover{" "}
            </span>{" "}
            stunning global destinations{" "}
            <span className="bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 inline-block text-transparent bg-clip-text font-extrabold">
              {" "}
              with us.
            </span>{" "}
          </span>{" "}
          <span className="hidden lg:block text-xs leading-relaxed">
            Whether you seek{" "}
            <span className="text-ui-purple-dark font-bold">
              mountains, cultural landmarks, or thrilling adventures,{" "}
            </span>{" "}
            we have the perfect journey for you.
          </span>
        </p>
        <Link to="/destination">
        <Button
          onClick={() => {}}
          className="px-3 py-2 text-xs uppercase font-bold rounded-sm bg-gradient-to-r from-blue-400 via-red-400 to-pink-500   hover:from-pink-600 hover:via-red-400 hover:to-blue-500 transition duration-50 text-white cursor-pointer"
        >
          Explore more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </Button>
        </Link>
      </div>
    </>
  );
};
