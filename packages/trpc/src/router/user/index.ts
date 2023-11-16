import { Prisma } from '@react-trpc-starter/database'
import { z } from 'zod'
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '../../trpc'
import { CreateInputSchema } from './_input-schemas'

/**
 * Default selector
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultSelect = Prisma.validator<Prisma.UserSelect>()({
  id: true,
  name: true,
  email: true,
  posts: {
    select: {
      title: true,
    },
  },
})

const userRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany({ select: defaultSelect })
  }),

  byId: publicProcedure.input(z.number()).query(async (opts) => {
    const { input, ctx } = opts
    return await ctx.prisma.user.findUnique({
      where: { id: input },
      select: defaultSelect,
    })
  }),

  create: protectedProcedure.input(CreateInputSchema).mutation(async (opts) => {
    const { input, ctx } = opts
    return await ctx.prisma.user.create({
      data: input,
      select: defaultSelect,
    })
  }),
})

export default userRouter
