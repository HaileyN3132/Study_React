import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComplexObject from "./ComplexObject.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ComplexObject />
  </StrictMode>
);
