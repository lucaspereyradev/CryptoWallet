var Sequelize = require('sequelize');
var sequelize = require('../config/mysql.config');
const Joi = require('joi');

var User = sequelize.define('users', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    first_name: Sequelize.STRING,
    last_name: Sequelize.STRING,
    email: Sequelize.STRING,

    password: Sequelize.STRING,
    balance: { type: Sequelize.FLOAT, defaultValue: '100000' },
    user_coins: Sequelize.JSON,
    status: {
        type: Sequelize.BOOLEAN,
        defaultValue: true,
    },
});

module.exports = {
    User,
};
