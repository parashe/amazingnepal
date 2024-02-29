import React from "react";

import { Button, LoadingSkeleton, Title } from "../../atoms";
import { DestinationCard, RecommendedCard } from "../../UI/Card/card";
import { recommendData } from "./data";

interface RecommendedProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
}
const Recommended: React.FC<RecommendedProps> = ({
  className,
  title,
  CalledFromPage,
}) => {
  const handleOnClickSeeMore = () => {
    console.log("see more");
  };

  const staticClassName =
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 xxl:grid-cols-4 gap-6 md:pt-20 p-5";
  const finalClassName = className + " " + staticClassName;
  return (
    <div className="mt-10 md:mt-20 container mx-auto">
      <Title title={`${title ? title : "WHERE TO GO IN NEPAL"}`} />

      <p className="text-neutral-600 md:mt-3 text-sm dark:text-neutral-400">
        Nepal's diverse regions offer an array of attractions, from the cultural
        wonders of the Himalayas to the stunning beauty of the Nepal.
      </p>

      <div className={finalClassName}>
        {recommendData.map((service, index) => (
          <RecommendedCard
            key={index}
            {...service}
            onclick={handleOnClickSeeMore}
          />
        ))}
      </div>
    </div>
  );
};

export default Recommended;
