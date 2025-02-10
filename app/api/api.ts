import { graphQLClient } from "./server";
import { getCollectionId } from "@/utils";
import { collectionQuery, fProductsQuery, productsQuery, sProductQuery } from "./queries";

// This function formats the project object to a desired product type
const formatProduct = (products: any) => {
  return products.edges.map((edge: any) => ({
    id: getCollectionId(edge.node.id),
    title: edge.node.title,
    description: edge.node.description,
    featuredImage: edge.node.featuredImage,
    price: edge.node.variants.edges[0].node.price
  }))
}

// collection type
export type Collection = {
  id: string;
  handle: string;
  title: string;
};

// product type
export type Product = {
  id: number;
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

// This async function gets all collections from the api
export async function getCollections() {
  const data = await graphQLClient.request(collectionQuery) as { collections: { edges: { node: Collection }[] } };
  const collections: Collection[] = data.collections.edges.map((edge: any) => edge.node);
  return collections;
}

// This async functions gets all the products attached to a particular collection
export async function getProducts(collectionId: string) {
  const variables = { collectionId: `gid://shopify/Collection/${collectionId}` };
  const data = await graphQLClient.request(productsQuery, variables) as {
    collection: {
      products: { edges: { node: { id: string; title: string; featuredImage: { id: string; url: string } } }[] };
    };
  };
  const products: Product[] = formatProduct(data.collection.products)

  return products;
}

// This async functions loads a single product by its id
export async function getSingleProduct(productId: string) {
  const variables = { productId: `gid://shopify/Product/${productId}` };
  const data = await graphQLClient.request(sProductQuery, variables) as {
    product: {
      id: string; title: string; description: string; featuredImage: { id: string; url: string }; variants: any
    }
  };

  const { variants, ...rest } = data.product;
  const product: Product = { ...rest, id: Number(getCollectionId(rest.id)), price: variants.edges[0].node.price }

  return product;
}

// This async function retrieves all products that are listed as featured products on the landing page
export async function getFeaturedProducts() {
  const data = await graphQLClient.request(fProductsQuery) as {
    products: { edges: { node: { id: string; title: string; featuredImage: { id: string; url: string } } }[] };
  };
  const products: Product[] = formatProduct(data.products)
  return products;
}
