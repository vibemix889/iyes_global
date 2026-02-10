import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { initAnalytics } from "./lib/analytics";
import "./index.css";

// Fallback init only if GA4 isn't already loaded from index.html (e.g. env-only build)
initAnalytics();
createRoot(document.getElementById("root")!).render(<App />);
