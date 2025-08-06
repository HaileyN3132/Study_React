import React from "react";
import Count from "./components/Count";

export default function PassPropsAsState() {
  const [count, setCount] = React.useState(0);
  function add() {
    setCount((prevCount) => prevCount + 1);
  }

  function substract() {
    setCount((prevCount) => prevCount - 1);
  }

  /**
   * Challenge:
   * - Create a new component called `Count`
   *    - It should receive a prop called `number`, whose value
   *      is the current value of our count
   *    - Have the component render the h2.count element below
   *      and display the incoming prop `number`
   * - Replace the h2.count below with an instance of
   *   the new Count component, passing the correct value
   *   to its `number` prop.
   * - After doing this, everything should be working the
   *   same as before.
   */

  return (
    <>
      <Count number={count} />
      <button onClick={substract}>-</button>
      <button onClick={add}>+</button>
    </>
  );
}
