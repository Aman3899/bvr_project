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


// deleteAllUsers()
//   .catch((error) => {
//     console.error(error);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });




async function seedMalawiData() {
  try {
    console.log('Starting to seed Malawi data...');

    // Data structure for Malawi districts and constituencies
    const malawiData = [
      {
        district: "Balaka",
        constituencies: ["Balaka Central", "Balaka North", "Balaka South", "Balaka West"],
        areas: ["Old Town", "Market Area", "New Layout", "Industrial Zone", "Residential Zone"]
      },
      {
        district: "Blantyre",
        constituencies: ["Blantyre City Central", "Blantyre City East", "Blantyre City South", "Blantyre City West", "Blantyre Rural East", "Blantyre Rural West"],
        areas: ["Limbe", "Namiwawa", "Nyambadwe", "Nkolokoti", "Chilomoni", "Mpingwe", "Zingwangwa", "Ndirande", "Chirimba", "Machinjiri"]
      },
      {
        district: "Chikwawa",
        constituencies: ["Chikwawa Central", "Chikwawa East", "Chikwawa West", "Chikwawa North"],
        areas: ["Trading Center", "Riverside", "Market Square", "New Settlement", "Old Town"]
      },
      // ... remaining districts with similar structure
    ];

    // Function to generate areas for a city
    const generateAreas = (cityName) => {
      const commonAreas = [
        "Main Market",
        "Bus Terminal",
        "Central Business District",
        "Old Town",
        "New Town",
        "Industrial Area",
        "Residential Zone",
        "Commercial Center",
        "Trading Center",
        "Township"
      ];

      // Generate 3-5 areas for each city
      const numAreas = Math.floor(Math.random() * 3) + 3;
      return commonAreas
        .sort(() => Math.random() - 0.5)
        .slice(0, numAreas)
        .map(area => `${cityName} ${area}`);
    };

    // Iterate through each district and create records
    for (const data of malawiData) {
      // Create district
      const district = await prisma.district.create({
        data: {
          name: data.district,
        },
      });

      console.log(`Created district: ${district.name}`);

      // Create cities (constituencies) for the district
      for (const constituencyName of data.constituencies) {
        const city = await prisma.city.create({
          data: {
            name: constituencyName,
            districtId: district.id,
          },
        });

        console.log(`Created city: ${city.name}`);

        // Generate and create areas for the city
        const areas = generateAreas(constituencyName);
        for (const areaName of areas) {
          await prisma.area.create({
            data: {
              name: areaName,
              cityId: city.id,
            },
          });
          console.log(`Created area: ${areaName}`);
        }
      }
    }

    console.log('Seeding completed successfully!');
  } catch (error) {
    console.error('Error seeding data:', error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

// Complete Malawi data structure
const malawiData = [
  {
    district: "Balaka",
    constituencies: ["Balaka Central", "Balaka North", "Balaka South", "Balaka West"]
  },
  {
    district: "Blantyre",
    constituencies: ["Blantyre City Central", "Blantyre City East", "Blantyre City South", "Blantyre City West", "Blantyre Rural East", "Blantyre Rural West"]
  },
  {
    district: "Chikwawa",
    constituencies: ["Chikwawa Central", "Chikwawa East", "Chikwawa West", "Chikwawa North"]
  },
  {
    district: "Chiradzulu",
    constituencies: ["Chiradzulu Central", "Chiradzulu East", "Chiradzulu West"]
  },
  {
    district: "Chitipa",
    constituencies: ["Chitipa North", "Chitipa Central", "Chitipa East", "Chitipa South", "Chitipa Wenya"]
  },
  {
    district: "Dedza",
    constituencies: ["Dedza Central", "Dedza East", "Dedza West", "Dedza North"]
  },
  {
    district: "Dowa",
    constituencies: ["Dowa Central", "Dowa East", "Dowa West", "Dowa North"]
  },
  {
    district: "Karonga",
    constituencies: ["Karonga Central", "Karonga North", "Karonga South", "Karonga West"]
  },
  {
    district: "Kasungu",
    constituencies: ["Kasungu Central", "Kasungu East", "Kasungu West", "Kasungu North"]
  },
  {
    district: "Likoma",
    constituencies: ["Likoma Island"]
  },
  {
    district: "Lilongwe",
    constituencies: ["Lilongwe City Central", "Lilongwe City East", "Lilongwe City South", "Lilongwe City West", "Lilongwe Rural East", "Lilongwe Rural West"]
  },
  {
    district: "Machinga",
    constituencies: ["Machinga Central", "Machinga East", "Machinga West", "Machinga North"]
  },
  {
    district: "Mangochi",
    constituencies: ["Mangochi Central", "Mangochi East", "Mangochi West", "Mangochi North"]
  },
  {
    district: "Mchinji",
    constituencies: ["Mchinji Central", "Mchinji East", "Mchinji West", "Mchinji North"]
  },
  {
    district: "Mulanje",
    constituencies: ["Mulanje Central", "Mulanje East", "Mulanje West", "Mulanje North"]
  },
  {
    district: "Mwanza",
    constituencies: ["Mwanza Central", "Mwanza East", "Mwanza West"]
  },
  {
    district: "Mzimba",
    constituencies: ["Mzimba Central", "Mzimba East", "Mzimba West", "Mzimba North"]
  },
  {
    district: "Nkhata Bay",
    constituencies: ["Nkhata Bay Central", "Nkhata Bay North", "Nkhata Bay South"]
  },
  {
    district: "Nkhotakota",
    constituencies: ["Nkhotakota Central", "Nkhotakota East", "Nkhotakota West"]
  },
  {
    district: "Neno",
    constituencies: ["Neno East", "Neno West"]
  },
  {
    district: "Nsanje",
    constituencies: ["Nsanje Central", "Nsanje East", "Nsanje West"]
  },
  {
    district: "Ntcheu",
    constituencies: ["Ntcheu Central", "Ntcheu East", "Ntcheu West"]
  },
  {
    district: "Ntchisi",
    constituencies: ["Ntchisi Central", "Ntchisi East", "Ntchisi West"]
  },
  {
    district: "Phalombe",
    constituencies: ["Phalombe Central", "Phalombe East", "Phalombe West"]
  },
  {
    district: "Rumphi",
    constituencies: ["Rumphi Central", "Rumphi East", "Rumphi West"]
  },
  {
    district: "Salima",
    constituencies: ["Salima Central", "Salima East", "Salima West"]
  },
  {
    district: "Thyolo",
    constituencies: ["Thyolo Central", "Thyolo East", "Thyolo West"]
  },
  {
    district: "Zomba",
    constituencies: ["Zomba Central", "Zomba East", "Zomba West"]
  }
];

// Execute the seed function
// seedMalawiData()
//   .catch((error) => {
//     console.error('Error executing seed:', error);
//     process.exit(1);
//   });