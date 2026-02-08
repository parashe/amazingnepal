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
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Soft background */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-gray-50/80 to-gray-100/60 dark:from-gray-900 dark:via-gray-900/95 dark:to-gray-800/80" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ui-primary/20 to-transparent" />

      <div className="relative container mx-auto px-5 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-10 md:mb-14">
          <span className="inline-block text-ui-primary font-semibold uppercase tracking-widest mb-3">
            Why choose us
          </span>
          <h2 className="text-gray-900 dark:text-white tracking-tight mb-4">
            Why we are the best
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            We pride ourselves on delivering unparalleled travel experiences that set us apart.
            Our dedication to excellence is evident in every aspect of our service.
          </p>
        </div>

        {/* Cards - bento-style with distinct layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {data.map((item, index) => (
            <div
              key={item.id}
              className="group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1"
            >
              {/* Accent bar on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-ui-primary to-ui-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-8 md:p-9">
                {/* Icon in soft circle */}
                <div className="mb-6 flex justify-center">
                  <div className="relative flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-ui-primary/10 dark:bg-ui-primary/20 group-hover:bg-ui-primary/15 dark:group-hover:bg-ui-primary/25 transition-colors duration-300">
                    <img
                      className="object-contain w-12 h-12 md:w-14 md:h-14"
                      src={item.imgUrl}
                      alt={`${item.title} – Nepal travel, Amazing Nepal`}
                    />
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 text-center">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-center">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Whywe;
