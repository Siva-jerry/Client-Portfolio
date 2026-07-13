import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import { PortfolioProvider } from "./context/PortfolioContext.jsx";

import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/typography.css";
import "./styles/animations.css";
import "./styles/utilities.css";
import "./styles/responsive.css";
import "./styles/scrollbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <PortfolioProvider>
      <App />
    </PortfolioProvider>
  </React.StrictMode>
);