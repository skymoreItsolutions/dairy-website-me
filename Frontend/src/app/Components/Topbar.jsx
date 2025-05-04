"use client";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaRegEnvelope,
  FaRegUser,
  FaTwitter,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FiMenu, FiPhoneCall } from "react-icons/fi";
import Link from "next/link";
import { BsCart2 } from "react-icons/bs";
import { IoMdCall } from "react-icons/io";
import { RxCross1 } from "react-icons/rx";

import { FaArrowRightLong } from "react-icons/fa6";
import { GrMenu } from "react-icons/gr";
import { useSelector, useDispatch } from "react-redux";
import { toggleSidebar } from "../store/slice/sidebar";
import { useState } from "react";
import ShoppingCart from "./ShoppingCart";

const Topbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  console.log(isOpen);


  const userLinkList = [
    {
      link: "/user/login",
      name: "login",
    },
    {
      link: "/user/sign-up",
      name: "sign-up",
    },
    {
      link: "/user/profile",
      name: "profile",
    },
  ];

  const [userLinkToggle, setUserLinkToggle] = useState(false);

  const UserLinks = () => {
    return (
      <ul
        onMouseLeave={() => setUserLinkToggle(false)}
        className="bg-white shadow-lg rounded-lg w-[150px] p-2 absolute z-10 -right-10 top-10 border border-gray-300"
      >
        {userLinkList.map((elm, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-100 rounded-md">
            <Link
              href={elm.link}
              className="block uppercase text-gray-700 text-xs font-semibold "
            >
              {elm.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };


  const [cart,setCart]=useState(false)
  return (
    <>
    

      <div className="flex justify-between sticky top-0 lg:justify-between bg-white items-center px-5 md:px-12 xl:px-32 py-2 md:py-4 z-[999]">
          
          <Link href='/'  className=" block" >
          <img
          src="/images/logo.png"
          alt=""
          className="h-[86px] object-cover object-center"
        />
          </Link>

        <div className="flex items-center gap-x-5">
          <div className="hidden lg:flex items-center  gap-x-4">
            <a href="tel:+918378000052" className=" flex px-4 py-2 rounded  text-white items-center gap-x-2 font-semibold bg-[#1f8018] hover:bg-[#2a8e23]">
              {" "}
              <IoMdCall className=" text-2xl " /> +91 8378 000052
            </a>
            <a href="tel:+918378000052" className="flex px-4 py-2 rounded  text-white items-center gap-x-2 font-semibold bg-[#1f8018] hover:bg-[#2a8e23]">
              <FaWhatsapp className=" text-2xl  " /> +91 8378 000052
            </a>
            <span>|</span>
          </div>
          <div className="flex items-center gap-x-4">
          
              <div className="relative hidden lg:block ">
              <Link
                // onMouseEnter={() => setUserLinkToggle(true)}
                href="/user/login"
                className="relative justify-center flex items-center gap-x-2 font-semibold"
              >
                <FaRegUser className="hidden lg:block  text-3xl lg:text-xl cursor-pointer" />
                Login
                {userLinkToggle && <UserLinks />}
              </Link>
            </div>


            <button  onClick={()=>setCart(true)} className="hidden md:flex items-center gap-x-2 relative font-semibold">
              {" "}
              <BsCart2 className="text-xl " /> 
              <span className="bg-red-500 text-xs flex items-center justify-center text-white rounded-full w-6 h-6 absolute -top-4 left-4">
                1
              </span>{" "}
            </button>
            <button
              onClick={() => dispatch(toggleSidebar())}
              className=" lg:hidden text-2xl"
            >
              {isOpen ? <RxCross1 /> : <GrMenu />}
            </button>
          </div>
        </div>
      </div>
      <ShoppingCart setCart={setCart} cart={cart}/>
    </>
  );
};

export default Topbar;
