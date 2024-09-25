import Button from "./Button";
export default function QuizQuestions(props) {
  const questionCardlist = props.questionsData.map((question) => {
    return (
      <div className="question-card" key={question.id}>
        <h2 className="question">{question.question}</h2>
        <div className="options-container">
          {question.options.map((option, index) => {
            let styles = {};

            if (props.isSubmitted) {
              const userAnswer = props.selectedAnswers[question.id];
              if (
                userAnswer === question.correctAnswer &&
                option === userAnswer
              ) {
                styles = {
                  backgroundColor: "#94D7A2",
                  border: "none",
                };
              } else if (userAnswer === option) {
                styles = {
                  backgroundColor: "#F8BCBC",
                  color: "#293264",
                  border: "none",
                  opacity: "50%",
                };
              } else {
                styles = {
                  borderColor: "#4d5b9e",
                  opacity: "50%",
                };
              }
            }

            return (
              <div className="option" key={index}>
                <input
                  type="radio"
                  id={`${question.id}-${index}`}
                  name={question.id}
                  value={option}
                  checked={props.selectedAnswers[question.id] === option}
                  onChange={props.handleChange}
                  disabled={props.isSubmitted}
                />
                <label style={styles} htmlFor={`${question.id}-${index}`}>
                  {option}
                </label>
              </div>
            );
          })}
        </div>
        <hr className="divider" />
      </div>
    );
  });
  return (
    <div className="quiz-questions">
      {questionCardlist}
      <div className="btn-wrapper">
        {props.isSubmitted && (
          <h3 className="score-text">
            You scored {props.score}/{props.questionsData.length} correct
            answers
          </h3>
        )}
        <Button
          classname="check-answers-btn"
          handleRoute={props.handleRoute}
          resetQuiz={props.resetQuiz}
        >
          {props.isSubmitted ? "Play Again" : "Check Answers"}
        </Button>
      </div>
    </div>
  );
}
