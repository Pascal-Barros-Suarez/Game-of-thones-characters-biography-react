export default function Card(props) {
  const { charact, endview } = props;
  console.log(charact);

  return (
    <div className="characters">
      <h1>Character: {charact.name}</h1>
      <div className="container-characters">
        <div className="character-container h-100" key={1}>
            <img className="img w-50" src={charact.image} alt={charact.image} />
          <div className="m-2 h-100">
            <h3>{charact.name}</h3>
            <span>{charact.titles[0]}</span>
            <p>{charact.house}</p>
            <hr />
            <h5>Actor: {charact.actor}</h5>
            <p>Gender: {charact.gender}</p>
            <p>Father: {charact.father}</p>
            {charact.spouse[0] ? <p>Spouse: {charact.spouse.join(", ")}</p> : ''}
            {charact.lovers[0] ? <p>Lovers: {charact.lovers.join(", ")}</p> : ''}
            <p>Siblings: {charact.siblings.join(", ")}</p>

            <p>Titles: {charact.titles.join(", ")}</p>

            <p>Origin: {charact.origin.join(", ")}</p>
            <p>Culture: {charact.culture.join(", ")}</p>
            <p>Religion: {charact.religion.join(", ")}</p>


            <p>Allegiances: {charact.allegiances.join(", ")}</p>
            <p>First seen: {charact.first_seen}</p>
            {/* <p>Appearances: {charact.appearances.join(", ")}</p> */}


            <button type="button" className="btn btn-outline-warning btn-lg" onClick={endview}>OK</button>

          </div>
        </div>
      </div>
    </div>
  );
}




