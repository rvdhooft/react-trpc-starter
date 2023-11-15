import { inferProcedureInput } from '@trpc/server'
import { expect, test } from 'vitest'
import { createContextInner } from '../context'
import appRouter, { AppRouter } from './'

test('1 === 1', () => {
  expect(1).toBe(1)
})

test('add and get post', async () => {
  const ctx = await createContextInner()
  const caller = appRouter.createCaller(ctx)

  const input: inferProcedureInput<AppRouter['post']['create']> = {
    id: 2,
    authorId: 1,
    content: 'hello test',
    title: 'hello test',
  }

  const post = await caller.post.create(input)
  const byId = await caller.post.byId({ id: post.id })

  expect(byId).toMatchObject({
    id: 2,
    content: 'hello test',
    title: 'hello test',
  })

  await caller.post.delete({ id: post.id })

  await expect(caller.post.byId({ id: post.id })).rejects.toThrowError(
    "No post with id '2'"
  )
})
