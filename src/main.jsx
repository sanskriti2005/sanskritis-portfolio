import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Provider } from "./components/ui/provider";
import { HashRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HashRouter>
      <Provider>
        <App />
      </Provider>
    </HashRouter>
  </StrictMode>
);
