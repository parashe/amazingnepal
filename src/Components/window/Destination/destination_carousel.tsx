import React from "react";
import { destinationData } from "./data";
import { DestinationCard } from "../../UI/Card/card";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

interface DestinationProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
}
const DestinationCarousel: React.FC<DestinationProps> = ({
  className,
  title,
  CalledFromPage,
}) => {
  const handleOnClickSeeMore = () => {
    return ;
  };


  
  return (
    <div className="mt-10 md:mt-20 container mx-auto">
      {CalledFromPage ? (
        <h1 className="text-2xl lg:text-4xl font-black text-black uppercase dark:text-white leading-relaxed">
          {" "}
          More Destinations
        </h1>
      ) : (
        <div className="text-center mx-auto w-full md:max-w-4xl gap-6">
          <div className="flex"></div>
          <div className="flex items-center justify-center ">
            <h2 className="text-2xl lg:text-4xl font-black text-black uppercase dark:text-white leading-relaxed">
              <span className=" font-black   text-ui-primary lg:font-extrabold ">
                EXPLORE{" "}
              </span>{" "}
              <span>
                THE UNPARALLELED{" "}
                <span className=" font-black  text-ui-primary lg:font-extrabold ">
                  BEAUTY{" "}
                </span>{" "}
                OF OUR PREMIER{" "}
                <span className=" font-black  text-ui-primary lg:font-extrabold ">
                  DESTINATIONS{" "}
                </span>{" "}
              </span>
            </h2>
          </div>

          <p className="text-neutral-600 p-2 md:mt-3 text-xs dark:text-neutral-400">
            Take an unforgettable trip to our carefully chosen top destinations,
            where luxury meets exciting adventure. Enjoy the best of comfort as
            you explore stunning landscapes, experience lively cultures, and
            create memories that will last forever.
          </p>
        </div>
      )}

      {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
      <div className="flex flex-row justify-end px-5">
        <div className="text-center relative group ">
          <Link to="/destination">
            <button
              className=" animate-bounce mx-auto bg-ui-primary rounded-full  px-3 py-3 font-bold text-white hover:bg-ui-secondary transition duration-300 uppercase"
              onClick={handleOnClickSeeMore}
            >
              <ArrowRight color="white" className="w-6 h-6" />
            </button>
          </Link>
        </div>
      </div>

      <div className="md:mt-20 mt-5 md:mb-32 px-5 md:px-0">
        <MultipleCarousel data={destinationData} />
      </div>
      {/* <div className={finalClassName}>
        {destinationData?.slice(0, 6).map((service, index) => (
          <DestinationCard
            key={index}
            {...service}
            onclick={handleOnClickSeeMore}
          />
        ))}
      </div> */}
    </div>
  );
};

export default DestinationCarousel;

export const MultipleCarousel = ({ data }: any) => {
  // Your responsive settings for the carousel
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  const CustomButton = ({ onClick, children }: any) => (
    <button
      className="custom-carousel-button bg-ui-red"
      onClick={onClick}
      style={{ backgroundColor: "red" }}
    >
      {children}
    </button>
  );

  return (
    <Carousel
      customButtonGroup={<CustomButton />}
      swipeable={true} // Allow swipe gestures
      draggable={true} // Allow dragging
      showDots={false} // Hide the dots
      responsive={responsive}
      minimumTouchDrag={80}
      ssr={true}
      infinite={true}
      autoPlay={true} // Enable autoplay
      autoPlaySpeed={3000} // Set autoplay speed to 3 seconds
      keyBoardControl={true}
      customTransition="transform 500ms ease-in-out" // Set custom transition for sliding animation
      transitionDuration={500} // Set transition duration
      containerClass="carousel-container"
      itemClass="carousel-item-padding-40-px"
    >
      {/* Map through the data and return a DestinationCard for each item */}
      {data.map((item: any, index: number) => (
        <div key={index} className="carousel-item">
          <DestinationCard {...item} />
        </div>
      ))}
    </Carousel>
  );
};
