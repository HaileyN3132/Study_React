import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge:
 *
 * Move the `width` style off the JSX and into CSS with a dedicated
 * className on the img element, and change the width to 55px instead
 */

function Header() {
  return (
    <header className="header">
      <img className="nav-logo" src="src/assets/react.svg" alt="React logo" />
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
