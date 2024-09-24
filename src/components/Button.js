export default function Button(props) {
  return (
    <button className={props.classname} onClick={props.checkAnswers}>
      {props.children}
    </button>
  );
}
