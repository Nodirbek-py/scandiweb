import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin: 50px 0;
`;
const AddToCart = styled.img`
  position: absolute;
  top: 75%;
  right: 30px;
  opacity: 0;
  transition: opacity 0.5s;
`;
const Card = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  min-height: 444px;
  height: auto;
  padding: 1rem;
  background: #fff;
  &:hover {
    box-shadow: 0px 4px 35px #a8acb030;
    transition: 0.5s;
    cursor: pointer;
  }
  &:hover ${AddToCart} {
    opacity: 1;
    transition: 0.5s;
  }
`;
const CardImg = styled.img`
  width: 100%;
`;
export { Grid, Card, CardImg, AddToCart };
