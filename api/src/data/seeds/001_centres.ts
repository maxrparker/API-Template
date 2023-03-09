import * as knex from "knex";

exports.seed = async function (knex: knex.Knex, Promise: any) {
  await knex("accounts").delete().whereRaw("1=1");

  await knex("accounts").insert([
    {
      id: 1,
      name: "John Doe",
      email: "JohnDoe@placeholder.com",
      password: "password",
      phone: "555-555-5555",
      address: "123 Main St",
      city: "Anytown",
      state: "CA",
      zip: "12345",
      country: "USA",
      role: "admin",
      status: "active",
      created_by: "admin",
      updated_by: "admin",
      created_at: new Date(),
      updated_at: new Date()
    }
  ]);
};
