import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";

import { Alert, Input, Spinner, TextArea } from "../../atoms";
import Destination from "./destination";

const DestinationDetails = () => {
  const imageUrl = [
    {
      id: 1,
      src: "/assets/destination/helicoptor.jpeg",
      alt: "Helicoptor",
    },
    {
      id: 2,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
    {
      id: 3,
      src: "/assets/destination/everesthelicoptor.jpeg",
      alt: "Everest by Helicoptor",
    },
    {
      id: 4,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
    {
      id: 1,
      src: "/assets/destination/helicoptor.jpeg",
      alt: "Helicoptor",
    },
    {
      id: 2,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
  ];

  return (
    <div className="bg-gray-50 py-10">
      <div className="container mx-auto  ">
        <div className="flex flex-col md:flex-row  p-5 gap-1 ">
          <div className=" py-5 md:py-10 md:w-4/5 bg-white ">
            <ImageViewer
              images={imageUrl}
              title="Destination Details"
              price="Rs.34500"
            />
            <div className="mt-5 md:mt-10  ">
              <Information />
            </div>
          </div>

          <>
            <div className="w-full md:w-1/5 py-5 md:py-5 bg-white ">
              <Quote />
              <ContactPerson />
            </div>
          </>
        </div>
      </div>
      <div>
        <Destination
          title="Explore More Destinations"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-5 xxl:grid-cols-5 gap-2 md:pt-20 p-5"
        />
      </div>
    </div>
  );
};

export default DestinationDetails;

interface Image {
  src: string;
  alt: string;
  id: number;
}

interface ImageViewProps {
  images: Image[];
  title: string;
  price: string;
}

export const ImageViewer = ({ images, title, price }: ImageViewProps) => {
  const picture =
    "lg:aspect-[10/9] bg-white w-full h-full cursor-pointer lg:object-cover p-1  shadow-sm   shrink-0 rounded-lg  lg:h-[200px] lg:max-w-[250px] lg:rounded-xl";
  return (
    <>
      <div className="text-center ml-2 relative mb-10">
        <div className="flex flex-wrap justify-around mb-2 ">
          <h4 className="text-lg  font-bold text-gray-800 uppercase tracking-wide">
            {title}
          </h4>
          <div className="flex flex-wrap items-center justify-between ">
            <p className="mb-1  px-3 text-gray-900 dark:text-gray-400">
              <span className="text-ui-purple font-bold text-md">
                £{price}{" "}
              </span>
              <span className="text-gray-500 font-normal text-xs">
                / Per Person
              </span>
            </p>
          </div>
        </div>
      </div>
      <div className="w-full">
        <PhotoProvider>
          <div className=" flex flex-wrap w-full justify-center ">
            {images.map((image, index) => (
              <PhotoView key={image.id} src={image.src}>
                <img src={image.src} alt={image.alt} className={picture} />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export const Information = () => {
  const [showOverview, setShowOverview] = useState(false);

  React.useEffect(() => {
    setShowOverview(true);
  }, []);

  const OverviewSubHeading = "Highlights of the Annapurna Sanctuary Trek:";
  const OverviewDescription1 =
    "The Annapurna Sanctuary Trek is a spectacular 14 days trip on the southern face of Annapurna I, a pleasant hike through the landscape and culture of Nepal. This walk leads to the fabulous amphitheater of highlands also known as Annapurna Base Camp. The course passes through waterfalls, impressive villages, terraced farmland, lush rhododendron forests and remarkable mountain views before heading the steep Annapurna. This is a good time to witness the beautiful peaks of the Annapurna giants that surround the mountains of the basin in the Annapurna region of the imperative center. Furthermore, a trip to Annapurna Base Camp is synonymous with entertainment and fun, as well as an extraordinary view of Nepal's plant and cultural heritage. This is by far one of the most enjoyable walks through various ethnic groups' lifestyles as well as the types of woods, plants, trees, and wildlife.";
  const OverViewDescription2 =
    "The Annapurna Sanctuary is a high glacial basin located beneath a ring of eleven major peaks in Nepal. The Annapurna Sanctuary Trek takes you directly to the frozen heart of the Annapurna Range, a magnificent arena of rock and ice of epic proportions. The Annapurna Sanctuary Trek itinerary is designed for hikers who want to visit World Heritage sites and Poon Hill on their way to the Annapurna Base Camp in a relaxed manner. This allows enough time to admire the breathtaking peaks of all the Annapurna Giants that surround the Annapurna Basin Mountains from the center of the imperative, which includes Annapurna I, Hiunchuli, Annapurna II, Gangapurna, Annapurna III, Machhapuchhre, Annapurna IV, and others.";
  const listofHighlights = [
    "Discover the city of Kathmandu and its heritage sites.",
    "Panoramic and close-up views of the Annapurna massif, explore the city of Pokhara on the shores of Lake.",
    "Unimpeded sunrise and sunset view from Poon Hill, picturesque villages.",
    "Experiencing the lifestyle and culture of Gurung and Magar people, who are very famous for Gorkha arm.",
    "Walk the narrow, cobbled path in the valley and the remote villages.",
    "Visit the old monastery, ancient tradition of the Gurung museum and waterfalls.",
    "Panoramic mountain flight to and from Pokhara.",
    "Walk through the dense forest of Rhododendron which is even more beautiful in the spring.",
  ];

  const paragraph = `  shadow-md text-sm p-1 cursor-pointer font-semibold cursor-pointer leading-relaxed lg:leading-8 text-gray-900 hover:bg-gray-100`;
  return (
    <>
      <div className=" bg-white  border border-gray-100   ">
        <div className="grid grid-cols-4 divide-x divide-ui-purple  ">
          <p
            className={`${paragraph}  ${
              showOverview ? "text-ui-purple border-b-2 border-ui-purple" : ""
            }`}
            onClick={() => setShowOverview(!showOverview)}
          >
            Overview
          </p>
          <p className={paragraph}>Itinerary</p>
          <p className={paragraph}>Price & Included</p>
          <p className={paragraph}>Useful Information</p>
        </div>
      </div>

      {showOverview && (
        <Overview
          onClose={() => setShowOverview(false)}
          overviewSubHeading={OverviewSubHeading}
          overviewDescription1={OverviewDescription1}
          overviewDescription2={OverViewDescription2}
          listofHighlights={listofHighlights}
          price="Rs. 1,00,000"
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
      <div className="w-full justify-center p-2 ">
        <div>
          <h1 className={`${heading} text-ui-purple text-justify p-2 `}>
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
  price: string;
}

const Overview: React.FC<ModalProps> = ({
  overviewSubHeading,
  overviewDescription1,
  overviewDescription2,
  listofHighlights,
  price,
}) => {
  const paragraph =
    " text-sm p-3 text-justify font-normal cursor-pointer leading-relaxed text-gray-500 text-break-all ";
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
              <h1 className="text-lg font-bold text-neutral-400">
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

const ContactPerson = () => {
  const paragraph =
    "text-xs font-normal text-center leading-relaxed text-gray-500 text-break-all";
  return (
    <>
      <div className="w-full justify-center p-2 ">
        <div className="w-full max-w-md bg-white  rounded-md shadow-lg dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-wrap justify-center p-5 pb-10">
            <img
              className="w-20 h-20 mb-3 rounded-full shadow-lg"
              src="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
              alt="Contact Person"
            />
            <div className="">
              <p className={paragraph}>
                Speak to a Nepal, the Himalayas & the best Tours Expert
              </p>
              <h5 className="mb-1 text-xl font-medium  dark:text-white text-ui-purple">
                Bonnie Green
              </h5>
              <h3 className="mb-3  text-sm font-normal text-gray-900 dark:text-gray-400">
                020 7084 6504
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
