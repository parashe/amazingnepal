import { Carousel } from "../Carousel";
import { DestinationHomeContent } from "../Destination/destination_home";

export const HomeFirstScreen = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="relative w-full">
          <Carousel />
        </div>
        <div className="mb-6">
          <DestinationHomeContent />
        </div>
      </div>
    </>
  );
};
