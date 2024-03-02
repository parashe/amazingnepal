import React from "react";
import Layout from "../Components/layout";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";
import RecommendedDetails from "../Components/window/Recommended/recommendedDetails";


export const RecommendedDetailsPage = () => {
  const breadcrumbItems = [
    {
      label: "What to do in Nepal",
      href: "/recommended",
      imageUrl: "/assets/breadcrumb/todoimage.jpeg",
      alt: "what to do in Nepal",
      description: "What to do in Nepal",
    },
  ];

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Layout>
      <Breadcrumb items={breadcrumbItems} />
      <div className="container mx-auto px-4 py-10"></div>
    <RecommendedDetails/>
    </Layout>
  );
};
