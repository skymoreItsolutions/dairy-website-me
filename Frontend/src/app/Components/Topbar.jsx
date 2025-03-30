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

const Topbar = () => {
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);

  console.log(isOpen);
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
          className="h-[70px]"
        />
          </Link>

        <div className="flex items-center gap-x-5">
          <div className="hidden lg:flex items-center  gap-x-4">
            <a href="#" className="flex items-center gap-x-2 font-semibold">
              {" "}
              <IoMdCall className="text-green-500 text-2xl" /> +91 8378 000052
            </a>
            <a href="#" className="flex items-center gap-x-2 font-semibold">
              <FaWhatsapp className="text-green-500 text-2xl" /> +91 8378 000052
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

            <button className="flex items-center gap-x-2">
              <FaRegUser className="text-2xl" /> login
            </button>
            <button className="hidden md:flex items-center gap-x-2 relative">
              {" "}
              <BsCart2 className="text-2xl" /> cart{" "}
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
