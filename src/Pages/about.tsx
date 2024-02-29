import React from "react";
import Layout from "../Components/layout";
import Whywe from "../Components/window/Whywe/whywe";
import AboutRating from "../Components/window/Rating/rating";

export const AboutPage = () => {
  return (
    <>
      <Layout>
        <Whywe />
        <AboutRating />
      </Layout>
    </>
  );
};
