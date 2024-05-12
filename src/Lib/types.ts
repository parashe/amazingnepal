export type DestinationType= {
    destination_id: string;
    title: string;
    price: string;
    description: string;
    duration: string;
    available: string;
    included: string;
    imageUrl: {
        id: number;
        url: string;
        alt?: string;
    }[];
    OverviewSubHeading: string;
    OverviewDescription1: string;
    OverViewDescription2: string;
    listofHighlights: string[];
    itinerary: {
        day: string;
        activity: string;
        activitydetails?: string;
    }[];
    priceIncludes: string[];
    priceExcludes: string[];
    usefulInformation: string[];
}