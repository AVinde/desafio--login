import { Router } from "express";
import { userModel } from "../models/users.models.js";

const sessionRouter = Router()

sessionRouter.post('/login', async (req, res) => {
    const { email, password } = req.body

    try {
        if (req.session.user) {
            res.redirect(301, '/static')
        } else {

            const user = await userModel.findOne({ email: email })

            if (user) {
                if (user.password == password) {
                    req.session.user = user
                    res.redirect(301, '/static')
                } else {
                    res.status(401).send({ resultado: 'Contaseña no valida' })
                }
            } else {
                res.status(404).send({ resultado: 'Not Found', respuesta: user })
            }

        }

    }

    catch (error) {
        console.log(error)
        res.status(400).send({ error: `Error en Login: ${error}` })
    }
})

sessionRouter.get('/logout', (req, res) =>{
    if(req.session && req.session.user){
        req.session.destroy()
    }
    res.redirect(301, '/login')
})

sessionRouter.get('/user', (req, res) => {
    if (req.session.user) {
        const user = req.session.user
        res.status(200).send(user)
    }
})

export default sessionRouter