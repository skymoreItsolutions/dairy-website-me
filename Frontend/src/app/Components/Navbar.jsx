// "use client";
// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { FaBars, FaChevronDown, FaPlus, FaTimes } from "react-icons/fa";
// import Image from "next/image";

// const Navbar = () => {
//     const [isOpen, setIsOpen] = useState(true);

//     const [openDropdown, setOpenDropdown] = useState(null);

//     const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//     const [isSticky, setIsSticky] = useState(false);

//     const toggleDropdown = (dropdown) => {
//         setOpenDropdown(openDropdown === dropdown ? null : dropdown);
//     };

//     useEffect(() => {
//         const handleScroll = () => {
//             setIsSticky(window.scrollY > 0);
//         };

//         window.addEventListener("scroll", handleScroll);

//         return () => {
//             window.removeEventListener("scroll", handleScroll);
//         };
//     }, []);

//     return (
//         <div
//             className={`${isSticky
//                 ? "main-nav fixed top-0 left-0 right-0 mx-auto z-[999]   animate-fadeInDown transition-all duration-500 w-full "
//                 : ""
//                 }`}
//         >
//             <nav
//                 className={`relative bg-white shadow w-full z-10  ${isSticky ? "bg-white  " : ""
//                     }`}
//             >
//                 <div className="px-5 bg-white lg:bg-transparent md:px-28">
//                     <div className="flex justify-between items-center py-1">
//                         <div className="flex-shrink-0">

//                             <Link
//                                 href="/"
//                                 className="text-2xl font-bold flex items-center"

//                             >
//                                 <img
//                                     width={400}
//                                     height={500}
//                                     src="/images/logo.png"
//                                     alt="Move It Solution Logo"
//                                     className="w-40 md:w-[150px]"
//                                 />

//                             </Link>
//                         </div>
//                         <ul className="hidden md:flex items-center  space-x-4">
//                             <li>
//                                 <Link
//                                     href="/"
//                                     className="px-3 py-2 rounded-md text-lg  font-semibold  custom-line relative  "
//                                 >
//                                     Home
//                                 </Link>
//                             </li>
//                             <li className="relative custom-line  inline-block group">
//                                 <Link
//                                     href="/about"
//                                     className="px-3 py-2 rounded-md text-lg  font-semibold    flex items-center gap-2"
//                                 >
//                                     About Us
//                                 </Link>

//                             </li>
//                             <li className=" relative inline-block ">
//                                 <Link
//                                     href="/products"
//                                     className="px-3 py-2 rounded-md text-lg  font-semibold  flex items-center gap-2"
//                                 // onMouseEnter={() => setIsOpen(false)}
//                                 // onMouseLeave={() => setIsOpen(false)}

//                                 >
//                                     Our
//                                     Products
//                                 </Link>

//                                 {/* {isOpen ? <> </> : <ul onMouseLeave={() => setIsOpen(true)} className=" absolute left-full transform -translate-x-1/2 bg-white border-b-2  shadow-md w-[300px] list-none p-0 z-[999999]  transition-opacity duration-200 ease-in-out">

//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/logistics-service-for-commercial-goods">
//                                             Logistics service for commercial goods
//                                         </Link>
//                                     </li>
//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/containers-service">
//                                             Containers service
//                                         </Link>
//                                     </li>
//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/transporter-service">
//                                             Transporter service
//                                         </Link>
//                                     </li>
//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/logistics-service">
//                                             Logistics service
//                                         </Link>
//                                     </li>
//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/parcel-services">
//                                             Parcel services
//                                         </Link>
//                                     </li>
//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/supply-chain">
//                                             Supply Chain
//                                         </Link>
//                                     </li>
//                                     <li className="text-base w-full  relative px-[15px] py-2 border-b border-dashed border-[#eeeeee] mx-0 ">
//                                         <Link href="/heavy-goods-transport">
//                                             Heavy Goods Transport
//                                         </Link>
//                                     </li>

//                                 </ul>} */}
//                             </li>
//                             <li>
//                                 <Link
//                                     href="/blog"
//                                     className="px-3 py-2 rounded-md custom-line relative text-lg  font-semibold  "
//                                 >
//                                     Blog
//                                 </Link>
//                             </li>

//                             <Link
//                                 href="/contact-us"
//                                 className="px-3 py-2 rounded-md text-lg  font-semibold  custom-line relative"
//                             >
//                                 Contact
//                             </Link>

//                         </ul>
//                         <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
//                             {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
//                         </button>
//                     </div>
//                 </div>

//                 {isMobileMenuOpen && (
//                     <div className="md:hidden bg-white shadow-lg py-4 px-6 fixed top-14 left-0 w-full">
//                         <Link href="/" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
//                         <Link href="/about" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
//                         <Link href="/products" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
//                         {/* <button onClick={() => toggleDropdown("mobile-services")} className="w-full text-left py-2 flex justify-between">
//                             Our Products <FaChevronDown />
//                         </button>
//                         {openDropdown === "mobile-services" && (
//                             <ul className="pl-4 py-2">
//                                 <li><Link href="/logistics-service-for-commercial-goods" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Logistics Service</Link></li>
//                                 <li><Link href="/containers-service" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Containers Service</Link></li>
//                                 <li><Link href="/transporter-service" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Transporter Service</Link></li>
//                                 <li><Link href="/logistics-service" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> Logistics service</Link></li>
//                                 <li><Link href="/parcel-services" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Parcel services</Link></li>
//                                 <li><Link href="/supply-chain" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> Supply Chain</Link></li>
//                                 <li><Link href="/heavy-goods-transport" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}> Heavy Goods Transport</Link></li>
//                             </ul>
//                         )} */}

