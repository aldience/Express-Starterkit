import express from 'express'
import cors from 'cors'
import session from 'express-session'
import Sequlizestore from 'connect-session-sequelize'
import morgan from 'morgan'
import dotenv from 'dotenv'
import UserRoute from './routes/UserRoute.js'
import ProductRouter from './routes/ProductRoute.js'
import AuthRouter from './routes/AuthRoute.js'
import db from './config/database.js'

dotenv.config()

const app = express()
app.use(morgan('dev'))

const SesionStore = Sequlizestore(session.Store)
const store = new SesionStore({
  db
})

// db.sync()

// store.sync()

// Middleware
app.use(
  cors({
    credentials: true,
    origin: 'http://localhost:5000'
  })
)

app.use(
  session({
    secret: process.env.SESS_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
      secure: 'auto'
    }
  })
)

app.use(express.json())

app.use(UserRoute)
app.use(ProductRouter)
app.use(AuthRouter)

// Server
const PORT = process.env.APP_PORT || 3000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
