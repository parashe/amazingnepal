interface Props {
  color?: string;
  className?: string;
}

export const CashIcon = ({ className, color }: Props) => {
  const staticClassName = "";

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
  const staticClassName = "w-3 h-3";
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

export const QuoteLeftIcon = ({ className, color }: Props) => (
  <svg
    color={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill={color}
      d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
    />
  </svg>
);

export const PersonIcon = ({ className, color }: Props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 320 512"
    className={className}
    color={color}
  >
    <path
      fill={color}
      d="M112 48a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm40 304V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V256.9L59.4 304.5c-9.1 15.1-28.8 20-43.9 10.9s-20-28.8-10.9-43.9l58.3-97c17.4-28.9 48.6-46.6 82.3-46.6h29.7c33.7 0 64.9 17.7 82.3 46.6l58.3 97c9.1 15.1 4.2 34.8-10.9 43.9s-34.8 4.2-43.9-10.9L232 256.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32V352H152z"
    />
  </svg>
);

export const QuoteRightIcon = ({ className, color }: Props) => (
  <svg
    color={color}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
  >
    <path
      fill={color}
      d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
    />
  </svg>
);

export const ArrowRight = ({ className, color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      color={color}
      viewBox="0 0 512 512"
    >
      <path
        fill={color}
        d="M334.5 414c8.8 3.8 19 2 26-4.6l144-136c4.8-4.5 7.5-10.8 7.5-17.4s-2.7-12.9-7.5-17.4l-144-136c-7-6.6-17.2-8.4-26-4.6s-14.5 12.5-14.5 22l0 72L32 192c-17.7 0-32 14.3-32 32l0 64c0 17.7 14.3 32 32 32l288 0 0 72c0 9.6 5.7 18.2 14.5 22z"
      />
    </svg>
  );
};

export const MapPinIcon = ({ className, color }: Props) => {
  return (
    <svg
      className={className}
      color={color}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 320 512"
    >
      <path
        fill={color}
        d="M16 144a144 144 0 1 1 288 0A144 144 0 1 1 16 144zM160 80c8.8 0 16-7.2 16-16s-7.2-16-16-16c-53 0-96 43-96 96c0 8.8 7.2 16 16 16s16-7.2 16-16c0-35.3 28.7-64 64-64zM128 480V317.1c10.4 1.9 21.1 2.9 32 2.9s21.6-1 32-2.9V480c0 17.7-14.3 32-32 32s-32-14.3-32-32z"
      />
    </svg>
  );
};

export const CrossIcon = ({ className, color }: Props) => {
  const staticClassName = "w-6 h-6";
  const finalClassName = className + " " + staticClassName;

  return (
    <>
      <svg
        className={finalClassName}
        color={color}
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill={color}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M6 18L18 6M6 6l12 12"
        ></path>
      </svg>
    </>
  );
};

export const SVGIcon = ({ className, color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      className={className}
      color={color}
    >
      <path
        fill={color}
        d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"
      />
    </svg>
  );
};

export const DropdownIcon = ({ className, color }: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      className={className}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
};

// export const QuoteRightIcon = ({ className, color }: Props) => {
//   return (
//     <>
//       <svg
//         color={color}
//         className={className}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 448 512"
//       >
//         <path
//           fill={color}
//           d="M448 296c0 66.3-53.7 120-120 120h-8c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H320c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72zm-256 0c0 66.3-53.7 120-120 120H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h8c30.9 0 56-25.1 56-56v-8H64c-35.3 0-64-28.7-64-64V160c0-35.3 28.7-64 64-64h64c35.3 0 64 28.7 64 64v32 32 72z"
//         />
//       </svg>
//     </>
//   );
// };

// export const QuoteLeftIcon = ({ className, color }: Props) => {
//   return (
//     <>
//       <svg
//         color={color}
//         className={className}
//         xmlns="http://www.w3.org/2000/svg"
//         viewBox="0 0 448 512"
//       >
//         <path
//           fill={color}
//           d="M0 216C0 149.7 53.7 96 120 96h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V320 288 216zm256 0c0-66.3 53.7-120 120-120h8c17.7 0 32 14.3 32 32s-14.3 32-32 32h-8c-30.9 0-56 25.1-56 56v8h64c35.3 0 64 28.7 64 64v64c0 35.3-28.7 64-64 64H320c-35.3 0-64-28.7-64-64V320 288 216z"
//         />
//       </svg>
//     </>
//   );
// };
