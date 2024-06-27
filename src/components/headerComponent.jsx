import "../styles/headerStyle.css";
export default function Header({ currentScore, highScore, difficultySetter }) {
  return (
    <>
      <div className="header">
        <h1>PokèMory</h1>
        <div className="score">
          <div>
            <h2>Current Pokèdex: </h2>
            <p> {currentScore}</p>
          </div>
          <div>
            <h2>Best Pokèdex: </h2>
            <p> {highScore}</p>
          </div>
        </div>
        <p>(Score points by clicking on each pokèmon only once!)</p>
        <div className="difficulty">
          <h2>Choose Difficulty</h2>
          <div className="difficulty-buttons">
            <input
              id="easy"
              name="state-d"
              type="radio"
              defaultChecked="checked"
            />
            <label
              htmlFor="easy"
              onClick={() => {
                difficultySetter(0);
              }}
            >
              easy
            </label>
            <input id="medium" name="state-d" type="radio" />
            <label
              htmlFor="medium"
              onClick={() => {
                difficultySetter(1);
              }}
            >
              medium
            </label>
            <input id="hard" name="state-d" type="radio" />
            <label
              htmlFor="hard"
              onClick={() => {
                difficultySetter(2);
              }}
            >
              hard
            </label>
          </div>
        </div>
      </div>
    </>
  );
}
