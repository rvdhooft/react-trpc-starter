import { Prisma } from '@prisma/client'
import { TRPCError } from '@trpc/server'
import { z } from 'zod'
import { createTRPCRouter, protectedProcedure, publicProcedure } from '../trpc'

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

  byId: publicProcedure
    .input(
      z.object({
        id: z.number(),
      })
    )
    .query(async ({ input, ctx }) => {
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
    .input(
      z.object({
        id: z.number(),
        title: z.string().min(1),
        content: z.string().min(1),
        authorId: z.number(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      return await ctx.prisma.post.create({
        data: input,
        select: defaultSelect,
      })
    }),
})

export default postRouter
