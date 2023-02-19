//import logo from "./logo.svg";
// importamos la imagen  y le asignamos un nombre
import imageGOT from "./img/GOT.webp";
import { useState } from "react";
import "./App.css";
import Characters from "./components/character";

function App() {
  const [characters, setCharacters] = useState(null);

  const reqApi = async () => {
    //const api = await fetch("https://thronesapi.com/api/v2/Characters/");
    const api = await fetch("https://api.got.show/api/general/characters");
    const CharacterApi = await api.json();
    //setCharacters(CharacterApi.results);
    setCharacters(CharacterApi.show);
  };
  //console.log(characters);

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Game Of Thrones</h1>
        {characters ? (
          <Characters
            characters={characters}
            setCharacters={setCharacters}
          ></Characters>
        ) : (
          <>
            <img src={imageGOT} alt="Game Of Thones" className="img-home"></img>
            <button onClick={reqApi} className="btn-search">
              Buscar Personaje
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
