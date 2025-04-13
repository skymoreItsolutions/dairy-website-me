

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
      link: "/products",
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

    { label: "Blogs", link: "/blogs" },
    { label: "Contact Us", link: "/contact-us" },
  ];
  const dispatch = useDispatch();

  const [openDropdown, setOpenDropdown] = useState(false);
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  const  closeMenuBar = () => {
    setOpenDropdown(false);
  
    dispatch(toggleSidebar());
  }

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
                      <Link
                       href={elm.link}
                        className="flex items-center gap-x-2"
                      >
                        {elm.label}
                        <IoIosArrowDown
                          className={`transition-transform duration-300 ${
                            openDropdown ? "rotate-180" : "rotate-0"
                          }`}
                        />
                      </Link>
                    </div>
                 
                  </>
                ) : (
                  <Link href={elm.link}      onClick={() => closeMenuBar()} className="hover:text-gray-600">
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
                  <Link
                 href={elm.link}
                    className="flex items-center gap-x-2"
                  >
                    {elm.label}
                 
                  </Link>

           
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
