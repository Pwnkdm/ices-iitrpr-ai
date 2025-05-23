import { StrictMode, Suspense, lazy } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./store/index.ts";
import BarLoader from "react-spinners/BarLoader";

const App = lazy(() => import("./App.tsx"));

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense
      fallback={
        <div className="h-screen flex justify-center items-center text-center text-2xl font-bold animate-pulse text-white">
          {/* AI Technocrat Programme By ICES, ICE and IIT Ropar. */}
          <BarLoader />
        </div>
      }
    >
      <Provider store={store}>
        <App />
      </Provider>
    </Suspense>
  </StrictMode>
);
