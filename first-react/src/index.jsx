import { createRoot } from "react-dom/client";
import Header from "./Header";
import MainContent from "./MainContent";
import Footer from "./Footer";

const root = createRoot(document.getElementById("root"));

/**
 * Challenge: move the MainContent and Footer components to their own
 * separate files.
 */

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
