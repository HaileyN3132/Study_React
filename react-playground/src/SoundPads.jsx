import React from "react";
import padsData from "./data/pads";

export default function SoundPads(props) {
  /**
   * Challenge: use a ternary to determine the backgroundColor
   * of the buttons
   * If darkMode is true, set them to "#222222"
   * If darkMode is false, set them to "#cccccc"
   */

  const style = {
    backgroundColor: props.darkMode ? "#222222" : "#cccccc",
  };
  const [pads, setPads] = React.useState(padsData);
  const buttonElemens = pads.map((pad) => (
    <button style={style} className="pad-btn" key={pad.id}></button>
  ));

  return (
    <main>
      <div className="pad-container">{buttonElemens}</div>
    </main>
  );
}
