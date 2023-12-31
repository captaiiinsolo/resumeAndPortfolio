const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Client {
    _id: ID!
    firstName: String
    lastName: String
    email: String
    phone: String
    companyName: String
    message: String
    
  }

  type Query {
    clients: [Client]
    client(_id: ID!): Client
    thisClient: Client
  }

  type Mutation {
    createClient(firstName: String!, lastName: String!, email: String!, phone: String!, companyName: String, message: String): Client
    updateClient(_id: ID!, firstName: String, lastName: String): Client
    deleteClient(_id: ID!): Client
  }
  `;

  module.exports = typeDefs;