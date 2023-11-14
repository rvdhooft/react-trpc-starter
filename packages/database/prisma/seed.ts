/**
 * Adds seed data to your db
 *
 * @link https://www.prisma.io/docs/guides/database/seed-database
 */
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  const firstUserId = 1
  await prisma.user.upsert({
    where: {
      id: firstUserId,
    },
    create: {
      id: firstUserId,
      name: 'Test User',
      email: 'test@test.com',
    },
    update: {},
  })

  const firstPostId = 1
  await prisma.post.upsert({
    where: {
      id: firstPostId,
    },
    create: {
      id: firstPostId,
      title: 'First Post',
      content: 'Good content',
      authorId: firstUserId,
      published: true,
    },
    update: {},
  })
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
