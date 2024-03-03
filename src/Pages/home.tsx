import React from "react";
import Layout from "../Components/layout";
import { Carousel } from "../Components/window/Carousel";
import Whywe from "../Components/window/Whywe/whywe";
import Destination from "../Components/window/Destination/destination";
import Rating from "../Components/window/Rating/rating";
import Recommended from "../Components/window/Recommended/recommended";
import { GalleryLoadingSkeleton, LoadingSkeleton } from "../Components/atoms";

export const HomePage = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {showLoader ? (
        <>
          <div className="text-center">
            <GalleryLoadingSkeleton />
            <LoadingSkeleton />
          </div>
        </>
      ) : (
        <Layout>
          <Carousel />

          {/*      
      <Services/> */}
          <Destination />
          <Recommended />
          <div className="h-20"></div>
          <Whywe />
          <Rating />
        </Layout>
      )}
    </>
  );
};
