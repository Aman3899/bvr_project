import { prisma } from '../lib/prisma.js';

const users = [
  {
    email: 'user1@example.com',
    username: 'user1',
    password: 'password1',
    isVerified: true,
    isAdmin: false,
  },
  {
    email: 'user2@example.com',
    username: 'user2',
    password: 'password2',
    isVerified: false,
    isAdmin: false,
  },
  {
    email: 'user3@example.com',
    username: 'user3',
    password: 'password3',
    isVerified: true,
    isAdmin: true,
  },
  {
    email: 'user4@example.com',
    username: 'user4',
    password: 'password4',
    isVerified: false,
    isAdmin: false,
  },
  {
    email: 'user5@example.com',
    username: 'user5',
    password: 'password5',
    isVerified: true,
    isAdmin: false,
  },
];

async function addUsers() {
  for (const user of users) {
    await prisma.user.create({
      data: user,
    });
  }

  console.log('5 users added');
}

async function deleteAllUsers() {
  await prisma.user.deleteMany({});
  console.log('All users deleted');
}

// addUsers()
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });


deleteAllUsers()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });