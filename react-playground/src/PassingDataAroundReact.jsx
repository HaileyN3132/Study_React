import React from "react";
import Header from "./components/Header";
import Body from "./components/Body";

export default function PassingDataAroundReact() {
  /**
   * Challenge:
   * Raise state up a level and pass it down to both the
   * Header and Body components through props.
   */

  const [userName, setUserName] = React.useState("Hailey");

  return (
    <>
      <Header userName={userName} />
      <Body userName={userName} />
    </>
  );
}
