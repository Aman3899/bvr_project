"use client";
import React from "react";
import { FaBackward, FaEdit, FaPlusCircle } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";

const ProductCard = ({ image, name, price }) => (
    <motion.div
        className="flex items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
    >
        <Image
            width={250}
            height={250}
            src={image}
            alt={name}
            className="w-24 h-20 object-cover rounded-md transition-all duration-300 ease-in-out"
        />
        <div className="ml-4 flex-1">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                {name}
            </h3>
            <p className="text-gray-500">{price}</p>
        </div>
        <button className="ml-auto p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center">
            <FaEdit className="mr-2" />
            Edit
        </button>
    </motion.div>
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
        <>
        <Navbar heading="Manage Products" />
        <motion.div
            className="w-full px-20 max-sm:px-4 min-h-screen bg-gray-100 p-6 mt-20"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
        >

            {/* Product Section */}
            <div>
                <h1 className="text-xl font-semibold mb-4 text-gray-800">Your Products</h1>
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

            {/* Add Product Button */}
            <motion.button
                className="w-full mt-6 py-3 text-white bg-blue-500 rounded-md hover:bg-blue-600 flex items-center justify-center gap-2 transition duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <FaPlusCircle />
                Add Product
            </motion.button>
        </motion.div>
        </>
    );
};

export default ManageProducts;