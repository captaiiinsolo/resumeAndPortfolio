const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type potentialClient {
    id: ID!
    name: String
    email: String
    phone: String
    companyName: String
  }

  type Query {
    potentialClients: [potentialClient]
  }

  type Mutation {
    createPotentialClient(name: String, email: String, phone: String, companyName: String): potentialClient
  }
  `;

  module.exports = typeDefs;