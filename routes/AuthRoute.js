import express from 'express'
import { login, logOut, Me } from '../controller/Auth.js'

const AuthRouter = express.Router()
AuthRouter.get('/me', Me)
AuthRouter.post('/login', login)
AuthRouter.delete('/logout', logOut)

export default AuthRouter
