import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaClock, FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const socialIcons = [
    { icon: <FaFacebookF />, link: "#", label: "Facebook" },
    { icon: <FaTwitter />, link: "#", label: "Twitter" },
    { icon: <FaInstagram />, link: "#", label: "Instagram" },
    { icon: <FaLinkedinIn />, link: "#", label: "LinkedIn" }
  ];

  const quickLinks = [
    "Home", "Services", "Portfolio", "Blog", "Contact"
  ];

  return (
    <footer className="bg-[#8B4513] text-[#F5F5F5]">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div className="space-y-4">
            <img
              src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9"
              alt="Company Logo"
              className="h-12 w-auto mb-4"
            />
            <h3 className="text-xl font-bold">About Us</h3>
            <p className="text-[#FFFAF0] leading-relaxed">
              We are dedicated to delivering exceptional value and innovative solutions to our clients. Our mission is to transform ideas into remarkable digital experiences that drive success.
            </p>
          </div>

          {/* Quick Links Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="hover:text-[#F5DEB3] transition-colors duration-300 inline-block
                    hover:translate-x-2 transform transition-transform"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold">Contact Us</h3>
            <div className="space-y-3">
              <p className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-[#F5DEB3]" />
                123 Business Avenue, Tech City, 12345
              </p>
              <p className="flex items-center gap-3">
                <FaPhone className="text-[#F5DEB3]" />
                +1 (555) 123-4567
              </p>
              <p className="flex items-center gap-3">
                <FaEnvelope className="text-[#F5DEB3]" />
                contact@example.com
              </p>
              <p className="flex items-center gap-3">
                <FaClock className="text-[#F5DEB3]" />
                Mon - Fri: 9:00 AM - 6:00 PM
              </p>
            </div>

            <div className="pt-4">
              <h4 className="text-lg font-semibold mb-3">Follow Us</h4>
              <div className="flex space-x-4">
                {socialIcons.map((social, index) => (
                  <a
                    key={index}
                    href={social.link}
                    aria-label={social.label}
                    className="bg-[#D2691E] p-2 rounded-full hover:bg-[#F5DEB3] 
                    hover:text-[#8B4513] transition-all duration-300 transform 
                    hover:scale-110"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-[#D2691E]">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm">
            <p>© 2024 Your Company. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="hover:text-[#F5DEB3] transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="hover:text-[#F5DEB3] transition-colors duration-300">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;