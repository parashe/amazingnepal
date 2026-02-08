import React from "react";
import { servicesData } from "./data";
import { LoadingSkeleton } from "../../atoms";

const SERVICE_ICONS = [
  <svg key="travel" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0h.5a2.5 2.5 0 002.5-2.5V3.935M12 12a2 2 0 104 0 2 2 0 00-4 0z" /></svg>,
  <svg key="shield" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>,
  <svg key="doc" className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>,
];

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
                className="group bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 shadow-md hover:shadow-xl hover:border-ui-primary/20 dark:hover:border-ui-primary/30 overflow-hidden flex flex-col hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-gray-100 dark:bg-gray-700/50">
                  <img
                    src={service.imageUrl}
                    alt={`${service.title} – Nepal travel service, Amazing Nepal`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <span className="absolute top-2.5 left-2.5 flex items-center justify-center w-9 h-9 rounded-lg bg-white/95 dark:bg-gray-800/95 text-ui-primary shadow-sm" aria-hidden>
                    {SERVICE_ICONS[index % SERVICE_ICONS.length]}
                  </span>
                  <div className="absolute inset-x-0 bottom-0 p-3 md:p-4">
                    <h3 className="text-white font-bold text-base md:text-lg drop-shadow-md">
                      {service.title}
                    </h3>
                    {service.tagline && (
                      <p className="text-white/90 text-xs mt-0.5 drop-shadow-sm">
                        {service.tagline}
                      </p>
                    )}
                  </div>
                </div>
                <div className="p-4 flex flex-col flex-1">
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-3 flex-1 line-clamp-2">
                    {service.content}
                  </p>
                  <button
                    type="button"
                    onClick={() => handleOnClickSeeMore(service.service_id)}
                    className="inline-flex items-center justify-center gap-1.5 w-full py-2.5 px-4 rounded-lg bg-ui-primary hover:bg-ui-secondary text-white font-semibold text-sm shadow-md hover:shadow-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
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
        {/* Hero image - full width cover */}
        <div className="w-full h-[220px] sm:h-[280px] md:h-[320px] bg-gray-100 dark:bg-gray-800 overflow-hidden">
          <img
            src={service.imageUrl}
            alt={`${service.title} – Nepal travel service, Amazing Nepal`}
            className="w-full h-full object-cover"
          />
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
