export default function Button(props) {
  return (
    <button
      className={props.classname}
      onClick={
        props.children === "Check Answers"
          ? props.onCheckAnswers
          : props.resetQuiz
      }
    >
      {props.children}
    </button>
  );
}
