import React, { PropsWithChildren } from "react";

// interface Props {
//   children: React.ReactNode;
// }
// export const BoldText = ({ children }: Props) => {
//   return (
//     <>
//       <h1 className=" text-2xl font-bold lg:text-7xl text-ui-purple lg:text-black lg:font-extrabold ">
//         {children}
//       </h1>
//     </>
//   );
// };

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  const staticClassName =
    "inline-flex items-center  text-md text-center  font-bold  cursor-pointer rounded-lg  ";
  const finalClassName = className + " " + staticClassName;

  return (
    <button onClick={onClick} className={finalClassName}>
      {children}
    </button>
  );
};

interface TitleProps {
  title: string;
}
export const Title = ({ title }: TitleProps) => (
  <div className="text-center relative mb-10">
    <h4 className="text-3xl font-bold text-gray-800 uppercase tracking-wide">
      {title}
    </h4>
    <div
      style={{ top: "1.5rem", transform: "translateX(-50%)" }}
      className="h-2 w-20 absolute bottom-0 left-1/2 mt-5 bg-pink-500"
    ></div>
  </div>
);

interface ModalProps extends PropsWithChildren {
  onClose?: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose, children }) => (
  <div
    className="fixed bottom-0 left-0 right-0 top-0 z-[100] flex items-center justify-center bg-dark-000 bg-opacity-40"
    onClick={onClose}
  >
    {children}
  </div>
);

