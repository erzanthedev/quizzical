import Button from "./Button";
export default function StartMenu(props) {
  return (
    <div className="start-menu">
      <h1 className="start-menu-title">Quizzical</h1>
      <p className="start-menu-text">
        Test Your Knowledge, One Question at a Time
      </p>
      <Button classname="start-menu-btn" handleRoute={props.handleRoute}>
        Start quiz
      </Button>
    </div>
  );
}
