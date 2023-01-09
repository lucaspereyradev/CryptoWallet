const { User } = require('../models/user.model');
const databaseMysql = require('./mysql.config');

User.sync();
databaseMysql.sync();
