import React from "react";

export default function Main() {
  /**
   * Challenge: Update our app so that when the user enters a
   * new ingredient and submits the form, it adds that new
   * ingredient to our list!
   */

  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  return (
    <main className="search-container">
      <form onSubmit={handleSubmit} className="add-ingredient-form" action="">
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
