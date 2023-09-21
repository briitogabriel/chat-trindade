const { Chat } = require('../models/Chat');
const { User } = require('../models/Users');

class ChatController {
    async create(req, res) {
        try {
            
            const { name, description, userId } = req.body
            const user = await User.findByPk(userId);

            if(!user) {
                return res.status(404).send({
                    message: 'usuário não encontrado'
                })
            }

            if(!name) {
                return res.status(406).send({
                    message: 'o nome do chat é obrigatório'
                })
            }

            const chatCreated = {
                name,
                description,
            }

            return res.status(201).send(chatCreated)

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao criar chat',
                cause: error.message
            })
        }
    }

    async findAll(req, res) {
        try {
            
            const chats = Chat.findAll()

            if(!chats) {
                return res.status(404).send({
                    message: 'nenhum chat encontrado'
                })
            }

            return res.status(200).send(chats)

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao listar chats',
                cause: error.message
            })
        }
    }

    async findOne(req, res) {
        try {
            
            const { chatId } = req.params
            const chat = Chat.findByPk(chatId)

            if(!chat) {
                return res.status(404).send({
                    message: 'chat não encontrado'
                })
            }

            return res.status(200).send(chat)

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao listar chat',
                cause: error.message
            })
        }
    }

    async remove(req, res) {
        try {
            
            const { chatId } = req.params
            const chat = Chat.findByPk(chatId)

            if(!chat) {
                return res.status(404).send({
                    message: 'chat não encontrado'
                })
            }

            await chat.destroy()

            return res.status(200).send({
                message: 'chat removido com sucesso'
            })

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao remover chat',
                cause: error.message
            })
        }
    }

    async restore(req, res) {
        try {
            
            const { chatId } = req.body
            const chat = Chat.findOne({where: {chatId: chatId}, paranoid: false});

            if(!chat) {
                return res.status(404).send({
                    message: 'chat não encontrado'
                })
            }

            await chat.restore()

            return res.status(200).send({
                message: 'chat restaurado com sucesso'
            });

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao restaurar chat',
                cause: error.message
            })
        }
    }

    async findAllAdm(req, res) {
        try {
            
            const chats = await Chat.findAll({paranoid: false})

            if(!chats) {
                return res.status(404).send({
                    message: 'ainda não existem chats para buscar'
                })
            }

            return res.status(200).send(chats)

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao listar chats',
                cause: error.message
            })
        }
    }

    async update(req, res) {
        try {
            
            const { chatId } = req.body
            const { name, description } = req.body

            const chat = Chat.findByPk(chatId)

            if(!chat) {
                return res.status(404).send({
                    message: 'chat não encontrado'
                })
            }

            await chat.update()

            return res.status(200).send({
                message: 'chat atualizado com sucesso'
            })

        } catch (error) {
            return res.status(400).send({
                message: 'erro ao atualizar chats',
                cause: error.message
            })
        }
    }
}

module.exports = new ChatController()