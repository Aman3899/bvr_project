"use client";
import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { FaUserTie, FaUsers } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Link from "next/link";

const HomePage = () => {
    const particlesInit = async (main) => {
        await loadSlim(main); // Load tsparticles with the slim bundle for optimized performance
    };

    const particlesOptions = {
        background: {
            color: {
                value: "#000000FF", // Black background for contrast
            },
        },
        fpsLimit: 60,
        particles: {
            number: {
                value: 80, // Number of particles
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: "#ffffff", // White particles
            },
            shape: {
                type: "circle",
                stroke: {
                    width: 0,
                },
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: true,
                    speed: 1,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 3,
                    size_min: 0.1,
                    sync: false,
                },
            },
            move: {
                enable: true,
                speed: 2,
                direction: "none",
                random: true,
                straight: false,
                out_mode: "out",
                bounce: false,
                attract: {
                    enable: false,
                    rotateX: 600,
                    rotateY: 1200,
                },
            },
        },
        interactivity: {
            detect_on: "canvas",
            events: {
                onHover: {
                    enable: true,
                    mode: "repulse",
                },
                onClick: {
                    enable: true,
                    mode: "push",
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 200,
                    line_linked: {
                        opacity: 1,
                    },
                },
                bubble: {
                    distance: 400,
                    size: 40,
                    duration: 2,
                    opacity: 8,
                    speed: 3,
                },
                repulse: {
                    distance: 100,
                },
                push: {
                    particles_nb: 4,
                },
                remove: {
                    particles_nb: 2,
                },
            },
        },
        retina_detect: true,
    };

    return (
        <>
            <Navbar heading="Chat Portal" />
            {/* Particles Background */}
            <Particles id="tsparticles" init={particlesInit} options={particlesOptions} />
            <div className="min-h-screen pb-20 max-sm:pt-28 px-6 max-sm:pb-10 flex flex-col items-center justify-center relative z-10 text-white">
                <h1 className="text-4xl font-extrabold mb-6 tracking-wider text-center max-sm:text-3xl">
                    Welcome to Chat Portal
                </h1>
                <p className="text-white/70 pb-10 text-center max-w-xl max-sm:text-sm">
                    Navigate between Seller Chat and Client Chat to manage your conversations effectively.
                    Explore a futuristic and interactive experience!
                </p>
                <div className="flex flex-wrap justify-center gap-8">
                    {/* Seller Chat Card */}
                    <Link href="/chat/Seller">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 shadow-lg shadow-blue-500/50"
                        >
                            <FaUserTie className="text-blue-500 text-6xl animate-pulse" />
                            <h3 className="text-xl font-semibold">Seller Chat</h3>
                            <p className="text-white/70 text-center">
                                Manage your conversations with clients efficiently.
                            </p>
                        </motion.div>
                    </Link>
                    {/* Client Chat Card */}
                    <Link href="/chat/Client">
                        <motion.div
                            whileHover={{ scale: 1.1, rotate: -5 }}
                            whileTap={{ scale: 0.95 }}
                            className="cursor-pointer bg-white/10 hover:bg-white/20 backdrop-blur-lg rounded-xl p-6 flex flex-col items-center gap-4 transition-all duration-300 shadow-lg shadow-green-500/50"

                        >
                            <FaUsers className="text-green-500 text-6xl animate-spin-slow" />
                            <h3 className="text-xl font-semibold">Client Chat</h3>
                            <p className="text-white/70 text-center">
                                Connect with sellers and collaborate seamlessly.
                            </p>
                        </motion.div>
                    </Link>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default HomePage;