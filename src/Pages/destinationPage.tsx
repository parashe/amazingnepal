import React from "react";
import Layout from "../Components/layout";
import { DestinationPageContent } from "../Components/window/Destination/destination";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const DestinationPage = () => {
  const breadcrumbItems = [
    {
      label: "Destination",
      href: "/destination",
      imageUrl: "/assets/breadcrumb/breadcrumbdestination.png",
      alt: "Breadcrumb Destination",
      description: "Explore all the destinations of Nepal",
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-10"></div>
      <DestinationPageContent />
    </Layout>
  );
};
