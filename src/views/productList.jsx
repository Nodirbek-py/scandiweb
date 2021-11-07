import React, { Component } from "react";
import { Page, Text } from "../components/common";
import { CardImg, Grid, Card, AddToCart } from "../components/listComponents";
import add2cart from "../assets/imgs/add2cart.svg";
import { getProducts } from "../graphql/queries";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import { uiActions } from "../store/uiSlice";
import { Link } from "react-router-dom";

class ProductList extends Component {
  state = {};
  addToCart = (product) => {
    this.props.dispatch(uiActions.addToCart(product));
    this.props.dispatch(uiActions.total());
  };
  handleSelect = (id) => {
    this.props.dispatch(uiActions.select(id));
  };
  render() {
    return (
      <Page>
        <Text size="42" transform="uppercase" weight="400">
          {this.props.match.params.category}
        </Text>
        <Grid>
          {this.props.data.categories ? (
            this.props.data.categories
              .filter(
                (category) => category.name === this.props.match.params.category
              )[0]
              .products.map((product) => {
                return (
                  <Card key={product.id}>
                    <CardImg
                      src={product.gallery[0]}
                      inStock={String(product.inStock)}
                    >
                      {product.inStock ? null : <h1>Out of stock</h1>}
                    </CardImg>
                    {product.inStock ? (
                      <AddToCart
                        src={add2cart}
                        onClick={this.addToCart.bind(this, {
                          ...product,
                          count: 1,
                          price: product.prices.filter(
                            (price) => price.currency === this.props.ui.currency
                          )[0].amount,
                        })}
                      />
                    ) : null}
                    <Link key={product.id} to={"/detail/" + product.id}>
                      <Text hover margin="6px 0" size="18" weight="300">
                        {product.name}
                      </Text>
                      <Text hover margin="6px 0" size="18" weight="500">
                        {
                          product.prices.filter(
                            (price) => price.currency === this.props.ui.currency
                          )[0].amount
                        }{" "}
                        {this.props.ui.currency}
                      </Text>
                    </Link>
                  </Card>
                );
              })
          ) : (
            <h1>Loading...</h1>
          )}
        </Grid>
      </Page>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(graphql(getProducts)(ProductList));
