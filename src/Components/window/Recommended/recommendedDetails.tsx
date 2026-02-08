import React from "react";
import { Link } from "react-router-dom";
import { recommendData } from "./data";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { Alert, LoadingSkeleton, Modal } from "../../atoms";
import { CrossIcon } from "../../svg";

interface RecommendedProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
}

const RecommendedDetails: React.FC<RecommendedProps> = () => {
  const { id } = useParams();
  const [showLoader, setShowLoader] = React.useState(true);

  const recommendedDataByID = recommendData.find(
    (item) => item.id === Number(id)
  );

  React.useEffect(() => {
    const timeoutId = setTimeout(() => setShowLoader(false), 500);
    return () => clearTimeout(timeoutId);
  }, []);

  if (showLoader) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <LoadingSkeleton />
      </div>
    );
  }

  if (!recommendedDataByID) {
    return (
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Alert message="Place not found" type="error" />
      </div>
    );
  }

  const hasAttractions = Array.isArray(recommendedDataByID.attractions) && recommendedDataByID.attractions.length > 0;

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
        {/* Hero */}
        <header className="text-center mb-8 md:mb-10">
          <p className="text-sm font-semibold text-ui-primary uppercase tracking-widest mb-3">
            What to do in Nepal
          </p>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white leading-tight">
            {recommendedDataByID.place}
          </h1>
          <p className="mt-5 max-w-2xl mx-auto text-gray-600 dark:text-gray-400 leading-relaxed text-lg">
            {recommendedDataByID.description}
          </p>
        </header>

        {/* Attractions */}
        {hasAttractions ? (
          <section>
            <h2 className="text-sm font-semibold text-ui-primary uppercase tracking-widest mb-6">
              Attractions in this region
            </h2>
            <div className="space-y-8">
              {recommendedDataByID.attractions.map((attraction: any) => (
                <CardDetails key={attraction.id} {...attraction} />
              ))}
            </div>
          </section>
        ) : (
          <div className="flex justify-center py-12">
            <Alert
              message={`No attractions listed yet for ${recommendedDataByID.place}`}
              type="error"
            />
          </div>
        )}

        <div className="mt-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-ui-primary font-semibold hover:text-ui-secondary transition-colors"
          >
            ← Back to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RecommendedDetails;

function sliceDescription(description: string, maxChars: number = 320): string {
  if (!description || description.length <= maxChars) return description;
  const slice = description.slice(0, maxChars);
  const lastDot = slice.lastIndexOf(".");
  return lastDot !== -1 ? slice.slice(0, lastDot + 1) : slice + "…";
}

const CardDetails: React.FC<any> = (attraction) => {
  const [showModal, setShowModal] = React.useState(false);

  const imageUrl = Array.isArray(attraction.imageUrl)
    ? attraction.imageUrl[0]?.url
    : attraction.imageUrl;

  return (
    <>
      <article className="rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-0">
          <div className="md:col-span-2 relative aspect-[16/10] md:aspect-auto md:min-h-[220px] bg-gray-100 dark:bg-gray-700 overflow-hidden">
            {imageUrl && (
              <img
                src={imageUrl}
                alt={`${attraction.place} – Nepal attraction, Amazing Nepal`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            )}
          </div>
          <div className="md:col-span-3 p-6 md:p-8 flex flex-col justify-center">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
              {attraction.place}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-justify">
              {sliceDescription(attraction.description)}…
            </p>
            <div className="mt-5">
              <button
                type="button"
                onClick={() => setShowModal(true)}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-ui-primary hover:bg-ui-secondary text-white text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2 dark:focus:ring-offset-gray-800"
              >
                View details
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </article>

      {showModal && (
        <SeeAllModal
          onClose={() => setShowModal(false)}
          attraction={attraction}
        />
      )}
    </>
  );
};

interface ModalProps {
  onClose: () => void;
  attraction?: any;
}

export const SeeAllModal: React.FC<ModalProps> = ({ onClose, attraction }) => {
  if (!attraction) return null;

  const imageList = Array.isArray(attraction.imageUrl) ? attraction.imageUrl : [];

  return (
    <Modal onClose={onClose}>
      <div
        className="relative bg-white dark:bg-gray-800 rounded-2xl max-h-[90vh] w-full max-w-4xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">
            {attraction.place}
          </h3>
          <button
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-gray-500 hover:text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
            aria-label="Close"
          >
            <CrossIcon className="w-6 h-6" color="currentColor" />
          </button>
        </div>

        <div className="overflow-y-auto max-h-[calc(90vh-140px)] p-6">
          {imageList.length > 0 && (
            <div className="mb-6">
              <PhotoProvider>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {imageList.map((img: any, index: number) => (
                    <PhotoView key={img.id ?? index} src={img.url}>
                      <button
                        type="button"
                        className="block w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-ui-primary"
                      >
                        <img
                          src={img.url}
                          alt={`${attraction.place} – Nepal travel, Amazing Nepal`}
                          className="w-full h-full object-cover hover:scale-105 transition-transform"
                        />
                      </button>
                    </PhotoView>
                  ))}
                </div>
              </PhotoProvider>
            </div>
          )}

          <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-justify">
              {attraction.description}
            </p>
          </div>
        </div>
      </div>
    </Modal>
  );
};
