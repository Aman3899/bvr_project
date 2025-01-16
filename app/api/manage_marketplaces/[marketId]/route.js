import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
  try {
    const marketId = parseInt(params.marketId);

    if (isNaN(marketId)) {
      return NextResponse.json(
        { error: 'Invalid market ID' },
        { status: 400 }
      );
    }

    const market = await prisma.market.findUnique({
      where: {
        id: marketId
      },
      include: {
        area: {
          include: {
            city: {
              include: {
                district: true
              }
            }
          }
        },
        marketFeatures: true,
        amenities: true,
        regulatoryCompliance: true,
        sanitationHygiene: true,
        marketMedia: true,
        marketAtms: true,
        marketAirports: true,
        // products: {
        //   include: {
        //     item: {
        //       include: {
        //         category: true
        //       }
        //     }
        //   }
        // }
      }
    });

    if (!market) {
      return NextResponse.json(
        { error: 'Market not found' },
        { status: 404 }
      );
    }

    return NextResponse.json(market);
  } catch (error) {
    console.error('Error fetching market:', error);
    return NextResponse.json(
      { error: 'Failed to fetch market', details: error.message },
      { status: 500 }
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const marketId = parseInt(params.marketId);

    if (isNaN(marketId)) {
      return NextResponse.json(
        { error: 'Invalid market ID' },
        { status: 400 }
      );
    }

    // Check if market exists
    const existingMarket = await prisma.market.findUnique({
      where: { id: marketId }
    });

    if (!existingMarket) {
      return NextResponse.json(
        { error: 'Market not found' },
        { status: 404 }
      );
    }

    // Delete market and all related records in a transaction
    await prisma.$transaction(async (tx) => {
      // Delete all related records first
      await tx.marketMedia.deleteMany({
        where: { marketId }
      });

      await tx.marketAtm.deleteMany({
        where: { marketId }
      });

      await tx.marketAirport.deleteMany({
        where: { marketId }
      });

      await tx.product.deleteMany({
        where: { marketId }
      });

      // Delete one-to-one relations
      await tx.marketFeatures.delete({
        where: { marketId }
      }).catch(() => {}); // Ignore if doesn't exist

      await tx.amenities.delete({
        where: { marketId }
      }).catch(() => {}); // Ignore if doesn't exist

      await tx.regulatoryCompliance.delete({
        where: { marketId }
      }).catch(() => {}); // Ignore if doesn't exist

      await tx.sanitationHygiene.delete({
        where: { marketId }
      }).catch(() => {}); // Ignore if doesn't exist

      // Finally delete the market itself
      await tx.market.delete({
        where: { id: marketId }
      });
    });

    return NextResponse.json(
      { message: 'Market and all associated records deleted successfully' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error deleting market:', error);
    return NextResponse.json(
      { error: 'Failed to delete market', details: error.message },
      { status: 500 }
    );
  }
}