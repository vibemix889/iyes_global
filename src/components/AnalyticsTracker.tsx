import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { trackPageView } from "@/lib/analytics";

/**
 * Sends a GA4 page_view on every route change (and on mount).
 * Mount this inside the Router so useLocation() is available.
 */
export function AnalyticsTracker() {
  const { pathname } = useLocation();

  useEffect(() => {
    trackPageView(pathname);
  }, [pathname]);

  return null;
}
