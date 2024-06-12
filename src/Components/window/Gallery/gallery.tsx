import React from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import { galleryData } from "./data";
import { GalleryLoadingSkeleton } from "../../atoms";

const Gallery = () => {
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

  const picture =
    "lg:aspect-[10/9] bg-white w-full h-full cursor-pointer lg:object-cover p-1  shadow-sm   shrink-0 rounded-lg  lg:h-[300px] lg:max-w-[350px] lg:rounded-xl";
  return (
    <>
      {showLoader ? (
        <>
          <div className="text-center">
            <GalleryLoadingSkeleton />
          </div>
        </>
      ) : (
        <div className="container-xl mx-auto  ">
          <div className="w-full h-full py-10 lg:py-10 lg:px-10 ">
            <div className=" py-2 lg:py-10">
              <div className="text-center mx-auto max-w-2xl gap-6  ">
                <h2 className="text-2xl sm:text-5xl font-black text-black uppercase dark:text-white  ">
                  <span className="bg-ui-primary inline-block text-transparent bg-clip-text font-black">
                    EXPLORE{" "}
                  </span>{" "}
                  OUR STUNNING{" "}
                  <span className="bg-ui-primary inline-block text-transparent bg-clip-text font-black">
                    {" "}
                    Gallery
                  </span>
                </h2>
                <p className="text-gray-500 md:mt-3 dark:text-neutral-500 text-sm">
                Explore our mesmerizing gallery and lose yourself in a captivating array of stunning visuals, each more breathtaking than the last.
                </p>
              </div>
            </div>

            <div className="w-full py-5">
              <PhotoProvider>
                <div className=" flex flex-wrap w-full justify-center ">
                  {galleryData?.map((image, index) => (
                    <PhotoView key={image.id} src={image.src}>
                      <img
                        src={image.src}
                        alt={image.alt}
                        className={picture}
                      />
                    </PhotoView>
                  ))}
                </div>
              </PhotoProvider>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Gallery;
