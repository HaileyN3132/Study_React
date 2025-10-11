/* 
    Challenge:
    - Pass the handler from parent to child to handle the background changing
    - Chage background random
*/

export default function WireUpEvent() {
  function handleClick() {
    const colors = ["black", "white", "red", "pink", "lightblue"];
    let pageColor = document.body.style;
    pageColor.backgroundColor =
      colors[Math.floor(Math.random() * colors.length)];
  }

  return <ColorSwitch onChangeColor={handleClick} />;
}

function ColorSwitch({ onChangeColor }) {
  return (
    <button
      style={{ color: "black", opacity: 1 }}
      onClick={() => {
        onChangeColor();
      }}
    >
      Change Background Color
    </button>
  );
}
