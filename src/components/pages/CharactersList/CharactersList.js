import Characters from "../../features/Characters/Characters";
import SearchForm from "../../features/SearchForm/SearchForm";
import { Row, Col } from "react-bootstrap";
import FilmFilter from "../../features/FilmFilter/FilmFilter";

const CharacterList = () => {
  return (
    <>
      <Row>
        <Col sm={8}>
          <Characters />
        </Col>
        <Col sm={4}>
          <SearchForm />
          <FilmFilter />
        </Col>
      </Row>
    </>
  )
}

export default CharacterList;