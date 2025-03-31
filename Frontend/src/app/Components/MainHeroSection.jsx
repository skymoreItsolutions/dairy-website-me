"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import Link from "next/link";
export default function MainHeroSection() {
  const heroSlider = [
    
      {
        img: "/images/mainHero/3.webp",
        heading: "Fresh from the Farm",
        desc: "Experience the finest, freshest dairy products directly from trusted farms, delivering natural goodness in every bite.",
      },
      {
        img: "/images/mainHero/4.webp",
        heading: "Pure, Natural, and Fresh",
        desc: "We bring you fresh, pure dairy products, sourced naturally from local farms, ensuring the best quality for your family.",
      },
      {
        img: "/images/mainHero/1.webp",
        heading: "Quality Milk and Dairy",
        desc: "Our milk and dairy products are produced with care, adhering to high standards of safety, quality, and animal welfare.",
      },
      // {
      //   img: "/images/mainHero/2.webp",
      //   heading: "Farm-Fresh Dairy Excellence",
      //   desc: "We offer the finest dairy products, sourced from trusted farms, with a focus on freshness, quality, and sustainability.",
      // }
    
    
   
  
   
  ];

  return (
    <div className="relative  h-[30vh]  md:h-[45vh]  lg:h-[60vh] xl:h-[80vh]">

<button className="custom-prev group  absolute top-1/2 left-4 z-10 bg-[#62371F] hover:bg-[#5C9457] hover:text-[#fff] text-white w-10 h-10 md:w-12 md:h-12 rounded-full  hidden md:flex items-center justify-center transition-all duration-500 ease-in-out">
<FaArrowLeftLong  className="group-hover:-translate-x-1"/>

      </button>
      <button className="group custom-next absolute top-1/2 right-4 z-10 bg-[#62371F] hover:bg-[#5C9457] hover:text-[#fff] text-white w-10 h-10 md:w-12 md:h-12 rounded-full hidden md:flex items-center justify-center transition-all duration-500 ease-in-out">
      <FaArrowRightLong className="group-hover:translate-x-1"/>

      </button>
      <Swiper
      
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        autoplay={{
          delay: 3000, 
          disableOnInteraction: false, 
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
                <div className="absolute inset-0 bg-black/30"></div>
             <div className=" px-5 relative text-center h-full w-full flex flex-col items-center justify-center ">
             <h2 className="text-3xl md:text-5xl  xl:text-7xl font-bold text-center">{elm.heading&& elm.heading}</h2>
             <p className="mt-4 text-center max-w-2xl">{elm.desc && elm.desc}</p>
             <Link href="/all-product" className="hidden mt-4 lg:flex items-center gap-x-2 bg-[#1f8018] px-8 py-2 font-semibold text-lg text-white rounded group transition-all duration-300">
              View all prodcust
              
            </Link>


             </div>
            </div>
            {/* <img src={elm.img && elm.img} alt="banner"  
           className="w-full h-full  object-fill object-center" 
/> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
