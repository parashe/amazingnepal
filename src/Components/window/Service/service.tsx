import React from "react";
import { servicesData } from "./data";
import { Card } from "../../UI/Card/card";
import { Button, Title } from "../../atoms";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Services: React.FC = () => {
  const navigate = useNavigate();

  const handleOnClickSeeMore = (service_id: string) => {
    navigate(`/services/${service_id}`);
  };
  return (
    <div className="mt-10 md:mt-16 container mx-auto">
      <Title title="Our Services" />

      {/* <div className="flex flex-wrap flex-1 gap-6 mt-5 md:mt-20  mx-auto p-3 "> */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 md:pt-20 p-5">
        {servicesData.map((service, index) => (
          <Card>
            <div className="absolute top-0 right-0 bg-gradient-to-r from-pink-400 via-red-500 to-purple-500 text-white font-bold py-1 px-5 rounded-tr-lg rounded-bl-full transform hover:scale-105 transition-transform">
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
                  className="px-4 py-2 rounded-sm text-xs bg-gradient-to-r  from-pink-400 via-red-500 to-purple-500  font-medium hover:from-pink-600 hover:to-purple-600 transition duration-50 text-white cursor-pointer"
                >
                  See more
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

const ServiceDetails: React.FC = () => {
  const { id } = useParams<{ id: string }>(); // Get the service_id parameter from the URL
  const service = servicesData.find((service) => service.service_id === id); // Find the corresponding service object

  if (!service) {
    return <div>Service not found</div>;
  }

  const paragraph = `text-sm p-1  font-normal  cursor-pointer cursor-pointer leading-relaxed lg:leading-relaxed text-gray-700 `;

  return (
    <div className="container mx-auto px-4">
      <div className="w-full h-full text-justify py-8 md:py-10">
        <h4 className="text-xl font-bold text-gray-800 uppercase tracking-wide py-5">
          {service.title}
        </h4>
        <img
          src={service.imageUrl}
          alt={service.title}
          className="aspect-[16/9] object-contain rounded-lg max-h-[250px] p-2"
        />
        <p className={paragraph}>{service.content}</p>
        <div className="border-t-2 border-gray-300 my-8"></div> {/* Divider */}
        <h2 className="text-lg font-bold text-neutral-600 mb-4">
          What We Assist With:
        </h2>
        <ul className="list-disc pl-4">
          {service.detailsContent.map((detail, index) => (
            <li className={paragraph} key={index}>
              {detail}
            </li>
          ))}
        </ul>
      </div>
      <Services />{" "}
      {/* Uncomment if this is where you want to render the Services component */}
    </div>
  );
};

export default ServiceDetails;
