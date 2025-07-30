import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComplexObject from "./ComplexObject.jsx";
import FormBasic from "./FormBasic";
import JokeApp from "./JokeApp.jsx";
import ConditionalRendering from "./ConditionalRendering.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<ComplexObject />*/}
    {/*<FormBasic />*/}
    <JokeApp />
    {/*<ConditionalRendering />*/}
  </StrictMode>
);
