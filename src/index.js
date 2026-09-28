import React from "react";
import ReactDOM from "react-dom/client";

// Global Styles & Libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "lenis/dist/lenis.css"; // Required for smooth Lenis scrolling
import "./assets/globle/css/style.css";
import "./assets/globle/css/responsive.css";
import "./assets/globle/css/font.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();