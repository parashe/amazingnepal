import { MailIcon, PhoneIcon, WhatsAppIcon } from "../../svg";
import { CONTACT, whatsAppUrl, telUrl, mailToUrl } from "../../../Lib/contact";

const expertSays = [
  "Nepal and the Himalayas have been part of my life for years. I don’t just sell tours — I help you choose the right trek, the right season, and the right experience for you.",
  "Whether it’s Everest Base Camp, Annapurna, or a cultural trip through Kathmandu and Pokhara, call or message me. I’ll answer your questions and we can design your trip together.",
];

export const ContactPerson = () => {
  const mainQuote =
    "You’re not just booking a tour — you’re talking to someone who knows Nepal and the Himalayas. Let’s plan your trip together.";

  return (
    <div className="relative py-6 md:py-8">
      <div className="flex flex-col md:flex-row md:items-start md:gap-10 gap-6">
        <div className="flex-shrink-0 flex justify-center md:justify-start">
          <img
            className="w-28 h-28 md:w-32 md:h-32 rounded-full object-cover ring-4 ring-ui-primary/20 dark:ring-ui-primary/30"
            src="/assets/hem.jpg"
            alt="Tekraj Kafle – Nepal and Himalayas travel expert, Amazing Nepal"
          />
        </div>
        <div className="flex-1 text-center md:text-left min-w-0">
          <blockquote className="mb-4">
            <span className="text-3xl md:text-4xl text-ui-primary/30 dark:text-ui-primary/40 font-serif leading-none select-none">
              “
            </span>
            <p className="text-lg md:text-xl font-medium text-gray-800 dark:text-gray-100 italic leading-relaxed -mt-1">
              {mainQuote}
            </p>
            <span className="text-3xl md:text-4xl text-ui-primary/30 dark:text-ui-primary/40 font-serif leading-none select-none">
              ”
            </span>
          </blockquote>
          <div className="space-y-3 mb-5 text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed">
            {expertSays.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <p className="text-ui-primary font-semibold tracking-wide uppercase text-sm mb-3">
            Tekraj Kafle
          </p>
          <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6">
            <a
              href={telUrl}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-ui-primary transition-colors text-sm"
            >
              <PhoneIcon className="w-5 h-5 flex-shrink-0" color="currentColor" />
              <span>{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={whatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-[#25D366] transition-colors text-sm"
            >
              <WhatsAppIcon className="w-5 h-5 flex-shrink-0" color="currentColor" />
              <span>WhatsApp</span>
            </a>
            <a
              href={mailToUrl}
              className="inline-flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-ui-primary transition-colors break-all text-sm"
            >
              <MailIcon className="w-5 h-5 flex-shrink-0" color="currentColor" />
              <span>{CONTACT.email}</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
