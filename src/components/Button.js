export default function Button(props) {
  return (
    <button
      className={props.classname}
      onClick={
        props.children === "Play Again" ? props.resetQuiz : props.handleRoute
      }
    >
      {props.children}
    </button>
  );
}
