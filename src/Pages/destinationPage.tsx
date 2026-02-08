import React from "react";
import Layout from "../Components/layout";
import { DestinationPageContent } from "../Components/window/Destination/destination";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const DestinationPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Destinations" }]} />
      <div className="pt-4 md:pt-6">
        <DestinationPageContent />
      </div>
    </Layout>
  );
};
