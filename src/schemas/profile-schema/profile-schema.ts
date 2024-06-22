import { z } from 'zod'

export const nameSchema = z.string().min(3).max(10)
