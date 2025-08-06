import React from "react";
import Heart from "./components/Heart";

function ComplexObject() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: false,
  });

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  /**
   * Challenge: Move the star image into its own component (Star)
   * - It should receive a prop called `isFilled` that it
   *   uses to determine which icon it will display. (You'll
   *   need to import the 2 star icons into that new component first).
   * - Import and render that component, passing the value of
   *   `isFavorite` to the new `isFilled` prop.
   * - Don't worry about the abiliity to flip this value quite yet.
   *   Instead, you can test if it's working by manually changing
   *   `isFavorite` in state above.
   */

  return (
    <>
      <Heart isFilled={contact.isFavorite} handleClick={toggleFavorite} />
      <h2>
        Name: {contact.firstName} {contact.lastName}
      </h2>
      <h2>Phone: {contact.phone}</h2>
      <h2>Email: {contact.email}</h2>
    </>
  );
}

export default ComplexObject;
