const { Schema, model } = require('mongoose');

const clientSchema = new Schema(
    {
        userType: {
            type: String,
            default: 'client'
        },

        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            required: true,
            trim: true
        },

        email: {
            type: String,
            required: [true, "An email address is required"],
            validate: {
                validator: function (v) {
                    return /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/.test(v);
                  },
                    message: props => `${props.value} is not a valid email`
                },
            },

        companyName: {
            type: String,
            required: true,
            trim: true
        },
    },
    {
        toJSON: {
            virtuals: true,
            getters: true,
        },
        id: false,
    }

    );

    const Client = model('Client', clientSchema);

    module.exports = Client;