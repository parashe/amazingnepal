import React from "react";
import Layout from "../Components/layout";
import { Services } from "../Components/window/Service/service";
import AboutRating from "../Components/window/Rating/rating";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

const ServicePage = () => {

  const breadcrumbItems = [
    {
      label: "Services",
      href: "/services",
      imageUrl: "/assets/breadcrumb/service.jpeg",
      alt: "Breadcrumb Destination",
      description: "Discover Our Offerings",
    },
  ];
  return (
    <>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <Services />
        <AboutRating />
      </Layout>
    </>
  );
};

export default ServicePage;
