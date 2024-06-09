import React from "react";
import Layout from "../Components/layout";
import Gallery from "../Components/window/Gallery/gallery";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const GalleryPage = () => {
  const breadcrumbItems = [
    {
      label: "Gallery",
      href: "/gallery",
      imageUrl: "/assets/home.png",
      alt: "gallery",
      description: "Discover Our Gallery",
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Layout>
        <Breadcrumb items={breadcrumbItems} />
        <div className="container mx-auto px-4 md:py-5"></div>
        <Gallery />
      </Layout>
    </>
  );
};
