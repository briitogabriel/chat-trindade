const { routesFromChat } = require('./chats.routes');
const { routesFromUser } = require('./users.routes');
const { Router } = require('express');

const createRoutes = () => {
    const routes = Router()

    routes.use('/api', [
        routesFromUser(),
        routesFromChat(),
    ])

    return routes

}

module.exports = createRoutes