
import { GraphQLClient } from 'graphql-request';

const baseUrl = process.env.PUBLIC_BASE_URL as string;

// Initialize the GraphQL client with the base URL and headers
const graphQLClient = new GraphQLClient(baseUrl, {
  headers: {
    // All required headers will come here
  },
});

export { graphQLClient };