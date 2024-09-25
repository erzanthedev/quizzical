import { useState, useEffect } from "react";
import StartMenu from "./components/StartMenu";
import QuizQuestions from "./components/QuizQuestions";

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
  const [questionsData, setQuestionsData] = useState();

  // Helper function to restructure fetched data
  function restructureApiData(apiData) {
    return apiData.map((question, index) => {
      return {
        id: `question${index + 1}`,
        text: question.question,
        options: [...question.incorrect_answers, question.correct_answer],
        correctAnswer: question.correct_answer,
      };
    });
  }

  useEffect(() => {
    async function getQuizData() {
      const apiUrl =
        "https://opentdb.com/api.php?amount=5&difficulty=easy&type=multiple";
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        const newData = restructureApiData(data.results);
        setQuestionsData(newData);
      } catch (err) {
        console.log("Oopps something went wrong: ", err);
      }
    }

    getQuizData();
  }, []);

  function reshuffleOptions(fetchedData) {
    return fetchedData.map((question) => {
      // Copy of options array
      const shuffleOptions = [...question.options];

      // Loop through copied options
      for (let i = shuffleOptions.length - 1; i > 0; i--) {
        const randomIndex = Math.floor(Math.random() * (i + 1));
        // Swap options indexes
        [shuffleOptions[i], shuffleOptions[randomIndex]] = [
          shuffleOptions[randomIndex],
          shuffleOptions[i],
        ];
      }

      return {
        ...question,
        options: shuffleOptions,
      };
    });
  }

  const handleStartQuiz = () => {
    setIsNotPlaying((prevPlayState) => !prevPlayState);
    const shuffledData = reshuffleOptions(questionsData);
    setQuestionsData(shuffledData);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setSelectedAnswers((prevSelectedAnswers) => {
      return {
        ...prevSelectedAnswers,
        [name]: value,
      };
    });
  };

  function checkAnswers() {
    questionsData.forEach((question) => {
      const userAnswer = selectedAnswers[question.id];
      if (userAnswer === question.correctAnswer) {
        setScore((prevScore) => prevScore + 1);
      }
    });

    setIsSubmitted((prevSubmit) => !prevSubmit);
  }

  const allQuestionsAnswered = Object.values(selectedAnswers).every(
    (answer) => answer !== "",
  );

  const handleSubmit = () => {
    if (!allQuestionsAnswered) {
      return alert("Answer all questions before checking answers");
    }
    checkAnswers();
  };

  function handleRoute() {
    return isNotPlaying ? handleStartQuiz() : handleSubmit();
  }

  function resetQuiz() {
    setSelectedAnswers(initialSelectedAnswers);
    setIsSubmitted((prevSubmit) => !prevSubmit);
    setScore(0);
    handleStartQuiz();
  }

  return (
    <main>
      {isNotPlaying ? (
        <StartMenu handleRoute={handleRoute} />
      ) : (
        <QuizQuestions
          questionsData={questionsData}
          handleChange={handleChange}
          selectedAnswers={selectedAnswers}
          isSubmitted={isSubmitted}
          score={score}
          handleRoute={handleRoute}
          resetQuiz={resetQuiz}
        />
      )}
    </main>
  );
}

export default App;
