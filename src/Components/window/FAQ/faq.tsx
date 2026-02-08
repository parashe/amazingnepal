import React from "react";
import { faqData } from "./faqData";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = React.useState<string | null>(faqData[0]?.id ?? null);

  return (
    <div className="space-y-3">
      {faqData.map((item) => {
        const isOpen = openId === item.id;
        return (
          <div
            key={item.id}
            className="rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-hidden"
          >
            <button
              type="button"
              onClick={() => setOpenId(isOpen ? null : item.id)}
              className="w-full flex items-center justify-between gap-4 px-5 py-4 text-left hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors focus:outline-none focus:ring-2 focus:ring-ui-primary focus:ring-inset"
              aria-expanded={isOpen}
              aria-controls={`faq-answer-${item.id}`}
              id={`faq-question-${item.id}`}
            >
              <span className="font-semibold text-gray-900 dark:text-white pr-2">
                {item.question}
              </span>
              <span
                className={`shrink-0 w-8 h-8 rounded-lg flex items-center justify-center bg-ui-primary/10 dark:bg-ui-primary/20 text-ui-primary transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                aria-hidden
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </button>
            <div
              id={`faq-answer-${item.id}`}
              role="region"
              aria-labelledby={`faq-question-${item.id}`}
              className={`grid transition-[grid-template-rows] duration-200 ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
            >
              <div className="overflow-hidden">
                <div className="px-5 pb-5 pt-0 text-gray-600 dark:text-gray-300 leading-relaxed border-t border-gray-100 dark:border-gray-700/50">
                  {item.answer}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
