import React from "react";
import { useParams } from "react-router-dom";
import Layout from "../Components/layout";
import RecommendedDetails from "../Components/window/Recommended/recommendedDetails";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";
import { recommendData } from "../Components/window/Recommended/data";

export const RecommendedDetailsPage = () => {
  const { id } = useParams();
  const item = recommendData.find((i) => i.id === Number(id));
  const breadcrumbLabel = item?.place ?? "Attraction";

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: breadcrumbLabel }]} />
      <div className="pt-4 md:pt-6">
        <RecommendedDetails />
      </div>
    </Layout>
  );
};
