import { gql } from "graphql-request";
import { graphQLClient } from "./server";

export type Collection = {
  id: string;
  handle: string;
  title: string;
};

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