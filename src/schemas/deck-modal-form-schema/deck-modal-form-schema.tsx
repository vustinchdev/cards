import { z } from 'zod'

export const deckModalFormSchema = z.object({
  cover: z.instanceof(File).nullable().optional(),
  isPrivate: z.boolean(),
  name: z.string().min(3).max(30),
})
