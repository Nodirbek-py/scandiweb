import styled from "styled-components";
const Grid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 50px;
  margin: 50px 0;
`;
const AddToCart = styled.img`
  cursor: pointer;
  position: absolute;
  z-index: 3;
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
  height: 500px;
  padding: 1rem;
  background: #fff;
  &:hover {
    box-shadow: 0px 4px 35px #a8acb030;
    transition: 0.5s;
  }
  &:hover ${AddToCart} {
    opacity: 1;
    transition: 0.5s;
  }
`;
const CardImg = styled.div`
  height: 85%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #fff;
  background: ${(props) =>
      props.inStock === "false"
        ? "linear-gradient(0deg, #00000050, #00000050),"
        : null}
    url(${(props) => props.src});
  background-size: 100% auto;
  background-repeat: no-repeat;
`;
export { Grid, Card, CardImg, AddToCart };
