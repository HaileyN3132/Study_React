import Entry from "./components/Entry";
import Header from "./components/Header";
import dataArr from "./components/data";

/**
 * Challenge:
 * - import the array of data from data.js
 * - map over the array to create an <Entry /> component
 *   for every item in the data array.
 * - display the array of Entry components in place of the current
 *   hard-coded <Entry /> instance.
 */

const entryArr = dataArr.map((data) => (
  <Entry
    img={data.img}
    title={data.title}
    country={data.country.toUpperCase()}
    googleMapsLink={data.googleMapsLink}
    dates={data.dates}
    text={data.text}
  />
));

export default function App() {
  return (
    <>
      <Header />
      {entryArr}
    </>
  );
}
