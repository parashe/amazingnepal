import React from "react";
import { RecommendedCard } from "../../UI/Card/card";
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
    "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xxl:grid-cols-4 gap-0 md:pt-20 p-5";
  const finalClassName = className + " " + staticClassName;
  return (
    <div className="mt-10 md:mt-20 container mx-auto">
      <p className="text-neutral-600 md:mt-3 text-xs dark:text-neutral-400"></p>
      <div className="text-center mx-auto w-full md:max-w-4xl gap-6">
        <div className="flex"></div>
        <div className="flex items-center justify-center "  >
          <h2 className="text-2xl  lg:text-4xl  max-w-2xl font-black text-black uppercase dark:text-white leading-relaxed" style={{ lineHeight: "1.2" }}>
            Top{" "}
            <span className=" font-black   text-pink-500 ">
              Attractions{" "} &nbsp;
            </span>
            to Experience In{" "}
            <span className=" font-black  text-pink-500">
              NEPAL{" "}
            </span>{" "}
          </h2>
        </div>

        <p className="text-neutral-800 p-2 md:mt-3 text-sm dark:text-neutral-400">
          Nepal's diverse regions offer an array of attractions, from the
          cultural wonders of the Himalayas to the stunning beauty of the Nepal.
        </p>
      </div>

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
