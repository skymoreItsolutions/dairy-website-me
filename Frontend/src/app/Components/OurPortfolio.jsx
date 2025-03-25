"use client"
import Link from 'next/link';
import React from 'react';
import { FaTruck } from 'react-icons/fa';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css'; // For Swiper styles


const portfolioItems = [
    {
        imgSrc: '/images/image16.webp',
        altText: 'Local Shifting Service',
        category: 'Packers and Movers',
        title: 'Local Shifting Service',
        link: '/local-shifting-service',
    },
    {
        imgSrc: '/images/image13.webp',
        altText: 'Domestic Shifting ',
        category: 'Transport',
        title: 'Domestic Shifting ',
        link: '/domestic-shifting-service',
    },
    {
        imgSrc: '/images/image17.webp',
        altText: 'Loading Unloading ',
        category: 'Packers and Movers',
        title: 'Loading Unloading ',
        link: '/loading-unloading-service',
    },
    {
        imgSrc: '/images/05.webp',
        altText: 'International Shifting ',
        category: 'Packers and Movers',
        title: 'International Shifting ',
        link: '/international-shifting-service',
    },
    {
        imgSrc: '/images/image18.webp',
        altText: 'Office Shifting Service',
        category: 'Packers and Movers',
        title: 'Office Shifting Service',
        link: '/office-shifting-service',
    },
    {
        imgSrc: '/images/image10.webp',
        altText: 'Packing Unpacking ',
        category: 'Packers and Movers',
        title: 'Packing Unpacking ',
        link: '/packing-unpacking-service',
    },
    {
        imgSrc: '/images/image4.webp',
        altText: 'Car Transportation ',
        category: 'Packers and Movers',
        title: 'Car & Bike Shifting ',
        link: '/car-transportation-services',
    },
    {
        imgSrc: '/images/image19.webp',
        altText: 'Warehouse Service',
        category: 'Packers and Movers',
        title: 'Warehouse Service',
        link: 'warehouse-service',
    },
];

const Portfolio = () => {
    return (
        <div className="portfolio-area px-5 lg:px-24 py-20">
            {/* Background */}
            <div
                className="pa-bg"
                style={{ backgroundImage: 'url(/images/bg.webp)' }}
            ></div>

            {/* Content */}
            <div className="container mx-auto relative z-10">
                {/* Heading */}
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 bg-white text-white rounded-full p-[2px]">
                        <FaTruck className="bg-white text-white text-3xl rounded-full p-1" />
                        <span className="text-lg font-semibold pr-3">Our Portfolio</span>
                    </div>
                    <h2 className="font-bold mt-5 capitalize text-[30px] lg:text-[45px] text-dark mb-0 text-white">
                        Let's check our latest portfolio
                    </h2>
                </div>

                {/* Swiper Slider */}
                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                        delay: 3000,  // Delay between slides (in ms)
                        disableOnInteraction: false,  // Keep autoplay running after user interaction
                    }}
                    navigation={true}  // Enable navigation
                    breakpoints={{
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 30,
                        },
                    }}
                >
                    {portfolioItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="portfolio-item">
                                {/* Image */}
                                <div className="relative  rounded-[50px] overflow-hidden">
                                    <img
                                        className="w-full h-[380px] object-cover"
                                        src={item.imgSrc}
                                        alt={item.altText}
                                    />
                                    <Link
                                        href={item.link}
                                        className="absolute inset-0 bg-white bg-opacity-[0.60] flex items-center justify-center opacity-0 hover:opacity-100 transition"
                                    >
                                        <i className="far fa-plus text-white text-3xl"></i>
                                    </Link>
                                </div>


                                <div className="flex justify-between items-center p-4">
                                    <div className="">
                                        <small className="text-white uppercase font-semibold tracking-[2px] text-sm">{item.category}</small>
                                        <Link href={item.link}  >   <h4 className="text-xl text-[#62371f] font-semibold  mt-2">

                                            {item.title}
                                        </h4>
                                        </Link>

                                    </div>
                                    <Link
                                        href={item.link}
                                        className="portfolio-arrow"
                                    >
                                        <i className="fas fa-arrow-right rotate-[-40deg] transition-all"></i>
                                    </Link>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default Portfolio;
