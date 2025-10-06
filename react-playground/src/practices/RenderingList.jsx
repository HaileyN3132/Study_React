import groceriesData from "../data/groceriesData";
import recipesData from "../data/recipesData";

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

function ListItem({ list }) {
  return (
    <ul>
      {list.map((item) => (
        <Item key={item.id} name={item.name} emoji={item.emoji} />
      ))}
    </ul>
  );
}

/* 
    Challenge 2: Nested lists in one component

*/

function Ingredient({ name }) {
  return <li>{name}</li>;
}

function Recipe({ id, name, ingredients }) {
  let ingredientsList = ingredients.map((ingredient) => (
    <Ingredient key={id + ingredient} name={ingredient} />
  ));

  return (
    <>
      <h2>{name} Recipe</h2>
      <ul>{ingredientsList}</ul>
    </>
  );
}

/* 
    Challenge 3: List with a separator

*/
const poem = {
  lines: [
    "I write, erase, rewrite",
    "Erase again, and then",
    "I write, erase, rewrite",
    "A poppy blooms.",
  ],
};

export default function RenderingList() {
  //Challenge 1
  const keyword = "protein";
  let filteredList = groceriesData.filter((item) => item.type === keyword);
  let remainList = groceriesData.filter((item) => item.type !== keyword);

  // Challenge 2

  let recipes = recipesData.map((recipe) => (
    <Recipe key={recipe.id} {...recipe} />
  ));

  //Challenge 3
  let poemList = [];
  let i = 0;
  for (; i < poem.lines.length; i++) {
    if (i === 0 || i === poem.lines.length - 1) {
      poemList.push(<p>{poem.lines[i]}</p>);
    } else {
      poemList.push(<p>{poem.lines[i]}</p>);
      poemList.push(<hr />);
    }
  }

  return (
    <>
      <section>
        <h1>Challenge 3: List with a separator</h1>
        <article>{poemList}</article>
      </section>

      <section>
        <h1>Challenge 2: Nested lists in one component</h1>
        <div>{recipes}</div>
      </section>

      <section>
        <h1>Challenge 1: Groceries List Rendering Practice</h1>

        <h2>Fruits</h2>
        <ListItem list={filteredList} />

        <h2>Others </h2>
        <ListItem list={remainList} />
      </section>
    </>
  );
}
