import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET(request, { params }) {
    try {
        const userId = parseInt(params.userId);

        if (isNaN(userId)) {
            return NextResponse.json(
                { error: 'Invalid User ID' },
                { status: 400 }
            );
        }

        // Fetch all markets associated with the given userId
        const markets = await prisma.market.findMany({
            where: {
                userId: userId
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

        if (markets.length === 0) {
            return NextResponse.json(
                { error: 'No markets found for this user' },
                { status: 404 }
            );
        }

        return NextResponse.json(markets);
    } catch (error) {
        console.error('Error fetching markets:', error);
        return NextResponse.json(
            { error: 'Failed to fetch markets', details: error.message },
            { status: 500 }
        );
    }
}
