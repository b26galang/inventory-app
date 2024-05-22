const express = require('express');
const Router = express.Router();

const {
    getAllUsers,
    getUser,
    createUser,
    updateUser,
    deleteUser
} = require('../controllers/userController');

const { validateName, validatePassword } = require('../validators/userValidator');

Router.get('/users', getAllUsers);
Router.get('/users/:userId', getUser);
Router.post('/users', [validateName, validatePassword], createUser);
Router.put('/users/:userId', [validateName, validatePassword], updateUser);
Router.delete('/users/:userId', deleteUser);

module.exports = Router;