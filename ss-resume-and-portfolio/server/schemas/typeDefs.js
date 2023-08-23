const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    companyName: String
  }

  type Query {
    clients: [Client]
    client(id: ID!): Client
    thisClient: Client
  }

  type Mutation {
    createClient(firstName: String, lastName: String, email: String, phone: String, companyName: String): Client
  }
  `;

  module.exports = typeDefs;