export default function FixEventHandler() {
  return <LightSwitch />;
}

/* 
    Challenge : 
    Clicking this button is supposed to switch the page background between white and black


*/

function LightSwitch() {
  function handleClick() {
    let bodyStyle = document.body.style;
    if (bodyStyle.backgroundColor === "black") {
      bodyStyle.backgroundColor = "white";
    } else {
      bodyStyle.backgroundColor = "black";
    }
  }

  return (
    <button onClick={handleClick} style={{ color: "red", opacity: 1 }}>
      Toggle background
    </button>
  );
}
