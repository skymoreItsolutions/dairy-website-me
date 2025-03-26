import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Autoplay } from "swiper/modules";

export default function HeroSection() {
  const sweiperImg = [
    {
      img: "https://pravarshaindustries.com/storage/banners/2mbP6fGBb87KqrjS9JKfGYABhJuClDz6PfGA7axD.png",
    },
    {
      img: "https://pravarshaindustries.com/storage/banners/2mbP6fGBb87KqrjS9JKfGYABhJuClDz6PfGA7axD.png",
    },
    {
      img: "https://pravarshaindustries.com/storage/banners/2mbP6fGBb87KqrjS9JKfGYABhJuClDz6PfGA7axD.png",
    },
    {
      img: "https://pravarshaindustries.com/storage/banners/2mbP6fGBb87KqrjS9JKfGYABhJuClDz6PfGA7axD.png",
    },
    {
      img: "https://pravarshaindustries.com/storage/banners/2mbP6fGBb87KqrjS9JKfGYABhJuClDz6PfGA7axD.png",
    },
  ];
  return (
    <div className="px-5 md:px-12 xl:px-32 py-5 md:py-10">
      <div className="flex flex-col lg:flex-row gap-6 lg:gap-10 lg:min-h-[400px]">
        <div className="w-full lg:w-[60%] flex-grow">
          <Swiper
            pagination={{ clickable: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            loop={true}
            modules={[Pagination, Autoplay]}
            className="w-full h-full"
          >
            {sweiperImg.map((img, index) => (
              <SwiperSlide key={index} className="h-full">
                <img
                  src={img.img}
                  alt=""
                  className="w-full h-full object-cover rounded-lg"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="w-full hidden lg:flex lg:w-[30%] flex-col gap-4">
          <div className="h-1/2">
            <img
              src="https://pravarshaindustries.com/storage/banners/8RMnh6dus8t0h0pLEKWh0itHnmd09MdNl6VZN0kr.png"
              alt=""
              className="w-full h-full  rounded-lg"
            />
          </div>
          <div className="h-1/2">
            <img
              src="https://pravarshaindustries.com/storage/banners/zmOVga9kVNmsscYPpcM0QaQPpnGmj9litUULOd40.png"
              alt=""
              className="w-full h-full  rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
