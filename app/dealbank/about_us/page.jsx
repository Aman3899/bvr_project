"use client";
import React from 'react';
import Navbar from '@/app/components/Navbar';
import Footer from '@/app/components/Footer';


const AboutUs = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Navbar heading="About Us" />

            <main className="container mx-auto px-6 md:px-12 py-10">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">About DealBank</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto max-sm:text-sm">
                        DealBank is your go-to e-commerce platform for fresh, high-quality, and sustainable products.
                        We are committed to connecting you with the best grains, fruits, vegetables, legumes, meats,
                        seafood, and more from trusted suppliers and farmers. Shop with us for a healthier, happier lifestyle.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Our Product Categories</h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            'Grains', 'Fruits', 'Vegetables', 'Legumes', 'Nuts & Seeds',
                            'Herbs', 'Meats', 'Seafood'
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-2">{category}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Why Choose Us?</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Fresh & Quality Products</h3>
                            <p>
                                We work directly with farmers and suppliers to ensure that you receive only the best products.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Wide Range of Categories</h3>
                            <p>
                                From grains to meats, and everything in between, we offer a wide selection to meet your needs.
                            </p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Sustainability</h3>
                            <p>
                                We are committed to sourcing products that are environmentally friendly and ethically produced.
                            </p>
                        </div>
                    </div>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <div className="text-center">
                        <p className="text-lg mb-2">Have questions? Reach out to us anytime.</p>
                        <a
                            href="mailto:support@dealbank.com"
                            className="text-green-600 hover:underline font-semibold"
                        >
                            support@dealbank.com
                        </a>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default AboutUs;