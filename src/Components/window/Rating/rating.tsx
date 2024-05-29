import React from "react";
import nepalRatings from "./data"; // Importing the dummy rating data
import { Modal, RatingStars } from "../../atoms";
import { ArrowRight, CrossIcon, PencilIcon, PersonIcon } from "../../svg";
import { AboutContent } from "../About/about";
import AddRatingForm from "./create_rating";

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
  const [openCreateRating, setOpenCreateRating] = React.useState(false);

  return (
    <div className="w-full h-full">
      <div className="text-center flex flex-wrap justify-between">
        <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide py-5">
          What Our Customers Say
        </h4>
        <div className="flex gap-2 items-center justify-center">
          <button
            onClick={() => setOpenCreateRating(true)}
            className="bg-green-500 rounded-full px-3 py-3 font-bold text-white hover:bg-green-600 transition duration-300 uppercase"
          >
            <PencilIcon className="w-3 h-3" color="white" />
          </button>

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

      {openCreateRating && (
        <AddRatingForm onClose={() => setOpenCreateRating(false)} />
      )}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
}

export const SeeAllModal = ({ onClose }: ModalProps) => (
  <Modal onClose={onClose}>
    <div className="bg-black bg-opacity-90 fixed inset-0 rounded-lg max-h-full  overflow-y-auto overflow-x-hidden z-50 justify-center items-center md:inset-0">
      <div className="px-1 sm:px-20 py-5 md:py-10 w-full max-w-full max-h-full">
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
