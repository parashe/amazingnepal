import { PhotoProvider, PhotoView } from "react-photo-view";
import { galleryData } from "./data";

const Gallery = () => {
  const picture =
    "lg:aspect-[10/9] bg-white w-full h-full cursor-pointer lg:object-cover p-1  shadow-sm   shrink-0 rounded-lg  lg:h-[300px] lg:max-w-[350px] lg:rounded-xl";
  return (
    <>
      <div className="container-xl mx-auto ">
        {/* <div className="text-center py-5">
          <h4 className="text-2xl  font-bold text-gray-800 uppercase tracking-wide ">
            <span className="text-indigo-900 font-extrabold">
              Amazing Nepal
            </span>{" "}
            Photo Gallery
          </h4>
        </div> */}
        <div className="w-full py-5">
          <PhotoProvider>
            <div className=" flex flex-wrap w-full justify-center ">
              {galleryData?.map((image, index) => (
                <PhotoView key={image.id} src={image.src}>
                  <img src={image.src} alt={image.alt} className={picture} />
                </PhotoView>
              ))}
            </div>
          </PhotoProvider>
        </div>
      </div>
    </>
  );
};

export default Gallery;