interface InputProps {
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void; // Update the type here
  value: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  type,
  placeholder,
  className,
  onChange,
  value,
}) => {
  return (
    <div className="">
      <label className=" text-justify block mb-2 text-xs font-medium text-gray-900 dark:text-white">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        type={type}
        placeholder={placeholder}
        className={`
        h-8 border min-w-[200px] max-w-full w-full text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-blue-500 block  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
        required
      />
    </div>
  );
};

interface TextAreaProps {
  label: string;
  type: string;
  placeholder?: string;
  className?: string;
  onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  value: string;
}

export const TextArea: React.FC<TextAreaProps> = ({
  label,
  placeholder,
  onChange,
  value,
}) => {
  return (
    <div className="">
      <label
        htmlFor="message"
        className="text-justify block mb-2 text-xs font-medium text-gray-900 dark:text-white"
      >
        {label}
      </label>
      <textarea
        onChange={onChange}
        id="message"
        rows={4}
        className="block p-2.5 w-full text-sm text-gray-900 rounded-sm border focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        value={value}
      ></textarea>
    </div>
  );
};

interface PersonCardProps {
  children: React.ReactNode;
}

export const PersonCard: React.FC<PersonCardProps> = ({
  children,
}: PersonCardProps) => {
  return (
    <div className="flex flex-col items-center p-2 justify-center w-full  lg:w-1/3  bg-white border rounded-lg border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
      {children}
    </div>
  );
};

interface AlertProps {
  message?: string;
  type?: string;
  onClose?: () => void;
  onYes?: () => void;
}
export const Alert: React.FC<AlertProps> = ({
  message,
  type,
  onClose,
  onYes,
}) => {
  const [isVisible, setIsVisible] = React.useState(true);

  let bgColor = "";
  let textColor = "";
  let borderColor = "";

  if (type === "success") {
    bgColor = "bg-green-100";
    textColor = "text-ui-green";
    borderColor = "border-teal-500";
  } else if (type === "error") {
    bgColor = "bg-red-100";
    textColor = "text-ui-red";
    borderColor = "border-ui-red";
  }

  const handleClose = () => {
    setIsVisible(false);
    if (onClose) {
      onClose();
    }
  };

  return (
    <>
      {isVisible && (
        <div
          className={`border ${bgColor} ${borderColor} ${textColor} relative rounded border-l-4 `}
          role="alert"
        >
          <div className="flex  items-center justify-start p-2">
            {(type === "error" || type === "warning") && (
              <svg
                className="mr-4 h-6 w-6 fill-current "
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                stroke="ui-red"
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            )}
            <span className="py-2 font-bold text-justify font-small text-xs sm:inline">
              {message}
            </span>
          </div>
          {(type === "error" || type === "success") && (
            <span
              className="absolute bottom-0 right-0 top-0 cursor-pointer pl-2"
              onClick={handleClose}
            >
              <svg
                className={`h-5 w-5 fill-current text-${type}-500`}
                role="button"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
              >
                <title>Close</title>
                <path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" />
              </svg>
            </span>
          )}
        </div>
      )}
    </>
  );
};

export const Spinner: React.FC = () => {
  return (
    <div role="status">
      <svg
        aria-hidden="true"
        className="w-5 h-5 text-gray-200 animate-spin dark:text-gray-600 fill-ui-purple"
        viewBox="0 0 100 101"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
          fill="currentColor"
        />
        <path
          d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
          fill="currentFill"
        />
      </svg>
    </div>
  );
};

interface RatingProps {
  rating: number;
}

export const RatingStars = ({ rating }: RatingProps) => {
  const filledStars = Array.from({ length: rating }, (_, index) => (
    <svg
      key={index}
      className="w-4 h-4 text-pink-500 ms-1"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ));

  const emptyStars = Array.from({ length: 5 - rating }, (_, index) => (
    <svg
      key={index}
      className="w-4 h-4 ms-1 text-gray-300 dark:text-gray-500"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  ));

  return (
    <div className="flex items-center">
      {filledStars}
      {emptyStars}
    </div>
  );
};

export const BoldText: React.FC<React.PropsWithChildren> = ({ children }) => (
  <span className="font-bold text-ui-purple">{children}</span>
);

export const LoadingSkeleton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4 py-10">
        <div className="mt-10 mb-10 w-full ">
          <div className="w-full">
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[480px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="h-2 max-w-[360px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
          </div>

          <div
            role="status"
            className="p-10 animate-pulse w-full text-center space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-y-0 md:space-x-8"
          >
            <div className="flex items-center justify-center h-48 w-full sm:w-96 lg:h-72 lg:w-96 rounded bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">
              <svg
                className="mx-auto h-10 w-full text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>

          <div className="w-full">
            <div className="mb-2.5 h-2 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[440px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="mb-2.5 h-2 max-w-[460px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
            <div className="h-2 max-w-[360px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const GalleryLoadingSkeleton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4 py-10 text-center">
        <div className="mt-10 mb-10 w-full ">
          <div className="w-full">
            <div className="mb-4 h-2.5 w-48 rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>{" "}
            <div className="h-2 max-w-[360px] rounded-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700"></div>
          </div>

          <div
            role="status"
            className="p-10 animate-pulse w-full text-center space-y-8 rtl:space-x-reverse md:flex md:items-center md:space-y-0 md:space-x-8"
          >
            {/* Placeholder for image */}
            <div className="flex items-center justify-center h-48 w-full sm:w-96 lg:h-72 lg:w-96 rounded bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:bg-gradient-to-r dark:from-gray-700 dark:via-gray-800 dark:to-gray-700">
              {/* Placeholder icon */}
              <svg
                className="mx-auto h-10 w-full text-gray-200 dark:text-gray-600"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 20 18"
              >
                <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export const HomeLoadingSkeleton = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="container mx-auto px-4 py-10">
        {/* Navbar Skeleton */}
        <div className="flex justify-between items-center mb-8 md:mt-64">
          <div className="w-full h-6 bg-gray-200 rounded-md animate-pulse"></div>
         
        </div>

        {/* Slider Skeleton */}
        <div className="mb-8">
          <div className="w-full h-64 bg-gray-200 rounded-md animate-pulse"></div>
        </div>

        {/* Card Skeleton */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[...Array(8)].map((_, index) => (
            <div key={index} className="bg-white rounded-md shadow-md animate-pulse">
              <div className="h-48 bg-gray-200 rounded-t-md"></div>
              <div className="p-4 flex flex-col justify-center items-center space-y-2 ">
                <div className="w-24 text-center h-4 bg-gray-200 rounded-md"></div>
                {/* <div className="w-full h-3 bg-gray-200 rounded-md"></div> */}
                <div className="flex gap-6 justify-between">
                  <div className="w-12 h-4 bg-gray-200 rounded-md"></div>
                  <div className="w-12 h-4 bg-gray-200 rounded-md"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};


export const Address = () => {
  const paragraph =
    " text-sm p-3 text-center  cursor-pointer leading-normal text-gray-900 text-break-all ";
  return (
    <div className="mt-1 w-full relative h-full  md:max-w-md  border border-gray-100  bg-white  rounded-lg shadow-2xl cursor-pointer  hover:shadow-sm hover:shadow-pink-200 dark:bg-gray-800 ">
      <div className="w-full p-5 ">
        <h4 className="text-lg  font-black text-pink-500 uppercase tracking-wide ">
          Address
        </h4>
        <p className={paragraph}> West Bromwich, Birmingham</p>
        <p className={`${paragraph} font-bold `}>United Kingdom</p>
      </div>
    </div>
  );
};
