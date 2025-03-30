// "use client";
// import Link from "next/link";
// import { RiInstagramFill } from "react-icons/ri";
// import { FaFacebook } from "react-icons/fa";
// import { FaTwitter } from "react-icons/fa";
// import { FaYoutube } from "react-icons/fa";

// const Footer = () => {

//   return (
//     <footer className="relative   text-white pt-10  px-5 md:px-12 xl:px-32">

//     <div className="absolute z-10 inset-0 bg-black/70 "></div>
//     <div className="absolute   bg-[url('/images/footer/1.webp')] bg-cover bg-no-repeat inset-0  "></div>

//       <div className="relative z-40">
//       <div className="container mx-auto">
//         <div className="flex flex-col lg:flex-row gap-y-10  justify-between mb-8">
//           <div className="space-y-4 lg:w-[30%]">
//             <Link href="/" className="">
//             <img
//           src="/images/logo.png"
//           alt=""
//           className="w-[30%] block md:max-w-[20%]"
//         />
//             </Link>
//             <p className="mt-4">
//             "At Gaualla Thata, we combine purity with tradition to deliver fresh, wholesome dairy products that embody natural goodness and exceptional quality."
//             </p>
//             <div className="flex items-center text-xl gap-x-2">
//               <a
//                 href="https://www.instagram.com/gaualla1/"
//                 target="_blank"
//               >
//                 <RiInstagramFill className="text-2xl" />
//               </a>
//               <a
//                 href="https://www.facebook.com/people/Gaualla-Milk/pfbid0oAAfD3faiggskXyqdgMv7dWe7NPk4xgg8seAvZuiXhSwbv47bfSdxBXoHEEip4D3l/"
//                 target="_blank"
//               >
//                 <FaFacebook className="text-2xl" />
//               </a>
//               <a
//                 href="https://www.twitter.com"
//                 target="_blank"
//               >
//                 <FaTwitter className="text-2xl" />
//               </a>
//               <a
//                 href="https://www.youtube.com"
//                 target="_blank"
//               >
//                 <FaYoutube className="text-2xl" />
//               </a>
//             </div>
//           </div>

//           <div className="space-y-2 hidden lg:block">
//             <h2 className="text-xl -ml-4 ">Our Links</h2>
//             <ul className="space-y-2 list-disc">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/blogs">Blogs</Link>
//               </li>
//               <li>
//                 <Link href="/about">About</Link>
//               </li>
//               <li>
//                 <Link href="/contact-us/">Contact Us</Link>
//               </li>
//             </ul>
//           </div>

//           <div className="space-y-2 hidden lg:block">
//             <h2 className="text-xl -ml-4 ">Our Products</h2>

//             <ul className="space-y-2 hidden lg:block list-disc">
//               <li>
//                 <Link href="#">Milk</Link>
//               </li>
//               <li>
//                 <Link href="#">Ghee</Link>
//               </li>
//               <li>
//                 <Link href="#">Panner</Link>
//               </li>

//               <li>
//                 <Link href="#">combo</Link>
//               </li>

//             </ul>
//           </div>

//           <div className="grid grid-cols-2 lg:hidden pl-4 ">
//             <div className="space-y-2 ">
//               <h2 className="text-xl -ml-4 ">Our Links</h2>
//               <ul className="space-y-2 list-disc">
//               <li>
//                 <Link href="/">Home</Link>
//               </li>
//               <li>
//                 <Link href="/blogs">Blogs</Link>
//               </li>
//               <li>
//                 <Link href="/about">About</Link>
//               </li>
//               <li>
//                 <Link href="/contact-us/">Contact Us</Link>
//               </li>
//               </ul>
//             </div>

//             <div className="space-y-2">
//               <h2 className="text-xl -ml-4 ">Our Prodcuts</h2>

//               <ul className="space-y-2  list-disc">
//               <li>
//                 <Link href="#">Milk</Link>
//               </li>
//               <li>
//                 <Link href="#">Ghee</Link>
//               </li>
//               <li>
//                 <Link href="#">Panner</Link>
//               </li>

//               <li>
//                 <Link href="#">combo</Link>
//               </li>
//               </ul>
//             </div>
//           </div>

//           <div className="space-y-2 lg:w-[35%] xl:w-[30%] flex flex-col items-start ">
//             <h2 className="text-xl  ">Our Address</h2>

//             <h6>Head Office</h6>
//             <p className="capitalize">#Both No 7, pocket C ,wave estate , sector 85 , Mohali ,140306 India</p>
//             <div className="flex flex-col gap-y-2 ">
//               <a href="tel:+918378000052">+91 8378 000052</a>
//               <a href="mailto:info@Gaualla.com">info@Gaualla.com</a>
//             </div>

//           </div>
//         </div>
//       </div>

