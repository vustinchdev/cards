import { z } from 'zod'

const email = z.string().email()
const password = z.string().min(5)

export const signInSchema = z.object({
  email,
  password,
  rememberMe: z.boolean().optional(),
})

export const signUpSchema = z
  .object({
    confirmPassword: password,
    email,
    password,
  })
  .refine(data => data.password === data.confirmPassword, {
    message: 'Passwords do not match',
    path: ['confirmPassword'],
  })

export const emailSchema = z.object({
  email,
})

export const passwordSchema = z.object({
  password,
})
