import React, { useState } from 'react';
import {
  Col, Row, Container, Alert,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { addBook } from './actions';
import { StyledInput } from './styled';

export default () => {
  const selector = useSelector((state) => state.books);
  const dispatch = useDispatch();
  const [showAlert, setShowAlert] = useState(false);
  const [newBookPosition, setNewBookPosition] = useState({
    title: '',
    author: '',
    relaseDate: '',
  });

  const handleInput = (objectKey, e) => {
    const inputValue = e.target.value;
    setShowAlert(false);
    setNewBookPosition((prevState) => ({
      ...prevState,
      [objectKey]: inputValue,
    }));
  };

  const addBookToCollection = () => {
    (Object.values(newBookPosition).includes('')
    || selector.find((bookInState) => bookInState.title === newBookPosition.title))
      ? (setShowAlert(true))
      : (dispatch(addBook(newBookPosition)));
  };

  return (
    <Container>
      {showAlert && <Alert variant="danger">Uzupełnij wszystkie pola, lub książka jest już w bazie</Alert>}
      <Row>
        <Col sm>
          <StyledInput placeholder="nazwa książki" type="text" name="title" onChange={(e) => handleInput('title', e)} />
        </Col>
        <Col sm>
          <StyledInput placeholder="autor" type="text" name="author" onChange={(e) => handleInput('author', e)} />
        </Col>
      </Row>
      <Row>
        <Col sm>
          <StyledInput placeholder="rok wydania" type="number" min="1500" max="2020" name="relaseDate" onChange={(e) => handleInput('relaseDate', e)} />
        </Col>
        <Col sm>
          <StyledInput className="addBook" onClick={addBookToCollection} type="submit" value={`dodaj ${newBookPosition.title} do kolekcji`} />
        </Col>
      </Row>
    </Container>
  );
};
