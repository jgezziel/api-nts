import { z } from 'zod'
export interface User {
  id?: number
  name: string
  email: string
}

const userSchema = z.object({
  id: z.number().optional(),
  name: z.string({
    required_error: 'El nombre es obligatorio',
    invalid_type_error: 'Solo se permiten letras'
  }).min(3, 'El nombre debe tener al menos 3 caracteres'),
  email: z.string().email('El email no es válido')
})
export default userSchema
