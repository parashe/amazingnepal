import React from "react";

import { Title } from "../../atoms";
import { destinationData } from "./data";
import { DestinationCard } from "../../UI/Card/card";
import { title } from "process";

interface DestinationProps {
  className?: string;
  title?: string;
}
const Destination: React.FC<DestinationProps> = ({ className, title }) => {
  const handleOnClickSeeMore = () => {
    console.log("see more");
  };

  const staticClassName =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-6 md:pt-20 p-5";
  const finalClassName = className + " " + staticClassName;
  return (
    <div className="mt-10 md:mt-28 container mx-auto">
      <Title title={`${title ? title : "Our Top Destination"}`} />

      {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
      <div className={finalClassName}>
        {destinationData.map((service, index) => (
          <DestinationCard
            key={index}
            {...service}
            onclick={handleOnClickSeeMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Destination;
