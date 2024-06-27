import "../styles/cardStyle.css"
export default function Card({
  srcImg,
  name,
  scoreSetter,
  score,
  clickedListSetter,
  clicked,
}) {
  return (
    <>
      <div
        className="card"
        onClick={() => {
          if (clicked.includes(name)) {
            clickedListSetter([])
            scoreSetter(0);
          } else {
            clickedListSetter([...clicked, name]);
            scoreSetter(score + 1);
          }
        }}
      >
        <img src={srcImg} alt={"Image of " + name} />
        <p>{name}</p>
      </div>
    </>
  );
}
