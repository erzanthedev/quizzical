export default function QuizQuestions() {
  return (
    <div className="quiz-questions">
      <div className="quiz-card">
        <h2 className="question">How would one say goodbye in Spanish?</h2>
        <div className="options-container">
          <div className="option">
            <input type="radio" id="1-1" name="question-1" value="Adiós" />
            <label htmlFor="1-1">Adiós</label>
          </div>
          <div className="option">
            <input type="radio" id="1-2" name="question-1" value="Hola" />
            <label htmlFor="1-2">Hola</label>
          </div>
          <div className="option">
            <input type="radio" id="1-3" name="question-1" value="Au Revoir" />
            <label htmlFor="1-3">Au Revoir</label>
          </div>
          <div className="option">
            <input type="radio" id="1-4" name="question-1" value="Salir" />
            <label htmlFor="1-4">Salir</label>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
}
