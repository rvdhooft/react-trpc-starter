import cors from '@fastify/cors'
import { fastifyTRPCPlugin } from '@trpc/server/adapters/fastify'
import fastify from 'fastify'
import { renderTrpcPanel } from 'trpc-panel'
import { createContext } from './context'
import appRouter from './router'

const PORT = process.env.PORT ? +process.env.PORT : 5001

const server = fastify({
  maxParamLength: 5000,
})

server.register(cors, {
  origin: process.env.APP_URL,
})

server.register(fastifyTRPCPlugin, {
  prefix: '/trpc',
  trpcOptions: { router: appRouter, createContext },
})

server.get('/panel', async function handler(_, res) {
  return res
    .header('Content-Type', 'html')
    .send(renderTrpcPanel(appRouter, { url: `http://localhost:${PORT}/trpc` }))
})

const start = async () => {
  try {
    await server.listen({ port: PORT })
    console.info(`Listening on port ${PORT}.`)
  } catch (err) {
    server.log.error(err)
    process.exit(1)
  }
}
start()
