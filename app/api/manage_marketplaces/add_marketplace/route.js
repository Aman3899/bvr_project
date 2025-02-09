import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    const body = await request.json();

    // // Basic validation for required fields
    // if (!body.name || !body.areaId) {
    //   return NextResponse.json(
    //     { error: 'Name and area ID are required fields' },
    //     { status: 400 }
    //   );
    // }

    // Validate media data if provided
    if (body.media && !Array.isArray(body.media)) {
      return NextResponse.json(
        { error: 'Media must be an array of objects' },
        { status: 400 }
      );
    }

    // Validate ATMs data if provided
    if (body.atms && !Array.isArray(body.atms)) {
      return NextResponse.json(
        { error: 'ATMs must be an array of objects' },
        { status: 400 }
      );
    }

    // Validate airports data if provided
    if (body.airports && !Array.isArray(body.airports)) {
      return NextResponse.json(
        { error: 'Airports must be an array of objects' },
        { status: 400 }
      );
    }

    // Create main market record with transaction to ensure data consistency
    const createdMarket = await prisma.$transaction(async (tx) => {
      // Create the main market record
      const market = await tx.market.create({
        data: {
          name: body.name,
          areaId: parseInt(body.areaId),
          description: body.description,
          marketType: body.marketType,
          modeOfTransaction: body.modeOfTransaction,
          language: body.language,
          accessibility: body.accessibility,
          specialDayName: body.specialDayName,
          operatingHoursStart: body.operatingHoursStart ? new Date(body.operatingHoursStart) : null,
          operatingHoursEnd: body.operatingHoursEnd ? new Date(body.operatingHoursEnd) : null,
          isOpen: body.isOpen ?? true,
          videoLink: body.videoLink,
        },
      });

      // Create market features if provided
      if (body.marketFeatures) {
        await tx.marketFeatures.create({
          data: {
            marketId: market.id,
            electricity: body.marketFeatures.electricity ?? false,
            waterSupply: body.marketFeatures.waterSupply ?? false,
            accessRoads: body.marketFeatures.accessRoads ?? false,
            sewageSystems: body.marketFeatures.sewageSystems ?? false,
            wasteManagementServices: body.marketFeatures.wasteManagementServices ?? false,
          },
        });
      }

      // Create amenities if provided
      if (body.amenities) {
        await tx.amenities.create({
          data: {
            marketId: market.id,
            seatingAreas: body.amenities.seatingAreas ?? false,
            atms: body.amenities.atms ?? false,
            mobileMoneyServices: body.amenities.mobileMoneyServices ?? false,
            internetConnectivity: body.amenities.internetConnectivity ?? false,
            informationDesk: body.amenities.informationDesk ?? false,
          },
        });
      }

      // Create regulatory compliance if provided
      if (body.regulatoryCompliance) {
        await tx.regulatoryCompliance.create({
          data: {
            marketId: market.id,
            businessLicensing: body.regulatoryCompliance.businessLicensing ?? false,
            environmentalRegulation: body.regulatoryCompliance.environmentalRegulation ?? false,
            taxCompliance: body.regulatoryCompliance.taxCompliance ?? false,
            deliveryServices: body.regulatoryCompliance.deliveryServices ?? false,
            securityArrangements: body.regulatoryCompliance.securityArrangements ?? false,
          },
        });
      }

      // Create sanitation hygiene if provided
      if (body.sanitationHygiene) {
        await tx.sanitationHygiene.create({
          data: {
            marketId: market.id,
            ptFlush: body.sanitationHygiene.ptFlush ?? false,
            ptPitLatrines: body.sanitationHygiene.ptPitLatrines ?? false,
            showers: body.sanitationHygiene.showers ?? false,
            wasteDisposalBins: body.sanitationHygiene.wasteDisposalBins ?? false,
            pestControlServices: body.sanitationHygiene.pestControlServices ?? false,
          },
        });
      }

      // Create market media if provided
      if (body.media && Array.isArray(body.media)) {
        const mediaData = body.media.map(media => ({
          marketId: market.id,
          mediaType: media.mediaType,
          filePath: media.filePath
        }));
        
        if (mediaData.length > 0) {
          await tx.marketMedia.createMany({
            data: mediaData
          });
        }
      }

      // Create market ATMs if provided
      if (body.atms && Array.isArray(body.atms)) {
        const atmsData = body.atms.map(atm => ({
          marketId: market.id,
          bankName: atm.bankName
        }));
        
        if (atmsData.length > 0) {
          await tx.marketAtm.createMany({
            data: atmsData
          });
        }
      }

      // Create market airports if provided
      if (body.airports && Array.isArray(body.airports)) {
        const airportsData = body.airports.map(airport => ({
          marketId: market.id,
          airportName: airport.airportName
        }));
        
        if (airportsData.length > 0) {
          await tx.marketAirport.createMany({
            data: airportsData
          });
        }
      }

      // Return the created market with all relations
      return await tx.market.findUnique({
        where: { id: market.id },
        include: {
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

    return NextResponse.json(createdMarket, { status: 201 });
  } catch (error) {
    console.error('Error creating market:', error);
    return NextResponse.json(
      { error: 'Failed to create market', details: error.message },
      { status: 500 }
    );
  }
}