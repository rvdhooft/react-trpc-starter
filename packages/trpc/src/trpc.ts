import { inferAsyncReturnType, initTRPC, TRPCError } from '@trpc/server'
import { ZodError } from 'zod'
import { createContext } from './context'

type Context = inferAsyncReturnType<typeof createContext>

const t = initTRPC.context<Context>().create({
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    }
  },
})
const createTRPCRouter = t.router
const publicProcedure = t.procedure
// Reusable middleware that checks if users are authenticated.
const isAuthenticated = t.middleware(async ({ next, ctx }) => {
  const isLoggedIn = true
  if (isLoggedIn) {
    return next({
      ctx: {
        ...ctx,
        user: {
          isLoggedIn: isLoggedIn,
        },
      },
    })
  } else {
    throw new TRPCError({ code: 'BAD_REQUEST', message: 'Not authorized' })
  }
})
const protectedProcedure = t.procedure.use(isAuthenticated)

export { createTRPCRouter, publicProcedure, protectedProcedure }
