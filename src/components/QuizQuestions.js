export default function QuizQuestions() {
  return (
    <div className="quiz-questions">
      {/* Question 1*/}
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
      {/* Question 2*/}
      <div className="quiz-card">
        <h2 className="question">
          Which best selling toy of 1983 caused hysteria, resulting in riots
          breaking in stores?
        </h2>
        <div className="options-container">
          <div className="option">
            <input
              type="radio"
              id="2-1"
              name="question-2"
              value="Cabbage Patch Kids"
            />
            <label htmlFor="2-1">Cabbage Patch Kids</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="2-2"
              name="question-2"
              value="Transformers"
            />
            <label htmlFor="2-2">Transformers</label>
          </div>
          <div className="option">
            <input type="radio" id="2-3" name="question-2" value="Care Bears" />
            <label htmlFor="2-3">Care Bears</label>
          </div>
          <div className="option">
            <input
              type="radio"
              id="2-4"
              name="question-2"
              value="Rubik’s Cube"
            />
            <label htmlFor="2-4">Rubik’s Cube</label>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Question 3*/}
      <div className="quiz-card">
        <h2 className="question">
          What is the hottest planet in our Solar System?
        </h2>
        <div className="options-container">
          <div className="option">
            <input type="radio" id="3-1" name="question-3" value="Mercury" />
            <label htmlFor="3-1">Mercury</label>
          </div>
          <div className="option">
            <input type="radio" id="3-2" name="question-3" value="Venus" />
            <label htmlFor="3-2">Venus</label>
          </div>
          <div className="option">
            <input type="radio" id="3-3" name="question-3" value="Mars" />
            <label htmlFor="3-3">Mars</label>
          </div>
          <div className="option">
            <input type="radio" id="3-4" name="question-3" value="Saturn" />
            <label htmlFor="3-4">Saturn</label>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Question 4*/}
      <div className="quiz-card">
        <h2 className="question">
          In which country was the caesar salad invented?
        </h2>
        <div className="options-container">
          <div className="option">
            <input type="radio" id="4-1" name="question-4" value="Italy" />
            <label htmlFor="4-1">Italy</label>
          </div>
          <div className="option">
            <input type="radio" id="4-2" name="question-4" value="Portugal" />
            <label htmlFor="4-2">Portugal</label>
          </div>
          <div className="option">
            <input type="radio" id="4-3" name="question-4" value="Mexico" />
            <label htmlFor="4-3">Mexico</label>
          </div>
          <div className="option">
            <input type="radio" id="4-4" name="question-4" value="France" />
            <label htmlFor="4-4">France</label>
          </div>
        </div>
        <hr className="divider" />
      </div>

      {/* Question 5*/}
      <div className="quiz-card">
        <h2 className="question">How Many Hearts Does An Octopus Have?</h2>
        <div className="options-container">
          <div className="option">
            <input type="radio" id="5-1" name="question-5" value="One" />
            <label htmlFor="5-1">One</label>
          </div>
          <div className="option">
            <input type="radio" id="5-2" name="question-5" value="Two" />
            <label htmlFor="5-2">Two</label>
          </div>
          <div className="option">
            <input type="radio" id="5-3" name="question-5" value="Three" />
            <label htmlFor="5-3">Three</label>
          </div>
          <div className="option">
            <input type="radio" id="5-4" name="question-5" value="Four" />
            <label htmlFor="5-4">Four</label>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </div>
  );
}
