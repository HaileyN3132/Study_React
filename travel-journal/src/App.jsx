import Entry from "./components/Entry";
import Header from "./components/Header";
import dataArr from "./components/data";

/**
 * Challenge:
 * - Instead of create multiple attributes, just pass a single object as custom <attribute />
 * - Fix the Entry props
 */

export default function App() {
  const entryArr = dataArr.map((data) => <Entry key={data.id} entry={data} />);

  return (
    <>
      <Header />
      {entryArr}
    </>
  );
}
