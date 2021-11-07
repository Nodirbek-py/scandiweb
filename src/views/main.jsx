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
  handleCurrency = (currency) => {
    this.props.dispatch(uiActions.changeCurrency(currency));
    console.log(currency);
  };
  handleIncrement = (index) => {
    this.props.dispatch(uiActions.increment(index));
    this.props.dispatch(uiActions.total());
  };
  handleDecrement = (index) => {
    this.props.dispatch(uiActions.decrement(index));
    this.props.dispatch(uiActions.total());
  };
  componentDidMount() {}
  render() {
    return (
      <Container>
        <Navbar>
          <NavSides>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/products/tech"
            >
              TECH
            </NavLink>
            <NavLink
              className="nav-link"
              activeClassName="nav-link-active"
              exact
              to="/products/clothes"
            >
              CLOTHES
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
              {this.props.ui.cart.length > 0 ? (
                this.props.ui.cart.map((item, index) => {
                  return (
                    <CartItem>
                      <Flex
                        direction="column"
                        justify="space-between"
                        align="flex-start"
                      >
                        <div>
                          <Text margin="6px 0" weight="300">
                            {item.name}
                          </Text>
                          <Text margin="6px 0" weight="600">
                            {
                              item.prices.filter(
                                (price) =>
                                  price.currency === this.props.ui.currency
                              )[0].amount
                            }{" "}
                            {this.props.ui.currency}
                          </Text>
                        </div>
                        <div>
                          {item.category === "clothes" ? (
                            <>
                              <Button margin="0 8px 0 0">S</Button>
                              <Button margin="0 8px" disabled>
                                M
                              </Button>
                            </>
                          ) : null}
                        </div>
                      </Flex>
                      <CardSides>
                        <Button
                          onClick={() => {
                            this.handleIncrement(index);
                          }}
                        >
                          +
                        </Button>
                        <Text weight="500">{item.count}</Text>
                        <Button onClick={() => this.handleDecrement(index)}>
                          -
                        </Button>
                      </CardSides>
                      <CardSides>
                        <img
                          style={{ width: "100%" }}
                          src={item.gallery[0]}
                          alt=""
                        />
                      </CardSides>
                    </CartItem>
                  );
                })
              ) : (
                <Text size="24" margin="0.5rem 0" align="center">
                  No items yet
                </Text>
              )}
              <Text size="24" margin="0.5rem 0" align="left">
                Total: {this.props.ui.total}
              </Text>
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
            <Text
              onClick={this.handleCurrency.bind(this, "USD")}
              hover
              margin="10px 0"
              weight="400"
            >
              $ USD
            </Text>
            <Text
              onClick={this.handleCurrency.bind(this, "RUB")}
              hover
              margin="10px 0"
              weight="400"
            >
              ₽ RUB
            </Text>
            <Text
              onClick={this.handleCurrency.bind(this, "GBP")}
              hover
              margin="10px 0"
              weight="400"
            >
              £ GBP
            </Text>
            <Text
              onClick={this.handleCurrency.bind(this, "AUD")}
              hover
              margin="10px 0"
              weight="400"
            >
              $ AUD
            </Text>
            <Text
              onClick={this.handleCurrency.bind(this, "JPY")}
              hover
              margin="10px 0"
              weight="400"
            >
              ¥ JPY
            </Text>
          </Currency>
        ) : null}
        <Switch>
          <Route exact path="/products/:category" component={ProductList} />
          <Route exact path="/detail/:id" component={ProductDetail} />
            
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
