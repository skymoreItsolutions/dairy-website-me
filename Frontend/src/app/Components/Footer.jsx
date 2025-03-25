"use client";
import Link from "next/link";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-brown-900  px-5 lg:px-28 py-10">
      {/* Logo Section */}
      <div className="flex justify-center lg:justify-start mb-6">
        <img   src="/images/logo.png"  alt="Company Logo" width={150} height={50} />
      </div>

      <hr className="bg-gray-500 my-6 h-[2px]" />

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Quick Links</h2>
          <ul className="space-y-2">
            <li><Link href="/story" className="hover:text-yellow-300">About Us</Link></li>
            <li><Link href="/privacy-policy" className="hover:text-yellow-300">Privacy Policy</Link></li>
            <li><Link href="/terms-conditions" className="hover:text-yellow-300">Terms & Conditions</Link></li>
            <li><Link href="/faq" className="hover:text-yellow-300">FAQs</Link></li>
            <li><Link href="/contact-us" className="hover:text-yellow-300">Contact Us</Link></li>
          </ul>
        </div>

        {/* Address Section */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
          <p className="text-sm text-gray-300">Beejapuri Dairy Private Limited</p>
          <p className="text-sm text-gray-300">1234, Dairy Street, New Delhi, India</p>
          <p className="text-sm text-gray-300">Email: support@countrydelight.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
        </div>

        {/* Social Media Links */}
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4">
            <Link href="https://www.facebook.com/" target="_blank"><FaFacebook className="text-2xl hover:text-blue-500" /></Link>
            <Link href="https://www.instagram.com/" target="_blank"><FaInstagram className="text-2xl hover:text-pink-500" /></Link>
            <Link href="https://www.linkedin.com/" target="_blank"><FaLinkedin className="text-2xl hover:text-blue-700" /></Link>
            <Link href="https://www.youtube.com/" target="_blank"><FaYoutube className="text-2xl hover:text-red-600" /></Link>
            <Link href="https://twitter.com/" target="_blank"><FaTwitter className="text-2xl hover:text-blue-400" /></Link>
          </div>
        </div>
      </div>

      <hr className="bg-gray-500 my-6 h-[2px]" />

      {/* Disclaimer */}
      <div className="text-center text-sm text-gray-400">
        <p>© 2025 Beejapuri Dairy Private Limited. All Rights Reserved.</p>
        <p>Prices, availability, and offers may change based on location.</p>
      </div>
    </footer>
  );
};

export default Footer;
