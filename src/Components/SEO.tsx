import React from "react";
import { useLocation } from "react-router-dom";
import { getMetaForPath } from "../Lib/seo";

/**
 * Sets document title and meta description per route for SEO and AI search.
 * Render once inside Router (e.g. in App).
 */
export const SEO: React.FC = () => {
  const location = useLocation();
  const { pathname } = location;

  React.useEffect(() => {
    const { title, description } = getMetaForPath(pathname);
    document.title = title;

    let meta = document.querySelector('meta[name="description"]');
    if (!meta) {
      meta = document.createElement("meta");
      meta.setAttribute("name", "description");
      document.head.appendChild(meta);
    }
    meta.setAttribute("content", description);

    return () => {};
  }, [pathname]);

  return null;
};
