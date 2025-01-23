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

export async function PUT(request, { params }) {
  try {
    const marketId = parseInt(params.marketId);
    const body = await request.json();

    console.log('BODY', body.marketType);

    // Validate if market exists
    const existingMarket = await prisma.market.findUnique({
      where: { id: marketId },
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
      }
    });

    if (!existingMarket) {
      return NextResponse.json(
        { error: 'Market not found' },
        { status: 404 }
      );
    }

    // Validate required fields
    if (!body.name || !body.areaId) {
      return NextResponse.json(
        { error: 'Name and area ID are required fields' },
        { status: 400 }
      );
    }

    // Perform update within a transaction
    const updatedMarket = await prisma.$transaction(async (tx) => {
      // Update main market record
      const market = await tx.market.update({
        where: { id: marketId },
        data: {
          name: body.name,
          areaId: parseInt(body.areaId),
          description: body.description,
          marketType: body.marketType,
          modeOfTransaction: body.modeOfTransaction,
          language: body.language,
          accessibility: body.accessibility,
          specialDayName: body.specialDayName,
          operatingHoursStart: body.operatingHoursStart,
          operatingHoursEnd: body.operatingHoursEnd,
          isOpen: body.isOpen,
          videoLink: body.videoLink,
        },
      });

      // Update or create market features
      if (body.marketFeatures) {
        if (existingMarket.marketFeatures) {
          await tx.marketFeatures.update({
            where: { marketId },
            data: {
              electricity: body.marketFeatures.electricity,
              waterSupply: body.marketFeatures.waterSupply,
              accessRoads: body.marketFeatures.accessRoads,
              sewageSystems: body.marketFeatures.sewageSystems,
              wasteManagementServices: body.marketFeatures.wasteManagementServices,
            },
          });
        } else {
          await tx.marketFeatures.create({
            data: {
              marketId,
              electricity: body.marketFeatures.electricity,
              waterSupply: body.marketFeatures.waterSupply,
              accessRoads: body.marketFeatures.accessRoads,
              sewageSystems: body.marketFeatures.sewageSystems,
              wasteManagementServices: body.marketFeatures.wasteManagementServices,
            },
          });
        }
      }

      // Update or create amenities
      if (body.amenities) {
        if (existingMarket.amenities) {
          await tx.amenities.update({
            where: { marketId },
            data: {
              seatingAreas: body.amenities.seatingAreas,
              atms: body.amenities.atms,
              mobileMoneyServices: body.amenities.mobileMoneyServices,
              internetConnectivity: body.amenities.internetConnectivity,
              informationDesk: body.amenities.informationDesk,
            },
          });
        } else {
          await tx.amenities.create({
            data: {
              marketId,
              seatingAreas: body.amenities.seatingAreas,
              atms: body.amenities.atms,
              mobileMoneyServices: body.amenities.mobileMoneyServices,
              internetConnectivity: body.amenities.internetConnectivity,
              informationDesk: body.amenities.informationDesk,
            },
          });
        }
      }

      // Update or create regulatory compliance
      if (body.regulatoryCompliance) {
        if (existingMarket.regulatoryCompliance) {
          await tx.regulatoryCompliance.update({
            where: { marketId },
            data: {
              businessLicensing: body.regulatoryCompliance.businessLicensing,
              environmentalRegulation: body.regulatoryCompliance.environmentalRegulation,
              taxCompliance: body.regulatoryCompliance.taxCompliance,
              deliveryServices: body.regulatoryCompliance.deliveryServices,
              securityArrangements: body.regulatoryCompliance.securityArrangements,
            },
          });
        } else {
          await tx.regulatoryCompliance.create({
            data: {
              marketId,
              businessLicensing: body.regulatoryCompliance.businessLicensing,
              environmentalRegulation: body.regulatoryCompliance.environmentalRegulation,
              taxCompliance: body.regulatoryCompliance.taxCompliance,
              deliveryServices: body.regulatoryCompliance.deliveryServices,
              securityArrangements: body.regulatoryCompliance.securityArrangements,
            },
          });
        }
      }

      // Update or create sanitation hygiene
      if (body.sanitationHygiene) {
        if (existingMarket.sanitationHygiene) {
          await tx.sanitationHygiene.update({
            where: { marketId },
            data: {
              ptFlush: body.sanitationHygiene.ptFlush,
              ptPitLatrines: body.sanitationHygiene.ptPitLatrines,
              showers: body.sanitationHygiene.showers,
              wasteDisposalBins: body.sanitationHygiene.wasteDisposalBins,
              pestControlServices: body.sanitationHygiene.pestControlServices,
            },
          });
        } else {
          await tx.sanitationHygiene.create({
            data: {
              marketId,
              ptFlush: body.sanitationHygiene.ptFlush,
              ptPitLatrines: body.sanitationHygiene.ptPitLatrines,
              showers: body.sanitationHygiene.showers,
              wasteDisposalBins: body.sanitationHygiene.wasteDisposalBins,
              pestControlServices: body.sanitationHygiene.pestControlServices,
            },
          });
        }
      }

      // Update media records
      if (body.media && Array.isArray(body.media)) {
        // Delete existing media records
        await tx.marketMedia.deleteMany({
          where: { marketId }
        });
        
        // Create new media records
        if (body.media.length > 0) {
          await tx.marketMedia.createMany({
            data: body.media.map(media => ({
              marketId,
              mediaType: media.mediaType,
              filePath: media.filePath
            }))
          });
        }
      }

      // Update ATMs
      if (body.atms && Array.isArray(body.atms)) {
        // Delete existing ATM records
        await tx.marketAtm.deleteMany({
          where: { marketId }
        });
        
        // Create new ATM records
        if (body.atms.length > 0) {
          await tx.marketAtm.createMany({
            data: body.atms.map(atm => ({
              marketId,
              bankName: atm.bankName
            }))
          });
        }
      }

      // Update airports
      if (body.airports && Array.isArray(body.airports)) {
        // Delete existing airport records
        await tx.marketAirport.deleteMany({
          where: { marketId }
        });
        
        // Create new airport records
        if (body.airports.length > 0) {
          await tx.marketAirport.createMany({
            data: body.airports.map(airport => ({
              marketId,
              airportName: airport.airportName
            }))
          });
        }
      }

      // Return updated market with all relations
      return await tx.market.findUnique({
        where: { id: marketId },
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
        },
      });
    });

    return NextResponse.json(updatedMarket);
  } catch (error) {
    console.error('Error updating market:', error);
    return NextResponse.json(
      { error: 'Failed to update market', details: error.message },
      { status: 500 }
    );
  }
}