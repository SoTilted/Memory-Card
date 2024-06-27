import { useState, useEffect } from "react";
import Header from "./components/headerComponent";
import { CardDisplay, populate } from "./components/cardDisplayComponent";
import "./styles/App.css";

function fetchData(pokemonList, setFunc) {
  let fetchList = [];
  for (let i = 0; i < pokemonList.length; i++) {
    fetchList.push(
      fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonList[i]}`)
        .then((response) => response.json())
        .then((newData) => setFunc((data) => [...data, newData]))
        .catch((err) => {
          throw Error(err);
        })
    );
  }
  Promise.all(fetchList);
}
function App() {
  const pokemonList = [
    [
      "pikachu",
      "beedrill",
      "kakuna",
      "charmander",
      "squirtle",
      "bulbasaur",
      "sandshrew",
      "jigglypuff",
      "gardevoir",
      "abra",
    ],
    [
      "gengar",
      "ditto",
      "ekans",
      "rattata",
      "arbok",
      "muk",
      "pidgeotto",
      "pidgeot",
      "raticate",
      "fearow",
      "nidoran-m",
      "nidorino",
      "doduo",
      "diglett",
      "dugtrio",
      "dodrio",
      "grimer",
      "haunter",
      "cloyster",
      "eevee",
    ],
    [
      "gengar",
      "ditto",
      "ekans",
      "rattata",
      "arbok",
      "muk",
      "pidgeotto",
      "pidgeot",
      "raticate",
      "fearow",
      "nidoran-m",
      "nidorino",
      "doduo",
      "diglett",
      "dugtrio",
      "dodrio",
      "grimer",
      "haunter",
      "cloyster",
      "eevee",
      "pikachu",
      "beedrill",
      "kakuna",
      "charmander",
      "squirtle",
      "bulbasaur",
      "sandshrew",
      "jigglypuff",
      "gardevoir",
      "abra",
    ],
  ];
  const [data, setData] = useState([]);
  const [currentScore, setcurrentScore] = useState(0);
  const [highScore, sethighScore] = useState(0);
  const [clicked, setClicked] = useState([]);
  const [difficulty, setdifficulty] = useState(0);
  if (currentScore > highScore) {
    sethighScore(currentScore);
  }
  useEffect(() => {
    setData([]);
    sethighScore(0);
    setcurrentScore(0);
    fetchData(pokemonList[difficulty], setData);
  }, [difficulty]);

  return (
    <>
      <Header
        currentScore={currentScore}
        highScore={highScore}
        difficultySetter={setdifficulty}
      />
      <CardDisplay
        children={populate(
          data,
          setcurrentScore,
          currentScore,
          setClicked,
          clicked
        )}
      />
    </>
  );
}

export default App;
