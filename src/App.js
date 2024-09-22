import { useState } from "react";
import StartMenu from "./components/StartMenu";
import QuizQuestions from "./components/QuizQuestions";
import { questionsData } from "./questionsData";

function App() {
  const [selectedAnswers, setSelectedAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  });

  console.log(selectedAnswers);

  const handleChange = (event) => {
    setSelectedAnswers((prevSelectedAnswers) => {
      return {
        ...prevSelectedAnswers,
        [event.target.name]: event.target.value,
      };
    });
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
