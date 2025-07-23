/**
 * Challenge: Build out the main content section!
 *
 * For now, skip 2 aspects of the design and we'll work on them later:
 *   1. The colored bullets in the list
 *   2. The larger gray React logo on the side
 */

export default function Main() {
  return (
    <>
      <main className="main">
        <h1 className="title">Fun facts about React </h1>
        <ul className="bullets">
          <li>Was first released in 2013</li>
          <li>Was originally created by Jordan Walke</li>
          <li>Has well over 200K start on GitHub</li>
          <li>Is maintained by Meta</li>
          <li>Power thousands of enterprise apps, including mobile apps</li>
        </ul>
      </main>
    </>
  );
}
