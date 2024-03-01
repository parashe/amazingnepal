import React from "react";
import Layout from "../Components/layout";
import DestinationDetails from "../Components/window/Destination/destinationDetails";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const DestinationDetailsPage = () => {
  const breadcrumbItems = [
    {
      label: "Destination",
      href: "/destination",
      imageUrl: "/assets/breadcrumb/breadcrumbdestination.webp",
      alt: "Breadcrumb Destination",
      description: "Explore more details",
    },
  ];
  return (
    <>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <div className="container mx-auto px-4 py-5"></div>
        <DestinationDetails />
      </Layout>
    </>
  );
};
