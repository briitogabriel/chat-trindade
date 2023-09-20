const { create, findAll, findOne, findAllAdm, remove, restore, update, updatePassword } = require('../controllers/user.controller');
const { Router } = require('express');

class UserRouter {
    routesFromUser() {
        const userRoutes = Router()
        userRoutes.post('/users', create);
        userRoutes.get('/users', findAll);
        userRoutes.get('/users/:userId', findOne);
        userRoutes.get('/users/:userId', findAllAdm);
        userRoutes.delete('/users/:userId/remove', remove);
        userRoutes.post('/users/:userId/restore', restore);
        userRoutes.patch('/users/:userId/update', update);
        userRoutes.patch('/users/:userId/password', updatePassword);
        return userRoutes
    }
}