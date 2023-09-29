const connection = require('../config/connection');
const { Client } = require('../models');
const { faker } = require('@faker-js/faker');
const mongoose = require('mongoose');

// const dayjs = require('dayjs');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ss-portfolio-db',); 
        console.log('MongoDB connected');

    } catch (err) {
        console.log(err);
    }

};

connectDB();

connection.on('error', (err) => console.log(err));

connection.once('open', async () => {
    console.log('Welcome, you have successfully connected to your potential client database.');

    await Client.deleteMany({});

    const clients = [];

    for (let i = 0; i < 5; i++) {
        clients.push({
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            // email: faker.internet.email(),
            // phone: faker.phone.number('619-###-####'),
            // companyName: faker.company.name(),
        });
    }

    await Client.collection.insertMany(clients);

    console.table(clients);

    console.info(`Seeded ${clients.length} potential clients.`);

    process.exit(0);
});