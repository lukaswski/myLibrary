import React from 'react';
import {
  Container, Row, Card, OverlayTrigger, Tooltip,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook } from './actions';
import { StyledCard } from './styled';


export default () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books);
  const serchedValue = useSelector((state) => state.search);

  const handleDeleteCard = (bookName) => { dispatch(deleteBook(bookName)); };

  return (
    <Container>
      <Row>
        {books.filter(({ title }) => title.toLowerCase().includes(serchedValue))
          .map(({ title, author, relaseDate }) => (
            <OverlayTrigger
              key={title}
              placement="bottom"
              overlay={(
                <Tooltip id={`tooltip-${title}`}>
                  kliknij w kartę aby usunąć
                  {' '}
                  <strong>{title}</strong>
                </Tooltip>
              )}
            >
              <StyledCard key={title} onClick={() => handleDeleteCard(title)}>
                <Card.Body>
                  <Card.Subtitle className="mb-2 text-muted">
                    {author}
                  </Card.Subtitle>
                  <Card.Title>
                    {title}
                  </Card.Title>
                  <div>rok wydania</div>
                  <Card.Text>
                    {relaseDate}
                  </Card.Text>
                </Card.Body>
              </StyledCard>
            </OverlayTrigger>
          ))}
      </Row>
    </Container>
  );
};
