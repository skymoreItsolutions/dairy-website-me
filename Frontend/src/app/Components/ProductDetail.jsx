"use client";

import React, { useState } from "react";
import { IoMdCart } from "react-icons/io";
import { FaPlus, FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import { IoArrowBack } from "react-icons/io5";
import { IoArrowForward } from "react-icons/io5";
import { Swiper, SwiperSlide } from "swiper/react";
import { FaMinus } from "react-icons/fa6";

import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import ProductCard from "./ProductCard";

export default function ProductDetail({ product }) {
  const healthyProducts = [
    {
      img: "/images/banner/Gaualla3.webp",
      title: "Fresh Milk",
      quantity: "1L",
      description: "Pure and organic farm-fresh milk for a healthy start.",
      price: "₹50",
      rating: 4.55,
    },
    {
      img: "/images/banner/Gaualla3.webp",
      title: "Organic Cheese",
      quantity: "250g",
      description: "Rich and creamy cheese, made from pure cow milk.",
      price: "₹120",
      rating: 5.55,
    },
    {
      img: "/images/banner/Gaualla3.webp",
      title: "Natural Yogurt",
      quantity: "500g",
      description: "Delicious probiotic-rich yogurt for gut health.",
      price: "₹80",
      rating: 5.55,
    },
    {
      img: "/images/banner/Gaualla3.webp",
      title: "Pure Butter",
      quantity: "200g",
      description: "Homemade-style butter, rich in flavor and nutrition.",
      price: "₹150",
      rating: 5.55,
    },
    {
      img: "/images/banner/Gaualla3.webp",
      title: "Fresh Paneer",
      quantity: "500g",
      description: "Soft and fresh paneer, perfect for your favorite dishes.",
      price: "₹200",
      rating: 5.55,
    },
  ];

  const leftImage = [
    "https://swadeshivip.com/_next/image?url=https%3A%2F%2Fcrm.swadeshivip.com%2Fpublic%2Fstorage%2Fproduct-variant%2F1730968127product-1420241107135847.webp&w=1080&q=75",
    "https://swadeshivip.com/_next/image?url=https%3A%2F%2Fcrm.swadeshivip.com%2Fpublic%2Fstorage%2Fvariant-gallery%2F8639-1730968127.webp&w=1080&q=75",
    "https://swadeshivip.com/_next/image?url=https%3A%2F%2Fcrm.swadeshivip.com%2Fpublic%2Fstorage%2Fproduct-variant%2F1730968127product-1420241107135847.webp&w=1080&q=75",
  ];

  const Description = () => {
    return (
      <div className="text-gray-600 text-wrap space-y-4">
        <p>
          In marketing, a product is an object or system made available for
          consumer use. It is anything that can be offered to a market to
          satisfy the desires or needs of consumers. Products are often referred
          to as merchandise, and in manufacturing, products are bought as
          materials and then sold as finished goods. A service is also regarded
          as a type of product. Commodities, usually raw materials such as
          metals and agricultural products, are often seen in this context, but
          a commodity can also be anything widely traded on the open market. In
          project management, the formal definition of the project deliverables
          is often referred to as the product.
        </p>
        <p>
          A product can be classified as tangible or intangible. A tangible
          product is a physical object that can be perceived by touch, such as a
          building, vehicle, or gadget. An intangible product is a product that
          can only be perceived indirectly, such as an insurance policy.
          Products can be further classified as durable or non-durable. A
          product line is a group of products that are closely related either
          because they function in a similar manner or are sold to the same
          customer groups.
        </p>
      </div>
    );
  };

  const AdditionalInfo = () => {
    return (
      <div className="overflow-x-auto">
        <table className="table-auto w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="font-semibold text-left p-3 border-b">
                Attribute
              </th>
              <th className="font-semibold text-left p-3 border-b">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="font-semibold p-3 border-b">Weight</td>
              <td className="p-3 border-b">500 g</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Dimensions</td>
              <td className="p-3 border-b">8 x 8 x 10 cm</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Product</td>
              <td className="p-3 border-b">Organic A2 Gir Cow Ghee</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Color</td>
              <td className="p-3 border-b">Golden Yellow</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Size</td>
              <td className="p-3 border-b">500 ml, 1 L</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Model</td>
              <td className="p-3 border-b">Handcrafted, Bilona Method</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Shipping</td>
              <td className="p-3 border-b">Ships within 2-4 business days</td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Care Info</td>
              <td className="p-3 border-b">
                Store in a cool, dry place. Keep away from direct sunlight.
              </td>
            </tr>
            <tr>
              <td className="font-semibold p-3 border-b">Brand</td>
              <td className="p-3 border-b">Gaualla</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const Reviews = () => {
    return (
      <div className="space-y-8">
        <h6 className="font-semibold text-wrap text-lg md:text-xl lg:text-2xl text-slate-500">
          03 reviews for “Wide Cotton Tunic Extreme Hammer”
        </h6>

        {/* Review 1 */}
        {Array(4)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              className="flex flex-col gap-y-4 items-start lg:items-start md:flex-row  justify-between border-b pb-4 mb-4"
            >
              <div className="flex  w-full gap-x-4 items-start">
                <img
                  src="https://codeskdhaka.com/html/dairypress-prev/dairypress/assets/img/product/details/review-1.jpg"
                  alt=""
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <h6 className="font-semibold uppercase text-lg">
                    Siarhei Dzenisenka
                  </h6>
                  <p className="text-gray-400">March 27, 2018 9:51 am</p>
                </div>
              </div>
              <div className="flex items-center  gap-x-2 text-yellow-500">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
              </div>
            </div>
          ))}

        {/* Add Review Section */}
        <div className="mt-6 lg:mt-8 space-y-4">
          <div>
            <h5 className="font-semibold text-lg md:text-xl lg:text-2xl">
              Add a Review
            </h5>
            <p className="text-gray-500 text-sm text-wrap">
              Your email address will not be published. Required fields are
              marked *
            </p>
          </div>

          {/* Overall Rating */}
          <div className="flex items-center gap-x-1">
            <p className="font-semibold text-lg">Overall Ratings</p>
            <div className="flex items-center gap-x-1 text-yellow-500">
              <FaStar />
              <FaStar />
              <FaStar />
              <FaStar />
              <CiStar />
            </div>
          </div>

          {/* Review Text Input */}
          <div>
            <textarea
              placeholder="Your Review"
              className="w-full p-4 h-[200px] border border-gray-300 rounded-md resize-none"
            />
          </div>

          {/* Name, Email, and Checkbox */}
          <div className="flex flex-col md:flex-row gap-5 mt-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border border-gray-300 rounded-md"
            />
          </div>

          <div className="flex items-center gap-x-2 mt-4">
            <input type="checkbox" className="h-4 w-4" />
            <label
              htmlFor="save-info"
              className="text-sm text-gray-500 text-wrap"
            >
              Save my name, email, and website in this browser for the next time
              I comment
            </label>
          </div>

          {/* Submit Button */}
          <button className="w-full md:w-auto px-5 py-2 mt-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-all">
            Submit
          </button>
        </div>
      </div>
    );
  };

  const tabs = [
    {
      label: "description",
      tab: <Description />,
    },
    {
      label: "Additional information",
      tab: <AdditionalInfo />,
    },
    {
      label: "reviews",
      tab: <Reviews />,
    },
  ];

  const [currentTab, setCurrentTab] = useState("description");

  const [cuurentimg, setCurentImage] = useState(product.imgList[0]);
  return (
    <>
      <div className="px-5 md:px-12 xl:px-32 py-5 md:py-10 lg:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-x-4">
          <div className="left-section">
            <div className=" sticky top-12 flex flex-col-reverse lg:flex-row items-center lg:items-center justify-center lg:justify-between space-y-4 overflow-x-auto">
              <div className="flex flex-row gap-y-4 lg:gap-x-4 lg:flex-col mt-8 py-8 ">
                {product.imgList?.map((elm, index) => (
                  <img
                    key={index}
                    src={elm}
                    alt="item-images"
                    onClick={() => setCurentImage(elm)}
                    className="h-[110px] w-[110px] sm:h-[150px] sm:w-[150px] rounded-full bg-[#4b2b1910] flex items-center justify-center transition-transform duration-300 hover:scale-105 shadow-md"
                  />
                ))}
              </div>

              <img
                src={cuurentimg}
                alt="main-item-image"
                className="w-[200px] lg:w-[70%]  rounded-lg shadow-lg object-cover"
              />
            </div>
          </div>

          <div className="right-section md:p-6 bg-white rounded-lg shadow-lg">
            <h5 className="font-semibold text-3xl lg:text-4xl text-gray-800">
                {product.title} {" "}
              <span className="text-green-500 text-sm">(in stock)</span>
            </h5>
            <p className="text-gray-500 mt-2">Pure and 100% Fresh</p>

            <div className="flex items-center gap-x-5 mt-4">
              <p className="font-bold text-xl text-gray-700">₹ 550</p>
              <p>
                MRP <span className="line-through text-gray-500">₹ 575</span>
              </p>
            </div>
            <p className="text-blue-500 mt-2">Inclusive of all taxes.</p>

            <p className="text-gray-800 md:text-gray-600 text-justify text-base md:text-start mt-4 leading-relaxed">
              Our 100% organic A2 Gir Cow Ghee is handcrafted using the
              3000-year-old traditional Bilona method. It is a nutrient-dense,
              preservative-free, and healthiest superfood for all age groups. A2
              Cow milk obtained from Gir cows is used to make our A2 Gir Cow
              Ghee. In Ayurveda, it is tagged as "Golden Medicine" with numerous
              medicinal benefits, preventing over 100 health issues.
            </p>

            <div className="mt-6">
              <h6 className="font-semibold text-gray-800">SIZE</h6>
              <div className="flex gap-y-2 items-center gap-x-6 mt-2 flex-wrap">
                <button className="bg-blue-100 px-6 py-2 text-gray-700 rounded-full hover:bg-blue-200 transition-all duration-300">
                  1000 ML
                </button>
                <button className="bg-blue-100 px-6 py-2 text-gray-700 rounded-full hover:bg-blue-200 transition-all duration-300">
                  500 ML
                </button>
                <button className="bg-blue-100 px-6 py-2 text-gray-700 rounded-full hover:bg-blue-200 transition-all duration-300">
                  200 ML
                </button>
              </div>
            </div>

            <div className="mt-6">
              <h6 className="font-semibold text-gray-800">Quantity</h6>
              <div className="flex items-center gap-x-4 mt-2">
                <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300">
                  <FaMinus />
                </button>
                <h6 className="text-xl text-gray-800">5</h6>
                <button className="px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-300">
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-y-2 lg:gap-y-0 lg:flex-row lg:items-center justify-between gap-x-4 mt-6">
              <div className="w-full">
                <h6 className="font-semibold text-gray-800">
                  Delivery Estimate
                </h6>
                <input
                  type="text"
                  placeholder="Enter Pincode"
                  className="border border-green-500 px-5 py-2 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 mt-2"
                />
              </div>
              <div className="">
                <h6 className="font-semibold text-gray-800">Free Shipping</h6>
                <button className="border border-green-500 px-6 py-2 rounded-md hover:bg-green-500 hover:text-white transition-all duration-300 mt-2">
                  Check
                </button>
              </div>
            </div>

            <button className="bg-green-500 w-full py-3 rounded-md uppercase flex items-center justify-center text-white font-semibold mt-8 hover:bg-green-600 transition-all duration-300">
              Add to Cart <IoMdCart className="text-xl ml-2" />
            </button>
          </div>
        </div>

        <div className="mt-6 md:mt-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-x-12">
            <div>
              <h5 className="font-bold text-2xl md:text-3xl text-gray-800 mb-4">
                Gaualla Milk: Fresh, Pure, and Nutritious for Your Family
              </h5>
              <p className="text-gray-700 mb-4 text-justify">
                At Gaualla Milk Pvt Ltd, we pride ourselves on providing the
                freshest and purest milk straight from our carefully nurtured
                cows. Our organic milk is rich in essential nutrients and free
                from any harmful chemicals or preservatives. With its natural
                goodness and superior taste, Gaualla Milk ensures your family
                enjoys the highest quality dairy products. Regular consumption
                of our fresh milk promotes a strong immune system, improved bone
                health, and overall well-being.
              </p>
              <p className="text-gray-700 text-justify">
                According to traditional wisdom and modern science, pure milk
                from free-range cows, like our Gaualla Milk, is a powerhouse of
                health benefits. It is packed with calcium, protein, and
                essential vitamins that support your heart, bones, and digestive
                system. Regular intake of Gaualla Milk can help reduce the risk
                of lifestyle diseases such as Osteoporosis, Heart Disease,
                Hypertension, and Diabetes, ensuring a healthier future for you
                and your loved ones.
              </p>
            </div>

            <div>
              <img
                src="/images/banner/Gaualla3.webp"
                alt="A2 Gir Cow Ghee"
                className="w-full lg:h-[400px] rounded-lg shadow-lg"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-8 lg:gap-x-12 mt-8">
            <div>
              <img
                src="/images/banner/Gaualla3.webp"
                alt="A2 Gir Cow Ghee"
                className="w-full lg:h-[400px] rounded-lg shadow-lg"
              />
            </div>
            <div>
              <h5 className="font-bold text-2xl md:text-3xl text-gray-800 mb-4">
                Gaualla Milk: Nature’s Purest Gift for Your Family
              </h5>
              <p className="text-gray-700 mb-4 text-justify">
                At Gaualla Milk, we are committed to delivering the finest
                quality milk, sourced directly from healthy, free-range cows.
                Our milk is 100% pure, unprocessed, and free from preservatives
                or artificial additives, ensuring that every drop you consume is
                as close to nature as possible. Known for its rich, creamy
                texture and full-bodied flavor, Gaualla Milk is the perfect
                choice for those who care about purity and nutrition.
              </p>
              <p className="text-gray-700 text-justify">
                Packed with essential nutrients such as calcium, vitamins, and
                proteins, Gaualla Milk helps in building strong bones, improving
                digestion, and boosting overall immunity. It's a vital addition
                to your daily diet, supporting not just physical strength but
                also your well-being. Whether consumed alone or as part of your
                favorite dishes, Gaualla Milk nourishes from the inside out,
                offering you and your family a healthy start to every day.
              </p>
            </div>
          </div>
        </div>

        <div className="flex lg:mt-12 flex-col lg:flex-row gap-y-8 justify-between mt-6 md:mt-8 text-nowrap">
          <div className="w-full lg:w-[20%] flex flex-col gap-y-3 font-bold text-white">
            {tabs.map((elm, index) => (
              <button
                key={index}
                onClick={() => setCurrentTab(elm.label)}
                className={` px-5 py-4 uppercase rounded ${
                  currentTab == elm.label
                    ? "text-white bg-green-500"
                    : "border text-gray-800 bg-gray-200"
                }`}
              >
                {elm.label}
              </button>
            ))}
          </div>
          <div className="w-full lg:w-[70%]">
            {tabs.map((elm, index) => {
              return (
                <div key={index}>{currentTab == elm.label && elm.tab}</div>
              );
            })}
          </div>
        </div>
      </div>

      <div className="px-5 md:px-12 xl:px-32 bg-[#f1eedf] py-8 md:py-12 xl:py-16">
        <h6 className="text-green-700 font-semibold">Related Product</h6>
        <div>
          <div className="flex justify-between">
            <h5 className="text-xl md:text-2xl lg:text-3xl xl:text-7xl font-bold capitalize text-gray-700">
              Hand-picked Items
            </h5>
            <div className="relative space-x-2 flex justify-start">
              <button className="custom-prev w-10 h-10 md:w-12 md:h-12 text-[#62371F] hover:bg-[#62371F] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out">
                <IoArrowBack className="group-hover:-translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
              <button className="custom-next w-10 h-10 md:w-12 md:h-12 text-[#62371F] hover:bg-[#62371F] hover:text-white flex items-center justify-center text-lg md:text-2xl bg-white group rounded-full transition-all duration-500 ease-in-out">
                <IoArrowForward className="group-hover:translate-x-1 transition-all duration-100 ease-in-out" />
              </button>
            </div>
          </div>
          <div className="mt-8">
            <div>
              <Swiper
                className="w-full"
                navigation={{
                  nextEl: ".custom-next",
                  prevEl: ".custom-prev",
                }}
                slidesPerView={4}
                spaceBetween={20}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                loop={true}
                modules={[Autoplay, Navigation]}
                breakpoints={{
                  320: { slidesPerView: 1, spaceBetween: 10 },
                  480: { slidesPerView: 2, spaceBetween: 15 },
                  768: { slidesPerView: 3, spaceBetween: 15 },
                  1024: { slidesPerView: 4, spaceBetween: 20 },
                }}
              >
                {healthyProducts.map((product, index) => (
                  <SwiperSlide key={index} className="h-full">
                    <ProductCard product={product} />
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
