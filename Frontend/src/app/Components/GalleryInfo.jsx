import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper/modules';
// Import Swiper styles
import "swiper/css";

export default function GalleryInfo() {
    const galleryInfo=[
        {
            img:"/images/banner/Gaualla2Edit.jpg"
        },
        {
            img:"/images/banner/Gaualla7.webp"
        },
       
    ]
  return (
    <div className='galleryInfo mt-5'>
        <Swiper
            loop={true}
         autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}

         className="mySwiper">
            {galleryInfo.map((elm,index)=>(
                <SwiperSlide key={index}>
                <img src={elm.img} alt="" className='w-full  h-[18vh] md:h-[30vh] lg:h-[50vh]' />

                </SwiperSlide>

            ))}
     
      </Swiper>
    </div>
  )
}
