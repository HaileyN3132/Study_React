import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge:
 *
 * Using flexbox, line up the `li`s horizontally and put them inline
 * with the React logo.
 *
 * NOTE: for practice's sake, don't select any
 * elements, but use classes for all styling.
 */

function Header() {
  return (
    <header className="header">
      <img src="src/assets/react.svg" alt="React logo" />
      <nav>
        <ul className="nav-list">
          <li className="nav-list-item">Pricing</li>
          <li className="nav-list-item">About</li>
          <li className="nav-list-item">Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm excited to learn React</h1>

      <ol>
        <li>Get familiar with front end technologies</li>
        <li>Curiuous about this framework</li>
        <li>Be able to add React in my personal project</li>
      </ol>
    </main>
  );
}

function Footer() {
  return <footer>© 2025 Hailey development. All rights reserved.</footer>;
}

function Page() {
  return (
    // Using <></> instead of Fragment or unecessary <div>
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

root.render(<Page />);
