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

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  console.log(selectedAnswers);
  console.log(score);

  function checkAnswers() {
    questionsData.forEach((question) => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    setIsSubmitted(true);
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
        isSubmitted={isSubmitted}
        score={score}
      />
    </main>
  );
}

export default App;
