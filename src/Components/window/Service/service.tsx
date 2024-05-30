import React from "react";
import { servicesData } from "./data";
import { Card } from "../../UI/Card/card";
import { Button, LoadingSkeleton, Modal } from "../../atoms";
import { CrossIcon } from "../../svg";

export const Services: React.FC = () => {
  const [showLoader, setShowLoader] = React.useState(true);
  const [showServiceModal, setShowServiceModal] = React.useState(false);
  const [serviceId, setServiceId] = React.useState<string>("");

  const handleOnClickSeeMore = (id: string) => {
    setServiceId(id);
    setShowServiceModal(true);
  };

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
        <div className="mt-10 md:mt-16 container mx-auto ">
          <div className="flex items-center justify-center ">
            <h3
              className="text-3xl md:text-4xl max-w-4xl  font-extrabold  text-gray-900 "
              style={{ lineHeight: "1.2" }}
            >
              <p>
                {" "}
                <span className="text-gray-800  uppercase font-extrabold leading-10">
                  Our Services{" "}
                </span>
              </p>

              <p className="text-neutral-600 md:mt-3 p-2  font-medium text-sm  dark:text-neutral-400">
                Explore the wonders of Nepal with our diverse range of services
                tailored to enhance your travel experience.
              </p>
            </h3>
          </div>
          {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:pt-20 p-5">
            {servicesData.map((service, index) => (
              <Card>
                <div className="absolute top-0 right-0 bg-gradient-to-r from-blue-400 via-red-400 to-pink-500 text-white font-bold py-1 px-5 rounded-tr-lg rounded-bl-full transform hover:scale-105 transition-transform">
                  <span className="text-xs">Features</span>
                </div>

                <img
                  className="aspect-[16/9] object-contain   w-full rounded-lg max-h-[150px] p-2"
                  src={service.imageUrl}
                  alt=""
                />

                <div className="p-5">
                  <h5 className="mb-2 text-lg font-bold tracking-tight text-gray-900 leading-relaxed dark:text-white">
                    {service.title}
                  </h5>

                  <p className="mb-3 text-xs text-justify p-3 text-gray-900 dark:text-gray-400">
                    {service.content}
                  </p>
                  <div className="text-center  ">
                    <Button
                      onClick={() => handleOnClickSeeMore(service.service_id)}
                      className="px-4 py-2 uppercase rounded-sm text-xs bg-gradient-to-r from-blue-400 via-red-400 to-pink-500  font-medium hover:from-pink-600 hover:via-red-400 hover:to-blue-500 transition duration-50 text-white cursor-pointer"
                    >
                      Explore Details
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
      {serviceId && showServiceModal && (
        
        <ServiceDetails
          service_Id={serviceId as string}
          onClose={() => setShowServiceModal(false)}
        />
      )}
    </>
  );
};

export const ServiceDetails = ({
  service_Id,
  onClose,
}: {
  service_Id: string;
  onClose: () => void;
}) => {
  const service = servicesData.find(
    (service) => service.service_id === service_Id
  ); // Find the corresponding service object

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
  <>
     <Modal onClose={onClose}>
     <div className="bg-white fixed inset-0 rounded-lg max-h-full  overflow-y-auto overflow-x-hidden z-100 justify-center items-center md:inset-0">
      <div className="px-0 sm:px-20 py-5 md:py-10 w-full max-w-full max-h-full">
        <div className="flex justify-end">
          <div
            className="justify-end cursor-pointer rounded-full bg-gray-200 px-2 py-2 hover:bg-yellow-50"
            onClick={onClose}
          >
            <CrossIcon className="w-6 h-6" color="red" />
          </div>
        </div>
        <div className="container mx-auto px-4 py-8 bg-white overflow-auto">
          <div className="w-full h-full text-justify ">
            <h4 className="text-2xl text-center text-ui-primary  font-black  uppercase tracking-wide ">
              {service.title}
            </h4>
            <img
              src={service.imageUrl}
              alt={service.title}
              className="object-contain w-full h-48 md:h-64 rounded-lg mb-8"
            />
            <p className="text-sm text-neutral-600 font-semibold leading-relaxed mb-6">
              {service.content}
            </p>
            <hr className="border-t-2 border-gray-300 my-8" /> {/* Divider */}
            <h2 className="text-xl font-black mb-4 text-ui-primary">
              Our Areas of Assistance:
            </h2>
            <ul className="list-disc pl-6 text-sm text-gray-800">
              {service.detailsContent.map((detail, index) => (
                <li className="mb-2" key={index}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      </div>
    </Modal>
    </>
  );
};
