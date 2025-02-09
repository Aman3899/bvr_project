import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const districts = await prisma.district.findMany({
        select: {
          id: true,
          name: true,
          cities: {
            select: {
              id: true,
              name: true,
              areas: {
                select: {
                  id: true,
                  name: true,
                },
              },
            },
          },
        },
      });

    return NextResponse.json(districts, { status: 200 });
  } catch (error) {
    console.error('Error fetching districts:', error);

    return NextResponse.json(
      { message: 'Failed to fetch districts', error: error.message },
      { status: 500 }
    );
  }
}