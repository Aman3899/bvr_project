import React from 'react';
import Link from 'next/link';
import { FaHome, FaShoppingCart, FaUser } from 'react-icons/fa';


const Footer = () => {
  return (
    <div>
      <footer className="mt-8 py-4 bg-gray-100 text-center">
        <div className="flex justify-around text-blue-600 text-sm">
          <Link href="/">
            <div className="flex flex-col items-center">
              <span><FaHome className="text-2xl"/></span>
              <p>Home</p>
            </div>
          </Link>
          <Link href="/markets">
            <div className="flex flex-col items-center">
              <span><FaShoppingCart className="text-xl"/></span>
              <p>Markets</p>
            </div>
          </Link>
          <Link href="/profile">
            <div className="flex flex-col items-center">
              <span><FaUser className="text-xl"/></span>
              <p>Profile</p>
            </div>
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Footer;