import React from "react";
import Layout from "../Components/layout";
import DestinationDetails from "../Components/window/Destination/destinationDetails";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

export const DestinationDetailsPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb
        items={[
          { label: "Destinations", href: "/destination" },
          { label: "Trip details" },
        ]}
      />
      <div className="pt-4 md:pt-6">
        <DestinationDetails />
      </div>
    </Layout>
  );
};
