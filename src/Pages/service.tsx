import React from "react";
import Layout from "../Components/layout";
import { Services } from "../Components/window/Service/service";
import Whywe from "../Components/window/Whywe/whywe";
import { CustomerReviewsSection } from "../Components/window/Rating/rating";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const ServicePage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Services" }]} />
      <div className="pt-4 md:pt-6">
        <Services />
        <CustomerReviewsSection />
        <Whywe />
      </div>
    </Layout>
  );
};
