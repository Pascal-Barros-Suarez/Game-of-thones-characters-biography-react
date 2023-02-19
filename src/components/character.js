import Card from "./card";
import { useState } from "react";

export default function Characters(props) {
  const { characters, setCharacters } = props;
  const [selectedCharacter, setSelectedCharacter] = useState(null);

  const showCardCharacter = (character) => {
    setSelectedCharacter(character);
  };

  const endView = () => {
    setSelectedCharacter(null);
  };

  const resetCharacters = () => {
    setCharacters(null);
  };

  return (
    <div className="characters">
      <h1>Characters:</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver a HOME
      </span>
      {selectedCharacter && (
        <Card charact={selectedCharacter} endview={endView}></Card>
      )}
      {!selectedCharacter && (
        <div className="container-characters">
          {characters.map((character, index) => (
            <div
              className="character-container"
              key={index}
              onClick={() => showCardCharacter(character)}
            >
              <div>
                <img src={character.image} alt={character.slug} />
              </div>
              <div>
                <h3>{character.name}</h3>
                <span>{character.titles[0]}</span>
                <p>{character.house}</p>
                <hr />
                <h5>actor: {character.actor}</h5>
                <p>religion: {character.religion}</p>
                <p>origin: {character.origin[0]}</p>
                <p>gender: {character.gender}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
