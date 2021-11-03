import React, { Component } from "react";
import { Button, Flex, Text } from "../components/common";
import { DetailGrid, DetailImg } from "../components/detailComponents";
class ProductDetail extends Component {
  state = {};
  render() {
    return (
      <DetailGrid>
        <Flex direction="column" justify="space-between">
          <img src="https://picsum.photos/150" alt="" />
          <img src="https://picsum.photos/150" alt="" />
          <img src="https://picsum.photos/150" alt="" />
        </Flex>
        <DetailImg src="https://picsum.photos/150" alt="" />
        <Flex direction="column" justify="space-between">
          <Flex direction="column">
            <Text margin="0.5rem 0" size="30" weight="600">
              Apollo
            </Text>
            <Text margin="0.5rem 0" size="30" weight="400">
              Apollo
            </Text>
          </Flex>
          <Flex direction="column">
            <Text margin="0.5rem 0" size="18" weight="700">
              SIZE:
            </Text>
            <Flex>
              <Button margin="0 0.5rem" padding="13px 23px">
                XS
              </Button>
              <Button margin="0 0.5rem" padding="13px 23px">
                S
              </Button>
              <Button margin="0 0.5rem" padding="13px 23px">
                M
              </Button>
              <Button margin="0 0.5rem" padding="13px 23px">
                L
              </Button>
            </Flex>
          </Flex>
          <Button>ADD to cart</Button>
          <Flex direction="column">
            <Text margin="0.5rem 0" size="18" weight="700">
              PRICE:
            </Text>
            <Text margin="0.5rem 0" size="24" weight="500">
              50$
            </Text>
          </Flex>
          <Flex direction="column">
            <Text margin="0.5rem 0">
              Find stunning women's cocktail dresses and party dresses. Stand
              out in lace and metallic cocktail dresses and party dresses from
              all your favorite brands.
            </Text>
          </Flex>
        </Flex>
      </DetailGrid>
    );
  }
}
export default ProductDetail;
