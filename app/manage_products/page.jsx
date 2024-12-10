"use client";
import React from "react";
import { FaBackward } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";


const ProductCard = ({ image, name, price }) => (

    <div className="flex items-center p-4 bg-white shadow-md rounded-lg">
        <Image width={250} height={250} src={image} alt={name} className="w-24 h-20 object-cover rounded-md" />
        <div className="ml-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-500">{price}</p>
        </div>
        <button className="ml-auto px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600">
            Edit
        </button>
    </div>
);

const ManageProducts = () => {
    const products = [
        {
            id: 1,
            image: "/marketplace-image.jpeg",
            name: "Apples",
            price: "$1.99/lb",
        },
        {
            id: 2,
            image: "/marketplace-hero.jpeg",
            name: "Bananas",
            price: "$0.99/lb",
        },
        {
            id: 3,
            image: "/marketplace-image.jpeg",
            name: "Carrots",
            price: "$2.49/lb",
        },
    ];

    let router = useRouter();

    return (
        <div className="w-full px-64 max-sm:px-4 min-h-screen bg-gray-100 p-4">
            <header className="flex items-center mb-6">
                <div className="flex border-b border-gray-400 w-full">
                    <button onClick={() => { router.back() }} className="pb-3 px-1"><FaBackward/></button>
                    <h2 className="text-xl w-full text-center font-semibold mb-4 max-sm:text-md">Customer Request Details</h2>
                </div>
            </header>
            <div>
                <h1 className="text-lg font-semibold mb-4">Your Products</h1>
                <div className="space-y-4">
                    {products.map((product) => (
                        <ProductCard
                            key={product.id}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
            <button className="w-full mt-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600">Add Product</button>
        </div>
    );
};

export default ManageProducts;