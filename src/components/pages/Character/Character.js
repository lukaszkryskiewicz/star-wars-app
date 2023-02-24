import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getPeopleByName } from "../../../redux/peopleRedux";
import { Col, Row } from "react-bootstrap";
import Planet from "../../features/Planet/Planet";
import Starships from "../../features/Starships/Starships";
import Films from "../../features/Films/Films";
import { getAllFavorites } from "../../../redux/favRedux";
import { addToFav, removeFav } from "../../../redux/favRedux";
import clsx from "clsx";




const Character = () => {
  const { id } = useParams();
  const character = useSelector(state => getPeopleByName(state, id))
  const fav = useSelector(getAllFavorites)
  const dispatch = useDispatch();

  const handleClick = () => {
    if (!fav.includes(character)) {
      dispatch(addToFav(character))
    } else dispatch(removeFav(character))
  }


  return (
    <>
      <Row>
        <Col className="mb-4" lg={8}>
          <h2 className="d-inline m-3 ">{character.name}</h2>
        </Col>
        <Col lg={4} className="text-end">
          <i className={clsx('fa mx-4', ((fav.includes(character)) ? 'fa-star' : 'fa-star-o'))} onClick={handleClick}></i>
        </Col>
      </Row>
      <Row>
        <p>Birth Year: {character.birth_year}</p>
        <p>Gender: {character.gender}</p>
        <p>Height: {character.height}</p>
        <Films films={character.films} />
        <Starships starships={character.starships} />
        <Planet url={character.homeworld} />
      </Row>
    </>
  )
}

export default Character;