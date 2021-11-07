import styled from "styled-components";
const Navbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 80px;
  padding: 0 10px;
`;
const Flex = styled.div`
  display: flex;
  align-items: ${(props) => props.align};
  justify-content: ${(props) => props.justify};
  flex-direction: ${(props) => props.direction};
  height: ${(props) => props.height};
  margin: ${(props) => props.margin};
`;
const Overlay = styled.div`
  position: fixed;
  display: block;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.2);
  transition: background-color 0.5s;
  z-index: 2;
  cursor: pointer;
`;
const NavSides = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
`;
const Container = styled.div`
  position: relative;
  max-width: 1280px;
  margin: 0 auto;
`;
const Page = styled.div`
  margin: 50px 0;
`;
const Text = styled.p`
  font-size: ${(props) => props.size}px;
  font-weight: ${(props) => props.weight};
  margin: ${(props) => props.margin};
  text-transform: ${(props) => props.transform};
  cursor: ${(props) => (props.hover ? "pointer" : "auto")};
  text-align: ${(props) => props.align};
`;
const Cart = styled.div`
  width: 325px;
  position: absolute;
  max-height: 600px;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  padding: 0.5rem 1rem;
  top: 80px;
  background: #fff;
  right: 0;
  z-index: 3;
`;
const Currency = styled(Cart)`
  width: 120px;
  box-shadow: 0px 4px 35px #a8acb030;
`;
const CartItem = styled.div`
  height: 120px;
  margin: 0.5rem 0;
  display: flex;
  justify-content: space-between;
`;
const CardSides = styled.div`
  width: 33%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  outline: none;
  padding: ${(props) => props.padding || "0.5rem"};
  color: ${(props) => (props.background ? props.background : "#1d1f22")};
  margin: ${(props) => props.margin};
  background: ${(props) => (props.background ? props.background : "none")};
  min-width: 32px;
  min-height: 32px;
  border: 1px solid #1d1f22;
  text-transform: uppercase;
  &:hover {
    color: #fff;
    background: #5ece7b;
    border: 1px solid transparent;
    cursor: pointer;
    transition: 0.5s;
  }
`;
const Line = styled.div`
  width: 100%;
  margin: ${(props) => props.margin};
  background: ${(props) => props.background};
  height: 1px;
`;
export {
  Navbar,
  Line,
  NavSides,
  Container,
  Text,
  Page,
  Cart,
  Flex,
  Overlay,
  CartItem,
  CardSides,
  Button,
  Currency,
};
