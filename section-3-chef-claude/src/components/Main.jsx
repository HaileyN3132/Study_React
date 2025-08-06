import React from "react";

export default function Main() {
  const [ingredients, setIngredients] = React.useState([]);
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function addIngredients(formData) {
    const newIngredient = formData.get("ingredient");

    setIngredients((prevIngredients) => [...prevIngredients, newIngredient]);
  }

  /**
   * Challenge:
   * Using conditional rendering, only render the new <section> IF
   * there are ingredients added to the list of ingredients.
   */

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

      {ingredientsListItems.length > 0 && (
        <section>
          <h2>Ingredients on hand:</h2>
          <ul>{ingredientsListItems}</ul>
          <div className="get-recipe-container">
            <div>
              <h3>Ready for a recipe?</h3>
              <span>Generate a recipe from your list of ingredients</span>
            </div>
            <button>Get a recipe</button>
          </div>
        </section>
      )}
    </main>
  );
}
