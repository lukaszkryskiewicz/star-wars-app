import { useDispatch, useSelector } from "react-redux"
import LoadingSpinner from "../../common/LoadingSpinner/LoadingSpinner";
import { Row, Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import clsx from "clsx";
import { getAllFavorites, removeFav } from "../../../redux/favRedux";

const Favorite = () => {
  const fav = useSelector(getAllFavorites)
  const dispatch = useDispatch()

  const handleClick = (character) => {
    dispatch(removeFav(character))
  }

  if (fav.length === 0) return 'There are no favorite characters :('
  return (
    <div>
      {fav.length === 0 && <LoadingSpinner />}
      {fav.map(character =>
        <Row key={character.name} className="mb-4 border-bottom">
          <Col className="mb-4" lg={8}>
            <h2 className="d-inline m-3 ">{character.name}</h2>
          </Col>
          <Col lg={4} className="text-end">
            <i className={clsx('fa mx-4 fa-star')} onClick={() => handleClick(character)}></i>
            <Link to={"/character/" + character.name.replaceAll(' ', '')}><Button variant="primary">Show more</Button></Link>
          </Col>
        </Row>
      )}
    </div >
  )


}

export default Favorite