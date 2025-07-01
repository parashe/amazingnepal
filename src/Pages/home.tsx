import React from "react";
import Layout from "../Components/layout";
import Whywe from "../Components/window/Whywe/whywe";
import Rating from "../Components/window/Rating/rating";
import Recommended from "../Components/window/Recommended/recommended";
import { HomeLoadingSkeleton } from "../Components/atoms";

import { HomeFirstScreen } from "../Components/window/home/home_first_screen";

export const HomePage = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

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
          <div>
            <HomeLoadingSkeleton />
          </div>
        </>
      ) : (
        <Layout>
        <HomeFirstScreen />
        <div style={{ marginTop: '2rem' }} /> {/* Add this line */}
        <Recommended />
        <div className="h-20"></div>
        <Whywe />
        <Rating />
      </Layout>
      )}
    </>
  );
};
