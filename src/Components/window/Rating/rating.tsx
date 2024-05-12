import React from "react";
import nepalRatings from "./data"; // Importing the dummy rating data
import { Modal, RatingStars } from "../../atoms";
import { ArrowRight, CrossIcon, PersonIcon } from "../../svg";

const AboutRating = () => {
  return (
    <>
      <div className="container mx-auto ">
        <div className=" w-full h-full py-8 md:py-16">
          <div className="flex flex-wrap ">
            <div className="w-full  lg:w-1/2  p-4">
              <AboutContent />
            </div>
            <div className="w-full lg:w-1/2  p-4">
              <Rating />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutRating;

interface RatingProps {
  rating: {
    name: string;
    image: string;
    date: string;
    review: string;
    rating: number;
  };
}
const RatingItem = ({ rating }: RatingProps) => {
  const paragraph =
    "text-xs p-1 text-justify text-center leading-relaxed text-gray-500 text-break-all";

  return (
    <div className="flex flex-wrap mt-2 px-0 sm:px-5 py-3 bg-white bg-opacity-90 rounded-lg shadow-lg">
      <div className="w-full text-center md:w-1/5 p-4">
        <img
          src={rating?.image}
          alt={rating?.name}
          className="w-20 h-20 mb-3 rounded-full shadow-lg"
        />
      </div>
      <div className="w-full md:w-4/5 p-4 space-y-2">
        <p className={paragraph}>{rating?.review}</p>
        <p className="text-xs font-bold text-neutral-400 text-justify">
          {rating?.date}
        </p>
        <div className="py-3 flex flex-wrap justify-start gap-2">
          <p className="text-sm font-bold text-justify">
            <strong>{rating?.name}</strong>
          </p>
          <RatingStars rating={rating.rating} />
        </div>
      </div>
    </div>
  );
};

const Rating = () => {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="w-full h-full">
      <div className="text-center flex flex-wrap justify-between">
        <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide py-5">
          What Our Customers Say
        </h4>
        <div className="flex items-center justify-center">
          <button
            className=" animate-bounce  bg-pink-500 rounded-full  px-3 py-3 font-bold text-white hover:bg-pink-600 transition duration-300 uppercase"
            onClick={() => setOpen(true)}
          >
            <ArrowRight color="white" className="w-3 h-3" />
          </button>
        </div>
      </div>
      {nepalRatings?.slice(0, 2).map((rating, index) => (
        <RatingItem key={index} rating={rating} />
      ))}
      {open && <SeeAllModal onClose={() => setOpen(false)} />}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
}

export const SeeAllModal = ({ onClose }: ModalProps) => (
  <Modal onClose={onClose}>
    <div className="bg-black bg-opacity-50 fixed inset-0 rounded-lg max-h-full  overflow-y-auto overflow-x-hidden z-50 justify-center items-center md:inset-0">
      <div className="px-1 sm:px-10 py-5 w-full max-w-full max-h-full">
        <div className="flex justify-end">
          <div
            className="justify-end cursor-pointer rounded-full bg-white px-2 py-2 hover:bg-yellow-50"
            onClick={onClose}
          >
            <CrossIcon className="w-6 h-6" color="red" />
          </div>
        </div>
        <div className="flex justify-center items-center min-w-[300px] max-w-[400px] py-5 px-5 rounded-full bg-gradient-to-r from-blue-500 via-yellow-500 to-pink-500 opacity-100">
  <h4 className="text-lg font-bold uppercase tracking-wide text-white">
    What Our Customers Say
  </h4>
  <PersonIcon className="w-5 h-5 mt-1 ml-2" color="white" />
</div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
          {nepalRatings?.map((rating, index) => (
            <RatingItem key={index} rating={rating} />
          ))}
        </div>
      </div>
    </div>
  </Modal>
);

export const AboutContent = () => {
  const paragraph = `text-sm  p-3 text-justify font-normal  cursor-pointer cursor-pointer leading-relaxed lg:leading-relaxed text-gray-700 `;

  return (
    <div className="w-full h-full ">
      <div className="text-center">
        <h4 className="text-lg  font-bold text-gray-800 uppercase tracking-wide py-5">
          About Amazing Nepal
        </h4>
      </div>

      <p className={paragraph}>
        Welcome to Amazing Nepal, your gateway to exploring the breathtaking
        beauty of the Himalayas and experiencing the rich cultural heritage of
        Nepal. Based in the United Kingdom, Amazing Nepal is dedicated to
        providing unparalleled tourism experiences that showcase the wonders of
        this Himalayan nation.
        <br />
        <br />
        At Amazing Nepal, we are passionate about sharing the magic of Nepal
        with travelers from around the world. Our team at Amazing Nepal is
        committed to delivering top-notch travel services, ensuring that every
        journey with us is nothing short of extraordinary. From the majestic
        peaks of the Himalayas to the vibrant streets of Kathmandu, Amazing
        Nepal offers a wide range of meticulously crafted tours and expeditions
        that cater to every traveler's preferences. Whether you're seeking a
        thrilling trekking adventure, a cultural immersion experience, or a
        spiritual journey, we have the perfect itinerary for you.
        <br />
        <br />
        Our team comprises experienced and enthusiastic leaders who are experts
        in organizing tours, treks, and expeditions across Nepal. With our
        in-depth knowledge of the region and dedication to customer
        satisfaction, we guarantee an unforgettable travel experience for our
        clients. At Amazing Nepal, we prioritize customer satisfaction above all
        else. We provide personalized trip itineraries tailored to your
        preferences, ensuring that every aspect of your journey exceeds your
        expectations.
        <br />
        <br />
        {/* <div className="  ">
          <Button
            onClick={handleClick}
            className="px-6 py-2 rounded-sm text-xs bg-gradient-to-r from-pink-600 to-purple-500  font-medium hover:from-pink-600 hover:to-purple-600 transition duration-50 text-white cursor-pointer"
          >
            Read More
          </Button>
        </div> */}
        {/* From arranging accommodations to organizing transportation, we take care
        of every detail so that you can focus on enjoying your adventure.
        Whether you're a seasoned traveler or embarking on your first trip to
        Nepal, Amazing Nepal is here to make your travel dreams a reality.
        Contact us today to start planning your unforgettable journey to the
        Land of the Himalayas. */}
      </p>
    </div>
  );
};
