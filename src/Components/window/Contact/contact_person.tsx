
export const ContactPerson = () => {
    const paragraph =
      "text-xs font-normal text-center leading-relaxed text-neutral-600 dark:text-gray-400 text-break-all";
    return (
      <>
        <div className="w-full justify-center p-2   ">
          <div className="w-full max-w-md bg-white shadow-xl  rounded-md  dark:bg-gray-800 dark:border-gray-700">
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
                <h5 className="mb-1 text-xl font-black  dark:text-white text-pink-500">
                  TEKRAJ KAFLE
                </h5>
                <h3 className="mb-3  text-sm font-normal text-gray-900 dark:text-gray-400">
                  +447411079563 ,
                  <br />
                  info@visitamazingnepal.com
                </h3>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  };