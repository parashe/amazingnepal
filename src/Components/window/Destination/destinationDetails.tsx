import React, { useState } from "react";
import { PhotoProvider, PhotoView } from "react-photo-view";
import "react-photo-view/dist/react-photo-view.css";
import { CrossIcon } from "../../svg";

const DestinationDetails = () => {
  const imageUrl = [
    {
      id: 1,
      src: "/assets/destination/helicoptor.jpeg",
      alt: "Helicoptor",
    },
    {
      id: 2,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
    {
      id: 3,
      src: "/assets/destination/everesthelicoptor.jpeg",
      alt: "Everest by Helicoptor",
    },
    {
      id: 4,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
    {
      id: 1,
      src: "/assets/destination/helicoptor.jpeg",
      alt: "Helicoptor",
    },
    {
      id: 2,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
    {
      id: 3,
      src: "/assets/destination/everesthelicoptor.jpeg",
      alt: "Everest by Helicoptor",
    },
    {
      id: 4,
      src: "/assets/destination/everest1.jpeg",
      alt: "Everest",
    },
  ];

  return (
    <div className="container-xl mx-auto py-5 md:py-5 bg-gray-50">
      <div className="flex flex-col md:flex-row  p-5 gap-1 ">
        <div className=" py-5 md:py-10 md:w-4/5 bg-white ">
          <ImageViewer images={imageUrl} title="Destination Details" />
          <div className="mt-5 md:mt-10  ">
            <Information />
          </div>
        </div>

        <>
          <div className=" md:w-2/5 ">
            <Quote />
          </div>
        </>
      </div>
    </div>
  );
};

export default DestinationDetails;

interface Image {
  src: string;
  alt: string;
  id: number;
}

interface ImageViewProps {
  images: Image[];
  title: string;
}

export const ImageViewer = ({ images, title }: ImageViewProps) => {
  const picture =
    "lg:aspect-[10/9] bg-white w-full h-full cursor-pointer lg:object-cover p-1  shadow-sm   shrink-0 rounded-lg  lg:h-[200px] lg:max-w-[250px] lg:rounded-xl";
  const paragraph =
    " text-lg p-3 font-bold cursor-pointer leading-relaxed lg:leading-8 text-gray-700 hover:bg-gray-100";
  return (
    <>
      <div className="text-center ml-2 relative mb-10">
        <h4 className="text-lg  font-bold text-gray-800 uppercase tracking-wide">
          {title}
        </h4>
        <div
          style={{ top: "1.5rem", transform: "translateY(50%)" }}
          className="h-2 w-16 absolute bottom-0 right-1/2 mt-3 bg-gradient-to-r from-transparent to-ui-purple bg-repeat-x bg-linear-gradient"
        ></div>
      </div>
      <div className="w-full">
        <PhotoProvider>
          <div className=" flex flex-wrap justify-center ">
            {images.map((image, index) => (
              <PhotoView key={image.id} src={image.src}>
                <img src={image.src} alt={image.alt} className={picture} />
              </PhotoView>
            ))}
          </div>
        </PhotoProvider>
      </div>
    </>
  );
};

export const Information = () => {
  const [showOverview, setShowOverview] = useState(false);

  const OverviewSubHeading = "Highlights of the Annapurna Sanctuary Trek:";
  const OverviewDescription1 =
    "The Annapurna Sanctuary Trek is a spectacular 14 days trip on the southern face of Annapurna I, a pleasant hike through the landscape and culture of Nepal. This walk leads to the fabulous amphitheater of highlands also known as Annapurna Base Camp. The course passes through waterfalls, impressive villages, terraced farmland, lush rhododendron forests and remarkable mountain views before heading the steep Annapurna. This is a good time to witness the beautiful peaks of the Annapurna giants that surround the mountains of the basin in the Annapurna region of the imperative center. Furthermore, a trip to Annapurna Base Camp is synonymous with entertainment and fun, as well as an extraordinary view of Nepal's plant and cultural heritage. This is by far one of the most enjoyable walks through various ethnic groups' lifestyles as well as the types of woods, plants, trees, and wildlife.";
  const OverViewDescription2 =
    "The Annapurna Sanctuary is a high glacial basin located beneath a ring of eleven major peaks in Nepal. The Annapurna Sanctuary Trek takes you directly to the frozen heart of the Annapurna Range, a magnificent arena of rock and ice of epic proportions. The Annapurna Sanctuary Trek itinerary is designed for hikers who want to visit World Heritage sites and Poon Hill on their way to the Annapurna Base Camp in a relaxed manner. This allows enough time to admire the breathtaking peaks of all the Annapurna Giants that surround the Annapurna Basin Mountains from the center of the imperative, which includes Annapurna I, Hiunchuli, Annapurna II, Gangapurna, Annapurna III, Machhapuchhre, Annapurna IV, and others.";
  const listofHighlights = [
    "Discover the city of Kathmandu and its heritage sites.",
    "Panoramic and close-up views of the Annapurna massif, explore the city of Pokhara on the shores of Lake.",
    "Unimpeded sunrise and sunset view from Poon Hill, picturesque villages.",
    "Experiencing the lifestyle and culture of Gurung and Magar people, who are very famous for Gorkha arm.",
    "Walk the narrow, cobbled path in the valley and the remote villages.",
    "Visit the old monastery, ancient tradition of the Gurung museum and waterfalls.",
    "Panoramic mountain flight to and from Pokhara.",
    "Walk through the dense forest of Rhododendron which is even more beautiful in the spring.",
  ];

  const paragraph =
    " text-sm p-3  cursor-pointer font-semibold cursor-pointer leading-relaxed lg:leading-8 text-gray-700 hover:bg-gray-100";
  return (
    <>
      <div className=" bg-white shadow-sm border border-gray-100 ">
        <div className="grid grid-cols-4 divide-x divide-ui-light-pink  ">
          <p
            className={paragraph}
            onClick={() => setShowOverview(!showOverview)}
          >
            Overview
          </p>
          <p className={paragraph}>Itinerary</p>
          <p className={paragraph}>Price & Included</p>
          <p className={paragraph}>Useful Information</p>
        </div>
      </div>

      {showOverview && (
        <Overview
          onClose={() => setShowOverview(false)}
          overviewSubHeading={OverviewSubHeading}
          overviewDescription1={OverviewDescription1}
          overviewDescription2={OverViewDescription2}
          listofHighlights={listofHighlights}
        />
      )}
    </>
  );
};

export const Quote = () => {
  return (
    <>
      <div className="w-full gap-x-5 md:max-w-sm  p-10 bg-white border rounded-lg border-gray-200 shadow-lg cursor-pointer shadow-ui-third-theme hover:shadow-sm hover:shadow-ui-light-pink dark:bg-gray-800 relative">
        {" "}
        <div className="w-full gap-x-5 md:max-w-sm  bg-white border rounded-lg border-gray-200 shadow-lg cursor-pointer shadow-ui-third-theme hover:shadow-sm hover:shadow-ui-light-pink dark:bg-gray-800 relative"></div>
        <form className="max-w-sm mx-auto">
          <div className="mb-5">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="name@flowbite.com"
              required
            />
          </div>
          <div className="mb-5">
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              id="password"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            />
          </div>

          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

interface ModalProps {
  onClose: () => void;
  overviewSubHeading: string;
  overviewDescription1: string;
  overviewDescription2: string;
  listofHighlights: string[];
}

const Overview: React.FC<ModalProps> = ({
  overviewSubHeading,
  overviewDescription1,
  overviewDescription2,
  listofHighlights,
}) => {
  const paragraph =
    " text-sm p-3 text-justify font-normal cursor-pointer leading-relaxed text-gray-500 text-break-all ";
  return (
    <div>
      <div className="bg-white  py-5   h-full overflow-hidden transform transition-all ">
        <div className="md:px-6 py-4">
          <div className="text-center p-2 ">
            <h1 className="text-xl font-bold text-gray-900">Package Details</h1>
            <p className={paragraph}>{overviewDescription1}</p>
            <p className={paragraph}>{overviewDescription2}</p>
            <div className="p-2 md:p-6 text-justify">
              <h1 className="text-lg font-bold text-neutral-400">
                {overviewSubHeading}
              </h1>

              <ul className="list-disc">
                {listofHighlights.map((highlight, index) => (
                  <li key={index} className={paragraph}>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
