// import React from "react";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/navigation";

// // import required modules
// import { Pagination, Autoplay } from "swiper/modules";
// export default function Testimonials() {
//   const testimonials = [
//     {
//       mainHeading: "What Our Clients Say",
//       img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
//       name: "Albert Great",
//       desc: "Thanks so much for the creams and half & half that aren’t ultra-pasteurized. I’ll use that from now on, not only in cheeses, but also in my daily diet.",
//       position: "CEO of Mart",
//     },
//     {
//       mainHeading: "What Our Clients Say",
//       img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
//       name: "Albert Great",
//       desc: "Thanks so much for the creams and half & half that aren’t ultra-pasteurized. I’ll use that from now on, not only in cheeses, but also in my daily diet.",
//       position: "CEO of Mart",
//     },
//     {
//       mainHeading: "What Our Clients Say",
//       img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
//       name: "Albert Great",
//       desc: "Thanks so much for the creams and half & half that aren’t ultra-pasteurized. I’ll use that from now on, not only in cheeses, but also in my daily diet.",
//       position: "CEO of Mart",
//     },
//     {
//       mainHeading: "What Our Clients Say",
//       img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
//       name: "Albert Great",
//       desc: "Thanks so much for the creams and half & half that aren’t ultra-pasteurized. I’ll use that from now on, not only in cheeses, but also in my daily diet.",
//       position: "CEO of Mart",
//     },
//     {
//       mainHeading: "What Our Clients Say",
//       img: "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
//       name: "Albert Great",
//       desc: "Thanks so much for the creams and half & half that aren’t ultra-pasteurized. I’ll use that from now on, not only in cheeses, but also in my daily diet.",
//       position: "CEO of Mart",
//     },
//   ];

//   return (
//   <>
//       <div className="relative py-10 md:py-16 lg:py-20 xl:mt-24">
//       <div className="text-center w-full lg:w-[70%] mx-auto px-5">
//         <h2 className="text-2xl md:text-3xl lg:text-4xl italic font-bold">
//           {testimonials[0].mainHeading}
//         </h2>
//         <p className="text-base md:text-lg mt-3 text-gray-600">
//           Our customers trust us for providing the purest and most nutritious
//           milk. They appreciate the rich taste, freshness, and quality that make
//           a difference in their daily lives. Swadeshi milk ensures health,
//           authenticity, and a promise of purity in every sip.
//         </p>
//       </div>

//       <div
//         className="Testmonails lg:h-[50vh] flex items-center mt-10 px-5 md:px-12 xl:px-32 py-8 md:py-12
//       bg-[url(/images/testmonails/bg.webp)] bg-cover bg-center rounded-lg shadow-lg"
//       >
//         <Swiper
//           loop={true}
//           autoplay={{
//             delay: 2500,
//             disableOnInteraction: false,
//           }}
//           pagination={{
//             clickable: true,
//           }}
//           modules={[Autoplay, Pagination]}
//           className="mySwiper  h-full "
//         >
//           {testimonials.map((item, index) => (
//             <SwiperSlide key={index} className="">
//               <div
//                 key={index}
//                 className="flex b flex-col md:flex-row items-center text-center md:text-left gap-6 md:gap-10 max-w-3xl mx-auto"
//               >
//                 <img
//                   src={item.img}
//                   alt="Client"
//                   className="w-16 h-16 md:w-24 md:h-24 rounded-full object-cover shadow-lg"
//                 />

//                 <div>
//                   <p className="font-serif text-sm md:text-lg lg:text-xl text-gray-800 leading-relaxed">
//                     {item.desc}
//                   </p>
//                   <div className="mt-4">
//                     <h5 className="font-semibold text-lg">{item.name}</h5>
//                     <p className="text-gray-500 text-sm">{item.position}</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>
//     </div>

//     <div>

//     </div>
//   </>
//   );
// }

"use client";
import Link from "next/link";
import React, { useState, useEffect, useRef } from "react";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";
import { MdKeyboardArrowRight } from "react-icons/md";
import { IoStarSharp } from "react-icons/io5";
import { GiCommercialAirplane } from "react-icons/gi";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

import "swiper/css";
import "swiper/css/navigation";
// import SuccessStoryAbove from "./SuccessStoryAbove";

