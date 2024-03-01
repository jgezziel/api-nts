import { Sequelize } from 'sequelize'

const connection = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql'
})
export default connection
