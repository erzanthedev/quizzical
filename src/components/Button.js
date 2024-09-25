export default function Button(props) {
  return (
    <button className={props.classname} onClick={props.onCheckAnswers}>
      {props.children}
    </button>
  );
}
