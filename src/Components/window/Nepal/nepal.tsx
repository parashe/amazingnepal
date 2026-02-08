import React from "react";
import { BoldText, LoadingSkeleton } from "../../atoms";
import { Link } from "react-router-dom";

const Nepal = () => {
  const [showLoader, setShowLoader] = React.useState(true);

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  if (showLoader) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-12">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
      {/* Hero */}
      <header className="text-center mb-8 md:mb-10">
        <p className="text-sm font-semibold text-ui-primary uppercase tracking-widest mb-3">
          Explore Nepal
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
          Discover the magic of{" "}
          <span className="text-ui-primary">Nepal</span>
        </h1>
        <p className="mt-4 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 text-lg leading-relaxed">
          Where the Himalayas meet ancient culture — adventure, spirituality, and
          unforgettable journeys await.
        </p>
      </header>

      {/* Hero image */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-lg mb-12 md:mb-16">
        <div className="relative aspect-[21/9] md:aspect-[3/1] bg-gray-200 dark:bg-gray-700">
          <img
            src="/assets/nepal/nepal.jpeg"
            alt="Himalayan landscape Nepal travel – mountains and trekking, Amazing Nepal"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        </div>
      </div>

      {/* Intro */}
      <section className="mb-10 md:mb-16">
        <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-3xl mx-auto">
          <BoldText>Nepal</BoldText>, nestled in the lap of the Himalayas, is a
          land of captivating beauty, rich culture, and diverse landscapes.
          Renowned as the{" "}
          <BoldText>
            birthplace of Lord Buddha and home to the world's highest peaks,
            including Mount Everest,
          </BoldText>{" "}
          Nepal beckons travellers from around the globe. From the bustling
          streets of Kathmandu — where ancient temples and colourful markets
          entice visitors — to the serene valleys and picturesque villages that
          dot the countryside, Nepal offers a wealth of experiences waiting to
          be discovered.
        </p>
        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-3xl mx-auto">
          One of Nepal's greatest treasures is its cultural heritage, spanning
          centuries of history and tradition. The Kathmandu Valley, a UNESCO
          World Heritage Site, is a living museum of ancient architecture, with
          intricate pagodas, palaces, and monasteries showcasing the{" "}
          <BoldText>
            artistic and architectural prowess of Newar craftsmen.
          </BoldText>{" "}
          Beyond the valley, Nepal's diverse ethnic communities each contribute
          their own customs, festivals, and cuisine, creating a tapestry of
          cultural diversity that is as vibrant as it is fascinating.
        </p>
        <p className="mt-6 text-gray-700 dark:text-gray-300 leading-relaxed text-justify max-w-3xl mx-auto">
          In addition to its cultural riches, Nepal is blessed with
          unparalleled natural beauty. From the snow-capped peaks of the
          Himalayas to the lush jungles of the Terai, the country's diverse
          landscapes offer a playground for outdoor enthusiasts and nature
          lovers. Whether you're trekking through the rugged trails of the{" "}
          <BoldText>
            Annapurna region or exploring the wildlife-rich wetlands of Chitwan
            National Park,
          </BoldText>{" "}
          Nepal's natural wonders leave a lasting impression. With warm
          hospitality, breathtaking scenery, and rich heritage, Nepal is truly
          a destination like no other.
        </p>
      </section>

      {/* Feature sections */}
      <div className="space-y-12 md:space-y-20">
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md bg-gray-100 dark:bg-gray-800 aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
            <img
              src="/assets/nepal/himalaya.png"
              alt="Majestic Himalayas Nepal trekking – mountain travel, Amazing Nepal"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Majestic Himalayas
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <BoldText>Nepal</BoldText> is home to some of the world's highest
              peaks, including Mount Everest — the tallest mountain on Earth —
              and Kanchenjunga, the third-highest globally. These giants, along
              with Lhotse, Makalu, and Cho Oyu, form the backbone of the
              awe-inspiring Himalayan range. Everest, at 8,848 metres (29,029
              feet), draws adventurers from every corner of the globe. Beyond
              Everest, each peak offers its own charm and challenges, promising a
              lifetime of exploration for mountaineers, trekkers, and nature
              enthusiasts alike.
            </p>
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Rich cultural heritage
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              <BoldText>Steeped in history and tradition,</BoldText> Nepal
              boasts a vibrant cultural tapestry woven from diverse ethnic
              groups, languages, and customs. The Kathmandu Valley, a UNESCO
              World Heritage Site, is a treasure trove of ancient temples,
              palaces, and monasteries showcasing the artistic and architectural
              brilliance of Newar craftsmen. Durbar Squares in Kathmandu,
              Bhaktapur, and Patan are living museums of Nepal's royal history.
              Beyond the valley, traditional villages preserve age-old customs
              and rituals. From harvest festivals to religious ceremonies,
              Nepali culture is alive with traditions that reflect the country's
              rich heritage.
            </p>
          </div>
          <div className="order-1 lg:order-2 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md bg-gray-100 dark:bg-gray-800 aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
            <img
              src="/assets/nepal/heritage.jpg"
              alt="Cultural heritage Nepal travel – temples and heritage tours, Amazing Nepal"
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        <section className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10 items-center">
          <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 shadow-md bg-gray-100 dark:bg-gray-800 aspect-[4/3] lg:aspect-auto lg:min-h-[320px]">
            <img
              src="/assets/nepal/lumbini.jpeg"
              alt="Spiritual sanctuaries Lumbini Nepal – Buddha birthplace pilgrimage, Amazing Nepal"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-xl md:text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Spiritual sanctuaries
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              As the <BoldText>birthplace of Lord Buddha</BoldText>, Nepal holds
              profound spiritual significance worldwide. Lumbini, in the
              western Terai, is where Siddhartha Gautama was born — a UNESCO
              World Heritage Site and pilgrimage destination. Visitors explore
              the Maya Devi Temple, marking the exact spot of Buddha's birth, and
              the ancient ruins and monasteries of various Buddhist traditions.
              Another gem is the Boudhanath Stupa in Kathmandu, one of the
              world's largest stupas and an important pilgrimage site, encircled
              by prayer wheels, flags, and monasteries. Whether you seek
              spiritual enlightenment or quiet reflection, Nepal's sacred sites
              offer a sanctuary for the soul.
            </p>
          </div>
        </section>
      </div>

      {/* CTA */}
      <section className="mt-10 md:mt-16 pt-8 border-t border-gray-200 dark:border-gray-700 text-center">
        <p className="text-gray-600 dark:text-gray-400 mb-6">
          Ready to explore Nepal? Discover our trips and get in touch.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link
            to="/destination"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ui-primary hover:bg-ui-secondary text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2"
          >
            View destinations
          </Link>
          <Link
            to="/contact"
            onClick={() => window.scrollTo(0, 0)}
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-ui-primary text-ui-primary hover:bg-ui-primary hover:text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2"
          >
            Contact us
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Nepal;
