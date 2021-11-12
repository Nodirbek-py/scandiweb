import React, { Component } from "react";
import { Button, Flex, Text } from "../components/common";
import { DetailGrid, DetailImg } from "../components/detailComponents";
import { getProduct } from "../graphql/queries";
import { uiActions } from "../store/uiSlice";
import { graphql } from "react-apollo";
import { connect } from "react-redux";
import ReactHtmlParser from "react-html-parser";
class ProductDetail extends Component {
  state = {
    attributes: {
      color: "",
      capacity: "",
      size: "",
      touchId: "",
      typeUSB: "",
    },
  };
  componentDidMount() {}
  addToCart = () => {
    this.props.dispatch(
      uiActions.addToCart({
        ...this.props.data.product,
        count: 1,
        attributes: this.state.attributes,
        originalPrice: this.props.data.product.prices.filter(
          (price) => price.currency === this.props.ui.currency
        )[0].amount,
        price: this.props.data.product.prices.filter(
          (price) => price.currency === this.props.ui.currency
        )[0].amount,
      })
    );
    console.log(this.props.ui);
    this.setState({
      attributes: {
        color: "",
        capacity: "",
        size: "",
        touchId: "",
        typeUSB: "",
      },
    });
    this.props.dispatch(uiActions.total());
  };
  addAttribute = (name, value) => {
    if (name === "Color") {
      this.setState({
        attributes: {
          color: value,
          capacity: this.state.attributes.capacity,
          size: this.state.attributes.size,
          touchId: this.state.attributes.touchId,
          typeUSB: this.state.attributes.typeUSB,
        },
      });
    } else if (name === "Capacity") {
      this.setState({
        attributes: {
          color: this.state.attributes.color,
          capacity: value,
          size: this.state.attributes.size,
          touchId: this.state.attributes.touchId,
          typeUSB: this.state.attributes.typeUSB,
        },
      });
    } else if (name === "With USB 3 ports") {
      this.setState({
        attributes: {
          color: this.state.attributes.color,
          capacity: this.state.attributes.capacity,
          size: this.state.attributes.size,
          touchId: this.state.attributes.touchId,
          typeUSB: value,
        },
      });
    } else if (name === "Touch ID in keyboard") {
      this.setState({
        attributes: {
          color: this.state.attributes.color,
          capacity: this.state.attributes.capacity,
          size: this.state.attributes.size,
          touchId: value,
          typeUSB: this.state.attributes.typeUSB,
        },
      });
    } else if (name === "Size") {
      this.setState({
        attributes: {
          color: this.state.attributes.color,
          capacity: this.state.attributes.capacity,
          size: value,
          touchId: this.state.attributes.touchId,
          typeUSB: this.state.attributes.typeUSB,
        },
      });
    }
  };
  render() {
    return (
      <DetailGrid>
        {!this.props.data.loading ? (
          <>
            <Flex
              style={{ height: "90vh", overflow: "auto" }}
              direction="column"
              justify="space-between"
            >
              {this.props.data.product.gallery.map((img, index) => {
                return (
                  <img
                    style={{ margin: "0.5rem 0" }}
                    key={index}
                    src={img}
                    alt=""
                  />
                );
              })}
            </Flex>
            <DetailImg src={this.props.data.product.gallery[0]} alt="" />
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
                              onClick={this.addAttribute.bind(
                                this,
                                attribute.name,
                                item.displayValue
                              )}
                              key={index}
                              name={attribute.name}
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
                              onClick={this.addAttribute.bind(
                                this,
                                attribute.name,
                                item.displayValue
                              )}
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
              {this.props.data.product.inStock ? (
                <Button onClick={this.addToCart}>ADD to cart</Button>
              ) : (
                <Text size="24" margin="1rem auto">
                  Out of stock
                </Text>
              )}
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
                  {this.props.ui.currencySign}
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
