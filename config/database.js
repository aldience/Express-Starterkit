import Sequelize from 'sequelize'

const db = new Sequelize('fullstack-express-react', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})

export default db
