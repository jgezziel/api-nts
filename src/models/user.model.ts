import User, { UserAttributes } from '../schemas/User'
import bcrypt from 'bcrypt'

export const userModel = {
  getAllUsers: async () => {
    return await User.findAll({ attributes: { exclude: ['password'] } })
  },
  getUserById: async (id: number) => {
    const user = await User.findByPk(id, { attributes: { exclude: ['password'] } })
    return user
  },
  createUser: async (input: UserAttributes) => {
    const { email } = input
    const emailExists = await User.findOne({ where: { email } })

    if (emailExists != null) {
      return new Error('Email already exists')
    }
    const { password } = input
    const hashedPassword: any = await bcrypt.hash(password, 10)
    if (hashedPassword instanceof Error) {
      return new Error('Error hashing password')
    }

    try {
      return await User.create({ ...input, password: hashedPassword })
    } catch (error) {
      return error
    }
  },
  updateUser: async (id: number, _input: {}) => {
    return `Update a user: ${id}`
  },
  deleteUser: async (id: number) => {
    return `Delete a user: ${id}`
  }
}
