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
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <div className="container mx-auto px-4 py-10"></div>
        <Services />
        <div className="container mx-auto px-4 py-10"></div>
        <AboutRating />
      </Layout>
    </>
  );
};

export default ServicePage;
