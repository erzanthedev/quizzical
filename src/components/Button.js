export default function Button(props) {
  return (
    <button
      className={props.classname}
      onClick={props.onCheckAnswers}
      disabled={!props.allQuestionsAnswered}
    >
      {props.children}
    </button>
  );
}
