import React from "react";
interface BreadcrumbItem {
  label: string;
  href?: string;
  imageUrl?: string;
  description?: string;
  alt?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => {
  return (
    <>
      <div className="relative">
        <BreadCrumbContent
          imageUrl={items && items[0].imageUrl}
          description={items && items[0].description}
        />
        <div className="absolute inset-x-0 bottom-[-30px] flex justify-center">
          <nav className="w-full bg-white shadow-lg py-5 px-5 max-w-xl rounded-b-lg dark:bg-gray-900">
            <ol className="inline-flex items-center">
              {items.map((item, index) => (
                <li key={index} className="inline-flex items-center">
                  <div className="flex items-center">
                    <svg
                      className="w-3 h-3 me-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                    </svg>
                    <a
                      href="/"
                      className="text-sm  font-bold text-gray-500 md:ms-2 dark:text-gray-400"
                    >
                      Home
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg
                      className="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 6 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 9 4-4-4-4"
                      />
                    </svg>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="ms-1 text-sm font-medium text-ui-primary hover:text-ui-secondary md:ms-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        {item.label}
                      </a>
                    ) : (
                      <span className="ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                        {item.label}
                      </span>
                    )}
                  </div>
                </li>
              ))}
            </ol>
          </nav>
        </div>
      </div>
    </>
  );
};

const BreadCrumbContent = ({
  imageUrl,
  description,
}: {
  imageUrl: string | undefined;
  description: string | undefined;
}) => {
  return (
    <>
      <div className="w-full relative overflow-hidden">
        {/* Image */}
        <img
          className="w-full h-60 md:h-72 object-cover brightness-75  transition duration-500 ease-in-out transform hover:scale-105"
          src={imageUrl}
          alt=""
          loading="lazy"
        />

        {/* Text overlay */}
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white bg-black bg-opacity-40 ">
          <p className="text-4xl md:text-6xl font-bold mb-4">{description}</p>
        </div>
      </div>
    </>
  );
};
