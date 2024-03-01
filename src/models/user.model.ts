import userSchema from '../schemas/User'
import { ZodError } from 'zod'

export const userModel = {
  getAllUsers: async () => {
    return 'Get all users'
  },
  getUserById: async (id: number) => {
    return `Get a user by id: ${id}`
  },
  createUser: async (_input: {}) => {
    try {
      const user = userSchema.parse(_input)
      return user
    } catch (error) {
      if (error instanceof ZodError) {
        return error.errors.map((err) => ({ message: err.message }))
      }
    }
    return 'Not a valid user object'
  },
  updateUser: async (id: number, _input: {}) => {
    return `Update a user: ${id}`
  },
  deleteUser: async (id: number) => {
    return `Delete a user: ${id}`
  }
}
