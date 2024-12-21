import Link from "next/link";
import React from "react";


const Footer = () => {

  return (
    <footer className="bg-gray-800 text-white py-10 max-sm:py-5">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-xl font-bold">Dealbank.Markets</h2>
            <p className="text-sm mt-1">A Scrolla Malawi Company</p>
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-sm">
              Established by{" "}
              <Link
                href="https://www.linkedin.com/in/david-bright-nyirenda-csswb-yb-71983a75/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-600 transition"
              >
                David Bright Nyirenda
              </Link>
            </p>
          </div>
        </div>
        <div className="mt-4 text-center text-sm">
          <p>
          © {new Date().getDate()} {new Date().toLocaleString('default', { month: 'short' })}, {new Date().getFullYear()} Dealbank.Markets. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;