"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";
import {
    FaChartLine, FaUsers, FaHandshake, FaBullseye, FaRocket,
    FaRegChartBar, FaAd, FaRegClock
} from 'react-icons/fa';



const StatCard = ({ number, label, icon: Icon }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
    >
        <div className="flex items-center justify-center mb-4">
            <Icon className="text-4xl text-blue-600" />
        </div>
        <h3 className="text-3xl font-bold text-gray-800 mb-2">{number}</h3>
        <p className="text-gray-600">{label}</p>
    </motion.div>
);

const PricingCard = ({ title, price, features, recommended }) => (
    <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        className={`
      relative p-6 rounded-2xl
      ${recommended ? 'bg-gradient-to-br from-blue-600 to-purple-600 text-white' : 'bg-white'}
      shadow-xl hover:shadow-2xl transition-all duration-300
    `}
    >
        {recommended && (
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">
                Recommended
            </div>
        )}
        <h3 className="text-2xl font-bold mb-4">{title}</h3>
        <div className="text-3xl font-bold mb-6">${price}<span className="text-lg">/month</span></div>
        <ul className="space-y-3">
            {features.map((feature, index) => (
                <li key={index} className="flex items-center">
                    <FaRocket className="mr-2" />
                    {feature}
                </li>
            ))}
        </ul>
        <button className={`
      w-full mt-6 py-3 px-6 rounded-lg font-semibold
      ${recommended
                ? 'bg-white text-blue-600 hover:bg-gray-100'
                : 'bg-blue-600 text-white hover:bg-blue-700'}
      transition-colors duration-300
    `}>
            Get Started
        </button>
    </motion.div>
);

const Advertise = () => {
    const [selectedTab, setSelectedTab] = useState('overview');

    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    };

    const features = [
        {
            icon: FaAd,
            title: "Multiple Ad Formats",
            description: "Choose from banner ads, sponsored listings, video ads, and more to showcase your products effectively."
        },
        {
            icon: FaHandshake,
            title: "Sponsored Content",
            description: "Create engaging sponsored content that resonates with our audience and drives conversions."
        },
        {
            icon: FaRegClock,
            title: "Flexible Scheduling",
            description: "Schedule your campaigns at optimal times to maximize visibility and engagement."
        },
        {
            icon: FaChartLine,
            title: "Performance Tracking",
            description: "Monitor your campaign performance with detailed analytics and real-time reporting."
        }
    ];

    return (
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 mt-20">
            <Navbar heading="Advertise with Us" />

            <main className="container mx-auto px-6 md:px-12 py-10">
                {/* Hero Section */}
                <motion.section
                    className="text-center mb-16"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <h1 className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 text-transparent bg-clip-text">
                        Transform Your Business with DealBank Advertising
                    </h1>
                    <p className="text-xl text-gray-600 max-w-4xl mx-auto">
                        Join thousands of successful businesses reaching millions of engaged customers on Malawi&apos;s fastest-growing e-commerce platform.
                    </p>
                </motion.section>

                {/* Stats Section */}
                <section className="mb-16">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <StatCard number="2M+" label="Monthly Active Users" icon={FaUsers} />
                        <StatCard number="85%" label="Customer Engagement Rate" icon={FaChartLine} />
                        <StatCard number="12x" label="Average ROI" icon={FaRegChartBar} />
                    </div>
                </section>

                {/* Navigation Tabs */}
                <div className="flex justify-center mb-12">
                    <div className="bg-white rounded-full p-1 shadow-md">
                        {['overview', 'pricing', 'features'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setSelectedTab(tab)}
                                className={`
                  px-6 py-2 rounded-full text-sm font-medium
                  ${selectedTab === tab
                                        ? 'bg-blue-600 text-white'
                                        : 'text-gray-600 hover:text-blue-600'}
                  transition-all duration-300
                `}
                            >
                                {tab.charAt(0).toUpperCase() + tab.slice(1)}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Dynamic Content Based on Selected Tab */}
                {selectedTab === 'overview' && (
                    <motion.section {...fadeIn} className="space-y-12">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <FaBullseye className="text-4xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Targeted Reach</h3>
                                <p>Access our sophisticated targeting tools to reach your ideal customers based on demographics, interests, and shopping behavior.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <FaHandshake className="text-4xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Partner Success</h3>
                                <p>Work with our dedicated partner success team to optimize your campaigns and maximize ROI.</p>
                            </div>
                            <div className="bg-white p-6 rounded-xl shadow-lg">
                                <FaRegChartBar className="text-4xl text-blue-600 mb-4" />
                                <h3 className="text-xl font-bold mb-2">Analytics Dashboard</h3>
                                <p>Access real-time analytics and insights to track your campaign performance and make data-driven decisions.</p>
                            </div>
                        </div>
                    </motion.section>
                )}

                {selectedTab === 'pricing' && (
                    <motion.section {...fadeIn} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <PricingCard
                            title="Starter"
                            price="299"
                            features={[
                                "Basic analytics dashboard",
                                "Standard ad placement",
                                "5 active campaigns",
                                "Email support"
                            ]}
                        />
                        <PricingCard
                            title="Professional"
                            price="599"
                            features={[
                                "Advanced analytics",
                                "Premium ad placement",
                                "15 active campaigns",
                                "Priority support"
                            ]}
                            recommended={true}
                        />
                        <PricingCard
                            title="Enterprise"
                            price="999"
                            features={[
                                "Custom analytics",
                                "Premium+ ad placement",
                                "Unlimited campaigns",
                                "24/7 dedicated support"
                            ]}
                        />
                    </motion.section>
                )}

                {selectedTab === 'features' && (
                    <motion.section {...fadeIn} className="space-y-8">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {[
                                {
                                    icon: <FaAd />,
                                    title: "Multiple Ad Formats",
                                    description: "Choose from banner ads, sponsored listings, video ads, and more to showcase your products effectively."
                                },
                                {
                                    icon: <FaHandshake />,
                                    title: "Sponsored Content",
                                    description: "Create engaging sponsored content that resonates with our audience and drives conversions."
                                },
                                {
                                    icon: <FaRegClock />,
                                    title: "Flexible Scheduling",
                                    description: "Schedule your campaigns at optimal times to maximize visibility and engagement."
                                },
                                {
                                    icon: <FaChartLine />,
                                    title: "Performance Tracking",
                                    description: "Monitor your campaign performance with detailed analytics and real-time reporting."
                                }
                            ].map((feature, index) => (
                                <div key={index} className="bg-white p-6 rounded-xl shadow-lg">
                                    <div className="text-4xl text-blue-600 mb-4">
                                        {feature.icon}
                                    </div>
                                    <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                                    <p className="text-gray-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>
                    </motion.section>
                )}


                {/* Call to Action */}
                <motion.section
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className="text-3xl font-bold mb-6">Ready to Grow Your Business?</h2>
                    <p className="text-lg mb-8">Join thousands of successful businesses advertising on DealBank</p>
                    <Link
                        href="mailto:advertising@dealbank.com"
                        className="inline-block bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all duration-300"
                    >
                        Start Advertising Today
                    </Link>
                </motion.section>
            </main>

            <Footer />
        </div>
    );
};

export default Advertise;