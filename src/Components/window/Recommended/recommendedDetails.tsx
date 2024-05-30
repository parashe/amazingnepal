import React from "react";
import { recommendData } from "./data";
import { useParams } from "react-router-dom";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { Alert, LoadingSkeleton, Modal } from "../../atoms";
import { CrossIcon } from "../../svg";

interface RecommendedProps {
  className?: string;
  title?: string;
  CalledFromPage?: boolean;
}

const RecommendedDetails: React.FC<RecommendedProps> = () => {
  const { id } = useParams();
  const [showLoader, setShowLoader] = React.useState(true);

  const recommendedDataByID = recommendData.find(
    (item) => item.id === Number(id)
  );

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
        <>
          <div className="container mx-auto py-2">
            <LoadingSkeleton />
          </div>
        </>
      ) : (
        <div className="md:mt-5  container mx-auto">
          <div className="text-center mx-auto max-w-4xl gap-6">
            <div className="flex items-center justify-center p-2 ">
              <h2 className="font-black text-black uppercase dark:text-white leading-relaxed">
                <span className="text-3xl  font-black lg:text-4xl  text-black lg:font-extrabold ">
                  {recommendedDataByID?.place}
                </span>{" "}
                <p className="text-neutral-600 mt-2 md:mt-3 text-xs  dark:text-neutral-400">
                  {recommendedDataByID?.description}
                </p>
              </h2>
            </div>
          </div>

          {Array.isArray(recommendedDataByID?.attractions) ? (
            <div className="md:mt-10 md:px-10 p-2">
              {Array.isArray(recommendedDataByID?.attractions) &&
                recommendedDataByID?.attractions.map((attraction) => (
                  <CardDetails key={attraction.id} {...attraction} />
                ))}
            </div>
          ) : (
            <div className="md:mt-10 md:px-10 p-2  flex  justify-center w-full">
              <Alert
                message={`No data found for this place ${recommendedDataByID?.place}`}
                type="error"
              />
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default RecommendedDetails;

const CardDetails = (attraction: any) => {
  const [shomodal, setShomodal] = React.useState(false);
  const [details, setDetails] = React.useState({});

  // Function to slice a description string to a maximum of 500 characters
  function sliceDescription(description: string) {
    // Maximum number of words allowed in the sliced description
    const maxWords = 700;

    // Slice the description string up to maxWords characters
    let slicedDescription = description.substr(0, maxWords);

    // Find the index of the last space character in the sliced description
    const lastSpaceIndex = slicedDescription.lastIndexOf(".");

    // If a space exists before maxWords and it's not at the maxWords - 1 position
    if (lastSpaceIndex !== -1 && lastSpaceIndex !== maxWords - 1) {
      // Update slicedDescription to include only characters up to the last space index
      slicedDescription = slicedDescription.substr(0, lastSpaceIndex);
    }

    // Return the sliced description
    return slicedDescription;
  }

  const handleDetails = (attraction: any) => {
    setDetails(attraction);
    setShomodal(true);
  };
  const handleClose = () => {
    setShomodal(!shomodal);
    setDetails({});
  };
  return (
    <div className="bg-white rounded-lg shadow-md p-1 md:p-5 mt-5">
      <div className="flex flex-col sm:flex-col md:flex-row ">
        <img
          src={
            Array.isArray(attraction.imageUrl)
              ? attraction.imageUrl[0].url
              : attraction.imageUrl
          }
          alt={attraction.place}
          className="object-cover w-full md:max-w-lg h-80 aspect-[16/9] rounded-lg brightness-100 cursor-pointer"
          loading="lazy"
        />

        <div className="p-4 text-center md:text-justify">
          <h3 className="text-lg font-black text-ui-button-color mb-1">
            {attraction.place}
          </h3>
          <p className="text-sm mt-2 md:mt-5 text-justify text-gray-600 leading-relaxed   ">
            {sliceDescription(attraction.description)}...
          </p>
          <div className="py-1 md:py-5 ">
            <button
              onClick={() => handleDetails(attraction)}
              className="px-6  py-3 text-center uppercase   text-xs font-bold  bg-ui-button-color text-white hover:bg-ui-button-hover transition duration-300 cursor-pointer rounded-full "
            >
              View Details
            </button>
          </div>
        </div>
      </div>
      {shomodal && details && (
        <SeeAllModal onClose={handleClose} attraction={details} />
      )}
    </div>
  );
};

interface ModalProps {
  onClose: () => void;
  attraction?: any;
}

export const SeeAllModal = ({ onClose, attraction }: ModalProps) => (
  <Modal>
    <div className="bg-white  rounded-lg max-h-full md:max-h-[700px]  overflow-y-auto overflow-x-hidden z-50 justify-center items-center md:inset-0">
      <div className=" p-1 md:px-10 pt-5 w-full max-w-4xl max-h-full">
        <div className="text-center flex justify-end">
          <div className="justify-end cursor-pointer" onClick={onClose}>
            <CrossIcon className="w-6 h-6" color="red" />
          </div>
        </div>

        <div className="w-full bg-white rounded-lg pb-5 ">
          <h4 className="text-lg font-bold text-gray-800 uppercase tracking-wide pb-5">
            {attraction.place}
          </h4>
          <div className="flex flex-col  ">
            <div className="flex flex-col-reverse md:flex-row">
              <PhotoProvider>
                {attraction.imageUrl.map((image: any, index: number) => (
                  <div className="flex flex-row flex-wrap w-full justify-center">
                    <PhotoView key={index} src={image.url}>
                      <img
                        src={image.url}
                        alt={image.id}
                        className="object-cover w-full md:max-w-lg h-80 aspect-[16/9] rounded-lg brightness-100 cursor-pointer"
                      />
                    </PhotoView>
                  </div>
                ))}
              </PhotoProvider>
            </div>

            <div className="p-4 text-center md:text-justify">
              <h3 className="text-lg font-black text-ui-button-color mb-1">
                {attraction.place}
              </h3>
              <p className="text-sm mt-2 md:mt-5 text-justify text-gray-600 leading-relaxed   ">
                {attraction.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Modal>
);
