import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Alert, Input, LoadingSkeleton, Spinner, TextArea } from "../../atoms";
import { useParams, Link } from "react-router-dom";
import { destinationData } from "./data";

const DestinationDetails = () => {
  const [showLoader, setShowLoader] = React.useState(true);
  const { id } = useParams<{ id: string }>();

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

  const destination = destinationData.find(
    (destination) => destination.destination_id === id
  ); // Find the corresponding service object

  if (!destination) {
    return <Alert message="Destination not found" type="error" />;
  }

  const otherDestinations = destinationData.filter(
    (d) => d.destination_id !== id
  );

  return (
    <>
      {showLoader ? (
        <div className="max-w-5xl mx-auto px-4 py-8">
          <LoadingSkeleton />
        </div>
      ) : (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 md:py-10">
            <div className="lg:grid lg:grid-cols-[1fr,320px] lg:gap-8 xl:gap-10">
              {/* Main content */}
              <div className="min-w-0 order-1">
                <ImageViewer
                  images={destination?.imageUrl ?? []}
                  title={destination?.title}
                  price={destination?.price}
                  duration={destination?.duration}
                />
                <div className="mt-6 md:mt-8">
                  <Information
                    OverviewSubHeading={destination?.OverviewSubHeading}
                    OverviewDescription1={destination?.OverviewDescription1}
                    OverviewDescription2={destination?.OverViewDescription2}
                    listofHighlights={destination?.listofHighlights}
                    priceIncludes={destination?.priceIncludes}
                    priceExcludes={destination?.priceExcludes}
                    itinerary={destination?.itinerary}
                    usefulInformation={destination?.usefulInformation}
                  />
                </div>
                <div className="mt-6 text-center lg:text-left">
                  <p className="text-gray-600 dark:text-gray-400 mb-3">
                    Interested in this trip? We’d love to help you plan it.
                  </p>
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-ui-primary hover:bg-ui-secondary text-white font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2"
                  >
                    Contact us
                  </Link>
                </div>
              </div>

              {/* Right sidebar: Other destinations (desktop) / Below content (mobile) */}
              <aside className="mt-8 lg:mt-0 lg:order-2">
                <div className="lg:sticky lg:top-6">
                  <h2 className="text-sm font-semibold text-ui-primary uppercase tracking-widest mb-4">
                    Other destinations
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                    {otherDestinations.slice(0, 6).map((d) => (
                      <Link
                        key={d.destination_id}
                        to={`/destination/${d.destination_id}`}
                        onClick={() => window.scrollTo(0, 0)}
                        className={`block rounded-xl border overflow-hidden bg-white dark:bg-gray-800 shadow-sm hover:shadow-md transition-shadow border-gray-200 dark:border-gray-700 ${
                          d.destination_id === id
                            ? "ring-2 ring-ui-primary"
                            : ""
                        }`}
                      >
                        <div className="flex sm:block">
                          <div className="shrink-0 w-24 h-24 sm:w-full sm:aspect-[16/10] bg-gray-200 dark:bg-gray-700 overflow-hidden">
                            <img
                              src={d.imageUrl?.[0]?.url}
                              alt={`${d.title} – Nepal trek or tour, Amazing Nepal`}
                              className="w-full h-full object-cover"
                              loading="lazy"
                            />
                          </div>
                          <div className="flex-1 p-3 sm:p-4 min-w-0">
                            <p className="text-sm font-medium text-gray-900 dark:text-white line-clamp-2">
                              {d.title}
                            </p>
                            <p className="mt-1 text-sm text-ui-primary font-semibold">
                              {d.price}
                              <span className="text-gray-500 dark:text-gray-400 font-normal">
                                {" "}
                                / person
                              </span>
                            </p>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                  <Link
                    to="/destination"
                    onClick={() => window.scrollTo(0, 0)}
                    className="mt-4 block text-center text-sm font-medium text-ui-primary hover:text-ui-secondary transition-colors"
                  >
                    View all destinations →
                  </Link>
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default DestinationDetails;

interface Image {
  url: string;
  id: number;
}

interface ImageViewProps {
  images: Image[];
  title: string;
  price: string;
  duration?: string;
}

export const ImageViewer = ({ images, title, price, duration }: ImageViewProps) => {
  const firstImage = images?.[0]?.url;

  return (
    <div className="space-y-8">
      {/* Hero: featured image + title & price */}
      <div className="rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
        {firstImage && (
          <div className="relative aspect-[21/9] md:aspect-[3/1] bg-gray-200 dark:bg-gray-700">
            <img
              src={firstImage}
              alt={`${title} – Nepal trek or tour, Amazing Nepal`}
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 text-white">
              <h1 className="text-2xl md:text-3xl font-bold leading-tight max-w-3xl">
                {title}
              </h1>
              <div className="mt-3 flex flex-wrap items-center gap-4 text-white/95">
                <span className="font-semibold text-lg">{price} <span className="font-normal text-white/80">/ person</span></span>
                {duration && (
                  <span className="text-white/90">· {duration}</span>
                )}
              </div>
            </div>
          </div>
        )}
        {!firstImage && (
          <div className="aspect-[21/9] flex flex-col justify-end p-6 md:p-8 bg-gray-200 dark:bg-gray-700 rounded-t-2xl">
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">{title}</h1>
            <p className="mt-2 text-gray-700 dark:text-gray-300 font-medium">{price} / person {duration && `· ${duration}`}</p>
          </div>
        )}
      </div>

      {/* Gallery */}
      {images && images.length > 1 && (
        <div>
          <h2 className="text-sm font-semibold text-ui-primary uppercase tracking-widest mb-4">Gallery</h2>
          <PhotoProvider>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {images.map((image) => (
                <PhotoView key={image.id} src={image.url}>
                  <button type="button" className="block w-full aspect-[4/3] rounded-xl overflow-hidden border border-gray-200 dark:border-gray-700 bg-gray-100 dark:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2">
                    <img
                      src={image.url}
                      alt=""
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </button>
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      )}
    </div>
  );
};

export const Information = ({
  OverviewSubHeading,
  OverviewDescription1,
  OverviewDescription2,
  listofHighlights,
  priceIncludes,
  priceExcludes,
  itinerary,
  usefulInformation,
}: any) => {
  const [showOverview, setShowOverview] = useState(false);
  const [showItinerary, setShowItinerary] = useState(false);
  const [showPriceIncluded, setShowPriceIncluded] = useState(false);
  const [showInfo, setShowInfo] = useState(false);

  const handleClick = (type: string) => {
    setShowOverview(false);
    setShowItinerary(false);
    setShowPriceIncluded(false);
    setShowInfo(false);

    switch (type) {
      case "overview":
        setShowOverview(true);
        break;
      case "itinerary":
        setShowItinerary(true);
        break;
      case "priceIncluded":
        setShowPriceIncluded(true);
        break;
      case "usefulInformation":
        setShowInfo(true);
        break;
      default:
        break;
    }
  };

  React.useEffect(() => {
    setShowOverview(true);
  }, []);

  const tabs = [
    { id: "overview", label: "Overview", active: showOverview },
    { id: "itinerary", label: "Itinerary", active: showItinerary },
    { id: "priceIncluded", label: "Price & Included", active: showPriceIncluded },
    { id: "usefulInformation", label: "Useful Information", active: showInfo },
  ] as const;

  return (
    <>
      <div className="border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 rounded-t-xl overflow-hidden">
        <nav className="flex flex-wrap gap-1 -mb-px px-2" aria-label="Trip details">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => handleClick(tab.id)}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                tab.active
                  ? "border-ui-primary text-ui-primary"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>
      </div>

      {showOverview && (
        <Overview
          onClose={() => setShowOverview(false)}
          overviewSubHeading={OverviewSubHeading}
          overviewDescription1={OverviewDescription1}
          overviewDescription2={OverviewDescription2}
          listofHighlights={listofHighlights}
        />
      )}

      {showPriceIncluded && (
        <PriceIncludedExcluded
          onClose={() => setShowPriceIncluded(false)}
          priceIncluded={priceIncludes}
          priceExcluded={priceExcludes}
        />
      )}

      {showItinerary && (
        <IternaryContent
          onClose={() => setShowItinerary(false)}
          iternary={itinerary}
        />
      )}

      {showInfo && (
        <UsefulInformationContent
          onClose={() => setShowInfo(false)}
          usefulInformation={usefulInformation}
        />
      )}
    </>
  );
};

interface QuoteData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  date: string;
}
export const Quote = () => {
  const [QuoteData, setQuoteData] = useState<QuoteData | any>({
    name: "",
    email: "",
    phone: "",
    address: "",
    message: "",
    date: "",
  });
  const [alertMessage, setAlertMessage] = useState<string | null>(null);
  const [alertType, setAlertType] = useState<string>("");
  const [showAlert, setShowAlert] = useState(false);
  const [isSaving, setIsSaving] = useState(false);

  const handleOnChange = (value: string, key: string) => {
    setQuoteData((prevData: QuoteData) => ({
      ...prevData,
      [key]: value,
    }));
  };

  const handleOnSubmit = async () => {
    // Check if any required field is empty
    const requiredFields = ["name", "email", "phone", "address", "message"];
    const missingFields = requiredFields.filter((field) => !QuoteData[field]);

    if (missingFields.length > 0) {
      const missingFieldNames = missingFields
        .map((field) => field.charAt(0).toUpperCase() + field.slice(1))
        .join(", ");
      setAlertMessage(`Please provide ${missingFieldNames}.`);
      setAlertType("error");
      setShowAlert(true);
      return;
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(QuoteData.email)) {
      setAlertMessage("Please enter a valid email address.");
      setAlertType("error");
      setShowAlert(true);
      return; // Stop further execution
    } else {
      setIsSaving(true);
      setTimeout(() => {
        setIsSaving(false); // Hide spinner
        setAlertMessage("Request submitted successfully.");
        setAlertType("success");
        setShowAlert(true);
        setQuoteData({
          name: "",
          email: "",
          phone: "",
          address: "",
          message: "",
          date: "",
        });
      }, 1500); // Hide spinner after 1.5 seconds
    }
  };

  const heading = `uppercase cursor-pointer font-semibold cursor-pointer leading-relaxed lg:leading-8 text-gray-700 hover:bg-gray-100`;
  return (
    <>
      <div className="w-full justify-center p-2 shadow-2xl ">
        <div>
          <h1 className={`${heading} text-ui-primary text-center p-2 `}>
            Request a Quote
          </h1>
        </div>
        <div className="text-center p-2 w-full ">
          <form className="max-w-sm mx-auto space-y-2">
            <Input
              value={QuoteData.name}
              label="Your Name"
              type="text"
              placeholder="Enter your name"
              onChange={(e) => handleOnChange(e.target.value, "name")}
            />

            <Input
              value={QuoteData.email}
              label="Enter your email"
              type="email"
              placeholder="Enter your email"
              onChange={(e) => handleOnChange(e.target.value, "email")}
            />

            <Input
              value={QuoteData.phone}
              label="Phone Number"
              type="number"
              placeholder="Enter phone number"
              onChange={(e) => handleOnChange(e.target.value, "phone")}
            />

            <Input
              value={QuoteData.address}
              label="Address"
              type="text"
              placeholder="Enter your address"
              onChange={(e) => handleOnChange(e.target.value, "address")}
            />

            <Input
              value={QuoteData.date}
              label="Enter Arrival Date"
              type="date"
              placeholder="Enter Arrival Date"
              onChange={(e) => handleOnChange(e.target.value, "date")}
            />

            <TextArea
              value={QuoteData.message}
              label="Message"
              type="message"
              className="h-32"
              placeholder="Enter your message"
              onChange={(e) => handleOnChange(e.target.value, "message")}
            />
          </form>
          {alertMessage && (
            <div className="w-full pt-2">
              <Alert
                type={alertType}
                message={alertMessage}
                onClose={() => setShowAlert(!showAlert)}
              />
            </div>
          )}
          <div className=" md:mt-5 w-full text-center">
            <button
              className="bg-green-600 font-bold hover:bg-green-700 w-full text-center rounded-sm text-white py-1"
              onClick={() => handleOnSubmit()}
            >
              {isSaving ? (
                <div className="w-full flex justify-center items-center">
                  Saving &nbsp; <Spinner />
                </div>
              ) : (
                <span className="text-white py-1">Submit</span>
              )}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

interface ModalProps {
  onClose: () => void;
  overviewSubHeading: string;
  overviewDescription1: string;
  overviewDescription2: string;
  listofHighlights: string[];
}

const Overview: React.FC<ModalProps> = ({
  overviewSubHeading,
  overviewDescription1,
  overviewDescription2,
  listofHighlights,
}) => {
  const list = Array.isArray(listofHighlights) ? listofHighlights : [];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-b-xl border border-t-0 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Package details
        </h2>
        <div className="space-y-4 text-gray-700 dark:text-gray-300 leading-relaxed">
          {overviewDescription1 && <p className="text-justify">{overviewDescription1}</p>}
          {overviewDescription2 && <p className="text-justify">{overviewDescription2}</p>}
        </div>
        {overviewSubHeading && list.length > 0 && (
          <div className="mt-8">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
              {overviewSubHeading}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-justify pl-2">
              {list.map((highlight, index) => (
                <li key={index}>{highlight}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

interface PriceModalProps {
  onClose: () => void;
  priceIncluded: string[];
  priceExcluded: string[];
}

const PriceIncludedExcluded: React.FC<PriceModalProps> = ({
  priceExcluded,
  priceIncluded,
}) => {
  const included = Array.isArray(priceIncluded) ? priceIncluded : [];
  const excluded = Array.isArray(priceExcluded) ? priceExcluded : [];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-b-xl border border-t-0 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
            Included
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-justify pl-2">
            {included.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
            Excluded
          </h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-justify pl-2">
            {excluded.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

type itenaryProps = {
  day: string;
  activity: string;
  activitydetails?: string;
};

interface IternaryModalProps {
  onClose: () => void;
  iternary: itenaryProps[];
}

const IternaryContent: React.FC<IternaryModalProps> = ({ iternary }) => {
  const list = Array.isArray(iternary) ? iternary : [];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-b-xl border border-t-0 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-4">
          Detailed itinerary
        </h3>
        <ul className="space-y-5">
          {list.map((day, index) => (
            <li key={index} className="flex gap-4">
              <span className="shrink-0 font-semibold text-ui-primary text-sm w-16">
                {day?.day}
              </span>
              <div className="flex-1 min-w-0">
                <p className="font-medium text-gray-900 dark:text-white">{day?.activity}</p>
                {day?.activitydetails && (
                  <p className="mt-1 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                    {day.activitydetails}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

interface UsefulModalProps {
  onClose: () => void;
  usefulInformation: string[];
}

const UsefulInformationContent: React.FC<UsefulModalProps> = ({
  usefulInformation,
}) => {
  const list = Array.isArray(usefulInformation) ? usefulInformation : [];
  return (
    <div className="bg-white dark:bg-gray-800 rounded-b-xl border border-t-0 border-gray-200 dark:border-gray-700 shadow-sm overflow-hidden">
      <div className="p-6 md:p-8">
        <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-3">
          Useful information
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 text-justify pl-2">
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};
