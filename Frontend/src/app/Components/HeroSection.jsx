import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {
  const sweiperImg = [
   
    {
      img:"/images/banner/Gaualla5.webp"

    },
    {
      img:"/images/banner/Gaualla10.webp"

    },
    {
      img:"/images/banner/Gaualla6.webp"
    },
   
    // {
    //   img: "/images/banner/Gaualla4.webp",
    // },
    // {
    //   img: "/images/banner/Gaualla11.webp",
    // },
    // {
    //   img: "/images/banner/Gaualla3.webp",
    // },
    // {
    //   img: "/images/banner/Gaualla12.webp",
    // },
   
  ];
  
  return (
    <div className="px-5 md:px-12 xl:px-32 py-5 md:py-10">
      <div className="flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-10">
        {/* Left Section */}
        <div className="w-full lg:w-[60%] flex-grow h-full">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="w-full lg:h-full"
          >
            {sweiperImg.map((img, index) => (
              <SwiperSlide key={index} className="h-full py-4 md:py-10">
                <img
                  src={img.img}
                  alt=""
                  className="w-full min-h-[250px] max-h-[280px] lg:max-h-[330px] xl:max-h-[450px] rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Right Section */}
        <div className="w-full lg:w-[30%] flex flex-col gap-4 h-full">
          <div className="h-1/2">
            <img
              // src="https://pravarshaindustries.com/storage/banners/8RMnh6dus8t0h0pLEKWh0itHnmd09MdNl6VZN0kr.png"
              src="/images/banner/Gaualla11.webp"
              alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
          <div className="h-1/2">
            <img
              // src="https://pravarshaindustries.com/storage/banners/zmOVga9kVNmsscYPpcM0QaQPpnGmj9litUULOd40.png"
             src="/images/banner/Gaualla12.webp"

            alt=""
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
