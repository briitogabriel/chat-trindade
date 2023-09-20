const { create, findAll, findOne, findAll, remove, restore, update } = require('../controllers/chat.controller');
const { Router } = require('express');

class ChatRouter {
    routesFromChat() {
        const chatRoutes = Router()
        chatRoutes.post('/chats', create);
        chatRoutes.get('/chats', findAll);
        chatRoutes.get('/chats/:chatId', findOne);
        chatRoutes.delete('/chats/:chatId/remove', remove);
        chatRoutes.post('/chats/:chatId/restore', restore);
        chatRoutes.patch('/chats/:chatId/update', update);
        return chatRoutes
    }
}

module.exports = new ChatRouter()