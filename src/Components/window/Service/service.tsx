import React from "react";
import { servicesData } from "./data";
import { LoadingSkeleton } from "../../atoms";

/** Large SVG icons for each service – no images */
const SERVICE_ICONS: Record<number, React.ReactNode> = {
  0: (
    <svg className="w-14 h-14 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935" />
      <path d="M12 12a2 2 0 104 0 2 2 0 00-4 0z" />
    </svg>
  ),
  1: (
    <svg className="w-14 h-14 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  ),
  2: (
    <svg className="w-14 h-14 sm:w-16 sm:h-16" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
  ),
};

/** Subtle dot pattern as SVG background – use unique id when multiple on page */
const DotPattern = ({ id = "service-dots" }: { id?: string }) => (
  <svg className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
    <defs>
      <pattern id={id} x="0" y="0" width="12" height="12" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="0.75" fill="currentColor" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill={`url(#${id})`} />
  </svg>
);

export const Services: React.FC = () => {
  const [showLoader, setShowLoader] = React.useState(true);
  const [showServiceModal, setShowServiceModal] = React.useState(false);
  const [serviceId, setServiceId] = React.useState<string>("");

  const handleOnClickSeeMore = (id: string) => {
    setServiceId(id);
    setShowServiceModal(true);
  };

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  if (showLoader) {
    return (
      <div className="text-center min-h-[40vh] flex items-center justify-center">
        <LoadingSkeleton />
      </div>
    );
  }

  return (
    <>
      <section className="py-8 md:py-10 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50/80 to-white dark:from-gray-900/50 dark:to-gray-900 pointer-events-none" aria-hidden />
        <div className="container mx-auto px-5 max-w-6xl relative">
          <div className="text-center mb-6 md:mb-8">
            <p className="text-ui-primary font-semibold uppercase tracking-widest text-sm mb-2">
              What we offer
            </p>
            <h2 className="text-gray-900 dark:text-white text-2xl md:text-3xl font-bold tracking-tight mb-3">
              Our Services
            </h2>
            <div className="w-16 h-1 bg-ui-primary rounded-full mx-auto mb-4" />
            <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed text-sm">
              Explore Nepal with our range of services tailored for your travel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-6">
            {servicesData.map((service, index) => (
              <article
                key={service.service_id}
                className="group bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-ui-primary/25 dark:hover:border-ui-primary/35 overflow-hidden flex flex-col hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon header – no image: gradient + SVG pattern + large icon */}
                <div className="relative flex items-center justify-center min-h-[140px] sm:min-h-[160px] px-6 py-8 bg-gradient-to-br from-ui-primary/15 via-ui-primary/10 to-ui-primary/5 dark:from-ui-primary/25 dark:via-ui-primary/15 dark:to-ui-primary/10 text-ui-primary">
                  <DotPattern id={`service-dots-${service.service_id}`} />
                  <span className="relative z-10 flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white dark:bg-gray-800 shadow-lg ring-2 ring-ui-primary/20 dark:ring-ui-primary/30 group-hover:scale-105 group-hover:ring-ui-primary/40 transition-all duration-300" aria-hidden>
                    {SERVICE_ICONS[index % 3]}
                  </span>
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-1">
                  <h3 className="text-gray-900 dark:text-white font-bold text-lg md:text-xl mb-1">
                    {service.title}
                  </h3>
                  {service.tagline && (
                    <p className="text-ui-primary font-medium text-sm mb-3">
                      {service.tagline}
                    </p>
                  )}
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 flex-1 line-clamp-3">
                    {service.content}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOnClickSeeMore(service.service_id)}
                    className="inline-flex items-center justify-center gap-2 w-full py-3 px-4 rounded-xl bg-ui-primary hover:bg-ui-secondary text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
                  >
                    View details
                    <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {serviceId && showServiceModal && (
        <ServiceDetails
          service_Id={serviceId}
          onClose={() => setShowServiceModal(false)}
        />
      )}
    </>
  );
};

export const ServiceDetails = ({
  service_Id,
  onClose,
}: {
  service_Id: string;
  onClose: () => void;
}) => {
  const service = servicesData.find((s) => s.service_id === service_Id);

  if (!service) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] bg-white dark:bg-gray-900 flex flex-col overflow-hidden">
      {/* Sticky header */}
      <header className="sticky top-0 z-10 flex items-center justify-between px-6 md:px-10 py-4 md:py-5 bg-white/95 dark:bg-gray-900/95 border-b border-gray-100 dark:border-gray-800 backdrop-blur-sm shrink-0">
        <h2 className="text-gray-900 dark:text-white">
          {service.title}
        </h2>
        <button
          type="button"
          onClick={onClose}
          className="p-2.5 rounded-xl text-gray-500 hover:text-gray-800 hover:bg-gray-100 dark:hover:bg-gray-800 dark:text-gray-400 dark:hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </header>

      {/* Scrollable content */}
      <main className="flex-1 overflow-y-auto">
        {/* Hero area – gradient + icon, no image */}
        <div className="relative w-full min-h-[180px] sm:min-h-[200px] flex items-center justify-center px-6 py-10 bg-gradient-to-br from-ui-primary/20 via-ui-primary/10 to-ui-primary/5 dark:from-ui-primary/30 dark:via-ui-primary/20 dark:to-ui-primary/10">
          <DotPattern id="service-dots-modal" />
          <span className="relative z-10 flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-white dark:bg-gray-800 text-ui-primary shadow-lg ring-2 ring-ui-primary/20" aria-hidden>
            {SERVICE_ICONS[servicesData.findIndex((s) => s.service_id === service_Id) % 3]}
          </span>
        </div>

        {/* Content - centered column */}
        <div className="max-w-4xl mx-auto px-6 md:px-10 py-10 md:py-14">
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-12">
            {service.content}
          </p>

          <h3 className="text-gray-900 dark:text-white mb-8">
            Our areas of assistance
          </h3>

          <div className="grid gap-4 md:gap-5">
            {service.detailsContent.map((detail, index) => (
              <div
                key={index}
                className="flex gap-4 md:gap-5 p-5 md:p-6 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700"
              >
                <span className="shrink-0 w-10 h-10 rounded-xl bg-ui-primary/10 dark:bg-ui-primary/20 flex items-center justify-center text-ui-primary font-bold text-lg">
                  {index + 1}
                </span>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed pt-1">
                  {detail}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
