import Link from "next/link";
import React from "react";
import { motion } from "framer-motion"; // Importing Framer Motion

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().toLocaleString('default', { month: 'short' });
  const currentDate = new Date().getDate();

  return (
    <footer className="bg-gray-800 text-white py-10 max-sm:py-5">
      <div className="container mx-auto px-4">
        <motion.div 
          className="flex flex-col md:flex-row items-center justify-between" 
          initial={{ opacity: 0 }} 
          animate={{ opacity: 1 }} 
          transition={{ duration: 0.8 }} // Fade-in animation
        >
          <div className="text-center md:text-left">
            <motion.h2 
              className="text-xl font-bold text-gray-200"
              initial={{ y: -20 }} 
              animate={{ y: 0 }} 
              transition={{ duration: 0.5 }} // Slide-up animation
            >
              Dealbank.Markets
            </motion.h2>
            <p className="text-sm mt-1 text-gray-400">A Scrolla Malawi Company</p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <motion.p 
              className="text-sm text-gray-400"
              initial={{ x: -20 }} 
              animate={{ x: 0 }} 
              transition={{ duration: 0.6 }} // Slide-in from the left animation
            >
              Established by{" "}
              <Link
                href="https://www.linkedin.com/in/david-bright-nyirenda-csswb-yb-71983a75/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition duration-300 ease-in-out"
              >
                David Bright Nyirenda
              </Link>
            </motion.p>
          </div>
        </motion.div>

        {/* Copyright Section */}
        <motion.div
          className="mt-6 text-center text-sm text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.8 }} // Fade-in animation with delay
        >
          <p>
            © {currentDate} {currentMonth}, {currentYear} Dealbank.Markets. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;