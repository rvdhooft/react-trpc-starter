import { createTRPCRouter, publicProcedure } from '../trpc'
import postRouter from './post'
import userRouter from './user'

type AppRouter = typeof appRouter

const appRouter = createTRPCRouter({
  healthCheck: publicProcedure.query(() => 'healthy'),
  user: userRouter,
  post: postRouter,
})

export default appRouter
export type { AppRouter }
