import StartMenu from "./components/StartMenu";
import QuizQuestions from "./components/QuizQuestions";
import { questionsData } from "./questionsData";

function App() {
  return (
    <main>
      {/* <StartMenu /> */}
      <QuizQuestions questionsData={questionsData} />
    </main>
  );
}

export default App;
