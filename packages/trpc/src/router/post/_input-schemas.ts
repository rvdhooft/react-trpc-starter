import { z } from 'zod'

const ByIdInputSchema = z.object({
  id: z.number(),
})

const CreateInputSchema = z.object({
  id: z.number(),
  title: z.string().min(1),
  content: z.string().min(1),
  authorId: z.number(),
})

const DeleteInputSchema = z.object({
  id: z.number(),
})

export { ByIdInputSchema, CreateInputSchema, DeleteInputSchema }
