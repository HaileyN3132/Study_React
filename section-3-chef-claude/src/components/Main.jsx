export default function Main() {
  return (
    <main className="search-container">
      <form className="add-ingredient-form" action="">
        <input
          type="text"
          placeholder="e.g. oregano"
          aria-label="Add ingredient"
        />
        <button>Add ingredients</button>
      </form>
    </main>
  );
}
