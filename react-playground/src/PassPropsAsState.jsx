import React from "react";

export default function PassPropsAsState() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function substract() {
    setCount((prevCount) => prevCount - 1);
  }

  return (
    <>
      <h2>Count = {count}</h2>
      <button onClick={substract}>-</button>
      <button onClick={add}>+</button>
    </>
  );
}
