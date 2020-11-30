import { ApolloServer, gql } from "apollo-server";
import { ApolloGateway } from "@apollo/gateway";

// Initialize an ApolloGateway instance and pass it an array of
// your implementing service names and URLs
const gateway = new ApolloGateway({
  serviceList: [
    { name: "hello", url: "http://localhost:4001" },
    { name: "goodbye", url: "http://localhost:4002" },
  ],
});

// Pass the ApolloGateway to the ApolloServer constructor
const server = new ApolloServer({
  gateway,

  // Disable subscriptions (not currently supported with ApolloGateway)
  subscriptions: false,
});

const port = 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}graphql`);
});
