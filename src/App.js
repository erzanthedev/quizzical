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

  const [isNotPlaying, setIsNotPlaying] = useState(true);
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

  const handleSubmit = () => {
    if (!allQuestionsAnswered) {
      return alert("Answer all questions before checking answers");
    }
    checkAnswers();
  };

  const handleStartQuiz = () => {
    setIsNotPlaying(false);
  };

  function resetQuiz() {
    setSelectedAnswers(initialSelectedAnswers);
    setIsSubmitted((prevSubmit) => !prevSubmit);
    setScore(0);
    setIsNotPlaying(true);
  }

  function handleClickRoute() {
    console.log("Ready to Route");
    if (isNotPlaying) {
      handleStartQuiz();
    }

    if (!isNotPlaying) {
      handleSubmit();
    }
  }

  return (
    <main>
      {isNotPlaying ? (
        <StartMenu handleClickRoute={handleClickRoute} />
      ) : (
        <QuizQuestions
          questionsData={questionsData}
          handleChange={handleChange}
          selectedAnswers={selectedAnswers}
          isSubmitted={isSubmitted}
          score={score}
          handleClickRoute={handleClickRoute}
          resetQuiz={resetQuiz}
        />
      )}
    </main>
  );
}

export default App;
