import { MailIcon, PhoneIcon, WhatsAppIcon } from "../../svg";

export const ContactPerson = () => {
  const paragraph =
    "text-xs font-normal text-center leading-relaxed text-neutral-600 dark:text-gray-400 text-break-all";
  return (
    <>
      <div className="w-full justify-center items-center p-2   ">
        <div className="w-full min-w-[300px]  max-w-full  md:max-w-md bg-white shadow-xl  rounded-md  dark:bg-gray-800 dark:border-gray-700">
          <div className="flex flex-wrap justify-center p-5 pb-10">
            <img
              className="w-20 h-20 mb-3 rounded-full shadow-lg"
              src="/assets/hem.jpg"
              alt="Contact Person"
            />
            <div className="text-center">
              <p className={paragraph}>
                Speak to a Nepal, the Himalayas & the best Tours Expert
              </p>
              <h5 className="mb-1 text-lg font-black  dark:text-white text-ui-primary">
                TEKRAJ KAFLE
              </h5>
              <h3 className="mb-3  text-sm font-normal text-gray-900 dark:text-gray-400">
                <span className=" font-black text-ui-primary">
                  <PhoneIcon className="w-4 h-4 inline-block" color="#0097f3" />
                </span>{" "}
                +44-7411079563 
                <br />
                <span className=" font-black text-ui-primary">
                  <WhatsAppIcon
                    className="w-4 h-4 inline-block"
                    color="#25D366"
                  />
                </span>{" "}
                +44-7411079563 ,
                <br />
                <span>
                  <MailIcon className="w-4 h-4 inline-block" color="#0097f3" />
                </span>{" "}
                info@visitamazingnepal.com
              </h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
