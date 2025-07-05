import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/** Challenge:
 * Move the `main` element into its own component called "MainContent"
 * and render that component inside the Page component.
 *
 * Do the same with the `footer` element, moving it into a new
 * component called "Footer"
 */

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="React logo" />
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
