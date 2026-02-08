import React from "react";
import Layout from "../Components/layout";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";
import Recommended from "../Components/window/Recommended/recommended";

/** Full list of recommended attractions (no limit). */
export const RecommendedListPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "Top attractions" }]} />
      <div className="pt-4 md:pt-6">
        <Recommended limit={0} />
      </div>
    </Layout>
  );
};
