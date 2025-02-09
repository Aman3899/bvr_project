"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { loadSlim } from "tsparticles-slim";
import { FaSmile, FaUserEdit, FaTrashAlt, FaPaperPlane, FaBars, FaTimes, FaSearch } from "react-icons/fa";
import Navbar from "@/app/components/Navbar";
import Particles from "react-tsparticles";


const SellerChat = () => {
    const [activeChat, setActiveChat] = useState(null);
    const [message, setMessage] = useState("");
    const [typing, setTyping] = useState(false);
    const [showSidebar, setShowSidebar] = useState(true);
    const [searchTerm, setSearchTerm] = useState("");
    const messagesEndRef = useRef(null);
    const [clientList, setClientList] = useState([
        { id: 1, name: "John Doe", product: "Gaming Laptop", status: "Active", unread: 2, avatar: "JD" },
        { id: 2, name: "Jane Smith", product: "Smartphone", status: "Blocked", unread: 0, avatar: "JS" },
        { id: 3, name: "Mike Johnson", product: "Tablet", status: "Active", unread: 1, avatar: "MJ" },
        { id: 4, name: "Sarah Connor", product: "Smartwatch", status: "Active", unread: 3, avatar: "SC" },
        { id: 5, name: "David Beckham", product: "Headphones", status: "Blocked", unread: 0, avatar: "DB" },
    ]);

    const [messages, setMessages] = useState({
        1: [
            { text: "Is this laptop still available?", sent: false, timestamp: "09:00 AM" },
            { text: "Yes, it is! Would you like more details?", sent: true, timestamp: "09:05 AM" },
        ],
        2: [],
        3: [{ text: "Can you ship to my location?", sent: false, timestamp: "10:30 AM" }],
        4: [],
        5: [],
    });

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, activeChat]);

    const particlesInit = async (engine) => {
        await loadSlim(engine);
    };

    const handleSend = () => {
        if (message.trim() && activeChat !== null) {
            const now = new Date();
            const timestamp = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            setMessages((prevMessages) => ({
                ...prevMessages,
                [activeChat]: [
                    ...prevMessages[activeChat],
                    { text: message, sent: true, timestamp },
                ],
            }));
            setMessage("");

            // Simulate reply after 1-3 seconds
            setTimeout(() => {
                const autoReply = "Thanks for your message. I'll get back to you soon!";
                setMessages((prevMessages) => ({
                    ...prevMessages,
                    [activeChat]: [
                        ...prevMessages[activeChat],
                        { text: autoReply, sent: false, timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) },
                    ],
                }));
            }, Math.random() * 2000 + 1000);
        }
    };

    const handleDeleteClient = (clientId) => {
        setClientList(clientList.filter((client) => client.id !== clientId));
        setActiveChat(null);
    };

    const filteredClients = clientList.filter(client =>
        client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        client.product.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const activeClient = clientList.find(client => client.id === activeChat);

    useEffect(() => {
        setTyping(message.length > 0);
    }, [message]);

    return (

        <>
            <Navbar heading="Chat with Clients" />
            <div className="min-h-screen bg-gradient-to-br from-purple-800 via-blue-700 to-cyan-600 pt-20">
                <Particles
                    init={particlesInit}
                    options={{
                        particles: {
                            number: { value: 50 },
                            color: { value: "#ffffff" },
                            opacity: { value: 0.3 },
                            size: { value: 3 },
                            move: { enable: true, speed: 1 },
                        },
                    }}
                    className="absolute inset-0"
                />

                <div className="relative container mx-auto px-4 py-6 max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-4 md:p-6"
                    >
                        {/* Mobile Header */}
                        <div className="md:hidden flex items-center justify-between mb-4">
                            <button
                                onClick={() => setShowSidebar(!showSidebar)}
                                className="text-white p-2 hover:bg-white/10 rounded-lg"
                            >
                                {showSidebar ? <FaTimes size={24} /> : <FaBars size={24} />}
                            </button>
                            {activeClient && (
                                <div className="flex items-center gap-2">
                                    <div className="w-8 h-8 rounded-full bg-purple-500 flex items-center justify-center text-white">
                                        {activeClient.avatar}
                                    </div>
                                    <span className="text-white font-semibold">{activeClient.name}</span>
                                </div>
                            )}
                        </div>

                        {/* Dashboard Stats */}
                        <div className="grid grid-cols-3 gap-4 mb-6">
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-xl p-4 max-sm:p-2 text-center"
                            >
                                <h2 className="text-2xl max-sm:text-sm font-semibold">{clientList.filter(c => c.status === "Active").length}</h2>
                                <p className="max-sm:text-sm">Active Clients</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-r from-pink-500 to-pink-600 text-white rounded-xl p-4 max-sm:p-2 text-center"
                            >
                                <h2 className="text-2xl max-sm:text-sm font-semibold">
                                    {Object.values(messages).reduce((acc, curr) => acc + curr.length, 0)}
                                </h2>
                                <p className="max-sm:text-sm">Total Messages</p>
                            </motion.div>
                            <motion.div
                                whileHover={{ scale: 1.02 }}
                                className="bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-xl p-4 max-sm:p-2 text-center"
                            >
                                <h2 className="text-2xl max-sm:text-sm font-semibold">
                                    {clientList.reduce((acc, curr) => acc + curr.unread, 0)}
                                </h2>
                                <p className="max-sm:text-sm">Unread Messages</p>
                            </motion.div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-6">
                            {/* Sidebar */}
                            <AnimatePresence>
                                {showSidebar && (
                                    <motion.div
                                        initial={{ x: -300, opacity: 0 }}
                                        animate={{ x: 0, opacity: 1 }}
                                        exit={{ x: -300, opacity: 0 }}
                                        className="md:w-1/3 lg:w-1/4 bg-white/5 rounded-xl p-4"
                                    >
                                        <div className="flex items-center gap-2 mb-4">
                                            <div className="relative flex-1">
                                                <input
                                                    type="text"
                                                    placeholder="Search clients..."
                                                    value={searchTerm}
                                                    onChange={(e) => setSearchTerm(e.target.value)}
                                                    className="w-full bg-white/10 text-white placeholder-white/50 rounded-xl px-4 py-2 pr-10 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                                />
                                                <FaSearch className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/50" />
                                            </div>
                                        </div>

                                        <div className="space-y-3 overflow-y-auto max-h-[calc(100vh-300px)]">
                                            {filteredClients.map((client) => (
                                                <motion.div
                                                    key={client.id}
                                                    whileHover={{ scale: 1.02 }}
                                                    onClick={() => {
                                                        setActiveChat(client.id);
                                                        if (window.innerWidth < 768) setShowSidebar(false);
                                                    }}
                                                    className={`p-4 rounded-xl cursor-pointer transition-all ${activeChat === client.id
                                                        ? "bg-white/20 shadow-lg"
                                                        : "bg-white/10 hover:bg-white/15"
                                                        }`}
                                                >
                                                    <div className="flex justify-between items-center">
                                                        <div className="flex items-center gap-3">
                                                            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 flex items-center justify-center text-white font-semibold">
                                                                {client.avatar}
                                                            </div>
                                                            <div>
                                                                <h3 className="font-semibold text-white">{client.name}</h3>
                                                                <p className="text-white/70 text-sm">{client.product}</p>
                                                            </div>
                                                        </div>
                                                        <div className="flex gap-2 items-center">
                                                            {client.unread > 0 && (
                                                                <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">
                                                                    {client.unread}
                                                                </span>
                                                            )}
                                                            <FaTrashAlt
                                                                className="text-red-500 cursor-pointer hover:text-red-400"
                                                                onClick={(e) => {
                                                                    e.stopPropagation();
                                                                    handleDeleteClient(client.id);
                                                                }}
                                                            />
                                                        </div>
                                                    </div>
                                                </motion.div>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Chat Area */}
                            <div className="flex-1 flex flex-col min-h-[500px]">
                                <div className="flex-1 overflow-y-auto mb-4 space-y-4">
                                    {activeChat ? (
                                        messages[activeChat]?.map((msg, index) => (
                                            <motion.div
                                                key={index}
                                                initial={{ opacity: 0, x: msg.sent ? 20 : -20 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                className={`flex ${msg.sent ? "justify-end" : "justify-start"}`}
                                            >
                                                <div className="max-w-[85%] md:max-w-[70%]">
                                                    <div
                                                        className={`p-4 rounded-2xl ${msg.sent
                                                            ? "bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-tr-none"
                                                            : "bg-white/20 text-white rounded-tl-none"
                                                            }`}
                                                    >
                                                        {msg.text}
                                                    </div>
                                                    <div className={`text-xs text-white/60 mt-1 ${msg.sent ? "text-right" : "text-left"}`}>
                                                        {msg.timestamp}
                                                    </div>
                                                </div>
                                            </motion.div>
                                        ))
                                    ) : (
                                        <div className="flex items-center justify-center h-full">
                                            <p className="text-white/70 text-center">Select a client to start chatting</p>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>

                                {activeChat && (
                                    <div className="flex gap-4 items-center">
                                        <input
                                            type="text"
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            onKeyPress={(e) => e.key === "Enter" && handleSend()}
                                            className="flex-1 bg-white/10 text-white placeholder-white/50 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-400"
                                            placeholder="Type your message..."
                                        />
                                        <motion.button
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                            onClick={handleSend}
                                            className="bg-gradient-to-r from-purple-500 to-purple-600 text-white p-3 rounded-xl flex justify-center items-center min-w-[48px]"
                                        >
                                            <FaPaperPlane className="text-xl" />
                                        </motion.button>
                                    </div>
                                )}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </>
    );
};

export default SellerChat;