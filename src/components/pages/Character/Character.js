import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getPeopleByName } from "../../../redux/peopleRedux";
import { Row } from "react-bootstrap";
import Planet from "../../features/Planet/Planet";
import Starships from "../../features/Starships/Starships";
import Films from "../../features/Films/Films";



const Character = () => {
  const { id } = useParams();
  const character = useSelector(state => getPeopleByName(state, id))


  return (
    <Row>
      <h1>{character.name}</h1>
      <p>Birth Year: {character.birth_year}</p>

      <p>Gender: {character.gender}</p>
      <p>Height: {character.height}</p>
      <Films films={character.films} />
      <Starships starships={character.starships} />
      <Planet url={character.homeworld} />
    </Row>

  )
}

export default Character;