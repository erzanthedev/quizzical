import StartMenu from "./components/StartMenu";
import QuizQuestions from "./components/QuizQuestions";
import { questionsData } from "./questionsData";

function App() {
  const handleChange = (event) => {
    console.log(event.target.value);
  };
  return (
    <main>
      {/* <StartMenu /> */}
      <QuizQuestions
        questionsData={questionsData}
        handleChange={handleChange}
      />
    </main>
  );
}

export default App;
