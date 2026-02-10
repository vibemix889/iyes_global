/**
 * Google Analytics 4 (GA4) integration.
 * GA4 snippet runs from index.html for reliable loading. This module sends
 * page_view on SPA route changes and optional custom events.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

type GtagWindow = Window & { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };

function getGtag(): GtagWindow["gtag"] | undefined {
  if (globalThis.window === undefined) return undefined;
  const w = globalThis.window as unknown as GtagWindow;
  return w.gtag;
}

/** Optional: init script from JS if not already in index.html (e.g. when using env-only). */
export function initAnalytics(): void {
  if (getGtag() || !MEASUREMENT_ID || globalThis.window === undefined) return;

  const w = globalThis.window as unknown as GtagWindow;
  w.dataLayer = w.dataLayer ?? [];
  w.gtag = (...args: unknown[]) => {
    w.dataLayer.push(args);
  };
  w.gtag("js", new Date());

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`;
  document.head.appendChild(script);

  w.gtag("config", MEASUREMENT_ID, { send_page_view: false });
}

/** Send a page view (used on initial load and every SPA route change). */
export function trackPageView(path: string, title?: string): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
  });
}

/** Send a custom event (e.g. button clicks, form submissions). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  const gtag = getGtag();
  if (!gtag) return;
  gtag("event", eventName, params);
}
