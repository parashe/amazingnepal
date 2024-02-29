import React, { useState } from "react";
import { Address, Alert, Input, Spinner, TextArea, Title } from "../../atoms";
import { ContactPerson } from "../Destination/destinationDetails";
import { AboutContent } from "../Rating/rating";

const Contact = () => {
  return (
    <div className="container mx-auto">
      <div className="w-full h-full py-10 ">
        <div className=" py-2 ">
          <Title title="Contact Us" />
        </div>
      </div>
      <div className="w-full  h-full   justify-center grid grid-cols-3 gap-3 py-2">
        <div className="w-full p-2">
          <AboutContent />
        </div>
        <div className="w-full  p-2">
          <ContactForm />
        </div>
        <div className="w-full   p-2  ">
          <Address />
          <ContactPerson />
        </div>
      </div>
    </div>
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
          <h4 className="text-lg text-justify p-5 font-bold text-gray-800 uppercase tracking-wide py-5">
            Create Message for Us
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
