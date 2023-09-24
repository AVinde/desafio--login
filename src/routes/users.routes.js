import { Router } from "express"
import { userModel } from "../models/users.models.js"

const userRouter = Router()

userRouter.get('/', async (req, res) => {
    const { limit } = req.query

    try {
        const users = await userModel.find().limit(limit)
        res.status(200).send({ respuesta: 'OK', mensaje: users })
    } catch (error) {
        res.status(400).send({ respuesta: 'Error en consultar usuarios', mensaje: error })
    }
})

userRouter.get('/:id', async (req, res) => {
    const { id } = req.params

    try {
        const user = await userModel.findById(id)
        if (user) {

            res.status(200).send({ respuesta: 'OK', mensaje: user })
        } else {
            res.status(404).send({ respuesta: 'Error', mensaje: 'Not Found' })
        }
    } catch (error) {
        res.status(400).send({ respuesta: 'Error en consultar usuarios', mensaje: error })
    }
})

userRouter.post('/', async (req, res) => {
    const { firstName, lastName, age, email, password } = req.body

    try {
        const user = await userModel.create({ firstName, lastName, age, email, password})
        res.status(200).send({ respuesta: 'OK', mensaje: user })
        
    } catch (error) {
        res.status(400).send({ respuesta: 'Error en consultar usuarios', mensaje: error })
    }
})

userRouter.put('/:id', async (req, res) => {
    const {id} = req.params
    const { firstName, lastName, age, email, password } = req.body

    try {
        const user = await userModel.findByIdAndUpdate(id, { firstName, lastName, age, email, password})
        if (user) {
            res.status(200).send({ respuesta: 'OK', mensaje: user })
        } else {
            res.status(404).send({ respuesta: 'Error', mensaje: 'Not Found' })
        }
        
    } catch (error) {
        res.status(400).send({ respuesta: 'Error en consultar usuarios', mensaje: error })
    }
})

userRouter.delete('/:id', async (req, res) => {
    const {id} = req.params

    try {
        const user = await userModel.findByIdAndDelete(id)
        if (user) {
            res.status(200).send({ respuesta: 'OK', mensaje: user })
        } else {
            res.status(404).send({ respuesta: 'Error', mensaje: 'Not Found' })
        }
        
    } catch (error) {
        res.status(400).send({ respuesta: 'Error en consultar usuarios', mensaje: error })
    }
})

export default userRouter