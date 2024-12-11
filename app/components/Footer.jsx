import React from 'react';
import Link from 'next/link';
import { SiFacebook, SiInstagram, SiX, SiGithub, } from "react-icons/si";


const Footer = () => {
  return (
    <div className="text-center py-10">
      <Link href="/" className="flex items-center justify-center mb-5 text-2xl font-semibold text-gray-900">DealBank</Link>

      <span className="block text-sm text-center text-gray-500">© 2024 DealBank™. All Rights Reserved.</span>

      <ul className="flex justify-center mt-5 space-x-5">
        <li>
          <Link href="#" className="text-gray-500 hover:text-blue-700"><SiFacebook /></Link>
        </li>
        <li>
          <Link href="#" className="text-gray-500 hover:text-orange-600"><SiInstagram /></Link>
        </li>
        <li>
          <Link href="#" className="text-gray-500 hover:text-gray-900"><SiX /></Link>
        </li>
        <li>
          <Link href="#" className="text-gray-500 hover:text-gray-900"><SiGithub /></Link>
        </li>
      </ul>
    </div>
  )
}

export default Footer;