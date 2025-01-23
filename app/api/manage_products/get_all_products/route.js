import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request) {
    try {
        // Fetch all products from the database
        const products = await prisma.product.findMany({
            orderBy: {
                createdAt: 'desc'
            }
        });

        // If no products are found, return a 404 response
        if (!products || products.length === 0) {
            return NextResponse.json(
                { message: 'No products found' },
                { status: 404 }
            );
        }

        // Return successful response with products
        return NextResponse.json(products, { status: 200 });
        
    } catch (error) {
        // Log the error for debugging (you might want to use a proper logging solution)
        console.error('Error fetching products:', error);
        
        // Return error response
        return NextResponse.json(
            { error: 'Failed to fetch products' },
            { status: 500 }
        );
    }
}