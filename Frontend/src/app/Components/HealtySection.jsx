import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import ProductCard from "./ProductCard";


export default function HealtySection() {
  const healthyProducts = [
    {
      // img: "https://crm.swadeshivip.com/public/storage/product-variant/1727955027product-4020241003170027.webp",
      img:"/images/banner/Gaualla3.webp",
      title: "Fresh Milk",
      quantity: "1L",
      description: "Pure and organic farm-fresh milk for a healthy start.",
      price: "₹50",
      rating: 4.55,
    },
    {
      img:"/images/banner/Gaualla4.webp",
      title: "Organic Cheese",
      quantity: "250g",
      description: "Rich and creamy cheese, made from pure cow milk.",
      price: "₹120",
      rating: 5.55,

    },
    {
      img:"/images/banner/Gaualla4.webp",
      title: "Natural Yogurt",
      quantity: "500g",
      description: "Delicious probiotic-rich yogurt for gut health.",
      price: "₹80",
      rating: 5.55,

    },
    {
      img:"/images/banner/Gaualla4.webp",
      title: "Pure Butter",
      quantity: "200g",
      description: "Homemade-style butter, rich in flavor and nutrition.",
      price: "₹150",
      rating: 5.55,

    },
    {
      // img: "https://crm.swadeshivip.com/public/storage/product-variant/1727955027product-4020241003170027.webp",
      img:"/images/banner/Gaualla4.webp",

      title: "Fresh Paneer",
      quantity: "500g",
      description: "Soft and fresh paneer, perfect for your favorite dishes.",
      price: "₹200",
      rating: 5.55,

    },
  ];

  return (
    <>
      <div className="px-5 md:px-12 xl:px-32  py-5 md:py-10  ">
        <h6 className="text-2xl md:text-3xl  font-bold text-center">
          Seedha Farm Se Aap Tak, Taza Aur Shuddh Dairy Ka Vaada!"
        </h6>

        <div className=" mt-8  ">
          <div className="">
          <Swiper
            className="w-full"

  slidesPerView={4}
  spaceBetween={20}
  autoplay={{ delay: 3000, disableOnInteraction: false }}
  
  loop={true}
  modules={[Autoplay]}
  breakpoints={{
    320: { slidesPerView: 1, spaceBetween: 10 }, // Mobile: 1 slide
    480: { slidesPerView: 2, spaceBetween: 15 }, // Small devices
    768: { slidesPerView: 3, spaceBetween: 15 }, // Tablets
    1024: { slidesPerView: 4, spaceBetween: 20 }, // Desktops
  }}
>
  {healthyProducts.map((product, index) => (
    <SwiperSlide key={index} className="h-full">
    <ProductCard product={product}/>
    </SwiperSlide>
  ))}
</Swiper>

          </div>
        </div>
      </div>
    </>
  );
}
