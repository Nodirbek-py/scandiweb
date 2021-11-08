import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Flex, Page, Text, Line } from "../components/common";
import { uiActions } from "../store/uiSlice";
class Cart extends Component {
  state = {};
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <Page>
        <Text size="42" weight="400" margin="0 0 50px 0">
          Cart
        </Text>
        {this.props.ui.cart.map((item, index) => {
          return (
            <>
              <Line background="#e5e5e5" margin="20px 0" />
              <Flex align="center" height="180px" justify="space-between">
                <Flex direction="column">
                  <Text margin="0.5rem 0" size="30" weight="700">
                    {item.name}
                  </Text>
                  <Text margin="0.5rem 0" size="24" weight="700">
                    {item.price} {this.props.ui.currency}
                  </Text>
                  <Flex>
                    {item.attributes.size !== "" ? (
                      <Flex direction="column">
                        <Text margin="0.5rem" size="24" weight="700">
                          Size
                        </Text>
                        <Text margin="0.5rem" size="18" weight="400">
                          {item.attributes.size}
                        </Text>{" "}
                      </Flex>
                    ) : null}
                    {item.attributes.capacity !== "" ? (
                      <Flex direction="column">
                        <Text margin="0.5rem" size="24" weight="700">
                          Capacity
                        </Text>
                        <Text margin="0.5rem" size="18" weight="400">
                          {item.attributes.capacity}
                        </Text>{" "}
                      </Flex>
                    ) : null}
                    {item.attributes.color !== "" ? (
                      <Flex direction="column">
                        <Text margin="0.5rem" size="24" weight="700">
                          Color
                        </Text>
                        <Text margin="0.5rem" size="18" weight="400">
                          {item.attributes.color}
                        </Text>{" "}
                      </Flex>
                    ) : null}
                    {item.attributes.touchId !== "" ? (
                      <Flex direction="column">
                        <Text margin="0.5rem" size="24" weight="700">
                          Touch ID
                        </Text>
                        <Text margin="0.5rem" size="18" weight="400">
                          {item.attributes.touchId}
                        </Text>{" "}
                      </Flex>
                    ) : null}
                    {item.attributes.typeUSB !== "" ? (
                      <Flex direction="column">
                        <Text margin="0.5rem" size="24" weight="700">
                          USB type ports
                        </Text>
                        <Text margin="0.5rem" size="18" weight="400">
                          {item.attributes.typeUSB}
                        </Text>{" "}
                      </Flex>
                    ) : null}
                  </Flex>
                </Flex>
                <Flex height="100%">
                  <Flex
                    margin="0 12px 0 0"
                    direction="column"
                    align="center"
                    justify="space-between"
                  >
                    <Button
                      onClick={() =>
                        this.props.dispatch(uiActions.increment(index))
                      }
                    >
                      +
                    </Button>
                    <Text weight="500">{item.count}</Text>
                    <Button
                      onClick={() =>
                        this.props.dispatch(uiActions.decrement(index))
                      }
                    >
                      -
                    </Button>
                  </Flex>
                  <img
                    style={{ width: "100%", height: "100%" }}
                    src={item.gallery[0]}
                    alt=""
                  />
                </Flex>
              </Flex>
            </>
          );
        })}
      </Page>
    );
  }
}
const mapStateToProps = (state) => {
  return state;
};
export default connect(mapStateToProps)(Cart);
