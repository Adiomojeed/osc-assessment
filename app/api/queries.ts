import { gql } from "graphql-request";

export const collectionQuery = gql`
    {
      collections(first: 10) {
        edges { 
          node {
            id
            handle
            title
          }
        }
      }
    }
  `;

export const productsQuery = gql`
  query GetCollection($collectionId: ID!) {
    collection(id: $collectionId) {
      products(first: 20) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

export const sProductQuery = gql`
  query GetProduct($productId: ID!) {
    product(id: $productId) {
      id
      title
      description
      featuredImage {
        id
        url
      }
      variants(first: 1) {
        edges {
          node {
            price {
              amount
              currencyCode
            }
          }
        }        
      }    
    }
  }
`;

export const fProductsQuery = gql`
    {
      products(first: 8) {
        edges {
          node {
            id
            title
            description
            featuredImage {
              id
              url
            }
            variants(first: 1) {
              edges {
                node {
                  price {
                    amount
                    currencyCode
                  }
                }
              }
            }
          }
        }
      }
    }
  `;