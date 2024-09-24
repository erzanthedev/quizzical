export default function Button(props) {
  return (
    <button
      className={props.classname}
      onClick={props.checkAnswers}
      disabled={!props.allQuestionsAnswered}
    >
      {props.children}
    </button>
  );
}
