import { useState } from "react";
import StartMenu from "./components/StartMenu";
import QuizQuestions from "./components/QuizQuestions";
import { questionsData } from "./questionsData";

function App() {
  const initialSelectedAnswers = {
    question1: "",
    question2: "",
    question3: "",
    question4: "",
    question5: "",
  };

  const [selectedAnswers, setSelectedAnswers] = useState(
    initialSelectedAnswers,
  );

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  function checkAnswers() {
    questionsData.forEach((question) => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    setIsSubmitted((prevSubmit) => !prevSubmit);
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

  const allQuestionsAnswered = Object.values(selectedAnswers).every(
    (answer) => answer !== "",
  );

  function resetQuiz() {
    setSelectedAnswers(initialSelectedAnswers);
    setIsSubmitted((prevSubmit) => !prevSubmit);
    setScore(0);
  }

  const handleSubmit = () => {
    if (!allQuestionsAnswered) {
      return alert("Answer all questions before checking answers");
    }
    checkAnswers();
  };

  console.log("allQuestionsAnswered:", allQuestionsAnswered);
  return (
    <main>
      {/* <StartMenu /> */}
      <QuizQuestions
        questionsData={questionsData}
        handleChange={handleChange}
        selectedAnswers={selectedAnswers}
        onCheckAnswers={handleSubmit}
        isSubmitted={isSubmitted}
        score={score}
        resetQuiz={resetQuiz}
      />
    </main>
  );
}

export default App;
