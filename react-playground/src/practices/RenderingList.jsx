import groceriesData from "../data/groceriesData";

/* 
    Challenge 1: Split a groceries into 2 lists

*/

function Item({ name, emoji }) {
  return (
    <li>
      {emoji} {name}
    </li>
  );
}

export default function RenderingList() {
  const keyword = "vegetable";
  let filteredList = groceriesData.filter((item) => item.type === keyword);
  let remainList = groceriesData.filter((item) => item.type !== keyword);

  let fruits = filteredList.map((fruit) => (
    <Item key={fruit.id} name={fruit.name} emoji={fruit.emoji} />
  ));

  let remain = remainList.map((item) => (
    <Item id={item.id} name={item.name} emoji={item.emoji} />
  ));
  return (
    <section>
      <h1>Groceries List Rendering Practice</h1>

      <h2>Fruits</h2>
      <ul>{fruits}</ul>

      <h2>Others </h2>
      <ul>{remain}</ul>
    </section>
  );
}
