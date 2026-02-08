import React from "react";
import { Link } from "react-router-dom";
import Layout from "../Components/layout";
import { Breadcrumb } from "../Components/window/Breadcrumb/breadcrumb";
import { FAQ } from "../Components/window/FAQ/faq";
import { faqData } from "../Components/window/FAQ/faqData";

const FAQ_SCHEMA_ID = "faq-schema";

export const FAQPage = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // FAQ structured data for SEO and AI search
  React.useEffect(() => {
    const existing = document.getElementById(FAQ_SCHEMA_ID);
    if (existing) existing.remove();
    const script = document.createElement("script");
    script.id = FAQ_SCHEMA_ID;
    script.type = "application/ld+json";
    script.textContent = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: faqData.map((item) => ({
        "@type": "Question",
        name: item.question,
        acceptedAnswer: { "@type": "Answer", text: item.answer },
      })),
    });
    document.head.appendChild(script);
    return () => {
      document.getElementById(FAQ_SCHEMA_ID)?.remove();
    };
  }, []);

  return (
    <Layout>
      <Breadcrumb items={[{ label: "FAQ" }]} />
      <div className="pt-4 md:pt-6">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-8 md:py-12">
          <header className="text-center mb-8 md:mb-10">
            <p className="text-ui-primary font-semibold uppercase tracking-wider text-sm mb-2">
              Help & support
            </p>
            <h1 className="text-gray-900 dark:text-white text-3xl md:text-4xl font-bold tracking-tight mb-3">
              Frequently asked questions
            </h1>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Quick answers about booking, payments, insurance, and more.
            </p>
          </header>
          <FAQ />
          <p className="mt-8 text-center text-gray-500 dark:text-gray-400 text-sm">
            Can&apos;t find your answer?{" "}
            <Link to="/contact" className="text-ui-primary font-medium hover:underline">
              Contact us
            </Link>
          </p>
        </div>
      </div>
    </Layout>
  );
};
