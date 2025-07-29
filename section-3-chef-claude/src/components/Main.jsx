import React from "react";

export default function Main() {
  /**
   * Challenge: use form action instead of onSubmit to
   * handle the data from the form
   */

  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="search-container">
      <form action={addIngredients} className="add-ingredient-form">
        <input
          name="ingredient"
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredients</button>
      </form>

      <ul>{ingredientsListItems}</ul>
    </main>
  );
}
