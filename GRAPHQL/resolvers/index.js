import knex from "../db";

export const resolvers = {
  Query: {
    allProducts: () => knex("product").select("*"),
  },
};
