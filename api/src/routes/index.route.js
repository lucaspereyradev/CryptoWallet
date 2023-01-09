const mysqlUsersRouter = require('./user/users.route');

const express = require('express');
const indexRoutes = express.Router();

indexRoutes.use('/users', mysqlUsersRouter);

module.exports = indexRoutes;
