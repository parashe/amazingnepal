import React from "react";
import Layout from "../Components/layout";
import { Services } from "../Components/window/Service/service";
import AboutRating from "../Components/window/Rating/rating";

const ServicePage = () => {
  return (
    <>
      <Layout>
        <Services />
        <AboutRating />
      </Layout>
    </>
  );
};

export default ServicePage;