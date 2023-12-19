import { parse } from 'graphql';
import { buildSubgraphSchema } from '@apollo/subgraph';
import { createYoga } from 'graphql-yoga';

const typeDefs = parse(/* GraphQL */ `
  type Query {
    hello2: String
  }

  type Job {
    id: ID!
  }

  type Mutation {
    createConcurExpenseReport(
      input: CreateConcurExpenseReportInput!
    ): ConcurExpenseReport!
  }

  input CreateConcurExpenseReportInput {
    employeeId: String!
    date: String!
  }

  type ConcurExpenseReport @key(fields: "id") {
    id: ID!
  }
`);

const schema = buildSubgraphSchema({
  typeDefs,
  resolvers: {
    Query: {
      hello2: () => 'Hello World',
    },
    Mutation: {
      createConcurExpenseReport: (input) => ({ id: crypto.randomUUID() }),
    },
  },
});

export const handler = createYoga({ schema });
