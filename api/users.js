const express = require('express');
const usersRouter = express.Router();

usersRouter.use((req, res, next) => {
    console.log('Making a request to /users');
    next();
});

const { getAllUsers } = require('../db');

usersRouter.get('/', async (req, res) => {
    const users = await getAllUsers();
    res.send({
        users
    });
});

module.exports = usersRouter;