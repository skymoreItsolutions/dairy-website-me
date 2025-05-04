"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { Swiper, SwiperSlide } from 'swiper/react';

import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import axios from "axios";
import { baseurl, imgurl } from "./common/app";


export default function FarmFreshProducts() {


const [productType,setProductType]=useState()

const fetchtype=async()=>{
  const response = await axios.get(`${baseurl}/allproduct-type`)
  setProductType(response.data)
}

useEffect(()=>{
  fetchtype()
},[])


  return (
    <div className=" ">
      <div className="px-5 md:px-12 xl:px-32  py-5 md:py-10  ">
        <h6 className="text-2xl md:text-3xl  font-bold text-center">
          Ek Hi Jagah, Sabse Taza Dairy Products
        </h6>

        <div className=" mt-8  ">
          <Swiper className="mySwiper"

            slidesPerView={1}
            spaceBetween={20}
            autoplay={{ delay: 3000, disableOnInteraction: false }}

            loop={true}
            modules={[Autoplay]}
            breakpoints={{
              320: { slidesPerView: 2, spaceBetween: 10 }, // Mobile: 1 slide
              480: { slidesPerView: 2, spaceBetween: 15 }, // Small devices
              768: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
              1024: { slidesPerView: 6, spaceBetween: 20 }, // Desktops
            }}
          >
            {productType?.map((item, index) => (
              <SwiperSlide key={index}>
                <div key={index} className="flex flex-col items-center">
                  <Link
                    href={`/${item?.title}`}
                    className="h-[140px] w-[140px] sm:h-[150px] sm:w-[150px] rounded-full flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-md"
                  >
                    <img
                      src={`${imgurl}/${item?.image}`}
                      alt={item?.title}
                      className="w-[70%] h-[70%] lg:h-[75%] lg:w-[75%] rounded-full  object-contain object-center"
                    />
                  </Link>
                  <p className="text-center  mt-3 text-2xl font-bold md:text-xl uppercase  text-gray-700">
                    {item?.title}
                  </p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="grid grid-cols-3 md:grid-cols-3 xl:flex xl:justify-between gap-4 md:gap-6"></div>
        </div>
      </div>
    </div>
  );
}
