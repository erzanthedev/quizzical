import Button from "./Button";
export default function StartMenu() {
  return (
    <div className="start-menu">
      <h1 className="start-menu-title">Quizzical</h1>
      <p className="start-menu-text">Some description if needed</p>
      <Button classname="start-menu-btn">Start quiz</Button>
    </div>
  );
}
