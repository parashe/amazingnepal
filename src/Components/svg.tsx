interface Props {
  color?: string;
  className?: string;
}

export const CashIcon = ({ className, color }: Props) => {
  const staticClassName = "w-5 h-5";

  const finalClassName = className + " " + staticClassName;

  return (
    <>
      <svg
        className={finalClassName}
        xmlns="http://www.w3.org/2000/svg"
        color={color}
        viewBox="0 0 576 512"
      >
        <path
          fill={color}
          d="M64 64C28.7 64 0 92.7 0 128V384c0 35.3 28.7 64 64 64H512c35.3 0 64-28.7 64-64V128c0-35.3-28.7-64-64-64H64zm64 320H64V320c35.3 0 64 28.7 64 64zM64 192V128h64c0 35.3-28.7 64-64 64zM448 384c0-35.3 28.7-64 64-64v64H448zm64-192c-35.3 0-64-28.7-64-64h64v64zM288 160a96 96 0 1 1 0 192 96 96 0 1 1 0-192z"
        />
      </svg>
    </>
  );
};

export const ClockIcon = ({ className, color }: Props) => {
  const staticClassName = "w-4 h-4";
  const finalClassName = className + " " + staticClassName;
  return (
    <>
      <svg
        className={finalClassName}
        color={color}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path
          fill={color}
          d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
        />
      </svg>
    </>
  );
};
