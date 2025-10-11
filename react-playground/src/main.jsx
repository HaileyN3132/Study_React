import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import ComplexObject from "./ComplexObject.jsx";
import FormBasic from "./FormBasic";
import JokeApp from "./JokeApp.jsx";
import ConditionalRendering from "./ConditionalRendering.jsx";
import PassPropsAsState from "./PassPropsAsState.jsx";
import PassingDataAroundReact from "./PassingDataAroundReact.jsx";
import SoundPads from "./SoundPads.jsx";

import ConditionalRendering2 from "./practices/ConditionalRendering2.jsx";
import RenderingList from "./practices/RenderingList.jsx";
import FixEventHandler from "./practices/FixEvenHandler.jsx";
import WireUpEvent from "./practices/WireUpEvents.jsx";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/*<ComplexObject />*/}
    {/*<FormBasic />*/}
    {/*<JokeApp />*/}
    {/*<ConditionalRendering />*/}
    {/*<PassPropsAsState /> */}
    {/*<PassingDataAroundReact/>*/}
    {/*<SoundPads /> */}

    {/*<ConditionalRendering2 /> */}
    {/*<RenderingList / > */}
    {/*<FixEventHandler /> */}
    <WireUpEvent />
  </StrictMode>
);
