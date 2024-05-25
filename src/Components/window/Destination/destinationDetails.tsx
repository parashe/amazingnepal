import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Alert, Input, LoadingSkeleton, Spinner, TextArea } from "../../atoms";
import Destination from "./destination";
import { useParams } from "react-router-dom";
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

  return (
    <>
      {showLoader ? (
        <>
          <div className="container mx-auto py-2">
            <LoadingSkeleton />
          </div>
        </>
      ) : (
        <div className="flex-content bg-gray-100">
          <div className="container-xl mx-auto   p-5 ">
            <div className="flex flex-col md:flex-row  gap-1 ">
              <div className="  md:px-5   bg-white ">
                <ImageViewer
                  images={destination?.imageUrl}
                  title={destination?.title}
                  price={destination?.price}
                />
                <div className="mt-5 md:mt-10  ">
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
              </div>

              <>
                {/* <div className="md:w-1/5 ">
                  <div className="text-right ">
                    <Quote />
                    <ContactPerson />
                  </div>
                </div> */}
              </>
            </div>
          </div>
          <div>
            <Destination
              title="Explore More Destinations"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 xxl:grid-cols-5 gap-2 md:pt-20 p-5 md:pb-20"
              CalledFromPage={true}
            />
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
}

export const ImageViewer = ({ images, title, price }: ImageViewProps) => {
  const picture =
    "aspect-[16/9] bg-white w-full h-full cursor-pointer lg:object-cover p-1  shadow-sm  rounded-lg  lg:h-[300px] lg:max-w-[350px] ";
  return (
    <>
      <div className="text-center ml-2 relative mb-10 bg-gradient-to-r from-blue-400 via-red-400 to-pink-500 py-3 md:py-5">
        <div className="flex flex-wrap justify-around mb-2">
          <h4 className="text-lg font-black text-white uppercase tracking-wide">
            {title}
          </h4>
          <div className="flex items-center justify-between  rounded-lg  ">
            <div className="flex items-center">
              <p className="mb-1 text-white text-lg font-bold">{price}</p>{" "}
              &nbsp;
              <p className="text-white text-sm font-normal">Per Person</p>
            </div>
          </div>
        </div>
      </div>

      <div className="">
        <PhotoProvider>
          <div className="flex flex-wrap justify-center mx-auto">
            {images.map((image, index) => (
              <PhotoView key={image.id} src={image.url}>
                <img
                  src={image.url}
                  alt="Destination images"
                  className={picture}
                />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
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

  const paragraph = ` font-bold md:p-5  shadow-md   text-xs md:text-sm cursor-pointer  cursor-pointer leading-relaxed   hover:bg-gray-100`;
  return (
    <>
      <div className="bg-white md:p-4  ">
        <div className="grid grid-cols-4 divide-x divide-pink-500 text-center">
          <p
            className={`${paragraph} ${
              showOverview ? "text-pink-500 border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick("overview")}
          >
            Overview
          </p>
          <p
            className={`${paragraph} ${
              showItinerary ? "text-pink-500 border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick("itinerary")}
          >
            Itinerary
          </p>
          <p
            className={`${paragraph} ${
              showPriceIncluded
                ? "text-pink-500 border-b-2 border-pink-500"
                : ""
            }`}
            onClick={() => handleClick("priceIncluded")}
          >
            Price & Included
          </p>
          <p
            className={`${paragraph} ${
              showInfo ? "text-pink-500 border-b-2 border-pink-500" : ""
            }`}
            onClick={() => handleClick("usefulInformation")}
          >
            Useful Information
          </p>
        </div>
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

  const heading = `text-lg uppercase cursor-pointer font-semibold cursor-pointer leading-relaxed lg:leading-8 text-gray-700 hover:bg-gray-100`;
  return (
    <>
      <div className="w-full justify-center p-2 shadow-2xl ">
        <div>
          <h1 className={`${heading} text-pink-500 text-center p-2 `}>
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
              className="bg-green-600 font-bold hover:bg-green-700 w-full text-center   rounded-sm text-sm text-white  py-1"
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
  console.log(
    overviewDescription1,
    overviewDescription2,
    "list of highlights",
    listofHighlights
  );
  const paragraph =
    " text-sm p-3 text-justify  font-normal cursor-pointer leading-relaxed text-gray-500 text-break-all ";
  return (
    <div>
      <div className="bg-white  py-5    h-full overflow-hidden transform transition-all ">
        <div className="md:px-10 py-4 leading-relaxed">
          <div className="text-center p-2 ">
            <div className="flex flex-wrap justify-between">
              <h1 className="text-xl font-bold text-gray-900">
                Package Details
              </h1>
            </div>
            <p className={paragraph}>{overviewDescription1}</p>
            <p className={paragraph}>{overviewDescription2}</p>
            <div className="p-2 md:p-6 text-justify">
              <h1 className="text-lg font-bold text-gray-900">
                {overviewSubHeading}
              </h1>

              <ul className="list-disc">
                {listofHighlights.map((highlight, index) => (
                  <li key={index} className={paragraph}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
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
  onClose,
  priceExcluded,
  priceIncluded,
}) => {
  const paragraph =
    " text-sm p-3 text-justify font-normal cursor-pointer leading-relaxed text-gray-500 text-break-all ";
  return (
    <div>
      <div className="bg-white  py-5    h-full overflow-hidden transform transition-all ">
        <div className="md:px-10 py-4 leading-relaxed">
          <div className="text-center p-2 ">
            <div className="p-2 md:p-6 text-justify">
              <h1 className="text-lg font-bold text-gray-900">Included</h1>

              <ul className="list-disc">
                {priceIncluded.map((highlight, index) => (
                  <li key={index} className={paragraph}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-2 md:p-6 text-justify">
              <h1 className="text-lg font-bold text-gray-900">Excluded</h1>

              <ul className="list-disc">
                {priceExcluded?.map((highlight, index) => (
                  <li key={index} className={paragraph}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
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

const IternaryContent: React.FC<IternaryModalProps> = ({
  onClose,
  iternary,
}) => {
  const paragraph =
    " text-sm p-3 text-justify font-normal cursor-pointer leading-relaxed text-gray-500 text-break-all ";
  return (
    <div>
      <div className="bg-white  py-5    h-full overflow-hidden transform transition-all ">
        <div className="md:px-10 py-4 leading-relaxed">
          <div className="text-center p-2 ">
            <div className="p-2 md:p-6 text-justify">
              <h1 className="text-lg font-bold text-gray-900">
                Detail Itineries
              </h1>

              <ul className="list-disc">
                {iternary.map((highlight, index) => (
                  <li key={index} className={paragraph}>
                    <span className="font-bold"> {highlight?.day} </span> -{" "}
                    {highlight?.activity}
                    <br />
                    <p>{highlight?.activitydetails}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface UsefulModalProps {
  onClose: () => void;
  usefulInformation: string[];
}

const UsefulInformationContent: React.FC<UsefulModalProps> = ({
  onClose,
  usefulInformation,
}) => {
  const paragraph =
    " text-sm p-3 text-justify font-normal cursor-pointer leading-relaxed text-gray-500 text-break-all ";
  return (
    <div>
      <div className="bg-white  py-5    h-full overflow-hidden transform transition-all ">
        <div className="md:px-10 py-4 leading-relaxed">
          <div className="text-center p-2 ">
            <div className="p-2 md:p-6 text-justify">
              <h1 className="text-lg font-bold text-gray-900">
                Detail Itineries
              </h1>

              <ul className="list-disc">
                {usefulInformation.map((highlight, index) => (
                  <li key={index} className={paragraph}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
