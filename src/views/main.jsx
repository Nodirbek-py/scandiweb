import React, { Component } from "react";
import { Route, Switch, NavLink } from "react-router-dom";
import { uiActions } from "../store/uiSlice";
import {
  Button,
  Cart,
  CartItem,
  CardSides,
  Container,
  Navbar,
  NavSides,
  Text,
  Flex,
  Overlay,
  Currency,
} from "../components/common";
import cart from "../assets/imgs/cart.svg";
import dollar from "../assets/imgs/dollar.svg";
import empty from "../assets/imgs/empty.svg";
import ProductList from "./productList";
import { connect } from "react-redux";
import ProductDetail from "./productDetail";
import CartPage from "./cart";
class Main extends Component {
  state = {};
  handleToggleCart = () => {
    this.props.dispatch(uiActions.toggleCart());
  };

  render() {
    return (
      <Container>
        <Navbar>
          <NavSides>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/women"
            >
              WOMEN
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/men"
            >
              MEN
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              to="/kids"
            >
              KIDS
            </NavLink>
          </NavSides>
          <NavSides>
            <img src={cart} alt="" />
          </NavSides>
          <NavSides>
            <img
              className="nav-icon"
              onClick={() => this.props.dispatch(uiActions.toggleCurrency())}
              src={dollar}
              alt=""
            />
            <img
              className="nav-icon"
              onClick={this.handleToggleCart}
              src={empty}
              alt=""
            />
          </NavSides>
        </Navbar>
        {this.props.ui.cartShown === true ? (
          <>
            <Cart>
              <Text margin="0 0 25px 0" weight="600">
                My bag
              </Text>
              <CartItem>
                <Flex
                  direction="column"
                  justify="space-between"
                  align="flex-start"
                >
                  <div>
                    <Text margin="6px 0" weight="300">
                      Tovar
                    </Text>
                    <Text margin="6px 0" weight="600">
                      Price
                    </Text>
                  </div>
                  <div>
                    <Button margin="0 8px 0 0">S</Button>
                    <Button margin="0 8px" disabled>
                      M
                    </Button>
                  </div>
                </Flex>
                <CardSides>
                  <Button>+</Button>
                  <Text weight="500">1</Text>
                  <Button>-</Button>
                </CardSides>
                <CardSides>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src="https://picsum.photos/150"
                    alt=""
                  />
                </CardSides>
              </CartItem>
              <Flex align="center" justify="space-between">
                <Button>View Bag</Button>
                <Button>Checkout</Button>
              </Flex>
            </Cart>
            <Overlay onClick={this.handleToggleCart} />
          </>
        ) : null}
        {this.props.ui.currencyShown === true ? (
          <Currency>
            <Text margin="10px 0" weight="400">
              $ USD
            </Text>
            <Text margin="10px 0" weight="400">
              $ EURO
            </Text>
            <Text margin="10px 0" weight="400">
              $ POUND
            </Text>
          </Currency>
        ) : null}
        <Switch>
          <Route exact path="/products" component={ProductList} />
          <Route exact path="/detail" component={ProductDetail} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </Container>
    );
  }
}

const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Main);
