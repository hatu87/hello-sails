/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */
module.exports = {
    autoPK: true,
    autoCreatedAt: true,
    autoUpdatedAt: true,
    attributes: {
        email: {
            type: 'string'
        },
        name: {
            type: 'string'
        },
        password: {
            type: 'string'
        }
    },
    register: function(options, callback) {
        User.create({
            name: options['name'],
            email: options['email'],
            password: options['password']
        }).exec(callback);
    }
};