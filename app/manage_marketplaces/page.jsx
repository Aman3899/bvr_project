"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Plus, Edit2, Trash2, X, AlertCircle, Search } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Link from 'next/link';
import { FaPlusCircle } from 'react-icons/fa';

const ManageMarketplaces = () => {
    const [markets, setMarkets] = useState([
        { name: "Zigwagwa Market", distance: "2 km", image: "/marketplace-image.jpeg" },
        { name: "Salisbury Market", distance: "3 km", image: "/marketplace-image.jpeg" },
        { name: "Luwinga Market", distance: "5 km", image: "/marketplace-image.jpeg" },
        { name: "Mzuzu Market", distance: "7 km", image: "/marketplace-image.jpeg" },
        { name: "Limbe Market", distance: "4 km", image: "/marketplace-image.jpeg" },
        { name: "Kamuzu Market", distance: "6 km", image: "/marketplace-image.jpeg" },
        { name: "Bwaila Market", distance: "8 km", image: "/marketplace-image.jpeg" },
        { name: "Chichiri Market", distance: "9 km", image: "/marketplace-image.jpeg" },
        { name: "Mulanje Market", distance: "10 km", image: "/marketplace-image.jpeg" },
        { name: "Dedza Market", distance: "11 km", image: "/marketplace-image.jpeg" },
    ]);

    const [searchQuery, setSearchQuery] = useState('');
    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const [deleteMarket, setDeleteMarket] = useState(null);
    const [confirmDeleteName, setConfirmDeleteName] = useState('');

    const filteredMarkets = markets.filter(market =>
        market.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    const handleDelete = (market) => {
        setDeleteMarket(market);
        setShowDeleteModal(true);
    };

    const confirmDelete = () => {
        if (confirmDeleteName === deleteMarket.name) {
            setMarkets(markets.filter(m => m.name !== deleteMarket.name));
            setShowDeleteModal(false);
            setConfirmDeleteName('');
            setDeleteMarket(null);
        }
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <>
            <Navbar heading="Market Management" />
            <div className="max-w-6xl mx-auto p-4 sm:p-6 space-y-6 mt-24">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="flex max-sm:flex-col max-sm:gap-y-5 text-center justify-between items-center mb-8"
                >
                    <div>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent">
                            Manage Marketplaces
                        </h1>
                        <p className="text-gray-600 mt-2">Oversee and manage all marketplace locations</p>
                    </div>

                    <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-shadow"
                        onClick={() => console.log('Add Marketplace Clicked')}
                    >
                        <Link href="/manage_marketplaces/add_marketplace" className="flex items-center gap-2">
                            <Plus className="w-5 h-5" />
                            Add Marketplace
                        </Link>
                    </motion.button>
                </motion.div>

                <div className="relative w-full mx-auto">
                    <input
                        type="text"
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        placeholder="Search marketplaces..."
                        className="w-full p-4 pl-10 border rounded-lg shadow-sm focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    />
                    <Search className="absolute top-3.5 left-3.5 text-gray-400 w-5 h-5" />
                </div>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid gap-6"
                >
                    {filteredMarkets.length > 0 ? (
                        filteredMarkets.map((market, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02 }}
                                className="bg-gray-100 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                            >
                                <div className="p-6 flex items-center justify-between">
                                    <div className="flex items-center gap-4">
                                        <div className="relative w-32 h-24 max-sm:w-28 max-sm:h-20 rounded-lg overflow-hidden">
                                            <Image
                                                width={200}
                                                height={200}
                                                src={market.image}
                                                alt={market.name}
                                                className="cover"
                                            />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-semibold text-gray-800">{market.name}</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <MapPin className="w-4 h-4 text-blue-500" />
                                                <span className="text-gray-600">{market.distance}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-3">
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                                        >
                                            <Link href="/manage_marketplaces/edit_marketplace" className='flex items-center gap-2'>
                                                <Edit2 className="w-7 h-7 max-sm:w-5 max-sm:h-5" />
                                            </Link>
                                        </motion.button>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                            onClick={() => handleDelete(market)}
                                        >
                                            <Trash2 className="w-7 h-7 max-sm:w-5 max-sm:h-5" />
                                        </motion.button>
                                    </div>
                                </div>
                            </motion.div>
                        ))
                    ) : (
                        <p className="text-center text-gray-500">No marketplaces found.</p>
                    )}
                </motion.div>

                {/* Delete Confirmation Modal */}
                <AnimatePresence>
                    {showDeleteModal && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50"
                        >
                            <motion.div
                                initial={{ scale: 0.9 }}
                                animate={{ scale: 1 }}
                                exit={{ scale: 0.9 }}
                                className="bg-white rounded-xl p-6 max-w-md w-full"
                            >
                                <div className="flex justify-between items-center mb-4">
                                    <h2 className="text-xl font-bold text-gray-900">Delete Marketplace</h2>
                                    <button
                                        onClick={() => setShowDeleteModal(false)}
                                        className="text-gray-500 hover:text-gray-700"
                                    >
                                        <X className="w-5 h-5" />
                                    </button>
                                </div>

                                <Alert className="mb-4">
                                    <AlertCircle className="w-4 h-4" />
                                    <AlertTitle>Warning</AlertTitle>
                                    <AlertDescription>
                                        This action cannot be undone. Please type {deleteMarket?.name} to confirm.
                                    </AlertDescription>
                                </Alert>

                                <input
                                    type="text"
                                    value={confirmDeleteName}
                                    onChange={(e) => setConfirmDeleteName(e.target.value)}
                                    placeholder="Type marketplace name"
                                    className="w-full p-3 border rounded-lg mb-4"
                                />

                                <div className="flex justify-end gap-3">
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-gray-200 text-gray-800 rounded-lg"
                                        onClick={() => setShowDeleteModal(false)}
                                    >
                                        Cancel
                                    </motion.button>
                                    <motion.button
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="px-4 py-2 bg-red-500 text-white rounded-lg"
                                        onClick={confirmDelete}
                                        disabled={confirmDeleteName !== deleteMarket?.name}
                                    >
                                        Delete Marketplace
                                    </motion.button>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </>
    );
};

export default ManageMarketplaces;
