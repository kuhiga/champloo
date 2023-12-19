import { ApolloGateway, IntrospectAndCompose } from '@apollo/gateway';
import { getStitchedSchemaFromSupergraphSdl } from '@graphql-tools/federation';

import { createYoga } from "graphql-yoga";

const gateway = new ApolloGateway({
  supergraphSdl: new IntrospectAndCompose({
    subgraphs: [
      { name: 'example', url: 'http://localhost:4201/graphql' },
      { name: 'expert-concur-reports', url: 'http://localhost:4202/graphql' },
    ],
  }),
});

await gateway.load();

export const handler = createYoga({
  schema: getStitchedSchemaFromSupergraphSdl({
    supergraphSdl: (gateway as any).supergraphSdl,
  }),
});
