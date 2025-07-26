export default function Main() {
  const ingredients = ["Chicken", "Oregano", "Tomatoes"];
  const ingredientsListItems = ingredients.map((ingredient) => (
    <li key={ingredient}>{ingredient}</li>
  ));

  function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const newIngredient = formData.get("ingredient");

    ingredients.push(newIngredient);
    console.log(ingredients);
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
