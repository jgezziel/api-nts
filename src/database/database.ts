import { Sequelize } from 'sequelize-typescript'

import User from '../schemas/User'

const connection = new Sequelize('test', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
  models: [User]
})

export default connection
