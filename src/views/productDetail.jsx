import React, { Component } from "react";
import { Button, Flex, Text } from "../components/common";
import { DetailGrid, DetailImg } from "../components/detailComponents";
import { getProduct } from "../graphql/queries";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
class ProductDetail extends Component {
  state = {};
  render() {
    console.log(this.props);
    return (
      <DetailGrid>
        {!this.props.data.loading ? (
          <>
            <Flex direction="column" justify="space-between">
              <img src="https://picsum.photos/150" alt="" />
              <img src="https://picsum.photos/150" alt="" />
              <img src="https://picsum.photos/150" alt="" />
            </Flex>
            <DetailImg src="https://picsum.photos/150" alt="" />
            <Flex direction="column" justify="space-between">
              <Flex direction="column">
                <Text margin="0.5rem 0" size="30" weight="600">
                  {this.props.data.product.brand}
                </Text>
                <Text margin="0.5rem 0" size="30" weight="400">
                  {this.props.data.product.name}
                </Text>
              </Flex>
              {this.props.data.product.attributes.map((attribute, index) => {
                return (
                  <Flex key={index} direction="column">
                    <Text margin="0.5rem 0" size="18" weight="700">
                      {attribute.name}:
                    </Text>
                    {attribute.type === "swatch" ? (
                      <Flex direction="row">
                        {attribute.items.map((item, index) => {
                          return (
                            <Button
                              key={index}
                              margin="0 0.5rem"
                              padding="13px 23px"
                              background={item.value}
                            >
                              {item.displayValue}
                            </Button>
                          );
                        })}
                      </Flex>
                    ) : (
                      <Flex direction="row">
                        {attribute.items.map((item, index) => {
                          return (
                            <Button
                              key={index}
                              margin="0 0.5rem"
                              padding="13px 23px"
                            >
                              {item.value}
                            </Button>
                          );
                        })}
                      </Flex>
                    )}
                  </Flex>
                );
              })}

              <Button>ADD to cart</Button>
              <Flex direction="column">
                <Text margin="0.5rem 0" size="18" weight="700">
                  PRICE:
                </Text>
                <Text margin="0.5rem 0" size="24" weight="500">
                  {
                    this.props.data.product.prices.filter(
                      (price) => price.currency === this.props.ui.currency
                    )[0].amount
                  }{" "}
                  {this.props.ui.currency}
                </Text>
              </Flex>
              <Flex direction="column">
                <Text margin="0.5rem 0">
                  {ReactHtmlParser(this.props.data.product.description)}
                </Text>
              </Flex>
            </Flex>
          </>
        ) : null}
      </DetailGrid>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};

export default connect(mapStateToProps)(
  graphql(getProduct, {
    options: (props) => {
      return {
        variables: {
          id: props.match.params.id,
        },
      };
    },
  })(ProductDetail)
);
