import { HomeScreen } from "./HomeScreen";
import { DestinationHomeContent } from "../Destination/destination_home";

export const HomeFirstScreen = () => {
  return (
    <>
      <div className="w-full h-full flex flex-col items-center">
        <div className="relative z-10 w-full">
          <HomeScreen />
        </div>
        <div className="mb-6">
          <DestinationHomeContent />
        </div>
      </div>
    </>
  );
};
