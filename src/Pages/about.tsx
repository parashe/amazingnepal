import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";
import Whywe from "../Components/window/Whywe/whywe";
import { AboutOnlySection } from "../Components/window/Rating/rating";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";

const exploreLinks = [
  {
    to: "/destination",
    title: "Top Destinations",
    description: "Browse our curated list of must-see places across Nepal and the Himalayas.",
    icon: "🗻",
  },
  {
    to: "/service",
    title: "Services",
    description: "Tours, treks, and travel support tailored to your trip.",
    icon: "🎒",
  },
  {
    to: "/gallery",
    title: "Gallery",
    description: "Photos and inspiration from Nepal and the Himalayas.",
    icon: "📷",
  },
  {
    to: "/nepal",
    title: "Explore Nepal",
    description: "Learn about Nepal's culture, regions, and what makes it special.",
    icon: "🇳🇵",
  },
  {
    to: "/contact",
    title: "Contact Us",
    description: "Get in touch for bookings, questions, or custom itineraries.",
    icon: "✉️",
  },
];

export const AboutPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "About us" }]} />
      <div className="pt-4 md:pt-6">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 py-6 md:py-10 max-w-7xl">
          <AboutOnlySection variant="full" />
        </div>

        <section className="py-6 sm:py-8 md:py-10">
        <div className="container mx-auto px-4 sm:px-5 md:px-6 lg:px-8 max-w-7xl">
          <h2 className="text-gray-900 dark:text-white mb-2 text-center">
            Explore our website
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-center mb-6 max-w-2xl mx-auto">
            Use these sections to explore destinations, services, and how to get in touch.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {exploreLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="block p-5 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-ui-primary/50 hover:shadow-md transition-all duration-200"
              >
                <span className="text-2xl mb-3 block" aria-hidden>{item.icon}</span>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-1.5">
                  {item.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
        </section>

        <Whywe />
      </div>
    </Layout>
  );
};
