/**
 * Google Analytics 4 (GA4) integration.
 * Loads gtag asynchronously and tracks page views on SPA route changes.
 */

const MEASUREMENT_ID = import.meta.env.VITE_GA_MEASUREMENT_ID as string | undefined;

type GtagWindow = Window & { dataLayer: unknown[]; gtag: (...a: unknown[]) => void };

function isEnabled(): boolean {
  return Boolean(MEASUREMENT_ID && globalThis.window !== undefined);
}

/** Load the gtag script and initialize GA4. Call once at app bootstrap. */
export function initAnalytics(): void {
  if (!MEASUREMENT_ID || globalThis.window === undefined) return;

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

  w.gtag("config", MEASUREMENT_ID, {
    send_page_view: false, // We send page_view ourselves on route change for accurate SPA tracking
  });
}

/** Send a page view. Call on initial load and on every client-side route change. */
export function trackPageView(path: string, title?: string): void {
  if (!isEnabled()) return;
  (globalThis.window as unknown as GtagWindow).gtag("event", "page_view", {
    page_path: path,
    page_title: title ?? document.title,
  });
}

/** Send a custom event (e.g. button clicks, form submissions). */
export function trackEvent(
  eventName: string,
  params?: Record<string, string | number | boolean>
): void {
  if (!isEnabled()) return;
  (globalThis.window as unknown as GtagWindow).gtag("event", eventName, params);
}
