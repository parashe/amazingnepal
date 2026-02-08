/** Base site title suffix for per-page titles */
export const SITE_NAME = "Amazing Nepal";

/** Default meta description */
export const DEFAULT_DESCRIPTION =
  "Travel to Nepal: treks, Nepal trekking, tours, travel packages, insurance & immigration. UK-based Nepal travel specialist for Everest Base Camp, Annapurna & the Himalayas – book Nepal trek, Nepal holiday, Nepal trip.";

/** Per-route title and description for SEO and AI search */
export const ROUTE_META: Record<string, { title: string; description: string }> = {
  "/": {
    title: `Nepal Travel & Tours | Treks, Himalayas – ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  },
  "/destination": {
    title: `Nepal Treks & Tours | Top Destinations – ${SITE_NAME}`,
    description:
      "Browse Nepal treks and tours: Everest Base Camp trek, Annapurna Circuit trek, Pokhara, Kathmandu, Muktinath, Nepal trekking, Nepal holiday. Curated trips for the Himalayas – Amazing Nepal.",
  },
  "/service": {
    title: `Travel Packages, Insurance & Immigration – ${SITE_NAME}`,
    description:
      "Nepal travel packages, travel insurance for Nepal treks and adventure, immigration assistance. UK-based Nepal travel support – book Nepal trip, Nepal visa, Nepal travel insurance.",
  },
  "/nepal": {
    title: `Explore Nepal | Himalayas & Culture – ${SITE_NAME}`,
    description:
      "Discover Nepal travel: Himalayas, Nepal trekking, cultural heritage, Everest, Annapurna, Pokhara, Kathmandu, Lumbini. Plan your Nepal holiday or Nepal trip with Amazing Nepal.",
  },
  "/gallery": {
    title: `Nepal Travel Gallery | Photos – ${SITE_NAME}`,
    description:
      "Nepal travel photos: Himalayas trekking, Everest, Annapurna, Pokhara paragliding, Kathmandu, Nepal tours. Inspiration for your Nepal holiday – Amazing Nepal.",
  },
  "/contact": {
    title: `Contact Us | Nepal Travel Enquiries – ${SITE_NAME}`,
    description:
      "Contact Amazing Nepal for Nepal travel enquiries, book Nepal trek, Nepal tours, travel packages, insurance and immigration. UK Nepal travel specialist – we reply quickly.",
  },
  "/about": {
    title: `About Us | UK-based Nepal Travel Specialist – ${SITE_NAME}`,
    description:
      "Amazing Nepal: UK-based Nepal travel specialist for treks, cultural tours, pilgrimage, Nepal trekking, packages, insurance and immigration. Everest Base Camp, Annapurna, Himalayas.",
  },
  "/faq": {
    title: `FAQ | Nepal Travel Questions – ${SITE_NAME}`,
    description:
      "FAQ: booking Nepal treks and tours, Nepal trekking, payments, cancellation, Nepal visa, travel insurance, contact. Nepal travel questions answered – Amazing Nepal.",
  },
  "/recommended": {
    title: `Top Attractions in Nepal – ${SITE_NAME}`,
    description:
      "Top attractions Nepal: Kathmandu Valley, heritage sites, cultural tours, Nepal travel experiences. Curated Nepal holiday ideas – Amazing Nepal.",
  },
};

/** Get meta for pathname; supports dynamic routes like /destination/123 by matching prefix */
export function getMetaForPath(pathname: string): { title: string; description: string } {
  // Exact match
  if (ROUTE_META[pathname]) return ROUTE_META[pathname];
  // Prefix match for detail pages
  if (pathname.startsWith("/destination/"))
    return {
      title: `Nepal Trek & Tour Details – ${SITE_NAME}`,
      description:
        "Nepal trek or tour details: itinerary, price, what's included. Everest Base Camp, Annapurna, Nepal trekking – book your Nepal trip with Amazing Nepal.",
    };
  if (pathname.startsWith("/recommended/"))
    return {
      title: `Nepal Attraction – ${SITE_NAME}`,
      description:
        "Nepal travel attraction – cultural heritage, Nepal holiday experience. Curated by Amazing Nepal.",
    };
  return {
    title: `Nepal Travel & Tours – ${SITE_NAME}`,
    description: DEFAULT_DESCRIPTION,
  };
}
