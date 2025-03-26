'use client'

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay, A11y } from "swiper/modules";
import { motion } from "framer-motion";
import { BsPlayFill, BsPauseFill } from "react-icons/bs";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";



export const BannerSection = (props) => {
    const [isPlaying, setIsPlaying] = useState(true);
  const [swiper, setSwiper] = useState(null);

  const slides = [
    {
      id: 1,
      image: "/images/banner1.jpeg",

    },
    {
      id: 2,
      image: "/images/banner2.jpeg",
     
    },
    {
      id: 3,
      image: "/images/banner3.png",
    
    }
  ];

  const toggleAutoplay = () => {
    if (swiper) {
      if (isPlaying) {
        swiper.autoplay.stop();
      } else {
        swiper.autoplay.start();
      }
      setIsPlaying(!isPlaying);
    }
  };

    
  return(
   <>

<div className="relative w-full h-[300px] md:h-[700px] lg:h-[550px]">
      <Swiper
        onSwiper={setSwiper}
        modules={[Navigation, Pagination, Autoplay, A11y]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        loop={true}
        className="w-full h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="relative w-full h-full"
            >
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-fit transition-transform duration-300 hover:scale-105"
              />
             
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      <button
        onClick={toggleAutoplay}
        className="absolute bottom-8 right-8 z-10 bg-white bg-opacity-20 p-3 rounded-full hover:bg-opacity-30 transition-all duration-300"
        aria-label={isPlaying ? "Pause slideshow" : "Play slideshow"}
      >
        {isPlaying ? (
          <BsPauseFill className="w-6 h-6 text-white" />
        ) : (
          <BsPlayFill className="w-6 h-6 text-white" />
        )}
      </button>
    </div>
   
   </>
   )
  }



