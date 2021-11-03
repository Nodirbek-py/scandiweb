import React, { Component } from "react";
import { Page, Text } from "../components/common";
import { CardImg, Grid, Card, AddToCart } from "../components/listComponents";
import add2cart from "../assets/imgs/add2cart.svg";
class ProductList extends Component {
  state = {};
  render() {
    return (
      <Page>
        <Text size="42" weight="400">
          Category Name
        </Text>
        <Grid>
          <Card>
            <CardImg src="https://picsum.photos/100" />
            <AddToCart src={add2cart} />
            <Text margin="6px 0" size="18" weight="300">
              Product
            </Text>
            <Text margin="6px 0" size="18" weight="500">
              Price
            </Text>
          </Card>
          <Card>
            <CardImg src="https://picsum.photos/100" />
            <AddToCart src={add2cart} />
            <Text margin="6px 0" size="18" weight="300">
              Product
            </Text>
            <Text margin="6px 0" size="18" weight="500">
              Price
            </Text>
          </Card>
          <Card>
            <CardImg src="https://picsum.photos/100" />
            <AddToCart src={add2cart} />
            <Text margin="6px 0" size="18" weight="300">
              Product
            </Text>
            <Text margin="6px 0" size="18" weight="500">
              Price
            </Text>
          </Card>
          <Card>
            <CardImg src="https://picsum.photos/100" />
            <AddToCart src={add2cart} />
            <Text margin="6px 0" size="18" weight="300">
              Product
            </Text>
            <Text margin="6px 0" size="18" weight="500">
              Price
            </Text>
          </Card>
        </Grid>
      </Page>
    );
  }
}
export default ProductList;
