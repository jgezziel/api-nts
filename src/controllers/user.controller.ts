import { Request, Response } from 'express'
import { userModel } from '../models/user.model'
import { validateUser } from '../schemas/User'

export const userController = {
  getAllUsers: async (_req: Request, res: Response) => {
    const users = await userModel.getAllUsers()
    if (users.length === 0) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'Users not found'
      })
    }
    return res.status(200).json({
      status: 'success',
      code: 200,
      users
    })
  },
  getUserById: async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await userModel.getUserById(parseInt(id, 10))

    if (user === null) {
      return res.status(404).json({
        status: 'error',
        code: 404,
        message: 'User not found'
      })
    }
    return res.status(200).json({
      status: 'success',
      code: 200,
      user
    })
  },
  createUser: async (req: Request, res: Response) => {
    const input = req.body
    const result = validateUser(input)
    if (!result.success) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: JSON.parse(result.error.message)
      })
    }

    const newUser = await userModel.createUser(result.data)

    if (newUser instanceof Error) {
      return res.status(400).json({
        status: 'error',
        code: 400,
        message: newUser.message
      })
    }

    return res.status(201).json({
      status: 'success',
      code: 201,
      user: newUser
    })
  },
  updateUser: async (req: Request, res: Response) => {
    const { id } = req.params
    const input = req.body

    const updatedUser = await userModel.updateUser(parseInt(id, 10), input)

    return res.json(updatedUser)
  },
  deleteUser: async (req: Request, res: Response) => {
    const { id } = req.params
    const deletedUser = await userModel.deleteUser(parseInt(id, 10))

    return res.json(deletedUser)
  }
}
