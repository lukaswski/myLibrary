import styled from 'styled-components';
import { Card } from 'react-bootstrap';


export const StyledInput = styled.input`
  width: 100%;
  margin: 15px 0;
  text-align:center;
    &.addBook{
      background-color: DarkSeaGreen;
      border-color: DarkSeaGreen;
      color: white;
    };
    &.serch{
      width: 50%;
        @media(max-width: 576px){
          width: 100%;
        }
`;

export const StyledCard = styled(Card)`
  width: 200px;
  margin: 10px auto;
    &:hover{
      cursor: pointer;
      opacity: 0.5;
    }
    @media(max-width: 576px){
          width: 100%;
        }
`;
