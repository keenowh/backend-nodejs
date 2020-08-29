import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    allProducts: [Product!]!
    singleProduct(id: ID!): Product
  }

  type Mutation {
    createProduct(name: String!, price: Float!): Product!
    deleteProduct(id: ID!): String!
  }

  type Product {
    id: ID!
    name: String
    price: Float
  }
`;
