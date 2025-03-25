'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import { FaCalendar } from 'react-icons/fa';

const latestNews = [
    {
        id: 1,
        imgSrc: '/images/pic1.jpg',
        date: '18 Aug, 2022',
        title: 'Medical Technology Innovation Center Training Center',
        description: 'New chip traps clusters of migrating tumor cells asperiortenetur, blanditiis odit.',
        author: 'Creativemela',
        authorImg: '/images/latest.jpg',
    },
    {
        id: 2,
        imgSrc: '/images/pic2.jpg',
        date: '18 Aug, 2022',
        title: 'Medical Technology Innovation Center Training Center',
        description: 'There are many variations of passages of Lorem Ipsum available.',
        author: 'Creativemela',
        authorImg: '/images/latest.jpg',
    },
];
const items = [
    {
        imgSrc: "https://cdnasd.countrydelight.in/cdproductimg/new-website/Group%2058840%403x_1675854398971.webp",
        title: "Milking Twice a Day",
        description: "We source milk from farmers on the outskirts of your city for complete freshness and purity."
    },
    {
        imgSrc: "https://cdnasd.countrydelight.in/cdproductimg/new-website/Group%2058841%403x_1675854419826.webp",
        title: "100+ Tests Everyday",
        description: "We quality test all milk for adulteration every single day."
    },
    {
        imgSrc: "https://cdnasd.countrydelight.in/cdproductimg/new-website/Group%2058842%403x_1675854450617.webp",
        title: "Pasteurization & Packing at 4°C",
        description: "Maintaining milk at 4°C improves its shelf life and prevents harmful bacteria growth."
    },
    {
        imgSrc: "https://cdnasd.countrydelight.in/cdproductimg/new-website/Group%2058849%403x_1675854448697.webp",
        title: "Assured 7 AM Doorstep Milk & Grocery Delivery",
        description: "Fresh Milk & Best quality Groceries reach your doorstep daily morning."
    }
];


export default function LatestNews() {
    return (
        <>
            <div className="px-4 lg:px-0 mb-20 mx-5 lg:mx-28">
                <div className="bg-white rounded-2xl py-8 px-5 lg:px-9 shadow-lg">
                    <h2 className="mb-2.5 text-center text-xl lg:text-2xl font-bold">
                        We are bringing Natural & Fresh back
                    </h2>
                    <p className="text-center text-gray-500 text-sm lg:text-base mb-8">
                        Better everyday health begins with the basics. We ensure everything in your kitchen has been thoroughly tested for purity and freshness.
                    </p>
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 pb-9">
                        {items.map((item, index) => (
                            <div key={index} className="flex flex-col text-center border border-dashed border-gray-300 p-4 lg:p-0">
                                <div className="w-full h-24 lg:h-28 flex justify-center items-center">
                                    <Image src={item.imgSrc} alt={item.title} width={100} height={100} className="max-w-full max-h-24" />
                                </div>
                                <h3 className="mb-2.5 font-semibold text-lg">{item.title}</h3>
                                <p className="text-gray-500 text-sm lg:text-base">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>


            <section className="px-5 py-20 lg:px-28 bg-[#fcfcf4]">
                <div className="container mx-auto text-center">
                    <div className="mb-6">
                        <span className="text-lg text-gray-500">Top News & Blog</span>
                        <h2 className="text-3xl font-bold">Our Latest News</h2>
                    </div>

                    <Swiper
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        modules={[Navigation]}
                        breakpoints={{
                            640: { slidesPerView: 1 },
                            768: { slidesPerView: 2 },
                        }}
                        className="px-5"
                    >
                        {latestNews.map((news) => (
                            <SwiperSlide key={news.id} className="p-5">
                                <div className="flex overflow-hidden bg-white">
                                    <div className="relative w-full h-64">
                                        <Image
                                            src={news.imgSrc}
                                            alt={news.title}
                                            layout="fill"
                                            objectFit="cover"
                                        />
                                    </div>
                                    <div className="p-5 text-left">

                                        <p className="text-gray-500 text-sm mb-2 w-max flex gap-2"><FaCalendar />{news.date}</p>
                                        <h4 className="text-lg font-semibold mb-2">{news.title}</h4>
                                        <p className="text-gray-600 mb-4">{news.description}</p>
                                        <div className="flex items-center gap-3">
                                            <Image
                                                src={news.authorImg}
                                                alt={news.author}
                                                width={30}
                                                height={30}
                                                className="rounded-full"
                                            />
                                            <span className="text-sm text-gray-700">By {news.author}</span>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </section>

        </>
    );
}