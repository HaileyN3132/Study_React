export default function Heart(props) {
  let favIcon = props.isFilled ? "❤️" : "🤍";

  return (
    <button
      onClick={props.handleClick}
      aria-pressed={props.isFilled}
      aria-label={props.isFilled ? "Remove from favorite" : "Add to favorite"}
    >
      {favIcon}
    </button>
  );
}