//       <hr className="text-gray-400" />
//       <div className="py-5 container mx-auto ">
//         <div className="md:flex flex-wrap lg:justify-between items-center text-sm text-white justify-center md">
//           <p className="text-center">
//             © {new Date().getFullYear()} Gaualla . All rights reserved.
//           </p>
//           <p className="">
//             <span className="flex md justify-center md">
//               Designed by&nbsp;
//               <a
//                 href="https://skymoreitsolutions.com/"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 {" "}
//                 Skymore IT Solutions  ❤️
//               </a>
//             </span>
//           </p>
//           <div className="space-x-4 mb-2 md:mb-0  flex md justify-center md">
//             <Link href="/privacy-Policy">Privacy Policy |</Link>
//             <Link href="/terms-condition">Terms & Conditions |</Link>
//           </div>
//         </div>
//       </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
"use client";
import Link from "next/link";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <>
      <section className="bg-[#355e32] py-10 md:py-16 lg:pb-0 lg:pt-18 relative">
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
              <p className="text-[#b0b9ae] mb-6 text-sm md:text-base">
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


            <div className="hidden lg:block md:mb-16">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Our Products</h4>
              </div>
              <ul className="space-y-2 text-[#b0b9ae] text-sm md:text-base">
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Milk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Ghee
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Paneer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Fresh Milk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Curd
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Butter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Cheese
                  </Link>
                </li>
              </ul>
            </div>

         

            {/* Business Hours */} 
            <div className="hidden lg:block md:mb-16">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Business Hours</h4>
              </div>
              <div className="mb-4">
                <span className="text-[#b0b9ae]">Mon - Fri</span>
                <p className="text-white mb-4">10:00 am to 06:00 pm</p>
              </div>
              <div className="mb-4">
                <span className="text-[#b0b9ae]">Saturday (1st & 4th)</span>
                <p className="text-white mb-4">08:00 am to 04:00 pm</p>
              </div>
              <div className="flex items-center">
                <img
                  src="/images/footer/sms.png"
                  alt="footer-text"
                  className="mr-3 w-6 h-6"
                />
                <div>
                  <span className="text-[#b0b9ae]">Stay connected with us</span>
                  <a
                    href="tel:+918378000052"
                    className="text-white hover:font-bold block"
                  >
                    +91 8378 000052
                  </a>
                </div>
              </div>
            </div>

           {/* for mobile  */}
           <div className="grid grid-cols-2 lg:hidden">
           <div className=" lg:mb-16">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Our Products</h4>
              </div>
              <ul className="space-y-2 text-[#b0b9ae] text-sm md:text-base">
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Milk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Ghee
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Paneer
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Fresh Milk
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Curd
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Butter
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white hover:font-bold">
                    Gaualla Cheese
                  </Link>
                </li>
              </ul>
            </div>

         

            {/* Business Hours */} 
            <div className=" lg:mb-16">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Business Hours</h4>
              </div>
              <div className="mb-4">
                <span className="text-[#b0b9ae]">Mon - Fri</span>
                <p className="text-white mb-4">10:00 am to 06:00 pm</p>
              </div>
              <div className="mb-4">
                <span className="text-[#b0b9ae]">Saturday (1st & 4th)</span>
                <p className="text-white mb-4">08:00 am to 04:00 pm</p>
              </div>
              <div className="flex  items-center">
                <img
                  src="/images/footer/sms.png"
                  alt="footer-text"
                  className="mr-3 w-6 h-6 mb-10"
                />
                <div>
                  <span className="text-[#b0b9ae]">Stay connected with us</span>
                  <a
                    href="tel:+918378000052"
                    className="text-white hover:font-bold block"
                  >
                    +91 8378 000052
                  </a>
                </div>
              </div>
            </div>
           </div>

            {/* Our Address */}
            <div className=" lg:mb-16 text-white">
              <div className="mb-6">
                <h4 className="text-white text-xl font-semibold">Our Address</h4>
              </div>

              <h6 className="text-lg text-[#b0b9ae]">Location</h6>
              <p className="capitalize text-sm md:text-base">
                #Both No 7, Pocket C, Wave Estate, Sector 85, Mohali, 140306, India
              </p>

              <div className="flex mt-4 flex-col gap-y-2">
                <a href="tel:+918378000052" className="text-sm md:text-base">
                  +91 8378 000052
                </a>
                <a href="mailto:info@Gaualla.com" className="text-sm md:text-base">
                  info@Gaualla.com
                </a>
              </div>
            </div>
          </div>

          {/* Footer Bottom */}
          <div className="py-6 relative z-10 ">
            <hr className="border-t-1 border-slate-700 mb-8" />
            <div className="md:flex flex-wrap lg:justify-between items-center text-sm text-white justify-center md">
              <p className="text-center">
                © {new Date().getFullYear()} Gaualla. All rights reserved.
              </p>
              <p className="text-center">
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
          </div>
        </div>
      </section>
    </>
  );
}
