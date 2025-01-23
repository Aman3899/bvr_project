import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function GET() {
    try {
        const markets = await prisma.market.findMany({
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
                //     include: {
                //         item: {
                //             include: {
                //                 category: true
                //             }
                //         }
                //     }
                // }
            },
            orderBy: {
                createdAt: 'desc'
            }
        });

        if (!markets || markets.length === 0) {
            return NextResponse.json(
                { message: 'No markets found' },
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