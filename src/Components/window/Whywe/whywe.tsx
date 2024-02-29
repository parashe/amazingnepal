import React from "react";
import { Title } from "../../atoms";

const Whywe = () => {
  const data = [
    {
      id: 1,
      title: "Top Destinations",
      imgUrl: "/assets/route.png",
      description:
        "We have curated a list of top destinations for you to explore.",
    },
    {
      id: 2,
      title: "Cost Effective",
      imgUrl: "/assets/cost.png",
      description:
        "Travel with us for a cost-effective and hassle-free experience.",
    },
    {
      id: 3,
      title: "Popular Hiking Routes",
      imgUrl: "/assets/hike.png",
      description:
        "Embark on extraordinary hikes with a decade of expertise guiding your way.",
    },
  ];

  return (
    <div className="bg-gradient-to-r from-gray-50 via-blue-50 to-pink-50 opacity-100 dark:bg-gray-900">
      <div className="mt-0 md:pt-28 md:pb-24 container mx-auto pt-5 ">
        <Title title="Why Choose Us ?" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:pt-24 md:pb-24 w-full p-5">
          {data.map((item) => (
            <div
              key={item.id}
              className="max-w-md items-center   flex justify-between p-6 bg-white rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700"
            >
              <img
                className="rounded-lg mb-4 object-contain h-[200px] w-full"
                src={item.imgUrl}
                alt={item.title}
              />
              <div>
                <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 dark:text-white">
                  {item.title}
                </h5>
                <p className="mb-3 text-xs text-gray-600 dark:text-gray-300">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Whywe;
