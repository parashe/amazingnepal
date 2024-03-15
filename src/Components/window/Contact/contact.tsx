import React, { useState } from "react";
import {
  Address,
  Alert,
  Input,
  LoadingSkeleton,
  Spinner,
  TextArea,
} from "../../atoms";
import { ContactPerson } from "../Destination/destinationDetails";

const Contact = () => {
  const [showLoader, setShowLoader] = React.useState(true);

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
  return (
    <>
      {showLoader ? (
        <div className="text-center">
          <LoadingSkeleton />
        </div>
      ) : (
        <div className="container mx-auto ">
          <div className="text-center mx-auto max-w-4xl gap-6 mb-5 md:mb-10">
            <div className="flex items-center justify-center ">
              <h2 className="text-4xl font-black text-black uppercase dark:text-white leading-relaxed">
                <span className=" font-black lg:text-4xl  text-black lg:font-extrabold ">
                  Contact{" "}
                  <span className=" font-black lg:text-4xl  text-pink-500 lg:font-extrabold ">
                    Us
                  </span>
                </span>
              </h2>
            </div>

            <p className="text-neutral-600 md:mt-3 text-sm dark:text-neutral-400">
              We'd love to hear from you! Get in touch with us using the
              information below. Please fill out the form below to contact us.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-3 py-2">
            <div className="col-span-3 ">
              <div className="w-full p-3 md:p-5 shadow-2xl">
                <AboutContact />
              </div>
              <div className="w-full p-2">
                <div className="flex flex-col md:flex-row ">
                  <Address />
                  <ContactPerson />
                </div>
              </div>
            </div>
            <div className="w-full cols-1 md:col-span-1">
              <div className="w-full p-2 shadow-2xl">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

interface ContactData {
  name: string;
  email: string;
  phone: string;
  address: string;
  message: string;
  date: string;
}
export const ContactForm = () => {
  const [QuoteData, setQuoteData] = useState<ContactData | any>({
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
    setQuoteData((prevData: ContactData) => ({
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

  return (
    <>
      <div className="w-full justify-center shadow-sm p-5 border rounded-lg  ">
        <div>
          <h4 className="text-lg text-center p-5 font-bold text-pink-500 uppercase tracking-wide py-5">
            Create Message
          </h4>
        </div>
        <div className="text-center p-2 w-full ">
          <form className="max-w-md mx-auto space-y-2 ">
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

export default Contact;

const AboutContact = () => {
  const paragraph = `text-sm p-1  text-justify font-normal  cursor-pointer cursor-pointer leading-relaxed lg:leading-relaxed text-gray-700 `;

  return (
    <>
      <div className="w-full h-full">
        <div className="text-center">
          <h4 className="text-lg  font-bold text-gray-800 uppercase tracking-wide py-5">
            About Amazing Nepal
          </h4>
        </div>

        <p className={paragraph}>
          Welcome to Amazing Nepal, your gateway to exploring the breathtaking
          beauty of the Himalayas and experiencing the rich cultural heritage of
          Nepal. Based in the United Kingdom, Amazing Nepal is dedicated to
          providing unparalleled tourism experiences that showcase the wonders
          of this Himalayan nation.
          <br />
          <br />
          At Amazing Nepal, we are passionate about sharing the magic of Nepal
          with travelers from around the world. Our team at Amazing Nepal is
          committed to delivering top-notch travel services, ensuring that every
          journey with us is nothing short of extraordinary. From the majestic
          peaks of the Himalayas to the vibrant streets of Kathmandu, Amazing
          Nepal offers a wide range of meticulously crafted tours and
          expeditions that cater to every traveler's preferences. Whether you're
          seeking a thrilling trekking adventure, a cultural immersion
          experience, or a spiritual journey, we have the perfect itinerary for
          you.
          <br />
          <br />
          Our team comprises experienced and enthusiastic leaders who are
          experts in organizing tours, treks, and expeditions across Nepal. With
          our in-depth knowledge of the region and dedication to customer
          satisfaction, we guarantee an unforgettable travel experience for our
          clients. At Amazing Nepal, we prioritize customer satisfaction above
          all else. We provide personalized trip itineraries tailored to your
          preferences, ensuring that every aspect of your journey exceeds your
          expectations.
          <br />
          <br />
          {/* <div className="  ">
          <Button
            onClick={handleClick}
            className="px-6 py-2 rounded-sm text-xs bg-gradient-to-r from-pink-600 to-purple-500  font-medium hover:from-pink-600 hover:to-purple-600 transition duration-50 text-white cursor-pointer"
          >
            Read More
          </Button>
        </div> */}
          {/* From arranging accommodations to organizing transportation, we take care
        of every detail so that you can focus on enjoying your adventure.
        Whether you're a seasoned traveler or embarking on your first trip to
        Nepal, Amazing Nepal is here to make your travel dreams a reality.
        Contact us today to start planning your unforgettable journey to the
        Land of the Himalayas. */}
        </p>
      </div>
    </>
  );
};
