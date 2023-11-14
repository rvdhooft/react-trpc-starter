import { PrismaClient } from '@react-trpc-starter/database'
import * as trpc from '@trpc/server'

export async function createContextInner() {
  const prisma = new PrismaClient()

  return { prisma }
}

type Context = trpc.inferAsyncReturnType<typeof createContextInner>

/**
 * Creates context for an incoming request
 * @link https://trpc.io/docs/context
 */
export async function createContext(): Promise<Context> {
  // for API-response caching see https://trpc.io/docs/caching
  return await createContextInner()
}
