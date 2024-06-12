import { MailIcon, PhoneIcon, WhatsAppIcon } from "../../svg";

export const ContactPerson = () => {
  const paragraph =
    "text-xs font-normal text-center leading-relaxed text-neutral-600 dark:text-gray-400 break-words";
  return (
    <div className="flex justify-center items-center p-4  dark:bg-gray-900">
      <div className="w-full max-w-sm bg-white shadow-lg rounded-lg overflow-hidden dark:bg-gray-800 dark:border-gray-700">
        <div className="flex flex-col items-center p-6">
          <img
            className="w-24 h-24 mb-4 rounded-full shadow-lg"
            src="/assets/hem.jpg"
            alt="Contact Person"
          />
          <div className="text-center">
            <p className={paragraph}>
              Speak to a Nepal, the Himalayas & the best Tours Expert
            </p>
            <h5 className="mb-2 text-lg font-bold dark:text-white text-ui-primary">
              TEKRAJ KAFLE
            </h5>
            <div className="space-y-2">
              <a
                href="tel:+447411079563"
                className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-ui-primary transition"
              >
                <PhoneIcon className="w-5 h-5" color="#0097f3" />
                <span>+44-7411079563</span>
              </a>
              <a
                href="https://wa.me/447411079563"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-ui-primary transition"
              >
                <WhatsAppIcon className="w-5 h-5" color="#25D366" />
                <span>+44-7411079563</span>
              </a>
              <a
                href="mailto:info@visitamazingnepal.com"
                className="flex items-center justify-center space-x-2 text-gray-700 dark:text-gray-200 hover:text-ui-primary transition"
              >
                <MailIcon className="w-5 h-5" color="#0097f3" />
                <span>info@visitamazingnepal.com</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
