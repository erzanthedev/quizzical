import Button from "./Button";
export default function QuizQuestions(props) {
  const questionCardlist = props.questionsData.map((question) => {
    return (
      <div className="question-card" key={question.id}>
        <h2 className="question">{question.question}</h2>
        <div className="options-container">
          {question.options.map((option, index) => {
            return (
              <div className="option" key={index}>
                <input
                  type="radio"
                  id={`${question.id}-${index}`}
                  name={`question-${question.id}`}
                  value={option}
                  onChange={props.handleChange}
                />
                <label htmlFor={`${question.id}-${index}`}>{option}</label>
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
        <Button classname="check-answers-btn">Check Answers</Button>
      </div>
    </div>
  );
}
