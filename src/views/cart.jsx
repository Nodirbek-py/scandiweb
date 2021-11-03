import React, { Component } from "react";
import { Button, Flex, Page, Text, Line } from "../components/common";
class Cart extends Component {
  state = {};
  render() {
    return (
      <Page>
        <Text size="42" weight="400" margin="0 0 50px 0">
          Cart
        </Text>
        <Line background="#e5e5e5" margin="20px 0" />
        <Flex align="center" height="180px" justify="space-between">
          <Flex direction="column">
            <Text margin="0.5rem 0" size="30" weight="700">
              Apollo
            </Text>
            <Text margin="0.5rem 0" size="30" weight="300">
              Description
            </Text>
            <Text margin="0.5rem 0" size="24" weight="700">
              Price
            </Text>
            <Flex>
              <Button margin="0 12px 0 0">S</Button>
              <Button>M</Button>
            </Flex>
          </Flex>
          <Flex height="100%">
            <Flex
              margin="0 12px 0 0"
              direction="column"
              align="center"
              justify="space-between"
            >
              <Button>+</Button>
              <Text weight="500">1</Text>
              <Button>-</Button>
            </Flex>
            <img
              style={{ width: 120, height: 180 }}
              src="https://picsum.photos/150"
              alt=""
            />
          </Flex>
        </Flex>
      </Page>
    );
  }
}
export default Cart;