//                         <Link href="/blog" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Blog</Link>
//                         <Link href="/contact-us" className="block py-2" onClick={() => setIsMobileMenuOpen(false)}>Contact</Link>
//                     </div>
//                 )}

//             </nav>
//         </div>
//     );
// };

// export default Navbar;

"use client";
import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import Link from "next/link";
import { FiSearch } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { toggleSidebar } from "../store/slice/sidebar";
import { GrMenu } from "react-icons/gr";
import { RxCross1 } from "react-icons/rx";

export default function Navbar() {
  const navLinks = [
    { label: "Home", link: "/" },
    { label: "About", link: "/about" },
    {
      label: "Products",
      productList: [
        {
          productName: "Oil",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40302343_3-pehle-jaisa-kachi-ghani-mustard-oil.jpg",
        },
        {
          productName: "Milk",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/1201473_4-nandini-toned-milk.jpg",
        },
        {
          productName: "Ghee",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40106428_2-amul-pure-ghee.jpg",
        },
        {
          productName: "Paneer",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40086636_2-mother-dairy-paneer.jpg",
        },
        {
          productName: "Khoya",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40217469_3-nandini-fresh-khoa-khova.jpg",
        },
        {
          productName: "Dahi (Curd)",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/1204580_4-amul-masti-dahi.jpg",
        },
        {
          productName: "Buttermilk",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40125655_3-amul-butter-milk.jpg",
        },
        {
          productName: "Honey",
          img: "https://www.bigbasket.com/media/uploads/p/xxl/40120739_4-dabur-honey.jpg",
        },
      ],
    },
    // { label: "Our Farms", link: "/our-farms" },
    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact-us" },
  ];

  const [openDropdown, setOpenDropdown] = useState(false);
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const SideBar = () => {
    const dispatch = useDispatch();

  
    return (
      <div
        className={`fixed z-[100] inset-0 bg-black/50 transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="w-full md:w-[350px] bg-white h-full p-4">
          <div className="flex items-center justify-between">
            <img
              src="/images/logo.png"
              alt=""
              className="w-[30%] block lg:hidden "
            />

            <button
              onClick={() => dispatch(toggleSidebar())}
              className=" lg:hidden text-2xl"
            >
              {isOpen ? <RxCross1 /> : <GrMenu />}
            </button>
          </div>

          <ul className="flex pl-2 md:pl-5 flex-col items-start gap-y-5 mt-8 gap-x-5">
            {navLinks.map((elm, index) => (
              <li key={index} className="relative font-bold">
                {elm.productList ? (
                  <>
                    <div className="flex items-center justify-between">
                      <button
                        onClick={() => setOpenDropdown(!openDropdown)}
                        className="flex items-center gap-x-2"
                      >
                        {elm.label}
                        <IoIosArrowDown
                          className={`transition-transform duration-300 ${
                            openDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </button>
                    </div>
                    {/* {openDropdown && (
                      <ul className="mt-2 ml-5   ">
                        {elm.productList.map((product, i) => (
                          <li key={i} className="px-4 py-2 hover:bg-gray-100">
                            <Link
                              href={`/${product.productName.toLowerCase()}`}
                            >
                              <div className="flex items-center gap-x-2">
                                <img
                                  src={product.img}
                                  alt={product.productName}
                                  className="w-8 h-8 rounded-full"
                                />
                                {product.productName}
                              </div>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )} */}
                  </>
                ) : (
                  <Link href={elm.link} className="hover:text-gray-600">
                    {elm.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };



  const [fixed,setFixed] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setFixed(window.scrollY > 200);
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); 


  console.log(fixed)


  return (
    <>
      <div className={`hidden lg:block px-5  md:px-12 xl:px-32  w-full  py-4  ${fixed ? "lg:fixed top-0 z-[40] bg-[#fff] text-black shadow":" bg-[#62371f] text-white"}`}>
      <div className={`hidden lg:flex items-center justify-between  relative `}>
      <Link href="/" className={`${fixed?"block":"hidden"}`}>
      <img src="/images/logo.png" alt="" className={`w-[30%]  md:max-w-[12%] ${fixed?"inline-block":"hidden"}`} />

      </Link>
      <ul className={`flex items-center  gap-x-5 ${fixed?"lg:absolute left-[50%] lg:-translate-x-[60%]":"text-white"}`}>
          {navLinks.map((elm, index) => (
            <li key={index} className="relative lg:text-sm xl:text-base font-bold">
              {elm.productList ? (
                <>
                  <button
                    onClick={() => setOpenDropdown(!openDropdown)}
                    className="flex items-center gap-x-2"
                  >
                    {elm.label}
                 
                  </button>

           
                </>
              ) : (
                <Link href={elm.link} className={`${fixed?"hover:text-gray-500":"hover:text-gray-200"}  text-nowrap`}>
                  {elm.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
        <div className="relative w-[350px]">
  <input
    type="text"
    placeholder="Search product..."
    className="w-full py-2 pl-4 pr-12 border border-amber-950 rounded-lg focus:outline-none  transition duration-300 ease-in-out text-gray-700"
  />
  <button className="absolute shadow-2xl right-0 top-0 h-full w-[40px] flex items-center justify-center bg-[#1f8018] text-white rounded-r-lg hover:bg-[#159a10] transition-all duration-200 ease-in-out transform hover:scale-105">
    <FiSearch className="w-5 h-5" />
  </button>
</div>
      </div>


      
    </div>


    <SideBar />
    </>
  );
}
