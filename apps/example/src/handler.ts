import { parse } from 'graphql';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { createYoga } from 'graphql-yoga';

const typeDefs = parse(/* GraphQL */ `
  type Query {
    hello: String
  }
`);

const schema = buildSubgraphSchema({
  typeDefs,
  resolvers: {
    Query: {
      hello: () => 'world',
    },
  },
});

export const handler = createYoga({ schema });
