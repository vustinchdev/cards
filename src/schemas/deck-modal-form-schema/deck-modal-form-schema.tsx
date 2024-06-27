import { boolean, z } from 'zod'

export const deckModalFormSchema = z.object({
  isPrivate: boolean(),
  name: z.string().min(3).max(10),
})
