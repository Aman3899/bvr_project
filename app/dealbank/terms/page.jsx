"use client";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Link from "next/link";



const TermsAndConditions = () => {
    return (
        <div className="bg-gray-50 text-gray-800">
            <Navbar heading="Terms and Conditions" />

            <main className="container mx-auto px-6 md:px-12 py-10">
                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Introduction</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto max-sm:text-sm">
                        Welcome to Dealbank, your trusted e-commerce platform for fresh and sustainable products. These terms and conditions outline the rules and regulations for using our website and services. By accessing and using our platform, you agree to comply with these terms.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Product Categories</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        Dealbank offers a wide range of products across multiple categories. These include:
                    </p>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                        {[
                            'GRAIN', 'FRUITS', 'VEGETABLES', 'LEGUMES', 'NUTS & SEEDS',
                            'HERBS', 'MEATS', 'SEAFOOD'
                        ].map((category, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-md p-4 max-sm:p-2 text-center hover:shadow-lg transition-shadow"
                            >
                                <h3 className="text-xl font-semibold mb-2 max-sm:text-sm">{category}</h3>
                            </div>
                        ))}
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Use of Services</h2>
                    <div className="text-lg leading-relaxed text-center max-w-3xl mx-auto">
                        <p className="mb-4 max-sm:text-sm">
                            By using Dealbank’s platform, you agree to the following terms:
                        </p>
                        <ul className="list-disc pl-6 text-left max-sm:text-xs space-y-2">
                            <li>We reserve the right to update and modify the product offerings, prices, and categories.</li>
                            <li>Accurate and up-to-date information must be provided when using our platform for purchases.</li>
                            <li>Dealbank is not responsible for any damages, losses, or errors that occur due to the use of our platform.</li>
                            <li>Product images and descriptions are for reference purposes, and actual products may vary.</li>
                        </ul>
                    </div>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Privacy Policy</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        We take your privacy seriously. Our Privacy Policy outlines how we collect, store, and use your personal information. Please refer to our Privacy Policy for more details.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Limitation of Liability</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        Dealbank is not liable for any indirect, incidental, or consequential damages arising from your use of our platform. Our liability is limited to the value of the product purchased.
                    </p>
                </section>

                <section className="mb-12">
                    <h2 className="text-3xl font-bold text-center mb-6">Changes to Terms</h2>
                    <p className="text-lg leading-relaxed text-center max-w-3xl mx-auto mb-4 max-sm:text-sm">
                        We reserve the right to modify or update these terms at any time. Users are encouraged to review these terms periodically to stay informed of any changes.
                    </p>
                </section>

                <section>
                    <h2 className="text-3xl font-bold text-center mb-6">Contact Us</h2>
                    <div className="text-center">
                        <p className="text-lg mb-2 max-sm:text-sm">If you have any questions or concerns regarding these terms, please feel free to contact us.</p>
                        <Link
                            href="mailto:support@dealbank.com"
                            className="text-green-600 hover:underline font-semibold"
                        >
                            support@dealbank.com
                        </Link>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default TermsAndConditions;