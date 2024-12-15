"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";



const Advertise = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Navbar heading="Advertise with Us" />

            <main className="container mx-auto px-6 md:px-12 py-10">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Why Advertise on Dealbank?</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        Dealbank is a rapidly growing e-commerce platform with a focus on fresh, high-quality, and sustainable products.
                        Advertising with us means connecting with a wide customer base looking for healthy and sustainable options.
                    </p>
                    <ul className="list-disc pl-6 text-lg leading-relaxed max-w-3xl mx-auto mb-6 max-sm:text-xs space-y-2">
                        <li>Targeted audience interested in healthy food choices</li>
                        <li>Wide exposure across various product categories</li>
                        <li>Affordable advertising plans with flexible options</li>
                        <li>Boost your brand visibility on a trusted platform</li>
                    </ul>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">How It Works</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        Advertising on Dealbank is simple and effective. Here&apos;s how you can get started:
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Step 1: Choose Your Plan</h3>
                            <p className="max-sm:text-sm">Pick from our flexible advertising plans that best suit your business needs.</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Step 2: Submit Your Ad</h3>
                            <p className="max-sm:text-sm">Provide us with your product images, description, and links. We&apos;ll handle the rest!</p>
                        </div>
                        <div className="bg-white rounded-lg shadow-md p-6 text-center">
                            <h3 className="text-xl font-semibold mb-2">Step 3: Go Live</h3>
                            <p className="max-sm:text-sm">Your ad will go live on our platform, giving you exposure to thousands of potential customers.</p>
                        </div>
                    </div>
                </section>

                <section className="text-center">
                    <h2 className="text-3xl font-bold text-center mb-6">Get Started Today</h2>
                    <p className="text-lg mb-2 max-sm:text-sm">Ready to start advertising? Let’s make it happen.</p>
                    <Link
                        href="mailto:support@dealbank.com"
                        className="text-green-600 hover:underline font-semibold"
                    >
                        Contact Us for Advertising Plans
                    </Link>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Advertise;  