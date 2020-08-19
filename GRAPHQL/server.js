import { GraphQLServer } from "graphql-yoga";
import {typeDefs } from "./typedefs/index";
import { resolvers } from './resolvers/index'
const server = new GraphQLServer({ typeDefs, resolvers });

server.start(({ port }) => {
  console.log(`Server on http://localhost:${port}/`);
});
