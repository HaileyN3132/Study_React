import "./practice.css";

/*
  GOAL: try multiple ways to implement conditional rendering 
    1. Ternary operator
      Ex: Pack List
    2. && operator
      Ex: Task list        
    3. if - else statement
      Ex: Drink list


*/

function Item({ name, isPacked }) {
  return (
    <li>
      {name} {isPacked ? "✅" : "❌"}
    </li>
  );
}

function Task({ name, priority }) {
  return (
    <li>
      {name} {priority > 0 && <i>(Priority : {priority})</i>}
    </li>
  );
}

function Drink({ name }) {
  let part, amount, age;
  if (name === "tea") {
    part = "leaf";
    amount = "15–70 mg/cup";
    age = "4,000+ years";
  } else {
    part = "bean";
    amount = "80–185 mg/cup";
    age = "1,000+ years";
  }
  return (
    <section>
      <h3>{name}</h3>
      <dt>Part of plant</dt>
      <dd>{part}</dd>
      <dt>Caffein content</dt>
      <dd>{amount}</dd>
      <dt>Age</dt>
      <dd>{age}</dd>
    </section>
  );
}

export default function ConditionalRendering() {
  return (
    <section>
      <h2>Packing List</h2>
      <ul>
        <Item name="Laptop" isPacked={true} />
        <Item name="Towel" isPacked={true} />
        <Item name="Clothes" isPacked={false} />
      </ul>

      <h2>Task List</h2>
      <ul>
        <Task name="Clean room" priority={0} />
        <Task name="Write essay" priority={10} />
        <Task name="Coding project" priority={5} />
      </ul>

      <h2>Drink List</h2>
      <div>
        <Drink name="bean" />
        <Drink name="tea" />
      </div>
    </section>
  );
}
