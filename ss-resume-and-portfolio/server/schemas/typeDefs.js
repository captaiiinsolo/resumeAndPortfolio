const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    companyName: String
  }

  type Query {
    clients: [Client]
    client(_id: ID!): Client
    thisClient: Client
  }

  type Mutation {
    createClient(_id: ID!, firstName: String, lastName: String, email: String, phone: String, companyName: String): Client
  }
  `;

  module.exports = typeDefs;