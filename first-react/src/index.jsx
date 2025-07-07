import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/**
 * Challenge:
 *
 * - Add a `nav` > `ul` > `li` (x3). The 3 items should say:
 *   "Pricing", "About", and "Contact"
 */

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="React logo" />
      <nav>
        <ul>
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
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
