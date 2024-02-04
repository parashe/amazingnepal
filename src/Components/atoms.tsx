import React from "react";

interface Props {
  children: React.ReactNode;
}
export const BoldText = ({ children }: Props) => {
  return (
    <>
      <h1 className=" text-2xl font-bold lg:text-7xl text-ui-purple lg:text-black lg:font-extrabold ">
        {children}
      </h1>
    </>
  );
};

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
}

export const Button = ({ children, onClick, className }: ButtonProps) => {
  const staticClassName =
    "inline-flex items-center  text-md text-center  font-bold  cursor-pointer rounded-lg  focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800";
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
  <div className="text-left ml-2 relative mb-10">
    <h4 className="text-2xl md:text-3xl font-bold text-gray-800 uppercase tracking-wide">
      {title}
    </h4>
    <div
      style={{ top: "1.5rem", transform: "translateY(50%)" }}
      className="h-2 w-16 absolute bottom-0 left-0 mt-3 bg-gradient-to-r from-transparent to-ui-purple bg-repeat-x bg-linear-gradient"
    ></div>
  </div>
);
