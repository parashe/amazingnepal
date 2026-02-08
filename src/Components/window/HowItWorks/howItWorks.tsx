import React from "react";
import { Link } from "react-router-dom";

const steps = [
  {
    number: 1,
    title: "Browse trips",
    description: "Explore our destinations and recommended tours. Pick a trip that fits your interests and dates.",
    to: "/destination",
  },
  {
    number: 2,
    title: "Contact us",
    description: "Send an enquiry or call us. We'll confirm availability and tailor the trip to you.",
    to: "/contact",
  },
  {
    number: 3,
    title: "Book & pay",
    description: "Secure your spot with a deposit. We'll guide you through payment and paperwork.",
    to: "/contact",
  },
  {
    number: 4,
    title: "Travel",
    description: "Enjoy your journey. We handle permits, guides, and logistics so you can focus on the experience.",
  },
];

export const HowItWorks: React.FC = () => {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-white to-gray-50 dark:from-gray-900/50 dark:via-gray-900 dark:to-gray-900/50 pointer-events-none" aria-hidden />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-ui-primary/30 to-transparent" aria-hidden />

      <div className="container mx-auto px-4 sm:px-6 max-w-6xl relative">
        <header className="text-center mb-12 md:mb-16">
          <p className="text-ui-primary font-semibold uppercase tracking-widest text-sm mb-2">
            Simple process
          </p>
          <h2 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-4">
            How it works
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            From choosing a trip to travelling—we keep it clear and straightforward.
          </p>
        </header>

        <div className="relative">
          {/* Connector line - visible on lg screens */}
          <div
            className="hidden lg:block absolute top-[4.5rem] left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-ui-primary/20 via-ui-primary/50 to-ui-primary/20"
            aria-hidden
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            {steps.map((step) => {
              const content = (
                <div className="flex flex-col items-center text-center">
                  <span
                    className="relative z-10 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-ui-primary to-ui-secondary text-white font-bold text-xl shadow-lg shadow-ui-primary/25 mb-5 group-hover:scale-110 group-hover:shadow-xl group-hover:shadow-ui-primary/30 transition-all duration-300"
                    aria-hidden
                  >
                    {step.number}
                  </span>
                  <h3 className="font-bold text-gray-900 dark:text-white text-lg mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
              const wrapperClassName =
                "group relative bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 p-6 md:p-8 shadow-md hover:shadow-xl hover:border-ui-primary/30 dark:hover:border-ui-primary/30 hover:-translate-y-1 transition-all duration-300";
              return step.to ? (
                <Link key={step.number} to={step.to} className={wrapperClassName}>
                  {content}
                </Link>
              ) : (
                <div key={step.number} className={wrapperClassName}>
                  {content}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
