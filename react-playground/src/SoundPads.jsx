import React from "react";
import padsData from "./data/pads";
import Pad from "./components/Pad";

export default function SoundPads(props) {
  const [pads, setPads] = React.useState(padsData);
  const buttonElemens = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElemens}</div>
    </main>
  );
}
