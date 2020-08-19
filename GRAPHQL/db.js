require("dotenv").config();

const knex = require("knex")({
  client: "pg",
  connection: "postgres://postgres:postgres@localhost:5432/restful",
});

module.exports = knex;
