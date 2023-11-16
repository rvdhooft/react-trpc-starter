/* eslint-disable import/prefer-default-export */
import { z } from 'zod'

const CreateInputSchema = z.object({
  name: z.string().min(1),
  email: z.string().min(1),
})

export { CreateInputSchema }
