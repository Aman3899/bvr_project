"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import { FaBook, FaBox, FaCog, FaShieldAlt, FaExclamationCircle, FaEdit, FaEnvelope, FaTimes } from 'react-icons/fa';


const Section = ({ title, icon: Icon, children }) => (
    <motion.section
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
    >
        <div className="flex items-center justify-center mb-6">
            <Icon className="text-3xl text-blue-600 mr-3" />
            <h2 className="text-3xl font-bold">{title}</h2>
        </div>
        {children}
    </motion.section>
);

const CategoryCard = ({ category, subCategories }) => {
    const [showSubCategories, setShowSubCategories] = useState(false);
    const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);

    const handleClick = () => {
        if (window.innerWidth < 640) {
            setIsMobileModalOpen(true);
        }
    };

    return (
        <>
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                onClick={handleClick}
                onMouseEnter={() => setShowSubCategories(true)}
                onMouseLeave={() => setShowSubCategories(false)}
                className="relative bg-gradient-to-br from-blue-50 to-purple-50 rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
                <h3 className="text-xl font-semibold text-gray-800 max-sm:text-sm">{category}</h3>

                {showSubCategories && window.innerWidth >= 640 && (
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute left-0 top-full mt-2 w-48 bg-white rounded-lg shadow-xl z-50 p-4"
                    >
                        <div className="max-h-60 overflow-y-auto">
                            {subCategories.map((sub, index) => (
                                <div key={index} className="py-1 text-left text-sm hover:text-blue-600">
                                    {sub}
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </motion.div>

            <AnimatePresence>
                {isMobileModalOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
                        onClick={() => setIsMobileModalOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="bg-white rounded-xl p-6 w-full max-w-sm max-h-[80vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                        >
                            <div className="flex justify-between items-center mb-4">
                                <h3 className="text-xl font-bold">{category}</h3>
                                <button
                                    onClick={() => setIsMobileModalOpen(false)}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >
                                    <FaTimes />
                                </button>
                            </div>
                            <div className="space-y-2">
                                {subCategories.map((sub, index) => (
                                    <div key={index} className="p-2 hover:bg-gray-50 rounded">
                                        {sub}
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};

const TermsAndConditions = () => {

    const categoriesWithSub = {
        GRAIN: ["Maize", "Oats", "Barley", "Rice", "Quinoa", "Rye", "Wheat", "Millet", "Sorghum"],
        FRUITS: ["Strawberry", "Blueberries", "Raspberries", "Cranberries", "Oranges", "Tangerines", "Limes", "Grapefruits", "Mangoes", "Pineapples", "Papayas", "Kiwi", "Peaches", "Plums", "Quince", "Watermelons", "Cantaloupe", "Honeydew", "Casaba", "Figs", "Pomegranates", "Loquats", "Grapes", "Avocado"],
        VEGETABLES: ["Lettuce", "Spinach", "Kale", "Aragula", "Chinese", "Rape", "Broccoli", "Cauliflower", "Cabbage", "Carrots", "Beets", "Turnips", "Onions", "Garlic", "Shallots", "Leeks", "Oyster mushrooms", "Button mushrooms", "Zucchini", "Pumpkins", "Tomatoes", "Peppers", "Cucumber", "Okra", "Eggplant"],
        LEGUMES: ["Kidney beans", "Black beans", "Pinto beans", "Lentils", "Cowpeas"],
        "NUTS & SEEDS": ["Walnut", "Almond", "Pecans", "Hazel nuts", "Pistachio", "Sunflower seeds", "Pumpkin seeds", "Chia seeds", "Hemp seeds"],
        HERBS: ["Rosemary", "Thyme", "Parsley", "Cilantro", "Lavender", "Chamomile", "Ginger", "Dandelion", "Turmeric"],
        MEATS: ["Beef", "Pork", "Lamb", "Turkey", "Ham", "Duck", "Bacon", "Mbewa"],
        "SEA FOOD": ["Fish", "Salmon", "Tuna", "Tilapia", "Chambo", "Mcheni", "Bonya", "Usipa", "Oyster", "Catfish"],
        OTHER: ["Mandasi", "Eggs", "Honey", "Cheese", "Milk", "Yogurt", "Mozzarella", "Jam", "Scones", "Bwemba", "Malambe"]
    };

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 mt-20">
            <Navbar heading="Terms and Conditions" />

            <main className="container mx-auto px-6 md:px-12 py-10">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Terms and Conditions
                    </h1>
                </motion.div>

                <Section title="Introduction" icon={FaBook}>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto max-sm:text-sm">
                        Welcome to Dealbank, your trusted e-commerce platform for fresh and sustainable products. These terms and conditions outline the rules and regulations for using our website and services.
                    </p>
                </Section>

                <Section title="Product Categories" icon={FaBox}>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-6 max-sm:text-sm">
                        Dealbank offers a wide range of products across multiple categories:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6">
                        {Object.entries(categoriesWithSub).map(([category, subCategories], index) => (
                            <CategoryCard
                                key={index}
                                category={category}
                                subCategories={subCategories}
                            />
                        ))}
                    </div>
                </Section>

                <Section title="Use of Services" icon={FaCog}>
                    <div className="text-lg leading-relaxed max-w-3xl mx-auto">
                        <p className="mb-4 text-center max-sm:text-sm">
                            By using Dealbank&apos;s platform, you agree to the following terms:
                        </p>
                        <ul className="space-y-3 pl-6">
                            {[
                                "We reserve the right to update and modify the product offerings, prices, and categories.",
                                "Accurate and up-to-date information must be provided when using our platform for purchases.",
                                "Dealbank is not responsible for any damages, losses, or errors that occur due to the use of our platform.",
                                "Product images and descriptions are for reference purposes, and actual products may vary."
                            ].map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex items-start max-sm:text-sm"
                                >
                                    <span className="w-2 h-2 bg-blue-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>
                </Section>

                <Section title="Privacy Policy" icon={FaShieldAlt}>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto max-sm:text-sm">
                        We take your privacy seriously. Our Privacy Policy outlines how we collect, store, and use your personal information.
                    </p>
                </Section>

                <Section title="Limitation of Liability" icon={FaExclamationCircle}>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto max-sm:text-sm">
                        Dealbank is not liable for any indirect, incidental, or consequential damages arising from your use of our platform.
                    </p>
                </Section>

                <Section title="Changes to Terms" icon={FaEdit}>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto max-sm:text-sm">
                        We reserve the right to modify or update these terms at any time. Users are encouraged to review these terms periodically.
                    </p>
                </Section>

                <Section title="Contact Us" icon={FaEnvelope}>
                    <div className="text-center">
                        <p className="text-lg mb-4 max-sm:text-sm">
                            If you have any questions or concerns regarding these terms, please feel free to contact us.
                        </p>
                        <Link
                            href="mailto:support@dealbank.com"
                            className="inline-flex items-center bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-3 rounded-full hover:shadow-lg transition-all duration-300"
                        >
                            support@dealbank.com
                        </Link>
                    </div>
                </Section>
            </main>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;