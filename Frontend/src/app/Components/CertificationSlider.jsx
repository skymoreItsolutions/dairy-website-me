'use client';

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';


export const CertificationSlider = () => {
  const images = [
    "images/certificate-1.webp",
    "images/certificate-2.webp",
    "images/certificate-3.webp",
    "images/certificate-4.webp",
    "images/certificate-5.webp",
    "images/certificate-6.webp",

  ];

  return (
    <div className="w-full bg-white py-10">
      <h2 className="text-center text-3xl font-bold mb-8">Our Certifications</h2>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
 
          slidesPerView={2}
          spaceBetween={20}
         autoplay={{ delay: 3000, disableOnInteraction: false }}
      
                    loop={true}
                    modules={[Autoplay]}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
          }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} className="!flex justify-center">
              <img
                src={img}
                alt={`cert-${index}`}
                className=" w-[100px] h-[100px] lg:w-[160px] lg:h-[160px] "
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};
