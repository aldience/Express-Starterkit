import express from 'express'
import { getUsers, getUsersById, createUsers, updateUsers, deleteUsers } from '../controller/Users.js'
import { verifyuser, adminonly } from '../middleware/AuthUser.js'
// import { authenticate } from '../middleware/jwt.js'

const UserRoute = express.Router()

UserRoute.get('/users', verifyuser, adminonly, getUsers)
UserRoute.get('/users/:id', verifyuser, adminonly, getUsersById)
UserRoute.post('/users', verifyuser, adminonly, createUsers)
UserRoute.patch('/users/:id', verifyuser, adminonly, updateUsers)
UserRoute.delete('/users/:id', verifyuser, adminonly, deleteUsers)

export default UserRoute
