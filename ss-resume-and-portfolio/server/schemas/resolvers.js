const { Client } = require('../models');
const { findByIdAndRemove, findByIdAndUpdate } = require('../models/client');


const resolvers = {
    Query: {

        clients: async () => {
            return await Client.find({})
        },

        client: async (parent, { _id }) => {
            return await Client.findById(_id)
        },
        
        thisClient: async (parent, { _id}, context) => {
            if (context.client) {
                const client = await Client.findById(_id);
                return client;
            }
        },
        
    },

    Mutation: {
        createClient: async (parent, args) => {
            const client = await Client.create(args);
            return client;
        },

        updateClient: async (parent, {_id, firstName, lastName, email, phone, companyName}) => {
            return Client.findByIdAndUpdate(
                _id,
                { $set: { firstName, lastName, email, phone, companyName } },
                { new: true }
            );
        },

        deleteClient: async (parent, { _id }) => {
            return await Client.findByIdAndRemove(_id);
        },

    }
};

module.exports = resolvers;
