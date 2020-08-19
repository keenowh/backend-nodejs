import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    allProducts: [Product!]!
    singleProduct(id: ID!): Product!
  }

  type Product {
    id: ID!
    name: String
    price: Int
  }
`;
