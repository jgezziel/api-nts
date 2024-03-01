export const userModel = {
  getAllUsers: async () => {
    return 'Get all users'
  },
  getUserById: async (id: number) => {
    return `Get a user by id: ${id}`
  },
  createUser: async (_input: {}) => {
    return 'Create a new user'
  },
  updateUser: async (id: number, _input: {}) => {
    return `Update a user: ${id}`
  },
  deleteUser: async (id: number) => {
    return `Delete a user: ${id}`
  }
}
