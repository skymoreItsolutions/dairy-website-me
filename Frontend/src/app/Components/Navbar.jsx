"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { FaBars, FaChevronDown, FaPlus, FaTimes } from "react-icons/fa";
import Image from "next/image";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true);

    const [openDropdown, setOpenDropdown] = useState(null);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const [isSticky, setIsSticky] = useState(false);



    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };

        window.addEventListener("scroll", handleScroll);

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div
            className={`${isSticky
                ? "main-nav fixed top-0 left-0 right-0 mx-auto z-[999]   animate-fadeInDown transition-all duration-500 w-full "
                : ""
                }`}
        >
            <nav
                className={`relative bg-white shadow w-full z-10  ${isSticky ? "bg-white  " : ""
                    }`}
            >
                <div className="px-5 bg-white lg:bg-transparent md:px-28">
                    <div className="flex justify-between items-center py-1">
                        <div className="flex-shrink-0">

                            <Link
                                href="/"
                                className="text-2xl font-bold flex items-center"

                            >
                                <img
                                    width={400}
                                    height={500}
                                    src="/images/logo.png"
                                    alt="Move It Solution Logo"
                                    className="w-40 md:w-[150px]"
                                />

                            </Link>
                        </div>
                        <ul className="hidden md:flex items-center  space-x-4">
                            <li>
                                <Link
                                    href="/"
                                    className="px-3 py-2 rounded-md text-lg  font-semibold  custom-line relative  "
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="relative custom-line  inline-block group">
                                <Link
                                    href="/about"
                                    className="px-3 py-2 rounded-md text-lg  font-semibold    flex items-center gap-2"
                                >
                                    About Us
                                </Link>


                            </li>
                            <li className=" relative inline-block ">
                                <Link
                                    href="/products"
                                    className="px-3 py-2 rounded-md text-lg  font-semibold  flex items-center gap-2"
                                // onMouseEnter={() => setIsOpen(false)}
                                // onMouseLeave={() => setIsOpen(false)}




                                >
                                    Our
                                    Products
                                </Link>

                                {/* {isOpen ? <> </> : <ul onMouseLeave={() => setIsOpen(true)} className=" absolute left-full transform -translate-x-1/2 bg-white border-b-2  shadow-md w-[300px] list-none p-0 z-[999999]  transition-opacity duration-200 ease-in-out">

                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/logistics-service-for-commercial-goods">
                                            Logistics service for commercial goods
                                        </Link>
                                    </li>
                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/containers-service">
                                            Containers service
                                        </Link>
                                    </li>
                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/transporter-service">
                                            Transporter service
                                        </Link>
                                    </li>
                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/logistics-service">
                                            Logistics service
                                        </Link>
                                    </li>
                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/parcel-services">
                                            Parcel services
                                        </Link>
                                    </li>
                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/supply-chain">
                                            Supply Chain
                                        </Link>
                                    </li>
                                    <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
                                        <Link href="/heavy-goods-transport">
                                            Heavy Goods Transport
                                        </Link>
                                    </li>

                                </ul>} */}
                            </li>
                            <li>
                                <Link
                                    href="/blog"
                                    className="px-3 py-2 rounded-md custom-line relative text-lg  font-semibold  "
                                >
                                    Blog
                                </Link>
                            </li>

                            <Link
                                href="/contact-us"
                                className="px-3 py-2 rounded-md text-lg  font-semibold  custom-line relative"
                            >
                                Contact
                            </Link>

                        </ul>
                        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
                            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
                        </button>
                    </div>
                </div>

                {isMobileMenuOpen && (
                    <div className="md:hidden bg-white shadow-lg py-4 px-6 fixed top-14 left-0 w-full">
                        <Link href="/" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                        <Link href="/about" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        <Link href="/products" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                        {/* <button onClick={() => toggleDropdown("mobile-services")} className="w-full text-left py-2 flex justify-between">
                            Our Products <FaChevronDown />
                        </button>
                        {openDropdown === "mobile-services" && (
                            <ul className="pl-4 py-2">
                                <li><Link href="/logistics-service-for-commercial-goods" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Logistics Service</Link></li>
                                <li><Link href="/containers-service" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Containers Service</Link></li>
                                <li><Link href="/transporter-service" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Transporter Service</Link></li>
                                <li><Link href="/logistics-service" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> Logistics service</Link></li>
                                <li><Link href="/parcel-services" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Parcel services</Link></li>
                                <li><Link href="/supply-chain" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> Supply Chain</Link></li>
                                <li><Link href="/heavy-goods-transport" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> Heavy Goods Transport</Link></li>
                            </ul>
                        )} */}

                        <Link href="/blog" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
                        <Link href="/contact-us" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
                    </div>
                )}

            </nav>
        </div>
    );
};

export default Navbar;
