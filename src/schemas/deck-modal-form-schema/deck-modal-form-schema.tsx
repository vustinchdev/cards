import { boolean, z } from 'zod'

export const deckModalFormSchema = z.object({
  cover: z.instanceof(File).nullable().optional(),
  isPrivate: boolean(),
  name: z.string().min(3).max(30),
})
