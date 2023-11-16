import { Prisma } from '@react-trpc-starter/database'
import { TRPCError } from '@trpc/server'
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from '../../trpc'
import {
  ByIdInputSchema,
  CreateInputSchema,
  DeleteInputSchema,
} from './_input-schemas'

/**
 * Default selector
 * It's important to always explicitly say which fields you want to return in order to not leak extra information
 * @see https://github.com/prisma/prisma/issues/9353
 */
const defaultSelect = Prisma.validator<Prisma.PostSelect>()({
  id: true,
  title: true,
  content: true,
})

const postRouter = createTRPCRouter({
  list: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.post.findMany({ select: defaultSelect })
  }),

  byId: publicProcedure.input(ByIdInputSchema).query(async ({ input, ctx }) => {
    const { id } = input
    const post = await ctx.prisma.post.findUnique({
      where: { id },
      select: defaultSelect,
    })
    if (!post)
      throw new TRPCError({
        code: 'NOT_FOUND',
        message: `No post with id '${id}'`,
      })
    return post
  }),

  create: protectedProcedure
    .input(CreateInputSchema)
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.post.create({
        data: input,
        select: defaultSelect,
      })
    }),

  delete: protectedProcedure
    .input(DeleteInputSchema)
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.post.delete({
        where: { id: input.id },
        select: defaultSelect,
      })
    }),
})

export default postRouter
