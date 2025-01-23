import { prisma } from '@/lib/prisma';
import { NextResponse } from 'next/server';

export async function POST(request) {
  try {
    // Parse the incoming JSON request body
    const products  = await request.json();

    if (!products || !Array.isArray(products)) {
      return NextResponse.json(
        { error: 'Invalid or missing products array in the request body' },
        { status: 400 }
      );
    }

    // Use a transaction to ensure atomicity
    await prisma.$transaction(async (tx) => {
      for (const product of products) {
        const {
          categoryId,
          marketId,
          name,
          description,
          unit,
          price,
          media,
        } = product;

        // Validate required fields for the product
        if (!categoryId || !marketId || !name || !unit || !price) {
          throw new Error(
            `Invalid product data. Fields 'categoryId', 'marketId', 'name', 'unit', and 'price' are required.`
          );
        }

        // Create the product
        const newProduct = await tx.product.create({
          data: {
            categoryId,
            marketId,
            name,
            description: description || null,
            unit,
            price,
          },
        });

        // Add associated media records, if provided
        if (media && Array.isArray(media)) {
          const mediaData = media.map((mediaItem) => ({
            productId: newProduct.id,
            mediaType: mediaItem.mediaType,
            filePath: mediaItem.filePath,
          }));

          await tx.productMedia.createMany({
            data: mediaData,
          });
        }
      }
    });

    return NextResponse.json(
      { message: 'Products added successfully' },
      { status: 201 }
    );
  } catch (error) {
    console.error('Error adding products:', error);
    return NextResponse.json(
      { error: 'An error occurred while adding products', details: error.message },
      { status: 500 }
    );
  }
}
