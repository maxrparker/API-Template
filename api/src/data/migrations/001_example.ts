import * as knex from "knex";

exports.up = function (knex: knex.Knex, Promise: any) {
  return knex.schema.createTable("example", function (table) {
    table.increments("id").primary();
    table.string("name").notNullable();
    table.string("email").notNullable();
    table.string("password").notNullable();
    table.string("phone").notNullable();
    table.string("address").notNullable();
    table.string("city").notNullable();
    table.string("state").notNullable();
    table.string("zip").notNullable();
    table.string("country").notNullable();
    table.string("role").notNullable();
    table.string("status").notNullable();
    table.string("created_by").notNullable();
    table.string("updated_by").notNullable();
    table.timestamp("created_at").notNullable();
    table.timestamp("updated_at").notNullable();
  });
};

exports.down = function (knex: knex.Knex, Promise: any) {
  return knex.schema.dropTable("example");
};
