import React from "react";
import padsData from "./data/pads";
import Pad from "./components/Pad";

/**
 * Challenge:
 * Call setPads to update the state of the one pad that was
 * clicked. Map over the previous pads array, and if the current
 * item you're iterating over has the same id as the `id` passed
 * to this function, then return a new object with the `on` value
 * set to the opposite of what it was before.
 * Otherwise (if the ids don't match), just return the previous
 * item as it was, unchanged.
 */

export default function SoundPads(props) {
  const [pads, setPads] = React.useState(padsData);

  function toggle(id) {
    setPads((prevPads) =>
      prevPads.map((item) =>
        item.id === id ? { ...item, on: !item.on } : item
      )
    );
  }

  const buttonElemens = pads.map((pad) => (
    <Pad
      id={pad.id}
      key={pad.id}
      color={pad.color}
      on={pad.on}
      toggle={toggle}
    />
  ));

  return (
    <main>
      <div className="pad-container">{buttonElemens}</div>
    </main>
  );
}
