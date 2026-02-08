// Shared contact info used across the site (footer, contact page, WhatsApp button)

export const CONTACT = {
  /** Display format: +44-7411079563 */
  phoneDisplay: "+44-7411079563",
  /** For tel: and wa.me (no + or dashes): 447411079563 */
  phoneRaw: "447411079563",
  email: "info@visitamazingnepal.com",
} as const;

export const whatsAppUrl = `https://wa.me/${CONTACT.phoneRaw}`;

/** WhatsApp URL with optional pre-filled message (for in-site chat panel). */
export const getWhatsAppUrlWithMessage = (text: string): string =>
  text.trim()
    ? `https://wa.me/${CONTACT.phoneRaw}?text=${encodeURIComponent(text.trim())}`
    : whatsAppUrl;

export const telUrl = `tel:+${CONTACT.phoneRaw}`;
export const mailToUrl = `mailto:${CONTACT.email}`;
