import { gql } from "apollo-boost";
const getProducts = gql`
  {
    categories {
      name
      products {
        name
        id
        description
        category
        inStock
        gallery
        attributes {
          name
          type
          items {
            value
            displayValue
          }
        }
        prices {
          currency
          amount
        }
      }
    }
  }
`;

const getProduct = gql`
  query ($id: String!) {
    product(id: $id) {
      name
      gallery
      description
      brand
      inStock
      id
      prices {
        amount
        currency
      }
      attributes {
        name
        type
        items {
          value
          displayValue
        }
      }
    }
  }
`;
export { getProducts, getProduct };
