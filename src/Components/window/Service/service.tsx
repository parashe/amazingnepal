import React from "react";
import { servicesData } from "./data";
import { ServiceCard } from "../../UI/Card/card";
import { Title } from "../../atoms";

const Services: React.FC = () => {
  const handleOnClickSeeMore = () => {
    console.log("see more");
  };
  return (
    <div className="mt-10 md:mt-28 container mx-auto">
      <Title title="Our Services" />

      {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:pt-20 p-5">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={index}
            {...service}
            onclick={handleOnClickSeeMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
