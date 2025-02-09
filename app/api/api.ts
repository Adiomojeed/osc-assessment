import { gql } from "graphql-request";
import { graphQLClient } from "./server";

const formatProduct = (products: any) => {
  return products.edges.map((edge: any) => ({
    id: edge.node.id,
    title: edge.node.title,
    description: edge.node.description,
    featuredImage: edge.node.featuredImage,
    price: edge.node.variants.edges[0].node.price
  }))
}

export type Collection = {
  id: string;
  handle: string;
  title: string;
};

export type Product = {
  id: string;
  title: string;
  description: string;
  featuredImage: {
    id: string;
    url: string
  };
  price: {
    amount: string;
    currencyCode: string
  }
}

export async function getCollections() {
  const query = gql`
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
  const data = await graphQLClient.request(query) as { collections: { edges: { node: Collection }[] } };
  const collections: Collection[] = data.collections.edges.map((edge: any) => edge.node);
  return collections;
}


export async function getProducts(collectionId: string) {
  const query = gql`
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

  const variables = { collectionId: `gid://shopify/Collection/${collectionId}` };
  const data = await graphQLClient.request(query, variables) as {
    collection: {
      products: { edges: { node: { id: string; title: string; featuredImage: { id: string; url: string } } }[] };
    };
  };
  const products: Product[] = formatProduct(data.collection.products)

  return products;
}

export async function getSingleProduct(productId: string) {
  const query = gql`
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

  const variables = { productId: `gid://shopify/Product/${productId}` };
  const data = await graphQLClient.request(query, variables) as {
    product: {
      id: string; title: string; description: string; featuredImage: { id: string; url: string }; variants: any
    }
  };

  const { variants, ...rest } = data.product;
  const product: Product = { ...rest, price: variants.edges[0].node.price }

  return product;
}

export async function getFeaturedProducts() {
  const query = gql`
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


  const data = await graphQLClient.request(query) as {
    products: { edges: { node: { id: string; title: string; featuredImage: { id: string; url: string } } }[] };
  };
  const products: Product[] = formatProduct(data.products)
  return products;
}
