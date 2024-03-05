/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { z } from 'zod'
import { Optional } from 'sequelize'
import { Table, Model, Column, DataType } from 'sequelize-typescript'
/*
export interface UserAttributes {
  id: number
  name: string
  email: string
  password: string
} */

const UserSchema = z.object({
  id: z.number().optional(),
  name: z.string(),
  email: z.string().email(),
  password: z.string()
})

export const validateUser = (object: unknown) => {
  return UserSchema.safeParse(object)
}
export const validateUserPartial = (object: unknown) => {
  return UserSchema.partial().safeParse(object)
}

export type UserAttributes = z.infer<typeof UserSchema>

interface UserCreationAttributes extends Optional<UserAttributes, 'id'> {}

@Table({
  tableName: 'users'
})
class User extends Model<UserAttributes, UserCreationAttributes> {
  @Column({
    primaryKey: true,
    autoIncrement: true
  })
    id!: number

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    name!: string

  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true
  })
    email!: string

  @Column({
    type: DataType.STRING,
    allowNull: false
  })
    password!: string
}

export default User
