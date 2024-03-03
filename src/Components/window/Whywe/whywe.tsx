import React from "react";

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
    <div className="bg-gradient-to-r from-blue-500 via-white  to-pink-500 opacity-100 dark:bg-gray-900">
      <div className="mt-0 md:pt-28 md:pb-24 container mx-auto pt-5 ">
        <div className="text-center mx-auto max-w-4xl gap-6">
          <div className="flex items-center justify-center ">
            <h2 className="text-2xl md:text-5xl font-black text-black uppercase dark:text-white leading-relaxed">
              <span className=" font-black  inline-block bg-clip-text lg:text-4xl   lg:font-extrabold ">
                WHY WE ARE THE  <span className="text-pink-500"> BEST ?</span>{" "}
              </span>
              <p className="text-neutral-600 md:mt-3 p-2  text-xs  dark:text-neutral-400">
                {" "}
               we pride ourselves on delivering unparalleled travel experiences
                that set us apart from the rest. Our dedication to excellence is
                evident in every aspect of our service.
              </p>
            </h2>
          </div>

          <p className="text-neutral-600 md:mt-3 text-sm dark:text-neutral-400"></p>
        </div>
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
