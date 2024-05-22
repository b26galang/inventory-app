const express = require('express');
const Router = express.Router();

const { getAllUsers, getUser, createUser, updateUser, deleteUser } = require('../controllers/userController');

Router.get('/users', getAllUsers);
Router.get('/users/:userId', getUser);
Router.post('/users', createUser);
Router.put('/users/:userId', updateUser);
Router.delete('/users/:userId', deleteUser);

module.exports = Router;