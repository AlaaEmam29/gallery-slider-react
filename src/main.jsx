import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import { ErrorBoundary } from "react-error-boundary";
import Error from "./ui/Error.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ErrorBoundary
      FallbackComponent={Error}
      onReset={() => window.location.replace("/")}
    >
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);
