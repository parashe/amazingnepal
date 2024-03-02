import React from "react";
import Layout from "../Components/layout";
import Whywe from "../Components/window/Whywe/whywe";
import AboutRating from "../Components/window/Rating/rating";

export const AboutPage = () => {

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <Whywe />
        <AboutRating />
      </Layout>
    </>
  );
};