export default function SuccessStory() {
  const prevRef = useRef(null); // Ref for the previous button
  const nextRef = useRef(null); // Ref for the next button

  const VisaAndTravelsTeam = [
    {
      img: "/img/team/Harvindersingh.webp",
      name: "Harvinder singh ",
      position: "Manager",
    },
    {
      img: "/img/team/Bhupindersingh.webp",
      name: "Bhupinder singh",
      position: "Manager",
    },
    {
      img: "/img/team/Manpreet.webp",
      name: "Manpreet singh",
      position: "Manager",
    },
    {
      img: "/img/team/Amritpal.webp",
      name: "Amritpal singh",
      position: "Manager",
    },
    {
      img: "/img/team/Kuldeeep.webp",
      name: "Kuldeeep Kaur ",
      position: "Manager",
    },
  ];

  const testmonials = [
    {
      "heading": "Exceptional Dairy Quality",
      "rating": 5,
      "desc": "The quality of milk and dairy products is unmatched. We always trust this brand for fresh, healthy, and delicious dairy every day.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Priya Mehta",
      "position": "Nutritionist"
    },
    {
      "heading": "Freshness You Can Taste",
      "rating": 5,
      "desc": "From rich, creamy milk to delightful butter, the freshness of their dairy products is evident in every bite. Our family loves it!",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Priya Mehta",
      "position": "Nutritionist"
    },
    {
      "heading": "Consistently Delicious",
      "rating": 4,
      "desc": "We’ve been using their dairy for years. The cheese and yogurt are always creamy and delicious. Our customers keep coming back for more!",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Anjali Sharma",
      "position": "Dairy Farm Manager"
    },
    {
      "heading": "Best Dairy for Our Farm",
      "rating": 4,
      "desc": "As a local dairy farmer, I trust this brand for my milk supply. The quality and consistency are exceptional. Highly recommend to all dairy enthusiasts!",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Anjali Sharma",
      "position": "Dairy Farm Manager"
    },
    {
      "heading": "The Taste of Tradition",
      "rating": 5,
      "desc": "For generations, our family has relied on this dairy for premium-quality milk and cheese. It’s the taste of tradition and quality in every product.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Emily Davis",
      "position": "Pastry Chef"
    },
    {
      "heading": "Perfect for Baking",
      "rating": 5,
      "desc": "The cream and butter from this dairy are perfect for baking. My cakes, pastries, and desserts have never tasted better.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Emily Davis",
      "position": "Pastry Chef"
    },
    {
      "heading": "Natural and Healthy",
      "rating": 5,
      "desc": "We’ve switched to organic dairy, and it’s made a huge difference. The milk is richer and healthier, and it tastes fantastic. I’m so glad we found this brand.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Lina Patel",
      "position": "Home Cook & Blogger"
    },
    {
      "heading": "Reliable Dairy Partner",
      "rating": 4,
      "desc": "As a restaurant owner, it's crucial for me to have reliable suppliers. This dairy brand consistently provides top-notch quality and service. I wouldn’t go anywhere else.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Lina Patel",
      "position": "Home Cook & Blogger"
    },
    {
      "heading": "Love Their Fresh Yogurt",
      "rating": 5,
      "desc": "The yogurt from this dairy is incredibly fresh and creamy. It’s a staple in our home, and we use it in so many recipes, from smoothies to parfaits.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Lina Patel",
      "position": "Home Cook & Blogger"
    },
    {
      "heading": "Locally Sourced, Always Fresh",
      "rating": 5,
      "desc": "We love supporting local businesses, and this dairy never disappoints. Their products are always fresh, and the flavor is unparalleled.",
      "img": "https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2021/10/team-1-150x150.jpg",
      "name": "Lina Patel",
      "position": "Local Grocery Store Owner"
    }
]

  

  const [showDec, setShowDec] = useState(110);
  const [expan, setExpand] = useState(null);

  const setExpnadHandler = (id) => {
    setExpand((prev) => (prev == id ? null : id));
  };

  return (
    <div className="relative  mt-5 lg:mt-20  py-5 md:py-10 lg:py-16   ">
      <div className="absolute bg-[url('https://el.commonsupport.com/newwp/hankcok/wp-content/uploads/2020/07/bg-2.jpg')] bg-center bg-cover inset-0   "></div>
      {/* <div className="absolute bg-gradient-to-t from-[#2c160ad2] via-[#2c160a80] to-transparent  inset-0 opacity-50"></div> */}

      <div className="absolute inset-0 bg-black/50 blur-2xl"></div>

      <div className="relative z-10  bg-cover  bg-center space-y-10 lg:space-y-16 text-white  ">
        <div className="px-5 md:pl-16 xl:pl-32 grid grid-cols-1 lg:grid-cols-3 gap-y-10 lg:gap-y-0 gap-x-5 items-center">
          {/* Left Section */}
          <div className="col-span-1 space-y-5">
            <span className="relative tracking-wider border-[3px] text-xs py-[0.3rem] md:py-2 px-4 md:px-7 font-bold border-[#eee9e3] ">
              Happy client
              <img
                src="/img/arrow.webp"
                className="absolute hidden -top-2 left-14 md:left-[60px]"
                alt="arrow"
              />
            </span>
            <h3 className="text-xl md:text-3xl xl:text-5xl font-bold">
              {/* What people say  <br /> about us */}
              What Our <br /> Clients Say
            </h3>
            <p className="text-sm md:text-base">
              Our customers trust us for providing the purest and most
              nutritious milk. They appreciate the rich taste, freshness, and
              quality that make a difference in their daily lives.
            </p>
            <div className="relative space-x-2 flex justify-start">
              <button
                ref={prevRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#62371F] hover:bg-[#62371F] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowBack className="group-hover:-translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
              <button
                ref={nextRef}
                className="w-10 h-10 md:w-12 md:h-12 text-[#62371F] hover:bg-[#62371F] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out"
              >
                <IoArrowForward className="group-hover:translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-span-2">
            <Swiper
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              onBeforeInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
              }}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              loop={true}
              modules={[Navigation, Autoplay]}
              className="mySwiper"
              breakpoints={{
                640: { slidesPerView: 1, spaceBetween: 15 },
                768: { slidesPerView: 2, spaceBetween: 20 },
                1024: { slidesPerView: 2, spaceBetween: 20 },
                1280: { slidesPerView: 2, spaceBetween: 25 },
              }}
            >
              {testmonials.map((member, index) => (
                <SwiperSlide key={index} className="pb-10 md:pb-10">
                  {/* <div className="relative h-[350px] md:h-[300px]   mx-auto md:mx-0 md:max-w-[250px]  border-2 border-white rounded">
                    <img
                      src={member.img}
                      alt={member.name}
                      className="h-full w-full object-fill drop-shadow-xl rounded"
                    />

                    <div className="absolute inset-0 flex items-end justify-center bg-[rgba(0,0,0,.1)] rounded   text-white text-center p-4">
                      <div className="relative -mb-10">
                        <h3 className="font-bold text-lg capitalize">
                          {member.name}
                        </h3>
                        <p className=" text-sm bg-white text-red-500 px-5 py-3 font-bold rounded">
                          {member.position}
                        </p>
                      </div>
                    </div>
                  </div> */}

                  <div className="bg-white shadow-xl text-black min-h-[250px] border border-gray-200 rounded-xl p-6 transition-all hover:shadow-2xl hover:border-gray-300">
  <h5 className="font-bold text-xl md:text-2xl text-gray-800">
    {member.heading}
  </h5>

  <div className="flex items-center gap-x-2 text-yellow-500 mb-2">
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
    <FaStar />
  </div>

  <p className="text-gray-600 text-sm mb-4">{member.desc}</p>

  <hr className="border-gray-200 mb-4" />

  <div className="flex justify-between items-center">
    <div className="flex items-center gap-x-3">
      <img
        src={member.img}
        alt={member.name}
        className="h-10 w-10 rounded-full object-cover"
      />
      <div>
        <h6 className="font-semibold text-gray-700">
          {member.name}
        </h6>
        <p className="text-sm text-gray-500">
          {member.position}
        </p>
      </div>
    </div>
    <div className="text-gray-400 text-sm">
      {/* Any additional content can go here */}
    </div>
  </div>
</div>

                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>

            

    </div>
  );
}
