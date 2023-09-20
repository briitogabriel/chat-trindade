const { routesFromChat } = require('./chats.routes');
const { routesFromUser } = require('./users.routes');
const { Router } = require('express');

const routes = new Router()

routes.use('/api', [
    routesFromUser(),
    routesFromChat(),
])

module.exports = routes