import React from "react";
import Layout from "../Components/layout";
import Gallery from "../Components/window/Gallery/gallery";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const GalleryPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Gallery" }]} />
      <div className="pt-4 md:pt-6">
        <Gallery />
      </div>
    </Layout>
  );
};
