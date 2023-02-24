import { Form, Button, Col, Row } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
/* import { useSelector } from 'react-redux';
import { getCurrentSearch } from '../../redux/store'; */
import { useState, useEffect } from 'react';
import { search } from '../../../redux/searchRedux';

const SearchForm = () => {
  const dispatch = useDispatch();
  //const initialSearch = useSelector(getCurrentSearch); --> do wersji z utrzymywaniem wartosci poprzedniej przy renderowaniu, konieczne zmiana useState wteedy
  const [searchText, setSearchText] = useState('');
  console.log(searchText)



  const handleSubmit = e => {
    e.preventDefault();
    console.log(searchText)
    dispatch(search(searchText));
  }

  useEffect(() => {
    dispatch(search(searchText))
  }, []
  )

  return (
    <Form onSubmit={handleSubmit}>
      <Row>
        <Col xs="auto">
          <Form.Group className="mb-3">
            <Form.Control
              value={searchText}
              onChange={e => setSearchText(e.target.value)}
              type="text" placeholder="Search by Name"
            />
          </Form.Group>
        </Col>
        <Col xs="auto">
          <Button type="submit"><span className="fa fa-search" /></Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchForm;