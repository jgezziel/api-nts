import { Request, Response } from 'express'
import { userModel } from '../models/user.model'

export const userController = {
  getAllUsers: async (_req: Request, res: Response) => {
    const users = await userModel.getAllUsers()
    return res.json(users)
  },
  getUserById: async (req: Request, res: Response) => {
    const { id } = req.params
    const user = await userModel.getUserById(parseInt(id, 10))

    if (user !== '') return res.json(user)
    return res.status(404).send('User not found')
  },
  createUser: async (req: Request, res: Response) => {
    const input = req.body
    const newUser = await userModel.createUser(input)
    return res.status(201).json(newUser)
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
