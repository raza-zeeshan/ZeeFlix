import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "fontawesome-4.7/css/font-awesome.css";
import "fontawesome-4.7/css/font-awesome.min.css";
import "mdbootstrap/css/bootstrap.css";
import "mdbootstrap/css/mdb.css";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
