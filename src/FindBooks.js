import React from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { searchBook } from './actions';
import { StyledInput } from './styled';


export default () => {
  const dispatch = useDispatch();
  const handleSearchChange = (e) => dispatch(searchBook(e.target.value));

  return (
    <Container>
      <StyledInput
        className="serch"
        type="text"
        onChange={handleSearchChange}
        placeholder="znajdz po tytule"
      />
    </Container>
  );
};
