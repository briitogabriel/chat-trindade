const { User } = require('../models/Users');


async function create(req, res) {
    try {
        
        const { name, username, email, password } = req.body

        const existEmail = await User.findOne({
            where: {
                email: email
            }
        });

        const existUsername = await User.findOne({
            where: {
                username: username
            }
        })

        if(existEmail) {
            return res.status(403).send({
                message: 'usuário já existente com esse email'
            })
        }

        if(existUsername) {
            return res.status(403).send({
                message: 'usuário já existente com esse username'
            })
        }

        const userCreated = await User.create({
            name,
            username,
            email,
            password
        })

        return res.status(201).send(userCreated)

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao criar usuário',
            cause: error.message
        })
    }
}

async function findAll(req, res) {
    try {
        
        const users = await User.findAll()

        return res.status(200).send(users)

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao listar todos os usuários',
            cause: error.message
        })
    }
}

async function findOne(req, res) {
    try {
        
        const { userId } = req.params
        const user = await User.findByPk(userId)

        if(!user) {
            return res.status(404).send({
                message: 'usuário não encontrado'
            })
        }

        return res.status(200).send(user)

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao listar o usuário',
            cause: error.message
        })
    }
}

async function remove(req, res) {
    try {
        
        const { userId } = req.params
        const user = await User.findByPk(userId)

        if(!user) {
            return res.status(404).send({
                message: 'usuário não encontrado'
            })
        }

        await user.destroy()

        return res.status(200).send({
            message: 'usuário removido com sucesso'
        })

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao remover o usuário',
            cause: error.message
        })
    }
}

async function restore(req, res) {
    try {
        
        const { userId } = req.params
        const user = await User.findOne({where: {userId: userId}, paranoid: false})

        if(!user) {
            return res.status(404).send({
                message: 'usuário não encontrado'
            })
        }

        await user.restore()

        return res.status(200).send({
            message: 'usuário restaurado com sucesso'
        })

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao restaurar o usuário',
            cause: error.message
        })
    }
}

async function findAllAdm(req, res) {
    try {
        
        const users = await User.findAll({paranoid: false})

        if(!users) {
            return res.status(404).send({
                message: 'ainda não existem usuários cadastrados no sistema'
            })
        }

        return res.status(200).send(users)
        
    } catch (error) {
        return res.status(400).send({
            message: 'erro ao listar todos os usuários',
            cause: error.message
        })
    }
}

async function update(req, res) {
    try {
        
        const { userId } = req.params
        const { name, username } = req.body

        const user = await User.findByPk(userId)

        if(!user) {
            return res.status(404).send({
                message: 'usuário não encontrado'
            })
        }

        await update(userId, { name, username })

        return res.status(204).send()

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao atualizar o usuário',
            cause: error.message
        })
    }
}

async function updatePassword(req, res) {
    try {
        
        const { userId } = req.params
        const { password } = req.body

        const user = await User.findByPk(userId)

        if(!user) {
            return res.status(404).send({
                message: 'usuário não encontrado'
            })
        }

        await user.update(userId, { password })

    } catch (error) {
        return res.status(400).send({
            message: 'erro ao atualizar a senha do usuário',
            cause: error.message
        })
    }
}


module.exports = {
    create,
    findAll,
    findOne,
    remove,
    restore,
    findAllAdm,
    update,
    updatePassword
}