import React from "react";
import { destinationData } from "./data";
import { DestinationCard } from "../../UI/Card/card";
import { LoadingSkeleton } from "../../atoms";
import { Link } from "react-router-dom";
import { ArrowRight } from "../../svg";

interface DestinationHomeContentProps {
    destinations: any[];
  }
  
  export const DestinationHomeContent: React.FC<DestinationHomeContentProps> = ({ destinations }) => {
    return (
      <div className="md:mt-10 container mx-auto">
        <div className="flex flex-row justify-end px-5">
          <div className="text-center relative group">
            <Link to="/destination">
              <button className="animate-bounce mx-auto bg-pink-500 rounded-full px-3 py-3 font-bold text-white hover:bg-pink-600 transition duration-300 uppercase">
                <ArrowRight color="white" className="w-6 h-6" />
              </button>
            </Link>
          </div>
        </div>
  
        {/* Destination cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3 gap-6 md:pt-10 px-5">
          {destinations.map((destination, index) => (
            <DestinationCard key={index} {...destination} />
          ))}
        </div>
      </div>
    );
  };
