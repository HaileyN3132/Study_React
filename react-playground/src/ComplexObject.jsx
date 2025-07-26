import React from "react";

function ComplexObject() {
  const [contact, setContact] = React.useState({
    firstName: "John",
    lastName: "Doe",
    phone: "+1 (212) 555-1212",
    email: "itsmyrealname@example.com",
    isFavorite: true,
  });

  const favIcon = contact.isFavorite ? "❤️" : "🤍";

  function toggleFavorite() {
    setContact((prevContact) => {
      return {
        ...prevContact,
        isFavorite: !prevContact.isFavorite,
      };
    });
  }

  return (
    <>
      <button
        onClick={toggleFavorite}
        aria-pressed={contact.isFavorite}
        aria-label={
          contact.isFavorite ? "Remove from favorite" : "Add to favorite"
        }
      >
        {favIcon}
      </button>
      <h2>
        Name: {contact.firstName} {contact.lastName}
      </h2>
      <h2>Phone: {contact.phone}</h2>
      <h2>Email: {contact.email}</h2>
    </>
  );
}

export default ComplexObject;
