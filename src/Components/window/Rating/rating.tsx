import React from "react";
import nepalRatings from "./data";
import { Modal, RatingStars } from "../../atoms";
import { ArrowRight, PencilIcon } from "../../svg";
import { AboutContent } from "../About/about";
import AddRatingForm from "./create_rating";

/** Section: About us only. Use on Home (variant="home") and About page (variant="full"). No background. */
export const AboutOnlySection = ({ variant = "full" }: { variant?: "home" | "full" }) => (
  <section className="py-8 sm:py-10 md:py-12 lg:py-14">
    <div className={`container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 ${variant === "home" ? "max-w-4xl" : "max-w-7xl"}`}>
      <AboutContent variant={variant} />
    </div>
  </section>
);

/** Section: What our customers say (reviews only). Use on Service page. */
export const CustomerReviewsSection = () => (
  <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50/90 dark:bg-gray-900/40">
    <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-4xl">
      <Rating />
    </div>
  </section>
);

/** Legacy: About + Reviews in two columns. Kept for reference. */
const AboutRating = () => {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20 bg-gray-50/90 dark:bg-gray-900/40">
      <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-start">
          <AboutContent />
          <div className="w-full min-w-0">
            <Rating />
          </div>
        </div>
      </div>
    </section>
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

const RatingItem = ({ rating }: RatingProps) => (
  <div className="p-4 sm:p-5 md:p-6 rounded-xl sm:rounded-2xl bg-white dark:bg-gray-800/90 border border-gray-100 dark:border-gray-700/50 shadow-sm hover:shadow-md transition-shadow duration-200">
    <div className="flex items-start sm:items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
      <img
        src={rating?.image}
        alt={`${rating?.name ?? "Customer"} – Nepal travel customer review, Amazing Nepal`}
        className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 shrink-0 rounded-full object-cover ring-2 ring-gray-100 dark:ring-gray-700"
      />
      <div className="min-w-0 flex-1">
        <span className="font-semibold text-gray-900 dark:text-white block truncate">
          {rating?.name}
        </span>
        <div className="mt-0.5 sm:mt-1">
          <RatingStars rating={rating.rating} />
        </div>
        <p className="text-gray-500 dark:text-gray-400 mt-1 sm:hidden">
          {rating?.date}
        </p>
      </div>
      <p className="hidden sm:block text-gray-500 dark:text-gray-400 shrink-0">
        {rating?.date}
      </p>
    </div>
    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
      {rating?.review}
    </p>
  </div>
);

const Rating = () => {
  const [open, setOpen] = React.useState(false);
  const [openCreateRating, setOpenCreateRating] = React.useState(false);

  return (
    <div className="w-full min-w-0">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-4 mb-5 sm:mb-6">
        <h3 className="text-gray-900 dark:text-white">
          What our customers say
        </h3>
        <div className="flex gap-2 flex-wrap">
          <button
            type="button"
            onClick={() => setOpenCreateRating(true)}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl bg-ui-primary hover:bg-ui-secondary text-white text-sm font-medium transition-colors active:scale-[0.98]"
          >
            <PencilIcon className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" color="white" />
            <span>Review</span>
          </button>
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="inline-flex items-center justify-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 sm:py-2.5 rounded-lg sm:rounded-xl border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium transition-colors active:scale-[0.98]"
          >
            <span>All</span>
            <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" color="#6b7280" />
          </button>
        </div>
      </div>
      <div className="space-y-3 sm:space-y-4">
        {nepalRatings?.slice(0, 2).map((rating, index) => (
          <RatingItem key={index} rating={rating} />
        ))}
      </div>
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
    <div
      className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 overflow-y-auto overflow-x-hidden overscroll-contain"
      onClick={(e) => e.stopPropagation()}
    >
      <header className="sticky top-0 z-10 flex items-center justify-between gap-4 px-4 sm:px-5 md:px-6 py-3 sm:py-4 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 ">
        <h3 className="text-gray-900 dark:text-white truncate">
          All reviews
        </h3>
        <button
          type="button"
          onClick={onClose}
          className="p-2 sm:p-2.5 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors shrink-0 touch-manipulation"
          aria-label="Close"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>
      <div className="max-w-4xl mx-auto px-4 sm:px-5 md:px-6 py-5 sm:py-6 md:py-8 pb-[env(safe-area-inset-bottom)]">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 md:gap-6">
          {nepalRatings?.map((rating, index) => (
            <RatingItem key={index} rating={rating} />
          ))}
        </div>
      </div>
    </div>
  </Modal>
);
