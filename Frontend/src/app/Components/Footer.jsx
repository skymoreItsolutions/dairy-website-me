"use client";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {

 
  return (
    <footer className="relative   text-white pt-10  px-5 md:px-12 xl:px-32">

    <div className="absolute z-10 inset-0 bg-black/70 "></div>
    <div className="absolute   bg-[url('/images/footer/1.webp')] bg-cover bg-no-repeat inset-0  "></div>

      <div className="relative z-40">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-y-10  justify-between mb-8">
          <div className="space-y-4 lg:w-[30%]">
            <Link href="/" className="">
            <img
          src="/images/logo.png"
          alt=""
          className="w-[30%] block md:max-w-[20%]"
        />
            </Link>
            <p className="mt-4">
            "At Gaualla Thata, we combine purity with tradition to deliver fresh, wholesome dairy products that embody natural goodness and exceptional quality."
            </p>
            <div className="flex items-center text-xl gap-x-2">
              <a
                href="https://www.instagram.com/gaualla1/"
                target="_blank"
              >
                <RiInstagramFill className="text-2xl" />
              </a>
              <a
                href="https://www.facebook.com/people/Gaualla-Milk/pfbid0oAAfD3faiggskXyqdgMv7dWe7NPk4xgg8seAvZuiXhSwbv47bfSdxBXoHEEip4D3l/"
                target="_blank"
              >
                <FaFacebook className="text-2xl" />
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
              >
                <FaTwitter className="text-2xl" />
              </a>
              <a
                href="https://www.youtube.com"
                target="_blank"
              >
                <FaYoutube className="text-2xl" />
              </a>
            </div>
          </div>

          <div className="space-y-2 hidden lg:block">
            <h2 className="text-xl -ml-4 ">Our Links</h2>
            <ul className="space-y-2 list-disc">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact-us/">Contact Us</Link>
              </li>
            </ul>
          </div>

          <div className="space-y-2 hidden lg:block">
            <h2 className="text-xl -ml-4 ">Our Products</h2>

            <ul className="space-y-2 hidden lg:block list-disc">
              <li>
                <Link href="#">Milk</Link>
              </li>
              <li>
                <Link href="#">Ghee</Link>
              </li>
              <li>
                <Link href="#">Panner</Link>
              </li>
             
              <li>
                <Link href="#">combo</Link>
              </li>
            
            </ul>
          </div>

          <div className="grid grid-cols-2 lg:hidden pl-4 ">
            <div className="space-y-2 ">
              <h2 className="text-xl -ml-4 ">Our Links</h2>
              <ul className="space-y-2 list-disc">
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/contact-us/">Contact Us</Link>
              </li>
              </ul>
            </div>

            <div className="space-y-2">
              <h2 className="text-xl -ml-4 ">Our Prodcuts</h2>

              <ul className="space-y-2  list-disc">
              <li>
                <Link href="#">Milk</Link>
              </li>
              <li>
                <Link href="#">Ghee</Link>
              </li>
              <li>
                <Link href="#">Panner</Link>
              </li>
             
              <li>
                <Link href="#">combo</Link>
              </li>
              </ul>
            </div>
          </div>

          <div className="space-y-2 lg:w-[35%] xl:w-[30%] flex flex-col items-start ">
            <h2 className="text-xl  ">Our Address</h2>

            <h6>Head Office</h6>
            <p className="capitalize">#Both No 7, pocket C ,wave estate , sector 85 , Mohali ,140306 India</p>
            <div className="flex flex-col gap-y-2 ">
              <a href="tel:+918378000052">+91 8378 000052</a>
              <a href="mailto:info@Gaualla.com">info@Gaualla.com</a>
            </div>

            {/* <div className="flex justify-start  mt-5">
              <img
                src="/img/payments/Payements.webp"
                alt="Logo"
                className="h-[30px]"
              />
            </div> */}
          </div>
        </div>
      </div>

      <hr className="text-gray-400" />
      <div className="py-5 container mx-auto ">
        <div className="md:flex flex-wrap lg:justify-between items-center text-sm text-white justify-center md">
          <p className="text-center">
            © {new Date().getFullYear()} Gaualla . All rights reserved.
          </p>
          <p className="">
            <span className="flex md justify-center md">
              Designed by&nbsp;
              <a
                href="https://www.futuretouch.in/"
                target="_blank"
                rel="noopener noreferrer"
              >
                {" "}
                Skymore IT Solutions  ❤️
              </a>
            </span>
          </p>
          <div className="space-x-4 mb-2 md:mb-0  flex md justify-center md">
            <Link href="/privacy-Policy">Privacy Policy |</Link>
            <Link href="/terms-condition">Terms & Conditions |</Link>
          </div>
        </div>
      </div>
      </div>
    </footer>
  );
};

export default Footer;
