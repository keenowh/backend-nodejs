import knex from "../db";

export const resolvers = {
  Query: {
    allProducts: () => knex("product").select("*"),
    singleProduct: async (_, { id }) => {
      const prod = await knex("product")
        .where({ id })
        .then((row) => row[0]);
      return prod;
    },
  },

  Mutation: {
    createProduct: async (_, { name, price }) => {
      const insProd = await knex("product")
        .returning(["id", "name", "price"])
        .insert({ name, price })
        .then((row) => row[0]);
      return insProd;
    },
    deleteProduct: async (_, {id}) => {
      await knex("product").where({id}).del()

      return "Success!"
    } 
  },
};
