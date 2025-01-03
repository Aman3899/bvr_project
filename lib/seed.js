import { prisma } from './prisma.js';

async function addUser() {
  const user = await prisma.user.create({
    data: {
      email: 'testuser@example.com',
      name: 'Test User',
    },
  });

  console.log('User added:', user);
}

addUser()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
