'use client';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Image from 'next/image';
import Link from 'next/link';

const categories = [
    // { name: 'Oil', image: 'https://crm.swadeshivip.com/public/storage/category/1741591318icon.png', link: '/category/oil' },
    { name: 'Milk', image: '/images/milk1.png', link: '/category/milk' },
    { name: 'Ghee', image: '/images/ghee1.png', link: '/category/ghee' },
    { name: 'Paneer', image: '/images/paneer.png', link: '/category/paneer' },
    // { name: 'Khoya', image: 'https://crm.swadeshivip.com/public/storage/category/1738933406khoya.png', link: '/category/khoya' },
    { name: 'Dahi', image: 'https://crm.swadeshivip.com/public/storage/category/1738933381dahi.png', link: '/category/dahi' },
    { name: 'Butter Milk', image: 'https://crm.swadeshivip.com/public/storage/category/1731418305buttermilk-1.png', link: '/category/butter-milk' },
    { name: 'Honey', image: '/images/honey-1.png', link: '/category/honey' },
];

export default function PopularCategories() {
    return (
        <section className="py-20 px-5 lg:px-28" id="popular_cat">
            <div className="container mx-auto px-4">
                <div className="text-center mb-6">
                    <h2 className="text-3xl font-bold">Popular Categories</h2>
                </div>
                <Swiper
                    modules={[Navigation]}
                    spaceBetween={10}
                    slidesPerView={3}

                    breakpoints={{
                        640: { slidesPerView: 2 },
                        768: { slidesPerView: 3 },
                        1024: { slidesPerView: 5 },
                    }}
                >
                    {categories.map((category, index) => (
                        <SwiperSlide key={index}>
                            <Link href={category.link} className="block text-center">
                                <div className="bg-white p-4 transition">
                                    <div className="mb-2">
                                        <Image
                                            src={category.image}
                                            alt={category.name}
                                            width={150}
                                            height={150}
                                            className="mx-auto"
                                        />
                                    </div>
                                    <h3 className="text-lg font-semibold">{category.name}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="text-center mt-6">
                    <Link href="/category" className="view_all_btn mx-auto ">
                        View All
                    </Link>
                </div>
            </div>
        </section>
    );
}
