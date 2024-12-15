"use client";

import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";



const HowItWorks = () => {

    return (
        <div className="bg-gray-50 text-gray-800">
            <Navbar heading="How it Works?" />

            <main className="container mx-auto px-6 md:px-12 py-10">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Browse Products</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        Explore a wide range of categories such as grains, fruits, vegetables, meats, and more. Our platform makes it easy to find exactly what you&apos;re looking for, all in one place.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Add to Cart</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        Once you’ve found your desired products, simply add them to your cart. Our intuitive platform makes shopping quick and easy.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Checkout and Pay</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        After reviewing your cart, proceed to checkout. We offer secure payment options to ensure a smooth and safe transaction.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Track Your Order</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        After your order is placed, you can track it in real-time and get updates on your delivery status.
                    </p>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-center mb-6">Get Started Today</h2>
                    <p className="text-lg mb-2 max-sm:text-sm">Join Dealbank today and enjoy a seamless shopping experience!</p>
                    <a
                        href="/shop"
                        className="text-green-600 hover:underline font-semibold"
                    >
                        Start Shopping Now
                    </a>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default HowItWorks;