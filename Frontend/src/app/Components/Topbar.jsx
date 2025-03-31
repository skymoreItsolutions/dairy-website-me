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
        className="bg-white shadow-lg rounded-lg w-[150px] p-2 absolute z-10 -right-10 top-8 border border-gray-300"
      >
        {userLinkList.map((elm, index) => (
          <li key={index} className="px-4 py-2 hover:bg-gray-100 rounded-md">
            <Link
              href={elm.link}
              className="block uppercase text-gray-700 text-base"
            >
              {elm.name}
            </Link>
          </li>
        ))}
      </ul>
    );
  };

  return (
    <>
      {/* <div className="topbar hidden lg:block bg-[#62371f] text-white text-[14px] px-28 py-1 border-b-2 border-b-white">
                <div className="px-0 sm:px-6 md:px-10  xl:px-5 lg:px-24 mx-auto">
                    <div className="flex flex-col md:flex-row justify-between items-center py-2">
                        <div className="flex space-x-4 items-center mb-2 md:mb-0 ">
                            <ul className="flex items-end sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                                <li className="flex items-center  pr-3 mr-3 lg:mr-0">
                                    <Link href="tel:9741923310" className="flex items-center">
                                        <FiPhoneCall className="mr-2 text-white" />
                                        <span className="hover:text-white">+918378000052</span>
                                    </Link>
                                </li>
                                <li className="flex items-center">
                                    <FaRegEnvelope className="mr-2 text-white" />
                                    <Link
                                        href="mailto:info@uscargopackersandmovers.com"
                                        className="hover:text-white"
                                    >
                                        gauallamilk@gmail.com
                                    </Link>
                                </li>
                            </ul>
                        </div>

                        <div className="hidden md:flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4">


                            <ul className="flex space-x-4 items-center">
                                <li>
                                    <Link
                                        href="https://www.facebook.com/"
                                        target="_blank"
                                    >
                                        <FaFacebookF className="hover:text-white" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://twitter.com/"
                                        target="_blank"
                                    >
                                        <FaTwitter className="hover:text-white" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.instagram.com/"
                                        target="_blank"
                                    >
                                        <FaInstagram className="hover:text-white" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.linkedin.com/in/"
                                        target="_blank"
                                    >
                                        <FaLinkedinIn className="hover:text-white" />
                                    </Link>
                                </li>
                                <li>
                                    <Link
                                        href="https://www.youtube.com/"
                                        target="_blank"
                                    >
                                        <FaYoutube className="hover:text-white" />
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div> */}

      <div className="flex justify-between lg:justify-between items-center px-5 md:px-12 xl:px-32 py-2 md:py-4">
          
          <Link href='/'  className=" block" >
          <img
          src="/images/logo.png"
          alt=""
          className="h-[60px] object-cover object-center"
        />
          </Link>

        <div className="flex items-center gap-x-5">
          <div className="hidden lg:flex items-center  gap-x-4">
            <a href="tel:+918378000052" className=" flex px-4 py-2 rounded group transition-all duration-300  text-white items-center gap-x-2 font-semibold bg-[#1f8018] hover:bg-[#2a8e23]">
              {" "}
              <IoMdCall className=" text-2xl animate-bounce" /> +91 8378 000052
            </a>
            <a href="tel:+918378000052" className="flex px-4 py-2 rounded group transition-all duration-300  text-white items-center gap-x-2 font-semibold bg-[#1f8018] hover:bg-[#2a8e23]">
              <FaWhatsapp className=" text-2xl animate-bounce " /> +91 8378 000052
            </a>
            <span>|</span>
          </div>
          <div className="flex items-center gap-x-4">
            <button className="hidden lg:flex items-center gap-x-2 bg-[#62371f] px-4 py-2 font-semibold text-white rounded group transition-all duration-300">
              Get your trial Pack
              <span className="  translate-x-0 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                <FaArrowRightLong />
              </span>
            </button>

            {/* <button className="flex items-center gap-x-2 font-semibold">
              <FaRegUser className="text-xl " /> Login
              </button> */}
              <div className="relative hidden lg:block ">
              <button
                onMouseEnter={() => setUserLinkToggle(true)}
                className="relative justify-center flex items-center gap-x-2 font-semibold"
              >
                <FaRegUser className="hidden lg:block  text-3xl lg:text-xl cursor-pointer" />
                Login
                {userLinkToggle && <UserLinks />}
              </button>
            </div>


            <button className="hidden md:flex items-center gap-x-2 relative font-semibold">
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
    </>
  );
};

export default Topbar;
