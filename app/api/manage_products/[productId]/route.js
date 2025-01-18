import { prisma } from "@/lib/prisma";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
    try {
        const productId = parseInt(params.productId);

        // Check if productId is a valid number
        if (isNaN(productId)) {
            return NextResponse.json(
                { error: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        // Fetch the product from database
        const product = await prisma.product.findUnique({
            where: {
                id: productId
            },
            include: { productMedia: true }
        });

        // Check if product exists
        if (!product) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        // Return the product
        return NextResponse.json(product, { status: 200 });

    } catch (error) {
        console.error('Error fetching product:', error);
        return NextResponse.json(
            { error: 'Failed to fetch product' },
            { status: 500 }
        );
    }
}

export async function DELETE(request, { params }) {
    try {
        const productId = parseInt(params.productId);

        // Validate product ID
        if (isNaN(productId)) {
            return NextResponse.json(
                { error: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        // Check if product exists before attempting deletion
        const existingProduct = await prisma.product.findUnique({
            where: {
                id: productId
            }
        });

        if (!existingProduct) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        // Delete the product
        await prisma.product.delete({
            where: {
                id: productId
            }
        });

        // Return success response
        return NextResponse.json(
            { message: 'Product deleted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error deleting product:', error);
        return NextResponse.json(
            { error: 'Failed to delete product' },
            { status: 500 }
        );
    }
}

export async function PUT(request, { params }) {
    try {
        const productId = parseInt(params.productId);

        // Validate product ID
        if (isNaN(productId)) {
            return NextResponse.json(
                { error: 'Invalid product ID format' },
                { status: 400 }
            );
        }

        // Parse the request body
        const body = await request.json();

        // Validate required fields
        if (!body || Object.keys(body).length === 0) {
            return NextResponse.json(
                { error: 'No data provided for update' },
                { status: 400 }
            );
        }

        // Check if product exists
        const existingProduct = await prisma.product.findUnique({
            where: {
                id: productId
            }
        });

        if (!existingProduct) {
            return NextResponse.json(
                { error: 'Product not found' },
                { status: 404 }
            );
        }

        const { media, ...product } = body;
        // Update the product
        const updatedProduct = await prisma.product.update({
            where: {
                id: productId
            },
            data: {
                ...product,
                productMedia: {
                    deleteMany: {}, // This will remove all existing media
                    create: media?.map(media => ({
                        mediaType: media.mediaType,
                        filePath: media.filePath
                    })) || []
                }
            },
            include: { productMedia: true },
        });

        // Return the updated product
        return NextResponse.json(updatedProduct, { status: 200 });
        
    } catch (error) {
        console.error('Error updating product:', error);
        return NextResponse.json(
            { error: 'Failed to update product' },
            { status: 500 }
        );
    }
}