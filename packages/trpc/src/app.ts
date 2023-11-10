import * as trpcExpress from '@trpc/server/adapters/express'
import cors from 'cors'
import express from 'express'
import { createContext } from './context'
import appRouter from './router'

const app = express()

app.use(express.json())
app.use(
  cors({
    origin: ['http://localhost:5173'],
  })
)

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
)

export default app
