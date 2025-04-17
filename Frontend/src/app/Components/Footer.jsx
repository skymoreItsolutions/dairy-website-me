
"use client";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaEnvelope, FaFacebook, FaMapMarkerAlt } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaShoppingBasket } from "react-icons/fa";
import { FaHome, FaInfoCircle, FaBoxOpen, FaBlog, FaPhone } from "react-icons/fa"
export default function Footer() {
  return (
    <>
      <section className="bg-[#355e32] pt-24 pb-8  sm:py-10 md:py-16 lg:pb-0 lg:pt-18 relative">
        <img
          src="/images/footer/newbg.png"
          alt="footer-bg"
          className="absolute object-cover w-full bottom-0 "
        />

        <div className="relative z-10 container mx-auto px-5 md:px-12 lg:px-32">
          <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-4 gap-12">
            {/* About Us */}
            <div className="lg:mb-16">
              <div className="mb-6">
                <Link href="/">
                  <img
                    src="/images/logo.png"
                    alt="Gaualla"
                    className="w-[30%] md:w-[20%] lg:w-[50%] mx-start"
                  />
                </Link>
              </div>
              <p className="text-white mb-6 text-sm md:text-base">
                "At Gaualla Thata, we combine purity with tradition to deliver fresh, wholesome dairy products that embody natural goodness and exceptional quality."
              </p>
              <div className="flex space-x-4 text-white">
                <a href="https://www.instagram.com/gaualla1/" target="_blank">
                  <RiInstagramFill className="text-2xl" />
                </a>
                <a
                  href="https://www.facebook.com/people/Gaualla-Milk/pfbid0oAAfD3faiggskXyqdgMv7dWe7NPk4xgg8seAvZuiXhSwbv47bfSdxBXoHEEip4D3l/"
                  target="_blank"
                >
                  <FaFacebook className="text-2xl" />
                </a>
              </div>
            </div>




            {/* for laptop  and tab */}
            {/* product  */}

            {/* Business Hours */}
            <div className="hidden lg:block md:mb-16">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Quick Links</h4>
              </div>
              <ul className="space-y-4 text-white">
                <li className="flex items-center space-x-2">
                  <FaHome />
                  <a href="/" className="hover:underline">Home</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaInfoCircle />
                  <a href="/about" className="hover:underline">About</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBoxOpen />
                  <a href="/products" className="hover:underline">Products</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaBlog />
                  <a href="/blogs" className="hover:underline">Blogs</a>
                </li>
                <li className="flex items-center space-x-2">
                  <FaPhone />
                  <a href="/contact-us" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>


            <div className="hidden lg:block md:mb-16">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Our Products</h4>
              </div>
              <ul className="space-y-2 text-white text-sm md:text-base">
                {[
                  "A2 Ghee",
                  "A2 Binola Ghee",
                  "A2 Desi Cow Milk",
                  "Standard Milk",
                  "A2 Paneer",
                  "A2 Dahi",
                  "A2 Butter"
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-2">
                    <FaShoppingBasket className="text-white text-sm" />
                    <Link href="#" className="hover:text-white hover:font-bold">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>




            {/* for mobile  */}
            <div className="grid grid-cols-2 lg:hidden">
              <div className=" lg:mb-16">
                <div className="mb-6">
                  <h4 className="text-white text-xl font-semibold">Our Products</h4>
                </div>
                <ul className="space-y-2 text-white text-sm md:text-base">
                  {[
                    "A2 Ghee",
                    "A2 Binola Ghee",
                    "A2 Desi Cow Milk",
                    "Standard Milk",
                    "A2 Paneer",
                    "A2 Dahi",
                    "A2 Butter"
                  ].map((item, index) => (
                    <li key={index} className="flex items-center space-x-2">
                      <FaShoppingBasket className="text-white text-sm" />
                      <Link href="#" className="hover:text-white hover:font-bold">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>

              </div>





              <div className="lg:mb-16">
                <div className="mb-6">
                  <h4 className="text-white text-xl font-semibold">Quick Links</h4>
                </div>
                <ul className="space-y-4 text-white">
                  <li className="flex items-center space-x-2">
                    <FaHome />
                    <a href="/" className="hover:underline">Home</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaInfoCircle />
                    <a href="/about" className="hover:underline">About</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaBoxOpen />
                    <a href="/products" className="hover:underline">Products</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaBlog />
                    <a href="/blogs" className="hover:underline">Blogs</a>
                  </li>
                  <li className="flex items-center space-x-2">
                    <FaPhone />
                    <a href="/contact-us" className="hover:underline">Contact</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Our Address */}
            <div className=" lg:mb-16 text-white">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Our Address</h4>
              </div>

              <h6 className="text-lg text-white">Location</h6>
              <p className="capitalize text-sm md:text-base flex items-start gap-x-2">
                <FaMapMarkerAlt className="text-xl mt-1" />    #Both No 7, Pocket C, Wave Estate, Sector 85, Mohali, 140306, India
              </p>

              <div className="flex flex-col mt-4 gap-y-2">
                <a href="tel:+918378000052" className="text-sm md:text-base flex items-start gap-x-2">
                  <FaPhone className="text-lg mt-1" />  +91 8378 000052
                </a>
                <a href="mailto:info@Gaualla.com" className="text-sm md:text-base flex items-start gap-x-2">
                  <FaEnvelope className="text-lg mt-1" />  info@Gaualla.com
                </a>
              </div>
            </div>
          </div>


          {/* <div className="py-2 relative z-10 ">
            <hr className="border-t-1 border-slate-700 mb-8" />
            <div className="md:flex flex-wrap lg:justify-between items-center text-sm text-white justify-center md">
              <p className="">
                © {new Date().getFullYear()} Gaualla. All rights reserved.
              </p>
              <p className="">
                <span className="flex justify-center">
                  Designed by&nbsp;
                  <a
                    href="https://skymoreitsolutions.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white"
                  >
                    Skymore IT Solutions ❤️
                  </a>
                </span>
              </p>
              <div className="space-x-4 mb-2 md:mb-0 flex justify-center">
                <Link href="/privacy-policy">Privacy Policy |</Link>
                <Link href="/terms-conditions">Terms & Conditions</Link>
              </div>
            </div>
          </div> */}

          <hr className="my-6 border-gray-600 " />

          <div className="md:flex justify-between items-center text-sm text-white pb-9">
            <p className="text-center ">
              ©️ {new Date().getFullYear()} Gaualla Milk . All rights reserved.
              <span className="">
                Designed by &nbsp;
                <a href="https://skymoreitsolutions.com" target="_blank" rel="noopener noreferrer">
                    Skymore IT Solutions ❤️
                </a>
              </span>
            </p>
            <div className="space-x-4 mb-2 text-center md md:mb-0">
              <Link href="/privacy-policy" className="hover:underline">
                Privacy Policy  |
              </Link>
              <Link href="/terms-and-conditions" className="hover:underline">
                Terms & Conditions |
              </Link>
            
            </div>
            <p className="text-center md:hidden">
            
             
            </p>
          </div>


        </div>
      </section>
    </>
  );
}
