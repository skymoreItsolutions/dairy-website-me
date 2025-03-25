"use client";
import Image from "next/image";
import Link from "next/link";
import { FaPlane, FaShip, FaTruck } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const BlogSection = () => {
    const blogItems = [
        { img: "/images/blog-thumb-one.avif", icon: <FaPlane />, title: "A2 milk Standard milk", para: "It looks like you're referring to A2 milk and standard milk, possibly in relation to a brand or concept like Gaualla. Could you clarify what kind of content you're looking for? Are you creating a website, marketing material, or an informative article about A2 milk versus standard milk? Let me know, and I can tailor the content accordingly!" },
        { img: "/images/blog-thumb-two.avif", icon: <FaShip />, title: "A2 binola desi ghee", para: "Experience the richness of tradition with Gaualla A2 Binola Desi Ghee, made from the finest A2 milk. Our ghee is crafted with love and care, using age-old methods to ensure that you get the purest, most flavorful ghee that enhances your dishes and promotes health." },
        { img: "/images/blog-thumb-three.avif", icon: <FaTruck />, title: "A2 desi ghee", para:"Experience the richness of tradition with Gaualla A2 Binola Desi Ghee, made from the finest A2 milk. Our ghee is crafted with love and care, using age-old methods to ensure that you get the purest, most flavorful ghee that enhances your dishes and promotes health." },
        { img: "/images/blog-thumb.avif", icon: <FaPlane />, title: "A2 paneer",para:"It sounds like you're referring to content for a dish, A2 Paneer, which could be a specific type of paneer with some additional detail, like being made from A2 milk (which is often promoted as having potential health benefits compared to regular milk). Here's a suggestion for content you might want to include:" },
        { img: "/images/blog-thumb-2.avif", icon: <FaShip />, title: "A2 dahi", para:"Gaualla A2 Dahi is a premium yogurt made from pure A2 milk, sourced from indigenous Indian cow breeds known for their high nutritional value. Unlike regular yogurt, A2 Dahi contains only the A2 beta-casein protein, which is easier to digest and less likely to cause discomfort for those with lactose intolerance or dairy sensitivities. " },
        { img: "/images/butter.avif", icon: <FaTruck />, title: "A2 butter",para:"Gaualla A2 Butter is a pure and natural dairy product made from the milk of indigenous Indian cows, known for their A2 beta-casein protein. This rich and wholesome butter is not only delicious but also packed with essential nutrients, including healthy fats, omega-3 fatty acids, and fat-soluble vitamins like A, D, E, and K. Unlike regular butter, A2 Butter is easier to digest and is believed to offer various health benefits, such as improving digestion, enhancing brain function, and boosting immunity." },
    ];

    return (
        <section className="section blog cmn-animation px-5 lg:px-28 py-20">
            <div className="container mx-auto px-4">
                <div className="flex justify-center">
                    <div className="w-full max-w-2xl">
                        <div className="section__header text-center">
                            <p className="block text-sm font-bold lin text-[#62371f] tracking-[2px] uppercase relative">
                                What we do
                            </p>
                            <p className="block text-5xl my-3 font-semibold relative">
                                Experience the Enchanting Wonders of Gaualla
                            </p>
                        </div>
                    </div>
                </div>

                <Swiper
                    spaceBetween={20}
                    slidesPerView={1}
                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}
                    navigation
                    pagination={{ clickable: true }}
                    modules={[Navigation, Pagination]}
                    className="my-[30px]"
                >
                    {blogItems.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className="blog__single cmn-animation-item relative">
                                <div className="blog__single-thumb">
                                    <Link href="/blog-details">
                                        <Image src={item.img} alt="Image" width={400} height={250} className="w-full h-[500px]" />
                                    </Link>
                                </div>
                                <div className="blog__single-content p-4">
                                    <div className="blog__single-content__thumb">
                                        <span className="text-[#62371f] text-3xl">{item.icon}</span>
                                    </div>
                                    <div className="blog__single-content__content">
                                        <p>
                                            {item.para}
                                        </p>
                                        <h4>
                                            <Link href="/blog-details">{item.title}</Link>
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

                <div className="flex justify-center mt-8">
                    <div className="text-center">
                        <div className="section__cta cmn__cta">
                            <p className="block">
                            Exploring the Untouched Wonders of Gaualla
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogSection;