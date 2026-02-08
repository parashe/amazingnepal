import React, { useState } from "react";
import {
  Address,
  Alert,
  CentralSpinner,
  Input,
  LoadingSkeleton,
  Modal,
  TextArea,
} from "../../atoms";
import { ContactPerson } from "./contact_person";

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
        <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 md:py-10">
          <header className="text-center mb-8 md:mb-10">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3">
              Contact <span className="text-ui-primary">Us</span>
            </h1>
            <p className="text-gray-600 dark:text-gray-400 max-w-lg mx-auto">
              Have a question or ready to plan your trip? Send us a message and we’ll get back to you soon.
            </p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-5 gap-6 lg:gap-10">
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
            <div className="lg:col-span-3 space-y-6">
              <section>
                <h2 className="text-xs font-semibold text-ui-primary uppercase tracking-widest mb-2">
                  Speak with the expert
                </h2>
                <ContactPerson />
              </section>
              <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
                <Address />
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
    
    // Prevent default form submission
  
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
      <div className="w-full max-w-md rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900 shadow-lg shadow-gray-200/50 dark:shadow-none overflow-hidden">
        <div className="px-6 pt-6 pb-1 border-b border-gray-100 dark:border-gray-800">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            Get in touch
          </h3>
          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
            Send us a message and we’ll get back to you soon.
          </p>
        </div>
        <div className="p-6">
          <form onSubmit={(e) => e.preventDefault()} className="space-y-1">
            <Input
              value={QuoteData.name}
              label="Your name"
              type="text"
              placeholder="Your name"
              onChange={(e) => handleOnChange(e.target.value, "name")}
            />
            <Input
              value={QuoteData.email}
              label="Email"
              type="email"
              placeholder="you@example.com"
              onChange={(e) => handleOnChange(e.target.value, "email")}
            />
            <Input
              value={QuoteData.phone}
              label="Phone"
              type="tel"
              placeholder="Your phone number"
              onChange={(e) => handleOnChange(e.target.value, "phone")}
            />
            <Input
              value={QuoteData.address}
              label="Address"
              type="text"
              placeholder="Your address"
              onChange={(e) => handleOnChange(e.target.value, "address")}
            />
            <TextArea
              value={QuoteData.message}
              label="Message"
              type="message"
              placeholder="How can we help?"
              onChange={(e) => handleOnChange(e.target.value, "message")}
            />
          </form>
          {showAlert && alertMessage && (
            <div className="mt-4">
              <Alert
                type={alertType}
                message={alertMessage}
                onClose={() => setShowAlert(false)}
              />
            </div>
          )}
          <div className="mt-6">
            <button
              type="button"
              className="w-full py-3 px-4 rounded-lg bg-ui-primary hover:bg-ui-secondary text-white font-semibold text-base transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-offset-2 dark:focus:ring-offset-gray-900"
              onClick={handleOnSubmit}
            >
              Send message
            </button>
          </div>
        </div>
      </div>

      {isSaving && (
        <Modal>
          <CentralSpinner />
        </Modal>
      )}
    </>
  );
};

export default Contact;
