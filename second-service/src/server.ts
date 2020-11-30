import { ApolloServer, gql } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";

const typeDefs = gql`
  type Query {
    goodbye(name: String): String
  }
`;

const resolvers = {
  Query: {
    goodbye: (_root: any, args: any) =>
      `Goodbye, ${args.name ? args.name : "Cruel World"}!`,
  },
};

const server = new ApolloServer({
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
});

const port = 4002;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});
