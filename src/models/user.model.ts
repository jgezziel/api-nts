import User, { UserAttributes } from '../schemas/User'

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

    try {
      const newUser = await User.create(input)
      return newUser
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
