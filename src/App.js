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

  function checkAnswers() {
    let score = 0;

    questionsData.forEach((question) => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        score++;
      }
    });

    console.log(score);
  }

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedAnswers((prevSelectedAnswers) => {
      return {
        ...prevSelectedAnswers,
        [name]: value,
      };
    });
  };
  return (
    <main>
      {/* <StartMenu /> */}
      <QuizQuestions
        questionsData={questionsData}
        handleChange={handleChange}
        selectedAnswers={selectedAnswers}
        checkAnswers={checkAnswers}
      />
    </main>
  );
}

export default App;
