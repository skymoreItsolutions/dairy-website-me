import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaRegEnvelope,
    FaTwitter,
    FaYoutube,
} from "react-icons/fa";
import { FiPhoneCall } from "react-icons/fi";
import Link from "next/link";

const Topbar = () => {
    return (
        <>
            <div className="topbar hidden lg:block bg-[#62371f] text-white text-[14px] px-28 py-1 border-b-2 border-b-white">
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
            </div>
        </>
    );
};

export default Topbar;
