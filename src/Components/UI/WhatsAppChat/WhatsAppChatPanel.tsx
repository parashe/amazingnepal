import React from "react";
import { getWhatsAppUrlWithMessage } from "../../../Lib/contact";

interface WhatsAppChatPanelProps {
  onClose: () => void;
}

export const WhatsAppChatPanel: React.FC<WhatsAppChatPanelProps> = ({ onClose }) => {
  const [message, setMessage] = React.useState("");

  const handleSend = () => {
    window.open(getWhatsAppUrlWithMessage(message), "_blank", "noopener,noreferrer");
    setMessage("");
    onClose();
  };

  return (
    <div
      className="fixed bottom-20 right-5 z-50 w-[340px] max-w-[calc(100vw-2.5rem)] rounded-2xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-xl overflow-hidden"
      role="dialog"
      aria-label="Chat via WhatsApp"
    >
      <div className="flex items-center justify-between gap-2 px-4 py-3 bg-[#25D366] text-white">
        <div className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/20">
            <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
              <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157z" />
            </svg>
          </span>
          <div>
            <p className="font-semibold text-sm">WhatsApp</p>
            <p className="text-xs text-white/90">We usually reply quickly</p>
          </div>
        </div>
        <button
          type="button"
          onClick={onClose}
          className="p-1.5 rounded-lg text-white/90 hover:bg-white/20 hover:text-white transition-colors"
          aria-label="Close"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div className="p-4">
        <p className="text-gray-600 dark:text-gray-400 text-sm mb-3">
          Type your message below. You&apos;ll continue the conversation in WhatsApp.
        </p>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Hi, I'd like to know more about..."
          rows={3}
          className="w-full rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-700/50 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 text-sm p-3 resize-none focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:border-transparent"
        />
        <div className="flex flex-col gap-2 mt-3">
          <button
            type="button"
            onClick={handleSend}
            className="w-full py-2.5 px-4 rounded-xl bg-[#25D366] hover:bg-[#20BD5C] text-white font-semibold text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 dark:focus:ring-offset-gray-800"
          >
            Continue in WhatsApp
          </button>
          <a
            href={getWhatsAppUrlWithMessage("")}
            target="_blank"
            rel="noopener noreferrer"
            className="text-center text-gray-500 dark:text-gray-400 hover:text-[#25D366] text-xs transition-colors"
          >
            Open WhatsApp without message
          </a>
        </div>
      </div>
    </div>
  );
};
