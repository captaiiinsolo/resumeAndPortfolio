const { Client } = require('../models');

const resolvers = {
    Query: {

        thisClient: async (parent, { _id}, context) => {
            if (context.client) {
                const client = await Client.findById(_id)
            }
        },

        clients: async () => {
            return await Client.find({})
        },

        client: async (parent, { _id }) => {
            return await Client.findById(_id)
        },

        
    }
};

module.exports = resolvers;
