import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));

/** Mini Challenge:
 *
 * Move the `header` element from the Page component into
 * its own component called "Header"
 *
 * Then render an instance of the Header component inside
 * the Page component where the `header` used to be.
 */

function Header() {
  return (
    <header>
      <img src="src/assets/react.svg" alt="React logo" />
    </header>
  );
}

function Page() {
  return (
    // Using <></> instead of Fragment or unecessary <div>
    <>
      <Header />

      <main>
        <h1>Reasons I'm excited to learn React</h1>

        <ol>
          <li>Get familiar with front end technologies</li>
          <li>Curiuous about this framework</li>
          <li>Be able to add React in my personal project</li>
        </ol>
      </main>
      <footer>© 2025 Hailey development. All rights reserved.</footer>
    </>
  );
}

root.render(<Page />);
