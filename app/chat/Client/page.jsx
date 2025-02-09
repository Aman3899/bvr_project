"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import Navbar from "@/app/components/Navbar";
import { FaPaperPlane, FaRegClock } from "react-icons/fa";

const ClientChat = () => {
    const [message, setMessage] = useState("");
    const [messages, setMessages] = useState([]);
    const messagesEndRef = useRef(null);
    const [quickMessages, setQuickMessages] = useState([
        "How can I get more information?",
        "What are your payment methods?",
        "Can you provide a discount?",
        "What is the estimated delivery time?",
    ]);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const getCurrentTime = () => {
        return new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    };

    const handleSend = () => {
        if (message.trim()) {
            setMessages([...messages, { text: message, sent: true, timestamp: getCurrentTime() }]);
            setMessage("");
            
            // Simulate seller response
            setTimeout(() => {
                setMessages(prev => [...prev, {
                    text: "Thank you for your message! I'll get back to you shortly.",
                    sent: false,
                    timestamp: getCurrentTime()
                }]);
            }, Math.random() * 2000 + 1000);
        }
    };

    const handleTemplateClick = (template) => {
        setMessages([...messages, { text: template, sent: true, timestamp: getCurrentTime() }]);
        setQuickMessages(quickMessages.filter((msg) => msg !== template));
    };

    return (
        <>
            <Navbar heading="Chat with Seller" />
            <div className="pt-20 min-h-screen bg-gradient-to-br from-purple-800 via-blue-700 to-cyan-600 relative">
                <Particles
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 50 },
                            color: { value: ["#ffffff", "#ff69b4", "#00ffff"] },
                            opacity: { value: 0.4 },
                            size: { value: 3 },
                            move: { enable: true, speed: 2 },
                        },
                        interactivity: {
                            events: {
                                onHover: { enable: true, mode: "repulse" },
                            },
                        },
                    }}
                    className="absolute inset-0"
                />

                <div className="relative container mx-auto px-4 py-6 max-w-4xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="backdrop-blur-xs rounded-2xl shadow-2xl p-6"
                    >
                        <motion.h1 
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                            className="text-3xl sm:text-4xl font-bold text-white mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent"
                        >
                            Chat with Seller
                        </motion.h1>

                        <div className="h-[50vh] sm:h-[60vh] overflow-y-auto mb-4 space-y-4 p-4 scrollbar-thin scrollbar-thumb-blue-500 scrollbar-track-transparent">
                            <AnimatePresence mode="popLayout">
                                {messages.map((msg, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                                        animate={{ opacity: 1, scale: 1, y: 0 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                                    >
                                        <div className="max-w-[85%] sm:max-w-[70%]">
                                            <div
                                                className={`p-4 rounded-2xl ${
                                                    msg.sent
                                                        ? "bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-tr-none"
                                                        : "bg-white/20 text-white rounded-tl-none"
                                                } shadow-lg`}
                                            >
                                                {msg.text}
                                            </div>
                                            <div className={`flex items-center gap-1 mt-1 text-xs text-white/60 ${
                                                msg.sent ? "justify-end" : "justify-start"
                                            }`}>
                                                <FaRegClock className="text-white/60" />
                                                {msg.timestamp}
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </AnimatePresence>
                            <div ref={messagesEndRef} />
                        </div>

                        {quickMessages.length > 0 && (
                            <motion.div 
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-6"
                            >
                                <h2 className="text-white text-lg font-semibold mb-3">Quick Messages:</h2>
                                <div className="flex flex-wrap gap-2">
                                    {quickMessages.map((template, index) => (
                                        <motion.button
                                            key={index}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={() => handleTemplateClick(template)}
                                            className="bg-white/20 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-500 transition-all duration-300 shadow-md"
                                        >
                                            {template}
                                        </motion.button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        <div className="flex flex-row gap-x-2">
                            <input
                                type="text"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                className="flex-1 bg-white/10 text-white placeholder-white/50 rounded-xl px-4 py-3 max-sm:px-2 max-sm:py-1 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
                                placeholder="Type your message..."
                            />
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                                onClick={handleSend}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-6 py-3 rounded-xl font-semibold flex justify-center items-center gap-2 shadow-lg hover:shadow-blue-500/50 transition-all duration-300"
                            >
                                <FaPaperPlane />
                                <p className="max-sm:hidden">Send</p>
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default ClientChat;