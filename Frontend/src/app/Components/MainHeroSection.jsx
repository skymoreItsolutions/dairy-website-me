"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

export default function MainHeroSection() {
  const heroSlider = [
    {
      img: "https://html.tonatheme.com/2020/Hankcok/assets/images/main-slider/image-1.jpg",
      heading: "Milk And Fresh Products",
      desc: "Dairy producers worldwide face similar challenges around animal welfare, farm profitability, food safety, and work efficiency.",
    },
    {
      img: "https://html.tonatheme.com/2020/Hankcok/assets/images/main-slider/image-2.jpg",
      heading: "Pure and Natural Dairy",
      desc: "Our dairy products are fresh, natural, and directly sourced from trusted farms, ensuring the best quality for you and your family.",
    },
  ];

  return (
    <div className="relative  h-[30vh]  md:h-[45vh]  lg:h-[60vh] xl:h-[80vh] ">

<button className="custom-prev group  absolute top-1/2 left-4 z-10 bg-[#62371F] text-white w-8 h-8 rounded-full  hidden md:flex items-center justify-center">
<FaArrowLeftLong  className="group-hover:-translate-x-1"/>

      </button>
      <button className="group custom-next absolute top-1/2 right-4 z-10 bg-[#62371F] text-white w-8 h-8 rounded-full hidden md:flex items-center justify-center">
      <FaArrowRightLong className="group-hover:translate-x-1"/>

      </button>
      <Swiper
      
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000, // Autoplay delay in milliseconds (3s)
          disableOnInteraction: false, // Keeps autoplay running even after user interaction
        }}
        
        
        loop={true}
        modules={[Navigation, Autoplay]}
 className="w-full h-full">
        {heroSlider.map((elm, index) => (
          <SwiperSlide key={index} className="relative w-full h-full">
            <div
              className="h-full  w-full bg-cover bg-center bg-opacity-80  text-white"
              style={{ backgroundImage: `url(${elm.img})` }}
            >
                <div className="absolute inset-0 bg-black/10"></div>
             <div className=" px-5 relative text-center h-full w-full flex flex-col items-center justify-center ">
             <h2 className="text-3xl md:text-5xl  xl:text-7xl font-bold text-center">{elm.heading}</h2>
             <p className="mt-4 text-center max-w-2xl">{elm.desc}</p>
             <button className="hidden mt-4 lg:flex items-center gap-x-2 bg-[#5C9457] px-8 py-2 font-semibold text-lg text-white rounded group transition-all duration-300">
              View all prodcust
              {/* <span className="  translate-x-0 opacity-50 transition-all duration-500 group-hover:opacity-100 group-hover:translate-x-2">
                <FaArrowRightLong />
              </span> */}
            </button>


             </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
