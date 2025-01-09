"use client";
import React, { useState } from "react";
import { FaBackward, FaEdit, FaPlusCircle, FaTrash, FaSearch, FaSort } from "react-icons/fa";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Link from "next/link";

const ProductCard = ({ image, name, price, onDelete }) => (
    <motion.div
        layout
        className="flex flex-col sm:flex-row items-center p-4 bg-white shadow-md rounded-lg hover:shadow-xl transition-all duration-300 ease-in-out gap-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        whileHover={{ scale: 1.02 }}
    >
        <div className="relative w-full sm:w-24 h-48 sm:h-24">
            <Image
                fill
                src={image}
                alt={name}
                className="object-cover rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
        </div>
        <div className="flex-1 text-center sm:text-left">
            <h3 className="text-lg font-semibold text-gray-800 hover:text-blue-600 transition duration-300">
                {name}
            </h3>
            <p className="text-gray-500 font-medium">{price}</p>
        </div>
        <div className="flex gap-2 w-full sm:w-auto justify-center sm:justify-end">
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-300 flex items-center gap-2"
                onClick={() => onDelete(name)}
            >
                <FaTrash />
                <span className="sm:hidden md:inline">Delete</span>
            </motion.button>
            <Link href="/manage_products/edit_product">
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-300 flex items-center gap-2"
                >
                    <FaEdit />
                    <span className="sm:hidden md:inline">Edit</span>
                </motion.button>
            </Link>
        </div>
    </motion.div>
);

const ManageProducts = () => {
    const [products, setProducts] = useState([
        {
            id: 1,
            image: "/marketplace-image.jpeg",
            name: "Fresh Organic Apples",
            price: "$1.99/lb",
        },
        {
            id: 2,
            image: "/marketplace-hero.jpeg",
            name: "Premium Bananas",
            price: "$0.99/lb",
        },
        {
            id: 3,
            image: "/marketplace-image.jpeg",
            name: "Organic Carrots",
            price: "$2.49/lb",
        },
    ]);

    const [searchQuery, setSearchQuery] = useState("");
    const [deleteModal, setDeleteModal] = useState({ open: false, productName: "" });
    const [deleteInput, setDeleteInput] = useState("");

    const filteredProducts = products.filter((product) =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (productName) => {
        setDeleteModal({ open: true, productName });
    };

    const confirmDelete = () => {
        if (deleteInput === deleteModal.productName) {
            setProducts((prev) => prev.filter((p) => p.name !== deleteModal.productName));
            setDeleteModal({ open: false, productName: "" });
            setDeleteInput("");
        } else {
            alert("Product name does not match!");
        }
    };

    return (
        <>
            <Navbar heading="Manage Products" />
            <motion.div
                className="w-full px-4 sm:px-6 lg:px-20 min-h-screen bg-gray-100 p-6 mt-20 pt-10"
                initial="hidden"
                animate="visible"
                variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
                {/* Search and Filter Section */}
                <motion.div
                    className="mb-6 flex flex-col sm:flex-row gap-4"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <div className="relative flex-1">
                        <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        <input
                            type="text"
                            placeholder="Search products..."
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-300"
                        />
                    </div>
                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300 transition-all duration-300"
                    >
                        <FaSort />
                        Sort
                    </motion.button>
                </motion.div>

                {/* Products Section */}
                <motion.div>
                    <div className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold text-gray-800">Your Products</h1>
                        <span className="text-gray-500">{filteredProducts.length} items</span>
                    </div>
                    <AnimatePresence>
                        <div className="space-y-4">
                            {filteredProducts.map((product) => (
                                <ProductCard
                                    key={product.id}
                                    image={product.image}
                                    name={product.name}
                                    price={product.price}
                                    onDelete={handleDelete}
                                />
                            ))}
                        </div>
                    </AnimatePresence>
                </motion.div>

                {/* Add Product Button */}
                <motion.button
                    className="fixed bottom-6 right-6 p-4 text-white bg-blue-500 rounded-full shadow-lg hover:bg-blue-600 transition duration-300 flex items-center justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                >
                    <FaPlusCircle size={24} />
                </motion.button>

                <div className="flex justify-center items-center mt-8">
                <Link href={"/manage_products/add_product"} className='flex items-center justify-center gap-x-3 rounded-xl
                            bg-gradient-to-r from-blue-500 to-purple-600 w-11/12 py-3 text-white font-bold shadow-md 
                            hover:shadow-lg'>
                    <FaPlusCircle />
                    Add Product
                </Link>
                </div>

            </motion.div>


            {/* Delete Confirmation Modal */}
            {deleteModal.open && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold text-gray-800 mb-4">Delete Product</h2>
                        <p className="text-gray-600 mb-4">
                            Please type the product name (<span className="font-bold">{deleteModal.productName}</span>) to confirm deletion.
                        </p>
                        <input
                            type="text"
                            value={deleteInput}
                            onChange={(e) => setDeleteInput(e.target.value)}
                            className="w-full p-2 border rounded-lg mb-4"
                            placeholder="Enter product name"
                        />
                        <div className="flex justify-end gap-4">
                            <button
                                onClick={() => setDeleteModal({ open: false, productName: "" })}
                                className="px-4 py-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={confirmDelete}
                                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ManageProducts;
