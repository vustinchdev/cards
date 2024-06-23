import { z } from 'zod'

export const nameSchema = z.object({ name: z.string().min(3).max(10) })
