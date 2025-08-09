import React from "react";
import padsData from "./data/pads";
import Pad from "./components/Pad";

/**
 * Challenge: Create a toggle() function that logs
 * "clicked!" to the console
 *
 * Pass that function down to each of the Pad components
 * and set it up so when they get clicked, the function runs
 */

export default function SoundPads(props) {
  function toggle() {
    console.log("Clicked");
  }

  const [pads, setPads] = React.useState(padsData);
  const buttonElemens = pads.map((pad) => (
    <Pad key={pad.id} color={pad.color} on={pad.on} toggle={toggle} />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElemens}</div>
    </main>
  );
}
