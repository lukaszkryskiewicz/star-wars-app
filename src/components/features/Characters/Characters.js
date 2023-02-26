import { useDispatch, useSelector } from "react-redux"
import { getAllPeople, getFilteredPeopleByFilm, getFilteredPeopleByName } from "../../../redux/peopleRedux"
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { addToFav, getAllFavorites, removeFav } from "../../../redux/favRedux";

const Characters = () => {
  const characters = useSelector(getFilteredPeopleByFilm)
  const fav = useSelector(getAllFavorites)
  const dispatch = useDispatch()


  const handleClick = (character) => {
    if (!fav.includes(character)) {
      dispatch(addToFav(character))
    } else dispatch(removeFav(character))
  }


  return (
    <div>
      {characters.length === 0 && <LoadingSpinner />}
      {characters.map(character =>
        <Row key={character.name} className="mb-4 border-bottom">
          <Col className="mb-4" lg={8}>
            <h2 className="d-inline m-3 ">{character.name}</h2>
          </Col>
          <Col lg={4} className="text-end">
            <i className={clsx('fa mx-4', ((fav.includes(character)) ? 'fa-star' : 'fa-star-o'))} onClick={() => handleClick(character)}></i>
            <Link to={"/character/" + character.name.replaceAll(' ', '')}><Button variant="primary">Show more</Button></Link>
          </Col>
        </Row>
      )}
    </div >
  )


}

export default Characters