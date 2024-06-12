import React from "react";
import { BoldText, LoadingSkeleton } from "../../atoms";
const Vision = () => {
  const row = "flex flex-col items-start gap-y-8 md:gap-y-20 lg:gap-y-32";
  const picture =
    "h-full w-full object-cover rounded-lg bg-neutral-200 lg:mx-12 lg:w-[100%] lg:h-[400px] lg:max-w-[520px] lg:rounded-xl";
  const linearSectionClassName = "space-y-8 md:space-y-12";
  const paragraph =
    "text-justify leading-relaxed font-normal text-sm lg:leading-7 lg:text-md text-gray-900 dark:text-gray-300";

  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    // Set a timeout to hide the loader after 3 seconds
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 500);

    // Clean up the timeout when the component unmounts
    return () => {
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <section className={linearSectionClassName}>
      {showLoader ? (
        <>
          <div className="container mx-auto py-2">
            <LoadingSkeleton />
          </div>
        </>
      ) : (
        <>
          <div className=" container mx-auto py-2">
            <div className="text-center mx-auto  gap-6 py-5">
              <div className="flex items-center justify-center ">
                <h3
                  className="text-3xl md:text-6xl max-w-4xl  font-extrabold uppercase  text-gray-900 dark:text-gray-300 "
                  style={{ lineHeight: "1.2" }}
                >
                  <p>
                    {" "}
                    <span className="text-ui-primary font-extrabold leading-10">
                      Discover{" "}
                    </span>{" "}
                    <span className=" font-extrabold">the Magic of</span> <br />
                  </p>

                  <span className="text-ui-primary mb-0 ">Nepal</span>

                  <p className="text-neutral-600 md:mt-3 p-2  text-xs md:text-sm dark:text-neutral-400">
                    Embrace the boundless allure of adventure as you journey
                    into the majestic heart of the Himalayas. Here, amidst
                    towering peaks and sweeping vistas, lies an invitation to
                    awaken your spirit of exploration and discovery.
                  </p>
                </h3>
              </div>
            </div>

            <div className="p-5 space-y-5 ">
              <img
                className=" h-full w-full object-fill brightness-50 rounded-lg bg-neutral-200  lg:w-[100%] max-h-[400px]  lg:rounded-xl"
                src="/assets/nepal/nepal.jpeg"
                alt="Himalayan Nepal"
              />

              <p className={paragraph}>
                <BoldText>Nepal,</BoldText> nestled in the lap of the Himalayas,
                is a land of captivating beauty, rich culture, and diverse
                landscapes. Renowned as the{" "}
                <BoldText>
                  birthplace of Lord Buddha and home to the world's highest
                  peaks, including Mount Everest,
                </BoldText>{" "}
                Nepal is a destination that beckons travelers from around the
                globe. From the bustling streets of Kathmandu, where ancient
                temples and colorful markets entice visitors, to the serene
                valleys and picturesque villages that dot the countryside, Nepal
                offers a wealth of experiences waiting to be discovered.
                <br />
                <br />
                One of Nepal's greatest treasures is its cultural heritage,
                which spans centuries of history and tradition. The Kathmandu
                Valley, a UNESCO World Heritage Site, is a living museum of
                ancient architecture, with its intricate pagodas, palaces, and
                monasteries showcasing the{" "}
                <BoldText>
                  {" "}
                  artistic and architectural prowess of the Newar craftsmen.
                </BoldText>{" "}
                Beyond the valley, Nepal's diverse ethnic communities each
                contribute their own unique customs, festivals, and cuisine,
                creating a tapestry of cultural diversity that is as vibrant as
                it is fascinating.
                <br />
                <br />
                In addition to its cultural riches, Nepal is blessed with
                unparalleled natural beauty. From the snow-capped peaks of the
                Himalayas to the lush jungles of the Terai region, the country's
                diverse landscapes offer a playground for outdoor enthusiasts
                and nature lovers alike. Whether you're trekking through the
                rugged mountain trails of the{" "}
                <BoldText>
                  {" "}
                  Annapurna or exploring the wildlife-rich wetlands of Chitwan
                  National Park,
                </BoldText>{" "}
                Nepal's natural wonders never fail to leave a lasting
                impression. With its warm hospitality, breathtaking scenery, and
                rich cultural heritage, Nepal is truly a destination like no
                other, offering an unforgettable journey of discovery for
                travelers seeking adventure, enlightenment, and inspiration.
              </p>
            </div>

            <div className="flex flex-col gap-y-10 md:gap-y-16 lg:mb-32">
              <div
                className={`${row} p-5 flex-col-reverse lg:mb-16 lg:mt-16 lg:flex-row`}
              >
                <img
                  className={picture}
                  src="/assets/nepal/himalaya.png"
                  alt="Himalayan"
                />
                <div className="ml-4 flex flex-col">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 lg:mb-5  dark:text-white">
                    Majestic Himalayas
                  </h3>
                  <p className={paragraph}>
                    <BoldText>Nepal</BoldText> is home to some of the world's
                    highest peaks, including the legendary Mount Everest,
                    towering as the tallest mountain on Earth, and the majestic
                    Kanchenjunga, the third-highest peak globally. These
                    towering giants, along with other notable summits like
                    Lhotse, Makalu, and Cho Oyu, form the backbone of the
                    awe-inspiring Himalayan range. Mount Everest, standing at a
                    staggering elevation of 8,848 meters (29,029 feet),
                    captivates the imagination of adventurers worldwide, drawing
                    climbers from all corners of the globe to test their limits
                    on its formidable slopes. But the allure of Nepal's
                    Himalayas extends far beyond Everest; each peak in this
                    rugged landscape has its own unique charm and challenges,
                    offering a lifetime of exploration and discovery for
                    mountaineers, trekkers, and nature enthusiasts alike.
                  </p>
                </div>
              </div>

              <div
                className={`${row} p-5 flex-col-reverse lg:mb-16 lg:flex-row-reverse`}
              >
                <img
                  className={picture}
                  src="/assets/nepal/heritage.jpg"
                  alt="cultural heritage"
                />
                <div className="ml-4 flex flex-col">
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 lg:mb-5 dark:text-white ">
                    Rich Cultural Heritage
                  </h3>
                  <p className={paragraph}>
                    <BoldText>Rich Cultural Heritage:</BoldText> Steeped in
                    history and tradition, Nepal boasts a vibrant cultural
                    tapestry woven from diverse ethnic groups, languages, and
                    customs. The Kathmandu Valley, a UNESCO World Heritage Site,
                    is a treasure trove of ancient temples, palaces, and
                    monasteries, showcasing the artistic and architectural
                    brilliance of the Newar craftsmen. Durbar Squares in
                    Kathmandu, Bhaktapur, and Patan are living museums of
                    Nepal's royal history, with intricately carved palaces and
                    courtyards that transport visitors back in time. Beyond the
                    valley, Nepal's rural landscapes are dotted with traditional
                    villages where age-old customs and rituals are preserved
                    with pride. From colorful festivals celebrating the harvest
                    season to religious ceremonies honoring the gods and
                    goddesses, Nepali culture is alive with vibrant traditions
                    that reflect the rich tapestry of the country's heritage.
                  </p>
                </div>
              </div>

              <div className={`${row} p-5 flex-col-reverse lg:flex-row`}>
                <img
                  className={picture}
                  src="/assets/nepal/lumbini.jpeg"
                  alt="Spiritual Sanctuaries"
                />
                <div className="ml-4 flex flex-col">
                <h3 className="mb-3 text-2xl font-bold text-gray-900 lg:mb-5 dark:text-white ">
                    Spiritual Sanctuaries
                  </h3>
                  <p className={paragraph}>
                    Spiritual Sanctuaries:As the
                    <BoldText> birthplace of Lord Buddha</BoldText> , Nepal
                    holds profound spiritual significance for millions of people
                    worldwide. Lumbini, located in the western Terai plains, is
                    the birthplace of Siddhartha Gautama, the founder of
                    Buddhism and revered as Lord Buddha. This UNESCO World
                    Heritage Site is a pilgrimage destination where visitors can
                    explore the Maya Devi Temple, marking the exact spot where
                    Buddha was born, and marvel at the ancient ruins and
                    monasteries from various Buddhist traditions. Another
                    spiritual gem is the Boudhanath Stupa in Kathmandu, one of
                    the largest stupas in the world and an important pilgrimage
                    site for Buddhists. Encircled by prayer wheels, colorful
                    prayer flags, and monasteries, Boudhanath exudes a serene
                    atmosphere that invites contemplation and introspection.
                    Whether you're seeking spiritual enlightenment or simply a
                    moment of quiet reflection, Nepal's sacred sites offer a
                    sanctuary for the soul amidst the hustle and bustle of
                    modern life.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default Vision;
