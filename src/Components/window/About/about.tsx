import React from "react";
import { Link } from "react-router-dom";

interface AboutContentProps {
  /** "home" = short intro + Learn more button; "full" = full company story */
  variant?: "home" | "full";
}

export const AboutContent = ({ variant = "full" }: AboutContentProps) => {
  if (variant === "home") {
    return (
      <section className="w-full" aria-labelledby="about-heading">
        <div className="p-0 max-w-3xl">
          <div className="mb-5 sm:mb-6">
            <p className="text-ui-primary text-sm font-semibold uppercase tracking-[0.2em] mb-2 sm:mb-3">
              About us
            </p>
            <h2 id="about-heading" className="text-gray-900 dark:text-white tracking-tight">
              Amazing Nepal
            </h2>
          </div>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-justify sm:text-left mb-6 sm:mb-8">
            <p>
              We are a UK-based travel specialist for Nepal and the Himalayas. We
              design treks, cultural tours, pilgrimage circuits, and tailored
              itineraries so you can discover this region with confidence and care.
            </p>
            <p>
              From Everest Base Camp and Annapurna Circuit treks to heritage tours
              in the Kathmandu Valley and spiritual journeys such as Muktinath and
              Kailash Manasarovar, we arrange experienced guides, teahouse or
              camping accommodation, permits, and logistics so you can focus on the
              experience.
            </p>
            <p>
              We also offer travel packages to other destinations, travel
              insurance for trips and adventure activities, and immigration
              assistance. Our team works with you to plan a trip that fits your
              interests, pace, and budget. Contact us to start planning your
              journey.
            </p>
          </div>
          <div className="flex justify-center">
            <Link
              to="/about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ui-primary hover:bg-ui-secondary text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-200 shrink-0 w-fit group"
            >
              Learn more
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="w-full p-0">
<p className="text-ui-primary text-sm font-semibold uppercase tracking-wider mb-2 sm:mb-3">
          Our story
        </p>
        <h2 className="text-gray-900 dark:text-white tracking-tight mb-6 sm:mb-8">
          Amazing Nepal
        </h2>

      <div className="space-y-10 sm:space-y-12">
        <div>
          <h3 className="text-gray-900 dark:text-white mb-3 sm:mb-4">
            Who we are
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Amazing Nepal was founded with a simple belief: that everyone
              deserves to experience the majesty of the Himalayas and the warmth of
              Nepalese culture in a safe, well-organised, and personally meaningful
              way. We are based in the United Kingdom and work with travellers from
              across the globe who share a curiosity for high mountains, ancient
              temples, and genuine hospitality.
            </p>
            <p>
              We are not a faceless booking platform. Every itinerary is designed
              and checked by people who know Nepal firsthand. We work with local
              guides, teahouse owners, and transport partners we trust, so that from
              the moment you land in Kathmandu to the day you head home, you are in
              capable hands.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white mb-3 sm:mb-4">
            How we work
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              We take care of permits, accommodation, and logistics so you can
              focus on the journey itself. Our team coordinates with ground
              operators in Nepal to ensure smooth transfers, comfortable
              teahouses or camps where relevant, and experienced guides who
              know the trails and the culture.
            </p>
            <p>
              Whether you prefer a fixed group departure or a private trip
              tailored to your dates and pace, we can arrange it. We are happy
              to adjust itineraries, add rest days, or combine different
              experiences—for example, a trek followed by a few days of
              cultural sightseeing—into a single trip.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white mb-3 sm:mb-4">
            Safety and transparency
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Safety and transparency matter to us. We explain what each trip
              involves: fitness level, altitude, weather, and cultural
              considerations, so you can choose a journey that suits you.
              We do not sell trips that are beyond your experience or fitness;
              we want you to enjoy the adventure and return home with great
              memories.
            </p>
            <p>
              Whether you travel solo, as a couple, or in a group, we aim to
              make your adventure both memorable and manageable. Pre-trip
              briefings, clear packing lists, and contact details for our
              local team are part of the service, so you feel prepared before
              you fly.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white mb-3 sm:mb-4">
            Beyond treks and tours
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              Beyond classic treks and cultural tours, we support travellers
              with travel insurance suited to adventure and high-altitude
              travel. We can help you find coverage that includes emergency
              evacuation and activities such as trekking at altitude, so you
              have peace of mind.
            </p>
            <p>
              We also offer immigration assistance for those considering
              longer stays or relocation. Our goal is to be your single point
              of contact for Nepal-related travel and support, so you spend
              less time worrying and more time exploring.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-gray-900 dark:text-white mb-3 sm:mb-4">
            Get in touch
          </h3>
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed">
            <p>
              We invite you to browse our destinations and services, read what
              our customers say, and get in touch with any questions. Whether
              you are planning your first trip to Nepal or returning for
              another adventure, we are here to help you prepare for an
              experience you will remember for years to come.
            </p>
            <p>
              You can reach us by phone, WhatsApp, or email. We respond to
              enquiries promptly and are happy to discuss your ideas, suggest
              itineraries, or clarify anything about our trips and support
              services.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
