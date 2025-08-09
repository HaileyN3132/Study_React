import React from "react";

export default function Pad(props) {
  const [on, setOn] = React.useState(props.on);

  return (
    <button
      onClick={props.toggle}
      className={`pad-btn ${on ? "on" : undefined}`}
      style={{ backgroundColor: props.color }}
    ></button>
  );
}
