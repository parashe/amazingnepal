import React from "react";
import Layout from "../Components/layout";
import { AboutOnlySection } from "../Components/window/Rating/rating";
import AddRatingForm from "../Components/window/Rating/create_rating";
import Recommended from "../Components/window/Recommended/recommended";
import { HowItWorks } from "../Components/window/HowItWorks/howItWorks";
import { HomeLoadingSkeleton } from "../Components/atoms";
import { PencilIcon } from "../Components/svg";
import { HomeFirstScreen } from "../Components/window/home/home_first_screen";
import { WhatWeDoStrip } from "../Components/window/home/WhatWeDoStrip";

export const HomePage = () => {
  const [showLoader, setShowLoader] = React.useState(true);
  const [openWriteReview, setOpenWriteReview] = React.useState(false);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 1000);
    return () => clearTimeout(timeoutId);
  }, []);

  React.useEffect(() => {
    if (window.location.hash !== "#recommended") {
      window.scrollTo(0, 0);
    }
  }, []);

  React.useEffect(() => {
    if (!showLoader && window.location.hash === "#recommended") {
      const t = setTimeout(() => {
        document.getElementById("recommended")?.scrollIntoView({ behavior: "smooth" });
      }, 100);
      return () => clearTimeout(t);
    }
  }, [showLoader]);

  return (
    <>
      {showLoader ? (
        <div>
          <HomeLoadingSkeleton />
        </div>
      ) : (
        <Layout>
          <HomeFirstScreen />
          <div className="mt-6 md:mt-8" />
          <Recommended />
          <WhatWeDoStrip />
          <HowItWorks />
          <div className="h-12" />
          <AboutOnlySection variant="home" />
          <div className="container mx-auto px-4 sm:px-5 md:px-6 max-w-4xl py-6 sm:py-8">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 p-5 sm:p-6 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50">
              <p className="text-gray-700 dark:text-gray-300 font-medium">
                Share your experience with us
              </p>
              <button
                type="button"
                onClick={() => setOpenWriteReview(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ui-primary hover:bg-ui-secondary text-white font-semibold text-sm transition-colors shrink-0"
              >
                <PencilIcon className="w-4 h-4" color="white" />
                Write a review
              </button>
            </div>
          </div>
          {openWriteReview && (
            <AddRatingForm onClose={() => setOpenWriteReview(false)} />
          )}
        </Layout>
      )}
    </>
  );
};
