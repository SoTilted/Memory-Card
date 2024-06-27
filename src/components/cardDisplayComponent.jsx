import Card from "./cardComponent";
import '../styles/cardDisplayStyle.css'
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function populate(data, scoreSetterFunc, score, clickedListSetterFunc, clickedList) {
  let copyOfData = data;
  shuffleArray(copyOfData);
  let childrenComponents = [];
  for (let i = 0; i < copyOfData.length; i++) {
    childrenComponents.push(
      <Card
        key={i}
        srcImg={copyOfData[i].sprites.front_default}
        name={copyOfData[i].name}
        scoreSetter={scoreSetterFunc}
        score={score}
        clickedListSetter={clickedListSetterFunc}
        clicked={clickedList}
      />
    );
  }
  return childrenComponents;
}

function CardDisplay({ children }) {
  return (
    <>
      <div className="cardDisplay">{children}</div>
    </>
  );
}

export { CardDisplay, populate };
